const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener('click', function () {
	body.classList.toggle('dark')

	if (body.classList.contains('dark')) {
		button.textContent = "Light Mode";	
		button.style.color = 'White'
		button.style.backgroundColor = 'gray'
		body.style.backgroundColor = 'black'
		body. style.color = 'white';
	} else{
		button.textContent = "Dark Mode";
		button.style.backgroundColor = '#ff43';
		button.style.color = 'black';
		body.style.backgroundColor = 'white';	
		body. style.color = 'black';
	}

	 
})