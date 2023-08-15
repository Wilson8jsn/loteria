document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("playButton");
    const resultDisplay = document.getElementById("result");

    const animals = ["Perro", "Gato"];
    const minNumber = 1;
    const maxNumber = 2;

    playButton.addEventListener("click", function() {
        const randomAnimalIndex = Math.floor(Math.random() * animals.length);
        const randomNumberSequence = generateRandomNumberSequence(4, minNumber, maxNumber);
        
        const selectedAnimal = animals[randomAnimalIndex];
        const userNumberSequence = prompt("Ingresa una secuencia de 4 números entre 1 y 2 (por ejemplo, 1212):");

        let resultMessage = "";

        if (userNumberSequence === randomNumberSequence && selectedAnimal) {
            resultMessage = `¡Ganaste! El animal era ${selectedAnimal} y la secuencia numérica era ${randomNumberSequence}.`;
        } else if (selectedAnimal) {
            resultMessage = `Casi. Tenías el animal ${selectedAnimal}, pero la secuencia numérica era ${randomNumberSequence}. ¡Inténtalo de nuevo!`;
        } else if (userNumberSequence === randomNumberSequence) {
            resultMessage = `Casi. Tenías la secuencia numérica ${userNumberSequence}, pero no tenías el animal. ¡Inténtalo de nuevo!`;
        } else {
            resultMessage = "Game Over. No tenías el animal ni la secuencia numérica correcta. ¡Mejor suerte la próxima!";
        }

        resultDisplay.textContent = resultMessage;
    });1

    function generateRandomNumberSequence(length, min, max) {
        let sequence = "";
        for (let i = 0; i < length; i++) {
            const randomDigit = Math.floor(Math.random() * (max - min + 1)) + min;
            sequence += randomDigit;
        }
        return sequence;
    }
});
