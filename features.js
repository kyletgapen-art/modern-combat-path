// ─────────────────────────────────────────────
//  MODERN COMBAT PATH — Active plan, guided session,
//  workout complete, exercise how-to, progress
// ─────────────────────────────────────────────

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function dateKey(d) { return trackerKey(d.getFullYear(), d.getMonth(), d.getDate()); }
function todayKey() { return dateKey(new Date()); }
function fmtClock(sec) { sec = Math.max(0, Math.round(sec)); return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`; }
function currentScreenId() {
  const a = document.querySelector('.screen.active');
  return a ? a.id.replace('screen-', '') : 'home';
}
function showToast(msg) {
  let t = document.getElementById('app-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'app-toast';
    t.className = 'toast';
    t.setAttribute('role', 'status');
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._hide);
  t._hide = setTimeout(() => t.classList.remove('show'), 2600);
}

const ICON_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>';

// ══════════════════════════════════════════════
//  1. ACTIVE PLAN
// ══════════════════════════════════════════════
const ACTIVE_PLAN_KEY = 'mc_active_plan';

function getActivePlan() {
  try { return JSON.parse(localStorage.getItem(ACTIVE_PLAN_KEY)); } catch { return null; }
}
function saveActivePlan(ap) { localStorage.setItem(ACTIVE_PLAN_KEY, JSON.stringify(ap)); }

// Every non-rest day of a plan, in order
function planTrainingDays(plan) {
  const list = [];
  plan.weeks.forEach(w => w.days.forEach((d, di) => {
    if (d.type !== 'rest') list.push({ id: `w${w.weekNum}d${di}`, week: w, day: d });
  }));
  return list;
}

// Progress is by session, not by calendar — a missed day never "breaks" the plan
function nextPlanDay(ap) {
  return planTrainingDays(ap.plan).find(t => !ap.done[t.id]) || null;
}

function startActivePlan() {
  if (!currentPlan) return;
  const existing = getActivePlan();
  if (existing && existing.id !== currentPlan.id &&
      !confirm('Replace your current active plan with this one? Progress on the old plan will be cleared.')) return;
  currentPlan.id = currentPlan.id || Date.now();
  saveActivePlan({ id: currentPlan.id, startedAt: todayKey(), plan: currentPlan, done: {} });
  showToast('Plan started — find it on Home');
  showScreen('home');
}

function endActivePlan(skipConfirm) {
  if (!skipConfirm && !confirm('End this plan? Your workout log is not affected.')) return;
  localStorage.removeItem(ACTIVE_PLAN_KEY);
  renderHomePlanCard();
}

function viewActivePlan() {
  const ap = getActivePlan();
  if (!ap) return;
  currentPlan = ap.plan;
  renderPlan(ap.plan);
  showScreen('plan-output');
}

const DAY_LETTERS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function renderHomePlanCard() {
  const card = document.getElementById('home-plan-card');
  const hero = document.getElementById('home-hero');
  if (!card) return;
  const ap = getActivePlan();
  if (!ap || !ap.plan) {
    card.style.display = 'none';
    if (hero) hero.style.display = '';
    return;
  }
  card.style.display = '';
  if (hero) hero.style.display = 'none';

  const all = planTrainingDays(ap.plan);
  const doneCount = all.filter(t => ap.done[t.id]).length;
  const next = nextPlanDay(ap);
  const title = esc(ap.plan.title.replace(/ — Training Plan$/, ''));

  if (!next) {
    card.innerHTML = `
      <div class="home-hero-top">
        <span class="eyebrow">Active plan · complete</span>
        <span class="home-hero-pill">${all.length} / ${all.length}</span>
      </div>
      <div>
        <div class="home-hero-title">Plan complete</div>
        <div class="home-hero-sub">${title} — all ${all.length} sessions done. Nice work.</div>
      </div>
      <button class="generate-btn block" onclick="endActivePlan(true)">Finish &amp; pick a new path</button>
      <div class="plan-card-actions"><button class="action-btn" onclick="viewActivePlan()">View plan</button></div>`;
    return;
  }

  const week = next.week;
  const weekDays = all.filter(t => t.week.weekNum === week.weekNum);
  const weekDone = weekDays.filter(t => ap.done[t.id]).length;
  const dots = week.days.map((d, di) => {
    const id = `w${week.weekNum}d${di}`;
    let cls = 'plan-dot';
    let label = d.type === 'rest' ? 'Rest' : d.focus;
    if (d.type === 'rest') cls += ' rest';
    else if (ap.done[id]) { cls += ' done'; label += ' — done'; }
    else if (next.id === id) { cls += ' next'; label += ' — next'; }
    return `<div class="plan-day"><span>${DAY_LETTERS[di]}</span><div class="${cls}" title="${esc(d.dayOfWeek)}: ${esc(label)}">${ap.done[id] ? ICON_CHECK : ''}</div></div>`;
  }).join('');

  card.innerHTML = `
    <div class="home-hero-top">
      <span class="eyebrow">Active plan · Week ${week.weekNum} of ${ap.plan.totalWeeks}</span>
      <span class="home-hero-pill">${esc(week.phaseLabel)}</span>
    </div>
    <div>
      <div class="home-hero-title">Next: ${esc(next.day.focus)}</div>
      <div class="home-hero-sub">${title} · ${esc(next.day.dayOfWeek)} session</div>
    </div>
    <div class="plan-week" aria-label="This week">${dots}</div>
    <div class="plan-progress-text">${weekDone} of ${weekDays.length} sessions done this week · ${doneCount} of ${all.length} overall</div>
    <button class="generate-btn block" onclick="startPlanDaySession('${next.id}')">
      Start next session
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </button>
    <div class="plan-card-actions">
      <button class="action-btn" onclick="viewActivePlan()">View full plan</button>
      <button class="action-btn" onclick="endActivePlan()">End plan</button>
    </div>`;
}

// Called at the end of renderPlan(): start buttons per day + done / next markers
function decoratePlanOutput(plan) {
  const ap = getActivePlan();
  const isActive = !!(ap && plan.id && ap.id === plan.id);
  const btn = document.getElementById('plan-start-btn');
  if (btn) {
    btn.textContent = isActive ? 'Active plan ✓' : 'Start this plan';
    btn.disabled = isActive;
  }
  const next = isActive ? nextPlanDay(ap) : null;

  document.querySelectorAll('#plan-output .day-row:not(.rest)').forEach(row => {
    const id = row.id;
    const wrap = row.querySelector('.day-workout');
    if (wrap && !wrap.querySelector('.day-start-btn')) {
      wrap.insertAdjacentHTML('afterbegin',
        `<button class="generate-btn day-start-btn no-print" onclick="startPlanDaySession('${id}')">Start this session →</button>`);
    }
    const icon = row.querySelector('.day-expand-icon');
    if (isActive && ap.done[id]) {
      row.classList.add('done');
      if (icon) icon.insertAdjacentHTML('beforebegin', '<span class="day-tag done">Done</span>');
    } else if (next && next.id === id) {
      row.classList.add('next');
      if (icon) icon.insertAdjacentHTML('beforebegin', '<span class="day-tag next">Next up</span>');
    }
  });

  if (next) {
    document.querySelectorAll('#plan-output .week-card').forEach(c =>
      c.classList.toggle('open', c.id === 'week-' + next.week.weekNum));
  }
}

// ══════════════════════════════════════════════
//  2. GUIDED SESSION MODE
// ══════════════════════════════════════════════
let session = null;
let sessionRestTimer = null;

function readSectionsFromDom(container) {
  const items = [];
  if (!container) return items;
  container.querySelectorAll('.workout-section').forEach(sec => {
    const heading = sec.querySelector('.workout-section-header')?.textContent.trim() || '';
    sec.querySelectorAll('.exercise-row').forEach(row => items.push({
      section: heading,
      name: row.querySelector('.exercise-name')?.textContent.trim() || '',
      note: row.querySelector('.exercise-note')?.textContent.trim() || '',
      prescription: row.querySelector('.exercise-prescription')?.textContent.trim() || '',
    }));
  });
  return items;
}

function itemsFromSections(sections) {
  return sections.flatMap(s => s.items.map(ex => ({
    section: s.heading,
    name: typeof ex === 'string' ? ex : ex.name,
    note: ex.note || '',
    prescription: ex.prescription || '',
  })));
}

function parseSetCount(rx) {
  const m = String(rx).match(/^\s*(\d+)\s*[×x]/);
  return m ? Math.min(10, Math.max(1, parseInt(m[1]))) : 1;
}
function parseRestSec(rx, fallback) {
  const m = String(rx).match(/(\d+)\s*sec\s*rest/i);
  return m ? parseInt(m[1]) : fallback;
}

function startSession({ title, items, planDayId = null, restSec = 60 }) {
  items = items.filter(it => it.name);
  if (!items.length) return;
  clearSessionRest();
  session = {
    title, planDayId,
    returnTo: currentScreenId(),
    startedAt: Date.now(),
    index: 0,
    rest: null,
    effort: 3,
    items: items.map(it => {
      const sets = parseSetCount(it.prescription);
      return { ...it, sets, restSec: parseRestSec(it.prescription, restSec), done: Array(sets).fill(false) };
    }),
  };
  renderSession();
  showScreen('session');
}

function startGuidedFromWorkout() {
  startSession({
    title: document.getElementById('workout-title')?.textContent || 'Workout',
    items: readSectionsFromDom(document.getElementById('workout-output')),
  });
}

function startPlanDaySession(dayId) {
  const ap = getActivePlan();
  const onPlanScreen = currentScreenId() === 'plan-output' && currentPlan;
  const plan = onPlanScreen ? currentPlan : (ap ? ap.plan : currentPlan);
  if (!plan) return;
  const m = String(dayId).match(/^w(\d+)d(\d+)$/);
  if (!m) return;
  const week = plan.weeks.find(w => w.weekNum === +m[1]);
  const day = week?.days[+m[2]];
  if (!day || !day.workout) return;

  // On the plan screen, read what's shown so any swaps you made carry over
  const row = onPlanScreen ? document.getElementById(dayId) : null;
  const items = row ? readSectionsFromDom(row.querySelector('.day-workout')) : itemsFromSections(day.workout.sections);
  const isActive = !!(ap && plan.id && ap.id === plan.id);

  startSession({
    title: `${plan.title.replace(/ — Training Plan$/, '')} · Week ${week.weekNum}, ${day.dayOfWeek}`,
    items,
    planDayId: isActive ? dayId : null,
    restSec: week.restTime || 60,
  });
}

function renderSession() {
  const root = document.getElementById('session-root');
  if (!root || !session) return;
  const s = session;
  const it = s.items[s.index];
  const n = s.items.length;
  const next = s.items[s.index + 1];
  const pct = Math.round((s.index / n) * 100);

  const setsHTML = it.done.map((d, i) => `
    <button class="set-btn${d ? ' done' : ''}" onclick="toggleSessionSet(${i})" aria-pressed="${d}" aria-label="Set ${i + 1}${d ? ', done' : ''}">
      <span>Set</span><strong>${d ? '✓' : i + 1}</strong>
    </button>`).join('');

  const rest = s.rest ? `
    <div class="session-rest" role="timer" aria-live="off">
      <div class="session-rest-clock" id="session-rest-clock">${fmtClock(s.rest.left)}</div>
      <div class="session-rest-text"><strong>Rest</strong><span>Screen flashes when it's time to go</span></div>
      <button class="action-btn" onclick="clearSessionRest(true)">Skip</button>
    </div>` : '';

  root.innerHTML = `
    <div class="session-top">
      <button class="back-btn session-exit" onclick="exitSession()" aria-label="Exit session">✕</button>
      <div class="session-progress">
        <div class="session-progress-meta"><span>Exercise ${s.index + 1} of ${n}</span><span>${esc(it.section)}</span></div>
        <div class="session-bar"><div style="width:${pct}%"></div></div>
      </div>
    </div>

    <div class="session-ex">
      ${it.prescription ? `<div class="session-rx">${esc(it.prescription)}</div>` : ''}
      <h2 class="session-name">${esc(it.name)}</h2>
      ${it.note ? `<p class="session-note">${esc(it.note)}</p>` : ''}
      <div><button class="action-btn" onclick="openHowToCurrent()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17h.01"/></svg>
        How to do it
      </button></div>
    </div>

    <div class="session-sets">
      <div class="eyebrow">${it.sets > 1 ? 'Tap each set when done' : 'Tap when done'}</div>
      <div class="set-grid" style="grid-template-columns:repeat(${Math.min(it.sets, 5)}, minmax(0, 1fr))">${setsHTML}</div>
    </div>

    ${rest}

    <div class="session-foot">
      ${next ? `
        <div class="session-next">
          <span class="eyebrow">Up next</span>
          <strong>${esc(next.name)}</strong>
          <span class="session-next-rx">${esc(next.prescription)}</span>
        </div>` : ''}
      <div class="session-nav">
        ${s.index > 0 ? '<button class="action-btn" onclick="moveSession(-1)">← Previous</button>' : ''}
        <button class="generate-btn" onclick="${next ? 'moveSession(1)' : 'finishSessionFlow()'}">${next ? 'Next exercise →' : 'Finish workout ✓'}</button>
      </div>
    </div>`;
}

function toggleSessionSet(i) {
  if (!session) return;
  const it = session.items[session.index];
  it.done[i] = !it.done[i];
  const remaining = it.done.filter(d => !d).length;
  if (it.done[i] && remaining > 0) startSessionRest(it.restSec);
  else if (remaining === 0) clearSessionRest();
  renderSession();
}

function startSessionRest(sec) {
  clearSessionRest();
  if (!session) return;
  session.rest = { left: sec };
  sessionRestTimer = setInterval(() => {
    if (!session || !session.rest) { clearSessionRest(); return; }
    session.rest.left--;
    if (session.rest.left <= 0) {
      clearSessionRest(true);
      if (typeof flashScreen === 'function') flashScreen();
    } else {
      const c = document.getElementById('session-rest-clock');
      if (c) c.textContent = fmtClock(session.rest.left);
    }
  }, 1000);
}

function clearSessionRest(rerender) {
  clearInterval(sessionRestTimer);
  sessionRestTimer = null;
  if (session) session.rest = null;
  if (rerender) renderSession();
}

function moveSession(delta) {
  if (!session) return;
  clearSessionRest();
  session.index = Math.max(0, Math.min(session.items.length - 1, session.index + delta));
  renderSession();
  window.scrollTo(0, 0);
}

function exitSession() {
  if (!session) { showScreen('home'); return; }
  if (!confirm("Leave this workout? This session won't be saved.")) return;
  clearSessionRest();
  const back = session.returnTo || 'home';
  session = null;
  showScreen(back);
}

// ══════════════════════════════════════════════
//  4. WORKOUT COMPLETE
// ══════════════════════════════════════════════
const EFFORT_LABELS = ['Easy', 'Light', 'Solid', 'Hard', 'Max'];

function finishSessionFlow() {
  if (!session) return;
  clearSessionRest();
  session.finishedAt = Date.now();
  renderComplete();
  showScreen('complete');
}

function renderComplete() {
  const root = document.getElementById('complete-root');
  if (!root || !session) return;
  const s = session;
  const mins = Math.max(1, Math.round((s.finishedAt - s.startedAt) / 60000));
  const setsDone = s.items.reduce((a, it) => a + it.done.filter(Boolean).length, 0);
  const efforts = EFFORT_LABELS.map((l, i) => `
    <button class="effort-btn${s.effort === i + 1 ? ' active' : ''}" onclick="setSessionEffort(${i + 1})" aria-pressed="${s.effort === i + 1}">
      <strong>${i + 1}</strong><span>${l}</span>
    </button>`).join('');

  root.innerHTML = `
    <div class="complete-head">
      <div class="complete-check">${ICON_CHECK}</div>
      <div class="eyebrow" style="color:var(--accent-text)">Session complete</div>
      <h2 class="complete-title">${esc(s.title)}</h2>
    </div>
    <div class="complete-stats">
      <div><strong>${mins}</strong><span>Minutes</span></div>
      <div><strong>${s.items.length}</strong><span>Exercises</span></div>
      <div><strong>${setsDone}</strong><span>Sets done</span></div>
    </div>
    <div class="complete-block">
      <div class="eyebrow">How hard was it?</div>
      <div class="effort-grid">${efforts}</div>
    </div>
    <div class="complete-block">
      <label class="eyebrow" for="complete-notes">Notes</label>
      <textarea id="complete-notes" class="tracker-notes" placeholder="Anything to remember next time…"></textarea>
    </div>
    <div class="complete-actions">
      <button class="generate-btn block" onclick="saveSessionToLog()">Save to workout log</button>
      <button class="action-btn block" onclick="closeComplete(false)">Finish without logging</button>
      ${s.planDayId ? '<p class="complete-hint">Either way, this session is marked done in your plan.</p>' : ''}
    </div>`;
}

function setSessionEffort(n) {
  if (!session) return;
  session.effort = n;
  document.querySelectorAll('#complete-root .effort-btn').forEach((b, i) => {
    b.classList.toggle('active', i + 1 === n);
    b.setAttribute('aria-pressed', i + 1 === n);
  });
}

function saveSessionToLog() {
  if (!session) return;
  const notes = document.getElementById('complete-notes')?.value.trim() || '';
  const data = getTrackerData();
  const key = todayKey();
  const entry = data[key] || {};
  entry.type = 'workout';
  entry.exercises = entry.exercises || [];

  session.items.forEach(it => {
    const setsDone = it.done.filter(Boolean).length;
    const repsMatch = String(it.prescription).match(/[×x]\s*(\d+)/);
    const hasSetsReps = /^\s*\d+\s*[×x]\s*\d+/.test(it.prescription) && repsMatch && !/min|sec|m\b/i.test(it.prescription);
    entry.exercises.push({
      // Timed or distance work keeps its prescription in the name so nothing is lost
      name: hasSetsReps || !it.prescription ? it.name : `${it.name} — ${it.prescription}`,
      sets: String(setsDone || it.sets),
      reps: hasSetsReps ? repsMatch[1] : '',
    });
  });

  const line = `${session.title} — effort ${session.effort}/5 (${EFFORT_LABELS[session.effort - 1]})${notes ? '. ' + notes : ''}`;
  entry.notes = entry.notes ? entry.notes + '\n' + line : line;
  data[key] = entry;
  saveTrackerData(data);
  closeComplete(true);
}

function closeComplete(saved) {
  if (session && session.planDayId) {
    const ap = getActivePlan();
    if (ap) { ap.done[session.planDayId] = todayKey(); saveActivePlan(ap); }
  }
  session = null;
  showScreen('home');
  if (saved) showToast('Saved to your workout log');
}

// ══════════════════════════════════════════════
//  3. EXERCISE HOW-TO
// ══════════════════════════════════════════════
// Form tips per exercise. To add your own picture later, either:
//   • save it as  images/exercises/<exercise-name>.jpg  (e.g. images/exercises/push-ups.jpg), or
//   • set  image: 'images/exercises/your-file.jpg'  on the matching entry below.
// Until a picture exists, the how-to card shows an "Image coming soon" space.
const EXERCISE_GUIDES = [
  {
    names: ['Push-Up', 'Push-Ups', 'Push Up', 'Push Ups', 'Pushups'],
    muscles: 'Upper body · Chest · Triceps',
    image: '',
    cues: [
      'Straight line from head to heels — no sagging hips',
      'Hands slightly wider than shoulder-width',
      'Chest touches or nearly touches the ground',
      'Elbows at about 45° — not flared wide',
    ],
    easier: 'Incline Push-Up',
    harder: 'Decline Push-Up',
  },
  {
    names: ['Deadlift', 'Conventional Deadlift', 'Barbell Deadlift'],
    muscles: 'Lower body · Posterior chain',
    image: '',
    cues: [
      'Bar stays in contact with shins on the way up',
      "Drive the floor away — don't think about pulling",
      'Lock hips and knees at the same time at the top',
      'Neutral spine throughout — no rounding',
    ],
  },
  {
    names: ['Back Squat', 'Barbell Back Squat'],
    muscles: 'Lower body · Quads · Glutes',
    image: '',
    cues: [
      'Knees track over toes throughout',
      'Hip crease below parallel at the bottom',
      'Chest stays tall — no forward lean',
      'Drive knees out on the way up',
    ],
  },
  {
    names: ['Jab, Cross', 'Jab Cross'],
    muscles: 'Muay Thai · Boxing · Combo',
    image: '',
    cues: [
      "Jab: lead hand snaps out and back — don't drop it",
      'Cross: rotate the rear hip forward — power comes from the floor',
      'Return to guard between and after each punch',
      'Keep your chin down throughout',
    ],
  },
  {
    names: ['Plank', 'Plank Hold', 'Forearm Plank'],
    muscles: 'Core · Stability · Anti-extension',
    image: '',
    cues: [
      'Straight line from head to heels',
      'Squeeze glutes and quads — not just abs',
      "Neutral neck — don't look up or tuck hard",
      "Breathe steadily — don't hold your breath",
    ],
  },
];

function normName(s) { return String(s).toLowerCase().replace(/[^a-z0-9]/g, ''); }
function slugName(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }
function findGuide(name) {
  const n = normName(name);
  return EXERCISE_GUIDES.find(g => g.names.some(x => normName(x) === n)) || null;
}

function openHowToCurrent() {
  if (session) openHowTo(session.items[session.index]);
}

function openHowTo(item) {
  const modal = document.getElementById('howto-modal');
  const body = document.getElementById('howto-body');
  if (!modal || !body || !item) return;
  const guide = findGuide(item.name);
  const src = guide?.image || `images/exercises/${slugName(guide ? guide.names[0] : item.name)}.jpg`;
  const cues = guide?.cues?.length ? guide.cues : [item.note, 'Detailed form tips for this exercise are coming soon.'].filter(Boolean);

  body.innerHTML = `
    <div class="howto-head">
      <div>
        <div class="eyebrow" style="color:var(--accent-text)">${esc(guide?.muscles || item.section || 'Exercise')}</div>
        <h2 class="howto-title" id="howto-title">${esc(item.name)}</h2>
        ${item.prescription ? `<div class="howto-rx">${esc(item.prescription)}</div>` : ''}
      </div>
      <button class="modal-close" onclick="closeHowTo()" aria-label="Close">✕</button>
    </div>
    <div class="howto-media">
      <img src="${esc(src)}" alt="${esc(item.name)} demonstration" onerror="this.parentNode.classList.add('empty'); this.remove();">
      <div class="howto-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/></svg>
        <span>Image coming soon</span>
      </div>
    </div>
    <div class="howto-cues">
      <div class="eyebrow">Form cues</div>
      ${cues.map((c, i) => `<div class="howto-cue"><span>${String(i + 1).padStart(2, '0')}</span><p>${esc(c)}</p></div>`).join('')}
    </div>
    ${guide?.easier || guide?.harder ? `
      <div class="howto-variations">
        ${guide.easier ? `<div><span>Easier</span><strong>${esc(guide.easier)}</strong></div>` : ''}
        ${guide.harder ? `<div><span>Harder</span><strong>${esc(guide.harder)}</strong></div>` : ''}
      </div>` : ''}`;
  modal.style.display = 'flex';
}

function closeHowTo() {
  const modal = document.getElementById('howto-modal');
  if (modal) modal.style.display = 'none';
}

// ══════════════════════════════════════════════
//  5. PROGRESS DASHBOARD
// ══════════════════════════════════════════════
function renderProgress() {
  const root = document.getElementById('progress-root');
  if (!root) return;
  const data = getTrackerData();
  const isWorkout = d => data[dateKey(d)]?.type === 'workout';

  // Streak: consecutive workout days ending today (or yesterday if today isn't logged yet)
  const d = new Date();
  if (!isWorkout(d)) d.setDate(d.getDate() - 1);
  let streak = 0;
  while (isWorkout(d)) { streak++; d.setDate(d.getDate() - 1); }

  const now = new Date();
  const prefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-`;
  const monthCount = Object.keys(data).filter(k => k.startsWith(prefix) && data[k]?.type === 'workout').length;

  // Last 8 weeks, Monday-start
  const monday = new Date(now);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  const weeks = [];
  for (let w = 7; w >= 0; w--) {
    const start = new Date(monday);
    start.setDate(start.getDate() - 7 * w);
    let c = 0;
    for (let i = 0; i < 7; i++) {
      const x = new Date(start);
      x.setDate(x.getDate() + i);
      if (isWorkout(x)) c++;
    }
    weeks.push(c);
  }
  const total8 = weeks.reduce((a, b) => a + b, 0);
  const maxW = Math.max(1, ...weeks);
  const bars = weeks.map((c, i) => `
    <div class="bar-col" title="${c} session${c === 1 ? '' : 's'}">
      <span>${c}</span>
      <div class="bar${i === weeks.length - 1 ? ' current' : ''}" style="height:${Math.max(4, Math.round((c / maxW) * 100))}%"></div>
    </div>`).join('');

  root.innerHTML = `
    <div class="progress-stats">
      <div class="progress-stat"><strong class="accent">${streak}</strong><span>Day streak</span></div>
      <div class="progress-stat"><strong>${monthCount}</strong><span>This month</span></div>
      <div class="progress-stat"><strong>${(total8 / 8).toFixed(1)}</strong><span>Avg / week</span></div>
    </div>

    <section class="progress-card">
      <div class="progress-card-head"><h3>Sessions per week</h3><span>Last 8 weeks</span></div>
      <div class="bar-chart">${bars}</div>
      <div class="bar-axis"><span>8 wks ago</span><span>This week</span></div>
      ${total8 === 0 ? '<p class="progress-empty">Log workouts (or save a finished session) to see your trend here.</p>' : ''}
    </section>

    <section>
      <div class="eyebrow section-label">Strength &amp; run baselines</div>
      ${renderBaselineRows()}
    </section>`;
}

function renderBaselineRows() {
  const hist = typeof get1RMHistory === 'function' ? get1RMHistory() : {};
  const cur = get1RMData();
  const rows = [
    ...ORM_LIFTS.map(l => ({ key: l.key, label: l.label, current: cur[l.key]?.max, fmt: v => `${v} lbs`, fmtDelta: v => `${v > 0 ? '+' : '−'}${Math.abs(v)} lbs`, better: 1 })),
    { key: 'mile', label: '1-Mile Run', current: cur.mile ? cur.mile.min * 60 + (cur.mile.sec || 0) : null, fmt: fmtClock, fmtDelta: v => `${v > 0 ? '+' : '−'}${fmtClock(Math.abs(v))}`, better: -1 },
  ];

  if (!rows.some(r => r.current)) {
    return `
      <div class="progress-card progress-empty-card">
        <p>No baselines yet. Add your 1RM lifts and mile time to track them here.</p>
        <button class="generate-btn" onclick="render1RMScreen(); showScreen('1rm')">Set baselines</button>
      </div>`;
  }

  return rows.map(r => {
    if (!r.current) {
      return `<div class="baseline-row"><div class="baseline-name"><strong>${r.label}</strong><span>Not set</span></div></div>`;
    }
    const pts = (hist[r.key] || []).filter(p => p.value > 0);
    const first = pts[0];
    const delta = pts.length >= 2 ? r.current - first.value : null;
    const good = delta !== null && Math.sign(delta) === r.better;
    const since = first?.date ? new Date(first.date + 'T00:00:00').toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : '';
    let spark = '';
    if (pts.length >= 2) {
      const vals = pts.map(p => p.value);
      const lo = Math.min(...vals), hi = Math.max(...vals), span = hi - lo || 1;
      const path = vals.map((v, i) => {
        const x = 2 + (i / (vals.length - 1)) * 68;
        const norm = (v - lo) / span;
        const y = 26 - (r.better === 1 ? norm : 1 - norm) * 22; // up = better for both
        return `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
      }).join('');
      spark = `<svg class="spark" width="72" height="28" viewBox="0 0 72 28" aria-hidden="true"><path d="${path}"/></svg>`;
    }
    return `
      <div class="baseline-row">
        <div class="baseline-name"><strong>${r.label}</strong><span>${since ? 'Since ' + since : 'First entry'}</span></div>
        ${spark}
        <div class="baseline-val">
          <strong>${r.fmt(r.current)}</strong>
          ${delta ? `<span class="${good ? 'up' : 'down'}">${r.fmtDelta(delta)}</span>` : ''}
        </div>
      </div>`;
  }).join('');
}

// ── Init ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHomePlanCard();
  const howto = document.getElementById('howto-modal');
  if (howto) howto.addEventListener('click', e => { if (e.target === howto) closeHowTo(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeHowTo(); });
});
