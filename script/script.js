'use strict'

// Create a constructor function as a template for animals I want to create
// constructor takes one parameter of animalName and assigns it to the property animalName
function Animal(animalName) {
  this.animalName = animalName;
}

// render tells the specific animal to put itself on the screen
Animal.prototype.render = function() {
  // what does this declaration do?
  let animalDiv = document.createElement('div');
  // what is this next line doing?
  animalDiv.className = `${this.animalName}Object`;
  // what is this next line doing?
  animalDiv.textContent = this.animalName;
  let animalSection = document.querySelector(`#${this.animalName}Section`)
  animalSection.appendChild(animalDiv);
}

//make cat
//document
let makeCatButton = document.getElementById('makeCat');
//document
makeCatButton.addEventListener('click', goMakeCat)
//document
function goMakeCat() {
  // document
  let cat = new Animal('cat');
  // document
  cat.render();
}
//make dog
let makeDogButton = document.getElementById('makeDog');
makeDogButton.addEventListener('click', goMakeDog)
function goMakeDog() {
  let dog = new Animal('dog');
  dog.render();
}

// make horse

let makeHorseButton = document.getElementById('makeHorse');
makeHorseButton.addEventListener('click', goMakeHorse)
function goMakeHorse() {
  let horse = new Animal('horse');
  horse.render();
}

// make sheep

let makeSheepButton = document.getElementById('makeSheep');
makeSheepButton.addEventListener('click', goMakeSheep)

function goMakeSheep() {
  let sheep = new Animal('sheep');
  sheep.render();
}