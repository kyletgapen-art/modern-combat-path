// ─────────────────────────────────────────────
//  MODERN COMBAT — Workout Library
// ─────────────────────────────────────────────

const WARMUPS = {
  general: [
    { name: "Light Jog / March in Place", note: "Get blood flowing", prescription: "3 min" },
    { name: "Arm Circles", note: "Forward and backward", prescription: "20 each" },
    { name: "Hip Circles", note: "Loosen the hips", prescription: "15 each direction" },
    { name: "Leg Swings", note: "Front/back and lateral", prescription: "10 each leg" },
    { name: "Bodyweight Squats", note: "Controlled pace", prescription: "15 reps" },
    { name: "Inchworms", note: "Walk hands out to plank and back", prescription: "8 reps" },
    { name: "World's Greatest Stretch", note: "Hip flexor and thoracic", prescription: "5 each side" },
  ],
  combat: [
    { name: "Jump Rope", note: "Light pace", prescription: "3 min" },
    { name: "Shadowboxing", note: "Loose and relaxed", prescription: "2 rounds / 1 min" },
    { name: "Neck Rotations", note: "Slow and controlled", prescription: "10 each direction" },
    { name: "Shoulder Rolls", note: "Full range of motion", prescription: "15 reps" },
    { name: "Hip Switches", note: "Alternate each side", prescription: "20 reps" },
    { name: "Sprawl Drill", note: "Drop hips to floor and back up", prescription: "10 reps" },
    { name: "Ankle Rolls", note: "Loosen ankles for footwork", prescription: "15 each" },
  ],
};

const COOLDOWNS = {
  general: [
    { name: "Standing Quad Stretch", note: "Hold each side", prescription: "30 sec each" },
    { name: "Seated Hamstring Stretch", note: "Reach for toes", prescription: "30 sec each" },
    { name: "Hip Flexor Lunge Stretch", note: "Deep lunge, hold", prescription: "30 sec each" },
    { name: "Child's Pose", note: "Full spinal decompression", prescription: "60 sec" },
    { name: "Chest Opener", note: "Clasp hands behind back", prescription: "30 sec" },
    { name: "Pigeon Pose", note: "Hip rotation and glutes", prescription: "45 sec each" },
  ],
  combat: [
    { name: "Wrist and Forearm Stretch", note: "Essential after bag work", prescription: "30 sec each direction" },
    { name: "Neck Side Stretch", note: "Ear to shoulder, hold", prescription: "30 sec each" },
    { name: "Shoulder Cross-Body Stretch", note: "Pull arm across chest", prescription: "30 sec each" },
    { name: "Hip Flexor Lunge", note: "Deep lunge stretch", prescription: "30 sec each" },
    { name: "Seated Spinal Twist", note: "Decompress spine", prescription: "30 sec each side" },
    { name: "Child's Pose", note: "Full body reset", prescription: "60 sec" },
  ],
};

// ─── PT TEST LIBRARIES ───────────────────────────────────────────

const PT_WORKOUTS = {

  "army-acft": {
    name: "Army ACFT",
    events: ["3-Rep Max Deadlift", "Standing Power Throw", "Hand-Release Push-ups", "Sprint-Drag-Carry", "Leg Tuck / Plank", "2-Mile Run"],
    beginner: {
      30: [
        { name: "Trap Bar / Hex Bar Deadlift", note: "Focus on form — neutral spine", prescription: "4 sets × 5 reps @ 60% effort" },
        { name: "Hand-Release Push-ups", note: "Full dead stop at bottom", prescription: "4 sets × 10 reps" },
        { name: "Plank Hold", note: "Straight line head to heel", prescription: "3 × 30 sec" },
        { name: "400m Run Repeats", note: "Moderate pace, consistent", prescription: "3 rounds" },
      ],
      45: [
        { name: "Trap Bar Deadlift", note: "Build to a moderate heavy set", prescription: "5 sets × 4 reps" },
        { name: "Hand-Release Push-ups", note: "Full dead stop", prescription: "5 sets × 12 reps" },
        { name: "Broad Jump", note: "Max effort each rep", prescription: "4 sets × 5 reps" },
        { name: "Leg Tuck Negatives", note: "Slow lower from bar", prescription: "3 sets × 5 reps" },
        { name: "400m Run × 4", note: "1 min rest between", prescription: "4 rounds" },
      ],
      60: [
        { name: "Trap Bar Deadlift", note: "Work up to a near-max triple", prescription: "6 sets × 3 reps" },
        { name: "Hand-Release Push-ups", note: "Aim for max each set", prescription: "5 sets × max reps" },
        { name: "Standing Med Ball Throw", note: "Over-head or chest pass against wall", prescription: "5 sets × 6 reps" },
        { name: "Plank Hold", note: "Goal: 2 min continuous", prescription: "3 × 45 sec" },
        { name: "Sprint-Drag-Carry Practice", note: "Practice the movement pattern", prescription: "3 full runs" },
        { name: "1-Mile Tempo Run", note: "Comfortably hard pace", prescription: "1 × 1 mile" },
      ],
      90: [
        { name: "Trap Bar Deadlift", note: "Heavy work — 5×3, then back off set", prescription: "6 sets × 3 reps" },
        { name: "Romanian Deadlift", note: "Hamstring and posterior chain", prescription: "3 sets × 10 reps" },
        { name: "Hand-Release Push-ups", note: "Max reps each set", prescription: "6 sets × max" },
        { name: "Standing Med Ball Throw", note: "Explosive, full effort", prescription: "5 sets × 5 reps" },
        { name: "Pull-ups or Leg Tuck Practice", note: "Kipping allowed for endurance sets", prescription: "5 sets × max" },
        { name: "Sprint-Drag-Carry Intervals", note: "Rest 2 min between", prescription: "5 full runs" },
        { name: "2-Mile Run", note: "Goal pace effort", prescription: "1 × 2 miles" },
      ],
    },
    intermediate: {
      30: [
        { name: "Trap Bar Deadlift", note: "Work up to 80% 1RM", prescription: "4 sets × 3 reps" },
        { name: "Hand-Release Push-ups", note: "Max reps, record score", prescription: "3 sets × max" },
        { name: "Plank / Leg Tuck", note: "Alternate each set", prescription: "4 sets × 45 sec or 8 reps" },
        { name: "800m Run × 2", note: "Near test pace", prescription: "2 rounds" },
      ],
      45: [
        { name: "Trap Bar Deadlift", note: "85–90% effort", prescription: "5 sets × 3 reps" },
        { name: "Hand-Release Push-ups", note: "Max reps with strict form", prescription: "4 sets × max" },
        { name: "Broad Jump", note: "Explosive", prescription: "4 sets × 5 reps" },
        { name: "Leg Tuck / Alternating Hanging Knee Raises", note: "", prescription: "4 sets × 10 reps" },
        { name: "1-Mile Run at test pace", note: "", prescription: "1 × 1 mile" },
      ],
      60: [
        { name: "Trap Bar Deadlift — Heavy Triple", note: "Near max effort", prescription: "5 sets × 3 reps" },
        { name: "Deficit Push-ups", note: "Hands on plates for deeper ROM", prescription: "4 sets × 15 reps" },
        { name: "Explosive Med Ball Chest Pass", note: "Against wall or to partner", prescription: "5 sets × 6 reps" },
        { name: "Leg Tucks", note: "Record reps", prescription: "5 sets × max" },
        { name: "Sprint-Drag-Carry Drill", note: "Full course, timed", prescription: "4 runs" },
        { name: "2-Mile Run", note: "Tempo — 80% race effort", prescription: "1 × 2 miles" },
      ],
      90: [
        { name: "Trap Bar Deadlift — Max Triple", note: "ACFT prep — record weight", prescription: "6 sets × 3 reps" },
        { name: "Romanian Deadlift", note: "Accessory for posterior chain", prescription: "3 sets × 8 reps" },
        { name: "Weighted Push-up or Deficit Push-up", note: "", prescription: "5 sets × 15 reps" },
        { name: "Med Ball Throw for Distance", note: "Backward overhead or chest pass", prescription: "6 sets × 5 reps" },
        { name: "Leg Tucks + Plank Superset", note: "Max leg tucks then hold plank", prescription: "5 rounds" },
        { name: "Sprint-Drag-Carry × 6", note: "Full timed runs", prescription: "6 runs" },
        { name: "2-Mile Run at race pace", note: "", prescription: "1 × 2 miles" },
      ],
    },
    advanced: {
      30: [
        { name: "Trap Bar Deadlift — Heavy Double", note: "90–95% effort", prescription: "5 sets × 2 reps" },
        { name: "Explosive Med Ball Slam", note: "Full power each rep", prescription: "4 sets × 8 reps" },
        { name: "Hand-Release Push-ups — AMRAP", note: "Max reps, strict form", prescription: "3 sets × max" },
        { name: "1-Mile Time Trial", note: "Full race effort", prescription: "1 × 1 mile" },
      ],
      45: [
        { name: "Trap Bar Deadlift — Max Triple", note: "Record weight", prescription: "6 × 3 heavy" },
        { name: "Plyometric Push-ups", note: "Chest off ground each rep", prescription: "4 sets × 10 reps" },
        { name: "Med Ball Rotational Throw", note: "Against wall, hips drive the throw", prescription: "4 sets × 8 reps each side" },
        { name: "Weighted Pull-ups or Leg Tucks", note: "Add load as able", prescription: "5 sets × max" },
        { name: "2-Mile Run at race pace", note: "", prescription: "1 × 2 miles" },
      ],
      60: [
        { name: "Trap Bar Deadlift — Max Triple", note: "Competition simulation", prescription: "6 sets × 3 reps" },
        { name: "Plyometric Push-ups", note: "Explosive, full height", prescription: "5 sets × 10 reps" },
        { name: "Med Ball Throw — Multiple Variations", note: "Overhead, chest, rotational", prescription: "2 sets × 6 reps each" },
        { name: "Weighted Leg Tucks", note: "Belt or dumbbell between feet", prescription: "5 sets × 8 reps" },
        { name: "Full Sprint-Drag-Carry", note: "Timed, max effort", prescription: "5 runs" },
        { name: "2-Mile Time Trial", note: "Full race effort", prescription: "1 × 2 miles" },
      ],
      90: [
        { name: "Trap Bar Deadlift — Work up to true max", note: "Test day simulation", prescription: "8+ sets, build to max" },
        { name: "Good Mornings or RDL", note: "Posterior chain accessory", prescription: "4 sets × 8 reps" },
        { name: "Plyometric Push-ups Superset with Regular", note: "10 plyo then 20 regular", prescription: "5 supersets" },
        { name: "Med Ball Complex", note: "Overhead + rotational + slam", prescription: "4 rounds × 5 each" },
        { name: "Leg Tucks — Max Sets", note: "Rest 90 sec between", prescription: "6 sets × max" },
        { name: "Sprint-Drag-Carry — Max Rounds", note: "Rest 90 sec between", prescription: "6+ runs" },
        { name: "2-Mile Run — Race simulation", note: "", prescription: "1 × 2 miles" },
      ],
    },
  },

  "marine-pft": {
    name: "Marine PFT / CFT",
    events: ["Pull-ups / Push-ups", "Crunches / Plank", "3-Mile Run", "CFT: Movement to Contact, Ammo Can Lifts, Maneuver Under Fire"],
    beginner: {
      30: [
        { name: "Dead Hang", note: "Build grip and lat strength", prescription: "3 sets × max hang time" },
        { name: "Jumping Pull-up Negatives", note: "Jump up, slow lower", prescription: "4 sets × 5 reps" },
        { name: "Crunches", note: "PFT standard — hands crossed on chest", prescription: "4 sets × 20 reps" },
        { name: "1-Mile Easy Run", note: "Build aerobic base", prescription: "1 mile" },
      ],
      45: [
        { name: "Pull-up Negatives", note: "3-5 sec lowering", prescription: "5 sets × 5 reps" },
        { name: "Ring Rows or Inverted Rows", note: "Build pull strength", prescription: "4 sets × 12 reps" },
        { name: "Crunches", note: "Controlled pace", prescription: "5 sets × 25 reps" },
        { name: "Plank Hold", note: "PFT alternate event", prescription: "3 × 45 sec" },
        { name: "2-Mile Run", note: "Easy to moderate pace", prescription: "2 miles" },
      ],
      60: [
        { name: "Pull-up Negatives + Holds", note: "Eccentric focus", prescription: "5 sets × 5 reps" },
        { name: "Incline Push-ups to Regular Push-ups", note: "Transition when able", prescription: "4 sets × 15 reps" },
        { name: "Ammo Can Lift Practice", note: "Overhead press with 30 lb", prescription: "4 sets × 20 reps" },
        { name: "Movement to Contact Sprint", note: "880m at maximum effort", prescription: "2 runs" },
        { name: "Crunches", note: "", prescription: "5 sets × 30 reps" },
        { name: "2-Mile Run", note: "", prescription: "2 miles" },
      ],
      90: [
        { name: "Pull-up Negatives", note: "High volume", prescription: "6 sets × 6 reps" },
        { name: "Ring Rows", note: "Full range of motion", prescription: "4 sets × 12 reps" },
        { name: "Push-ups", note: "Max each set", prescription: "5 sets × max" },
        { name: "Ammo Can Lifts", note: "30 lb overhead", prescription: "5 sets × 20 reps" },
        { name: "Maneuver Under Fire Drill", note: "300 yd shuttle — crawl, sprint, drag", prescription: "3 runs" },
        { name: "Crunches / Plank", note: "Max crunches then plank hold", prescription: "5 supersets" },
        { name: "3-Mile Run", note: "Build run base", prescription: "3 miles" },
      ],
    },
    intermediate: {
      30: [
        { name: "Pull-ups", note: "Max reps, dead hang start", prescription: "5 sets × max" },
        { name: "Crunches", note: "Test pace — 2 min max", prescription: "3 × 2 min max" },
        { name: "1-Mile Tempo Run", note: "Hard but controlled pace", prescription: "2 × 1 mile" },
      ],
      45: [
        { name: "Weighted Pull-ups", note: "Add 10–20 lbs", prescription: "5 sets × 5 reps" },
        { name: "Push-ups — Max Effort", note: "", prescription: "4 sets × max" },
        { name: "Ammo Can Lifts — 30 lb", note: "2 min max reps", prescription: "4 sets × 2 min" },
        { name: "3-Mile Run at test pace", note: "", prescription: "3 miles" },
      ],
      60: [
        { name: "Pull-ups", note: "Max each set", prescription: "6 sets × max" },
        { name: "Ammo Can Lifts", note: "2 min max rounds", prescription: "5 sets × 2 min" },
        { name: "Movement to Contact", note: "880m sprint", prescription: "3 runs" },
        { name: "Crunches / Plank Superset", note: "", prescription: "5 rounds" },
        { name: "Maneuver Under Fire Drill", note: "Full 300 yd course", prescription: "3 runs" },
        { name: "3-Mile Run", note: "Test pace", prescription: "3 miles" },
      ],
      90: [
        { name: "Weighted Pull-ups + Max Pull-ups", note: "Heavy set then drop weight for max", prescription: "6 rounds" },
        { name: "Push-ups — 3 grips", note: "Wide, regular, narrow — max each", prescription: "3 sets each" },
        { name: "Ammo Can Complex", note: "Press, curl, upright row — 30 lb", prescription: "4 rounds × 15 reps each" },
        { name: "CFT Full Simulation", note: "All 3 events in sequence", prescription: "1–2 full runs" },
        { name: "Crunches", note: "Max reps", prescription: "5 × 2 min" },
        { name: "3-Mile Run", note: "Race pace", prescription: "3 miles" },
      ],
    },
    advanced: {
      30: [
        { name: "Weighted Pull-ups", note: "Heavy singles and doubles", prescription: "6 sets × 2–3 reps" },
        { name: "Explosive Crunches", note: "Punch hands to ceiling each rep", prescription: "3 × 40 reps" },
        { name: "2-Mile Time Trial", note: "Full race effort", prescription: "2 miles" },
      ],
      45: [
        { name: "Weighted Pull-ups + Max Pull-ups Drop Set", note: "Heavy then strip weight", prescription: "5 rounds" },
        { name: "Movement to Contact × 3", note: "880m max sprint", prescription: "3 runs" },
        { name: "Ammo Can Lifts — 2 min max", note: "", prescription: "5 sets" },
        { name: "3-Mile Run at PR pace", note: "", prescription: "3 miles" },
      ],
      60: [
        { name: "Max Pull-ups × 6", note: "Rest 90 sec", prescription: "6 sets × max" },
        { name: "Weighted Dips", note: "Tricep and chest accessory", prescription: "4 sets × 8 reps" },
        { name: "Full CFT Simulation", note: "Back to back events, timed", prescription: "2 full simulations" },
        { name: "3-Mile Run Fartlek", note: "Alternate fast/easy each mile", prescription: "3 miles" },
      ],
      90: [
        { name: "Max Effort Pull-up Test", note: "Record score — competition prep", prescription: "3 × max" },
        { name: "Ring Muscle-ups", note: "Advanced pulling strength", prescription: "4 sets × 5 reps" },
        { name: "Full CFT Simulation", note: "All events timed", prescription: "2 full runs" },
        { name: "Crunches Ladder", note: "25, 50, 75 reps with 60 sec rest", prescription: "3 rounds" },
        { name: "3-Mile Run at PR pace", note: "", prescription: "3 miles" },
      ],
    },
  },

  "navy-prt": {
    name: "Navy PRT",
    events: ["Curl-ups", "Push-ups", "1.5-Mile Run or 500-yd Swim"],
    beginner: {
      30: [
        { name: "Push-ups", note: "Strict form — full range", prescription: "4 sets × 10 reps" },
        { name: "Curl-ups", note: "PRT standard — knees bent, hands on thighs", prescription: "4 sets × 20 reps" },
        { name: "1-Mile Run", note: "Comfortable pace", prescription: "1 mile" },
      ],
      45: [
        { name: "Push-up Pyramid", note: "1, 2, 3... up to 8 and back down", prescription: "1 pyramid" },
        { name: "Curl-ups — 2 min max", note: "PRT standard", prescription: "3 × 2 min" },
        { name: "1.5-Mile Run", note: "Moderate pace", prescription: "1.5 miles" },
      ],
      60: [
        { name: "Push-ups", note: "Max each set", prescription: "5 sets × max" },
        { name: "Curl-ups", note: "Max in 2 min", prescription: "4 × 2 min" },
        { name: "Plank Hold", note: "Core accessory", prescription: "3 × 45 sec" },
        { name: "1.5-Mile Run + 400m Sprint", note: "Run the full distance then sprint the last 400", prescription: "1 run" },
      ],
      90: [
        { name: "Push-ups Grips Circuit", note: "Wide, regular, diamond", prescription: "4 sets × 12 reps each" },
        { name: "Curl-ups", note: "High volume", prescription: "5 × 2 min" },
        { name: "Dead Bug", note: "Core stability", prescription: "3 sets × 10 reps each side" },
        { name: "1.5-Mile Run", note: "Build to test pace", prescription: "2 × 1.5 miles" },
      ],
    },
    intermediate: {
      30: [
        { name: "Push-ups — Max Rounds", note: "Rest 60 sec between sets", prescription: "5 sets × max" },
        { name: "Curl-ups — 2 min max", note: "", prescription: "4 sets × 2 min" },
        { name: "1.5-Mile Tempo Run", note: "Near test pace", prescription: "1.5 miles" },
      ],
      45: [
        { name: "Weighted Push-ups", note: "Plate on back", prescription: "4 sets × 12 reps" },
        { name: "Push-ups Max Round", note: "Unweighted after", prescription: "3 sets × max" },
        { name: "Curl-ups", note: "Competition pace", prescription: "5 × 2 min" },
        { name: "1.5-Mile Time Trial", note: "Record time", prescription: "1.5 miles" },
      ],
      60: [
        { name: "Push-ups Supersets", note: "Push-ups + tricep dips", prescription: "5 rounds × 15 + 15" },
        { name: "Curl-ups + Hollow Body Hold", note: "", prescription: "5 rounds × 2 min + 30 sec" },
        { name: "400m Repeats", note: "Race pace effort", prescription: "6 × 400m" },
      ],
      90: [
        { name: "Push-up Ladder", note: "10, 15, 20, 20, 15, 10", prescription: "1 full ladder" },
        { name: "Weighted Push-ups", note: "Strength base", prescription: "4 sets × 10 reps" },
        { name: "Curl-ups — competition", note: "Max reps each set", prescription: "6 × 2 min" },
        { name: "Core Circuit", note: "Plank, dead bug, bicycle crunch", prescription: "3 rounds × 45 sec each" },
        { name: "1.5-Mile Race Pace Run × 2", note: "Full rest between", prescription: "2 runs" },
      ],
    },
    advanced: {
      30: [
        { name: "Plyometric Push-ups", note: "Chest off floor", prescription: "4 sets × 10 reps" },
        { name: "Push-up Max Test", note: "Record score", prescription: "3 × max" },
        { name: "1.5-Mile Time Trial", note: "PR effort", prescription: "1 run" },
      ],
      45: [
        { name: "Weighted Push-ups + Plyo Push-ups Superset", note: "", prescription: "5 rounds × 10 + 8" },
        { name: "Curl-ups Sprint Set", note: "Max reps in 90 sec", prescription: "5 sets" },
        { name: "1.5-Mile + 400m Sprint Finish", note: "", prescription: "1 run" },
      ],
      60: [
        { name: "Push-up Max Superset", note: "Max push-ups, rest 30 sec, max again", prescription: "6 rounds" },
        { name: "Curl-up Max Test", note: "Competition simulation", prescription: "5 × 2 min" },
        { name: "Interval Run", note: "400m on / 400m off — race pace on, recovery off", prescription: "6 rounds" },
      ],
      90: [
        { name: "Weighted Push-ups — Heavy", note: "Strength base", prescription: "5 sets × 8 reps" },
        { name: "Plyometric Push-up Circuit", note: "Plyo + regular + diamond", prescription: "4 rounds × 8 each" },
        { name: "Curl-up Simulation — 2 min max", note: "Record and track", prescription: "6 × 2 min" },
        { name: "Core — Advanced Circuit", note: "Dragon flag, hollow body, L-sit hold", prescription: "3 rounds × max" },
        { name: "1.5-Mile Race × 2", note: "Full effort, full rest", prescription: "2 runs" },
      ],
    },
  },

  "airforce-fa": {
    name: "Air Force Fitness Assessment",
    events: ["Push-ups", "Sit-ups", "1.5-Mile Run", "Waist Measurement"],
    beginner: {
      30: [
        { name: "Push-ups", note: "USAF standard — hands shoulder width", prescription: "4 sets × 12 reps" },
        { name: "Sit-ups", note: "90-degree knee bend, cross arms", prescription: "4 sets × 20 reps" },
        { name: "1-Mile Run", note: "Steady pace", prescription: "1 mile" },
      ],
      45: [
        { name: "Push-ups", note: "Max each set", prescription: "5 sets × max" },
        { name: "Sit-ups — 1 min max", note: "USAF scoring standard", prescription: "4 × 1 min" },
        { name: "Plank", note: "Core stability", prescription: "3 × 45 sec" },
        { name: "1.5-Mile Run", note: "Build to test distance", prescription: "1.5 miles" },
      ],
      60: [
        { name: "Push-ups", note: "Max reps × 5 sets", prescription: "5 × max" },
        { name: "Sit-ups", note: "Max in 1 min × 5 sets", prescription: "5 × 1 min" },
        { name: "Hip Flexor Stretch", note: "Sit-up recovery", prescription: "2 min total" },
        { name: "1.5-Mile Run", note: "Moderate effort", prescription: "1.5 miles" },
        { name: "400m Sprint", note: "Finish strong", prescription: "2 × 400m" },
      ],
      90: [
        { name: "Push-up Pyramid", note: "Build volume", prescription: "2 pyramids (1-10-1)" },
        { name: "Sit-ups High Volume", note: "Max 1 min sets", prescription: "6 × 1 min" },
        { name: "Core Circuit", note: "Plank, bicycle crunch, flutter kicks", prescription: "3 rounds × 30 sec each" },
        { name: "1.5-Mile Run × 2", note: "Full rest between", prescription: "2 runs" },
      ],
    },
    intermediate: {
      30: [
        { name: "Push-ups — Max 1 min", note: "USAF test format", prescription: "4 × 1 min" },
        { name: "Sit-ups — Max 1 min", note: "", prescription: "4 × 1 min" },
        { name: "1.5-Mile Tempo", note: "Hard effort", prescription: "1.5 miles" },
      ],
      45: [
        { name: "Weighted Push-ups + Max Push-ups", note: "Plate on back then strip", prescription: "5 rounds" },
        { name: "Sit-ups Max", note: "1 min competition pace", prescription: "5 × 1 min" },
        { name: "1.5-Mile Time Trial", note: "Record time", prescription: "1 run" },
      ],
      60: [
        { name: "Push-up + Sit-up Superset", note: "Max each with 30 sec rest", prescription: "6 rounds" },
        { name: "Core Circuit", note: "V-ups, hollow hold, plank", prescription: "3 rounds × 45 sec each" },
        { name: "1.5-Mile Intervals", note: "½ mile fast, ½ mile recovery × 3", prescription: "3 rounds" },
      ],
      90: [
        { name: "Weighted Push-ups", note: "Strength base", prescription: "5 sets × 10 reps" },
        { name: "Push-up Max Rounds", note: "Unweighted", prescription: "5 × max" },
        { name: "Sit-up Max Rounds", note: "1 min max", prescription: "6 × 1 min" },
        { name: "Core Stability Circuit", note: "", prescription: "3 rounds" },
        { name: "1.5-Mile Run × 2", note: "Test pace both runs", prescription: "2 runs" },
      ],
    },
    advanced: {
      30: [
        { name: "Plyometric Push-ups", note: "", prescription: "4 sets × 10 reps" },
        { name: "Push-up Max Test", note: "1 min record", prescription: "3 × 1 min" },
        { name: "1.5-Mile Time Trial", note: "PR pace", prescription: "1 run" },
      ],
      45: [
        { name: "Push-up Circuit", note: "Wide, regular, close — max each", prescription: "4 sets each" },
        { name: "Sit-up Ladder", note: "30, 40, 50, 40, 30 reps", prescription: "1 ladder" },
        { name: "1.5-Mile Race Pace + 400m Sprint", note: "", prescription: "1 run" },
      ],
      60: [
        { name: "Weighted + Plyo Push-up Superset", note: "", prescription: "5 rounds × 10 + 8" },
        { name: "Sit-up Test Simulation", note: "1 min max × 5", prescription: "5 rounds" },
        { name: "400m Repeats at mile pace", note: "", prescription: "8 × 400m" },
      ],
      90: [
        { name: "Full Push-up Periodization", note: "Weighted sets → max reps", prescription: "8 sets total" },
        { name: "Advanced Core Circuit", note: "Dragon flags, L-sits, weighted sit-ups", prescription: "4 rounds" },
        { name: "1.5-Mile × 2 — PR effort", note: "Full rest between", prescription: "2 time trials" },
      ],
    },
  },

  "coastguard-pt": {
    name: "Coast Guard PT Test",
    events: ["Push-ups", "Sit-ups", "1.5-Mile Run"],
    beginner: {
      30: [
        { name: "Push-ups", note: "Strict form", prescription: "4 × 12 reps" },
        { name: "Sit-ups", note: "USCG standard", prescription: "4 × 20 reps" },
        { name: "1-Mile Run", note: "Easy pace", prescription: "1 mile" },
      ],
      45: [
        { name: "Push-ups", note: "Max each set", prescription: "5 × max" },
        { name: "Sit-ups", note: "Max each set", prescription: "5 × 30 reps" },
        { name: "1.5-Mile Run", note: "", prescription: "1.5 miles" },
      ],
      60: [
        { name: "Push-up + Sit-up Superset", note: "Max push-ups then max sit-ups", prescription: "5 rounds" },
        { name: "Plank", note: "", prescription: "3 × 45 sec" },
        { name: "1.5-Mile + 800m", note: "Run, rest, run", prescription: "2 runs" },
      ],
      90: [
        { name: "Push-ups", note: "High volume", prescription: "6 × max" },
        { name: "Sit-ups", note: "High volume", prescription: "6 × 30 reps" },
        { name: "Core circuit", note: "Bicycle crunch, plank, flutter kicks", prescription: "3 rounds" },
        { name: "1.5-Mile Run × 2", note: "", prescription: "2 runs" },
      ],
    },
    intermediate: {
      30: [
        { name: "Push-ups Max", note: "", prescription: "5 × max" },
        { name: "Sit-ups Max", note: "", prescription: "5 × max" },
        { name: "1.5-Mile Tempo", note: "", prescription: "1.5 miles" },
      ],
      45: [
        { name: "Weighted Push-ups", note: "", prescription: "4 × 12" },
        { name: "Push-ups Max", note: "", prescription: "3 × max" },
        { name: "Sit-ups Max", note: "", prescription: "5 × max" },
        { name: "1.5-Mile Time Trial", note: "", prescription: "1 run" },
      ],
      60: [
        { name: "Push-up + Sit-up EMOM", note: "Every minute on the minute — 10 each", prescription: "10 rounds" },
        { name: "Core circuit", note: "", prescription: "3 rounds" },
        { name: "1.5-Mile × 2 at test pace", note: "", prescription: "2 runs" },
      ],
      90: [
        { name: "Weighted Push-ups", note: "", prescription: "5 × 10" },
        { name: "Max Push-up Sets", note: "", prescription: "5 × max" },
        { name: "Sit-up Max Sets", note: "", prescription: "6 × max" },
        { name: "Core Stability", note: "Advanced", prescription: "3 rounds" },
        { name: "1.5-Mile Run × 2", note: "", prescription: "2 runs" },
      ],
    },
    advanced: {
      30: [
        { name: "Plyometric Push-ups", note: "", prescription: "4 × 10" },
        { name: "Push-up + Sit-up Max Test", note: "", prescription: "3 rounds each" },
        { name: "1.5-Mile Time Trial", note: "", prescription: "1 run" },
      ],
      45: [
        { name: "Push-up Circuit", note: "3 grips, max each", prescription: "4 sets each" },
        { name: "Sit-ups with weight", note: "5 lb plate on chest", prescription: "4 × 20" },
        { name: "1.5-Mile PR effort", note: "", prescription: "1 run" },
      ],
      60: [
        { name: "Weighted + Max Push-up Superset", note: "", prescription: "5 rounds" },
        { name: "Weighted Sit-ups + Max Sit-ups", note: "", prescription: "5 rounds" },
        { name: "400m Repeats at mile race pace", note: "", prescription: "8 × 400m" },
      ],
      90: [
        { name: "Full Push-up Volume Day", note: "100+ total reps", prescription: "Multiple sets" },
        { name: "Full Sit-up Volume Day", note: "150+ total reps", prescription: "Multiple sets" },
        { name: "Core advanced circuit", note: "", prescription: "4 rounds" },
        { name: "1.5-Mile × 2 PR effort", note: "", prescription: "2 time trials" },
      ],
    },
  },

  "spacforce-fa": {
    name: "Space Force Fitness Assessment",
    events: ["Push-ups", "Sit-ups", "1.5-Mile Run", "Waist Measurement"],
    beginner: {
      30: [
        { name: "Push-ups", note: "Same standard as Air Force FA", prescription: "4 × 12" },
        { name: "Sit-ups", note: "1 min max", prescription: "4 × 1 min" },
        { name: "1-Mile Run", note: "", prescription: "1 mile" },
      ],
      45: [
        { name: "Push-ups", note: "Max sets", prescription: "5 × max" },
        { name: "Sit-ups", note: "1 min max", prescription: "5 × 1 min" },
        { name: "1.5-Mile Run", note: "", prescription: "1.5 miles" },
      ],
      60: [
        { name: "Push-up + Sit-up Superset", note: "", prescription: "5 rounds" },
        { name: "Plank", note: "", prescription: "3 × 45 sec" },
        { name: "1.5-Mile Run × 2", note: "", prescription: "2 runs" },
      ],
      90: [
        { name: "Push-ups High Volume", note: "", prescription: "6 × max" },
        { name: "Sit-ups High Volume", note: "", prescription: "6 × 1 min" },
        { name: "Core Circuit", note: "", prescription: "3 rounds" },
        { name: "1.5-Mile Run × 2", note: "", prescription: "2 runs" },
      ],
    },
    intermediate: {
      30: [
        { name: "Push-up + Sit-up Test Sim", note: "", prescription: "4 rounds each" },
        { name: "1.5-Mile Tempo", note: "", prescription: "1.5 miles" },
      ],
      45: [
        { name: "Weighted Push-ups + Max", note: "", prescription: "5 rounds" },
        { name: "Sit-ups Max", note: "", prescription: "5 × 1 min" },
        { name: "1.5-Mile Time Trial", note: "", prescription: "1 run" },
      ],
      60: [
        { name: "Push-up + Sit-up EMOM", note: "10 each per minute", prescription: "10 rounds" },
        { name: "Core Circuit", note: "", prescription: "3 rounds" },
        { name: "1.5-Mile × 2", note: "", prescription: "2 runs" },
      ],
      90: [
        { name: "Weighted Push-ups", note: "", prescription: "5 × 10" },
        { name: "Max Push-ups", note: "", prescription: "5 × max" },
        { name: "Sit-ups Max", note: "", prescription: "6 × 1 min" },
        { name: "Core Stability Advanced", note: "", prescription: "3 rounds" },
        { name: "1.5-Mile × 2", note: "", prescription: "2 runs" },
      ],
    },
    advanced: {
      30: [
        { name: "Plyometric Push-ups + Max Push-ups", note: "", prescription: "4 rounds" },
        { name: "Sit-up Sprint Rounds", note: "Max in 45 sec", prescription: "5 rounds" },
        { name: "1.5-Mile PR effort", note: "", prescription: "1 run" },
      ],
      45: [
        { name: "Push-up Circuit", note: "3 grips max", prescription: "4 sets each" },
        { name: "Weighted Sit-ups + Max", note: "", prescription: "5 rounds" },
        { name: "1.5-Mile + 400m Sprint", note: "", prescription: "1 run" },
      ],
      60: [
        { name: "Full Test Simulation", note: "Push-ups, sit-ups, 1.5-mile back to back", prescription: "1 full sim" },
        { name: "400m Repeats", note: "", prescription: "8 × 400m" },
      ],
      90: [
        { name: "Full Volume Push-up Day", note: "100+ reps", prescription: "Multiple sets" },
        { name: "Full Volume Sit-up Day", note: "150+ reps", prescription: "Multiple sets" },
        { name: "1.5-Mile × 2 — PR effort", note: "", prescription: "2 time trials" },
      ],
    },
  },

  "ntoa-pt": {
    name: "NTOA Law Enforcement PT",
    events: ["1.5-Mile Run", "Push-ups", "Sit-ups", "Vertical Jump", "300m Sprint"],
    beginner: {
      30: [
        { name: "Push-ups", note: "NTOA standard — strict form", prescription: "4 × 12" },
        { name: "Sit-ups", note: "", prescription: "4 × 20" },
        { name: "300m Sprint", note: "Build to max effort", prescription: "3 × 300m" },
      ],
      45: [
        { name: "Push-ups", note: "Max reps", prescription: "5 × max" },
        { name: "Sit-ups", note: "Max reps", prescription: "5 × max" },
        { name: "Vertical Jump Practice", note: "Stand, load hips, explode", prescription: "3 × 5 reps" },
        { name: "1.5-Mile Run", note: "", prescription: "1.5 miles" },
      ],
      60: [
        { name: "Push-ups", note: "Max", prescription: "5 × max" },
        { name: "Sit-ups", note: "Max", prescription: "5 × max" },
        { name: "Vertical Jump + Broad Jump", note: "", prescription: "4 sets × 5 reps each" },
        { name: "300m Sprint × 4", note: "Full rest between", prescription: "4 × 300m" },
        { name: "1-Mile Run", note: "", prescription: "1 mile" },
      ],
      90: [
        { name: "Push-ups", note: "High volume", prescription: "6 × max" },
        { name: "Sit-ups", note: "High volume", prescription: "6 × max" },
        { name: "Box Jumps", note: "Explosive vertical power", prescription: "4 × 8 reps" },
        { name: "300m Sprint × 5", note: "Full recovery between", prescription: "5 runs" },
        { name: "1.5-Mile Run", note: "", prescription: "1.5 miles" },
      ],
    },
    intermediate: {
      30: [
        { name: "Push-ups Max", note: "", prescription: "5 × max" },
        { name: "Sit-ups Max", note: "", prescription: "5 × max" },
        { name: "300m Sprint × 4", note: "Near max effort", prescription: "4 runs" },
      ],
      45: [
        { name: "Weighted Push-ups + Max", note: "", prescription: "5 rounds" },
        { name: "Weighted Sit-ups", note: "5 lb plate on chest", prescription: "4 × 20" },
        { name: "Box Jumps", note: "Explosive", prescription: "4 × 6" },
        { name: "1.5-Mile Tempo", note: "", prescription: "1.5 miles" },
      ],
      60: [
        { name: "Push-up + Sit-up Superset Max", note: "", prescription: "6 rounds" },
        { name: "Vertical Jump Training", note: "Box jumps, broad jumps, depth jumps", prescription: "4 rounds × 5 each" },
        { name: "300m Sprint × 5", note: "", prescription: "5 runs" },
        { name: "1.5-Mile Run at test pace", note: "", prescription: "1.5 miles" },
      ],
      90: [
        { name: "Push-up Periodization", note: "Weighted → max", prescription: "8 sets" },
        { name: "Sit-up Max Sets", note: "", prescription: "6 × max" },
        { name: "Plyometric Circuit", note: "Box jumps, broad jumps, lateral bounds", prescription: "4 rounds" },
        { name: "300m Sprint × 6", note: "Timed", prescription: "6 runs" },
        { name: "1.5-Mile Time Trial", note: "", prescription: "1 run" },
      ],
    },
    advanced: {
      30: [
        { name: "Plyometric Push-ups + Max", note: "", prescription: "4 rounds" },
        { name: "Weighted Sit-ups + Max", note: "", prescription: "4 rounds" },
        { name: "300m Sprint Time Trial × 3", note: "PR effort", prescription: "3 runs" },
      ],
      45: [
        { name: "Full Upper Body Circuit", note: "Push-ups, dips, rows — max each", prescription: "4 rounds" },
        { name: "Vertical Jump Max Training", note: "Depth jumps, reactive jumps", prescription: "4 sets × 5 reps" },
        { name: "300m Sprint × 5 + 1.5-Mile", note: "", prescription: "5 sprints + 1 run" },
      ],
      60: [
        { name: "NTOA Full Test Simulation", note: "All events back to back", prescription: "2 full sims" },
        { name: "400m Repeats", note: "", prescription: "6 × 400m" },
      ],
      90: [
        { name: "NTOA Full Test Simulation", note: "Competition prep", prescription: "2 full sims" },
        { name: "Plyometric Power Circuit", note: "Jumps, throws, sprints", prescription: "4 rounds" },
        { name: "1.5-Mile Time Trial", note: "PR effort", prescription: "2 runs" },
      ],
    },
  },

};

// ─── COMBAT COMBO & DRILL LIBRARIES ──────────────────────────────
// Edit the arrays below to customise combos and drills.
// Combos are picked randomly each session — no difficulty gate.

const MT_COMBOS = [
  // Basic combos
  'Jab Jab',
  'Jab Cross',
  'Jab Cross Hook',
  'Cross Hook Cross',
  'Cross Hook Hook',
  'Jab Cross Cross',
  'Cross Lead Uppercut Hook',
  'Jab Lead Uppercut Cross',
  // Combos with kicks
  'Jab Cross Rear Kick',
  'Jab Cross Lead Kick',
  'Jab Cross Hook Rear Kick',
  'Cross Hook Cross Rear Kick',
  'Jab Cross Hook Rear Knee',
  'Cross Hook Cross Rear Knee',
  'Jab Lead Uppercut Cross Rear Kick',
  'Cross Lead Uppercut Hook Low Kick',
  'Jab Cross Rear Teep',
  'Lead Teep Jab Cross',
  'Rear Teep Cross Hook Cross',
  'Low Kick Jab Cross Hook',
  'Jab Cross Cross Rear Kick',
  'Jab Rear Kick Cross Switch Kick',
  // Combos with elbows
  'Jab Cross Spear Elbow',
  'Cross Hook Cross Slash Elbow (Desc.)',
  'Jab Cross Hook Uppercut Elbow Low Kick',
  'Cross Lead Uppercut Hook Tomahawk Elbow',
  'Jab Cross Slash Elbow (Asc.) Rear Kick',
  'Cross Hook Cross Spear Elbow Rear Knee',
  'Lead Teep Jab Cross Lead Uppercut Hook Rear Kick',
  'Rear Teep Cross Hook Cross Rear Knee',
  'Jab Cross Hook Cross Slash Elbow (Desc.) Low Kick',
  'Cross Lead Uppercut Rear Uppercut Hook Tomahawk Elbow',
  'Low Kick Jab Cross Spear Elbow Rear Kick',
];

const MT_DRILLS = [
  { name: 'Jab Rear Kick Cross Switch Kick', desc: 'Land the jab, rear kick, cross, switch kick — flow drill' },
  { name: 'Lead Teep 10-10-20', desc: '10 right leg, 10 left leg, 20 alternating' },
  { name: 'Rear Teep 10-10-20', desc: '10 right leg, 10 left leg, 20 alternating' },
  { name: 'Low Kick 10-10-20', desc: '10 right, 10 left, 20 alternating' },
  { name: 'Body Kick 10-10-20', desc: '10 right, 10 left, 20 alternating' },
  { name: 'High Kick 10-10-20', desc: '10 right, 10 left, 20 alternating — chamber high, full hip rotation' },
  { name: 'Switch Kick 10-10-20', desc: 'Switch stance then kick — 10 right, 10 left, 20 alternating' },
  { name: 'Rear Knee 10-10-20', desc: 'Drive from the hip — 10 right, 10 left, 20 alternating' },
  { name: 'Lead Knee 10-10-20', desc: 'Lead knee strike — 10 right, 10 left, 20 alternating' },
  { name: 'Spear Elbow 10-10-20', desc: 'Horizontal forward elbow — 10 each side, 20 alternating' },
  { name: 'Slash Elbow Desc. 10-10-20', desc: 'Diagonal downward chop — 10 each side, 20 alternating' },
  { name: 'Slash Elbow Asc. 10-10-20', desc: 'Diagonal upward cut — 10 each side, 20 alternating' },
  { name: 'Tomahawk Elbow 10-10-20', desc: 'Overhead axe-style downward drop — 10 each, 20 alternating' },
  { name: 'Uppercut Elbow 10-10-20', desc: 'Close-range upward drive — 10 each, 20 alternating' },
  { name: 'Kick Check 10-10-20', desc: 'Lift lead shin to intercept low kick — 10 each leg, 20 alternating' },
  { name: 'Kick Check and Counter', desc: 'Check the low kick, immediately return rear kick — 10 each side' },
];

const BJJ_DRILLS = {
  beginner: [
    { name: 'Hip Escape (Shrimp)', note: 'Drive hips out, create frames — fundamental guard recovery', prescription: '3 min · 60 sec rest' },
    { name: 'Bridge and Roll', note: 'Full bridge, trap arm, roll to top', prescription: '3 min · 60 sec rest' },
    { name: 'Guard Retention', note: 'Hip movement and framing against standing partner or bag', prescription: '3 min · 60 sec rest' },
  ],
  intermediate: [
    { name: 'Hip Escape to Takedown Entry', note: 'Shrimp out, stand, penetration step', prescription: '3 min · 45 sec rest' },
    { name: 'Sprawl to Back Take', note: 'Sprawl on shot, flatten, take back', prescription: '3 min · 45 sec rest' },
    { name: 'Triangle → Armbar → Omoplata Flow', note: 'Chain submissions from guard', prescription: '3 min · 45 sec rest' },
    { name: 'Knee Slice Pass', note: 'Grip, slice the knee through, establish side control', prescription: '3 min · 45 sec rest' },
  ],
  advanced: [
    { name: 'Scramble Drill', note: 'Fast position changes — back and forth with partner or solo', prescription: '3 min · 35 sec rest' },
    { name: 'Submission Chain — Advanced', note: 'Kimura, Guillotine, RNC flow', prescription: '3 min · 35 sec rest' },
    { name: 'Takedown + Finish Combo', note: 'Shoot, land in position, attack submission immediately', prescription: '3 min · 35 sec rest' },
    { name: 'Guard Recovery Under Pressure', note: 'Partner applies constant pressure, recover full guard or half', prescription: '3 min · 35 sec rest' },
  ],
};

const JUDO_DRILLS = {
  beginner: [
    { name: 'Uchikomi — O Goshi', note: '30 entries per set — hip throw entry, no completion', prescription: '3 sets' },
    { name: 'Uchikomi — Seoi Nage', note: '30 entries per set — shoulder throw entry', prescription: '3 sets' },
    { name: 'Kuzushi Drill', note: 'Off-balance your grip in all 8 directions', prescription: '3 min · 60 sec rest' },
  ],
  intermediate: [
    { name: 'Continuous Uchikomi', note: 'Non-stop throw entries — max reps in time', prescription: '3 × 1 min · 45 sec rest' },
    { name: 'Drop Seoi Nage Entries', note: 'Drop knee entry — 20 each side', prescription: '4 sets' },
    { name: 'Tai Otoshi — Body Drop Entries', note: 'Foot placement and body rotation', prescription: '3 × 20 reps each side' },
    { name: 'Combination — O Goshi into Tai Otoshi', note: 'Set up with O Goshi, switch to Tai Otoshi on resistance', prescription: '3 × 10 combos each side' },
  ],
  advanced: [
    { name: 'Explosive Uchikomi — Kuzushi Emphasis', note: 'Break balance fully before entry — max speed', prescription: '5 × 1 min · 35 sec rest' },
    { name: 'Counter-Throw Simulation', note: 'Enter, feel resistance, immediately counter-enter', prescription: '4 × 2 min · 35 sec rest' },
    { name: 'Nage Komi — Full Throws', note: 'Complete throws with controlled ukemi', prescription: '3 × 10 each side' },
    { name: 'Combination Chain', note: '3-throw combo — set up, bait resistance, finish', prescription: '4 × 8 combos' },
  ],
};

// ─── MUAY THAI WARM-UPS ───────────────────────────────────────────
// Short and real — 2 picked randomly per session. Max ~5 min total.

const MT_WARMUPS = [
  { name: "Easy Jog", note: "Slow pace — loosen the hips, shoulders, and ankles", prescription: "5 min" },
  { name: "Jump Rope", note: "Easy pace — find your rhythm", prescription: "2 rounds × 3 min" },
  { name: "Shadowboxing", note: "Loose and relaxed — use all weapons, no power", prescription: "3 min" },
  { name: "Weighted Punch Round", note: "2 lb weights — 1 min straight punches, 1 min hooks, 1 min uppercuts, 1 min straight punches. No rest.", prescription: "4 min" },
  { name: "Broad Jumps", note: "Max distance each rep — land soft, absorb impact", prescription: "2 × 8 reps" },
  { name: "Single Leg Hops", note: "Forward and back — 10 each leg", prescription: "2 × 10 each leg" },
  { name: "Double Leg Hops", note: "Forward, back, left, right", prescription: "2 × 10 reps" },
  { name: "Push-ups", note: "Full range — warm up the chest and shoulders", prescription: "2 × 10 reps" },
];

// ─── GENERAL FITNESS LIBRARIES ────────────────────────────────────

const GENERAL_WORKOUTS = {

  cardio: {
    name: "Cardio",
    beginner: [
      { name: "Easy Jog", note: "Conversational pace — you should be able to talk", prescription: "20 min" },
      { name: "Walk / Run Intervals", note: "1 min run, 2 min walk", prescription: "8 rounds" },
      { name: "Jump Rope — Easy", note: "Single unders, steady pace", prescription: "5 × 2 min · 1 min rest" },
      { name: "Stair Climbing", note: "Steady pace up and down", prescription: "15 min" },
      { name: "400m Easy Run", note: "Relaxed pace, focus on breathing", prescription: "4 × 400m · 2 min rest" },
      { name: "Bike / Row — Easy", note: "Low resistance, comfortable pace", prescription: "20 min" },
    ],
    intermediate: [
      { name: "Tempo Run", note: "Comfortably hard — can speak in short sentences only", prescription: "25 min" },
      { name: "400m Repeats", note: "Near mile race pace — consistent splits", prescription: "6 × 400m · 90 sec rest" },
      { name: "Jump Rope — Mixed", note: "Alternate single and double unders", prescription: "8 × 2 min · 60 sec rest" },
      { name: "Fartlek Run", note: "30 min steady with 1 min hard surges every 5 min", prescription: "30 min" },
      { name: "Row Intervals", note: "500m hard, 500m easy", prescription: "5 rounds" },
      { name: "800m Repeats", note: "5K effort — controlled breathing", prescription: "4 × 800m · 2 min rest" },
    ],
    advanced: [
      { name: "Mile Repeats", note: "5K pace — consistent effort each mile", prescription: "4 × 1 mile · 2 min rest" },
      { name: "VO2 Max Intervals", note: "Maximum effort — full recovery between", prescription: "5 × 3 min · 3 min rest" },
      { name: "Tempo Run", note: "Race pace — sustained effort", prescription: "40 min" },
      { name: "400m Sprint Ladder", note: "10 × 400m at mile pace — 60 sec rest", prescription: "10 rounds · 60 sec rest" },
      { name: "Jump Rope — Advanced", note: "Double unders, crossovers, alternating feet", prescription: "10 × 2 min · 30 sec rest" },
      { name: "Row / Ski Erg Intervals", note: "30 sec all-out, 30 sec rest", prescription: "20 rounds" },
    ],
  },

  'upper-body': {
    name: "Upper Body",
    beginner: [
      { name: "Push-ups", note: "Full range — chest to floor", prescription: "4 × max reps" },
      { name: "Dumbbell Shoulder Press", note: "Seated or standing", prescription: "3 × 12 reps" },
      { name: "Bent-Over Dumbbell Row", note: "Neutral spine, pull to hip", prescription: "3 × 10 each side" },
      { name: "Bicep Curl", note: "Full extension at bottom", prescription: "3 × 12 reps" },
      { name: "Tricep Dip", note: "On bench or chair — full range", prescription: "3 × 10 reps" },
      { name: "Face Pull", note: "External rotation — rear delt and rotator cuff", prescription: "3 × 15 reps" },
      { name: "Band Pull-Apart", note: "Chest high, squeeze shoulder blades", prescription: "3 × 20 reps" },
    ],
    intermediate: [
      { name: "Bench Press", note: "Controlled descent, drive up", prescription: "4 × 8 reps" },
      { name: "Pull-ups", note: "Dead hang start — full range", prescription: "4 × max reps" },
      { name: "Overhead Press", note: "Bar or dumbbells — brace the core", prescription: "4 × 8 reps" },
      { name: "Barbell Row", note: "Horizontal pull — squeeze at top", prescription: "4 × 8 reps" },
      { name: "Weighted Dips", note: "Belt or dumbbell — full range", prescription: "3 × 8 reps" },
      { name: "Lateral Raises", note: "Light weight, slow and controlled", prescription: "3 × 15 reps" },
      { name: "Cable Row", note: "Elbows in — full contraction", prescription: "3 × 12 reps" },
    ],
    advanced: [
      { name: "Weighted Pull-ups", note: "Belt or vest — controlled reps", prescription: "5 × 5 reps" },
      { name: "Heavy Bench Press", note: "Work to 85-90% effort", prescription: "5 × 5 reps" },
      { name: "Push Press", note: "Leg drive to start — lock out overhead", prescription: "4 × 6 reps" },
      { name: "Pendlay Row", note: "Dead stop each rep — explosive pull", prescription: "4 × 6 reps" },
      { name: "Ring Dips or Weighted Dips", note: "Full range — controlled", prescription: "4 × max or weighted 8 reps" },
      { name: "Arnold Press", note: "Full rotation — hit all three delt heads", prescription: "4 × 8 reps" },
      { name: "Incline Dumbbell Press", note: "Upper chest emphasis", prescription: "4 × 8 reps" },
    ],
  },

  'lower-body': {
    name: "Lower Body",
    beginner: [
      { name: "Bodyweight Squats", note: "Knees out — full depth if able", prescription: "4 × 15 reps" },
      { name: "Reverse Lunges", note: "Step back — front shin vertical", prescription: "3 × 10 each leg" },
      { name: "Glute Bridge", note: "Drive through heels — squeeze at top", prescription: "4 × 15 reps" },
      { name: "Calf Raises", note: "Full range — slow down, fast up", prescription: "3 × 20 reps" },
      { name: "Step-ups", note: "Drive through front foot — no push from back leg", prescription: "3 × 10 each leg" },
      { name: "Romanian Deadlift", note: "Light weight — feel the hamstring stretch", prescription: "3 × 12 reps" },
    ],
    intermediate: [
      { name: "Back Squat", note: "Bar on traps — knees tracking toes", prescription: "4 × 8 reps" },
      { name: "Romanian Deadlift", note: "Load the hamstrings fully", prescription: "4 × 8 reps" },
      { name: "Bulgarian Split Squat", note: "Rear foot elevated — deep single-leg squat", prescription: "3 × 10 each leg" },
      { name: "Hip Thrust", note: "Barbell — full glute extension at top", prescription: "4 × 10 reps" },
      { name: "Leg Press", note: "Controlled — full range of motion", prescription: "4 × 12 reps" },
      { name: "Box Jump", note: "Max height — land soft, step down", prescription: "4 × 5 reps" },
    ],
    advanced: [
      { name: "Back Squat — Heavy", note: "85-90% effort — depth and control", prescription: "5 × 5 reps" },
      { name: "Conventional Deadlift", note: "Work up to a heavy set of 3", prescription: "5 × 3 reps" },
      { name: "Front Squat", note: "Elbows high — upright torso", prescription: "4 × 5 reps" },
      { name: "Nordic Hamstring Curl", note: "Slow eccentric — control the lower", prescription: "4 × 6 reps" },
      { name: "Trap Bar Jump Squat", note: "Light-moderate load — maximum intent", prescription: "4 × 5 reps" },
      { name: "Sled Push", note: "Low drive angle — maximum power output", prescription: "6 × 20m · 90 sec rest" },
    ],
  },

  core: {
    name: "Core",
    beginner: [
      { name: "Plank Hold", note: "Straight line — no sagging hips", prescription: "3 × 30 sec" },
      { name: "Dead Bug", note: "Lower back stays glued to floor", prescription: "3 × 10 each side" },
      { name: "Hollow Body Hold", note: "Belly button to spine — arms and legs low", prescription: "3 × 20 sec" },
      { name: "Bicycle Crunch", note: "Slow and deliberate — opposite elbow to knee", prescription: "3 × 15 each side" },
      { name: "Bird Dog", note: "Opposite arm and leg — hold 2 sec at top", prescription: "3 × 10 each side" },
      { name: "Flutter Kicks", note: "Low back pressed down — small fast kicks", prescription: "3 × 20 sec" },
    ],
    intermediate: [
      { name: "Hanging Knee Raise", note: "Full hang — bring knees to chest", prescription: "4 × 12 reps" },
      { name: "Ab Wheel Rollout", note: "From knees — full extension, pull back with core", prescription: "3 × 8 reps" },
      { name: "Russian Twist", note: "Weighted — full rotation each side", prescription: "3 × 15 each side" },
      { name: "V-Ups", note: "Reach hands to feet at top", prescription: "3 × 12 reps" },
      { name: "Pallof Press", note: "Cable or band — resist rotation", prescription: "3 × 12 each side" },
      { name: "Plank with Hip Dip", note: "Side plank — dip hip to floor, return", prescription: "3 × 12 each side" },
    ],
    advanced: [
      { name: "Dragon Flag", note: "Full body lowering — slow eccentric", prescription: "4 × max reps" },
      { name: "L-Sit Hold", note: "Parallel bars or rings — hold as long as possible", prescription: "3 × max hold" },
      { name: "Toes to Bar", note: "Straight legs — controlled kip if needed", prescription: "4 × 10 reps" },
      { name: "Weighted Cable Crunch", note: "Full range — round the spine", prescription: "4 × 12 reps" },
      { name: "Ab Wheel — Standing", note: "Full rollout from standing", prescription: "4 × 8 reps" },
      { name: "Hanging Windshield Wiper", note: "Toes to bar — rotate left and right", prescription: "3 × 8 reps" },
    ],
  },

  hiit: {
    name: "HIIT Conditioning",
    beginner: [
      { name: "AMRAP 10 min", note: "5 Push-ups → 10 Squats → 15 Jumping Jacks — max rounds", prescription: "10 min AMRAP" },
      { name: "Tabata — Jumping Jacks", note: "20 sec work / 10 sec rest × 8 rounds", prescription: "4 min total" },
      { name: "3-Round Circuit", note: "10 push-ups → 15 squats → 10 burpees → 20 jumping jacks", prescription: "3 rounds · 90 sec rest between" },
      { name: "Ladder", note: "1 burpee, rest 30 sec → 2 burpees, rest 30 sec → … up to 10", prescription: "10 rungs" },
      { name: "20-10 Intervals", note: "20 sec squat jumps / 10 sec rest — alternating with push-ups", prescription: "8 rounds each" },
    ],
    intermediate: [
      { name: "Tabata — Burpees", note: "20 sec max effort / 10 sec rest × 8 rounds", prescription: "4 min · Rest 2 min · Repeat × 3" },
      { name: "EMOM 15 min", note: "Odd min: 10 push-ups · Even min: 15 squats", prescription: "15 rounds" },
      { name: "Chipper", note: "50 squats → 40 sit-ups → 30 push-ups → 20 burpees → 10 pull-ups — for time", prescription: "1 round for time" },
      { name: "AMRAP 15 min", note: "10 push-ups → 15 goblet squats → 10 KB swings → 200m run", prescription: "15 min AMRAP" },
      { name: "Interval Sprint Circuit", note: "200m sprint → 10 push-ups → 10 burpees — rest 90 sec", prescription: "6 rounds" },
    ],
    advanced: [
      { name: "Cindy — AMRAP 20 min", note: "5 pull-ups → 10 push-ups → 15 air squats — max rounds", prescription: "20 min AMRAP" },
      { name: "EMOM 20 min", note: "Odd: 10 burpees · Even: 15 box jumps", prescription: "20 rounds" },
      { name: "For Time — Full Chipper", note: "100 squats → 75 sit-ups → 50 push-ups → 25 pull-ups → 1 mile run", prescription: "1 round for time" },
      { name: "Tabata Complex", note: "4 min burpees, rest 2 min → 4 min squat jumps, rest 2 min → 4 min push-ups", prescription: "3 blocks" },
      { name: "Sprint Intervals", note: "10 × 200m all-out — full effort each rep", prescription: "10 × 200m · 90 sec rest" },
    ],
  },

  hyrox: {
    name: "HYROX",
    beginner: [
      { name: "HYROX Skills Circuit", note: "4 rounds: 500m row or ski + 25 wall balls + 50m farmer carry + 10 burpee broad jumps", prescription: "4 rounds · rest as needed" },
      { name: "Run + Station Interval", note: "400m run → SkiErg or Row 500m — rest 2 min between rounds", prescription: "5 rounds" },
      { name: "Sled Prep", note: "Sled push 25m + sled pull 25m — light load", prescription: "6 rounds · 2 min rest" },
      { name: "Functional Strength Circuit", note: "KB swing 20 reps → Wall ball 15 reps → Burpee broad jump 10 reps → Farmer carry 50m", prescription: "4 rounds · 2 min rest" },
      { name: "Run Volume", note: "Easy 5km — build aerobic base for HYROX race", prescription: "5km easy" },
    ],
    intermediate: [
      { name: "HYROX Half Simulation", note: "4 × (1km run + station): SkiErg 500m → Sled Push 25m → Burpee Broad Jump 40m → Row 500m", prescription: "4 stations" },
      { name: "Station Repeats", note: "3 rounds of each HYROX station at race effort — SkiErg 1000m, Wall Balls 75, Farmer Carry 100m, Sandbag Lunges 50m", prescription: "3 × each station · 90 sec rest" },
      { name: "Run + Strength Combo", note: "1km run → 20 wall balls → 1km run → 15 burpee broad jumps → 1km run → Farmer carry 100m", prescription: "For time" },
      { name: "Sled Work", note: "Sled push 50m + sled pull 50m — moderate load", prescription: "5 rounds · 2 min rest" },
    ],
    advanced: [
      { name: "Full HYROX Race Simulation", note: "8 × (1km run + station): SkiErg 1000m → Sled Push 50m → Sled Pull 50m → Burpee Broad Jump 80m → Row 1000m → Farmer Carry 200m → Sandbag Lunges 100m → Wall Balls 100 reps", prescription: "Full race — record total time" },
      { name: "Race Pace Intervals", note: "1km at HYROX target pace → SkiErg 1000m → 1km run → Row 1000m — rest 3 min between pairs", prescription: "4 pairs" },
      { name: "HYROX Strength Day", note: "Heavy sled push 6 × 50m + heavy farmer carry 6 × 50m + wall balls 5 × 20 — max load each", prescription: "6 sets each" },
      { name: "Volume Run + Stations", note: "5km run → immediately: 3 rounds of (20 wall balls + 10 burpee broad jumps + 50m farmer carry)", prescription: "For time" },
    ],
  },

  crossfit: {
    name: "CrossFit-Style",
    beginner: [
      { name: "AMRAP 10 min", note: "5 Push-ups → 10 Air Squats → 15 Sit-ups — log rounds completed", prescription: "10 min AMRAP" },
      { name: "For Time — 3 Rounds", note: "10 push-ups → 15 squats → 10 burpees → 200m run", prescription: "3 rounds for time" },
      { name: "EMOM 10 min", note: "Odd min: 10 push-ups · Even min: 10 squats + 5 burpees", prescription: "10 min EMOM" },
      { name: "Chipper", note: "50 squats → 40 sit-ups → 30 push-ups → 20 burpees — for time", prescription: "For time" },
      { name: "21-15-9", note: "Dumbbell Thrusters (moderate weight) + Sit-ups — for time", prescription: "For time" },
    ],
    intermediate: [
      { name: "Fran", note: "21-15-9: Thrusters (75/55 lb) + Pull-ups — for time", prescription: "For time — sub-10 min target" },
      { name: "Cindy", note: "AMRAP 20 min: 5 pull-ups → 10 push-ups → 15 air squats", prescription: "20 min AMRAP" },
      { name: "EMOM 15 min", note: "Odd: 5 pull-ups + 7 push-ups + 9 squats · Even: rest", prescription: "15 min EMOM" },
      { name: "For Time — Run + Work", note: "5 rounds: 400m run → 15 push-ups → 20 squats", prescription: "For time" },
      { name: "DT", note: "5 rounds for time: 12 deadlifts → 9 hang power cleans → 6 push jerks (115/75 lb)", prescription: "For time" },
    ],
    advanced: [
      { name: "Murph", note: "1 mile run → 100 pull-ups → 200 push-ups → 300 squats → 1 mile run (partition pull-ups/push-ups/squats as needed)", prescription: "For time — wear vest if able" },
      { name: "Helen", note: "3 rounds for time: 400m run + 21 KB swings (53/35 lb) + 12 pull-ups", prescription: "For time" },
      { name: "Diane", note: "21-15-9: Deadlifts (225/155 lb) + Handstand Push-ups — for time", prescription: "For time" },
      { name: "Grace", note: "30 Clean and Jerks (135/95 lb) for time", prescription: "For time — sub-5 min target" },
      { name: "Jackie", note: "For time: 1000m row → 50 thrusters (45/35 lb) → 30 pull-ups", prescription: "For time" },
    ],
  },

};

// ─── FIGHT NIGHT LIBRARIES ────────────────────────────────────────

const FIGHT_WORKOUTS = {

  "muay-thai": {
    name: "Muay Thai Conditioning",
    weights: {
      beginner: [
        { name: "Hip Flexor Raises", note: "Knee drive power", prescription: "3 × 15 each side" },
        { name: "Lateral Band Walks", note: "Hip stability for kicking", prescription: "3 × 15 each side" },
        { name: "Goblet Squat", note: "Leg power and stability", prescription: "4 × 12 reps" },
        { name: "Jump Rope", note: "Footwork and cardio", prescription: "5 × 2 min" },
        { name: "Core — Plank with Hip Dip", note: "Oblique strength for rotating kicks", prescription: "3 × 12 each side" },
      ],
      intermediate: [
        { name: "Bulgarian Split Squat", note: "Single-leg kicking power", prescription: "4 × 10 each leg" },
        { name: "Hip Extension on Cable", note: "Simulate kick power", prescription: "3 × 15 each side" },
        { name: "Rotational Med Ball Slam", note: "Torso rotation for punches and kicks", prescription: "4 × 8 each side" },
        { name: "Romanian Deadlift", note: "Posterior chain power", prescription: "4 × 8 reps" },
        { name: "Battle Ropes — Alternating", note: "Shoulder and cardio", prescription: "5 × 30 sec" },
      ],
      advanced: [
        { name: "Trap Bar Deadlift — Explosive", note: "Drive through floor", prescription: "5 × 3 reps" },
        { name: "Box Jump to Split Squat", note: "Jump and land in lunge", prescription: "4 × 6 reps" },
        { name: "Resistance Band Kick Drill", note: "Band around ankles — slow controlled kicks against resistance", prescription: "3 × 15 each leg" },
        { name: "Med Ball Rotational Throws", note: "Maximum power each rep", prescription: "5 × 8 each side" },
        { name: "Sled Push", note: "Drive power and conditioning", prescription: "6 × 20m" },
      ],
    },
    partner: {
      beginner: [
        { name: "Pad Work — Basic Combos", note: "Jab-cross, teep, kick", prescription: "4 rounds × 2 min" },
        { name: "Body Shield Kicks", note: "Low kick and body kick power", prescription: "3 rounds × 2 min" },
        { name: "Slow Spar — Hands Only", note: "Touch sparring, no power", prescription: "3 rounds × 2 min" },
      ],
      intermediate: [
        { name: "Thai Pads — Full Combos", note: "Hands, knees, and kicks", prescription: "5 rounds × 3 min" },
        { name: "Clinch Drilling", note: "Partner lock clinch, drill knee entries", prescription: "4 rounds × 2 min" },
        { name: "Controlled Sparring", note: "All limbs, moderate power", prescription: "4 rounds × 3 min" },
      ],
      advanced: [
        { name: "Heavy Thai Pad Work", note: "Full combinations, full power", prescription: "6 rounds × 3 min" },
        { name: "Clinch Sparring", note: "Compete for dominant position", prescription: "5 rounds × 3 min" },
        { name: "Full Muay Thai Sparring", note: "Competition simulation", prescription: "5 rounds × 3 min" },
      ],
    },
  },

  bjj: {
    name: "BJJ Conditioning",
    weights: {
      beginner: [
        { name: "Hip Thrust", note: "Power for bridging and escapes", prescription: "4 × 12 reps" },
        { name: "Plank Hold", note: "Core for guard retention", prescription: "3 × 45 sec" },
        { name: "Dead Bug", note: "Anti-extension core", prescription: "3 × 10 each side" },
        { name: "Bent-Over Row", note: "Pulling strength for grips", prescription: "4 × 10 reps" },
        { name: "Farmer Carry", note: "Grip strength and stability", prescription: "3 × 30m" },
      ],
      intermediate: [
        { name: "Trap Bar Deadlift", note: "Mat strength — hips and back", prescription: "4 × 5 reps" },
        { name: "Towel Pull-ups", note: "Grip and gi-specific pulling", prescription: "4 × max" },
        { name: "Weighted Hip Thrust", note: "Explosive bridging power", prescription: "4 × 8 reps" },
        { name: "Single-Leg Romanian Deadlift", note: "Takedown base strength", prescription: "3 × 10 each leg" },
        { name: "Cable Rotation", note: "Kimura and armbar strength", prescription: "3 × 15 each side" },
      ],
      advanced: [
        { name: "Heavy Trap Bar Deadlift", note: "Build mat strength", prescription: "5 × 3 reps heavy" },
        { name: "Weighted Pull-ups", note: "Pulling and grip power", prescription: "5 × 5 reps" },
        { name: "Zercher Squat", note: "Clinch and carry strength", prescription: "4 × 6 reps" },
        { name: "Farmer Carry — Heavy", note: "Grip and core", prescription: "4 × 40m" },
        { name: "Med Ball Slam", note: "Explosive overhead for sweeps", prescription: "5 × 8 reps" },
      ],
    },
    partner: {
      beginner: [
        { name: "Positional Drilling — Mount and Guard", note: "Escape and maintain position", prescription: "4 × 5 min" },
        { name: "Hip Escape with Partner Pressure", note: "Partner holds side control, escape", prescription: "3 × 3 min each" },
        { name: "Grip Fighting Drill", note: "Compete for grips, no takedowns", prescription: "4 × 2 min" },
      ],
      intermediate: [
        { name: "Takedown Entry Drilling", note: "Double leg, single leg entries with resistance", prescription: "4 × 5 min" },
        { name: "Guard Pass vs Retain", note: "One passes, one retains — full resistance", prescription: "5 × 5 min" },
        { name: "Submission Chain Drilling", note: "Triangle to armbar to omoplata", prescription: "3 × 5 min" },
        { name: "King of the Hill — Bottom Half Guard", note: "Stay in half or pass", prescription: "5 rounds" },
      ],
      advanced: [
        { name: "Competition Rounds", note: "Full resistance, go for submissions", prescription: "6 × 6 min" },
        { name: "Takedown + Submission Combo Rounds", note: "Score takedowns and finish", prescription: "5 × 5 min" },
        { name: "Shark Tank Drill", note: "One player stays in, fresh partners rotate every 2 min", prescription: "10 min in tank" },
      ],
    },
  },

  judo: {
    name: "Judo Conditioning",
    weights: {
      beginner: [
        { name: "Towel Pull-ups", note: "Gi grip simulation", prescription: "4 × max" },
        { name: "Goblet Squat", note: "Throw and lift base", prescription: "4 × 12 reps" },
        { name: "Farmer Carry", note: "Grip and core", prescription: "3 × 30m" },
        { name: "Hip Hinge Drill", note: "O Goshi and Harai Goshi mechanics", prescription: "3 × 15 reps" },
        { name: "Plank Hold", note: "Core for groundwork", prescription: "3 × 45 sec" },
      ],
      intermediate: [
        { name: "Heavy Trap Bar Deadlift", note: "Throwing power — hips and legs", prescription: "4 × 5 reps" },
        { name: "Towel or Gi Pull-ups — Weighted", note: "", prescription: "4 × max" },
        { name: "Zercher Carry", note: "Simulate carrying opponent's weight", prescription: "4 × 30m" },
        { name: "Rotational Med Ball Throw", note: "Hip-driven throwing power", prescription: "4 × 10 each side" },
        { name: "Hip Thrust", note: "O Goshi explosive power", prescription: "4 × 8 reps" },
      ],
      advanced: [
        { name: "Trap Bar Deadlift — Explosive, Heavy", note: "", prescription: "5 × 3 reps" },
        { name: "Weighted Towel Pull-ups", note: "Max grip strength", prescription: "5 × max" },
        { name: "Sandbag Throw", note: "Simulate throwing a person", prescription: "4 × 6 reps" },
        { name: "Zercher Squat + Carry", note: "Heavy", prescription: "4 × 5 reps + 20m" },
        { name: "Battle Rope Alternating Slams", note: "Power endurance", prescription: "5 × 30 sec" },
      ],
    },
    partner: {
      beginner: [
        { name: "Uchikomi — Cooperative Throws", note: "Partner assists entry, no completion", prescription: "4 × 30 reps" },
        { name: "Nage Komi — Full Throws", note: "Controlled throws with ukemi", prescription: "3 × 10 each side" },
        { name: "Newaza Pinning Drill", note: "Maintain osae waza against light resistance", prescription: "4 × 3 min" },
      ],
      intermediate: [
        { name: "Randori — Tachi Waza", note: "Standing throwing randori — full resistance", prescription: "5 × 4 min" },
        { name: "Uchikomi with Kuzushi", note: "Break balance before entry", prescription: "5 × 40 reps" },
        { name: "Newaza Randori", note: "Groundwork only, submissions allowed", prescription: "4 × 4 min" },
        { name: "Combination Throw Drill", note: "Set up A, partner resists, attack with B", prescription: "4 × 10 combos each" },
      ],
      advanced: [
        { name: "Full Randori — Standing", note: "Competition intensity", prescription: "6 × 5 min" },
        { name: "Shiai Simulation", note: "4 min matches, score based", prescription: "5 × 4 min" },
        { name: "Newaza Into Tachi Transition", note: "Ground escape into standing attack", prescription: "4 × 4 min" },
        { name: "Shark Tank — Standing", note: "One player vs fresh opponents rotating", prescription: "10 min in tank" },
      ],
    },
  },

};

// ── Utilities (used by plan.js and app.js) ────
function pickRandom(arr, n) {
  return shuffleArray([...arr]).slice(0, n);
}
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
