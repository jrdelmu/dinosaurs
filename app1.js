let favoriteDino = prompt('What is your favorite Dinosaur?')

function oneAnswer(){
if (favoriteDino.toLowerCase() !== 'tyrannosaurus rex') {
    alert('The Tyrannosaurus Rex is much cooler... but you can come in anyway.');
} else {
    alert('Good choice!');
}
};

oneAnswer();