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
  }
  console.dir(pokemon, { maxArrayLength: null })
  console.log(game)

  /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = "Easy";
console.log(game);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
//Pokemon array

const starterPokemon = pokemon.find((poke) => poke.starter);
if (starterPokemon){
    game.party.push(starterPokemon)
}

// Log the result
console.log('Exercise 4 result:\n', game.party);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

// Step 1: Create a party array
const party = [];

// Step 2: Add Pokémon to the party based on attributes
party.push(
  pokemon[2], // Squirtle (Water type, high HP for early battles)
  pokemon[6], // Gengar (Ghost type, versatile and powerful)
  pokemon[8]  // Snorlax (Normal type, tank with very high HP)
);

// Log the result
console.log('Exercise 5 result:\n', party);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

const gyms = [
  { name: 'Pewter Gym', leader: 'Brock', difficulty: 2, completed: false },
  { name: 'Cerulean Gym', leader: 'Misty', difficulty: 3, completed: false },
  { name: 'Vermilion Gym', leader: 'Lt. Surge', difficulty: 4, completed: false },
  { name: 'Celadon Gym', leader: 'Erika', difficulty: 1, completed: false }
];
// Step 1: Loop through the gyms array
gyms.forEach(gym => {
  // Step 2: Update the completed property if difficulty is below 3
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

// Log the result
console.log('Exercise 6 result:\n', gyms);


/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

// Step 1: Find the evolved form of the starter Pokémon
const starter = game.party[0]; // First Pokémon in the party
let evolvedPokemon;

if (starter.id === 1) {
  evolvedPokemon = pokemon.find(p => p.id === 2); // Bulbasaur evolves to Ivysaur
} else if (starter.id === 4) {
  evolvedPokemon = pokemon.find(p => p.id === 5); // Charmander evolves to Charmeleon
} else if (starter.id === 7) {
  evolvedPokemon = pokemon.find(p => p.id === 8); // Squirtle evolves to Wartortle
} else if (starter.id === 25) {
  evolvedPokemon = pokemon.find(p => p.id === 26); // Pikachu evolves to Raichu
}

// Step 2: Replace the starter Pokémon with its evolved form
if (evolvedPokemon) {
  game.party.splice(0, 1, evolvedPokemon); // Replace the first Pokémon in the party
}

// Log the result
console.log('Exercise 7 result:\n', game.party);


/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

// Step 1: Loop through the party array and print each Pokémon's name
game.party.forEach(pokemon => {
  console.log(pokemon.name);
});

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
// Step 1: Filter out the starter Pokémon
const starters = pokemon.filter(p => p.starter === true);

// Step 2: Print the names of the starter Pokémon
starters.forEach(p => console.log(p.name));

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
// Step 1: Add the `catchPokemon` method to the `game` object
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj); // Add the passed Pokémon object to the party array
};


// Step 2: Catch a Pokémon by calling the method
game.catchPokemon(pokemon[0]); // Catch Bulbasaur
game.catchPokemon(pokemon[1]); // Catch Charmander

// Log the updated game object
console.log('Exercise 10 result:\n', game.party);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
// Modified `catchPokemon` method
game.catchPokemon = function (pokemonObj) {
  // Add the Pokémon to the party
  this.party.push(pokemonObj);

  // Find the pokeball in the items array and decrement its quantity
  const pokeball = this.items.find(item => item.name === 'pokeball');
  if (pokeball) {
    pokeball.quantity -= 1; // Decrease quantity
  }
};

// Call the modified method to catch a Pokémon
game.catchPokemon(pokemon[0]); // Catch Bulbasaur
game.catchPokemon(pokemon[1]); // Catch Charmander

// Log the updated game object
console.log('Exercise 11 result:');
console.log('Party:', game.party);
console.log('Items:', game.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
// Step 1: Loop through gyms and update the `completed` property for gyms with difficulty < 6
gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true; // Mark as completed
  }
});

// Log the updated gyms array
console.log('Exercise 12 result:', gyms);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
// Step 1: Add the gymStatus method
game.gymStatus = function () {
  // Initialize the tally object
  const gymTally = {
    completed: 0,
    incomplete: 0
  };

  // Step 2: Iterate through the gyms array
  this.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed += 1; // Increment completed count
    } else {
      gymTally.incomplete += 1; // Increment incomplete count
    }
  });

  // Log the final tally
  console.log('Exercise 13 result:', gymTally);
};

// Step 3: Call the gymStatus method
game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
// Step 1: Add the `partyCount` method
game.partyCount = function () {
  // Count the number of Pokémon in the party
  return this.party.length;
};

// Step 2: Call the `partyCount` method and log the result
const partySize = game.partyCount();
console.log('Exercise 14 result: Number of Pokémon in party:', partySize);

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
// Step 1: Loop through gyms and update the `completed` property for gyms with difficulty < 8
gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true; // Mark as completed
  }
});

// Log the updated gyms array
console.log('Exercise 15 result:', gyms);

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log('Exercise 16 result:', game);