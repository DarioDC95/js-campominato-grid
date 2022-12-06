function createSquare(ind) {
    let squareDiv = document.createElement('div');
    squareDiv.className = 'square';
    squareDiv.innerText = ind;
    return squareDiv;
}

// Definiamo il pulsante di play
let button_play = document.getElementById('play');
button_play.addEventListener('click', function(){

    // richiamo la funzione e incollo i div nel contenitore
    for (let i = 1; i <= 100; i++) {
        let containerSquare = document.getElementById('container-div')
        let divSquare = createSquare(i);

        // aggiungere il background azzurro quando clicco sul quadrato
        divSquare.addEventListener('click', function(){
            this.classList.add('lightblue');
            console.log(this.innerText);
        })

        // incollo il quadrato nel suo container
        containerSquare.append(divSquare);
    }
})
