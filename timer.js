// ─────────────────────────────────────────────
//  MODERN COMBAT PATH — Timer Widget
// ─────────────────────────────────────────────

const timerState = {
  mode: 'round',      // 'round' | 'countdown'
  running: false,
  interval: null,
  // Round timer
  rounds: 5,
  workMin: 3,
  restSec: 60,
  currentRound: 1,
  phase: 'idle',      // 'idle' | 'work' | 'rest' | 'done'
  secondsLeft: 180,
  // Countdown
  cdMin: 3,
  cdSec: 0,
};

const timerCfg = {
  rounds:  { min: 1,  max: 20, step: 1  },
  workMin: { min: 1,  max: 10, step: 1  },
  restSec: { min: 10, max: 300, step: 5 },
  cdMin:   { min: 0,  max: 60, step: 1  },
  cdSec:   { min: 0,  max: 55, step: 5  },
};

// Full-screen timer: remember where we came from so Back returns there
let timerReturnScreen = 'home';

function openTimer() {
  const active = document.querySelector('.screen.active');
  const id = active ? active.id.replace('screen-', '') : 'home';
  if (id !== 'timer') timerReturnScreen = id;
  showScreen('timer');
  updateTimerDisplay();
}

function closeTimer() {
  showScreen(timerReturnScreen || 'home');
}

function toggleTimerRun() {
  if (timerState.running) pauseTimer();
  else startTimer();
  updateTimerDisplay();
}

function skipTimerPhase() {
  if (timerState.phase === 'idle' || timerState.phase === 'done') return;
  handleTimerTransition();
}

function switchTimerMode(mode) {
  timerState.mode = mode;
  resetTimer();
  document.getElementById('timer-mode-round').style.display     = mode === 'round'     ? '' : 'none';
  document.getElementById('timer-mode-countdown').style.display = mode === 'countdown' ? '' : 'none';
  document.getElementById('tab-round').classList.toggle('active',     mode === 'round');
  document.getElementById('tab-countdown').classList.toggle('active', mode === 'countdown');
}

function adjTimer(key, delta) {
  const cfg = timerCfg[key];
  timerState[key] = Math.max(cfg.min, Math.min(cfg.max, timerState[key] + delta));
  document.getElementById(`cfg-${key}`).textContent = timerState[key];
  if (!timerState.running) resetTimer();
}

function startTimer() {
  if (timerState.running) return;
  if (timerState.phase === 'idle' || timerState.phase === 'done') {
    // Fresh start
    if (timerState.mode === 'round') {
      timerState.currentRound = 1;
      timerState.phase = 'work';
      timerState.secondsLeft = timerState.workMin * 60;
    } else {
      timerState.phase = 'work';
      timerState.secondsLeft = timerState.cdMin * 60 + timerState.cdSec;
    }
  }
  timerState.running = true;
  timerState.interval = setInterval(timerTick, 1000);
  updateTimerDisplay();
}

function pauseTimer() {
  timerState.running = false;
  clearInterval(timerState.interval);
  updateTimerDisplay();
}

function resetTimer() {
  pauseTimer();
  timerState.phase = 'idle';
  timerState.currentRound = 1;
  if (timerState.mode === 'round') {
    timerState.secondsLeft = timerState.workMin * 60;
  } else {
    timerState.secondsLeft = timerState.cdMin * 60 + timerState.cdSec;
  }
  updateTimerDisplay();
}

function timerTick() {
  timerState.secondsLeft--;
  if (timerState.secondsLeft <= 0) {
    handleTimerTransition();
  } else {
    updateTimerDisplay();
  }
}

function handleTimerTransition() {
  if (timerState.mode === 'countdown') {
    timerState.phase = 'done';
    pauseTimer();
    flashScreen();
    updateTimerDisplay();
    return;
  }

  // Round timer logic
  if (timerState.phase === 'work') {
    if (timerState.currentRound >= timerState.rounds) {
      timerState.phase = 'done';
      pauseTimer();
      setTimeout(flashScreen, 50);
    } else {
      timerState.phase = 'rest';
      timerState.secondsLeft = timerState.restSec;
    }
  } else if (timerState.phase === 'rest') {
    timerState.currentRound++;
    timerState.phase = 'work';
    timerState.secondsLeft = timerState.workMin * 60;
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const mins = Math.floor(timerState.secondsLeft / 60);
  const secs = timerState.secondsLeft % 60;
  const clockStr = `${mins}:${String(secs).padStart(2, '0')}`;
  document.getElementById('timer-clock').textContent = clockStr;

  const phaseLabels = { idle:'READY', work:'WORK', rest:'REST', done:'DONE' };
  const phaseEl = document.getElementById('timer-phase');
  phaseEl.textContent = phaseLabels[timerState.phase] || '';
  phaseEl.className = 'timer-phase phase-' + timerState.phase;

  const info = document.getElementById('timer-round-info');
  if (timerState.mode === 'round' && timerState.phase !== 'idle' && timerState.phase !== 'done') {
    info.textContent = `Round ${timerState.currentRound} of ${timerState.rounds}`;
  } else if (timerState.phase === 'done') {
    info.textContent = timerState.mode === 'round' ? 'All rounds complete' : 'Time!';
  } else {
    info.textContent = '';
  }

  // Progress ring
  const ring = document.getElementById('timer-ring');
  const wrap = document.getElementById('timer-ring-wrap');
  if (ring && wrap) {
    const C = 879.6;
    let total;
    if (timerState.mode === 'countdown') total = timerState.cdMin * 60 + timerState.cdSec;
    else total = timerState.phase === 'rest' ? timerState.restSec : timerState.workMin * 60;
    let offset = 0;
    if (timerState.phase !== 'idle' && timerState.phase !== 'done' && total > 0) {
      offset = C * (1 - timerState.secondsLeft / total);
    }
    ring.setAttribute('stroke-dashoffset', offset.toFixed(1));
    wrap.classList.toggle('is-rest', timerState.phase === 'rest');
    wrap.classList.toggle('is-done', timerState.phase === 'done');
  }

  // Round markers
  const dots = document.getElementById('timer-dots');
  if (dots) {
    if (timerState.mode === 'round') {
      let html = '';
      for (let i = 1; i <= timerState.rounds; i++) {
        let cls = 'timer-dot';
        if (timerState.phase === 'done' || (timerState.phase !== 'idle' && i < timerState.currentRound)) cls += ' done';
        else if (timerState.phase !== 'idle' && i === timerState.currentRound) cls += ' current';
        html += `<span class="${cls}"></span>`;
      }
      dots.innerHTML = html;
    } else {
      dots.innerHTML = '';
    }
  }

  // Play / pause button
  const play = document.getElementById('timer-play');
  const icon = document.getElementById('timer-play-icon');
  if (play && icon) {
    play.setAttribute('aria-label', timerState.running ? 'Pause' : 'Start');
    icon.innerHTML = timerState.running
      ? '<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>'
      : '<path d="M8 4l13 8-13 8z"/>';
  }
}


function flashScreen() {
  const el = document.getElementById('timer-flash');
  if (!el) return;
  el.classList.remove('flashing');
  el.style.display = 'block';
  void el.offsetWidth; // force reflow after display:block so animation starts fresh
  el.classList.add('flashing');
  setTimeout(() => { el.style.display = 'none'; el.classList.remove('flashing'); }, 3500);
}

// Unlock Web Audio on first user interaction (required on iOS/Android)

// Show/hide the floating timer shortcut based on current screen
function updateTimerVisibility(screenId) {
  const timedScreens = ['workout', 'plan-output', 'customize', 'plan-builder'];
  const widget = document.getElementById('timer-widget');
  if (widget) widget.style.display = timedScreens.includes(screenId) ? 'block' : 'none';
}
