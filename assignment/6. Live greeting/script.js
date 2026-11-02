const input = document.querySelector('input');
let display = document.querySelector('p');

input.addEventListener('input', () => {
	if (input.value === '') {
		display.innerText = 'Hello, stranger!'
	} else {
		display.innerText = 'Hello, ' + input.value + '!';
	}
})