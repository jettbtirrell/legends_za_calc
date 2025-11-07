const TYPE_CHART = {
  normal:     { normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1, rock: 0.5, ghost: 0, dragon: 1, dark: 1, steel: 0.5, fairy: 1 },
  fire:       { normal: 1, fire: 0.5, water: 0.5, electric: 1, grass: 2, ice: 2, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 2, rock: 0.5, ghost: 1, dragon: 0.5, dark: 1, steel: 2, fairy: 1 },
  water:      { normal: 1, fire: 2, water: 0.5, electric: 1, grass: 0.5, ice: 1, fighting: 1, poison: 1, ground: 2, flying: 1, psychic: 1, bug: 1, rock: 2, ghost: 1, dragon: 0.5, dark: 1, steel: 1, fairy: 1 },
  electric:   { normal: 1, fire: 1, water: 2, electric: 0.5, grass: 0.5, ice: 1, fighting: 1, poison: 1, ground: 0, flying: 2, psychic: 1, bug: 1, rock: 1, ghost: 1, dragon: 0.5, dark: 1, steel: 1, fairy: 1 },
  grass:      { normal: 1, fire: 0.5, water: 2, electric: 1, grass: 0.5, ice: 1, fighting: 1, poison: 0.5, ground: 2, flying: 0.5, psychic: 1, bug: 0.5, rock: 2, ghost: 1, dragon: 0.5, dark: 1, steel: 0.5, fairy: 1 },
  ice:        { normal: 1, fire: 0.5, water: 0.5, electric: 1, grass: 2, ice: 0.5, fighting: 1, poison: 1, ground: 2, flying: 2, psychic: 1, bug: 1, rock: 1, ghost: 1, dragon: 2, dark: 1, steel: 0.5, fairy: 1 },
  fighting:   { normal: 2, fire: 1, water: 1, electric: 1, grass: 1, ice: 2, fighting: 1, poison: 0.5, ground: 1, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dragon: 1, dark: 2, steel: 2, fairy: 0.5 },
  poison:     { normal: 1, fire: 1, water: 1, electric: 1, grass: 2, ice: 1, fighting: 1, poison: 0.5, ground: 0.5, flying: 1, psychic: 1, bug: 1, rock: 0.5, ghost: 0.5, dragon: 1, dark: 1, steel: 0, fairy: 2 },
  ground:     { normal: 1, fire: 2, water: 1, electric: 2, grass: 0.5, ice: 1, fighting: 1, poison: 2, ground: 1, flying: 0, psychic: 1, bug: 0.5, rock: 2, ghost: 1, dragon: 1, dark: 1, steel: 2, fairy: 1 },
  flying:     { normal: 1, fire: 1, water: 1, electric: 0.5, grass: 2, ice: 1, fighting: 2, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 2, rock: 0.5, ghost: 1, dragon: 1, dark: 1, steel: 0.5, fairy: 1 },
  psychic:    { normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1, fighting: 2, poison: 2, ground: 1, flying: 1, psychic: 0.5, bug: 1, rock: 1, ghost: 1, dragon: 1, dark: 0, steel: 0.5, fairy: 1 },
  bug:        { normal: 1, fire: 0.5, water: 1, electric: 1, grass: 2, ice: 1, fighting: 0.5, poison: 0.5, ground: 1, flying: 0.5, psychic: 2, bug: 1, rock: 1, ghost: 0.5, dragon: 1, dark: 2, steel: 0.5, fairy: 0.5 },
  rock:       { normal: 1, fire: 2, water: 1, electric: 1, grass: 1, ice: 2, fighting: 0.5, poison: 1, ground: 0.5, flying: 2, psychic: 1, bug: 2, rock: 1, ghost: 1, dragon: 1, dark: 1, steel: 0.5, fairy: 1 },
  ghost:      { normal: 0, fire: 1, water: 1, electric: 1, grass: 1, ice: 1, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 2, bug: 1, rock: 1, ghost: 2, dragon: 1, dark: 0.5, steel: 1, fairy: 1 },
  dragon:     { normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1, rock: 1, ghost: 1, dragon: 2, dark: 1, steel: 0.5, fairy: 0 },
  dark:       { normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1, fighting: 0.5, poison: 1, ground: 1, flying: 1, psychic: 2, bug: 1, rock: 1, ghost: 2, dragon: 1, dark: 0.5, steel: 1, fairy: 0.5 },
  steel:      { normal: 1, fire: 0.5, water: 0.5, electric: 0.5, grass: 1, ice: 2, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1, rock: 2, ghost: 1, dragon: 1, dark: 1, steel: 0.5, fairy: 2 },
  fairy:      { normal: 1, fire: 0.5, water: 1, electric: 1, grass: 1, ice: 1, fighting: 2, poison: 0.5, ground: 1, flying: 1, psychic: 1, bug: 1, rock: 1, ghost: 1, dragon: 2, dark: 2, steel: 0.5, fairy: 1 }
};

const NATURES = [
  { name: 'Hardy', inc: null, dec: null },
  { name: 'Lonely', inc: 'atk', dec: 'def' },
  { name: 'Brave', inc: 'atk', dec: 'spe' },
  { name: 'Adamant', inc: 'atk', dec: 'spa' },
  { name: 'Naughty', inc: 'atk', dec: 'spd' },
  { name: 'Bold', inc: 'def', dec: 'atk' },
  { name: 'Docile', inc: null, dec: null },
  { name: 'Relaxed', inc: 'def', dec: 'spe' },
  { name: 'Impish', inc: 'def', dec: 'spa' },
  { name: 'Lax', inc: 'def', dec: 'spd' },
  { name: 'Modest', inc: 'spa', dec: 'atk' },
  { name: 'Mild', inc: 'spa', dec: 'def' },
  { name: 'Quiet', inc: 'spa', dec: 'spe' },
  { name: 'Bashful', inc: null, dec: null },
  { name: 'Rash', inc: 'spa', dec: 'spd' },
  { name: 'Calm', inc: 'spd', dec: 'atk' },
  { name: 'Gentle', inc: 'spd', dec: 'def' },
  { name: 'Sassy', inc: 'spd', dec: 'spe' },
  { name: 'Careful', inc: 'spd', dec: 'spa' },
  { name: 'Quirky', inc: null, dec: null },
  { name: 'Timid', inc: 'spe', dec: 'atk' },
  { name: 'Hasty', inc: 'spe', dec: 'def' },
  { name: 'Serious', inc: null, dec: null },
  { name: 'Jolly', inc: 'spe', dec: 'spa' },
  { name: 'Naive', inc: 'spe', dec: 'spd' }
];

const STAT_DISPLAY = { atk: 'Atk', def: 'Def', spa: 'SpA', spd: 'SpD', spe: 'Spe' };

function getNatureByName(name) {
  const lower = name ? name.toLowerCase() : '';
  return NATURES.find((n) => n.name.toLowerCase() === lower) || NATURES[0];
}

function getNatureMultipliers(natureName) {
  const nature = getNatureByName(natureName);
  const multipliers = { atk: 1, def: 1, spa: 1, spd: 1 };
  if (nature.inc && multipliers[nature.inc] !== undefined) {
    multipliers[nature.inc] = 1.1;
  }
  if (nature.dec && multipliers[nature.dec] !== undefined) {
    multipliers[nature.dec] = 0.9;
  }
  return multipliers;
}

function formatNature(natureName) {
  const nature = getNatureByName(natureName);
  let parts = [];
  if (nature.inc && STAT_DISPLAY[nature.inc]) parts.push('+' + STAT_DISPLAY[nature.inc]);
  if (nature.dec && STAT_DISPLAY[nature.dec]) parts.push('-' + STAT_DISPLAY[nature.dec]);
  return parts.length ? `${nature.name} (${parts.join(', ')})` : nature.name;
}

const state = {
  attacker: {
    name: '',
    baseStats: {},
    types: [],
    sprite: '',
    evs: { atk: 0, spa: 0 },
    moves: [],
    nature: 'Hardy'
  },
  enemies: []
};

function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}

async function fetchPokemon(name) {
  const id = name.toLowerCase().trim().replace(/\s+/g, '-');
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const baseStats = {};
    data.stats.forEach((s) => {
      const statName = s.stat.name;
      if (statName === 'hp') baseStats.hp = s.base_stat;
      else if (statName === 'attack') baseStats.atk = s.base_stat;
      else if (statName === 'defense') baseStats.def = s.base_stat;
      else if (statName === 'special-attack') baseStats.spa = s.base_stat;
      else if (statName === 'special-defense') baseStats.spd = s.base_stat;
      else if (statName === 'speed') baseStats.spe = s.base_stat;
    });
    const types = data.types.map((t) => t.type.name);
    const sprite = data.sprites.other?.['official-artwork']?.front_default || data.sprites.front_default || '';
    return { baseStats, types, sprite };
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function fetchMove(name) {
  const id = name.toLowerCase().trim().replace(/\s+/g, '-');
  const url = `https://pokeapi.co/api/v2/move/${id}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const power = data.power;
    const type = data.type.name;
    const category = data.damage_class.name;
    return { power, type, category };
  } catch (err) {
    console.error(err);
    return null;
  }
}

function computeHP(base, ev) {
  const level = 50;
  return Math.floor(((2 * base + 31 + Math.floor(ev / 4)) * level) / 100) + level + 10;
}

function computeStat(base, ev) {
  const level = 50;
  return Math.floor(((2 * base + 31 + Math.floor(ev / 4)) * level) / 100) + 5;
}

function computeTypeEffectiveness(moveType, defenderTypes) {
  let multiplier = 1;
  if (!TYPE_CHART[moveType]) return multiplier;
  defenderTypes.forEach((type) => {
    const eff = TYPE_CHART[moveType][type] ?? 1;
    multiplier *= eff;
  });
  return multiplier;
}

function calculateDamageRange(attacker, move, defender) {
  if (!attacker.baseStats || !defender.baseStats) return { min: 0, max: 0, minPct: 0, maxPct: 0 };
  if (!move || move.power === null || move.category === 'status') {
    return { min: 0, max: 0, minPct: 0, maxPct: 0 };
  }
  let atkStatBase = move.category === 'physical'
    ? computeStat(attacker.baseStats.atk, attacker.evs.atk)
    : computeStat(attacker.baseStats.spa, attacker.evs.spa);
  let defStatBase = move.category === 'physical'
    ? computeStat(defender.baseStats.def, defender.evs.def)
    : computeStat(defender.baseStats.spd, defender.evs.spd);
  const atkNatureMults = getNatureMultipliers(attacker.nature || 'Hardy');
  const defNatureMults = getNatureMultipliers(defender.nature || 'Hardy');
  const atkMultiplier = move.category === 'physical' ? atkNatureMults.atk : atkNatureMults.spa;
  const defMultiplier = move.category === 'physical' ? defNatureMults.def : defNatureMults.spd;
  const atkStat = Math.floor(atkStatBase * atkMultiplier);
  const defStat = Math.floor(defStatBase * defMultiplier);
  const targetHP = computeHP(defender.baseStats.hp, defender.evs.hp);
  const level = 50;
  const power = move.power;
  const baseDamage = Math.floor((Math.floor((2 * level) / 5 + 2) * power * atkStat / defStat) / 50) + 2;
  const stab = attacker.types.includes(move.type) ? 1.5 : 1;
  const typeEff = computeTypeEffectiveness(move.type, defender.types);
  const minRandom = 0.85;
  const maxRandom = 1.0;
  const globalModifier = 0.7;
  let plusFactor = 1;
  if (move.plus) {
    plusFactor = typeEff === 1 ? 1.2 : 1.3;
  }
  const finalModifier = stab * typeEff * globalModifier * plusFactor;
  const minDamage = Math.floor(baseDamage * finalModifier * minRandom);
  const maxDamage = Math.floor(baseDamage * finalModifier * maxRandom);
  const minPct = targetHP ? (minDamage / targetHP) * 100 : 0;
  const maxPct = targetHP ? (maxDamage / targetHP) * 100 : 0;
  return {
    min: minDamage,
    max: maxDamage,
    minPct,
    maxPct
  };
}

const attackerNameInput = document.getElementById('attacker-name');
const attackerInfoPanel = document.getElementById('attacker-info');
const attackerSpriteImg = document.getElementById('attacker-sprite');
const attackerBaseHpSpan = document.getElementById('attacker-base-hp');
const attackerBaseAtkSpan = document.getElementById('attacker-base-atk');
const attackerBaseDefSpan = document.getElementById('attacker-base-def');
const attackerBaseSpaSpan = document.getElementById('attacker-base-spa');
const attackerBaseSpdSpan = document.getElementById('attacker-base-spd');
const attackerTypesSpan = document.getElementById('attacker-types');
const atkEvSlider = document.getElementById('atk-ev');
const spaEvSlider = document.getElementById('spa-ev');
const atkEvValue = document.getElementById('atk-ev-value');
const spaEvValue = document.getElementById('spa-ev-value');
const movesSection = document.getElementById('moves-section');
const movesListDiv = document.getElementById('moves-list');
const addMoveButton = document.getElementById('add-move');
const movesImportArea = document.getElementById('moves-import-area');
const importMovesBtn = document.getElementById('import-moves-btn');
const exportMovesBtn = document.getElementById('export-moves-btn');
const toggleAllPlus = document.getElementById('toggle-all-plus');
const setupImportArea = document.getElementById('setup-import-area');
const setupImportBtn  = document.getElementById('setup-import-btn');
const setupExportBtn  = document.getElementById('setup-export-btn');
const clearMovesButton = document.getElementById('clear-moves');

const attackerNatureSelect = document.getElementById('attacker-nature');
const enemyNatureSelect = document.getElementById('enemy-nature');
const pokemonListEl = document.getElementById('pokemon-list');
const moveListEl = document.getElementById('move-list');

const importArea = document.getElementById('enemy-import-area');
const importBtn = document.getElementById('import-btn');
const exportBtn = document.getElementById('export-btn');

const enemyNameInput = document.getElementById('enemy-name');
const enemyHpEvSlider = document.getElementById('enemy-hp-ev');
const enemyDefEvSlider = document.getElementById('enemy-def-ev');
const enemySpdEvSlider = document.getElementById('enemy-spd-ev');
const enemyHpEvValue = document.getElementById('enemy-hp-ev-value');
const enemyDefEvValue = document.getElementById('enemy-def-ev-value');
const enemySpdEvValue = document.getElementById('enemy-spd-ev-value');
const addEnemyButton = document.getElementById('add-enemy');
const enemyContainer = document.getElementById('enemy-container');
const enemyEvControls = document.getElementById('enemy-ev-controls');

async function loadAttacker(name) {
  name = name.trim();
  if (!name) return;

  const data = await fetchPokemon(name);
  if (!data) {
    return;
  }

  state.attacker.name = name.toLowerCase();
  state.attacker.baseStats = data.baseStats;
  state.attacker.types = data.types;
  state.attacker.sprite = data.sprite;
  state.attacker.nature = attackerNatureSelect.value || 'Hardy';
  state.attacker.evs.atk = parseInt(atkEvSlider.value, 10) || 0;
  state.attacker.evs.spa = parseInt(spaEvSlider.value, 10) || 0;

  const stats = {
  hp: data.baseStats.hp,
  atk: data.baseStats.atk,
  def: data.baseStats.def,
  spa: data.baseStats.spa,
  spd: data.baseStats.spd,
  spe: data.baseStats.spe || data.baseStats.speed
  };

  attackerBaseHpSpan.textContent  = stats.hp;
  attackerBaseAtkSpan.textContent = stats.atk;
  attackerBaseDefSpan.textContent = stats.def;
  attackerBaseSpaSpan.textContent = stats.spa;
  attackerBaseSpdSpan.textContent = stats.spd;
  document.getElementById('attacker-base-spe').textContent = stats.spe;

  const total = stats.hp + stats.atk + stats.def + stats.spa + stats.spd + stats.spe;
  document.getElementById('attacker-base-total').textContent = total;

  const normalize = (val) => Math.min((val / 255) * 100, 100);

  function statColor(value) {
    if (value >= 150) return '#4caf50'; 
    if (value >= 120) return '#8bc34a';
    if (value >= 90)  return '#cddc39'; 
    if (value >= 70)  return '#ffeb3b';  
    if (value >= 50)  return '#ffc107';
    if (value >= 30)  return '#ff9800'; 
    return '#f44336';
  }

  const fills = {
    hp:  document.querySelector('.fill.hp'),
    atk: document.querySelector('.fill.atk'),
    def: document.querySelector('.fill.def'),
    spa: document.querySelector('.fill.spa'),
    spd: document.querySelector('.fill.spd'),
    spe: document.querySelector('.fill.spe')
  };

  for (const key in fills) {
    const val = stats[key];
    fills[key].style.width  = `${normalize(val)}%`;
    fills[key].style.backgroundColor = statColor(val);
  }
    
  attackerTypesSpan.textContent = data.types.map(capitalize).join(' / ');
  attackerInfoPanel.classList.remove('hidden');
  movesSection.classList.remove('hidden');

  if (attackerSpriteImg) {
    attackerSpriteImg.src = data.sprite || '';
    attackerSpriteImg.alt = name.toLowerCase();
  }

  updateAllEnemyCards();
}


attackerNameInput.addEventListener('change', () => {
  loadAttacker(attackerNameInput.value);
});

attackerNameInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') loadAttacker(attackerNameInput.value);
});

atkEvSlider.addEventListener('input', () => {
  atkEvValue.textContent = atkEvSlider.value;
  state.attacker.evs.atk = parseInt(atkEvSlider.value, 10);
  updateAllEnemyCards();
});
spaEvSlider.addEventListener('input', () => {
  spaEvValue.textContent = spaEvSlider.value;
  state.attacker.evs.spa = parseInt(spaEvSlider.value, 10);
  updateAllEnemyCards();
});

attackerNatureSelect.addEventListener('change', () => {
  state.attacker.nature = attackerNatureSelect.value;
  updateAllEnemyCards();
});

addMoveButton.addEventListener('click', () => {
  addMoveRow();
});

clearMovesButton.addEventListener('click', () => {
  if (!confirm('Clear all moves?')) return;
  state.attacker.moves = [];
  movesListDiv.innerHTML = '';
  updateAllEnemyCards();
});

addEnemyButton.addEventListener('click', async () => {
  const name = enemyNameInput.value.trim();
  if (!name) return;
  const data = await fetchPokemon(name);
  if (!data) {
    return;
  }
  enemyEvControls.classList.remove('hidden');
  const enemy = {
    id: Date.now().toString(),
    name: name.toLowerCase(),
    baseStats: data.baseStats,
    types: data.types,
    sprite: data.sprite,
    evs: {
      hp: parseInt(enemyHpEvSlider.value, 10) || 0,
      def: parseInt(enemyDefEvSlider.value, 10) || 0,
      spd: parseInt(enemySpdEvSlider.value, 10) || 0
    },
    nature: enemyNatureSelect.value || 'Hardy'
  };
  state.enemies.push(enemy);
  const card = createEnemyCard(enemy);
  enemyContainer.appendChild(card);
  enemyNameInput.value = '';
});

enemyHpEvSlider.addEventListener('input', () => {
  enemyHpEvValue.textContent = enemyHpEvSlider.value;
});
enemyDefEvSlider.addEventListener('input', () => {
  enemyDefEvValue.textContent = enemyDefEvSlider.value;
});
enemySpdEvSlider.addEventListener('input', () => {
  enemySpdEvValue.textContent = enemySpdEvSlider.value;
});

function addMoveRow() {
  const row = document.createElement('div');
  row.className = 'move-input-row';
  const moveInput = document.createElement('input');
  moveInput.type = 'text';
  moveInput.placeholder = 'Move name';
  moveInput.setAttribute('list', 'move-list');
  const plusLabel = document.createElement('label');
  plusLabel.style.display = 'flex';
  plusLabel.style.alignItems = 'center';
  const plusCheckbox = document.createElement('input');
  plusCheckbox.type = 'checkbox';
  plusCheckbox.style.marginRight = '4px';
  plusLabel.appendChild(plusCheckbox);
  plusLabel.appendChild(document.createTextNode('Plus')); 
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete';
  row.appendChild(moveInput);
  row.appendChild(plusLabel);
  row.appendChild(deleteBtn);
  movesListDiv.appendChild(row);
  const moveObj = { name: '', power: null, type: '', category: '', plus: false, row };
  state.attacker.moves.push(moveObj);
  moveInput.addEventListener('change', async () => {
    const name = moveInput.value.trim();
    moveObj.name = name;
    if (!name) {
      moveObj.power = null;
      moveObj.type = '';
      moveObj.category = '';
      updateAllEnemyCards();
      return;
    }
    const data = await fetchMove(name);
    if (!data) {
      moveObj.power = null;
      moveObj.type = '';
      moveObj.category = '';
    } else {
      moveObj.power = data.power;
      moveObj.type = data.type;
      moveObj.category = data.category;
    }
    updateAllEnemyCards();
  });
  plusCheckbox.addEventListener('change', () => {
    moveObj.plus = plusCheckbox.checked;
    updateAllEnemyCards();
  });
  deleteBtn.addEventListener('click', () => {
    const index = state.attacker.moves.indexOf(moveObj);
    if (index !== -1) state.attacker.moves.splice(index, 1);
    movesListDiv.removeChild(row);
    updateAllEnemyCards();
  });
  return { moveObj, moveInput, plusCheckbox, row };
}

function createEnemyCard(enemy) {
  const card = document.createElement('div');
  card.className = 'enemy-card';
  card.dataset.enemyId = enemy.id;
  const header = document.createElement('div');
  header.className = 'enemy-header';
  const img = document.createElement('img');
  img.src = enemy.sprite || '';
  img.alt = enemy.name;
  const nameSpan = document.createElement('span');
  nameSpan.className = 'enemy-name';
  nameSpan.textContent = capitalize(enemy.name);
  header.appendChild(img);
  header.appendChild(nameSpan);
  card.appendChild(header);

  const evInfo = document.createElement('div');
  evInfo.className = 'ev-display';
  evInfo.textContent = `HP ${enemy.evs.hp} / Def ${enemy.evs.def} / SpD ${enemy.evs.spd} | ${formatNature(enemy.nature)}`;
  card.appendChild(evInfo);
  enemy.evDisplay = evInfo;
  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove';
  removeBtn.title = 'Remove enemy';
  removeBtn.textContent = '×';
  removeBtn.addEventListener('click', () => {
    const idx = state.enemies.findIndex((e) => e.id === enemy.id);
    if (idx !== -1) {
      state.enemies.splice(idx, 1);
    }
    card.remove();
  });
  card.appendChild(removeBtn);
  const movesContainer = document.createElement('div');
  movesContainer.className = 'moves-results';
  card.appendChild(movesContainer);
  enemy.card = card;
  enemy.movesContainer = movesContainer;
  updateEnemyCard(enemy);
  return card;
}

function updateEnemyCard(enemy) {
  const container = enemy.movesContainer;
  if (!container) return;
  container.innerHTML = '';
  state.attacker.moves.forEach((moveObj) => {
    const row = document.createElement('div');
    row.className = 'move-row';
    const nameSpan = document.createElement('span');
    nameSpan.className = 'move-name';
    nameSpan.textContent = moveObj.name ? capitalize(moveObj.name) : '(none)';
    row.appendChild(nameSpan);
    if (moveObj.power && moveObj.category !== 'status') {
      const result = calculateDamageRange(state.attacker, moveObj, enemy);
      const infoSpan = document.createElement('span');
      infoSpan.className = 'move-info';
      infoSpan.textContent = ` [${moveObj.category}, ${moveObj.power}bp, ${capitalize(moveObj.type)}]`;
      row.appendChild(infoSpan);
      const barContainer = document.createElement('div');
      barContainer.className = 'damage-bar-container';
      const barMax = document.createElement('div');
      barMax.className = 'damage-bar-max';
      barMax.style.width = `${Math.min(result.maxPct, 100)}%`;
      const barMin = document.createElement('div');
      barMin.className = 'damage-bar-min';
      barMin.style.width = `${Math.min(result.minPct, 100)}%`;
      barContainer.appendChild(barMax);
      barContainer.appendChild(barMin);
      row.appendChild(barContainer);
      const pctSpan = document.createElement('span');
      pctSpan.className = 'percentage';
      pctSpan.textContent = ` ${result.minPct.toFixed(1)}% – ${result.maxPct.toFixed(1)}%`;
      row.appendChild(pctSpan);
    } else if (moveObj.name) {
      const infoSpan = document.createElement('span');
      infoSpan.className = 'move-info';
      infoSpan.textContent = ' [Status or unsupported]';
      row.appendChild(infoSpan);
    }
    container.appendChild(row);
  });
}

function updateAllEnemyCards() {
  state.enemies.forEach((enemy) => {
    updateEnemyCard(enemy);
  });
}

function populateNatureSelectors() {
  if (!attackerNatureSelect || !enemyNatureSelect) return;
  attackerNatureSelect.innerHTML = '';
  enemyNatureSelect.innerHTML = '';
  NATURES.forEach((nat) => {
    const opt1 = document.createElement('option');
    opt1.value = nat.name;
    opt1.textContent = nat.name;
    attackerNatureSelect.appendChild(opt1);
    const opt2 = document.createElement('option');
    opt2.value = nat.name;
    opt2.textContent = nat.name;
    enemyNatureSelect.appendChild(opt2);
  });
  attackerNatureSelect.value = 'Hardy';
  enemyNatureSelect.value = 'Hardy';
  state.attacker.nature = attackerNatureSelect.value;
}
async function initializeAutocomplete() {
  try {
    const pokeRes = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000');
    const pokeData = await pokeRes.json();
    pokeData.results.forEach((p) => {
      const opt = document.createElement('option');
      opt.value = p.name;
      pokemonListEl.appendChild(opt);
    });
  } catch (e) {
    console.error('Failed to load Pokémon list', e);
  }
  try {
    const moveRes = await fetch('https://pokeapi.co/api/v2/move?limit=2000');
    const moveData = await moveRes.json();
    moveData.results.forEach((m) => {
      const opt = document.createElement('option');
      opt.value = m.name;
      moveListEl.appendChild(opt);
    });
  } catch (e) {
    console.error('Failed to load move list', e);
  }
}

populateNatureSelectors();
initializeAutocomplete();


exportMovesBtn?.addEventListener('click', () => {
  if (!movesImportArea) return;
  const lines = state.attacker.moves
    .filter((m) => m.name)
    .map((m) => `${m.name},${m.plus ? 1 : 0}`);
  movesImportArea.value = lines.join('\n');
});

toggleAllPlus.addEventListener('change', () => {
  const newState = toggleAllPlus.checked;

  state.attacker.moves.forEach(m => m.plus = newState);

  document.querySelectorAll('#moves-list input[type="checkbox"]').forEach(cb => {
    cb.checked = newState;
  });

  updateAllEnemyCards();
});

setupExportBtn.addEventListener('click', () => {
  const lines = [];

  lines.push('[Attacker]');
  lines.push(`Name: ${state.attacker.name || ''}`);
  lines.push(`Nature: ${state.attacker.nature || ''}`);
  const evs = state.attacker.evs;
  lines.push(
    `EVs: ${evs.hp || 0} HP / ${evs.atk || 0} Atk / ${evs.def || 0} Def / ${evs.spa || 0} SpA / ${evs.spd || 0} SpD / ${evs.spe || 0} Spe`
  );
  lines.push('');

  lines.push('[Moves]');
  state.attacker.moves.forEach(m => {
    lines.push(`${m.name || ''},${m.plus ? 1 : 0}`);
  });
  lines.push('');

  lines.push('[Enemies]');
  state.enemies.forEach(e => {
    lines.push(`${e.name},${e.nature || 'Hardy'},${e.evs.hp || 0},${e.evs.def || 0},${e.evs.spd || 0}`);
  });

  setupImportArea.value = lines.join('\n');
});

setupImportBtn.addEventListener('click', async () => {
  const text = setupImportArea.value.trim();
  if (!text) return;

  const sections = {};
  let current = null;
  text.split(/\n/).forEach(line => {
    line = line.trim();
    if (!line) return;
    const match = line.match(/^\[(.+)\]$/);
    if (match) {
      current = match[1].toLowerCase();
      sections[current] = [];
    } else if (current) {
      sections[current].push(line);
    }
  });

  if (sections.attacker) {
    const lines = sections.attacker;
    let name = '', nature = 'Hardy';
    const evs = { hp:0, atk:0, def:0, spa:0, spd:0, spe:0 };

    lines.forEach(line => {
      if (line.startsWith('Name:')) name = line.split(':')[1].trim();
      else if (line.startsWith('Nature:')) nature = line.split(':')[1].trim();
      else if (line.startsWith('EVs:')) {
        line.replace('EVs:', '').split('/').forEach(part => {
          const [val, stat] = part.trim().split(' ');
          if (stat.toLowerCase().startsWith('hp')) evs.hp = +val;
          else if (stat.toLowerCase().startsWith('atk')) evs.atk = +val;
          else if (stat.toLowerCase().startsWith('def')) evs.def = +val;
          else if (stat.toLowerCase().startsWith('spa')) evs.spa = +val;
          else if (stat.toLowerCase().startsWith('spd')) evs.spd = +val;
          else if (stat.toLowerCase().startsWith('spe')) evs.spe = +val;
        });
      }
    });

    await loadAttacker(name);
    state.attacker.nature = nature;
    Object.assign(state.attacker.evs, evs);
    atkEvSlider.value = evs.atk; spaEvSlider.value = evs.spa;
    updateAllEnemyCards();
    atkEvValue.textContent = evs.atk;
    spaEvValue.textContent = evs.spa;
    attackerNatureSelect.value = nature;
  }

  if (sections.moves) {
    state.attacker.moves = [];
    movesListDiv.innerHTML = '';
    for (const line of sections.moves) {
      const [moveName, plusFlagRaw] = line.split(',').map(s => s.trim());
      if (!moveName) continue;
      const plusFlag = ['1','true','plus'].includes((plusFlagRaw||'').toLowerCase());
      const { moveObj, moveInput, plusCheckbox } = addMoveRow();
      moveInput.value = moveName;
      moveObj.name = moveName;
      plusCheckbox.checked = plusFlag;
      moveObj.plus = plusFlag;
      const data = await fetchMove(moveName);
      if (data) Object.assign(moveObj, data);
    }
    updateAllEnemyCards();
  }
  
  if (sections.enemies) {
    state.enemies = [];
    document.getElementById('enemy-container').innerHTML = '';
    for (const line of sections.enemies) {
      const [name, nature, hp, def, spd] = line.split(',').map(s => s.trim());
      const data = await fetchPokemon(name);
      if (!data) continue;
      const enemy = {
        id: Date.now().toString() + Math.random(),
        name,
        baseStats: data.baseStats,
        types: data.types,
        sprite: data.sprite,
        evs: { hp:+hp||0, def:+def||0, spd:+spd||0 },
        nature
      };
      state.enemies.push(enemy);
      const card = createEnemyCard(enemy);
      enemyContainer.appendChild(card);
    }
    updateAllEnemyCards();
  }
});
