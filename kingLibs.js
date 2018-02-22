// Random Words

var activity = ["playing dress up", "huffing paint", "bowling", "romantic walks on the beach", "drinking tea", "javaScript coding", "painting", "ball room dancing", "fishing"]
var noun = ["lunch box", "Corvette", "puppy", "bowl of soup", "Cheese Doodle", "saxophone", "TV series", "Tupperware", "sock monkey"]
var place = ["WalMart", "a bowling alley", "the bathroom", "Lake Titicaca", "the North Pole", "the bottom of the ocean", "the Moon", "Trump's pants", "a haunted house"]
var nounPl = ["websites", "nacho cheese dip", "blue footed boobies", "Post It notes", "fingernails", "beer bottles", "marigolds", "car seats", "library books"]
var adjective = ["saucy", "bumpy", "slippery", "salty", "furry", "lice-infested", "flame-retardant", "difficult", "wet"]
var emotion = ["peevish", "devious", "dim-witted", "hungover", "gleeful", "lazy", "envious", "ashamed", "enthusiastic"]
var verbPastTense = ["detected", "panhandled", "drank", "hitchhiked", "poured", "wasted", "moisturized", "bathed", "snowboarded"]


// Selectors

var randomizeAllButton = document.querySelector("#randomizeAllButton");
var go = document.querySelector("#go");
var storyDisplay = document.querySelector("#story");
var reset = document.querySelector("#reset");

var adj1Input = document.querySelector("#adj1Input");
var nounPl1Input = document.querySelector("#nounPl1Input");
var verbPastTenseInput = document.querySelector("#verbPastTenseInput");
var noun1Input = document.querySelector("#noun1Input");
var adj2Input = document.querySelector("#adj2Input");
var nounPl2Input = document.querySelector("#nounPl2Input");
var emotionInput = document.querySelector("#emotionInput");
var noun2Input = document.querySelector("#noun2Input");
var placeInput = document.querySelector("#placeInput");
var activityInput = document.querySelector("#activityInput");

var adj1RandomButton = document.querySelector("#adj1RandomButton");
var nounPl1RandomButton = document.querySelector("#nounPl1RandomButton");
var verbPastTenseRandomButton = document.querySelector("#verbPastTenseRandomButton");
var noun1RandomButton = document.querySelector("#noun1RandomButton");
var adj2RandomButton = document.querySelector("#adj2RandomButton");
var nounPl2RandomButton = document.querySelector("#nounPl2RandomButton");
var emotionRandomButton = document.querySelector("#emotionRandomButton");
var noun2RandomButton = document.querySelector("#noun2RandomButton");
var placeRandomButton = document.querySelector("#placeRandomButton");
var activityRandomButton = document.querySelector("#activityRandomButton");

// Manual Input

adj1Input.addEventListener("change", function(){
	adj1.textContent = adj1Input.value;
});

nounPl1Input.addEventListener("change", function(){
	nounPl1.textContent = nounPl1Input.value;
});

verbPastTenseInput.addEventListener("change", function(){
	verbPastTense1.textContent = verbPastTenseInput.value;
});

noun1Input.addEventListener("change", function(){
	noun1.textContent = noun1Input.value;
});

adj2Input.addEventListener("change", function(){
	adj2.textContent = adj2Input.value;
});

nounPl2Input.addEventListener("change", function(){
	nounPl2.textContent = nounPl2Input.value;
});

emotionInput.addEventListener("change", function(){
	emotion1.textContent = emotionInput.value;
});

noun2Input.addEventListener("change", function(){
	noun2.textContent = noun2Input.value;
});

placeInput.addEventListener("change", function(){
	place1.textContent = placeInput.value;
});

activityInput.addEventListener("change", function(){
	activity1.textContent = activityInput.value;
});

// Random Input

adj1RandomButton.addEventListener("click", function(){  
	var x = Math.floor(Math.random() * adjective.length);
	adj1.textContent = adjective[x];
	adj1Input.value = adjective[x];
});

nounPl1RandomButton.addEventListener("click", function(){  
	var x = Math.floor(Math.random() * nounPl.length);
	nounPl1.textContent = nounPl[x];
	nounPl1Input.value = nounPl[x];
});

verbPastTenseRandomButton.addEventListener("click", function(){  
	var x = Math.floor(Math.random() * verbPastTense.length);
	verbPastTense1.textContent = verbPastTense[x];
	verbPastTenseInput.value = verbPastTense[x];
});

noun1RandomButton.addEventListener("click", function(){  
	var x = Math.floor(Math.random() * noun.length);
	noun1.textContent = noun[x];
	noun1Input.value = noun[x];
});

adj2RandomButton.addEventListener("click", function(){  
	var x = Math.floor(Math.random() * adjective.length);
	adj2.textContent = adjective[x];
	adj2Input.value = adjective[x];
});

nounPl2RandomButton.addEventListener("click", function(){  
	var x = Math.floor(Math.random() * nounPl.length);
	nounPl2.textContent = nounPl[x];
	nounPl2Input.value = nounPl[x];
});

emotionRandomButton.addEventListener("click", function(){  
	var x = Math.floor(Math.random() * emotion.length);
	emotion1.textContent = emotion[x];
	emotionInput.value = emotion[x];
});

noun2RandomButton.addEventListener("click", function(){  
	var x = Math.floor(Math.random() * noun.length);
	noun2.textContent = noun[x];
	noun2Input.value = noun[x];
});

placeRandomButton.addEventListener("click", function(){  
	var x = Math.floor(Math.random() * place.length);
	place1.textContent = place[x];
	placeInput.value = place[x];
});

activityRandomButton.addEventListener("click", function(){  
	var x = Math.floor(Math.random() * activity.length);
	activity1.textContent = activity[x];
	activityInput.value = activity[x];
});

// Randomize All Button

randomizeAllButton.addEventListener("click", function(){

	var x = Math.floor(Math.random() * adjective.length);
	adj1.textContent = adjective[x];
	adj1Input.value = adjective[x];

	var x = Math.floor(Math.random() * nounPl.length);
	nounPl1.textContent = nounPl[x];
	nounPl1Input.value = nounPl[x];

	var x = Math.floor(Math.random() * verbPastTense.length);
	verbPastTense1.textContent = verbPastTense[x];
	verbPastTenseInput.value = verbPastTense[x];

	var x = Math.floor(Math.random() * noun.length);
	noun1.textContent = noun[x];
	noun1Input.value = noun[x];

	var x = Math.floor(Math.random() * adjective.length);
	adj2.textContent = adjective[x];
	adj2Input.value = adjective[x];

	var x = Math.floor(Math.random() * nounPl.length);
	nounPl2.textContent = nounPl[x];
	nounPl2Input.value = nounPl[x];

	var x = Math.floor(Math.random() * emotion.length);
	emotion1.textContent = emotion[x];
	emotionInput.value = emotion[x];

	var x = Math.floor(Math.random() * noun.length);
	noun2.textContent = noun[x];
	noun2Input.value = noun[x];

	var x = Math.floor(Math.random() * place.length);
	place1.textContent = place[x];
	placeInput.value = place[x];

	var x = Math.floor(Math.random() * activity.length);
	activity1.textContent = activity[x];
	activityInput.value = activity[x];

});

// Generate Story & Reset Buttons
var isStoryDisplayed = false;

go.addEventListener("click", function(){
	storyDisplay.classList.toggle("hidden");
	isStoryDisplayed = !isStoryDisplayed;
});

reset.addEventListener("click", function(){
	if(isStoryDisplayed === true){
		storyDisplay.classList.toggle("hidden");
		isStoryDisplayed = !isStoryDisplayed;
	};
	adj1.textContent = null;
	adj1Input.value = null;
	nounPl1.textContent = null;
	nounPl1Input.value = null;
	verbPastTense1.textContent = null;
	verbPastTenseInput.value = null;
	noun1.textContent = null;
	noun1Input.value = null;
	adj2.textContent = null;
	adj2Input.value = null;
	nounPl2.textContent = null;
	nounPl2Input.value = null;
	emotion1.textContent = null;
	emotionInput.value = null;
	noun2.textContent = null;
	noun2Input.value = null;
	place1.textContent = null;
	placeInput.value = null;
	activity1.textContent = null;
	activityInput.value = null;
});