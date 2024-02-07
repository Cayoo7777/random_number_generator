function generateRandomNumber() {
    const initNumber = document.getElementById("initNumber").value;
    const lesttNumber = document.getElementById("lesttNumber").value;

    function sortNumb(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }

    const randomNumber = sortNumb(parseInt(initNumber), parseInt(lesttNumber));
    alert("Númeoro sorteado: " + randomNumber);
}
