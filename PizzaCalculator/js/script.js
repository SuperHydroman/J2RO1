//Gideon van den Herik | Opdracht: Pizza Calculator v2.0

const sm_pizza = document.getElementById("pizza-small");
const md_pizza = document.getElementById("pizza-medium");
const lg_pizza = document.getElementById("pizza-large");

function checkInputs() {
	if (sm_pizza.value != "" && md_pizza.value != "" && lg_pizza.value != "") {
		console.log(sm_pizza.value, md_pizza.value, lg_pizza.value);
	}
	else {
		console.log("TEST2");
	}
}

function getValue(id, newVal) {
	console.log("Value of input " + id + " has changed, it changed to: " + newVal);	
}

