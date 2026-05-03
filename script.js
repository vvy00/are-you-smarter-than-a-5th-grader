const QUESTION_BANK = {
  math: [
    { q:"What is 12 × 12?", options:["124","144","132","148"], answer:1, explanation:"12 × 12 = 144." },
    { q:"What is 3/4 written as a decimal?", options:["0.34","0.43","0.75","0.25"], answer:2, explanation:"3 ÷ 4 = 0.75." },
    { q:"What is the area of a rectangle 8 cm long and 5 cm wide?", options:["26 cm²","13 cm²","40 cm²","35 cm²"], answer:2, explanation:"Area = length × width = 8 × 5 = 40 cm²." },
    { q:"What is 25% of 80?", options:["15","20","25","30"], answer:1, explanation:"25% = 1/4, and 80 ÷ 4 = 20." },
    { q:"Which of these numbers is prime?", options:["9","15","17","21"], answer:2, explanation:"17 is only divisible by 1 and itself." },
    { q:"What is 1,000 ÷ 25?", options:["30","40","45","50"], answer:1, explanation:"1,000 ÷ 25 = 40." },
    { q:"What is the value of 2⁵?", options:["10","16","32","25"], answer:2, explanation:"2⁵ = 2×2×2×2×2 = 32." },
    { q:"A pizza has 8 slices. You eat 3. What fraction is left?", options:["3/8","5/8","1/2","2/3"], answer:1, explanation:"8 − 3 = 5 slices left, so 5/8." },
    { q:"Round 4,786 to the nearest hundred.", options:["4,700","4,790","4,800","5,000"], answer:2, explanation:"The hundreds digit rounds up because 86 > 50, giving 4,800." },
    { q:"What is the perimeter of a square with sides of 7 cm?", options:["14 cm","21 cm","28 cm","49 cm"], answer:2, explanation:"Perimeter = 4 × 7 = 28 cm." },
    { q:"What is 15% of 200?", options:["25","30","35","40"], answer:1, explanation:"15% of 200 = 0.15 × 200 = 30." },
    { q:"How many minutes are in 3.5 hours?", options:["180","200","210","215"], answer:2, explanation:"3.5 × 60 = 210 minutes." },
    { q:"What is the least common multiple (LCM) of 4 and 6?", options:["8","10","12","24"], answer:2, explanation:"The smallest number both 4 and 6 divide into evenly is 12." },
    { q:"If a bag has 5 red, 3 blue, and 2 green marbles, what fraction are red?", options:["1/2","5/8","1/5","1/3"], answer:0, explanation:"5 out of 10 total marbles = 5/10 = 1/2." },
  ],
  science: [
    { q:"What gas do plants absorb to make food during photosynthesis?", options:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"], answer:2, explanation:"Plants take in carbon dioxide and release oxygen during photosynthesis." },
    { q:"Which planet is closest to the Sun?", options:["Venus","Earth","Mars","Mercury"], answer:3, explanation:"Mercury is the closest planet to the Sun." },
    { q:"What is the powerhouse of the cell?", options:["Nucleus","Ribosome","Mitochondria","Cell wall"], answer:2, explanation:"Mitochondria produce energy (ATP) for the cell." },
    { q:"Which state of matter has a definite volume but no definite shape?", options:["Solid","Liquid","Gas","Plasma"], answer:1, explanation:"Liquids have a fixed volume but take the shape of their container." },
    { q:"What force pulls objects toward Earth?", options:["Magnetism","Friction","Gravity","Inertia"], answer:2, explanation:"Gravity pulls objects toward the center of Earth." },
    { q:"What is the largest organ in the human body?", options:["Liver","Brain","Lungs","Skin"], answer:3, explanation:"The skin is the largest organ, covering the whole body." },
    { q:"What do you call animals that eat only plants?", options:["Carnivores","Omnivores","Herbivores","Scavengers"], answer:2, explanation:"Herbivores eat only plant material." },
    { q:"What is the chemical symbol for water?", options:["WA","HO","H₂O","W₂O"], answer:2, explanation:"Water is made of 2 hydrogen atoms and 1 oxygen atom: H₂O." },
    { q:"Which part of a plant carries out photosynthesis?", options:["Roots","Stem","Leaves","Flowers"], answer:2, explanation:"Leaves contain chlorophyll and absorb sunlight for photosynthesis." },
    { q:"How many bones are in the adult human body?", options:["106","206","306","406"], answer:1, explanation:"An adult human has 206 bones." },
    { q:"What type of rock forms from cooled lava?", options:["Sedimentary","Metamorphic","Igneous","Limestone"], answer:2, explanation:"Igneous rocks form when magma or lava cools and solidifies." },
    { q:"What is the most abundant gas in Earth's atmosphere?", options:["Oxygen","Carbon dioxide","Argon","Nitrogen"], answer:3, explanation:"Nitrogen makes up about 78% of Earth's atmosphere." },
    { q:"Which simple machine is a ramp?", options:["Lever","Pulley","Inclined plane","Wedge"], answer:2, explanation:"A ramp is an inclined plane — it makes moving objects easier." },
    { q:"What do we call the change from a liquid to a gas?", options:["Condensation","Freezing","Evaporation","Melting"], answer:2, explanation:"Evaporation is when liquid turns into a gas (water vapor)." },
  ],
  history: [
    { q:"Who was the first President of the United States?", options:["John Adams","Thomas Jefferson","George Washington","Benjamin Franklin"], answer:2, explanation:"George Washington was the 1st U.S. President (1789–1797)." },
    { q:"In what year did the U.S. declare independence?", options:["1765","1776","1783","1800"], answer:1, explanation:"The Declaration of Independence was signed on July 4, 1776." },
    { q:"Which ancient wonder was located in Egypt?", options:["Colosseum","Hanging Gardens","Great Pyramid of Giza","Parthenon"], answer:2, explanation:"The Great Pyramid of Giza is the only ancient wonder still standing today." },
    { q:"Who was the primary author of the Declaration of Independence?", options:["George Washington","Benjamin Franklin","John Adams","Thomas Jefferson"], answer:3, explanation:"Thomas Jefferson wrote the first draft of the Declaration." },
    { q:"What ship did the Pilgrims sail to America in 1620?", options:["Santa Maria","Mayflower","Endeavour","Pinta"], answer:1, explanation:"The Pilgrims sailed aboard the Mayflower in 1620." },
    { q:"Which country gifted the Statue of Liberty to the United States?", options:["England","Spain","France","Italy"], answer:2, explanation:"France gave the Statue of Liberty to the U.S. in 1886." },
    { q:"Who was the 16th President of the United States?", options:["Ulysses Grant","Abraham Lincoln","Andrew Jackson","James Polk"], answer:1, explanation:"Abraham Lincoln was the 16th president and led the nation through the Civil War." },
    { q:"What ancient civilization built the pyramids?", options:["Romans","Greeks","Egyptians","Mesopotamians"], answer:2, explanation:"The ancient Egyptians built the famous pyramids as royal tombs." },
    { q:"What document freed enslaved people in Confederate states during the Civil War?", options:["Bill of Rights","Constitution","Emancipation Proclamation","Gettysburg Address"], answer:2, explanation:"President Lincoln issued the Emancipation Proclamation in 1863." },
    { q:"What was the name of the first American space program to land on the Moon?", options:["Gemini","Mercury","Apollo","Voyager"], answer:2, explanation:"NASA's Apollo program landed astronauts on the Moon, first in 1969." },
    { q:"Who invented the telephone?", options:["Thomas Edison","Nikola Tesla","Alexander Graham Bell","Guglielmo Marconi"], answer:2, explanation:"Alexander Graham Bell is credited with inventing the telephone in 1876." },
    { q:"What war was fought between the North and South regions of the United States?", options:["Revolutionary War","World War I","Civil War","War of 1812"], answer:2, explanation:"The Civil War (1861–1865) was fought between the Northern and Southern states." },
    { q:"Who was the first person to walk on the Moon?", options:["Buzz Aldrin","Yuri Gagarin","Neil Armstrong","Michael Collins"], answer:2, explanation:"Neil Armstrong became the first person to walk on the Moon in 1969." },
    { q:"Which document begins with the words 'We the People'?", options:["Declaration of Independence","Bill of Rights","U.S. Constitution","Articles of Confederation"], answer:2, explanation:"The U.S. Constitution starts with 'We the People' in its preamble." },
  ],
  geography: [
    { q:"What is the capital of the United States?", options:["New York City","Los Angeles","Chicago","Washington D.C."], answer:3, explanation:"Washington D.C. is the capital of the United States." },
    { q:"What is the longest river in the world?", options:["Amazon","Mississippi","Nile","Yangtze"], answer:2, explanation:"The Nile River in Africa is the longest river in the world." },
    { q:"Which continent is the largest by area?", options:["Africa","North America","Asia","Europe"], answer:2, explanation:"Asia is the largest continent, covering about 30% of Earth's land." },
    { q:"What is the largest ocean in the world?", options:["Atlantic","Indian","Arctic","Pacific"], answer:3, explanation:"The Pacific Ocean is the world's largest and deepest ocean." },
    { q:"What is the capital of France?", options:["Rome","Madrid","Berlin","Paris"], answer:3, explanation:"Paris is the capital and largest city of France." },
    { q:"How many continents are there on Earth?", options:["5","6","7","8"], answer:2, explanation:"There are 7 continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America." },
    { q:"Which U.S. state is the largest by area?", options:["Texas","California","Montana","Alaska"], answer:3, explanation:"Alaska is the largest U.S. state, more than twice the size of Texas." },
    { q:"What is the tallest mountain in the world?", options:["K2","Kilimanjaro","Mont Blanc","Mount Everest"], answer:3, explanation:"Mount Everest is the world's highest peak at 8,849 m above sea level." },
    { q:"What is the smallest country in the world?", options:["Monaco","San Marino","Vatican City","Liechtenstein"], answer:2, explanation:"Vatican City, inside Rome, is the world's smallest country." },
    { q:"Which desert is the largest in the world?", options:["Gobi","Sahara","Arabian","Antarctic"], answer:3, explanation:"Antarctica is the world's largest desert — cold deserts count too!" },
    { q:"What river runs through Egypt?", options:["Amazon","Congo","Ganges","Nile"], answer:3, explanation:"The Nile River flows through Egypt and empties into the Mediterranean Sea." },
    { q:"Which country is the largest by total area?", options:["USA","China","Canada","Russia"], answer:3, explanation:"Russia is the largest country in the world by land area." },
    { q:"Which continent is the Sahara Desert located on?", options:["Asia","Africa","Australia","South America"], answer:1, explanation:"The Sahara Desert is located in northern Africa and is the largest hot desert in the world." },
    { q:"Which ocean is on the east coast of the United States?", options:["Pacific","Indian","Atlantic","Arctic"], answer:2, explanation:"The Atlantic Ocean borders the eastern coast of the United States." },
  ],
  english: [
    { q:"What is a noun?", options:["An action word","A describing word","A person, place, or thing","A connecting word"], answer:2, explanation:"A noun names a person, place, thing, or idea." },
    { q:"Which sentence uses correct punctuation?", options:["Where are you going","Where are you going?","where are you going?","Where are you going"], answer:1, explanation:"Questions end with a question mark and begin with a capital letter." },
    { q:"What is a synonym for 'happy'?", options:["Sad","Angry","Joyful","Tired"], answer:2, explanation:"Joyful means the same as happy." },
    { q:"What do you call the main character in a story?", options:["Narrator","Antagonist","Protagonist","Author"], answer:2, explanation:"The protagonist is the central character of a story." },
    { q:"Which word is an adjective in: 'The red balloon floated away.'?", options:["balloon","floated","red","away"], answer:2, explanation:"Red is an adjective — it describes the noun 'balloon'." },
    { q:"What is the plural of 'mouse'?", options:["Mouses","Mices","Mice","Mouse"], answer:2, explanation:"The irregular plural of mouse is mice." },
    { q:"What punctuation mark shows possession?", options:["Comma","Apostrophe","Colon","Semicolon"], answer:1, explanation:"An apostrophe + s shows possession, e.g., Sara's book." },
    { q:"What is an antonym for 'ancient'?", options:["Old","Historic","Modern","Ruined"], answer:2, explanation:"Modern means new or current — the opposite of ancient." },
    { q:"Which of these is a compound word?", options:["Running","Butterfly","Beautiful","Quickly"], answer:1, explanation:"Butterfly is made of two words: butter + fly." },
    { q:"'The wind sang through the trees' is an example of what?", options:["Simile","Metaphor","Personification","Hyperbole"], answer:2, explanation:"Giving human traits (singing) to a non-human thing is personification." },
    { q:"What is the root word in 'unhappiness'?", options:["Un","Happy","Ness","Unhappy"], answer:1, explanation:"The root word is happy; un- is a prefix and -ness is a suffix." },
    { q:"Which sentence is written in the past tense?", options:["She runs to school.","She will run to school.","She ran to school.","She is running to school."], answer:2, explanation:"'Ran' is the past tense of 'run'." },
    { q:"Which word is a verb in the sentence: 'The dog barked loudly.'?", options:["dog","barked","loudly","the"], answer:1, explanation:"'Barked' is the verb because it shows the action in the sentence." },
    { q:"What type of sentence makes a statement?", options:["Question","Command","Exclamation","Declarative"], answer:3, explanation:"A declarative sentence makes a statement and ends with a period." },
  ],
  animals: [
    { q:"What is the fastest land animal?", options:["Lion","Horse","Cheetah","Leopard"], answer:2, explanation:"Cheetahs can run up to 70 mph, making them the fastest land animal." },
    { q:"How many legs does a spider have?", options:["6","8","10","12"], answer:1, explanation:"Spiders are arachnids and have 8 legs." },
    { q:"What do you call a group of wolves?", options:["Pack","Herd","Flock","Pride"], answer:0, explanation:"A group of wolves is called a pack." },
    { q:"Which animal is called the King of the Jungle?", options:["Tiger","Elephant","Gorilla","Lion"], answer:3, explanation:"The lion is traditionally called the King of the Jungle." },
    { q:"What is the largest animal on Earth?", options:["African elephant","Giraffe","Blue whale","Great white shark"], answer:2, explanation:"The blue whale is the largest animal ever known on Earth." },
    { q:"What do caterpillars turn into?", options:["Moths or butterflies","Beetles","Bees","Dragonflies"], answer:0, explanation:"Caterpillars go through metamorphosis to become moths or butterflies." },
    { q:"Which bird cannot fly?", options:["Eagle","Penguin","Parrot","Hawk"], answer:1, explanation:"Penguins cannot fly but are excellent swimmers." },
    { q:"What is a baby kangaroo called?", options:["Calf","Kitten","Joey","Pup"], answer:2, explanation:"A baby kangaroo is called a joey." },
    { q:"How do fish breathe underwater?", options:["Lungs","Skin","Gills","Fins"], answer:2, explanation:"Fish use gills to extract oxygen from water." },
    { q:"Which animal has the longest neck?", options:["Camel","Ostrich","Giraffe","Flamingo"], answer:2, explanation:"The giraffe has the longest neck of any living animal." },
    { q:"What is a group of lions called?", options:["Pack","Pod","Herd","Pride"], answer:3, explanation:"A group of lions is called a pride." },
    { q:"Which insect makes honey?", options:["Ant","Wasp","Honeybee","Butterfly"], answer:2, explanation:"Honeybees collect nectar from flowers and produce honey in their hives." },
    { q:"What is the largest species of shark?", options:["Great white shark","Hammerhead shark","Whale shark","Tiger shark"], answer:2, explanation:"The whale shark is the largest shark species and is harmless to humans." },
    { q:"Which animal is known for changing its color to blend in?", options:["Frog","Chameleon","Snake","Turtle"], answer:1, explanation:"Chameleons can change color to camouflage and communicate." },
  ],
  space: [
    { q:"How many planets are in our solar system?", options:["7","8","9","10"], answer:1, explanation:"There are 8 planets (Pluto was reclassified as a dwarf planet in 2006)." },
    { q:"What is the closest star to Earth?", options:["Alpha Centauri","Sirius","The Sun","Betelgeuse"], answer:2, explanation:"The Sun is Earth's closest star, about 93 million miles away." },
    { q:"Which planet is known as the Red Planet?", options:["Jupiter","Venus","Saturn","Mars"], answer:3, explanation:"Mars looks red because of iron oxide (rust) on its surface." },
    { q:"What is the name of Earth's natural satellite?", options:["Titan","Europa","The Moon","Ganymede"], answer:2, explanation:"The Moon is Earth's only natural satellite." },
    { q:"Which is the largest planet in our solar system?", options:["Saturn","Neptune","Jupiter","Uranus"], answer:2, explanation:"Jupiter is so large that all other planets could fit inside it." },
    { q:"What do you call a large ball of ice and dust with a glowing tail?", options:["Asteroid","Meteor","Comet","Satellite"], answer:2, explanation:"A comet is made of ice and dust and develops a bright tail near the Sun." },
    { q:"About how long does it take Earth to orbit the Sun?", options:["24 hours","1 month","6 months","1 year"], answer:3, explanation:"Earth takes 365.25 days (1 year) to complete one orbit around the Sun." },
    { q:"Which planet is famous for its large ring system?", options:["Mars","Jupiter","Saturn","Neptune"], answer:2, explanation:"Saturn has the most visible and spectacular ring system." },
    { q:"What is a light-year a measurement of?", options:["Time","Speed","Distance","Weight"], answer:2, explanation:"A light-year measures distance — how far light travels in one year." },
    { q:"What galaxy do we live in?", options:["Andromeda","Whirlpool","Sombrero","Milky Way"], answer:3, explanation:"Our solar system is located in the Milky Way galaxy." },
    { q:"What is the name of the first artificial satellite launched into space?", options:["Apollo","Sputnik","Hubble","Voyager"], answer:1, explanation:"Sputnik 1 was launched by the Soviet Union in 1957." },
    { q:"Which planet is known for having the most extreme winds in the solar system?", options:["Venus","Mars","Neptune","Mercury"], answer:2, explanation:"Neptune has the fastest winds in the solar system, reaching over 1,000 mph." },
    { q:"What is the name of the force that keeps planets orbiting the Sun?", options:["Magnetism","Friction","Gravity","Electricity"], answer:2, explanation:"Gravity is the force that keeps planets in orbit around the Sun." },
    { q:"What do astronauts use to breathe in space?", options:["Regular air","Oxygen tanks","Helium","Carbon dioxide"], answer:1, explanation:"Astronauts use oxygen supplies because space has no breathable air." },
  ],
  health: [
    { q:"How many chambers does the human heart have?", options:["2","3","4","5"], answer:2, explanation:"The heart has 4 chambers: 2 atria and 2 ventricles." },
    { q:"Which vitamin does your body produce mainly from sunlight?", options:["Vitamin A","Vitamin C","Vitamin D","Vitamin K"], answer:2, explanation:"Skin exposed to sunlight produces Vitamin D." },
    { q:"What tube connects your mouth to your stomach?", options:["Trachea","Esophagus","Intestine","Bronchus"], answer:1, explanation:"The esophagus is the tube that carries food from the mouth to the stomach." },
    { q:"How many teeth do most adult humans have?", options:["28","30","32","34"], answer:2, explanation:"Most adults have 32 teeth, including four wisdom teeth." },
    { q:"Which nutrient is the body's main source of quick energy?", options:["Vitamins","Protein","Carbohydrates","Minerals"], answer:2, explanation:"Carbohydrates are the body's preferred and quickest energy source." },
    { q:"Which organ filters waste from your blood?", options:["Liver","Kidneys","Lungs","Spleen"], answer:1, explanation:"The kidneys filter blood and produce urine to remove waste." },
    { q:"About how many hours of sleep do kids ages 6–12 need each night?", options:["5–6","6–7","9–11","12–14"], answer:2, explanation:"Children aged 6–12 need 9–11 hours of sleep per night for healthy growth." },
    { q:"What liquid makes up about 60% of the human body?", options:["Blood","Saliva","Water","Plasma"], answer:2, explanation:"Water makes up approximately 60% of the adult human body." },
    { q:"Which food group do bread, rice, and pasta belong to?", options:["Dairy","Proteins","Fruits","Grains"], answer:3, explanation:"Bread, rice, and pasta are all grains and provide carbohydrates." },
    { q:"What is the job of white blood cells?", options:["Carry oxygen","Fight infection","Clot blood","Digest food"], answer:1, explanation:"White blood cells are part of the immune system and fight off infections." },
    { q:"Which organ pumps blood throughout the body?", options:["Lungs","Brain","Heart","Liver"], answer:2, explanation:"The heart pumps blood through the circulatory system to deliver oxygen." },
    { q:"What do we call the tiny units that make up all living things?", options:["Atoms","Molecules","Cells","Organs"], answer:2, explanation:"Cells are the basic building blocks of all living organisms." },
    { q:"Which part of the brain controls balance and coordination?", options:["Cerebrum","Cerebellum","Brainstem","Hypothalamus"], answer:1, explanation:"The cerebellum is responsible for balance, posture, and coordination." },
    { q:"What is the main function of red blood cells?", options:["Fight infection","Carry oxygen","Digest food","Produce hormones"], answer:1, explanation:"Red blood cells carry oxygen from the lungs to the rest of the body." },
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

let selectedCategories = [];
let questions = [];
let currentQ = 0;
let score = 0;
let answered = false;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildCategoryGrid() {
  const grid = document.getElementById('category-grid');
  CATEGORIES.forEach(cat => {
    const count = QUESTION_BANK[cat.id]?.length || 0;
    const btn = document.createElement('div');
    btn.className = 'category-btn';
    btn.id = 'cat-' + cat.id;
    btn.innerHTML = `
        <div class="cat-icon">
            <img src="${cat.icon}" alt="${cat.label}">
        </div>
        <div class="cat-name">${cat.label}</div>
        <div class="cat-count">${count} questions</div>
        `;
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
  document.getElementById('start-btn').disabled = selectedCategories.length === 0;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startGame() {
  let pool = [];
  selectedCategories.forEach(cat => {
    const qs = shuffle(QUESTION_BANK[cat]).slice(0, 5).map(q => ({ ...q, categoryLabel: CATEGORIES.find(c => c.id === cat).label }));
    pool = pool.concat(qs);
  });
  questions = shuffle(pool).slice(0, 10);
  currentQ = 0; score = 0; answered = false;
  showScreen('quiz-screen');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQ];
  const total = questions.length;
  document.getElementById('question-num').textContent = `Question ${currentQ + 1} of ${total}`;
  document.getElementById('question-text').textContent = q.q;
  document.getElementById('current-category-pill').textContent = q.categoryLabel;
  document.getElementById('live-score').textContent = score;
  document.getElementById('progress-fill').style.width = `${(currentQ / total) * 100}%`;

  const grid = document.getElementById('answers-grid');
  grid.innerHTML = '';
  ['A','B','C','D'].forEach((letter, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `<span class="answer-letter">${letter}</span>${q.options[i]}`;
    btn.onclick = () => selectAnswer(i);
    grid.appendChild(btn);
  });

  document.getElementById('feedback-bar').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';
  answered = false;
}

function selectAnswer(idx) {
  if (answered) return;
  answered = true;
  const q = questions[currentQ];
  const btns = document.querySelectorAll('.answer-btn');
  btns.forEach(b => b.disabled = true);
  const isCorrect = idx === q.answer;
  if (isCorrect) score++;
  btns[idx].classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) btns[q.answer].classList.add('correct');
  const fb = document.getElementById('feedback-bar');
  fb.style.display = 'block';
  fb.className = 'feedback-bar ' + (isCorrect ? 'correct' : 'wrong');
  fb.textContent = (isCorrect ? '✓ Correct! ' : '✗ Not quite. ') + q.explanation;
  document.getElementById('live-score').textContent = score;
  document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= questions.length) showResults();
  else renderQuestion();
}

function showResults() {
  showScreen('result-screen');
  const total = questions.length;
  const pct = Math.round((score / total) * 100);
  document.getElementById('final-score-num').textContent = `${score}/${total}`;
  document.getElementById('stat-pct').textContent = pct + '%';
  document.getElementById('stat-correct').textContent = score;
  document.getElementById('stat-wrong').textContent = total - score;
  let icon, title, sub;
  if (pct >= 90)      { icon='🏆'; title='YES! You ARE smarter than a 5th grader!';  sub='Outstanding! You crushed 5th grade!'; }
  else if (pct >= 70) { icon='🎓'; title='Pretty smart!';           sub='You passed 5th grade with flying colors.'; }
  else if (pct >= 50) { icon='📚'; title='Ehh... maybe.';           sub='You might want to crack open a textbook.'; }
  else                { icon='😬'; title='Oof! Not smarter yet.';     sub='A 5th grader would like a word with you.'; }
  document.getElementById('verdict-icon').textContent = icon;
  document.getElementById('verdict-title').textContent = title;
  document.getElementById('verdict-sub').textContent = sub;
}

function resetGame() {
  selectedCategories = [];
  document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('start-btn').disabled = true;
  showScreen('title-screen');
}

buildCategoryGrid();