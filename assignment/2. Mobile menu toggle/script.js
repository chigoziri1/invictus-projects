const menu = document.querySelector('.menu')
const smallmenu = document.querySelector('.smallmenu');

menu.addEventListener('click', function () {
	smallmenu.classList.toggle('hide')
}) 