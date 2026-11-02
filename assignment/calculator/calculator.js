
const display = document.querySelector('.display')
const equalBtn = document.querySelector('.eqBtn')

document.querySelectorAll('.btnDiv').forEach(btn => {
	btn.addEventListener('click', e => {
		if (e.target.matches('.btn')) {
			// console.log(e.target);
			display.textContent += e.target.innerHTML;
			console.log(e.target.textContent)
		} else if (e.target.matches('.clBtn')) {
			console.log('clicked')
			display.textContent = '';
		} else if (e.target.matches('.eqBtn')){
			// e.target.closest(display.textContent).remove();
			
		} else if(e.target.matches('.op')){
			display.textContent += ' ' + e.target.innerHTML + ' ';
		}
	})
}) 
