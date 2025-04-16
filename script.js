//your JS code here. If required.
const container = document.getElementById("container");

let count = 800;
for(let i=0;i<count;i++){
	let makeSquare = document.createElement('div');
	makeSquare.style.backgroundColor = 'rgb(29, 29, 29)';
	makeSquare.className = ("square");
	
	container.appendChild(makeSquare);
}
let elementArray = [...document.querySelectorAll('.square')];
elementArray.forEach((e)=>{
	e.addEventListener("mouseover",()=>{
		let r = Math.floor(Math.random()*(255-0+1))+0;
		let g = Math.floor(Math.random()*(255-0+1))+0;
		let b = Math.floor(Math.random()*(255-0+1))+0;
		let col = "rgb(" + r + "," + g + "," + b + ")";
		e.style.boxShadow =  "0 0 5px "+col;

		e.style.backgroundColor = col;
	})
})

// let square = document.querySelectorAll(".square");
// console.log(square)
elementArray.forEach((e)=>{
	e.addEventListener("mouseleave",()=>{
		e.style.background = 'rgb(29, 29, 29)'
		e.style.boxShadow = "none"
	})
})
