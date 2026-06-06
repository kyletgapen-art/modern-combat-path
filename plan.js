// ─────────────────────────────────────────────
//  MODERN COMBAT — Plan Generator
// ─────────────────────────────────────────────

const PHASES = {
  foundation: {
    label: 'Foundation',
    theme: 'Build base fitness and establish movement patterns',
    exerciseLevel: 'beginner',
    numRounds: 3, roundDuration: 3, restTime: 60,
    weightNote: '60–65% effort — focus on form',
    runIntensity: 'Easy — conversational pace',
  },
  build: {
    label: 'Build',
    theme: 'Increase work capacity and volume',
    exerciseLevel: 'beginner',
    numRounds: 4, roundDuration: 3, restTime: 45,
    weightNote: '70–75% effort — add weight when form is solid',
    runIntensity: 'Moderate — comfortably hard',
  },
  power: {
    label: 'Power',
    theme: 'Develop explosive strength and fight-ready conditioning',
    exerciseLevel: 'intermediate',
    numRounds: 5, roundDuration: 3, restTime: 35,
    weightNote: '80–85% effort — push the weight',
    runIntensity: 'Hard — near test pace',
  },
  peak: {
    label: 'Peak',
    theme: 'Maximum intensity — competition and test simulation',
    exerciseLevel: 'advanced',
    numRounds: 6, roundDuration: 3, restTime: 25,
    weightNote: '90–95% effort — go heavy',
    runIntensity: 'Race pace — full effort',
  },
  taper: {
    label: 'Taper',
    theme: 'Stay sharp and recover — your test or fight is this week',
    exerciseLevel: 'beginner',
    numRounds: 3, roundDuration: 3, restTime: 60,
    weightNote: '50–60% — maintenance only, stay fresh',
    runIntensity: 'Easy — just keep the legs loose',
  },
};

function getPhaseSequence(totalWeeks, addTaper) {
  const last = addTaper ? 'taper' : 'peak';
  const maps = {
    1: ['peak'],
    2: ['build', last],
    3: ['foundation', 'build', last],
    4: ['foundation', 'build', 'power', last],
    5: ['foundation', 'build', 'build', 'power', last],
    6: ['foundation', 'foundation', 'build', 'power', 'peak', last],
    7: ['foundation', 'foundation', 'build', 'build', 'power', 'peak', last],
    8: ['foundation', 'foundation', 'build', 'build', 'power', 'power', 'peak', last],
  };
  return maps[totalWeeks] || maps[4];
}

const TRAIN_PATTERNS = {
  3: [1,0,1,0,1,0,0],
  4: [1,1,0,1,1,0,0],
  5: [1,1,0,1,1,1,0],
  6: [1,1,1,0,1,1,1],
};
const TAPER_PATTERN = [1,0,0,0,1,0,0];
const DAY_NAMES = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const PT_DAY_CYCLES = {
  3: ['strength','cardio','simulation'],
  4: ['strength','cardio','strength','simulation'],
  5: ['strength','cardio','strength','cardio','simulation'],
  6: ['strength','cardio','strength','cardio','simulation','strength'],
};
const FIGHT_DAY_CYCLES = {
  3: ['bag','strength','technique'],
  4: ['bag','strength','bag','technique'],
  5: ['bag','strength','bag','strength','technique'],
  6: ['bag','strength','bag','strength','bag','technique'],
};
const DAY_FOCUS = {
  strength:   'Strength & Power',
  cardio:     'Run & Cardio',
  simulation: 'Full Event Simulation',
  bag:        'Bag Work',
  technique:  'Technique & Partner Work',
};

// ── Bag Round Sequences ───────────────────────
const MT_SEQS = {
  3: ['combo','drill','freestyle'],
  4: ['combo','drill','freestyle','punches-elbows'],
  5: ['combo','drill','freestyle','punches-elbows','kicks-knees-teeps'],
  6: ['combo','combo','drill','freestyle','punches-elbows','kicks-knees-teeps'],
};

function buildBagRounds(fightKey, phase) {
  const seq = MT_SEQS[Math.min(phase.numRounds, 6)] || MT_SEQS[5];
  const combos = MT_COMBOS;
  const drills = MT_DRILLS;
  const dur = phase.roundDuration;
  const rest = phase.restTime;

  return seq.map((type, i) => {
    const isLast = i === seq.length - 1;
    const rx = `${dur} min${isLast ? '' : ` · ${rest} sec rest`}`;
    switch (type) {
      case 'combo': {
        const c = combos[Math.floor(Math.random() * combos.length)];
        return { name: c, note: 'Work this combo the full round', prescription: rx };
      }
      case 'drill': {
        const d = drills[Math.floor(Math.random() * drills.length)];
        return { name: d.name, note: d.desc, prescription: rx };
      }
      case 'freestyle':
        return { name: 'Freestyle', note: 'Any combos — keep moving, stay sharp', prescription: rx };
      case 'punches-elbows':
        return { name: 'Punches & Elbows Only', note: 'Upper body weapons — no kicks or knees', prescription: rx };
      case 'kicks-knees-teeps':
        return { name: 'Kicks, Knees & Teeps Only', note: 'Lower body weapons — no hands', prescription: rx };
      case 'body-work':
        return { name: 'Body Work Only', note: 'All shots to the body — mid-section only', prescription: rx };
      case 'power-round':
        return { name: 'Power Round', note: 'Maximum power on every punch — go hard', prescription: rx };
      default:
        return { name: 'Freestyle', note: '', prescription: rx };
    }
  });
}

function buildDrillingRounds(fightKey, phase) {
  const pool = fightKey === 'bjj'
    ? (BJJ_DRILLS[phase.exerciseLevel] || BJJ_DRILLS.beginner)
    : (JUDO_DRILLS[phase.exerciseLevel] || JUDO_DRILLS.beginner);
  return pickRandom([...pool], Math.min(phase.numRounds, pool.length));
}

function buildTechniqueRounds(fightKey, phase, hasPartner) {
  const fight = FIGHT_WORKOUTS[fightKey];
  if (!fight) return [];
  const exLevel = phase.exerciseLevel;
  const isGrappling = (fightKey === 'bjj' || fightKey === 'judo');

  if (isGrappling) {
    const pool = hasPartner && fight.partner
      ? (fight.partner[exLevel] || fight.partner.beginner)
      : (fight.drilling ? (fight.drilling[exLevel] || fight.drilling.beginner) : []);
    return pickRandom([...pool], Math.min(5, pool.length));
  }

  // Striking — shadowboxing or pad work
  if (hasPartner && fight.partner) {
    const pool = fight.partner[exLevel] || fight.partner.beginner;
    return pickRandom([...pool], Math.min(5, pool.length));
  }

  const isBoxing = (fightKey === 'boxing');
  const combos = isBoxing ? BOXING_COMBOS : MT_COMBOS;
  const drills = isBoxing ? BOXING_DRILLS : MT_DRILLS;
  const dur = phase.roundDuration;
  const rest = phase.restTime;

  const rounds = pickRandom([...combos], phase.numRounds - 1).map(c => ({
    name: c + ' (Shadowboxing)',
    note: 'Visualize your opponent — full speed, no bag',
    prescription: `${dur} min · ${rest} sec rest`,
  }));
  const d = drills[Math.floor(Math.random() * drills.length)];
  rounds.push({ name: d.name, note: d.desc, prescription: `${dur} min` });
  return rounds;
}

// ── Plan Generator ────────────────────────────
function generatePlan(config) {
  const { mode, selection, daysPerWeek, totalWeeks } = config;
  const addTaper = (mode === 'pt');
  const phases = getPhaseSequence(totalWeeks, addTaper);
  const generalCycle = Array(daysPerWeek).fill('workout');
  const dayCycle = mode === 'pt'
    ? (PT_DAY_CYCLES[daysPerWeek] || PT_DAY_CYCLES[3])
    : mode === 'general'
      ? generalCycle
      : (FIGHT_DAY_CYCLES[daysPerWeek] || FIGHT_DAY_CYCLES[3]);

  const plan = {
    title: getPlanTitle(mode, selection),
    mode, selection, daysPerWeek, totalWeeks,
    equip: config.equip,
    partner: config.partner,
    weeks: [],
  };

  for (let w = 0; w < totalWeeks; w++) {
    const phaseKey = phases[w];
    const phase = PHASES[phaseKey];
    const isTaperWeek = (phaseKey === 'taper');
    const pattern = isTaperWeek ? TAPER_PATTERN : (TRAIN_PATTERNS[daysPerWeek] || TRAIN_PATTERNS[3]);

    const week = {
      weekNum: w + 1,
      phase: phaseKey,
      phaseLabel: phase.label,
      theme: phase.theme,
      restTime: phase.restTime,
      numRounds: phase.numRounds,
      roundDuration: phase.roundDuration,
      days: [],
    };

    let slot = 0;
    for (let d = 0; d < 7; d++) {
      if (!pattern[d]) {
        week.days.push({ dayOfWeek: DAY_NAMES[d], type: 'rest' });
        continue;
      }
      let dayType = dayCycle[slot % dayCycle.length];
      if (isTaperWeek && dayType === 'simulation') dayType = 'cardio';

      week.days.push({
        dayOfWeek: DAY_NAMES[d],
        type: 'train',
        focus: DAY_FOCUS[dayType] || dayType,
        dayType,
        workout: buildDayWorkout(mode, selection, dayType, phase, config),
      });
      slot++;
    }

    plan.weeks.push(week);
  }

  return plan;
}

function getPlanTitle(mode, selection) {
  if (mode === 'pt') {
    const t = PT_WORKOUTS[selection];
    return (t ? t.name : 'Custom PT Test') + ' — Training Plan';
  }
  if (mode === 'general') {
    const g = GENERAL_WORKOUTS[selection];
    return (g ? g.name : 'General Fitness') + ' — Training Plan';
  }
  const f = FIGHT_WORKOUTS[selection];
  return (f ? f.name : 'Fight Night') + ' — Training Plan';
}

function buildDayWorkout(mode, selection, dayType, phase, config) {
  if (mode === 'pt')      return buildPTDay(selection, dayType, phase, config);
  if (mode === 'general') return buildGeneralDay(selection, phase, config);
  return buildFightDay(selection, dayType, phase, config);
}

function buildGeneralDay(selection, phase, config) {
  const cat = GENERAL_WORKOUTS[selection];
  if (!cat) return null;
  const exLevel = phase.exerciseLevel;
  const pool = cat[exLevel] || cat.beginner;

  // How many exercises to show scales with session time
  const time = parseInt(config.time) || 45;
  const count = time <= 30 ? 3 : time <= 45 ? 4 : time <= 60 ? 5 : 6;

  const exercises = pickRandom([...pool], Math.min(count, pool.length)).map(ex => ({
    ...ex,
    note: [ex.note, phase.weightNote].filter(Boolean).join(' · '),
  }));

  const heading = cat.name + ' — ' + capitalize(exLevel);
  return {
    title: heading,
    phaseNote: phase.theme,
    sections: [
      { heading: 'Warm-Up', items: pickRandom([...WARMUPS.general], 3) },
      { heading: heading, items: exercises },
    ],
  };
}

function buildPTDay(selection, dayType, phase, config) {
  const test = PT_WORKOUTS[selection];
  if (!test) return null;
  const exLevel = phase.exerciseLevel;
  const bucket = [30,45,60,90].reduce((p,c) =>
    Math.abs(c - parseInt(config.time)) < Math.abs(p - parseInt(config.time)) ? c : p);
  const all = (test[exLevel] && test[exLevel][bucket]) ? [...test[exLevel][bucket]] : [];

  let main = [], heading = '';
  if (dayType === 'strength') {
    heading = 'Strength & Power';
    main = all.filter(ex => !/(run|sprint|mile|interval)/i.test(ex.name));
    if (!main.length) main = all.slice(0, Math.ceil(all.length * 0.6));
  } else if (dayType === 'cardio') {
    heading = 'Run & Cardio';
    main = all.filter(ex => /(run|sprint|mile|interval)/i.test(ex.name));
    if (!main.length) main = all.slice(-3);
  } else {
    heading = 'Full Simulation';
    main = all;
  }

  if (!main.length) main = all.slice(0, 5);
  main = main.map(ex => ({
    ...ex,
    note: [ex.note, phase.weightNote].filter(Boolean).join(' · '),
  }));

  const sectionTitle = heading === 'Full Simulation'
    ? 'Full Simulation — ' + test.name
    : heading + ' — ' + test.name;

  return {
    title: sectionTitle,
    phaseNote: phase.theme,
    sections: [
      { heading: 'Warm-Up', items: pickRandom([...WARMUPS.general], 4) },
      { heading: sectionTitle, items: main },
    ],
  };
}

function buildFightDay(selection, dayType, phase, config) {
  const fight = FIGHT_WORKOUTS[selection];
  if (!fight) return null;
  const exLevel = phase.exerciseLevel;
  const hasPartner = config.partner === 'yes';
  const isGrappling = (selection === 'bjj' || selection === 'judo');
  let sections = [], heading = '';

  if (dayType === 'bag') {
    heading = isGrappling ? 'Drilling — ' + fight.name : 'Bag Work — ' + fight.name;
    const rounds = isGrappling
      ? buildDrillingRounds(selection, phase)
      : buildBagRounds(selection, phase);
    sections = [
      { heading: 'Warm-Up', items: pickRandom([...MT_WARMUPS], 2) },
      { heading: heading, items: rounds },
    ];
  } else if (dayType === 'strength') {
    heading = 'Strength & Conditioning — ' + fight.name;
    const pool = fight.weights[exLevel] || fight.weights.beginner;
    const exercises = pickRandom([...pool], Math.min(6, pool.length)).map(ex => ({
      ...ex,
      note: [ex.note, phase.weightNote].filter(Boolean).join(' · '),
    }));
    sections = [
      { heading: 'Warm-Up', items: pickRandom([...WARMUPS.general], 3) },
      { heading: heading, items: exercises },
    ];
  } else {
    heading = hasPartner
      ? 'Partner Work — ' + fight.name
      : 'Shadowboxing & Technique — ' + fight.name;
    const exercises = buildTechniqueRounds(selection, phase, hasPartner);
    sections = [
      { heading: 'Warm-Up', items: pickRandom([...MT_WARMUPS], 2) },
      { heading: heading, items: exercises },
    ];
  }

  return { title: heading, phaseNote: phase.theme, sections };
}
