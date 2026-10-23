/************************** LOADING *****************************/

// Il <div> della pagina che funge da progress-bar
const progressBar = document.getElementById("progress");

// Il titolo di questa sezione (Loading...)
const title = document.getElementById("loading-title");


/************************ CRONOMETRO ****************************/

// Lo <span> della pagina in cui scrivere il tempo
const tempoAttuale = document.getElementById("cronometro");

// I tre bottoni del cronometro
const btnPlay = document.getElementById("play-btn");
const btnStop = document.getElementById("stop-btn");
const btnReset = document.getElementById("reset-btn");

//Gestisco gli eventi
btnPlay.addEventListener("click", function () {
	console.log("Premuto Play!");
});

btnStop.addEventListener("click", function () {
	console.log("Premuto Stop!");
});

btnReset.addEventListener("click", function () {
	console.log("Premuto Reset!");
});