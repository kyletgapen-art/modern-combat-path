// ─────────────────────────────────────────────
//  MODERN COMBAT — App Logic
// ─────────────────────────────────────────────

// ── State ──────────────────────────────────────
const state = {
  mode: null,        // 'pt' | 'fight' | 'general'
  selection: null,
  // Single workout
  level:    'easy',
  time:     '45',
  equip:    'bodyweight',
  partner:  'no',
  hasBags:  'no',
  // Plan builder
  planWeeks:    '4',
  planDays:     '3',
  planTime:     '45',
  planLevel:    'easy',
  planEquip:    'bodyweight',
  planPartner:  'no',
  planHasBags:  'no',
  // Custom PT test
  customEvents: [],
};

// ── PT Score Standards ─────────────────────────
const PT_SCORES = {
  'txdps-pt': {
    title: 'TX DPS Physical Fitness Test — Minimum Standards (Male)',
    note: 'Passing = 60th percentile for 1.5-mile run and 500m row; 70th percentile for 4-minute row.',
    events: [
      {
        name: '1.5 Mile Run',
        note: 'Lower is better. Minimum passing = 60th percentile.',
        columns: ['Age', 'Passing (60th%)'],
        rows: [
          ['20–24', '11:33'],
          ['25–29', '11:45'],
          ['30–34', '12:15'],
          ['35–39', '12:50'],
          ['40–44', '13:48'],
          ['45–49', '14:52'],
          ['50+',   '15:47'],
        ],
      },
      {
        name: '500m Row Test (under 250 lbs)',
        note: 'Lower is better. Minimum passing = 60th percentile.',
        columns: ['Age', 'Passing (60th%)'],
        rows: [
          ['20–29', '1:34'],
          ['30–39', '1:37'],
          ['40–49', '1:41'],
          ['50+',   '1:46'],
        ],
      },
      {
        name: '4-Minute Row Test (meters rowed)',
        note: 'Higher is better. Minimum passing = 70th percentile.',
        columns: ['Age', '< 165 lbs', '165–249 lbs', '250+ lbs'],
        rows: [
          ['20–29', '1,049m', '1,091m', '1,146m'],
          ['30–39', '1,031m', '1,043m', '1,065m'],
          ['40–49', '1,011m', '1,022m', '1,058m'],
          ['50+',   '968m',   '981m',   '1,017m'],
        ],
      },
    ],
  },
};

// Garage equipment list — loaded from localStorage, shared between single/plan
let garageEquip = JSON.parse(localStorage.getItem('mc_garage_equip') || '[]');

function getGarageSummary() {
  if (!garageEquip.length) return 'No equipment selected';
  const labels = { db: 'Dumbbells', kb: 'Kettlebells', bb: 'Barbell', rack: 'Squat Rack', pullbar: 'Pull-up Bar', band: 'Bands', landmine: 'Landmine', sandbag: 'Sandbags' };
  return garageEquip.map(e => labels[e] || e).join(', ');
}

function updateGarageInfo() {
  const summary = getGarageSummary();
  const s1 = document.getElementById('single-garage-summary');
  const s2 = document.getElementById('plan-garage-summary');
  if (s1) s1.textContent = summary;
  if (s2) s2.textContent = summary;
}

function openGarageModal() {
  document.querySelectorAll('#garage-modal input[type="checkbox"]').forEach(cb => {
    cb.checked = garageEquip.includes(cb.value);
  });
  document.getElementById('garage-modal').style.display = 'flex';
}

function closeGarageModal() {
  document.getElementById('garage-modal').style.display = 'none';
}

function saveGarageEquip() {
  garageEquip = [...document.querySelectorAll('#garage-modal input[type="checkbox"]:checked')].map(cb => cb.value);
  localStorage.setItem('mc_garage_equip', JSON.stringify(garageEquip));
  updateGarageInfo();
  closeGarageModal();
}

let currentPlan = null;

// ── Screen Navigation ──────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
  updateTimerVisibility(id);
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.nav === id));
  // Guided session + finish screen are focus screens: hide the bottom nav
  document.body.classList.toggle('focus-mode', id === 'session' || id === 'complete');
  if (id === 'home') { updateHomeStats(); renderHomePlanCard(); }
  if (id === 'progress') renderProgress();
}

// ── Home "This month" card ─────────────────────
function updateHomeStats() {
  const now = new Date();
  const prefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-`;
  const data = getTrackerData();
  let workouts = 0, rest = 0;
  Object.keys(data).forEach(k => {
    if (!k.startsWith(prefix)) return;
    if (data[k]?.type === 'workout') workouts++;
    else if (data[k]?.type === 'rest') rest++;
  });
  const w = document.getElementById('home-stat-workouts');
  const r = document.getElementById('home-stat-rest');
  const m = document.getElementById('home-month-label');
  if (w) w.textContent = workouts;
  if (r) r.textContent = rest;
  if (m) m.textContent = MONTH_NAMES[now.getMonth()];
}

// ── Scores Panel ───────────────────────────────
function toggleScoresPanel() {
  const panel = document.getElementById('pt-scores-panel');
  if (!panel) return;
  if (panel.style.display !== 'none') { panel.style.display = 'none'; return; }
  const data = PT_SCORES[state.selection];
  if (!data) return;
  let html = `<div style="background:rgba(230,57,70,0.05);border:1px solid rgba(230,57,70,0.2);padding:16px 18px;">
    <div style="font-family:'Courier New',monospace;font-size:0.68rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--accent);margin-bottom:6px;">${data.title}</div>
    <div style="font-size:0.78rem;color:var(--muted);margin-bottom:16px;">${data.note}</div>`;
  data.events.forEach(ev => {
    html += `<div style="margin-bottom:16px;">
      <div style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;">${ev.name}</div>
      <div style="font-size:0.74rem;color:var(--muted);margin-bottom:8px;">${ev.note}</div>
      <table style="width:100%;border-collapse:collapse;font-size:0.8rem;">
        <thead><tr>${ev.columns.map(c => `<th style="text-align:left;padding:4px 8px;border-bottom:1px solid rgba(230,57,70,0.2);color:var(--accent);font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;">${c}</th>`).join('')}</tr></thead>
        <tbody>${ev.rows.map(r => `<tr>${r.map(c => `<td style="padding:4px 8px;border-bottom:1px solid rgba(255,255,255,0.05);">${c}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>`;
  });
  html += '</div>';
  panel.innerHTML = html;
  panel.style.display = 'block';
}

// ── Test / Fight Selection ─────────────────────
function selectTest(key) {
  state.mode = 'pt';
  state.selection = key;
  const test = PT_WORKOUTS[key];
  document.getElementById('plan-options-title').textContent = test ? test.name : key;
  document.getElementById('plan-options-back').setAttribute('onclick', "showScreen('pt-select')");
  document.getElementById('single-partner-wrap').style.display = 'none';
  document.getElementById('plan-partner-wrap').style.display = 'none';
  document.getElementById('single-bags-wrap').style.display = 'none';
  document.getElementById('plan-bags-wrap').style.display = 'none';
  const scoresCard = document.getElementById('scores-card');
  if (scoresCard) {
    scoresCard.style.display = PT_SCORES[key] ? 'block' : 'none';
    const panel = document.getElementById('pt-scores-panel');
    if (panel) panel.style.display = 'none';
  }
  showScreen('plan-options');
}

function selectFight(key) {
  state.mode = 'fight';
  state.selection = key;
  const fight = FIGHT_WORKOUTS[key];
  document.getElementById('plan-options-title').textContent = fight ? fight.name : key;
  document.getElementById('plan-options-back').setAttribute('onclick', "showScreen('fight-select')");
  document.getElementById('single-partner-wrap').style.display = '';
  document.getElementById('plan-partner-wrap').style.display = '';
  document.getElementById('single-bags-wrap').style.display = '';
  document.getElementById('plan-bags-wrap').style.display = '';
  showScreen('plan-options');
}

function selectGeneral(key) {
  state.mode = 'general';
  state.selection = key;
  const cat = GENERAL_WORKOUTS[key];
  document.getElementById('plan-options-title').textContent = cat ? cat.name : key;
  document.getElementById('plan-options-back').setAttribute('onclick', "showScreen('general-select')");
  // General fitness has no partner option
  document.getElementById('single-partner-wrap').style.display = 'none';
  document.getElementById('plan-partner-wrap').style.display = 'none';
  showScreen('plan-options');
}

function goToSingleWorkout() {
  const test = state.mode === 'pt' ? PT_WORKOUTS[state.selection] : FIGHT_WORKOUTS[state.selection];
  const name = test ? test.name : state.selection;
  document.getElementById('customize-title').textContent = 'Customize — ' + name;
  showScreen('customize');
}

function goToPlanBuilder() {
  const test = state.mode === 'pt' ? PT_WORKOUTS[state.selection] : FIGHT_WORKOUTS[state.selection];
  const name = test ? test.name : state.selection;
  document.getElementById('plan-builder-title').textContent = 'Build Your Plan — ' + name;
  showScreen('plan-builder');
}

// ── Toggle Button Handler ──────────────────────
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.toggle-btn');
  if (!btn || !btn.dataset.group) return;
  const group = btn.dataset.group;
  const value = btn.dataset.value;
  document.querySelectorAll(`.toggle-btn[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (group in state) state[group] = value;

  // Show garage info row when garage is selected, open modal
  if (group === 'equip') {
    const info = document.getElementById('single-garage-info');
    if (info) info.style.display = value === 'garage' ? 'block' : 'none';
    if (value === 'garage') { updateGarageInfo(); openGarageModal(); }
  }
  if (group === 'planEquip') {
    const info = document.getElementById('plan-garage-info');
    if (info) info.style.display = value === 'garage' ? 'block' : 'none';
    if (value === 'garage') { updateGarageInfo(); openGarageModal(); }
  }
});

// ── Single Workout Generator ───────────────────
function generateSingleWorkout() {
  if (!state.selection) return;

  // Map fitness level to a phase for single workouts
  const levelPhaseMap = { easy: 'foundation', average: 'build', difficult: 'power', 'very-difficult': 'peak' };
  const phaseKey = levelPhaseMap[state.level] || 'foundation';
  const phase = PHASES[phaseKey];

  const config = {
    mode: state.mode, selection: state.selection,
    level: state.level, equip: state.equip, partner: state.partner,
    garageEquip,
  };

  let workout;
  if (state.mode === 'pt') {
    workout = buildPTDay(state.selection, 'simulation', phase, config);
  } else if (state.mode === 'general') {
    workout = buildGeneralDay(state.selection, phase, config);
  } else {
    const dayType = state.hasBags === 'yes' ? 'bag' : 'strength';
    workout = buildFightDay(state.selection, dayType, phase, config);
  }

  if (!workout) return;

  const lookup = state.mode === 'pt' ? PT_WORKOUTS[state.selection]
    : state.mode === 'general' ? GENERAL_WORKOUTS[state.selection]
    : FIGHT_WORKOUTS[state.selection];
  const name = lookup ? lookup.name : state.selection;
  const levelLabel = { easy: 'Easy', average: 'Average', difficult: 'Difficult', 'very-difficult': 'Very Difficult' }[state.level] || capitalize(state.level);
  document.getElementById('workout-title').textContent = name + ' — ' + levelLabel;

  const modeLabel = { pt: 'PT Test Prep', fight: 'Fight Night', general: 'General Fitness' }[state.mode] || '';
  const equipLabel = { bodyweight: 'Bodyweight', garage: 'Garage Gym', full: 'Full Gym' }[state.equip] || state.equip;
  const metaTags = {
    level: levelLabel,
    type: modeLabel,
    equip: equipLabel,
  };
  if (state.mode === 'fight') metaTags.partner = state.partner === 'yes' ? 'With Partner' : 'Solo';
  if (state.mode === 'fight' && state.hasBags === 'yes') metaTags.bags = 'Bags & Pads';

  const metaHTML = Object.values(metaTags).map(v => `<span class="meta-tag">${v}</span>`).join('');
  document.getElementById('workout-output').innerHTML =
    `<div class="workout-meta">${metaHTML}</div>` + renderNotice(workout.notice) + renderWorkoutSections(workout.sections);
  resetAddToLogBtn();

  showScreen('workout');
}

// ── Plan Builder ───────────────────────────────
function buildPlan() {
  if (!state.selection) return;

  const config = {
    mode:        state.mode,
    selection:   state.selection,
    daysPerWeek: parseInt(state.planDays),
    totalWeeks:  parseInt(state.planWeeks),
    level:       state.planLevel,
    equip:       state.planEquip,
    partner:     state.planPartner,
    hasBags:     state.planHasBags,
    garageEquip,
  };

  currentPlan = generatePlan(config);
  currentPlan.id = Date.now();
  currentPlan.level = state.planLevel;
  renderPlan(currentPlan);
  showScreen('plan-output');
}

function renderPlan(plan) {
  document.getElementById('plan-output-title').textContent = plan.title;

  const metaTags = [
    plan.totalWeeks + ' weeks',
    plan.daysPerWeek + ' days/week',
    { easy: 'Easy', average: 'Average', difficult: 'Difficult', 'very-difficult': 'Very Difficult' }[plan.level || state.planLevel] || capitalize(plan.level || state.planLevel),
  ].filter(Boolean).map(v => `<span class="meta-tag">${v}</span>`).join('');

  let html = `<div class="plan-meta">${metaTags}</div>`;

  // Phase progression chart — bar height rises with intensity
  const usedPhases = [...new Set(plan.weeks.map(w => w.phase))];
  html += `
    <div class="phase-strip">
      <div class="eyebrow">Phase progression</div>
      <div class="phase-bars">
        ${plan.weeks.map(w => `
          <div class="phase-bar" title="Week ${w.weekNum}: ${w.phaseLabel}">
            <div class="phase-bar-fill ${w.phase}"></div>
            <div class="phase-bar-label">W${w.weekNum}</div>
          </div>`).join('')}
      </div>
      <div class="phase-legend">${usedPhases.map(p => `<span>${PHASES[p].label}</span>`).join('')}</div>
    </div>`;

  plan.weeks.forEach(week => {
    const badgeClass = week.phase === 'taper' ? 'taper' : week.phase === 'peak' ? 'peak' : '';
    const openClass = week.weekNum === 1 ? ' open' : '';
    html += `
      <div class="week-card${openClass}" id="week-${week.weekNum}">
        <div class="week-header" onclick="toggleWeek(${week.weekNum})">
          <div class="week-header-left">
            <div>
              <div class="week-number">Week ${week.weekNum}</div>
              <div class="week-title">${week.phaseLabel}</div>
              <div class="week-theme">${week.theme}</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:12px">
            <span class="phase-badge ${badgeClass}">${week.phaseLabel}</span>
            <span class="week-toggle">▼</span>
          </div>
        </div>
        <div class="week-body">
          ${week.days.map((day, di) => renderDayRow(day, week.weekNum, di)).join('')}
        </div>
      </div>`;
  });

  document.getElementById('plan-output').innerHTML = html;
  decoratePlanOutput(plan);
}

function renderDayRow(day, weekNum, dayIndex) {
  const id = `w${weekNum}d${dayIndex}`;
  if (day.type === 'rest') {
    return `
      <div class="day-row rest">
        <div class="day-row-header">
          <div class="day-dot"></div>
          <div class="day-name">${day.dayOfWeek}</div>
          <div class="day-focus">Rest & Recovery</div>
        </div>
      </div>`;
  }

  const workoutHTML = day.workout ? renderWorkoutSections(day.workout.sections) : '';
  const phaseNote = day.workout && day.workout.phaseNote
    ? `<div class="day-phase-note">${day.workout.phaseNote}</div>` : '';

  return `
    <div class="day-row" id="${id}">
      <div class="day-row-header" onclick="toggleDay('${id}')">
        <div class="day-dot"></div>
        <div class="day-name">${day.dayOfWeek}</div>
        <div class="day-focus">${day.focus}</div>
        <div class="day-expand-icon">▼</div>
      </div>
      <div class="day-workout">
        ${phaseNote}
        ${renderNotice(day.workout && day.workout.notice)}
        ${workoutHTML}
      </div>
    </div>`;
}


// ── Accordion Toggles ──────────────────────────
function toggleWeek(num) {
  const card = document.getElementById('week-' + num);
  if (card) card.classList.toggle('open');
}

function toggleDay(id) {
  const row = document.getElementById(id);
  if (row) row.classList.toggle('open');
}

// ── Print / PDF ────────────────────────────────
function printPlan() {
  // Expand all weeks and days before printing
  document.querySelectorAll('.week-card').forEach(c => c.classList.add('open'));
  document.querySelectorAll('.day-row').forEach(r => r.classList.add('open'));
  window.print();
}

// ── Custom PT Test ─────────────────────────────
function addCustomEvent() {
  const nameInput = document.getElementById('event-name-input');
  const goalInput = document.getElementById('event-goal-input');
  const name = nameInput.value.trim();
  const goal = goalInput.value.trim();
  if (!name) { nameInput.focus(); return; }
  state.customEvents.push({ name, goal });
  nameInput.value = '';
  goalInput.value = '';
  nameInput.focus();
  renderCustomEventsList();
}

function removeCustomEvent(index) {
  state.customEvents.splice(index, 1);
  renderCustomEventsList();
}

function renderCustomEventsList() {
  const list = document.getElementById('custom-events-list');
  list.innerHTML = state.customEvents.map((ev, i) => `
    <div class="event-item">
      <div class="event-item-info">
        <div class="event-item-name">${ev.name}</div>
        ${ev.goal ? `<div class="event-item-goal">Goal: ${ev.goal}</div>` : ''}
      </div>
      <button class="remove-event-btn" onclick="removeCustomEvent(${i})">✕</button>
    </div>`).join('');
}

function saveAndTrainCustomTest() {
  if (!state.customEvents.length) { alert('Add at least one event.'); return; }
  const testName = document.getElementById('custom-test-name').value.trim() || 'My PT Test';
  const saved = getSavedTests();
  const newTest = { id: Date.now(), name: testName, events: [...state.customEvents], savedAt: new Date().toLocaleDateString() };
  saved.push(newTest);
  localStorage.setItem('mc_custom_tests', JSON.stringify(saved));
  registerCustomTest(newTest);
}

function registerCustomTest(test) {
  const exercises = test.events.map(e => ({
    name: e.name,
    note: e.goal ? 'Target: ' + e.goal : 'Train to your standard',
    prescription: 'Build progressively',
  }));
  PT_WORKOUTS['__custom__'] = {
    name: test.name,
    events: test.events.map(e => e.name),
    beginner:     { 30: exercises, 45: exercises, 60: exercises, 90: exercises },
    intermediate: { 30: exercises, 45: exercises, 60: exercises, 90: exercises },
    advanced:     { 30: exercises, 45: exercises, 60: exercises, 90: exercises },
  };
  state.mode = 'pt';
  state.selection = '__custom__';
  document.getElementById('plan-options-title').textContent = test.name;
  document.getElementById('plan-options-back').setAttribute('onclick', "showScreen('custom-test')");
  document.getElementById('single-partner-wrap').style.display = 'none';
  document.getElementById('plan-partner-wrap').style.display = 'none';
  showScreen('plan-options');
}

function getSavedTests() {
  try { return JSON.parse(localStorage.getItem('mc_custom_tests')) || []; } catch { return []; }
}

function loadSavedTests() {
  const panel = document.getElementById('saved-tests-panel');
  const list  = document.getElementById('saved-tests-list');
  const tests = getSavedTests();
  list.innerHTML = tests.length
    ? tests.map(t => `
        <div class="saved-test-item">
          <div>
            <div style="font-weight:600">${t.name}</div>
            <div style="font-size:0.8rem;color:var(--muted)">${t.events.length} events · Saved ${t.savedAt}</div>
          </div>
          <div class="saved-test-actions">
            <button class="load-btn" onclick="loadTestById(${t.id})">Load</button>
            <button class="delete-btn" onclick="deleteTestById(${t.id})">Delete</button>
          </div>
        </div>`).join('')
    : '<p style="color:var(--muted);font-size:0.88rem">No saved tests yet.</p>';
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function loadTestById(id) {
  const test = getSavedTests().find(t => t.id === id);
  if (!test) return;
  state.customEvents = [...test.events];
  document.getElementById('custom-test-name').value = test.name;
  renderCustomEventsList();
  document.getElementById('saved-tests-panel').style.display = 'none';
}

function deleteTestById(id) {
  localStorage.setItem('mc_custom_tests', JSON.stringify(getSavedTests().filter(t => t.id !== id)));
  loadSavedTests();
}

// ── Exercise Refresh ───────────────────────────
function refreshExercise(btn) {
  const row = btn.closest('.exercise-row');
  if (!row) return;
  const poolKey = row.dataset.poolKey;
  const pool = resolvePool(poolKey);
  if (!pool || pool.length < 2) return;

  // Exclude every exercise already visible in this section
  const shownNames = new Set(
    [...document.querySelectorAll(`.exercise-row[data-pool-key="${poolKey}"] .exercise-name`)]
      .map(el => el.textContent.trim())
  );
  let available = pool.filter(ex => !shownNames.has((ex.name || ex).trim()));
  // Fallback: pool exhausted — only exclude the current exercise
  if (!available.length) {
    const currentName = row.querySelector('.exercise-name')?.textContent.trim() || '';
    available = pool.filter(ex => (ex.name || ex).trim() !== currentName);
  }
  if (!available.length) return;

  const pick = available[Math.floor(Math.random() * available.length)];
  let ex = typeof pick === 'string'
    ? { name: pick, note: 'Work this combo the full round', prescription: row.querySelector('.exercise-prescription')?.textContent || '3 min' }
    : { ...pick };

  // Apply difficulty prescription scaling for general categories
  const parts = poolKey.split(':');
  if (parts[0] === 'general') {
    const selection = parts[1];
    const level = currentPlan?.level || state.level || 'easy';
    ex.prescription = scalePrescription(ex, level, selection);
  }

  const nameEl = row.querySelector('.exercise-name');
  const noteEl = row.querySelector('.exercise-note');
  const rxEl   = row.querySelector('.exercise-prescription');

  if (nameEl) nameEl.textContent = ex.name || '';
  if (noteEl) noteEl.textContent = ex.note || '';
  if (rxEl && ex.prescription) rxEl.textContent = ex.prescription;

  row.classList.add('row-refreshed');
  setTimeout(() => row.classList.remove('row-refreshed'), 500);
}

const WARMUP_POOL_MAP = {
  'warmup:squat':        () => WARMUPS_LOWER,
  'warmup:hinge':        () => WARMUPS_LOWER,
  'warmup:carry':        () => WARMUPS_LOWER,
  'warmup:push':         () => WARMUPS_UPPER,
  'warmup:pull':         () => WARMUPS_UPPER,
  'warmup:core':         () => WARMUPS_CORE,
  'warmup:conditioning': () => WARMUPS_CONDITIONING,
  'warmup:track-day':    () => WARMUPS_TRACK,
  'warmup:specialty':    () => WARMUPS_SPECIALTY,
  'warmup:fight':        () => WARMUPS_FIGHT,
  'warmup:pt':           () => WARMUPS_CONDITIONING,
  'warmup:general':      () => WARMUPS_FIGHT,
  'warmup:active':       () => WARMUPS_FIGHT,
  'warmup:mt':           () => WARMUPS_FIGHT,
};

function resolvePool(poolKey) {
  if (!poolKey) return null;
  if (poolKey === 'mt-combos')  return MT_COMBOS;
  if (poolKey === 'mt-drills')  return MT_DRILLS.map(d => ({ name: d.name, note: d.desc }));
  if (poolKey.startsWith('bjj-drills:'))  return BJJ_DRILLS[poolKey.split(':')[1]] || null;
  if (poolKey.startsWith('judo-drills:')) return JUDO_DRILLS[poolKey.split(':')[1]] || null;
  if (WARMUP_POOL_MAP[poolKey]) return WARMUP_POOL_MAP[poolKey]();
  const parts = poolKey.split(':');
  if (parts[0] === 'pt') {
    const [, sel, lv, bucket] = parts;
    return PT_WORKOUTS[sel]?.[lv]?.[parseInt(bucket)] || null;
  }
  if (parts[0] === 'general') {
    const [, cat] = parts;
    const catData = GENERAL_WORKOUTS[cat];
    if (!catData) return null;
    // All difficulty levels combined — difficulty only affects sets/reps scaling
    const raw = [
      ...(catData.beginner    || []),
      ...(catData.intermediate || []),
      ...(catData.advanced    || []),
    ];
    const equip = currentPlan?.equip || state.equip || 'full';
    const ge = currentPlan?.garageEquip || garageEquip || [];
    return filterByEquip(raw, equip, ge);
  }
  if (parts[0] === 'fight') {
    const [, sel, type, lv] = parts;
    return FIGHT_WORKOUTS[sel]?.[type]?.[lv] || null;
  }
  return null;
}

// ── Set / Rep Adjustment ───────────────────────
function adjustPrescription(btn, delta, type) {
  const row = btn.closest('.exercise-row');
  if (!row) return;
  const rxEl = row.querySelector('.exercise-prescription');
  if (!rxEl) return;
  let text = rxEl.textContent;

  if (type === 'sets') {
    text = text.replace(/(\d+)\s*[×x]/, (m, n) => `${Math.max(1, parseInt(n) + delta)} ×`);
  } else if (type === 'reps') {
    text = text.replace(/[×x]\s*(\d+)/, (m, n) => `× ${Math.max(1, parseInt(n) + delta)}`);
  } else if (type === 'time') {
    text = text.replace(/(\d+)\s*min/, (m, n) => `${Math.max(1, parseInt(n) + delta)} min`);
  }
  rxEl.textContent = text;
  row.classList.add('row-adjusted');
  setTimeout(() => row.classList.remove('row-adjusted'), 400);
}

// Health / safety note shown above a workout (e.g. Specialty)
function renderNotice(text) {
  return text ? `<div class="workout-notice" role="note"><strong>Health note</strong>${text}</div>` : '';
}

// ── Render workout sections with refresh + adjust ──
function renderWorkoutSections(sections) {
  return sections.map(section => {
    const poolKey = section.poolKey || '';
    const isTimed = section.heading.toLowerCase().includes('bag') ||
                    section.heading.toLowerCase().includes('round');

    const rows = section.items.map(ex => {
      const hasNumeric = /\d+\s*[×x]\s*\d+/.test(ex.prescription || '');
      const hasTimed   = /\d+\s*min/.test(ex.prescription || '') && !hasNumeric;

      const adjBtns = hasNumeric ? `
        <div class="adj-group">
          <div class="adj-pair">
            <span class="adj-label">Sets</span>
            <button class="adj-btn" onclick="adjustPrescription(this,-1,'sets')">−</button>
            <button class="adj-btn" onclick="adjustPrescription(this,1,'sets')">+</button>
          </div>
          <div class="adj-pair">
            <span class="adj-label">Reps</span>
            <button class="adj-btn" onclick="adjustPrescription(this,-1,'reps')">−</button>
            <button class="adj-btn" onclick="adjustPrescription(this,1,'reps')">+</button>
          </div>
        </div>` : hasTimed ? `
        <div class="adj-group">
          <div class="adj-pair">
            <span class="adj-label">Min</span>
            <button class="adj-btn" onclick="adjustPrescription(this,-1,'time')">−</button>
            <button class="adj-btn" onclick="adjustPrescription(this,1,'time')">+</button>
          </div>
        </div>` : '';

      return `
        <div class="exercise-row" data-pool-key="${poolKey}">
          <div class="exercise-main">
            <div class="exercise-name">${ex.name}</div>
            ${ex.note ? `<div class="exercise-note">${ex.note}</div>` : ''}
            ${adjBtns}
          </div>
          <div class="exercise-right">
            <div class="exercise-prescription">${ex.prescription}</div>
            <button class="refresh-ex-btn" onclick="refreshExercise(this)" title="Swap this exercise">↺</button>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="workout-section">
        <div class="workout-section-header">${section.heading}</div>
        <div class="workout-section-body">${rows}</div>
      </div>`;
  }).join('');
}

// ── Init ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  ['event-name-input', 'event-goal-input'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') addCustomEvent(); });
  });
  updateHomeStats();

  // Deep links from the landing page, e.g. app.html#fight
  const deepLinks = { '#pt': 'pt-select', '#fight': 'fight-select', '#general': 'general-select', '#timer': 'timer', '#log': 'tracker', '#1rm': '1rm', '#progress': 'progress' };
  const target = deepLinks[window.location.hash];
  if (target === 'tracker') showTracker();
  else if (target === 'timer') openTimer();
  else if (target === '1rm') { render1RMScreen(); showScreen('1rm'); }
  else if (target) showScreen(target);
});
