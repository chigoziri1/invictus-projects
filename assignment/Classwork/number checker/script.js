let inpu = document.querySelector('input');
const checkButton = document.querySelector('button');
let container = document.querySelector('.listcon')
const info = document.querySelector('.info')
const clear = document.querySelector('.clear')

let n
checkButton.addEventListener('click', () => {
	let number = parseInt(inpu.value);
	n = number
	if (isNaN(number)) {
		alert('provide a number');
	}

	info.classList.add('hide')
	
	let num; 
	for (let i = 1; i <= number; i++) {
		num = document.createElement('span');
		num.innerText = i;
		num.setAttribute('class', 'num')
		container.append(num)
		if (i % 2 === 0) {
			num.classList.add('even')
		} else {
			num.classList.add('odd')
		}
	}
	inpu.value = "";
	
})

clear.addEventListener('click', () => {
	const spans = document.querySelectorAll('.num')

	for(let i = 0; i < n; i++){
		spans[i].remove()
		info.classList.remove('hide')
	}
})
