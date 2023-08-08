var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomGradient() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

button.addEventListener("click", function() {
	color1.value = randomGradient();
	color2.value = randomGradient();
	setGradient();
})

// Set the gradient and displayed CSS background text on page load
setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);