//Gideon van den Herik | Opdracht: Pizza Calculator v2.0

const container = document.getElementById("mainDIV");

const sm_pizza = document.getElementById("pizza-small");
const md_pizza = document.getElementById("pizza-medium");
const lg_pizza = document.getElementById("pizza-large");

const sm_pizza_price = 6.99;
const md_pizza_price = 8.49;
const lg_pizza_price = 10.99;

const pizzas = ["Kleine pizza (25cm)", "Medium pizza (30cm)", "Grote pizza (35cm)"]


var pizzaPrices = [sm_pizza_price, md_pizza_price, lg_pizza_price];
var amountOfRows = 0;
var answerDivCreated = false;

function checkInputs() {
	if (sm_pizza.value != "" && md_pizza.value != "" && lg_pizza.value != "") {
		console.log(sm_pizza.value, md_pizza.value, lg_pizza.value);
		createOutputField();
	}
	else {
		console.log("TEST2");
		// updateContent();
	}
}

function getValue(id, newVal) {
	console.log("Value of input " + id + " has changed, it changed to: " + newVal);	
	return newVal;
}

function createOutputField() {
	if (answerDivCreated != true) {
		let answerDiv = document.createElement("DIV");

		answerDiv.classList.add("row");
		answerDiv.id = "answerDiv";
		container.appendChild(answerDiv);

		createSidePanel("answerDiv", false);

		let centerPanel = document.createElement("DIV");

		centerPanel.classList.add("col-sm-8");
		centerPanel.id = "pizza-output";
		document.getElementById("answerDiv").appendChild(centerPanel);

		createOutputContent();
	}
}

function createOutputContent() {
	createSidePanel("answerDiv", false);
	createRows(1);

	createContent(pizzaPrices);

	answerDivCreated = true;
}

function createCenterPanel(name, Class) {
	let centerPanel = document.createElement("DIV");

	centerPanel.classList.add("col-sm-8");
	centerPanel.id = "center-panel";

	if (Class != true) {
		document.getElementById(name).appendChild(centerPanel);
	}
	else {
		document.getElementsByClassName(name)[0].appendChild(centerPanel);
	}
}

function createSidePanel(name, Class) {
	let sidePanel = document.createElement("DIV");

	sidePanel.classList.add("col-sm-2");

	if (Class != true) {
		document.getElementById(name).appendChild(sidePanel);
	}
	else {		
		document.getElementsByClassName(name)[0].appendChild(sidePanel);
	}
}

function createRows(amount) {
	for (var i = 1; i <= amount; i++) {
		amountOfRows++;

		let createRow = document.createElement("DIV");

		createRow.classList.add("row");
		createRow.classList.add("row-"+i);
		document.getElementById("pizza-output").appendChild(createRow);
		createEvenPanels(3);
	}
}

function createEvenPanels(amount) {
	for (var j = 1; j <= amount; j++) {
		let evenPanel = document.createElement("DIV");
		let classListing = ["left-panel", "middle-panel", "right-panel"]

		evenPanel.classList.add("col-sm-4");

		if (j == 1) {
			evenPanel.classList.add("left-panel");
		}
		else if (j == 2) {
			evenPanel.classList.add("middle-panel");
		}
		else {
			evenPanel.classList.add("right-panel");
		}

		document.getElementsByClassName("row-"+amountOfRows)[0].appendChild(evenPanel);
	}
}

function createContent(prices) {
	var pizzaValues = [sm_pizza.value, md_pizza.value, lg_pizza.value];

	pizzas.forEach(element => {
		let newPizzaText = document.createElement("P");
		
		newPizzaText.classList.add("pizza-text");
		newPizzaText.innerHTML = element;
		document.getElementsByClassName("left-panel")[0].appendChild(newPizzaText);	
	});

	for (var i = 1; i <= 3; i++) {
		let newPizzaAmountText = document.createElement("P");

		newPizzaAmountText.classList.add("pizza-amount");
		newPizzaAmountText.classList.add("pizza-amount-"+i);
		newPizzaAmountText.innerHTML = pizzaValues[i-1] + "x";
		document.getElementsByClassName("middle-panel")[0].appendChild(newPizzaAmountText);
	}

	for (var i = 1; i <= 3; i++) {
		let newPizzaPrice = document.createElement("P");
		let pizzaTotalPrice = prices[i-1] * pizzaValues[i-1];

		newPizzaPrice.classList.add("pizza-price");
		newPizzaPrice.classList.add("pizza-price-"+i);
		newPizzaPrice.innerHTML = "&euro;" + pizzaTotalPrice.toFixed(2);
		document.getElementsByClassName("right-panel")[0].appendChild(newPizzaPrice);
	}

	let newTotalText = document.createElement("P");
	let newTotalPriceText = document.createElement("P");
	let totalPrice = (prices[0] * sm_pizza.value) + (prices[1] * md_pizza.value) + (prices[2] * lg_pizza.value);

	newTotalText.innerHTML = "Totaal bedrag:";
	newTotalPriceText.innerHTML = "&euro;" + totalPrice.toFixed(2);
	document.getElementsByClassName("left-panel")[0].appendChild(newTotalText);
	document.getElementsByClassName("right-panel")[0].appendChild(newTotalPriceText);
}