// Не верное решение:
// let counter = 5;
// function timer() {
//     document.getElementById("timer").textContent = counter;
//     counter--;
//     if (counter < -1) {
//         alert('Вы победили в конкурсе!')
//         clearInterval(id);
//     }
// }
// let id = setInterval(timer, 1000)
// timer()

// Верное решение
let counter = 5;
function timer() {
    if (counter < 0) {
        alert('Вы победили в конкурсе!')
        clearInterval(id);
    } else {
		document.getElementById("timer").textContent = counter;
		counter--;
	}
}   
let id = setInterval(timer, 1000)
timer()