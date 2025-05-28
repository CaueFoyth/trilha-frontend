/*************  ✨ Windsurf Command 🌟  *************/
class Game{
    static #generateRandomNumber(){
        return Math.floor(Math.random() * 5) + 1;
    }

    static play(number){
        const randomNumber = this.#generateRandomNumber();
        console.log(`Resultado do jogo: ${randomNumber}`);
        
        number === randomNumber ? console.log("Parabéns, você ganhou!") : console.log("Que pena, você perdeu!");
    }
}

let number = 3;
Game.play(number);
