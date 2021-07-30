function onlyOneAnswer(){
    const myFavDino = 'tyrannosaurus rex'
    const guess = 5
    for(let i = 0; i <= guess; i++){
        let numOfGuess = (guess - i)
        let yourFavDino = prompt('Please enter your favorite dinosaur. You have '+ numOfGuess + ' guesses left.')
        if(yourFavDino.toLowerCase() === myFavDino){
            alert('Ah, another person of culture I see!')
            break;
        } else if(numOfGuess === 0){
            alert('Welp... I tried.')
        } else {
            alert('Yea...No... Your favorite dinosaur is a tyrannosaurus rex. Try again.')
        }
    }
};

onlyOneAnswer();

function notDino(){
    let yugioh = prompt('Enter the number of times you want to be banished to the shadow realm.')
    for(let i = 0; i < yugioh; i++){
        document.write('<img src="https://ms.yugipedia.com//8/87/BlueEyesUltimateDragon-LDS2-EN-UR-1E.png">')
    }
}


// if (yourFavDino.toLowerCase() !== myFavDino) {hell
//     alert('The Tyrannosaurus Rex is much cooler... but you can come in anyway.');
// } else {
//     alert('Good choice!');
// }