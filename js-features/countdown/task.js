let counter = 5;
function timer() {
    document.getElementById("timer").textContent = counter;
    counter--;
    if (counter < -1) {
        alert('Вы победили в конкурсе!')
        clearInterval(id);
    }
}
let id = setInterval(timer, 1000)
timer()