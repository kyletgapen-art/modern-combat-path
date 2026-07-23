// ─────────────────────────────────────────────
//  MODERN COMBAT — Workout Library
// ─────────────────────────────────────────────

// Fight Night warm-ups (kept separate — includes combat-specific drills)
const WARMUPS_FIGHT = [
  { name: "Warm-Up Run", note: "Easy controlled pace — just get moving, breathe through the nose", prescription: "Easy: 400m · Average: 800m · Difficult: 1 mile · Very Difficult: 1.5 miles" },
  { name: "High Knees", note: "Drive knees to hip height — fast feet", prescription: "2 × 30 sec" },
  { name: "Butt Kicks", note: "Heel to glute — quick turnover", prescription: "2 × 30 sec" },
  { name: "Lateral Shuffle", note: "Stay low, quick feet side to side", prescription: "2 × 20m each direction" },
  { name: "A-Skip", note: "Drive knee up, opposite arm — march into a skip", prescription: "2 × 20m" },
  { name: "Leg Swings", note: "Front/back and lateral — loosen hips", prescription: "10 each direction × each leg" },
  { name: "Hip Circles", note: "Hands on hips — big controlled circles", prescription: "10 each direction" },
  { name: "Arm Circles", note: "Forward and backward — full range of motion", prescription: "20 each direction" },
  { name: "Shoulder Rolls", note: "Full range of motion — forward and backward", prescription: "15 each direction" },
  { name: "Jump Rope", note: "Light pace — single unders, find your rhythm", prescription: "3 min" },
  { name: "Shadowboxing", note: "Loose and relaxed — use all weapons at low power", prescription: "2 rounds × 1 min" },
  { name: "Sprawl Drill", note: "Drop hips to floor and back up — reactive hips", prescription: "10 reps" },
  { name: "Wrist and Forearm Stretch", note: "Fingers forward and fingers back — essential before bag work", prescription: "30 sec each direction" },
  { name: "Hip Switches", note: "Sit and rotate hips side to side — alternate each side", prescription: "20 reps" },
  { name: "Neck Rotations", note: "Slow and controlled — ear toward shoulder", prescription: "10 each direction" },
];

// Upper-body focused warm-ups (for Push, Pull)
const WARMUPS_UPPER = [
  { name: "Arm Circles", note: "Forward and backward — full range of motion", prescription: "20 each direction" },
  { name: "Shoulder Rolls", note: "Full range of motion — forward and backward", prescription: "15 each direction" },
  { name: "Neck Rotations", note: "Slow and controlled — ear toward shoulder", prescription: "10 each direction" },
  { name: "Chest Opener", note: "Clasp hands behind back — open the anterior chain", prescription: "30 sec" },
  { name: "Shoulder Cross-Body Stretch", note: "Pull arm across chest — hold at the point of tension", prescription: "30 sec each side" },
  { name: "Wrist and Forearm Stretch", note: "Fingers forward and fingers back — essential before pressing", prescription: "30 sec each direction" },
  { name: "Neck Side Stretch", note: "Ear toward shoulder — hold and breathe", prescription: "30 sec each side" },
  { name: "Thoracic Rotation", note: "On all fours, rotate arm to ceiling — follow with eyes", prescription: "10 each side" },
  { name: "Wall Angels", note: "Back flat on wall, slide arms overhead — don't lose contact", prescription: "15 reps" },
  { name: "Cat-Cow", note: "Slow breath with each movement — open the thoracic spine", prescription: "10 rounds" },
];

// Lower-body focused warm-ups (for Squat, Hip Hinge, Lunge, Loaded Carry)
const WARMUPS_LOWER = [
  { name: "Leg Swings", note: "Front/back and lateral — loosen hips", prescription: "10 each direction × each leg" },
  { name: "Hip Circles", note: "Hands on hips — big controlled circles", prescription: "10 each direction" },
  { name: "Hip Switches", note: "Sit and rotate hips side to side — alternate each side", prescription: "20 reps" },
  { name: "Bodyweight Squats", note: "Controlled pace — full depth, knees out", prescription: "15 reps" },
  { name: "Ankle Rolls", note: "Loosen ankles — full slow circles", prescription: "15 each direction per foot" },
  { name: "Standing Quad Stretch", note: "Hold and breathe — open the hip flexor at the same time", prescription: "30 sec each side" },
  { name: "Seated Hamstring Stretch", note: "Hinge from hips — spine long before folding", prescription: "30 sec each side" },
  { name: "Hip Flexor Lunge Stretch", note: "Deep lunge — front shin vertical, sink hips forward", prescription: "30 sec each side" },
  { name: "Pigeon Pose", note: "Hip rotation and glutes — melt into it, don't force", prescription: "45 sec each side" },
  { name: "Glute Bridge Walk-Outs", note: "Bridge up, walk feet out and back — activate glutes", prescription: "10 reps" },
  { name: "Cossack Squat (slow)", note: "Side to side deep lunge — full range, slow and controlled", prescription: "8 each side" },
];

// Core-focused warm-ups
const WARMUPS_CORE = [
  { name: "Cat-Cow", note: "Slow breath with each movement — arch and round the spine", prescription: "10 rounds" },
  { name: "Dead Bug (slow)", note: "Extend opposite arm and leg — keep lower back flat", prescription: "6 each side" },
  { name: "Bird Dog", note: "On all fours — extend opposite arm and leg, hold briefly", prescription: "8 each side" },
  { name: "Hip Circles", note: "Hands on hips — big controlled circles", prescription: "10 each direction" },
  { name: "Seated Spinal Twist", note: "Sit tall first — exhale deeper into the rotation each breath", prescription: "30 sec each side" },
  { name: "Child's Pose", note: "Arms extended — full spinal decompression, breathe deep", prescription: "60 sec" },
  { name: "Hollow Body Hold (brief)", note: "Flat back, legs and shoulders off floor — breathe", prescription: "3 × 10 sec" },
  { name: "Hip Switches", note: "Sit and rotate hips side to side — warms up hips and obliques", prescription: "20 reps" },
];

// Conditioning warm-ups (for HIIT/CrossFit/HYROX)
const WARMUPS_CONDITIONING = [
  { name: "High Knees", note: "Drive knees to hip height — fast feet", prescription: "2 × 30 sec" },
  { name: "Butt Kicks", note: "Heel to glute — quick turnover", prescription: "2 × 30 sec" },
  { name: "Lateral Shuffle", note: "Stay low, quick feet side to side", prescription: "2 × 20m each direction" },
  { name: "A-Skip", note: "Drive knee up, opposite arm — march into a skip", prescription: "2 × 20m" },
  { name: "Broad Jump into Backpedal", note: "Jump forward, backpedal to start — reactive", prescription: "6 reps" },
  { name: "Jumping Jacks", note: "Full range — get the heart rate up", prescription: "40 reps" },
  { name: "Inchworm", note: "Walk hands out to plank and back — full body activation", prescription: "8 reps" },
  { name: "World's Greatest Stretch", note: "Lunge, rotate arm to ceiling — each side", prescription: "5 each side" },
];

// Track Day warm-ups (for Cardio/Plyometrics/Mobility)
const WARMUPS_TRACK = [
  { name: "Easy Jog", note: "400m at a conversational pace — get the legs warm", prescription: "400m easy" },
  { name: "High Knees", note: "Drive knees to hip height — fast feet", prescription: "2 × 30 sec" },
  { name: "Butt Kicks", note: "Heel to glute — quick turnover", prescription: "2 × 30 sec" },
  { name: "Leg Swings", note: "Front/back and lateral — loosen hips before running", prescription: "10 each direction × each leg" },
  { name: "Ankle Rolls", note: "Loosen ankles — full slow circles", prescription: "15 each direction per foot" },
  { name: "A-Skip", note: "Drive knee up, opposite arm — running mechanics warm-up", prescription: "2 × 20m" },
  { name: "Hip Circles", note: "Hands on hips — big controlled circles", prescription: "10 each direction" },
  { name: "Lateral Shuffle", note: "Stay low, quick feet side to side", prescription: "2 × 20m" },
];

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
  // Basic Hand Combos
  'Jab, Cross',
  'Jab, Cross, Jab, Cross',
  'Jab, Cross, Hook',
  'Jab, Cross, Hook, Cross',
  'Jab, Jab, Cross',
  'Jab, Cross, Lead Body Hook',
  'Fake Jab, Cross, Lead Hook',
  // Elbow Focused
  'Lead Up Elbow, Rear Side Elbow',
  'Lead Side Elbow, Rear Up Elbow',
  'Jab, Lead Up Elbow, Rear Side Elbow',
  'Pull Down Opponent Guard, Side Elbow',
  'Jab, Cross, Lead Side Elbow, Rear Up Elbow',
  'Jab, Cross, Lead Elbow',
  'Jab, Cross, Left Knee, Right Elbow',
  'Lead Uppercut, Cross, Lead Body Hook, Switch Knee, Elbow',
  'Body Cross, Rear Knee, Rear Elbow',
  // Kick Focused
  'Jab, Cross, Hook, Rear Swing Kick',
  'Jab, Rear Swing Kick',
  'Jab, Cross, Switch Lead Kick',
  'Cross, Switch Lead Kick',
  'Cross, Hook, Rear Swing Kick',
  'Hook, Cross, Lead Swing Kick',
  'Jab, Jab, Cross, Swing Kick',
  'Jab, Lead Uppercut, Cross, Switch Kick',
  'Inside Lead Kick, Cross',
  'Jab, Body Cross, Lead Hook, Low Kick',
  'Lead Teep, Rear Swing Kick × 2',
  'Rear Swing Kick, Lead Teep',
  'Cross, Switch Kick × 2',
  'Jab, Cross, Switch Kick',
  'Jab, Cross, Hook, Rear Leg Kick',
  'Jab, Cross, Lead Uppercut, Low Kick',
  'Jab, Cross, Lead Hook to the Body, Rear Roundhouse',
  'Inside Leg Kick, Double Roundhouse Kick',
  // Low Kick Focused
  'Jab, Low Kick',
  'Jab, Cross, Hook, Low Kick',
  'Cross, Hook, Low Kick',
  'Jab-Hook, Low Kick',
  'Rear Uppercut, Hook, Low Kick',
  'Lead Hook, Low Kick',
  'Jab, Feint, Lead Leg Kick to the Body',
  'Inside Leg Kick, Cross',
  // Teep Focused
  'Jab, Lead Teep, Jab, Fake Lead Teep',
  'Jab, Rear Swing Kick, Lead Teep',
  'Teep, Fake Teep, Rear Swing Kick',
  'Jab, Lead Teep, Rear Face Teep',
  'Swing Kick, Fake Swing Kick, Rear Teep',
  'Double Jab, Teep',
  'Lead Teep, Rear Swing Kick',
  // Knee Focused
  'Cross, Rear Knee',
  'Jab, Switch Knee',
  'Jab, Cross, Switch Knee',
  'Left Hook, Rear Knee',
  'Cross, Hook, Rear Knee',
  'Lead Teep, Fake Lead Teep, Rear Knee',
  'Teep, Feint, Knee',
  // Counters off Blocks and Parries
  'Parry Jab, Rear Knee',
  'Parry Cross, Switch Knee',
  'Shin Block Lead Kick, Lead Knee',
  'Shin Block Rear Kick, Rear Knee',
  // Combos Starting with a Kick
  'Rear Swing Kick, Cross',
  'Switch Kick, Cross',
  'Switch Kick, Cross, Hook, Low Kick',
  'Lead Push Kick, Rear Swing Kick',
  'Rear Push Kick, Lead Swing Kick',
  // Longer Combinations
  'Jab, Cross, Lead Uppercut, Low Kick',
  'Jab, Cross, Lead Hook to the Body, Rear Roundhouse',
  'Jab, Cross, Left Knee, Right Elbow',
  'Lead Uppercut, Cross, Lead Body Hook, Switch Knee, Elbow',
  'Body Cross, Rear Knee, Rear Elbow',
  'Inside Low Kick, Double Roundhouse Kick',
  'Teep, Feint, Knee',
  'Jab, Cross, Lead Elbow',
  'Double Jab, Teep',
  'Jab, Cross, Switch Kick',
  'Jab, Cross, Hook, Rear Leg Kick',
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

  squat: {
    name: "Squat",
    beginner: [
      { name: "Air Squat", note: "Knees out, full depth, weight in heels", prescription: "4 × 15 reps", equip: "bw" },
      { name: "Box Squat", note: "Sit to box — control the descent, drive up hard", prescription: "3 × 12 reps", equip: "bw" },
      { name: "Sumo Squat", note: "Wide stance, toes out, chest tall", prescription: "3 × 15 reps", equip: "bw" },
      { name: "Wall Sit", note: "Thighs parallel, back flat — hold position", prescription: "3 × 30 sec", equip: "bw" },
      { name: "Narrow Stance Squat", note: "Feet together — harder on quads", prescription: "3 × 12 reps", equip: "bw" },
      { name: "Squat Hold (bottom)", note: "Sit in the bottom — breathe and stay loose", prescription: "3 × 30 sec", equip: "bw" },
      { name: "Goblet Squat", note: "Hold dumbbell at chest, elbows in, sit deep", prescription: "4 × 12 reps", equip: "db" },
      { name: "DB Sumo Squat", note: "Wide stance, dumbbell between legs", prescription: "3 × 15 reps", equip: "db" },
      { name: "KB Goblet Squat", note: "Kettlebell at chest, heels down, full depth", prescription: "4 × 12 reps", equip: "kb" },
      { name: "Banded Air Squat", note: "Band above knees — push out against band the whole way", prescription: "4 × 15 reps", equip: "band" },
      { name: "Leg Press", note: "Full range, knees tracking toes — no ego load", prescription: "4 × 12 reps", equip: "machine" },
      { name: "Leg Extension", note: "Full extension, slow controlled descent", prescription: "3 × 15 reps", equip: "machine" },
      // Lunge patterns
      { name: "Reverse Lunge", note: "Step back — front shin stays vertical", prescription: "3 × 10 each", equip: "bw" },
      { name: "Forward Lunge", note: "Step forward — lower back knee toward floor", prescription: "3 × 10 each", equip: "bw" },
      { name: "Lateral Lunge", note: "Step wide, sit into that hip — opposite leg stays straight", prescription: "3 × 10 each", equip: "bw" },
      { name: "Curtsy Lunge", note: "Rear leg crosses behind — glute medius emphasis", prescription: "3 × 10 each", equip: "bw" },
      { name: "Step-up", note: "Drive through front foot — no push from back leg", prescription: "3 × 10 each", equip: "bw" },
      { name: "Split Squat", note: "Stationary lunge — focus on depth and balance", prescription: "3 × 12 each", equip: "bw" },
      { name: "DB Reverse Lunge", note: "Hold dumbbells at sides — step back, lower back knee", prescription: "3 × 10 each", equip: "db" },
      { name: "DB Lateral Lunge", note: "Dumbbells at sides — reach toward front foot", prescription: "3 × 10 each", equip: "db" },
      { name: "DB Step-up", note: "Drive through front heel — controlled step down", prescription: "3 × 10 each", equip: "db" },
      { name: "KB Goblet Reverse Lunge", note: "KB at chest — step back, upright torso", prescription: "3 × 10 each", equip: "kb" },
      { name: "Banded Reverse Lunge", note: "Band around front thigh — adds hip demand", prescription: "3 × 12 each", equip: "band" },
    ],
    intermediate: [
      { name: "Jump Squat", note: "Explode off the floor — land soft, absorb the landing", prescription: "4 × 10 reps", equip: "bw" },
      { name: "Cossack Squat", note: "Side-to-side — deep hip opener and single-leg strength", prescription: "3 × 8 each", equip: "bw" },
      { name: "Assisted Pistol Squat", note: "Hold something for balance — work toward full depth", prescription: "3 × 6 each", equip: "bw" },
      { name: "Single-leg Squat to Box", note: "One leg, sit controlled to box — no bounce", prescription: "3 × 8 each", equip: "bw" },
      { name: "Back Squat", note: "Bar on traps, knees track toes, depth below parallel", prescription: "4 × 8 reps", equip: "rack" },
      { name: "Front Squat", note: "Elbows high, upright torso, full depth", prescription: "4 × 6 reps", equip: "rack" },
      { name: "Paused Squat", note: "2-second pause at bottom — builds strength out of the hole", prescription: "4 × 5 reps", equip: "rack" },
      { name: "DB Front Squat", note: "Dumbbells on shoulders, elbows high, torso upright", prescription: "3 × 10 reps", equip: "db" },
      { name: "Double KB Front Squat", note: "Two kettlebells racked, elbows high", prescription: "4 × 8 reps", equip: "kb" },
      { name: "Hack Squat Machine", note: "Feet forward, full depth", prescription: "4 × 10 reps", equip: "machine" },
      { name: "Banded Squat", note: "Band adds accommodating resistance — push through at the top", prescription: "4 × 10 reps", equip: "band" },
      // Lunge patterns
      { name: "Walking Lunge", note: "Continuous forward — step, lower, drive, repeat", prescription: "3 × 20m or 15 each", equip: "bw" },
      { name: "Bulgarian Split Squat", note: "Rear foot elevated — deep single-leg squat", prescription: "4 × 10 each", equip: "bw" },
      { name: "Deficit Reverse Lunge", note: "Front foot elevated — increases range of motion", prescription: "3 × 10 each", equip: "bw" },
      { name: "Skater Lunge", note: "Lateral leap — land on single leg and absorb", prescription: "3 × 10 each", equip: "bw" },
      { name: "DB Walking Lunge", note: "Dumbbells at sides — continuous forward lunge", prescription: "3 × 15 each", equip: "db" },
      { name: "DB Bulgarian Split Squat", note: "Rear foot elevated, DBs in hands — go deep", prescription: "4 × 10 each", equip: "db" },
      { name: "DB Curtsy Lunge", note: "Dumbbells add load to the crossover lunge", prescription: "3 × 10 each", equip: "db" },
      { name: "Barbell Lunge", note: "Bar on traps — step forward, lower controlled", prescription: "4 × 8 each", equip: "rack" },
      { name: "Barbell Rear Lunge", note: "Bar on traps — step back, control the descent", prescription: "4 × 8 each", equip: "rack" },
      { name: "KB Walking Lunge", note: "KB in goblet or at sides — constant movement", prescription: "3 × 15 each", equip: "kb" },
      { name: "KB Step-up", note: "KB at side or goblet — controlled step", prescription: "3 × 10 each", equip: "kb" },
    ],
    advanced: [
      { name: "Heavy Back Squat", note: "85–90% effort — depth and control are non-negotiable", prescription: "5 × 5 reps", equip: "rack" },
      { name: "Overhead Squat", note: "Bar locked overhead — demands full mobility and strength", prescription: "4 × 5 reps", equip: "rack" },
      { name: "Low Bar Squat", note: "Bar lower on back — hip-dominant variation", prescription: "5 × 3 reps", equip: "rack" },
      { name: "Box Squat — Heavy", note: "Sit back to box, controlled — no bounce", prescription: "4 × 5 reps", equip: "rack" },
      { name: "Pistol Squat", note: "Full single-leg squat, free-standing — no assist", prescription: "4 × 5 each", equip: "bw" },
      { name: "Zercher Squat", note: "Bar in crook of elbows — unique loading for core and quads", prescription: "4 × 6 reps", equip: "bb" },
      { name: "Weighted Jump Squat", note: "Light dumbbells — maximum explosive intent every rep", prescription: "4 × 6 reps", equip: "db" },
      { name: "DB Bulgarian Split Squat — Heavy", note: "Rear foot elevated, heavy dumbbells — brutal quad work", prescription: "4 × 8 each", equip: "db" },
      { name: "KB Overhead Squat", note: "Kettlebell locked overhead, squat to full depth", prescription: "3 × 6 each", equip: "kb" },
      { name: "V-Squat Machine", note: "Machine-guided — hit depth safely with heavy loads", prescription: "4 × 8 reps", equip: "machine" },
      // Lunge patterns
      { name: "Jumping Lunge", note: "Explode off both feet — switch legs in air, land soft", prescription: "4 × 10 each", equip: "bw" },
      { name: "Rear-foot Elevated Pistol Lunge", note: "Deep single-leg lunge — rear leg off floor", prescription: "4 × 8 each", equip: "bw" },
      { name: "Heavy DB Bulgarian Split Squat", note: "Heavy load — go deep, control the eccentric", prescription: "4 × 8 each", equip: "db" },
      { name: "Barbell Bulgarian Split Squat", note: "Bar on traps — single-leg squat to depth", prescription: "4 × 6 each", equip: "rack" },
      { name: "Barbell Step-up — Heavy", note: "Drive through front heel — loaded single-leg strength", prescription: "4 × 8 each", equip: "rack" },
      { name: "Barbell Split Squat", note: "Stationary, bar loaded — heavy and controlled", prescription: "4 × 8 each", equip: "rack" },
      { name: "KB Double Rack Lunge", note: "Two KBs in rack position — demands core stability", prescription: "3 × 10 each", equip: "kb" },
      { name: "Weighted Jumping Lunge", note: "Light DBs — explosive, land controlled", prescription: "4 × 8 each", equip: "db" },
      { name: "Heavy DB Walking Lunge", note: "Heavy dumbbells — maintain upright posture throughout", prescription: "4 × 20m", equip: "db" },
    ],
  },

  hinge: {
    name: "Hip Hinge",
    beginner: [
      { name: "Hip Hinge (bodyweight)", note: "Hinge at hips, soft knee bend, spine neutral — learn the pattern", prescription: "3 × 15 reps", equip: "bw" },
      { name: "Glute Bridge", note: "Drive through heels — squeeze glutes hard at the top", prescription: "4 × 15 reps", equip: "bw" },
      { name: "Single-leg Glute Bridge", note: "One leg up — keep hips level throughout", prescription: "3 × 12 each", equip: "bw" },
      { name: "Hyperextension (45°)", note: "Controlled lower, squeeze glutes hard at the top", prescription: "3 × 12 reps", equip: "bw" },
      { name: "Superman", note: "Arch back, lift arms and legs — hold 2 sec at top", prescription: "3 × 10 reps", equip: "bw" },
      { name: "Bird Dog", note: "Opposite arm and leg — keep hips square", prescription: "3 × 10 each", equip: "bw" },
      { name: "Good Morning (bodyweight)", note: "Hands behind head — hinge until hamstrings stretch", prescription: "3 × 15 reps", equip: "bw" },
      { name: "DB Romanian Deadlift", note: "Push hips back, feel the hamstring load, squeeze back up", prescription: "4 × 10 reps", equip: "db" },
      { name: "DB Single-leg RDL", note: "Hinge on one leg — hold DB opposite hand, control the hip", prescription: "3 × 10 each", equip: "db" },
      { name: "KB Deadlift", note: "Hinge to KB on floor, grip, drive hips forward to stand", prescription: "4 × 10 reps", equip: "kb" },
      { name: "KB Swing", note: "Hip hinge is the engine — hike, snap hips forward, swing to shoulder height", prescription: "4 × 15 reps", equip: "kb" },
      { name: "Lying Leg Curl", note: "Controlled curl, hold at top", prescription: "3 × 12 reps", equip: "machine" },
    ],
    intermediate: [
      { name: "Conventional Deadlift", note: "Hips to bar, brace, pull — lockout at top", prescription: "4 × 5 reps", equip: "bb" },
      { name: "Romanian Deadlift", note: "Bar stays close, load the hamstrings, squeeze back up", prescription: "4 × 8 reps", equip: "bb" },
      { name: "Sumo Deadlift", note: "Wide stance, toes out — hip-dominant variation", prescription: "4 × 6 reps", equip: "bb" },
      { name: "Barbell Good Morning", note: "Bar on traps, hinge deep, drive hips back up", prescription: "4 × 8 reps", equip: "rack" },
      { name: "Hip Thrust (bodyweight)", note: "Shoulders on bench, drive hips to ceiling — 2 sec hold", prescription: "4 × 15 reps", equip: "bw" },
      { name: "DB Hip Thrust", note: "DB across hips — squeeze glutes hard at lockout", prescription: "4 × 12 reps", equip: "db" },
      { name: "DB Stiff-leg Deadlift", note: "Minimal knee bend — max hamstring loading", prescription: "4 × 10 reps", equip: "db" },
      { name: "KB Romanian Deadlift", note: "Two kettlebells — maintain neutral spine throughout", prescription: "4 × 10 reps", equip: "kb" },
      { name: "KB American Swing", note: "Full overhead lockout — more demanding than Russian swing", prescription: "4 × 12 reps", equip: "kb" },
      { name: "Seated Leg Curl", note: "Slow eccentric — make it burn", prescription: "4 × 12 reps", equip: "machine" },
      { name: "Back Extension Machine", note: "Full range, controlled tempo", prescription: "3 × 15 reps", equip: "machine" },
    ],
    advanced: [
      { name: "Heavy Conventional Deadlift", note: "85–90% — brace hard, maintain position throughout", prescription: "5 × 3 reps", equip: "bb" },
      { name: "Trap Bar Deadlift", note: "Neutral grip, more upright torso than straight bar", prescription: "5 × 5 reps", equip: "bb" },
      { name: "Rack Pull", note: "Bar above knee — overload the lockout position", prescription: "4 × 5 reps", equip: "rack" },
      { name: "Stiff-leg Deadlift", note: "Minimal knee bend — hammer the hamstrings", prescription: "4 × 6 reps", equip: "bb" },
      { name: "Barbell Hip Thrust — Heavy", note: "Heavy load — control and power, squeeze hard at top", prescription: "4 × 8 reps", equip: "bb" },
      { name: "Nordic Hamstring Curl", note: "Slow eccentric lower — one of the most effective hamstring exercises", prescription: "4 × 6 reps", equip: "bw" },
      { name: "KB Double Swing", note: "Two kettlebells — demands power and core stability", prescription: "4 × 15 reps", equip: "kb" },
      { name: "KB Single-leg Deadlift — Heavy", note: "Loaded — demands hip stability and posterior chain strength", prescription: "4 × 8 each", equip: "kb" },
      { name: "Paused Deadlift", note: "2-second pause at knee — eliminates momentum, exposes weakness", prescription: "4 × 4 reps", equip: "bb" },
      { name: "Glute-Ham Raise", note: "Eccentric hamstring — control the lower at all costs", prescription: "3 × 8 reps", equip: "machine" },
    ],
  },

  push: {
    name: "Push",
    beginner: [
      { name: "Push-up", note: "Chest to floor — full range every rep", prescription: "4 × max reps", equip: "bw" },
      { name: "Incline Push-up", note: "Hands elevated — easier angle to build form", prescription: "3 × 15 reps", equip: "bw" },
      { name: "Knee Push-up", note: "On knees — build to full push-up", prescription: "3 × 15 reps", equip: "bw" },
      { name: "Wide Push-up", note: "Hands wide — chest emphasis", prescription: "3 × 12 reps", equip: "bw" },
      { name: "Bench Dip", note: "Hands behind on bench or chair — full range", prescription: "3 × 12 reps", equip: "bw" },
      { name: "Pike Press", note: "Hips high in pike — drive top of head toward floor", prescription: "3 × 10 reps", equip: "bw" },
      { name: "DB Shoulder Press", note: "Seated or standing — press to full lockout", prescription: "3 × 12 reps", equip: "db" },
      { name: "DB Bench Press", note: "Control descent, drive up — full range", prescription: "3 × 10 reps", equip: "db" },
      { name: "DB Lateral Raise", note: "Light weight, slow and controlled — lead with elbows", prescription: "3 × 15 reps", equip: "db" },
      { name: "DB Tricep Extension", note: "Overhead — elbows in, lower behind head, extend up", prescription: "3 × 12 reps", equip: "db" },
      { name: "KB Press", note: "Clean to rack, press to lockout — wrist stays straight", prescription: "3 × 10 each", equip: "kb" },
      { name: "Banded Tricep Pushdown", note: "Band overhead — extend to full lockout", prescription: "3 × 15 reps", equip: "band" },
      { name: "Banded Lateral Raise", note: "Band under foot — raise to shoulder height, control down", prescription: "3 × 15 reps", equip: "band" },
      { name: "Chest Press Machine", note: "Full range, controlled tempo", prescription: "3 × 12 reps", equip: "machine" },
    ],
    intermediate: [
      { name: "Decline Push-up", note: "Feet elevated — upper chest and front delt emphasis", prescription: "4 × 12 reps", equip: "bw" },
      { name: "Close-grip Push-up", note: "Hands narrow — tricep emphasis", prescription: "4 × 12 reps", equip: "bw" },
      { name: "Diamond Push-up", note: "Hands in diamond — maximum tricep load", prescription: "3 × 10 reps", equip: "bw" },
      { name: "Archer Push-up", note: "Shift weight side to side — builds toward one-arm", prescription: "3 × 8 each", equip: "bw" },
      { name: "Tricep Dip", note: "Parallel bars — full range, chest upright", prescription: "4 × max reps", equip: "pullbar" },
      { name: "Barbell Bench Press", note: "Controlled descent, drive up — don't bounce off chest", prescription: "4 × 8 reps", equip: "rack" },
      { name: "Barbell Military Press", note: "Press from front rack to full lockout overhead", prescription: "4 × 8 reps", equip: "rack" },
      { name: "Barbell Push Press", note: "Dip and drive — leg power initiates the press", prescription: "4 × 6 reps", equip: "rack" },
      { name: "DB Incline Bench Press", note: "30–45° angle — upper chest emphasis", prescription: "4 × 10 reps", equip: "db" },
      { name: "Arnold Press", note: "Rotate palms in to out as you press — hits all three delt heads", prescription: "4 × 10 reps", equip: "db" },
      { name: "DB Fly", note: "Wide arc down, squeeze at top — chest stretch", prescription: "3 × 12 reps", equip: "db" },
      { name: "KB Push Press", note: "Dip and drive — use legs to power the press", prescription: "3 × 8 each", equip: "kb" },
      { name: "KB Floor Press", note: "Press from floor — limits range and isolates chest/tricep", prescription: "3 × 10 each", equip: "kb" },
      { name: "Cable Fly", note: "Wide arc, squeeze at center — constant tension", prescription: "3 × 12 reps", equip: "cable" },
      { name: "Cable Tricep Pushdown", note: "Elbows pinned to sides — full extension every rep", prescription: "3 × 15 reps", equip: "cable" },
      { name: "Shoulder Press Machine", note: "Full range, slow on the way down", prescription: "3 × 12 reps", equip: "machine" },
    ],
    advanced: [
      { name: "Weighted Dip", note: "Belt or vest — full range, chest upright for tricep emphasis", prescription: "4 × 8 reps", equip: "pullbar" },
      { name: "Clap Push-up", note: "Maximum explosive push — get full air before clap", prescription: "4 × 8 reps", equip: "bw" },
      { name: "Plyometric Push-up", note: "Explode off floor — maximum intent every rep", prescription: "4 × 6 reps", equip: "bw" },
      { name: "Hindu Push-up", note: "Dive bomb arc — full shoulder, chest, and tricep integration", prescription: "3 × 12 reps", equip: "bw" },
      { name: "One-arm Push-up (assisted)", note: "Feet wide, reach toward one arm — progress toward full", prescription: "3 × 6 each", equip: "bw" },
      { name: "Heavy Barbell Bench Press", note: "85–90% effort — use a spotter or safety bars", prescription: "5 × 5 reps", equip: "rack" },
      { name: "Barbell Incline Bench Press", note: "Upper chest emphasis — control the descent", prescription: "4 × 6 reps", equip: "rack" },
      { name: "Close-grip Barbell Bench Press", note: "Elbows in — tricep emphasis", prescription: "4 × 6 reps", equip: "rack" },
      { name: "Skull Crusher", note: "Lower bar to forehead — full control", prescription: "4 × 10 reps", equip: "bb" },
      { name: "DB Incline Fly — Heavy", note: "Deep stretch at bottom, squeeze at top", prescription: "4 × 10 reps", equip: "db" },
      { name: "KB Windmill", note: "KB overhead, hinge laterally — demands shoulder stability and hip mobility", prescription: "3 × 8 each", equip: "kb" },
      { name: "Cable Overhead Tricep Extension", note: "Full stretch at bottom — maximum range of motion", prescription: "3 × 12 reps", equip: "cable" },
      { name: "Pec Deck Machine", note: "Full arc, squeeze hard at contact", prescription: "4 × 12 reps", equip: "machine" },
    ],
  },

  pull: {
    name: "Pull",
    beginner: [
      { name: "Inverted Row", note: "Straight body — pull chest to bar, not bar to chest", prescription: "4 × max reps", equip: "pullbar" },
      { name: "Negative Pull-up", note: "Jump to top, lower as slowly as possible", prescription: "3 × 6 reps (slow lower)", equip: "pullbar" },
      { name: "Band-Assisted Pull-up", note: "Band around knee — use it to learn the pattern", prescription: "4 × 8 reps", equip: "band" },
      { name: "Banded Pull-apart", note: "Chest high — squeeze shoulder blades together at center", prescription: "3 × 20 reps", equip: "band" },
      { name: "Banded Face Pull", note: "Pull to face, elbows high — rear delt and rotator cuff", prescription: "3 × 15 reps", equip: "band" },
      { name: "DB Bent-over Row", note: "Neutral spine, pull to hip — squeeze at top", prescription: "4 × 10 each", equip: "db" },
      { name: "DB Bicep Curl", note: "Full extension at bottom — supinate wrist at top", prescription: "3 × 12 reps", equip: "db" },
      { name: "Hammer Curl", note: "Neutral grip — hits brachialis and brachioradialis", prescription: "3 × 12 each", equip: "db" },
      { name: "DB Rear Lateral Raise", note: "Bent over — lead with elbows, squeeze rear delts", prescription: "3 × 15 reps", equip: "db" },
      { name: "DB Shrug", note: "Straight up — hold at top, no rolling", prescription: "3 × 15 reps", equip: "db" },
      { name: "KB Row", note: "One arm, brace against knee — pull to hip", prescription: "3 × 10 each", equip: "kb" },
      { name: "Lat Pulldown Machine", note: "Full range — stretch at top, squeeze at bottom", prescription: "3 × 12 reps", equip: "machine" },
    ],
    intermediate: [
      { name: "Pull-up", note: "Dead hang start — full range, chest to bar", prescription: "4 × max reps", equip: "pullbar" },
      { name: "Chin-up", note: "Underhand grip — bicep and lat emphasis", prescription: "4 × max reps", equip: "pullbar" },
      { name: "Neutral Grip Pull-up", note: "Parallel grip — easier on shoulder, great for lats", prescription: "4 × max reps", equip: "pullbar" },
      { name: "Barbell Bent-over Row", note: "45° torso — pull to lower chest, squeeze lats", prescription: "4 × 8 reps", equip: "bb" },
      { name: "Barbell Bicep Curl", note: "Strict form — no swinging, full range", prescription: "4 × 10 reps", equip: "bb" },
      { name: "Barbell Shrug", note: "Heavy weight — full range, straight up", prescription: "4 × 12 reps", equip: "bb" },
      { name: "T-Bar Row", note: "Landmine or T-bar — horizontal pull to lower chest", prescription: "4 × 8 reps", equip: "landmine" },
      { name: "DB Incline Curl", note: "Fully stretched at bottom — maximizes range of motion", prescription: "3 × 12 each", equip: "db" },
      { name: "DB Concentration Curl", note: "Strict isolation — elbow on inner thigh", prescription: "3 × 12 each", equip: "db" },
      { name: "KB High Pull", note: "From swing, pull elbow high — power and coordination", prescription: "4 × 10 each", equip: "kb" },
      { name: "Cable Seated Row", note: "Elbows in — full contraction, stretch at extension", prescription: "4 × 12 reps", equip: "cable" },
      { name: "Cable Face Pull", note: "Rope at face height — pull to forehead, elbows high", prescription: "4 × 15 reps", equip: "cable" },
      { name: "Seated Row Machine", note: "Full range — feel the stretch at the front", prescription: "4 × 12 reps", equip: "machine" },
    ],
    advanced: [
      { name: "Weighted Pull-up", note: "Belt or vest — controlled reps, full range", prescription: "4 × 6 reps", equip: "pullbar" },
      { name: "Weighted Chin-up", note: "Heavy load — controlled descent", prescription: "4 × 6 reps", equip: "pullbar" },
      { name: "Archer Pull-up", note: "Shift weight from side to side at top", prescription: "3 × 6 each", equip: "pullbar" },
      { name: "L-sit Pull-up", note: "Legs extended horizontal — demands core and lat strength", prescription: "3 × max reps", equip: "pullbar" },
      { name: "Pendlay Row", note: "Dead stop each rep from floor — explosive pull", prescription: "4 × 6 reps", equip: "bb" },
      { name: "Heavy Barbell Row", note: "Load up — pull to lower chest, control the lower", prescription: "5 × 5 reps", equip: "bb" },
      { name: "Barbell Preacher Curl", note: "Full stretch at bottom — strict isolation", prescription: "4 × 10 reps", equip: "bb" },
      { name: "KB Renegade Row", note: "Plank position — row one arm, keep hips square", prescription: "4 × 8 each", equip: "kb" },
      { name: "Straight-arm Cable Pulldown", note: "Arms straight — isolates lat, great for mind-muscle connection", prescription: "3 × 15 reps", equip: "cable" },
      { name: "Cable Pullover", note: "Bar or rope — lat stretch and full contraction", prescription: "3 × 12 reps", equip: "cable" },
      { name: "Rear Delt Cable Fly", note: "Cable set high — rear delt isolation", prescription: "4 × 15 reps", equip: "cable" },
    ],
  },

  carry: {
    name: "Loaded Carry",
    beginner: [
      { name: "Bear Crawl", note: "Knees hover an inch off floor — slow, controlled forward movement", prescription: "3 × 20m", equip: "bw" },
      { name: "Crab Walk", note: "Hips up, hands and feet — maintain height throughout", prescription: "3 × 20m", equip: "bw" },
      { name: "DB Farmer's Carry", note: "Dumbbells at sides — tall posture, don't tip or lean", prescription: "4 × 30m", equip: "db" },
      { name: "DB Suitcase Carry", note: "Single dumbbell at one side — resist lateral tipping", prescription: "3 × 30m each", equip: "db" },
      { name: "Goblet Carry", note: "DB or KB at chest — walk with upright posture", prescription: "3 × 30m", equip: "db" },
      { name: "KB Farmer's Carry", note: "Kettlebell at side — grip strength and core stability", prescription: "4 × 30m", equip: "kb" },
      { name: "KB Suitcase Carry", note: "Single KB — anti-lateral flexion demand", prescription: "3 × 30m each", equip: "kb" },
      { name: "Sandbag Carry", note: "Bear hug or over shoulder — awkward load demands more core", prescription: "3 × 30m", equip: "sandbag" },
    ],
    intermediate: [
      { name: "Heavy DB Farmer's Carry", note: "As heavy as possible while keeping upright — grip becomes the limiter", prescription: "4 × 40m", equip: "db" },
      { name: "DB Overhead Carry", note: "One arm locked overhead — walk without tipping or leaning", prescription: "3 × 30m each", equip: "db" },
      { name: "Waiter's Walk", note: "One DB held high overhead like a tray — shoulder stability demand", prescription: "3 × 30m each", equip: "db" },
      { name: "KB Overhead Carry", note: "KB locked overhead — wrist straight, ribs down", prescription: "3 × 30m each", equip: "kb" },
      { name: "KB Rack Carry", note: "KB in rack position — walk without losing posture", prescription: "3 × 30m each", equip: "kb" },
      { name: "Double KB Farmer's Carry", note: "Two heavy KBs — total-body demand", prescription: "4 × 40m", equip: "kb" },
      { name: "Sandbag Shoulder Carry", note: "Sandbag over one shoulder — asymmetric load", prescription: "3 × 30m each", equip: "sandbag" },
      { name: "Sandbag Bear Hug Walk", note: "Crush the sandbag to your chest — demands grip and core", prescription: "4 × 30m", equip: "sandbag" },
    ],
    advanced: [
      { name: "Double KB Overhead Carry", note: "Both arms locked out overhead — core and shoulder stability", prescription: "3 × 30m", equip: "kb" },
      { name: "KB Bottoms-up Carry", note: "KB balanced upside down — demands shoulder stability and focus", prescription: "3 × 20m each", equip: "kb" },
      { name: "Offset Carry", note: "One DB overhead, one at side — maximum asymmetry challenge", prescription: "3 × 30m each", equip: "db" },
      { name: "Heavy Sandbag Bear Hug Walk", note: "Crush grip, sandbag to chest — brutal full-body carry", prescription: "4 × 30m", equip: "sandbag" },
      { name: "Sandbag Zercher Carry", note: "Sandbag in crook of elbows — awkward and demanding", prescription: "3 × 30m", equip: "sandbag" },
      { name: "Mixed Carry Circuit", note: "40m farmer carry → 20m overhead carry → 20m suitcase each side", prescription: "3 rounds", equip: "kb" },
      { name: "Heavy KB Farmer's Carry Sprint", note: "Heavy KBs — walk as fast as possible without breaking form", prescription: "5 × 40m", equip: "kb" },
    ],
  },

  core: {
    name: "Core",
    beginner: [
      { name: "Plank Hold", note: "Straight line head to heel — squeeze everything", prescription: "3 × 30 sec", equip: "bw" },
      { name: "Side Plank", note: "Hip up, straight line — hold position", prescription: "3 × 20 sec each", equip: "bw" },
      { name: "Dead Bug", note: "Lower back pressed down — opposite arm and leg, slow", prescription: "3 × 10 each", equip: "bw" },
      { name: "Bird Dog", note: "Extend arm and leg — hold 2 sec, keep hips square", prescription: "3 × 10 each", equip: "bw" },
      { name: "Hollow Body Hold", note: "Belly button to spine — arms and legs extended low", prescription: "3 × 20 sec", equip: "bw" },
      { name: "Bicycle Crunch", note: "Slow — opposite elbow to knee, full rotation", prescription: "3 × 15 each", equip: "bw" },
      { name: "Flutter Kicks", note: "Lower back pressed down — small fast kicks", prescription: "3 × 20 sec", equip: "bw" },
      { name: "Crunch", note: "Upper back off floor — don't pull your neck", prescription: "3 × 20 reps", equip: "bw" },
      { name: "Leg Raise", note: "Keep low back pressed down — raise legs to 90°", prescription: "3 × 12 reps", equip: "bw" },
      { name: "Mountain Climber", note: "Plank position — drive knees to chest alternating", prescription: "3 × 20 reps", equip: "bw" },
      { name: "Superman Hold", note: "Arms and legs up — squeeze glutes and hold", prescription: "3 × 10 reps", equip: "bw" },
      { name: "Pallof Press", note: "Band or cable at side — press out, resist rotation", prescription: "3 × 12 each", equip: "band" },
    ],
    intermediate: [
      { name: "Hanging Knee Raise", note: "Full hang — bring knees to chest, lower controlled", prescription: "4 × 12 reps", equip: "pullbar" },
      { name: "Ab Wheel Rollout", note: "From knees — full extension, pull back with core not arms", prescription: "3 × 8 reps", equip: "bw" },
      { name: "V-up", note: "Reach hands to feet simultaneously — explosive crunch", prescription: "3 × 12 reps", equip: "bw" },
      { name: "Russian Twist", note: "Feet off floor — full rotation each side", prescription: "3 × 15 each", equip: "bw" },
      { name: "Side Plank with Hip Dip", note: "Lower hip to floor and return — oblique builder", prescription: "3 × 12 each", equip: "bw" },
      { name: "Plank with Shoulder Tap", note: "Tap opposite shoulder — keep hips from rotating", prescription: "3 × 15 each", equip: "bw" },
      { name: "Hollow Body Rock", note: "Hold hollow position and rock — maintain tension throughout", prescription: "3 × 30 sec", equip: "bw" },
      { name: "Weighted Russian Twist", note: "Dumbbell or plate — controlled rotation", prescription: "3 × 12 each", equip: "db" },
      { name: "Dumbbell Side Bend", note: "Full range — stretch and contract the oblique", prescription: "3 × 15 each", equip: "db" },
      { name: "Cable Woodchop", note: "Diagonal pull — rotate through the core, not the arms", prescription: "3 × 12 each", equip: "cable" },
      { name: "Pallof Press — Heavy", note: "Loaded cable or band — maximize anti-rotation demand", prescription: "3 × 10 each", equip: "cable" },
      { name: "Decline Sit-up", note: "Full range — hands at chest, not behind head", prescription: "4 × 15 reps", equip: "machine" },
    ],
    advanced: [
      { name: "Hanging Leg Raise", note: "Straight legs to bar — full range, control the lower", prescription: "4 × 10 reps", equip: "pullbar" },
      { name: "Toes to Bar", note: "Straight legs — controlled, avoid kipping unless prescribed", prescription: "4 × 10 reps", equip: "pullbar" },
      { name: "Windshield Wiper (hanging)", note: "Rotate legs side to side at 90° — control both directions", prescription: "3 × 8 each", equip: "pullbar" },
      { name: "Dragon Flag", note: "Shoulders on bench — lower full body straight, slow eccentric", prescription: "4 × max reps", equip: "bw" },
      { name: "L-Sit Hold", note: "Parallel bars or floor — hold as long as possible", prescription: "3 × max hold", equip: "bw" },
      { name: "Ab Wheel — Standing", note: "Full rollout from standing — advanced", prescription: "4 × 6 reps", equip: "bw" },
      { name: "Weighted Plank", note: "Plate on back — maintain straight line", prescription: "3 × 45 sec", equip: "db" },
      { name: "Cable Crunch", note: "Round spine over knees — full stretch at top", prescription: "4 × 15 reps", equip: "cable" },
      { name: "Landmine Twist", note: "Hold bar at one end — rotate side to side with control", prescription: "3 × 12 each", equip: "landmine" },
      { name: "Plank to Push-up", note: "Alternate elbows to hands — control the transition", prescription: "3 × 10 each", equip: "bw" },
    ],
  },

  conditioning: {
    name: "Conditioning",
    beginner: [
      // HIIT
      { name: "AMRAP 10 min", note: "5 Push-ups → 10 Squats → 15 Jumping Jacks — max rounds", prescription: "10 min AMRAP", equip: "bw" },
      { name: "Tabata — Jumping Jacks", note: "20 sec work / 10 sec rest × 8 rounds", prescription: "4 min total", equip: "bw" },
      { name: "3-Round Circuit", note: "10 push-ups → 15 squats → 10 burpees → 20 jumping jacks", prescription: "3 rounds · 90 sec rest between", equip: "bw" },
      { name: "Burpee Ladder", note: "1 burpee → rest 30 sec → 2 burpees → rest 30 sec → up to 10", prescription: "10 rungs", equip: "bw" },
      { name: "20-10 Intervals", note: "20 sec squat jumps / 10 sec rest — alternate with push-ups", prescription: "8 rounds each", equip: "bw" },
      { name: "5-Exercise Circuit", note: "10 each: squat jumps, push-ups, sit-ups, high knees, burpees", prescription: "4 rounds · 60 sec rest", equip: "bw" },
      { name: "Tabata — Squats", note: "20 sec max air squats / 10 sec rest × 8 rounds", prescription: "4 min total", equip: "bw" },
      // CrossFit
      { name: "AMRAP 10 min (CrossFit)", note: "5 Push-ups → 10 Air Squats → 15 Sit-ups — log rounds completed", prescription: "10 min AMRAP", equip: "bw" },
      { name: "For Time — 3 Rounds", note: "10 push-ups → 15 squats → 10 burpees → 200m run", prescription: "3 rounds for time", equip: "bw" },
      { name: "EMOM 10 min", note: "Odd min: 10 push-ups · Even min: 10 squats + 5 burpees", prescription: "10 min EMOM", equip: "bw" },
      { name: "Chipper (beginner)", note: "50 squats → 40 sit-ups → 30 push-ups → 20 burpees — for time", prescription: "For time", equip: "bw" },
      { name: "21-15-9 (DB Thrusters)", note: "DB Thrusters + Sit-ups — for time", prescription: "For time", equip: "db" },
      { name: "Bear Complex (BW)", note: "5 rounds: 7 reps each of squat + push-up + burpee — no rest mid-set", prescription: "5 rounds for time", equip: "bw" },
      // HYROX
      { name: "HYROX Skills Circuit", note: "4 rounds: 500m row or ski + 25 wall balls + 50m farmer carry + 10 burpee broad jumps", prescription: "4 rounds · rest as needed", equip: "bw" },
      { name: "Run + Station Interval", note: "400m run → SkiErg or Row 500m — rest 2 min between rounds", prescription: "5 rounds", equip: "bw" },
      { name: "Functional Strength Circuit", note: "KB swing 20 reps → Wall ball 15 reps → Burpee broad jump 10 reps → Farmer carry 50m", prescription: "4 rounds · 2 min rest", equip: "kb" },
      { name: "Run Volume", note: "Easy 5km — build aerobic base for HYROX race", prescription: "5km easy", equip: "bw" },
    ],
    intermediate: [
      // HIIT
      { name: "Tabata — Burpees", note: "20 sec max effort / 10 sec rest × 8 rounds", prescription: "4 min · Rest 2 min · Repeat × 3", equip: "bw" },
      { name: "EMOM 15 min", note: "Odd min: 10 push-ups · Even min: 15 squats", prescription: "15 rounds", equip: "bw" },
      { name: "Chipper", note: "50 squats → 40 sit-ups → 30 push-ups → 20 burpees → 10 pull-ups — for time", prescription: "1 round for time", equip: "pullbar" },
      { name: "AMRAP 15 min", note: "10 push-ups → 15 goblet squats → 10 KB swings → 200m run", prescription: "15 min AMRAP", equip: "kb" },
      { name: "Interval Sprint Circuit", note: "200m sprint → 10 push-ups → 10 burpees — rest 90 sec", prescription: "6 rounds", equip: "bw" },
      { name: "Death by Burpees", note: "Min 1: 1 burpee, Min 2: 2, continue until you can't complete the required reps", prescription: "EMOM to failure", equip: "bw" },
      // CrossFit
      { name: "Fran", note: "21-15-9: Thrusters (75/55 lb) + Pull-ups — for time", prescription: "For time — sub-10 min target", equip: "rack" },
      { name: "Cindy", note: "AMRAP 20 min: 5 pull-ups → 10 push-ups → 15 air squats", prescription: "20 min AMRAP", equip: "pullbar" },
      { name: "EMOM 15 min (CrossFit)", note: "Odd: 5 pull-ups + 7 push-ups + 9 squats · Even: rest", prescription: "15 min EMOM", equip: "pullbar" },
      { name: "For Time — Run + Work", note: "5 rounds: 400m run → 15 push-ups → 20 squats", prescription: "For time", equip: "bw" },
      { name: "DT", note: "5 rounds for time: 12 deadlifts → 9 hang power cleans → 6 push jerks", prescription: "For time", equip: "bb" },
      // HYROX
      { name: "HYROX Half Simulation", note: "4 × (1km run + station): SkiErg 500m → Sled Push 25m → Burpee Broad Jump 40m → Row 500m", prescription: "4 stations", equip: "bw" },
      { name: "Station Repeats", note: "3 rounds of each HYROX station at race effort — SkiErg 1000m, Wall Balls 75, Farmer Carry 100m, Sandbag Lunges 50m", prescription: "3 × each station · 90 sec rest", equip: "kb" },
      { name: "Run + Strength Combo", note: "1km run → 20 wall balls → 1km run → 15 burpee broad jumps → 1km run → Farmer carry 100m", prescription: "For time", equip: "bw" },
    ],
    advanced: [
      // HIIT
      { name: "Cindy — AMRAP 20 min", note: "5 pull-ups → 10 push-ups → 15 air squats — max rounds", prescription: "20 min AMRAP", equip: "pullbar" },
      { name: "EMOM 20 min", note: "Odd: 10 burpees · Even: 15 box jumps", prescription: "20 rounds", equip: "bw" },
      { name: "Full Chipper", note: "100 squats → 75 sit-ups → 50 push-ups → 25 pull-ups → 1 mile run — for time", prescription: "1 round for time", equip: "pullbar" },
      { name: "Tabata Complex", note: "4 min burpees → rest 2 min → 4 min squat jumps → rest 2 min → 4 min push-ups", prescription: "3 blocks", equip: "bw" },
      { name: "Sprint Intervals", note: "10 × 200m all-out — full effort each rep", prescription: "10 × 200m · 90 sec rest", equip: "bw" },
      { name: "300 Workout", note: "25 pull-ups → 50 deadlifts → 50 push-ups → 50 box jumps → 50 floor wipers → 25 pull-ups", prescription: "For time", equip: "pullbar" },
      // CrossFit
      { name: "Murph", note: "1 mile run → 100 pull-ups → 200 push-ups → 300 squats → 1 mile run (partition as needed)", prescription: "For time — wear vest if able", equip: "pullbar" },
      { name: "Helen", note: "3 rounds for time: 400m run + 21 KB swings (53/35 lb) + 12 pull-ups", prescription: "For time", equip: "pullbar" },
      { name: "Diane", note: "21-15-9: Deadlifts (225/155 lb) + Handstand Push-ups — for time", prescription: "For time", equip: "bb" },
      { name: "Grace", note: "30 Clean and Jerks (135/95 lb) for time", prescription: "For time — sub-5 min target", equip: "bb" },
      { name: "Jackie", note: "For time: 1000m row → 50 thrusters (45/35 lb) → 30 pull-ups", prescription: "For time", equip: "pullbar" },
      // HYROX
      { name: "Full HYROX Race Simulation", note: "8 × (1km run + station): SkiErg 1000m → Sled Push 50m → Sled Pull 50m → Burpee Broad Jump 80m → Row 1000m → Farmer Carry 200m → Sandbag Lunges 100m → Wall Balls 100 reps", prescription: "Full race — record total time", equip: "bw" },
      { name: "Race Pace Intervals", note: "1km at HYROX target pace → SkiErg 1000m → 1km run → Row 1000m — rest 3 min between pairs", prescription: "4 pairs", equip: "bw" },
      { name: "HYROX Strength Day", note: "Heavy sled push 6 × 50m + heavy farmer carry 6 × 50m + wall balls 5 × 20 — max load each", prescription: "6 sets each", equip: "kb" },
    ],
  },

  'track-day': {
    name: "Track Day",
    beginner: [
      // Cardio
      { name: "Easy Jog", note: "Conversational pace — you should be able to hold a full sentence", prescription: "20 min", equip: "bw" },
      { name: "Walk / Run Intervals", note: "1 min run, 2 min walk — build the aerobic engine", prescription: "8 rounds", equip: "bw" },
      { name: "400m Easy Run", note: "Relaxed pace, focus on breathing and form", prescription: "4 × 400m · 2 min rest", equip: "bw" },
      { name: "Stair Climbing", note: "Steady pace up and down — arms drive", prescription: "15 min", equip: "bw" },
      { name: "Alternating Jog / Sprint", note: "Jog 1 min, sprint 20 sec — steady jog recovery", prescription: "8 rounds", equip: "bw" },
      { name: "Power Walk", note: "Fast walk — arms swing, heel to toe", prescription: "30 min", equip: "bw" },
      // Plyometrics
      { name: "Lateral Hops", note: "Jump side to side — land soft and absorb each landing", prescription: "3 × 20 reps", equip: "bw" },
      { name: "Box Jump", note: "Max height — land soft, step down carefully", prescription: "4 × 5 reps", equip: "bw" },
      { name: "Broad Jump", note: "Jump as far as possible — land on two feet and hold", prescription: "4 × 5 reps", equip: "bw" },
      { name: "Tuck Jump", note: "Jump and pull knees to chest — land soft each time", prescription: "3 × 10 reps", equip: "bw" },
      { name: "Skater Bound", note: "Leap side to side — one leg landing, like a speed skater", prescription: "3 × 10 each", equip: "bw" },
      { name: "Ankle Bounce", note: "Fast small hops on the balls of your feet — minimal knee bend", prescription: "3 × 30 sec", equip: "bw" },
      // Mobility
      { name: "Hip 90-90 Stretch", note: "Both legs at 90°, tall spine — sit upright and breathe", prescription: "Hold 60 sec each side", equip: "bw" },
      { name: "Hip Flexor Stretch", note: "Lunge position, sink hips forward — hold and breathe", prescription: "Hold 60 sec each side", equip: "bw" },
      { name: "Deep Squat Hold", note: "Feet shoulder width, full depth — hands together, elbows on knees", prescription: "Hold 2 min", equip: "bw" },
      { name: "World's Greatest Stretch", note: "Lunge, rotate arm to ceiling, hold — then move to next rep", prescription: "5 each side", equip: "bw" },
      { name: "Cat-Cow Flow", note: "Slow breath with each movement — full spinal articulation", prescription: "10 rounds", equip: "bw" },
    ],
    intermediate: [
      // Cardio
      { name: "Tempo Run", note: "Comfortably hard — can speak in short sentences only", prescription: "25 min", equip: "bw" },
      { name: "400m Repeats", note: "Near mile race pace — hit consistent splits", prescription: "6 × 400m · 90 sec rest", equip: "bw" },
      { name: "800m Repeats", note: "5K effort — controlled breathing, don't go out too fast", prescription: "4 × 800m · 2 min rest", equip: "bw" },
      { name: "Fartlek Run", note: "30 min steady with 1 min hard surges every 5 min", prescription: "30 min", equip: "bw" },
      { name: "Hill Sprints", note: "Sprint up, walk down — full effort each rep", prescription: "8 × 30 sec · walk rest", equip: "bw" },
      { name: "Row Intervals", note: "500m hard, 500m easy — consistent pace throughout", prescription: "5 rounds", equip: "machine" },
      // Plyometrics
      { name: "T-Drill", note: "Sprint 10m → shuffle 5m left → shuffle 10m right → shuffle 5m left → backpedal 10m", prescription: "6 × full drill", equip: "bw" },
      { name: "Pro Agility Drill", note: "From center: sprint 5m right, sprint 10m left, sprint 5m back", prescription: "6 × each direction", equip: "bw" },
      { name: "Depth Jump", note: "Step off box, land and immediately jump as high as possible", prescription: "4 × 5 reps", equip: "bw" },
      { name: "Hurdle Hops", note: "Jump over low hurdles — fast, reactive ground contact", prescription: "4 × 6 hurdles", equip: "bw" },
      { name: "Box Jump — Lateral", note: "Jump sideways onto box — step down, repeat", prescription: "4 × 6 each", equip: "bw" },
      { name: "Power Skip", note: "Exaggerated skip — drive knee and opposite arm high", prescription: "3 × 30m", equip: "bw" },
      // Mobility
      { name: "Pigeon Pose", note: "Front shin forward, back leg extended — breathe into the hip", prescription: "Hold 90 sec each side", equip: "bw" },
      { name: "Cossack Squat", note: "Side to side deep lunge — pause in the deepest position", prescription: "10 each side", equip: "bw" },
      { name: "Thoracic Rotation", note: "On all fours, rotate one arm to ceiling — follow with eyes", prescription: "10 each side", equip: "bw" },
      { name: "Active Leg Swing", note: "Hold wall, swing leg forward and back — gradually increase range", prescription: "10 each direction × each side", equip: "bw" },
    ],
    advanced: [
      // Cardio
      { name: "Mile Repeats", note: "5K pace — consistent effort each mile", prescription: "4 × 1 mile · 2 min rest", equip: "bw" },
      { name: "VO2 Max Intervals", note: "Maximum effort — full recovery between each", prescription: "5 × 3 min · 3 min rest", equip: "bw" },
      { name: "Long Tempo Run", note: "Race pace — sustained effort, don't fade", prescription: "40 min", equip: "bw" },
      { name: "400m Sprint Ladder", note: "400m at mile pace — 60 sec rest, keep each rep honest", prescription: "10 × 400m · 60 sec rest", equip: "bw" },
      { name: "Two-mile Time Trial", note: "Maximum sustainable pace for 2 miles — track your time", prescription: "1 × 2 miles for time", equip: "bw" },
      { name: "Threshold Run", note: "Just below max sustainable — hold pace no matter what", prescription: "30 min at threshold", equip: "bw" },
      // Plyometrics
      { name: "Plyo Skater — Distance", note: "Max lateral distance each bound — stick landing for 2 sec", prescription: "4 × 8 each", equip: "bw" },
      { name: "Triple Broad Jump", note: "Three consecutive maximum broad jumps — stick the final landing", prescription: "4 × 3 jumps", equip: "bw" },
      { name: "Bounding", note: "Exaggerated running strides — drive off one foot, reach with opposite", prescription: "4 × 30m", equip: "bw" },
      { name: "Reactive Sprint", note: "Hold athletic position — sprint on cue (visual or audio)", prescription: "8 × 10m", equip: "bw" },
      { name: "Altitude Drop to Sprint", note: "Drop from low box, absorb, immediately sprint 20m", prescription: "5 reps", equip: "bw" },
      // Mobility
      { name: "Full Splits", note: "Front leg forward — breathe and let gravity do the work over time", prescription: "Hold 2 min each side", equip: "bw" },
      { name: "Bridge Walk-outs", note: "Bridge position, walk hands toward feet — open thoracic and shoulder", prescription: "5 reps", equip: "bw" },
      { name: "Pancake Stretch", note: "Wide straddle, hinge forward with flat back — chest to floor over time", prescription: "Hold 90 sec", equip: "bw" },
      { name: "Hip 90-90 Transition", note: "Transition smoothly from internal to external rotation — flow between sides", prescription: "10 each direction", equip: "bw" },
    ],
  },

  'flow-state': {
    name: "Flow State",
    beginner: [
      // Yoga
      { name: "Mountain Pose", note: "Feet together, arms at sides — breathe tall, feel the ground", prescription: "Hold 5 breaths", equip: "bw" },
      { name: "Downward Dog", note: "Press heels down, lengthen spine — pedal feet to warm up", prescription: "Hold 10 breaths", equip: "bw" },
      { name: "Child's Pose", note: "Knees wide, arms extended — breathe into the back", prescription: "Hold 10 breaths", equip: "bw" },
      { name: "Cat-Cow", note: "Slow breath with each movement — arch and round the spine", prescription: "10 rounds", equip: "bw" },
      { name: "Warrior I", note: "Front knee over ankle, back leg straight — arms reach overhead", prescription: "Hold 5 breaths each side", equip: "bw" },
      { name: "Warrior II", note: "Arms wide, front knee over ankle — gaze over front hand", prescription: "Hold 5 breaths each side", equip: "bw" },
      { name: "Tree Pose", note: "Foot on inner thigh or calf — find your gaze point and hold", prescription: "Hold 5 breaths each side", equip: "bw" },
      { name: "Seated Forward Fold", note: "Hinge at hips, reach for feet — don't round the upper back", prescription: "Hold 10 breaths", equip: "bw" },
      { name: "Bridge Pose", note: "Drive hips up, squeeze glutes — press through feet", prescription: "Hold 5 breaths × 3", equip: "bw" },
      { name: "Supine Spinal Twist", note: "Knee across body, shoulder stays down — breathe into the rotation", prescription: "Hold 8 breaths each side", equip: "bw" },
      // Pilates
      { name: "The Hundred (modified)", note: "Knees bent, feet off floor — pump arms up and down, breathe in for 5, out for 5", prescription: "100 pumps", equip: "bw" },
      { name: "Rolling Like a Ball", note: "Knees to chest, balance on tailbone — roll back and return", prescription: "10 reps", equip: "bw" },
      { name: "Single Leg Stretch", note: "Head up, pull one knee in, extend other leg — alternate", prescription: "10 each side", equip: "bw" },
      { name: "Shoulder Bridge", note: "Bridge up, hold — lower one vertebra at a time", prescription: "10 reps", equip: "bw" },
      { name: "Side-lying Leg Lift", note: "Stack hips, lift top leg — control both directions", prescription: "15 each side", equip: "bw" },
      { name: "Chest Lift", note: "Curl head and shoulders up — hold at top, lower slowly", prescription: "3 × 15 reps", equip: "bw" },
      { name: "Pelvic Curl", note: "Bridge up one segment at a time — peel the spine off the mat", prescription: "10 reps", equip: "bw" },
      { name: "Cat Stretch", note: "On hands and knees — round to flat with each breath", prescription: "10 reps", equip: "bw" },
    ],
    intermediate: [
      // Yoga
      { name: "Warrior III", note: "Balance on one leg — body forms a T from head to heel", prescription: "Hold 5 breaths each side", equip: "bw" },
      { name: "Half Moon Pose", note: "One hand down, leg extended — open hips and chest", prescription: "Hold 5 breaths each side", equip: "bw" },
      { name: "Boat Pose", note: "V-shape — legs and chest lift, core engaged", prescription: "Hold 5 breaths × 3", equip: "bw" },
      { name: "Camel Pose", note: "Kneel, hands to heels — open the chest, don't collapse the neck", prescription: "Hold 5 breaths × 2", equip: "bw" },
      { name: "Pigeon Pose", note: "Front shin forward, back leg extended — breathe into the hip", prescription: "Hold 10 breaths each side", equip: "bw" },
      { name: "Chaturanga", note: "Elbows back, lower to hover — shoulders stay level with elbows", prescription: "3 × 5 reps", equip: "bw" },
      { name: "Reverse Warrior", note: "From Warrior II, slide back hand down back leg — reach up", prescription: "Hold 5 breaths each side", equip: "bw" },
      { name: "Chair Pose", note: "Sit into an invisible chair — arms overhead, chest up", prescription: "Hold 5 breaths × 3", equip: "bw" },
      { name: "Garland Pose (Malasana)", note: "Deep squat, palms together — open hips with elbows", prescription: "Hold 10 breaths", equip: "bw" },
      // Pilates
      { name: "The Hundred (full)", note: "Legs extended low, head up — 100 arm pumps with breath pattern", prescription: "100 pumps", equip: "bw" },
      { name: "Roll-Up", note: "Lying flat, roll all the way up to seated — slow and controlled", prescription: "10 reps", equip: "bw" },
      { name: "Criss-Cross", note: "Head up, twist opposite elbow to knee — extend other leg low", prescription: "10 each side", equip: "bw" },
      { name: "Teaser (modified)", note: "Knees bent — roll up to balance, extend legs if able", prescription: "8 reps", equip: "bw" },
      { name: "Side Kick Series", note: "Lying on side — kick forward and back with control", prescription: "10 each direction × each side", equip: "bw" },
      { name: "Swimming", note: "Face down, lift opposite arm and leg — flutter like swimming", prescription: "3 × 30 sec", equip: "bw" },
      { name: "Spine Twist", note: "Seated, arms wide — rotate from waist, keep hips square", prescription: "10 each side", equip: "bw" },
    ],
    advanced: [
      // Yoga
      { name: "Crow Pose", note: "Knees on triceps, lean forward — both feet off the floor", prescription: "Hold 5 breaths × 3", equip: "bw" },
      { name: "Headstand (wall-assisted)", note: "Head and forearms form a tripod — use wall for support", prescription: "Hold 10 breaths × 2", equip: "bw" },
      { name: "Handstand (wall-assisted)", note: "Kick up to wall — squeeze glutes and core, point toes", prescription: "Hold 10 breaths × 3", equip: "bw" },
      { name: "Wheel Pose", note: "Hands by ears, feet flat — press up to full backbend", prescription: "Hold 5 breaths × 3", equip: "bw" },
      { name: "King Pigeon Prep", note: "From pigeon, bend back knee — reach back to catch the foot", prescription: "Hold 8 breaths each side", equip: "bw" },
      { name: "Bird of Paradise", note: "Bind around leg, balance, and extend — strength and flexibility", prescription: "Hold 5 breaths each side", equip: "bw" },
      { name: "Full Splits", note: "Front leg forward, back leg extended — no forcing, breathe in", prescription: "Hold 10 breaths each side", equip: "bw" },
      // Pilates
      { name: "Teaser (full)", note: "Legs straight, lift to full V — balance and lower with control", prescription: "10 reps", equip: "bw" },
      { name: "Jackknife", note: "Roll legs overhead, then jackknife straight up — controlled return", prescription: "6 reps", equip: "bw" },
      { name: "Control Balance", note: "Shoulder stand, one leg down, switch — precise and controlled", prescription: "6 each side", equip: "bw" },
      { name: "Boomerang", note: "Full roll-back, cross legs, roll up to teaser — complex movement", prescription: "6 reps each side", equip: "bw" },
      { name: "Swan Dive", note: "From swan, dive forward and rock up — flowing movement", prescription: "6 reps", equip: "bw" },
      { name: "Cork Screw", note: "Both legs up, circle them in opposite direction each rep", prescription: "5 each direction", equip: "bw" },
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

  yoga: {
    name: "Yoga",
    beginner: [
      { name: "Mountain Pose (Tadasana)", note: "Stand tall — feet together, arms at sides, breathe deep", prescription: "5 full breaths × 3 sets" },
      { name: "Sun Salutation A", note: "Move with your breath — inhale to extend, exhale to fold", prescription: "5 slow rounds" },
      { name: "Warrior 1 (Virabhadrasana I)", note: "Front knee over ankle, hips square, arms overhead — strong base", prescription: "60 sec each side" },
      { name: "Warrior 2 (Virabhadrasana II)", note: "Arms parallel to floor, sink into front hip — gaze forward", prescription: "60 sec each side" },
      { name: "Extended Side Angle (Utthita Parsvakonasana)", note: "Front forearm on thigh, top arm over ear — long lateral line", prescription: "45 sec each side" },
      { name: "Downward Dog (Adho Mukha Svanasana)", note: "Hips high, heels pressing toward floor — pedal feet to warm up", prescription: "5 breaths × 3 sets" },
      { name: "Low Lunge (Anjaneyasana)", note: "Back knee down, sink hips forward — stretch hip flexor fully", prescription: "60 sec each side" },
      { name: "Child's Pose (Balasana)", note: "Arms extended or alongside body — let the spine lengthen", prescription: "90 sec" },
      { name: "Cat-Cow (Marjaryasana-Bitilasana)", note: "Inhale arch the back, exhale round it — slow and controlled", prescription: "10 full cycles" },
      { name: "Tree Pose (Vrksasana)", note: "Foot to inner thigh or calf — never press on knee joint", prescription: "60 sec each side" },
      { name: "Seated Forward Fold (Paschimottanasana)", note: "Hinge from hips — spine long before folding, not from waist", prescription: "90 sec" },
      { name: "Cobra Pose (Bhujangasana)", note: "Hands under shoulders, elbows soft — lift chest using back muscles", prescription: "5 breaths × 3 sets" },
      { name: "Supine Spinal Twist (Supta Matsyendrasana)", note: "Shoulders flat on floor — breathe into the twist", prescription: "60 sec each side" },
      { name: "Legs Up the Wall (Viparita Karani)", note: "Hips close to wall, legs vertical — total relaxation", prescription: "3 min" },
    ],
    intermediate: [
      { name: "Sun Salutation B", note: "Add Warrior 1 each side — move faster than Sun A", prescription: "5 rounds" },
      { name: "Warrior 3 (Virabhadrasana III)", note: "Standing balance — torso and back leg form one straight line", prescription: "45 sec each side" },
      { name: "Triangle Pose (Trikonasana)", note: "Reach forward before lowering hand — keep both sides of waist long", prescription: "60 sec each side" },
      { name: "Revolved Triangle (Parivrtta Trikonasana)", note: "Twist from the waist — opposite hand to floor or shin", prescription: "45 sec each side" },
      { name: "Half Moon Pose (Ardha Chandrasana)", note: "Stack hips, rotate torso open — gaze up when stable", prescription: "45 sec each side" },
      { name: "Boat Pose (Navasana)", note: "V-shape — legs and torso at equal angles, core tight", prescription: "3 × 30 sec" },
      { name: "Pigeon Pose (Eka Pada Rajakapotasana)", note: "Hips square, front shin parallel or angled — melt into the stretch", prescription: "90 sec each side" },
      { name: "Camel Pose (Ustrasana)", note: "Push hips forward before reaching back — open chest wide", prescription: "3 × 30 sec" },
      { name: "Bridge Pose (Setu Bandha Sarvangasana)", note: "Press through heels, lift hips — squeeze glutes at top", prescription: "5 breaths × 3 sets" },
      { name: "Crow Pose (Bakasana) — Entry Practice", note: "Lean forward, knees to triceps — hold for a breath, then longer", prescription: "5 attempts — build to 10 sec hold" },
      { name: "Seated Spinal Twist (Ardha Matsyendrasana)", note: "Sit tall first — exhale deeper into the twist each breath", prescription: "60 sec each side" },
      { name: "Vinyasa Flow", note: "Downward dog → plank → chaturanga → upward dog — no break between", prescription: "10 rounds" },
      { name: "Standing Split (Urdhva Prasarita Eka Padasana)", note: "Square hips, drive raised leg up — hands on floor or shin", prescription: "45 sec each side" },
    ],
    advanced: [
      { name: "Crow Pose (Bakasana)", note: "Full hold — straighten arms, engage core, breathe", prescription: "3 × 20 sec" },
      { name: "Side Crow (Parsva Bakasana)", note: "Rotate torso fully, stack both knees on one upper arm", prescription: "3 attempts each side" },
      { name: "Headstand (Sirsasana)", note: "Forearm triangle base, walk feet in, lift slowly — use wall until stable", prescription: "3 × 30 sec" },
      { name: "Forearm Stand (Pincha Mayurasana)", note: "Forearms parallel, kick up gently — engage core and glutes", prescription: "3 attempts" },
      { name: "Wheel Pose (Urdhva Dhanurasana)", note: "Press evenly through hands and feet — open chest fully at the top", prescription: "3 × 20 sec" },
      { name: "Bird of Paradise (Svarga Dvijasana)", note: "Bind in extended side angle, shift to standing, open bound arm overhead", prescription: "30 sec each side" },
      { name: "Eight Angle Pose (Astavakrasana)", note: "Hook legs around one arm — extend legs parallel to floor", prescription: "3 attempts each side" },
      { name: "Firefly Pose (Tittibhasana)", note: "Thighs high on upper arms — straighten both legs, arms straight", prescription: "3 × 10 sec" },
      { name: "Scorpion Pose (Vrschikasana)", note: "From forearm stand — arch back, toes toward crown of head", prescription: "3 attempts" },
      { name: "One-Legged King Pigeon (Eka Pada Rajakapotasana)", note: "Full backbend with rear foot at crown — use a strap to start", prescription: "30 sec each side" },
      { name: "Power Yoga Flow", note: "Sun B → standing sequence → arm balances → floor — continuous movement", prescription: "20 min" },
    ],
  },

  pilates: {
    name: "Pilates",
    beginner: [
      { name: "Pelvic Curl", note: "Feet flat, knees bent — peel spine up one vertebra at a time, hold, roll back down", prescription: "10 reps" },
      { name: "Chest Lift", note: "Hands behind head — curl only the upper spine off mat, hold briefly", prescription: "3 × 15 reps" },
      { name: "The Hundred — Tabletop", note: "Legs at tabletop, pump arms small — inhale 5, exhale 5", prescription: "100 pumps" },
      { name: "Roll Up", note: "Arms overhead, peel up slowly — C-curve over legs, roll back the same way", prescription: "8 reps" },
      { name: "Single Leg Circles", note: "Keep pelvis completely still — draw large smooth circles with one leg", prescription: "8 each direction × each leg" },
      { name: "Rolling Like a Ball", note: "Tight ball — feet off floor, roll back to shoulder blades, return", prescription: "10 reps" },
      { name: "Single Leg Stretch", note: "One knee pulls in, opposite leg extends — switch rhythmically", prescription: "10 each side" },
      { name: "Double Leg Stretch", note: "Pull knees into chest, then reach arms and legs out — hold, pull back", prescription: "10 reps" },
      { name: "Spine Stretch Forward", note: "Sit tall, feet flexed — reach forward as spine rounds into a C", prescription: "8 reps" },
      { name: "Side-Lying Leg Lifts", note: "Stack hips perfectly — lift and lower top leg with control", prescription: "12 each side" },
      { name: "Bird Dog", note: "On all fours — extend opposite arm and leg, hold 3 sec, return", prescription: "10 each side" },
    ],
    intermediate: [
      { name: "The Hundred — Extended Legs", note: "Legs straight at 45° — lower = harder. Pump arms, breathe rhythmically", prescription: "100 pumps" },
      { name: "Roll Over", note: "From lying, sweep legs overhead to parallel with floor — roll down slowly", prescription: "6 reps" },
      { name: "Single Leg Circles — Full Range", note: "Larger arc than beginner — pelvis stays anchored", prescription: "10 each direction × each leg" },
      { name: "Scissors (Double Leg Pull)", note: "Both legs up, lower one while pulling the other — split and switch", prescription: "10 each side" },
      { name: "Criss-Cross", note: "Pull one knee in, extend other leg — rotate elbow toward knee, switch", prescription: "10 each side" },
      { name: "Corkscrew", note: "Legs together, circle both down one side, through centre, up the other", prescription: "4 each direction" },
      { name: "Saw", note: "Seated wide legs — rotate, reach opposite hand past pinky toe, pulse 3×", prescription: "8 each side" },
      { name: "Swan", note: "Hands under shoulders — push up, lifting chest, then rock forward and back", prescription: "8 reps" },
      { name: "Swan Dive", note: "From swan peak — release hands and balance on hips, rocking forward and back", prescription: "6 reps" },
      { name: "Side Kick Series", note: "Front/back kicks, up/down, small circles, bicycle — stable torso", prescription: "10 reps each movement × each side" },
      { name: "Swimming", note: "Prone — flutter arms and legs alternately, breathing in 5 counts out 5", prescription: "30 sec × 3 sets" },
      { name: "Spine Twist", note: "Seated tall, arms wide — rotate from waist, pulse twice, return", prescription: "8 each side" },
    ],
    advanced: [
      { name: "Teaser I", note: "Legs at 45°, roll up into V — balance on tailbone, hold, roll down", prescription: "8 reps" },
      { name: "Teaser II", note: "Hold teaser position — lower and lift legs while torso stays still", prescription: "6 reps" },
      { name: "Teaser III", note: "Lower and lift everything — arms, legs, and torso all move together", prescription: "5 reps" },
      { name: "Hip Circles", note: "In teaser position — circle both legs together in a full controlled arc", prescription: "4 each direction" },
      { name: "Boomerang", note: "Roll back, cross ankles, tease up, uncross, circle arms behind and sweep forward", prescription: "6 reps — alternate leg cross" },
      { name: "Crab", note: "Tight ball, cross ankles — roll back and forward, switching ankle cross each time", prescription: "6 reps" },
      { name: "Control Balance", note: "From shoulder stand — lower one leg toward floor while other stays vertical", prescription: "5 each side" },
      { name: "Jackknife", note: "Sweep legs overhead, push hips up toward ceiling, lower with control", prescription: "6 reps" },
      { name: "Push-Up Series (Pilates)", note: "Walk hands out from standing, 3 push-ups, walk back up — straight body line", prescription: "5 full sequences" },
      { name: "Rocking", note: "Prone — reach back for ankles, arch up and rock forward and back", prescription: "8 rocks" },
      { name: "Full Classical Mat Series", note: "All exercises in order from The Hundred through Push-Ups — no breaks", prescription: "1 full classical sequence" },
    ],
  },

  agility: {
    name: "Agility & Plyometrics",
    beginner: [
      { name: "Squat Jumps", note: "Squat to parallel, explode up — land soft with bent knees, reset fully before next rep", prescription: "4 × 8 reps · 90 sec rest" },
      { name: "Broad Jumps", note: "Swing arms back, explode forward — land on both feet, absorb impact", prescription: "4 × 6 reps · 90 sec rest" },
      { name: "Box Jumps — Low Box", note: "12–18 inch box — full squat launch, land soft, step back down", prescription: "4 × 6 reps · 90 sec rest" },
      { name: "Lateral Bounds", note: "Push off one foot, land on the other — pause and balance each rep", prescription: "3 × 8 each side · 90 sec rest" },
      { name: "Tuck Jumps", note: "Jump and pull both knees toward chest — land and immediately reset", prescription: "3 × 6 reps · 90 sec rest" },
      { name: "Jump Rope — Basic Bounce", note: "Both feet, steady rhythm — keep shoulders relaxed, elbows in", prescription: "5 × 1 min · 45 sec rest" },
      { name: "Step-Up to Jump", note: "Step up onto box, drive opposite knee up and jump off — land softly", prescription: "3 × 8 each leg · 90 sec rest" },
      { name: "Star Jumps", note: "Jump and spread arms and legs wide — land with feet together, absorb", prescription: "3 × 10 reps · 60 sec rest" },
      { name: "Skater Hops", note: "Side to side on one foot — mimic a speed skater, reach opposite hand to foot", prescription: "3 × 10 each side · 60 sec rest" },
    ],
    intermediate: [
      { name: "Depth Jumps", note: "Step off box, land, immediately jump as high as possible — minimal ground contact time", prescription: "4 × 6 reps · 2 min rest" },
      { name: "Box Jumps — High Box", note: "24–30 inch box — full effort, land in squat, step back down", prescription: "5 × 5 reps · 90 sec rest" },
      { name: "Lateral Box Jumps", note: "Stand beside box, jump laterally onto it — stick landing, step off far side", prescription: "4 × 6 each side · 90 sec rest" },
      { name: "Single Leg Box Jumps", note: "One leg takeoff only — drive off one foot, land on two, control descent", prescription: "3 × 5 each leg · 2 min rest" },
      { name: "Hurdle Hops — Double Leg", note: "Continuous two-foot hops over low hurdles — fast off the ground, stay tall", prescription: "4 × 6 hurdles · 90 sec rest" },
      { name: "Bounding", note: "Exaggerated running strides — maximum distance each step, drive knee up", prescription: "4 × 20m · 90 sec rest" },
      { name: "Power Skips", note: "Skip with maximum height — drive knee up explosively, reach for sky", prescription: "4 × 20m · 60 sec rest" },
      { name: "Broad Jump + Stick", note: "Max effort jump — hold the landing for 2 sec before resetting", prescription: "5 × 5 reps · 90 sec rest" },
      { name: "Jump Rope — Double Unders", note: "Rope passes twice per jump — wrist snap, slight lean forward", prescription: "5 × 20 reps · 60 sec rest" },
      { name: "180° Jump Squat", note: "Squat and jump, rotating 180° mid-air — land facing opposite direction", prescription: "3 × 8 reps · 90 sec rest" },
    ],
    advanced: [
      { name: "Depth Jump to Sprint", note: "Step off box, land, immediately sprint 10m — no hesitation between landing and sprint", prescription: "6 × full rep · 2 min rest" },
      { name: "Single Leg Hurdle Hops", note: "Continuous one-foot hops over hurdles — push ground away fast, stay upright", prescription: "4 × 6 hurdles each leg · 2 min rest" },
      { name: "Reactive Drop Jump", note: "Partner drops you from a hold — react on landing, jump as high as possible immediately", prescription: "5 × 5 reps · 2 min rest" },
      { name: "Plyometric Triple Threat", note: "Depth jump → broad jump → sprint 10m — connect all three with zero rest between", prescription: "5 × full complex · 2 min rest" },
      { name: "Continuous Bounds — Distance", note: "Max distance per bound — count total bounds over 30m, try to reduce the number", prescription: "5 × 30m · 90 sec rest" },
      { name: "Box Jump Burpee", note: "Burpee on the ground, then jump onto high box — full range both movements", prescription: "4 × 8 reps · 90 sec rest" },
      { name: "Weighted Jump Squats", note: "Light dumbbells or goblet position — 20–30% bodyweight max, explode every rep", prescription: "5 × 6 reps · 2 min rest" },
      { name: "Alternating Bounds — Max Height", note: "Bound side to side, focusing on height rather than distance — single leg each rep", prescription: "4 × 10 each side · 90 sec rest" },
      { name: "Tuck Jump Series", note: "Continuous tuck jumps with no pause — 10 reps straight, land and go again", prescription: "4 × 10 reps · 2 min rest" },
      { name: "Paused Depth Jump", note: "Step off, land in full squat and hold 2 sec — then explode up maximally", prescription: "4 × 5 reps · 2 min rest" },
    ],
  },

  mobility: {
    name: "Mobility",
    beginner: [
      { name: "Hip 90/90 Stretch", note: "Sit between hips — rotate forward and back through each hip", prescription: "60 sec each direction" },
      { name: "World's Greatest Stretch", note: "Lunge, elbow to floor, rotate open — hold at end range", prescription: "5 reps each side" },
      { name: "Thoracic Rotation", note: "Seated or quadruped — open chest as far as possible", prescription: "10 each side" },
      { name: "Deep Squat Hold", note: "Feet shoulder-width, toes out slightly — hold bottom", prescription: "3 × 45 sec" },
      { name: "Shoulder CARs", note: "Controlled Articular Rotations — slow full circle of shoulder", prescription: "5 each direction each shoulder" },
      { name: "Ankle Dorsiflexion", note: "Knee over toe — find max range without heel rising", prescription: "10 reps each side" },
    ],
    intermediate: [
      { name: "Hip Mobility Flow", note: "90/90 → pigeon → lizard → couch stretch — hold 45 sec each", prescription: "4-position flow × each side" },
      { name: "Thoracic Extension on Roller", note: "Segment by segment — pause at each tight spot", prescription: "2 min total" },
      { name: "Couch Stretch", note: "Rear foot on wall — drive hips forward, stand tall", prescription: "90 sec each side" },
      { name: "Hip Flexor Progressive Stretch", note: "Lunge → hands up → lean back — create length", prescription: "5 reps each side" },
      { name: "Full Shoulder Mobility Sequence", note: "CARs → sleeper stretch → cross-body → doorway", prescription: "2 min per shoulder" },
      { name: "Loaded Progressive Deep Squat", note: "Hold weight for counter-balance — slowly build depth", prescription: "3 × 60 sec" },
    ],
    advanced: [
      { name: "Full Body Mobility Flow", note: "Ground sequence — connect all joints, slow and controlled", prescription: "15 min flow" },
      { name: "Joint CARs — Full Body", note: "Neck → shoulder → spine → hip → knee → ankle — one rep each", prescription: "3 full body rounds" },
      { name: "End-Range Isometric Holds", note: "At maximum range — contract 5 sec, relax, push further", prescription: "5 reps × each joint" },
      { name: "Overhead Deep Squat", note: "Dowel or light bar overhead — maintain vertical torso", prescription: "3 × 10 reps" },
      { name: "Jefferson Curl", note: "Light weight, slow — roll down vertebra by vertebra", prescription: "3 × 5 reps" },
      { name: "Full FRC Routine", note: "Functional Range Conditioning — CARs + PAILs + RAILs", prescription: "20 min full routine" },
    ],
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
