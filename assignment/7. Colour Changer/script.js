let buttons = document.querySelectorAll('button');
let body = document.querySelector("body");
let colors = ["red", "green", "blue", "yellow", "orange", "purple"];

// buttons.forEach(btn => {
// 	btn.style.backgroundColor = btn.textContent.toLowerCase();
// 	// if(btn.textContent === "Yellow") btn.style.color = "white";
// 	if(btn.textContent === "Random") btn.style.backgroundColor = "white";

// 	btn.addEventListener("click", () => {
// 		if (btn.textContent === "Random") { 
// 			let randomColor = colors[Math.floor(Math.random() * colors.length)];
// 			document.body.style.backgroundColor = randomColor;
// 		} else {
// 			document.body.style.backgroundColor = btn.textContent.toLowerCase();
// 		}
// 	})
// })


buttons.forEach(btn => {

 btn.addEventListener('click', () => {
	if (btn.textContent === 'Red') {
		body.style.backgroundColor = 'red';
		btn.style.backgroundColor = 'red'
	} else if (btn.textContent === 'Green'){
		body.style.backgroundColor = 'green';
		btn.style.backgroundColor = 'green'
	
	}  else if (btn.textContent === 'Blue'){
		body.style.backgroundColor = 'blue';
		btn.style.backgroundColor = 'blue'

	}  else if (btn.textContent === 'Yellow'){
		body.style.backgroundColor = 'yellow';
		btn.style.backgroundColor = 'yellow'
		
	}  else if (btn.textContent === 'Random'){
		body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
		// btn.textContent = body.style.backgroundColor;
		btn.style.backgroundColor = body.style.backgroundColor;
		
	}
 })
 
})