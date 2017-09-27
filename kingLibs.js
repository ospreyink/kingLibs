// Random Words

var activity = [null, "playing dress up", "huffing paint", "bowling", "masturbating", "drinking tea", "coding", "painting", "ball room dancing", "fishing"]
var noun = [null, "lunch box", "Corvette", "puppy", "bowl of soup", "Cheese Doodle", "saxophone", "TV series", "Tupperware", "enema"]
var place = [null, "WalMart", "a bowling alley", "the bathroom", "Lake Titicaca", "the North Pole", "the bottom of the ocean", "the Moon", "Trump's pants", "Hell"]
var nounPl = [null, "websites", "nacho cheese dip", "farts", "Post It notes", "fingernails", "beer bottles", "marigolds", "car seats", "library books"]
var adjective = [null, "saucy", "bumpy", "slippery", "salty", "furry", "lice-infested", "flame-retardant", "difficult", "wet"]
var emotion = [null, "horny", "devious", "dim-witted", "hungover", "gleeful", "lazy", "envious", "ashamed", "indignant"]
var verbPastTense = [null, "aborted", "panhandled", "drank", "hitchhiked", "poured", "farted", "moisturized", "bathed", "snowboarded"]


// Selectors

var randomizeAllButton = document.querySelector("#randomizeAllButton");
var go = document.querySelector("#go");
var storyDisplay = document.querySelector("#story");

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
	var x = Math.floor((Math.random() * 9) + 1);;
	adj1.textContent = adjective[x];
	adj1Input.value = adjective[x];
});

nounPl1RandomButton.addEventListener("click", function(){  
	var x = Math.floor((Math.random() * 9) + 1);;
	nounPl1.textContent = nounPl[x];
	nounPl1Input.value = nounPl[x];
});

verbPastTenseRandomButton.addEventListener("click", function(){  
	var x = Math.floor((Math.random() * 9) + 1);;
	verbPastTense1.textContent = verbPastTense[x];
	verbPastTenseInput.value = verbPastTense[x];
});

noun1RandomButton.addEventListener("click", function(){  
	var x = Math.floor((Math.random() * 9) + 1);;
	noun1.textContent = noun[x];
	noun1Input.value = noun[x];
});

adj2RandomButton.addEventListener("click", function(){  
	var x = Math.floor((Math.random() * 9) + 1);;
	adj2.textContent = adjective[x];
	adj2Input.value = adjective[x];
});

nounPl2RandomButton.addEventListener("click", function(){  
	var x = Math.floor((Math.random() * 9) + 1);;
	nounPl2.textContent = nounPl[x];
	nounPl2Input.value = nounPl[x];
});

emotionRandomButton.addEventListener("click", function(){  
	var x = Math.floor((Math.random() * 9) + 1);;
	emotion1.textContent = emotion[x];
	emotionInput.value = emotion[x];
});

noun2RandomButton.addEventListener("click", function(){  
	var x = Math.floor((Math.random() * 9) + 1);;
	noun2.textContent = noun[x];
	noun2Input.value = noun[x];
});

placeRandomButton.addEventListener("click", function(){  
	var x = Math.floor((Math.random() * 9) + 1);;
	place1.textContent = place[x];
	placeInput.value = place[x];
});

activityRandomButton.addEventListener("click", function(){  
	var x = Math.floor((Math.random() * 9) + 1);;
	activity1.textContent = activity[x];
	activityInput.value = activity[x];
});

// Randomize All Button

randomizeAllButton.addEventListener("click", function(){
	 
		var x = Math.floor((Math.random() * 9) + 1);;
		adj1.textContent = adjective[x];
		adj1Input.value = adjective[x];

		var x = Math.floor((Math.random() * 9) + 1);;
		nounPl1.textContent = nounPl[x];
		nounPl1Input.value = nounPl[x];
 
		var x = Math.floor((Math.random() * 9) + 1);;
		verbPastTense1.textContent = verbPastTense[x];
		verbPastTenseInput.value = verbPastTense[x];
	
		var x = Math.floor((Math.random() * 9) + 1);;
		noun1.textContent = noun[x];
		noun1Input.value = noun[x];

		var x = Math.floor((Math.random() * 9) + 1);;
		adj2.textContent = adjective[x];
		adj2Input.value = adjective[x];
	
		var x = Math.floor((Math.random() * 9) + 1);;
		nounPl2.textContent = nounPl[x];
		nounPl2Input.value = nounPl[x];
	
		var x = Math.floor((Math.random() * 9) + 1);;
		emotion1.textContent = emotion[x];
		emotionInput.value = emotion[x];
	
		var x = Math.floor((Math.random() * 9) + 1);;
		noun2.textContent = noun[x];
		noun2Input.value = noun[x];
	
		var x = Math.floor((Math.random() * 9) + 1);;
		place1.textContent = place[x];
		placeInput.value = place[x];
	
		var x = Math.floor((Math.random() * 9) + 1);;
		activity1.textContent = activity[x];
		activityInput.value = activity[x];

});

// Generate Story Button

go.addEventListener("click", function(){
	storyDisplay.classList.toggle("hidden");
});
