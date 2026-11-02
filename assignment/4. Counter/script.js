const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const resetButton = document.querySelector('.reset');
const display = document.querySelector('p')

let count = 0;

function checker(){
	plusButton.addEventListener('click', function () {
		count = count + 1
		display.textContent = count;

		if (count > 0) {
			display.style.color = 'green'
		} else if (count < 0) {
			display.style.color = 'red'
		} else {
			display.style.color = 'white'
		}
	})

	minusButton.addEventListener('click', function () {
		count = count - 1
		display.textContent = count;

		if (count > 0) {
			display.style.color = 'green'
		} else if (count < 0) {
			display.style.color = 'red'
		} else {
			display.style.color = 'white'
		}
	})

	resetButton.addEventListener('click', function () {
		count = 0
		display.textContent = count;

		if (count > 0) {
			display.style.color = 'green'
		} else if (count < 0) {
			display.style.color = 'red'
		} else {
			display.style.color = 'white'
		}
	})
}

checker()