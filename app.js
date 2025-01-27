const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// Exercise 1
console.dir(pokemon, { maxArrayLength: null }); // Inspect the pokemon array
console.log(pokemon[58].name); // Log the name of Pokémon number 59

// Exercise 2
console.log(game); // Inspect the game object

// Exercise 3
game.difficulty = "Medium"; // Adding a difficulty property

// Exercise 4
const starterPokemon = pokemon.find(p => p.starter === true && p.number === 1); // Select Bulbasaur
game.party.push(starterPokemon); // Add to party

// Exercise 5
const additionalPokemon = pokemon.filter(p => p.type === "Fire" || p.HP > 50).slice(0, 3); // Choose based on criteria
game.party.push(...additionalPokemon); // Add them to the party

// Exercise 6
game.gyms.forEach(gym => {
  if (gym.difficulty < 3) gym.completed = true; // Mark gyms with difficulty < 3 as completed
});

// Exercise 7
const evolvedForm = pokemon.find(p => p.number === 2); // Bulbasaur evolves into Ivysaur
game.party.splice(0, 1, evolvedForm); // Replace starter Pokémon with its evolved form

// Exercise 8
game.party.forEach(p => console.log(p.name)); // Print each Pokémon's name in the party

// Exercise 9
const starters = pokemon.filter(p => p.starter); // Filter starter Pokémon
starters.forEach(p => console.log(p.name)); // Print their names

// Exercise 10
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj); // Add Pokémon to the party
};
game.catchPokemon(pokemon.find(p => p.number === 10)); // Catch a Pokémon (e.g., Caterpie)

// Exercise 11
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj);
  const pokeball = this.items.find(item => item.name === "pokeball");
  if (pokeball) pokeball.quantity--; // Decrease pokeball quantity
};
game.catchPokemon(pokemon.find(p => p.number === 11)); // Catch another Pokémon (e.g., Metapod)
console.log(game.items); // Check updated items

// Exercise 12
game.gyms.forEach(gym => {
  if (gym.difficulty < 6) gym.completed = true; // Complete gyms with difficulty < 6
});

// Exercise 13
game.gymStatus = function () {
  const gymTally = { completed: 0, incomplete: 0 };
  this.gyms.forEach(gym => {
    if (gym.completed) gymTally.completed++;
    else gymTally.incomplete++;
  });
  console.log(gymTally);
};
game.gymStatus(); // Log the gym status tally

// Exercise 14
game.partyCount = function () {
  return this.party.length; // Count Pokémon in the party
};
console.log("Party Count:", game.partyCount());

// Exercise 15
game.gyms.forEach(gym => {
  if (gym.difficulty < 8) gym.completed = true; // Complete gyms with difficulty < 8
});

// Exercise 16
console.log(game); // Log the final game object
