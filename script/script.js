'use strict'

// Create a constructor function as a template for animals I want to create
// constructor takes one parameter of animalName and assigns it to the property animalName
function Animal(animalName) {
  this.animalName = animalName;
}

// render tells the specific animal to put itself on the screen
Animal.prototype.render = function() {
  console.log("this function has been called")
  let animalDiv = document.createElement('div');
  animalDiv.className = `${this.animalName}Object`;
  animalDiv.textContent = this.animalName;
  let animalSection = document.querySelector(`#${this.animalName}Section`)
  animalSection.appendChild(animalDiv);
}

//make cat

let makeCatButton = document.getElementById('makeCat');
makeCatButton.addEventListener('click', goMakeCat)
function goMakeCat() {
  console.log('cat was clicked')
  let cat = new Animal('cat');
  cat.render();
}
//make dog
let makeDogButton = document.getElementById('makeDog');
makeDogButton.addEventListener('click', goMakeDog)
function goMakeDog() {
  console.log('dog was clicked')
  let dog = new Animal('dog');
  dog.render();
}

// make horse

let makeHorseButton = document.getElementById('makeHorse');
makeHorseButton.addEventListener('click', goMakeHorse)
function goMakeHorse() {
  console.log('horse was clicked')
  let horse = new Animal('horse');
  horse.render();
}

// make sheep

let makeSheepButton = document.getElementById('makeSheep');
makeSheepButton.addEventListener('click', goMakeSheep)

function goMakeSheep() {
  console.log('sheep was clicked')
  let sheep = new Animal('sheep');
  sheep.render();
}




