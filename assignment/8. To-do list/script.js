let input = document.querySelector('input');
let addButton = document.querySelector('button');
let listDisplay = document.querySelector('ul');

// console.log(document.querySelector('ul'));

addButton.addEventListener('click', todoList);
		input.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				todoList();
			}
});


function todoList() {
	let text = input.value.trim();

	if (text === "") {
			return;
	}  

	let newLi = document.createElement('li');
	newLi.textContent = text;
	
	listDisplay.append(newLi);

	input.value = "";
	input.focus();

	listDisplay.addEventListener('dblclick', (e) => {
		if (e.target.tagName === 'LI') {
			e.target.remove();
		}
	});
}

todoList()