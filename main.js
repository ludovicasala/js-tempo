/************************** LOADING *****************************/

// Il <div> della pagina che funge da progress-bar
const progressBar = document.getElementById("progress");

// Il titolo di questa sezione (Loading...)
const title = document.getElementById("loading-title");

let ogniTot = 100;
let progressoCrescita = 0;

progressBar.style.width = progressoCrescita + "%";

const timer = setInterval(gestisciTempo, ogniTot);

function gestisciTempo() {
	if (progressoCrescita < 100) {
		progressoCrescita++;
		progressBar.style.width = progressoCrescita + "%";
	} else {
		clearInterval(timer);
		title.innerHTML = "Caricamento completato";
	}

	console.log(progressoCrescita + "%");
}

/************************ CRONOMETRO ****************************/

// Lo <span> della pagina in cui scrivere il tempo
const tempoAttuale = document.getElementById("cronometro");

// I tre bottoni del cronometro
const btnPlay = document.getElementById("play-btn");
const btnStop = document.getElementById("stop-btn");
const btnReset = document.getElementById("reset-btn");

//Gestisco gli eventi

let timerPlay = null;
let tempoTrascorso;
let contatore = 0;

btnPlay.addEventListener("click", function () {

	tempoTrascorso = setInterval(function () {
		document.getElementById("cronometro").innerHTML = timerPlay;
		timerPlay++;
	}, 100);

	btnPlay.disabled = true;
	btnStop.disabled = false;
	btnReset.disabled = true;

	console.log(`Tempo trascorso: ${tempoTrascorso}`);
});

btnStop.addEventListener("click", function () {

	clearInterval(tempoTrascorso);

	btnPlay.disabled = false;
	btnStop.disabled = true;
	btnReset.disabled = false;

	console.log(`Premuto Stop!`);
});

btnReset.addEventListener("click", function () {
	clearInterval(tempoTrascorso);
	tempoTrascorso = null;

	contatore = 0;
	document.getElementById("cronometro").innerHTML = contatore;

	btnPlay.disabled = false;
	btnStop.disabled = true;
	btnReset.disabled = false;

	console.log(`Premuto Reset!`);
});