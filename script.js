// ══════════════════════════════════════════════════════════════
//  QUESTION BANK
// ══════════════════════════════════════════════════════════════
const QUESTION_BANK = {
  math: [
    { q:"What is 12 × 12?", options:["124","144","132","148"], answer:1, explanation:"12 × 12 = 144.", level:"easy" },
    { q:"What is 3/4 written as a decimal?", options:["0.34","0.43","0.75","0.25"], answer:2, explanation:"3 ÷ 4 = 0.75.", level:"easy" },
    { q:"What is 25% of 80?", options:["15","20","25","30"], answer:1, explanation:"25% = 1/4, and 80 ÷ 4 = 20.", level:"easy" },
    { q:"What is 1,000 ÷ 25?", options:["30","40","45","50"], answer:1, explanation:"1,000 ÷ 25 = 40.", level:"easy" },
    { q:"How many minutes are in 3.5 hours?", options:["180","200","210","215"], answer:2, explanation:"3.5 × 60 = 210 minutes.", level:"easy" },
    { q:"What is the area of a rectangle 8 cm long and 5 cm wide?", options:["26 cm²","13 cm²","40 cm²","35 cm²"], answer:2, explanation:"Area = length × width = 8 × 5 = 40 cm².", level:"medium" },
    { q:"Which of these numbers is prime?", options:["9","15","17","21"], answer:2, explanation:"17 is only divisible by 1 and itself.", level:"medium" },
    { q:"What is the value of 2⁵?", options:["10","16","32","25"], answer:2, explanation:"2⁵ = 2×2×2×2×2 = 32.", level:"medium" },
    { q:"A pizza has 8 slices. You eat 3. What fraction is left?", options:["3/8","5/8","1/2","2/3"], answer:1, explanation:"8 − 3 = 5 slices left, so 5/8.", level:"medium" },
    { q:"Round 4,786 to the nearest hundred.", options:["4,700","4,790","4,800","5,000"], answer:2, explanation:"86 > 50, so rounds up to 4,800.", level:"medium" },
    { q:"What is the perimeter of a square with sides of 7 cm?", options:["14 cm","21 cm","28 cm","49 cm"], answer:2, explanation:"Perimeter = 4 × 7 = 28 cm.", level:"medium" },
    { q:"What is 15% of 200?", options:["25","30","35","40"], answer:1, explanation:"0.15 × 200 = 30.", level:"medium" },
    { q:"What is the LCM of 4 and 6?", options:["8","10","12","24"], answer:2, explanation:"The smallest number both 4 and 6 divide into evenly is 12.", level:"hard" },
    { q:"If a bag has 5 red, 3 blue, and 2 green marbles, what fraction are red?", options:["1/2","5/8","1/5","1/3"], answer:0, explanation:"5 out of 10 total = 5/10 = 1/2.", level:"hard" },
  ],
  science: [
    { q:"What gas do plants absorb during photosynthesis?", options:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"], answer:2, explanation:"Plants take in carbon dioxide and release oxygen.", level:"easy" },
    { q:"What force pulls objects toward Earth?", options:["Magnetism","Friction","Gravity","Inertia"], answer:2, explanation:"Gravity pulls objects toward the center of Earth.", level:"easy" },
    { q:"What is the largest organ in the human body?", options:["Liver","Brain","Lungs","Skin"], answer:3, explanation:"The skin is the largest organ, covering the whole body.", level:"easy" },
    { q:"What do you call animals that eat only plants?", options:["Carnivores","Omnivores","Herbivores","Scavengers"], answer:2, explanation:"Herbivores eat only plant material.", level:"easy" },
    { q:"What is the chemical symbol for water?", options:["WA","HO","H₂O","W₂O"], answer:2, explanation:"Water = 2 hydrogen + 1 oxygen: H₂O.", level:"easy" },
    { q:"Which planet is closest to the Sun?", options:["Venus","Earth","Mars","Mercury"], answer:3, explanation:"Mercury is the closest planet to the Sun.", level:"medium" },
    { q:"What is the powerhouse of the cell?", options:["Nucleus","Ribosome","Mitochondria","Cell wall"], answer:2, explanation:"Mitochondria produce energy (ATP) for the cell.", level:"medium" },
    { q:"Which state of matter has a definite volume but no definite shape?", options:["Solid","Liquid","Gas","Plasma"], answer:1, explanation:"Liquids keep their volume but take the shape of their container.", level:"medium" },
    { q:"Which part of a plant carries out photosynthesis?", options:["Roots","Stem","Leaves","Flowers"], answer:2, explanation:"Leaves contain chlorophyll and absorb sunlight.", level:"medium" },
    { q:"How many bones are in the adult human body?", options:["106","206","306","406"], answer:1, explanation:"An adult human has 206 bones.", level:"medium" },
    { q:"What type of rock forms from cooled lava?", options:["Sedimentary","Metamorphic","Igneous","Limestone"], answer:2, explanation:"Igneous rocks form when magma or lava cools.", level:"medium" },
    { q:"What is the most abundant gas in Earth's atmosphere?", options:["Oxygen","Carbon dioxide","Argon","Nitrogen"], answer:3, explanation:"Nitrogen makes up about 78% of Earth's atmosphere.", level:"medium" },
    { q:"Which simple machine is a ramp?", options:["Lever","Pulley","Inclined plane","Wedge"], answer:2, explanation:"A ramp is an inclined plane.", level:"hard" },
    { q:"What do we call the change from a liquid to a gas?", options:["Condensation","Freezing","Evaporation","Melting"], answer:2, explanation:"Evaporation is liquid turning into gas (water vapor).", level:"hard" },
  ],
  history: [
    { q:"Who was the first President of the United States?", options:["John Adams","Thomas Jefferson","George Washington","Benjamin Franklin"], answer:2, explanation:"George Washington was the 1st U.S. President (1789–1797).", level:"easy" },
    { q:"In what year did the U.S. declare independence?", options:["1765","1776","1783","1800"], answer:1, explanation:"The Declaration of Independence was signed July 4, 1776.", level:"easy" },
    { q:"What ship did the Pilgrims sail to America in 1620?", options:["Santa Maria","Mayflower","Endeavour","Pinta"], answer:1, explanation:"The Pilgrims sailed aboard the Mayflower.", level:"easy" },
    { q:"Which country gifted the Statue of Liberty to the U.S.?", options:["England","Spain","France","Italy"], answer:2, explanation:"France gave the Statue of Liberty to the U.S. in 1886.", level:"easy" },
    { q:"Who invented the telephone?", options:["Thomas Edison","Nikola Tesla","Alexander Graham Bell","Marconi"], answer:2, explanation:"Alexander Graham Bell invented the telephone in 1876.", level:"easy" },
    { q:"Which ancient wonder was located in Egypt?", options:["Colosseum","Hanging Gardens","Great Pyramid of Giza","Parthenon"], answer:2, explanation:"The Great Pyramid of Giza is the only ancient wonder still standing.", level:"medium" },
    { q:"Who was the primary author of the Declaration of Independence?", options:["George Washington","Benjamin Franklin","John Adams","Thomas Jefferson"], answer:3, explanation:"Thomas Jefferson wrote the first draft.", level:"medium" },
    { q:"Who was the 16th President of the United States?", options:["Ulysses Grant","Abraham Lincoln","Andrew Jackson","James Polk"], answer:1, explanation:"Abraham Lincoln led the nation through the Civil War.", level:"medium" },
    { q:"What ancient civilization built the pyramids?", options:["Romans","Greeks","Egyptians","Mesopotamians"], answer:2, explanation:"The ancient Egyptians built the pyramids as royal tombs.", level:"medium" },
    { q:"What was the first American space program to land on the Moon?", options:["Gemini","Mercury","Apollo","Voyager"], answer:2, explanation:"NASA's Apollo program first landed on the Moon in 1969.", level:"medium" },
    { q:"What war was fought between the North and South of the United States?", options:["Revolutionary War","World War I","Civil War","War of 1812"], answer:2, explanation:"The Civil War (1861–1865) was between Northern and Southern states.", level:"medium" },
    { q:"Who was the first person to walk on the Moon?", options:["Buzz Aldrin","Yuri Gagarin","Neil Armstrong","Michael Collins"], answer:2, explanation:"Neil Armstrong walked on the Moon in 1969.", level:"medium" },
    { q:"What document freed enslaved people in Confederate states?", options:["Bill of Rights","Constitution","Emancipation Proclamation","Gettysburg Address"], answer:2, explanation:"Lincoln issued the Emancipation Proclamation in 1863.", level:"hard" },
    { q:"Which document begins with 'We the People'?", options:["Declaration of Independence","Bill of Rights","U.S. Constitution","Articles of Confederation"], answer:2, explanation:"The U.S. Constitution opens with 'We the People'.", level:"hard" },
  ],
  geography: [
    { q:"What is the capital of the United States?", options:["New York City","Los Angeles","Chicago","Washington D.C."], answer:3, explanation:"Washington D.C. is the U.S. capital.", level:"easy" },
    { q:"What is the largest ocean in the world?", options:["Atlantic","Indian","Arctic","Pacific"], answer:3, explanation:"The Pacific Ocean is the world's largest and deepest ocean.", level:"easy" },
    { q:"What is the capital of France?", options:["Rome","Madrid","Berlin","Paris"], answer:3, explanation:"Paris is the capital of France.", level:"easy" },
    { q:"How many continents are there on Earth?", options:["5","6","7","8"], answer:2, explanation:"There are 7 continents.", level:"easy" },
    { q:"Which U.S. state is the largest by area?", options:["Texas","California","Montana","Alaska"], answer:3, explanation:"Alaska is the largest U.S. state.", level:"easy" },
    { q:"What is the longest river in the world?", options:["Amazon","Mississippi","Nile","Yangtze"], answer:2, explanation:"The Nile River in Africa is the longest.", level:"medium" },
    { q:"Which continent is the largest by area?", options:["Africa","North America","Asia","Europe"], answer:2, explanation:"Asia covers about 30% of Earth's land.", level:"medium" },
    { q:"What is the tallest mountain in the world?", options:["K2","Kilimanjaro","Mont Blanc","Mount Everest"], answer:3, explanation:"Mount Everest is 8,849 m above sea level.", level:"medium" },
    { q:"What river runs through Egypt?", options:["Amazon","Congo","Ganges","Nile"], answer:3, explanation:"The Nile flows through Egypt into the Mediterranean Sea.", level:"medium" },
    { q:"Which ocean is on the east coast of the United States?", options:["Pacific","Indian","Atlantic","Arctic"], answer:2, explanation:"The Atlantic Ocean borders the eastern U.S.", level:"medium" },
    { q:"Which continent is the Sahara Desert on?", options:["Asia","Africa","Australia","South America"], answer:1, explanation:"The Sahara is in northern Africa.", level:"medium" },
    { q:"Which country is the largest by total area?", options:["USA","China","Canada","Russia"], answer:3, explanation:"Russia is the largest country by land area.", level:"medium" },
    { q:"What is the smallest country in the world?", options:["Monaco","San Marino","Vatican City","Liechtenstein"], answer:2, explanation:"Vatican City, inside Rome, is the world's smallest country.", level:"hard" },
    { q:"Which is the world's largest desert?", options:["Gobi","Sahara","Arabian","Antarctic"], answer:3, explanation:"Antarctica is the largest desert — cold deserts count!", level:"hard" },
  ],
  english: [
    { q:"What is a noun?", options:["An action word","A describing word","A person, place, or thing","A connecting word"], answer:2, explanation:"A noun names a person, place, thing, or idea.", level:"easy" },
    { q:"What is a synonym for 'happy'?", options:["Sad","Angry","Joyful","Tired"], answer:2, explanation:"Joyful means the same as happy.", level:"easy" },
    { q:"What is the plural of 'mouse'?", options:["Mouses","Mices","Mice","Mouse"], answer:2, explanation:"The irregular plural of mouse is mice.", level:"easy" },
    { q:"Which of these is a compound word?", options:["Running","Butterfly","Beautiful","Quickly"], answer:1, explanation:"Butterfly = butter + fly.", level:"easy" },
    { q:"Which sentence is in the past tense?", options:["She runs to school.","She will run to school.","She ran to school.","She is running to school."], answer:2, explanation:"'Ran' is the past tense of 'run'.", level:"easy" },
    { q:"Which sentence uses correct punctuation?", options:["Where are you going","Where are you going?","where are you going?","Where are you going"], answer:1, explanation:"Questions end with ? and start with a capital letter.", level:"medium" },
    { q:"What do you call the main character in a story?", options:["Narrator","Antagonist","Protagonist","Author"], answer:2, explanation:"The protagonist is the central character.", level:"medium" },
    { q:"Which word is an adjective in: 'The red balloon floated away.'?", options:["balloon","floated","red","away"], answer:2, explanation:"Red describes the noun 'balloon'.", level:"medium" },
    { q:"What punctuation mark shows possession?", options:["Comma","Apostrophe","Colon","Semicolon"], answer:1, explanation:"An apostrophe + s shows possession, e.g., Sara's book.", level:"medium" },
    { q:"What is an antonym for 'ancient'?", options:["Old","Historic","Modern","Ruined"], answer:2, explanation:"Modern is the opposite of ancient.", level:"medium" },
    { q:"Which word is a verb in: 'The dog barked loudly.'?", options:["dog","barked","loudly","the"], answer:1, explanation:"'Barked' is the action word (verb).", level:"medium" },
    { q:"What type of sentence makes a statement?", options:["Question","Command","Exclamation","Declarative"], answer:3, explanation:"A declarative sentence makes a statement ending with a period.", level:"medium" },
    { q:"'The wind sang through the trees' is an example of what?", options:["Simile","Metaphor","Personification","Hyperbole"], answer:2, explanation:"Giving human traits to a non-human thing is personification.", level:"hard" },
    { q:"What is the root word in 'unhappiness'?", options:["Un","Happy","Ness","Unhappy"], answer:1, explanation:"The root is happy; un- is a prefix and -ness is a suffix.", level:"hard" },
  ],
  animals: [
    { q:"What is the fastest land animal?", options:["Lion","Horse","Cheetah","Leopard"], answer:2, explanation:"Cheetahs can run up to 70 mph.", level:"easy" },
    { q:"How many legs does a spider have?", options:["6","8","10","12"], answer:1, explanation:"Spiders are arachnids and have 8 legs.", level:"easy" },
    { q:"Which bird cannot fly?", options:["Eagle","Penguin","Parrot","Hawk"], answer:1, explanation:"Penguins cannot fly but are excellent swimmers.", level:"easy" },
    { q:"What is a baby kangaroo called?", options:["Calf","Kitten","Joey","Pup"], answer:2, explanation:"A baby kangaroo is called a joey.", level:"easy" },
    { q:"Which insect makes honey?", options:["Ant","Wasp","Honeybee","Butterfly"], answer:2, explanation:"Honeybees collect nectar and make honey.", level:"easy" },
    { q:"What do you call a group of wolves?", options:["Pack","Herd","Flock","Pride"], answer:0, explanation:"A group of wolves is called a pack.", level:"medium" },
    { q:"Which animal is called the King of the Jungle?", options:["Tiger","Elephant","Gorilla","Lion"], answer:3, explanation:"The lion is called the King of the Jungle.", level:"medium" },
    { q:"What is the largest animal on Earth?", options:["African elephant","Giraffe","Blue whale","Great white shark"], answer:2, explanation:"The blue whale is the largest animal ever known.", level:"medium" },
    { q:"What do caterpillars turn into?", options:["Moths or butterflies","Beetles","Bees","Dragonflies"], answer:0, explanation:"Caterpillars become moths or butterflies through metamorphosis.", level:"medium" },
    { q:"How do fish breathe underwater?", options:["Lungs","Skin","Gills","Fins"], answer:2, explanation:"Fish use gills to extract oxygen from water.", level:"medium" },
    { q:"Which animal has the longest neck?", options:["Camel","Ostrich","Giraffe","Flamingo"], answer:2, explanation:"The giraffe has the longest neck of any living animal.", level:"medium" },
    { q:"What is a group of lions called?", options:["Pack","Pod","Herd","Pride"], answer:3, explanation:"A group of lions is called a pride.", level:"medium" },
    { q:"What is the largest species of shark?", options:["Great white","Hammerhead","Whale shark","Tiger shark"], answer:2, explanation:"The whale shark is the largest and is harmless to humans.", level:"hard" },
    { q:"Which animal is known for changing its color to blend in?", options:["Frog","Chameleon","Snake","Turtle"], answer:1, explanation:"Chameleons change color to camouflage and communicate.", level:"hard" },
  ],
  space: [
    { q:"How many planets are in our solar system?", options:["7","8","9","10"], answer:1, explanation:"There are 8 planets (Pluto was reclassified in 2006).", level:"easy" },
    { q:"What is the closest star to Earth?", options:["Alpha Centauri","Sirius","The Sun","Betelgeuse"], answer:2, explanation:"The Sun is Earth's closest star.", level:"easy" },
    { q:"Which planet is known as the Red Planet?", options:["Jupiter","Venus","Saturn","Mars"], answer:3, explanation:"Mars looks red because of iron oxide on its surface.", level:"easy" },
    { q:"What is the name of Earth's natural satellite?", options:["Titan","Europa","The Moon","Ganymede"], answer:2, explanation:"The Moon is Earth's only natural satellite.", level:"easy" },
    { q:"What galaxy do we live in?", options:["Andromeda","Whirlpool","Sombrero","Milky Way"], answer:3, explanation:"Our solar system is in the Milky Way galaxy.", level:"easy" },
    { q:"Which is the largest planet in our solar system?", options:["Saturn","Neptune","Jupiter","Uranus"], answer:2, explanation:"Jupiter is so large all other planets could fit inside it.", level:"medium" },
    { q:"What is a large ball of ice and dust with a glowing tail?", options:["Asteroid","Meteor","Comet","Satellite"], answer:2, explanation:"A comet develops a bright tail near the Sun.", level:"medium" },
    { q:"How long does it take Earth to orbit the Sun?", options:["24 hours","1 month","6 months","1 year"], answer:3, explanation:"Earth takes 365.25 days (1 year) to orbit the Sun.", level:"medium" },
    { q:"Which planet is famous for its ring system?", options:["Mars","Jupiter","Saturn","Neptune"], answer:2, explanation:"Saturn has the most visible ring system.", level:"medium" },
    { q:"What is a light-year a measurement of?", options:["Time","Speed","Distance","Weight"], answer:2, explanation:"A light-year is how far light travels in one year.", level:"medium" },
    { q:"What was the first artificial satellite launched into space?", options:["Apollo","Sputnik","Hubble","Voyager"], answer:1, explanation:"Sputnik 1 was launched by the Soviet Union in 1957.", level:"medium" },
    { q:"What force keeps planets orbiting the Sun?", options:["Magnetism","Friction","Gravity","Electricity"], answer:2, explanation:"Gravity keeps planets in orbit around the Sun.", level:"medium" },
    { q:"Which planet has the most extreme winds in the solar system?", options:["Venus","Mars","Neptune","Mercury"], answer:2, explanation:"Neptune's winds can exceed 1,000 mph.", level:"hard" },
    { q:"What do astronauts use to breathe in space?", options:["Regular air","Oxygen tanks","Helium","Carbon dioxide"], answer:1, explanation:"Astronauts use oxygen supplies since space has no breathable air.", level:"hard" },
  ],
  health: [
    { q:"How many chambers does the human heart have?", options:["2","3","4","5"], answer:2, explanation:"The heart has 4 chambers: 2 atria and 2 ventricles.", level:"easy" },
    { q:"Which nutrient is the body's main source of quick energy?", options:["Vitamins","Protein","Carbohydrates","Minerals"], answer:2, explanation:"Carbohydrates are the body's quickest energy source.", level:"easy" },
    { q:"What liquid makes up about 60% of the human body?", options:["Blood","Saliva","Water","Plasma"], answer:2, explanation:"Water makes up approximately 60% of the human body.", level:"easy" },
    { q:"Which food group do bread, rice, and pasta belong to?", options:["Dairy","Proteins","Fruits","Grains"], answer:3, explanation:"Bread, rice, and pasta are grains.", level:"easy" },
    { q:"Which organ pumps blood throughout the body?", options:["Lungs","Brain","Heart","Liver"], answer:2, explanation:"The heart pumps blood through the circulatory system.", level:"easy" },
    { q:"Which vitamin does your body produce mainly from sunlight?", options:["Vitamin A","Vitamin C","Vitamin D","Vitamin K"], answer:2, explanation:"Sunlight helps skin produce Vitamin D.", level:"medium" },
    { q:"What tube connects your mouth to your stomach?", options:["Trachea","Esophagus","Intestine","Bronchus"], answer:1, explanation:"The esophagus carries food from the mouth to the stomach.", level:"medium" },
    { q:"How many teeth do most adult humans have?", options:["28","30","32","34"], answer:2, explanation:"Most adults have 32 teeth including wisdom teeth.", level:"medium" },
    { q:"Which organ filters waste from your blood?", options:["Liver","Kidneys","Lungs","Spleen"], answer:1, explanation:"The kidneys filter blood and make urine.", level:"medium" },
    { q:"How many hours of sleep do kids ages 6–12 need each night?", options:["5–6","6–7","9–11","12–14"], answer:2, explanation:"Kids aged 6–12 need 9–11 hours of sleep.", level:"medium" },
    { q:"What is the job of white blood cells?", options:["Carry oxygen","Fight infection","Clot blood","Digest food"], answer:1, explanation:"White blood cells fight infections.", level:"medium" },
    { q:"What do we call the tiny units that make up all living things?", options:["Atoms","Molecules","Cells","Organs"], answer:2, explanation:"Cells are the basic building blocks of life.", level:"medium" },
    { q:"Which part of the brain controls balance and coordination?", options:["Cerebrum","Cerebellum","Brainstem","Hypothalamus"], answer:1, explanation:"The cerebellum handles balance and coordination.", level:"hard" },
    { q:"What is the main function of red blood cells?", options:["Fight infection","Carry oxygen","Digest food","Produce hormones"], answer:1, explanation:"Red blood cells carry oxygen from the lungs to the body.", level:"hard" },
  ],
};

const CATEGORIES = [
  { id:'math',      label:'Math',       icon:'icons/math.png' },
  { id:'science',   label:'Science',    icon:'icons/science.png' },
  { id:'history',   label:'History',    icon:'icons/history.png' },
  { id:'geography', label:'Geography',  icon:'icons/geography.png' },
  { id:'english',   label:'English',    icon:'icons/english.png' },
  { id:'animals',   label:'Animals',    icon:'icons/animals.png' },
  { id:'space',     label:'Space',      icon:'icons/space.png' },
  { id:'health',    label:'Health',     icon:'icons/health.png' },
];

const DIFFICULTY_CONFIG = {
  easy:   { total: 5,  levels: ['easy'],                   label: 'Easy',   emoji: '🟢' },
  medium: { total: 10, levels: ['easy', 'medium'],         label: 'Medium', emoji: '🟡' },
  hard:   { total: 14, levels: ['easy', 'medium', 'hard'], label: 'Hard',   emoji: '🔴' },
};

// ── State ─────────────────────────────────────────────────────
let selectedDifficulty  = null;
let selectedCategories  = [];
let questions           = [];
let currentQ            = 0;
let score               = 0;
let answered            = false;

// ── Screen navigation ─────────────────────────────────────────
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// ── Difficulty ────────────────────────────────────────────────
function selectDifficulty(diff, btn) {
  selectedDifficulty = diff;
  document.querySelectorAll('.diff-card').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('diff-next-btn').disabled = false;
}

// ── Categories ────────────────────────────────────────────────
function buildCategoryGrid() {
  const grid = document.getElementById('category-grid');
  CATEGORIES.forEach(cat => {
    const count = QUESTION_BANK[cat.id]?.length || 0;
    const btn   = document.createElement('div');
    btn.className = 'category-btn';
    btn.id        = 'cat-' + cat.id;
    btn.innerHTML = `
      <div class="cat-icon"><img src="${cat.icon}" alt="${cat.label}"></div>
      <div class="cat-name">${cat.label}</div>
      <div class="cat-count">${count} questions</div>`;
    btn.onclick = () => toggleCategory(cat.id, btn);
    grid.appendChild(btn);
  });
}

function toggleCategory(id, btn) {
  const idx = selectedCategories.indexOf(id);
  if (idx >= 0) {
    selectedCategories.splice(idx, 1);
    btn.classList.remove('selected');
  } else {
    if (selectedCategories.length >= 3) return;
    selectedCategories.push(id);
    btn.classList.add('selected');
  }
  document.getElementById('cat-next-btn').disabled = selectedCategories.length === 0;
}

// ── Game ──────────────────────────────────────────────────────
function startGame() {
  const config  = DIFFICULTY_CONFIG[selectedDifficulty];
  const allowed = config.levels;

  let pool = [];
  selectedCategories.forEach(catId => {
    const filtered = QUESTION_BANK[catId].filter(q => allowed.includes(q.level));
    const perCat   = Math.ceil(config.total / selectedCategories.length) + 2;
    const picked   = shuffle(filtered).slice(0, perCat);
    pool = pool.concat(picked.map(q => ({ ...q, categoryLabel: CATEGORIES.find(c => c.id === catId).label })));
  });

  questions = shuffle(pool).slice(0, config.total);
  currentQ  = 0;
  score     = 0;
  answered  = false;

  goTo('quiz-screen');
  renderQuestion();
}

function renderQuestion() {
  const q     = questions[currentQ];
  const total = questions.length;
  const cfg   = DIFFICULTY_CONFIG[selectedDifficulty];

  document.getElementById('question-num').textContent  = `Question ${currentQ + 1} of ${total}`;
  document.getElementById('question-text').textContent = q.q;
  document.getElementById('live-score').textContent    = score;
  document.getElementById('progress-fill').style.width = `${(currentQ / total) * 100}%`;
  document.getElementById('current-category-pill').textContent = `${q.categoryLabel} · ${cfg.emoji} ${cfg.label}`;

  const grid = document.getElementById('answers-grid');
  grid.innerHTML = '';
  ['A','B','C','D'].forEach((letter, i) => {
    const btn   = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `<span class="answer-letter">${letter}</span>${q.options[i]}`;
    btn.onclick   = () => selectAnswer(i);
    grid.appendChild(btn);
  });

  document.getElementById('feedback-bar').style.display = 'none';
  document.getElementById('next-btn').style.display     = 'none';
  answered = false;
}

function selectAnswer(idx) {
  if (answered) return;
  answered = true;

  const q    = questions[currentQ];
  const btns = document.querySelectorAll('.answer-btn');
  btns.forEach(b => b.disabled = true);

  const isCorrect = idx === q.answer;
  if (isCorrect) score++;
  btns[idx].classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) btns[q.answer].classList.add('correct');

  const fb         = document.getElementById('feedback-bar');
  fb.style.display = 'block';
  fb.className     = 'feedback-bar ' + (isCorrect ? 'correct' : 'wrong');
  fb.textContent   = (isCorrect ? '✓ Correct! ' : '✗ Not quite. ') + q.explanation;

  document.getElementById('live-score').textContent = score;
  document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= questions.length) showResults();
  else renderQuestion();
}

// ── Results ───────────────────────────────────────────────────
function showResults() {
  goTo('result-screen');
  const total = questions.length;
  const pct   = Math.round((score / total) * 100);

  document.getElementById('final-score-num').textContent = `${score}/${total}`;
  document.getElementById('stat-pct').textContent        = pct + '%';
  document.getElementById('stat-correct').textContent    = score;
  document.getElementById('stat-wrong').textContent      = total - score;

  let icon, title, sub;
  if (pct >= 90)      { icon='🏆'; title='YES! You ARE smarter!';  sub='Outstanding! You crushed 5th grade!'; }
  else if (pct >= 70) { icon='🎓'; title='Pretty smart!';           sub='You passed 5th grade with flying colors.'; }
  else if (pct >= 50) { icon='📚'; title='Ehh... maybe.';           sub='You might want to crack open a textbook.'; }
  else                { icon='😬'; title='Oof! Not smarter yet.';   sub='A 5th grader would like a word with you.'; }

  document.getElementById('verdict-icon').textContent  = icon;
  document.getElementById('verdict-title').textContent = title;
  document.getElementById('verdict-sub').textContent   = sub;
}

// ── Quit modal ────────────────────────────────────────────────
function confirmBack() {
  document.getElementById('modal-overlay').style.display = 'flex';
}
function closeModal() {
  document.getElementById('modal-overlay').style.display = 'none';
}
function quitGame() {
  closeModal();
  fullReset();
}

// ── Full reset — wipes all state and UI back to day-one defaults ──
function fullReset() {
  // Clear state
  selectedCategories = [];
  selectedDifficulty = null;
  questions  = [];
  currentQ   = 0;
  score      = 0;
  answered   = false;

  // Clear difficulty selection
  document.querySelectorAll('.diff-card').forEach(b => b.classList.remove('selected'));
  document.getElementById('diff-next-btn').disabled = true;

  // Clear category selection
  document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('cat-next-btn').disabled = true;

  // Clear quiz UI so nothing stale shows if they play again
  document.getElementById('progress-fill').style.width = '0%';
  document.getElementById('live-score').textContent    = '0';
  document.getElementById('answers-grid').innerHTML    = '';
  document.getElementById('feedback-bar').style.display = 'none';
  document.getElementById('next-btn').style.display     = 'none';

  goTo('home-screen');
}

// Close modal on backdrop click
document.getElementById('modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ── Helpers ───────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Init ──────────────────────────────────────────────────────
buildCategoryGrid();