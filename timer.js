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
  secondsLeft: 0,
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

function toggleTimer() {
  const panel = document.getElementById('timer-panel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
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
    if (timerState.secondsLeft <= 3) beepTick();
    updateTimerDisplay();
  }
}

function handleTimerTransition() {
  if (timerState.mode === 'countdown') {
    timerState.phase = 'done';
    pauseTimer();
    beepDone();
    updateTimerDisplay();
    return;
  }

  // Round timer logic
  if (timerState.phase === 'work') {
    beepEnd();
    if (timerState.currentRound >= timerState.rounds) {
      timerState.phase = 'done';
      pauseTimer();
      beepDone();
    } else {
      timerState.phase = 'rest';
      timerState.secondsLeft = timerState.restSec;
    }
  } else if (timerState.phase === 'rest') {
    timerState.currentRound++;
    timerState.phase = 'work';
    timerState.secondsLeft = timerState.workMin * 60;
    beepStart();
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
  } else {
    info.textContent = '';
  }
}

// ── Audio ──────────────────────────────────────
function getAudioCtx() {
  if (!window._audioCtx) {
    window._audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return window._audioCtx;
}

function playTone(freq, duration, gain = 0.4) {
  try {
    const ctx = getAudioCtx();
    const osc  = ctx.createOscillator();
    const vol  = ctx.createGain();
    osc.connect(vol);
    vol.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.value = freq;
    vol.gain.setValueAtTime(gain, ctx.currentTime);
    vol.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
}

function beepStart() { playTone(880, 0.18); setTimeout(() => playTone(880, 0.18), 200); }
function beepEnd()   { playTone(440, 0.25); setTimeout(() => playTone(330, 0.25), 280); setTimeout(() => playTone(220, 0.35), 560); }
function beepDone()  { playTone(660, 0.2); setTimeout(() => playTone(660, 0.2), 220); setTimeout(() => playTone(880, 0.5), 440); }
function beepTick()  { playTone(660, 0.08, 0.2); }

// Show/hide timer widget based on current screen
function updateTimerVisibility(screenId) {
  const timedScreens = ['workout', 'plan-output', 'customize', 'plan-builder'];
  const widget = document.getElementById('timer-widget');
  if (widget) widget.style.display = timedScreens.includes(screenId) ? 'block' : 'none';
}
