const cards = [
  "Archer Queen",
  "Archers",
  "Arrows",
  "Baby Dragon",
  "Balloon",
  "Bandit",
  "Barbarian Barrel",
  "Barbarian Hut",
  "Barbarians",
  "Bats",
  "Battle Healer",
  "Battle Ram",
  "Berserker",
  "Bomb Tower",
  "Bomber",
  "Boss Bandit",
  "Bowler",
  "Cannon",
  "Cannon Cart",
  "Clone",
  "Dark Prince",
  "Dart Goblin",
  "Earthquake",
  "Electro Dragon",
  "Electro Giant",
  "Electro Spirit",
  "Electro Wizard",
  "Elite Barbarians",
  "Elixir Collector",
  "Elixir Golem",
  "Executioner",
  "Fire Spirit",
  "Fireball",
  "Firecracker",
  "Fisherman",
  "Flying Machine",
  "Freeze",
  "Furnace",
  "Giant",
  "Giant Skeleton",
  "Giant Snowball",
  "Goblin Barrel",
  "Goblin Cage",
  "Goblin Curse",
  "Goblin Demolisher",
  "Goblin Drill",
  "Goblin Gang",
  "Goblin Giant",
  "Goblin Hut",
  "Goblin Machine",
  "Goblins",
  "Goblinstein",
  "Golden Knight",
  "Golem",
  "Graveyard",
  "Guards",
  "Heal Spirit",
  "Hog Rider",
  "Hunter",
  "Ice Golem",
  "Ice Spirit",
  "Ice Wizard",
  "Inferno Dragon",
  "Inferno Tower",
  "Knight",
  "Lava Hound",
  "Lightning",
  "Little Prince",
  "Lumberjack",
  "Magic Archer",
  "Mega Knight",
  "Mega Minion",
  "Mighty Miner",
  "Miner",
  "Mini P.E.K.K.A",
  "Minion Horde",
  "Minions",
  "Mirror",
  "Monk",
  "Mortar",
  "Mother Witch",
  "Night Witch",
  "P.E.K.K.A",
  "Phoenix",
  "Poison",
  "Prince",
  "Princess",
  "Rage",
  "Ram Rider",
  "Rascals",
  "Rocket",
  "Royal Delivery",
  "Royal Ghost",
  "Royal Giant",
  "Royal Hogs",
  "Royal Recruits",
  "Rune Giant",
  "Skeleton Army",
  "Skeleton Barrel",
  "Skeleton Dragons",
  "Skeleton King",
  "Skeletons",
  "Sparky",
  "Spear Goblins",
  "Spirit Empress",
  "Suspicious Bush",
  "Tesla",
  "The Log",
  "Three Musketeers",
  "Tombstone",
  "Tornado",
  "Valkyrie",
  "Vines",
  "Void",
  "Wall Breakers",
  "Witch",
  "Wizard",
  "X-Bow",
  "Zap",
  "Zappies"
];

let players = 0;
let currentPlayer = 0;
let playerCards = [];

// DOM elements
const setupScreen = document.getElementById("setupScreen");
const passScreen = document.getElementById("passScreen");
const endScreen = document.getElementById("endScreen");

const startBtn = document.getElementById("startBtn");
const revealBtn = document.getElementById("revealBtn");
const hideBtn = document.getElementById("hideBtn");

const playerTitle = document.getElementById("playerTitle");
const hiddenCard = document.getElementById("hiddenCard");
const revealedCard = document.getElementById("revealedCard");
const cardText = document.getElementById("cardText");

// Event listeners
startBtn.addEventListener("click", startGame);
revealBtn.addEventListener("click", revealCard);
hideBtn.addEventListener("click", hideAndPass);
againBtn.addEventListener("click", restart)

function startGame() {
    const playerCountSelect = document.getElementById("playerCount");
    players = parseInt(playerCountSelect.value);
    currentPlayer = 0;

    // Pick common card
    const commonCard = cards[Math.floor(Math.random() * cards.length)];

    // Pick a different card for the imposter
    let imposterCard;
    do {
        imposterCard = cards[Math.floor(Math.random() * cards.length)];
    } while (imposterCard === commonCard);

    // Assign cards
    playerCards = Array(players).fill(commonCard);
    const imposterIndex = Math.floor(Math.random() * players);
    playerCards[imposterIndex] = imposterCard;

    // Switch screens
    setupScreen.classList.remove("active");
    passScreen.classList.add("active");

    updatePlayerUI();
}

function updatePlayerUI() {
    playerTitle.textContent = `Player ${currentPlayer + 1}`;
    hiddenCard.style.display = "block";
    revealedCard.style.display = "none";
}

function revealCard() {
    cardText.textContent = playerCards[currentPlayer];
    hiddenCard.style.display = "none";
    revealedCard.style.display = "block";
}

function hideAndPass() {
    currentPlayer++;

    if (currentPlayer >= players) {
        passScreen.classList.remove("active");
        endScreen.classList.add("active")
    } else {
        updatePlayerUI();
    }
}

function restart() {
    endScreen.classList.remove("active")
    passScreen.classList.add("active")
    startGame()
}
