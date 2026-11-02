const button = document.querySelector('button');
const heading = document.querySelector('h3');

button.addEventListener('click', () => {
	heading.textContent = "You clicked the button!"
})