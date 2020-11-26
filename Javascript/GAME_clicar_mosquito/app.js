var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 20;

var mosquitoGenerationTime = 1500;

var difficulty = window.location.search;
difficulty = difficulty.replace('?', '');

if (difficulty === 'normal') {
	//1,5s
	mosquitoGenerationTime = 1500;
} else if(difficulty === 'hard') {
	//1s
	mosquitoGenerationTime = 1000;
} else if(difficulty === 'hardcore') {
	// 0,75s
	mosquitoGenerationTime = 750;
}

function ajustaTamanhoPalcoJogo() {

	altura = window.innerHeight;
	largura = window.innerWidth;
	console.log(largura, altura);

}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function() {

		tempo -= 1
		if(tempo < 0) {
			clearInterval(cronometro);
			clearInterval(generateMosquito);
			window.location.href = 'victory.html';
		} else {
			document.getElementById('cronometro').innerHTML = tempo;
		}

	}, 1000);

function randomPosition() {

	// remover o mosquito anterior (se existir) & controle de vida
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove();	

		if(vidas > 3) {
			window.location.href = 'game_over.html';
		} else {
			document.getElementById('vida' + vidas).src = "imagens/coracao_vazio.png";
			vidas++;
		}
	}
	
	var posicaoX = Math.floor(Math.random() * largura) - 90;
	var posicaoY = Math.floor(Math.random() * altura) - 90;

	if (posicaoX < 0) {
		posicaoX = 0;
	}
	if (posicaoY < 0) {
		posicaoY = 0;
	}

	console.log(posicaoX, posicaoY);

	// criar elemento HTML
	var mosquito = document.createElement('img');
	mosquito.src = 'imagens/mosca.png';
	mosquito.className = randomSize() + ' ' +randomSide();
	mosquito.style.left = posicaoX + 'px';
	mosquito.style.top = posicaoY + 'px';
	mosquito.style.position = 'absolute';
	mosquito.id = 'mosquito';
	mosquito.onclick = function() {
		this.remove();
	}

	document.body.appendChild(mosquito);

}

function randomSize() {

	var classeTamanhoMosquito = Math.floor(Math.random() * 3);

	switch(classeTamanhoMosquito) {
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}

}

function randomSide() {

	var classeLadoMosquito = Math.floor(Math.random() * 2);

	switch(classeLadoMosquito) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}

}