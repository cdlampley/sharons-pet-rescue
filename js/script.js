const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("To tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${pet.name} love to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
//Declare a variable called clover to create a new object with the parameters "Clover" and "rabbit".
const clover = createPet("Clover", "rabbit");
//Declare a variable called baxter to create a new object with the parameters "Baxter" and "hamster".
const baxter = createPet("Baxter", "hamster");
//Declare a variable called cleo to create a new object with the parameters "Cleo" and "rat".
const cleo = createPet("Cleo", "rat");
//Declare a variable called francine to create a new object with the parameters "Francine" and "turtle".
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

clover.sleep();
baxter.play();

//console.log(clover, baxter);

clover.isTired = 8;
francine.isTired = 9;

//Create an array called allPets that includes all pet objects as elements.
const allPets = [sora, clover, baxter, cleo, francine];
console.log(allPets);

//Grab the pets variable that’s selecting the “all-pets” unordered list. Use innerHTML to set pets to an empty string. This will clear your list whenever showPets is run, so that you can update it with fresh info.
const showPets = function (petArray) {
  pets.innerHTML = "";
  //still in the showPets function, use a for...of loop to loop over the petArray.
  for (let pet of petArray) {
    //In the for...of loop, declare a variable called status with a value of “ready to play!”. Hint: Use let to declare the status variable because you’ll be reassigning the value.
    let status = "ready to play!";
    //Below the status variable and inside the for...of loop, write an if statement to check if the pet’s isTired property is greater or equal to 7. If so, change the value of the status variable to “sleeping”.
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    //Below the if statement, but still in the for...of loop, declare a variable li for a list. In the value, create a list element using document.createElement.
    let li = document.createElement("li");
    //Use innerHTML to add the pet name, species, and status to the list item like: <name> the <species> is <status>. Replace <name> and <species> with the pet’s name and species. Replace <status> with the status variable.
    li.innerHTML = `${pet.name} the ${pet.species} is ${status}.`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
