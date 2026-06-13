// ─────────────────────────────────────────────
//  MODERN COMBAT PATH — Workout Tracker
// ─────────────────────────────────────────────

let trackerYear  = new Date().getFullYear();
let trackerMonth = new Date().getMonth(); // 0-indexed

const MONTH_NAMES = ['January','February','March','April','May','June',
                     'July','August','September','October','November','December'];
const DAY_ABBR    = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

function getTrackerData() {
  try { return JSON.parse(localStorage.getItem('mc_tracker')) || {}; } catch { return {}; }
}
function saveTrackerData(data) {
  localStorage.setItem('mc_tracker', JSON.stringify(data));
}

function trackerKey(y, m, d) {
  return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
}

function showTracker() {
  renderTrackerCalendar();
  showScreen('tracker');
}

function trackerPrevMonth() {
  trackerMonth--;
  if (trackerMonth < 0) { trackerMonth = 11; trackerYear--; }
  renderTrackerCalendar();
}
function trackerNextMonth() {
  trackerMonth++;
  if (trackerMonth > 11) { trackerMonth = 0; trackerYear++; }
  renderTrackerCalendar();
}

function renderTrackerCalendar() {
  document.getElementById('tracker-month-label').textContent =
    `${MONTH_NAMES[trackerMonth]} ${trackerYear}`;

  const data     = getTrackerData();
  const firstDay = new Date(trackerYear, trackerMonth, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(trackerYear, trackerMonth + 1, 0).getDate();

  // Convert Sunday-first to Monday-first offset
  const offset = (firstDay + 6) % 7;

  const grid = document.getElementById('tracker-calendar');
  let html = '';

  // Empty cells before first day
  for (let i = 0; i < offset; i++) {
    html += `<div class="cal-cell cal-empty"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const key   = trackerKey(trackerYear, trackerMonth, d);
    const entry = data[key];
    const today = isToday(trackerYear, trackerMonth, d);
    let cls = 'cal-cell';
    if (today) cls += ' cal-today';
    if (entry?.type === 'rest')    cls += ' cal-rest';
    if (entry?.type === 'workout') cls += ' cal-workout';

    const badge = entry?.type === 'workout'
      ? `<span class="cal-badge">${(entry.exercises || []).length}</span>`
      : entry?.type === 'rest' ? `<span class="cal-rest-label">REST</span>` : '';

    html += `<div class="${cls}" onclick="openDayDetail('${key}',${d})">
               <span class="cal-day-num">${d}</span>${badge}
             </div>`;
  }

  grid.innerHTML = html;
  document.getElementById('tracker-day-detail').style.display = 'none';
}

function isToday(y, m, d) {
  const t = new Date();
  return t.getFullYear() === y && t.getMonth() === m && t.getDate() === d;
}

function openDayDetail(key, dayNum) {
  const data  = getTrackerData();
  const entry = data[key] || { type: '', exercises: [] };
  const panel = document.getElementById('tracker-day-detail');

  const exercisesHTML = (entry.exercises || []).map((ex, i) => `
    <div class="tracker-ex-row" id="tracker-ex-${i}">
      <input type="text"   class="tracker-input flex-1" value="${ex.name  || ''}" placeholder="Exercise name" oninput="updateExField('${key}',${i},'name',this.value)"/>
      <input type="number" class="tracker-input w-sets"  value="${ex.sets  || ''}" placeholder="Sets"  min="1" max="100" oninput="updateExField('${key}',${i},'sets',this.value)"/>
      <span class="tracker-x">×</span>
      <input type="number" class="tracker-input w-reps"  value="${ex.reps  || ''}" placeholder="Reps"  min="1" max="999" oninput="updateExField('${key}',${i},'reps',this.value)"/>
      <button class="tracker-del-btn" onclick="removeExercise('${key}',${i})">✕</button>
    </div>
  `).join('');

  panel.style.display = 'block';
  panel.innerHTML = `
    <div class="day-detail-header">
      <strong>${MONTH_NAMES[trackerMonth]} ${dayNum}, ${trackerYear}</strong>
      <button class="tracker-close-btn" onclick="closeDayDetail()">✕</button>
    </div>
    <div class="day-type-toggle">
      <button class="day-type-btn ${entry.type === 'rest' ? 'active' : ''}" onclick="setDayType('${key}','rest')">REST</button>
      <button class="day-type-btn ${entry.type === 'workout' ? 'active' : ''}" onclick="setDayType('${key}','workout')">WORKOUT</button>
    </div>
    <div id="day-log-section" style="display:${entry.type === 'workout' ? 'block' : 'none'}; margin-top:16px">
      <div id="tracker-exercises">${exercisesHTML}</div>
      <button class="add-ex-btn" onclick="addExerciseRow('${key}')">+ Add Exercise</button>
      <div class="tracker-notes-wrap">
        <textarea id="tracker-notes" placeholder="Notes (optional)..." class="tracker-notes">${entry.notes || ''}</textarea>
        <button class="action-btn" onclick="saveTrackerNotes('${key}')">Save Notes</button>
      </div>
    </div>
  `;

  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeDayDetail() {
  document.getElementById('tracker-day-detail').style.display = 'none';
}

function setDayType(key, type) {
  const data = getTrackerData();
  if (!data[key]) data[key] = { exercises: [] };
  data[key].type = type;
  if (!data[key].exercises) data[key].exercises = [];
  saveTrackerData(data);
  renderTrackerCalendar();

  // Re-open with updated type
  const parts = key.split('-');
  openDayDetail(key, parseInt(parts[2]));
}

function addExerciseRow(key) {
  const data = getTrackerData();
  if (!data[key]) data[key] = { type: 'workout', exercises: [] };
  data[key].exercises.push({ name: '', sets: '', reps: '' });
  saveTrackerData(data);
  const parts = key.split('-');
  openDayDetail(key, parseInt(parts[2]));
}

function removeExercise(key, index) {
  const data = getTrackerData();
  if (!data[key]?.exercises) return;
  data[key].exercises.splice(index, 1);
  saveTrackerData(data);
  const parts = key.split('-');
  openDayDetail(key, parseInt(parts[2]));
}

function updateExField(key, index, field, value) {
  const data = getTrackerData();
  if (!data[key]?.exercises?.[index]) return;
  data[key].exercises[index][field] = value;
  saveTrackerData(data);
}

function saveTrackerNotes(key) {
  const notes = document.getElementById('tracker-notes')?.value || '';
  const data  = getTrackerData();
  if (!data[key]) data[key] = { exercises: [] };
  data[key].notes = notes;
  saveTrackerData(data);
}
