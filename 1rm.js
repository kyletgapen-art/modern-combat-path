// ─────────────────────────────────────────────
//  MODERN COMBAT PATH — 1RM Assessment
// ─────────────────────────────────────────────

const ORM_LIFTS = [
  { key: 'deadlift', label: 'Deadlift',    unit: 'lbs', icon: '🏋️' },
  { key: 'bench',    label: 'Bench Press', unit: 'lbs', icon: '💪' },
  { key: 'squat',    label: 'Back Squat',  unit: 'lbs', icon: '🦵' },
];

// Epley Formula — NSCA standard
// Estimated 1RM = weight × (1 + reps / 30)
// Most accurate for 1–10 reps
function epley(weight, reps) {
  if (reps === 1) return weight;
  return Math.round(weight * (1 + reps / 30));
}

function get1RMData() {
  try { return JSON.parse(localStorage.getItem('mc_1rm')) || {}; } catch { return {}; }
}

function save1RMData(data) {
  localStorage.setItem('mc_1rm', JSON.stringify(data));
}

function getProfileData() {
  try { return JSON.parse(localStorage.getItem('mc_profile')) || {}; } catch { return {}; }
}

function saveProfileData(data) {
  localStorage.setItem('mc_profile', JSON.stringify(data));
}

function has1RMData() {
  const d = get1RMData();
  return ORM_LIFTS.some(l => d[l.key]);
}

function render1RMScreen() {
  const saved = get1RMData();
  const grid = document.getElementById('orm-grid');
  if (!grid) return;

  const profile = getProfileData();
  const profileHTML = `
    <div class="orm-card orm-profile-card">
      <div class="orm-card-header">
        <span class="orm-lift-name">Your Profile</span>
      </div>
      <p class="orm-guide-text">Used to personalise workout intensity and pacing.</p>
      <div class="orm-profile-grid">
        <div class="orm-profile-field">
          <label class="orm-profile-label">Age</label>
          <div class="orm-input-row">
            <input type="number" id="profile-age" placeholder="e.g. 28" min="14" max="100"
              value="${profile.age || ''}" class="orm-input" style="max-width:90px"/>
            <span class="orm-unit">yrs</span>
          </div>
        </div>
        <div class="orm-profile-field">
          <label class="orm-profile-label">Height</label>
          <div class="orm-input-row">
            <input type="number" id="profile-height-ft" placeholder="ft" min="3" max="8"
              value="${profile.heightFt || ''}" class="orm-input" style="max-width:70px"/>
            <span class="orm-unit">ft</span>
            <input type="number" id="profile-height-in" placeholder="in" min="0" max="11"
              value="${profile.heightIn || ''}" class="orm-input" style="max-width:70px; margin-left:8px"/>
            <span class="orm-unit">in</span>
          </div>
        </div>
        <div class="orm-profile-field">
          <label class="orm-profile-label">Weight</label>
          <div class="orm-input-row">
            <input type="number" id="profile-weight" placeholder="e.g. 185" min="80" max="500"
              value="${profile.weight || ''}" class="orm-input" style="max-width:100px"/>
            <span class="orm-unit">lbs</span>
          </div>
        </div>
      </div>
    </div>
  `;

  grid.innerHTML = profileHTML + ORM_LIFTS.map(lift => {
    const s = saved[lift.key] || {};
    return `
      <div class="orm-card" id="orm-card-${lift.key}">
        <div class="orm-card-header">
          <span class="orm-lift-name">${lift.label}</span>
          ${s.max ? `<span class="orm-saved-badge">${s.max} ${lift.unit}</span>` : ''}
        </div>
        <div class="orm-tabs">
          <button class="orm-tab active" onclick="switchOrmMode('${lift.key}','direct')">I know my max</button>
          <button class="orm-tab" onclick="switchOrmMode('${lift.key}','guided')">Calculate for me</button>
        </div>

        <!-- Direct input -->
        <div class="orm-mode orm-direct" id="orm-direct-${lift.key}">
          <div class="orm-input-row">
            <input type="number" id="orm-direct-val-${lift.key}"
              placeholder="Enter your 1RM"
              value="${s.max || ''}"
              min="1" max="2000"
              class="orm-input" />
            <span class="orm-unit">${lift.unit}</span>
          </div>
        </div>

        <!-- Guided / Epley -->
        <div class="orm-mode orm-guided" id="orm-guided-${lift.key}" style="display:none">
          <p class="orm-guide-text">Enter a weight you can lift and how many reps you got. Best results with 3–8 reps.</p>
          <div class="orm-input-row">
            <input type="number" id="orm-guide-weight-${lift.key}" placeholder="Weight (${lift.unit})" min="1" max="2000" class="orm-input" style="max-width:130px"/>
            <span class="orm-unit">${lift.unit}</span>
            <span style="color:var(--muted); margin:0 8px">×</span>
            <input type="number" id="orm-guide-reps-${lift.key}" placeholder="Reps" min="1" max="15" class="orm-input" style="max-width:80px"/>
            <span class="orm-unit">reps</span>
          </div>
          <button class="orm-calc-btn" onclick="calcEpley('${lift.key}','${lift.unit}')">Calculate →</button>
          <div class="orm-result" id="orm-result-${lift.key}" style="display:none"></div>
        </div>
      </div>
    `;
  }).join('') + `
    <div class="orm-card" id="orm-card-mile">
      <div class="orm-card-header">
        <span class="orm-lift-name">1-Mile Run</span>
        ${saved.mile ? `<span class="orm-saved-badge">${saved.mile.min}:${String(saved.mile.sec).padStart(2,'0')}</span>` : ''}
      </div>
      <p class="orm-guide-text">Your best mile time. Used to pace run workouts.</p>
      <div class="orm-input-row">
        <input type="number" id="orm-mile-min" placeholder="Min" min="4" max="30"
          value="${saved.mile ? saved.mile.min : ''}" class="orm-input" style="max-width:80px"/>
        <span class="orm-unit">min</span>
        <span style="color:var(--muted); margin:0 8px">:</span>
        <input type="number" id="orm-mile-sec" placeholder="Sec" min="0" max="59"
          value="${saved.mile ? saved.mile.sec : ''}" class="orm-input" style="max-width:80px"/>
        <span class="orm-unit">sec</span>
      </div>
    </div>
  `;
}

function switchOrmMode(liftKey, mode) {
  const card = document.getElementById(`orm-card-${liftKey}`);
  if (!card) return;
  card.querySelectorAll('.orm-tab').forEach((t, i) => {
    t.classList.toggle('active', (i === 0 && mode === 'direct') || (i === 1 && mode === 'guided'));
  });
  document.getElementById(`orm-direct-${liftKey}`).style.display  = mode === 'direct'  ? '' : 'none';
  document.getElementById(`orm-guided-${liftKey}`).style.display  = mode === 'guided' ? '' : 'none';
}

function calcEpley(liftKey, unit) {
  const w = parseFloat(document.getElementById(`orm-guide-weight-${liftKey}`).value);
  const r = parseFloat(document.getElementById(`orm-guide-reps-${liftKey}`).value);
  if (!w || !r || r < 1 || r > 15) {
    alert('Enter a valid weight and 1–15 reps for the best estimate.');
    return;
  }
  const est = epley(w, r);
  const resultEl = document.getElementById(`orm-result-${liftKey}`);
  resultEl.style.display = '';
  resultEl.innerHTML = `
    <div class="orm-estimate">
      Estimated 1RM: <strong>${est} ${unit}</strong>
      <button class="orm-use-btn" onclick="useEpleyResult('${liftKey}', ${est})">Use this →</button>
    </div>
    <div class="orm-formula-note">Epley formula · Best accuracy at 3–8 reps</div>
  `;
}

function useEpleyResult(liftKey, value) {
  switchOrmMode(liftKey, 'direct');
  document.getElementById(`orm-direct-val-${liftKey}`).value = value;
}

function saveAndContinue1RM() {
  const saved = get1RMData();
  const now = new Date().toLocaleDateString();

  ORM_LIFTS.forEach(lift => {
    const val = parseFloat(document.getElementById(`orm-direct-val-${lift.key}`)?.value);
    if (val && val > 0) {
      saved[lift.key] = { max: val, unit: lift.unit, date: now };
    }
  });

  const mileMin = parseInt(document.getElementById('orm-mile-min')?.value);
  const mileSec = parseInt(document.getElementById('orm-mile-sec')?.value || 0);
  if (mileMin > 0) {
    saved.mile = { min: mileMin, sec: mileSec, date: now };
  }

  save1RMData(saved);

  const profile = getProfileData();
  const age      = parseInt(document.getElementById('profile-age')?.value);
  const heightFt = parseInt(document.getElementById('profile-height-ft')?.value);
  const heightIn = parseInt(document.getElementById('profile-height-in')?.value || 0);
  const weight   = parseInt(document.getElementById('profile-weight')?.value);
  if (age > 0)      profile.age      = age;
  if (heightFt > 0) { profile.heightFt = heightFt; profile.heightIn = heightIn; }
  if (weight > 0)   profile.weight   = weight;
  saveProfileData(profile);

  localStorage.setItem('mc_1rm_done', '1');
  renderPercentageTable(saved);
}

function renderPercentageTable(saved) {
  const PERCENTS = [75, 80, 85, 90, 95];
  const lifts = ORM_LIFTS.filter(l => saved[l.key]);

  let html = '';

  if (lifts.length) {
    html += `
      <div class="pct-table-wrap">
        <div class="pct-table-title">Your Working Weights</div>
        <p class="pct-table-sub">Reference these before your workout. Screenshot or write them down.</p>
        <div class="pct-scroll">
          <table class="pct-table">
            <thead>
              <tr>
                <th>Lift</th>
                <th>1RM</th>
                ${PERCENTS.map(p => `<th>${p}%</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${lifts.map(l => {
                const max = saved[l.key].max;
                return `<tr>
                  <td class="pct-lift-name">${l.label}</td>
                  <td class="pct-max">${max} ${l.unit}</td>
                  ${PERCENTS.map(p => `<td>${Math.round(max * p / 100)} lbs</td>`).join('')}
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  }

  if (saved.mile) {
    const mileSec = saved.mile.min * 60 + (saved.mile.sec || 0);

    // Riegel formula: T2 = T1 * (D2 / D1)^1.06
    // D1 = 1609m (1 mile), times in seconds
    function riegelTime(meters) {
      return Math.round(mileSec * Math.pow(meters / 1609, 1.06));
    }

    function fmtTime(sec) {
      if (sec < 3600) {
        const m = Math.floor(sec / 60);
        const s = String(sec % 60).padStart(2, '0');
        return `${m}:${s}`;
      }
      const h = Math.floor(sec / 3600);
      const m = Math.floor((sec % 3600) / 60);
      const s = String(sec % 60).padStart(2, '0');
      return `${h}:${String(m).padStart(2,'0')}:${s}`;
    }

    const distances = [
      { label: '400m',    meters: 400 },
      { label: '800m',    meters: 800 },
      { label: '1200m',   meters: 1200 },
      { label: '1 Mile',  meters: 1609 },
      { label: '3200m',   meters: 3200 },
      { label: '5K',      meters: 5000 },
      { label: '2 Miles', meters: 3218 },
      { label: '3 Miles', meters: 4828 },
      { label: '4 Miles', meters: 6437 },
      { label: '5 Miles', meters: 8047 },
    ].sort((a, b) => a.meters - b.meters);

    html += `
      <div class="pct-table-wrap" style="margin-top:20px;">
        <div class="pct-table-title">Run Distance Reference</div>
        <p class="pct-table-sub">Estimated finish times based on your ${saved.mile.min}:${String(saved.mile.sec || 0).padStart(2,'0')} mile. Calculated using the Riegel formula — shorter distances will feel fast, longer ones will feel hard.</p>
        <div class="pct-scroll">
          <table class="pct-table">
            <thead>
              <tr><th>Distance</th><th>Est. Time</th><th>Pace / Mile</th></tr>
            </thead>
            <tbody>
              ${distances.map(d => {
                const totalSec = riegelTime(d.meters);
                const pacePerMileSec = Math.round(totalSec / (d.meters / 1609));
                return `<tr>
                  <td class="pct-lift-name">${d.label}</td>
                  <td>${fmtTime(totalSec)}</td>
                  <td>${fmtTime(pacePerMileSec)} /mi</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  }

  const container = document.getElementById('orm-pct-section');
  if (container) {
    container.innerHTML = html + `
      <div style="margin-top:24px; display:flex; gap:12px; flex-wrap:wrap;">
        <button class="generate-btn" onclick="showScreen('home')">Continue to App →</button>
        <button class="action-btn" onclick="render1RMScreen(); document.getElementById('orm-pct-section').innerHTML=''">Edit Numbers</button>
      </div>`;
    container.style.display = 'block';
  }

  document.getElementById('orm-grid').style.display = 'none';
  document.getElementById('orm-save-btns').style.display = 'none';
  window.scrollTo(0, 0);
}

function skip1RM() {
  localStorage.setItem('mc_1rm_done', '1');
  showScreen('home');
}

// Call on app init — show 1RM screen if first visit
function check1RMOnStart() {
  if (!localStorage.getItem('mc_1rm_done')) {
    render1RMScreen();
    showScreen('1rm');
  }
}

// Get percentage of a lift for workout display
function getOrmPercent(liftKey, percent) {
  const data = get1RMData();
  if (!data[liftKey]) return null;
  return Math.round(data[liftKey].max * (percent / 100));
}

// Add calculated weights to exercise prescription if applicable
function enrichWithORM(exercises) {
  const data = get1RMData();
  if (!data || Object.keys(data).length === 0) return exercises;
  return exercises.map(ex => {
    const name = (ex.name || '').toLowerCase();
    let liftKey = null;
    if (/deadlift/.test(name)) liftKey = 'deadlift';
    else if (/bench press/.test(name)) liftKey = 'bench';
    else if (/back squat|front squat|squat/.test(name)) liftKey = 'squat';
    if (!liftKey || !data[liftKey]) return ex;
    const prescription = ex.prescription || '';
    // Try to extract a percentage from prescription like "5 × 3 @ 85%"
    const pctMatch = prescription.match(/(\d+)%/);
    if (pctMatch) {
      const pct = parseInt(pctMatch[1]);
      const weight = getOrmPercent(liftKey, pct);
      return { ...ex, prescription: prescription + ` (≈ ${weight} lbs)` };
    }
    return ex;
  });
}
