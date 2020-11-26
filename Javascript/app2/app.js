var altura = 0;
var largura = 0;

function ajustaTamanhoPalcoJogo() {

	altura = window.innerHeight;
	largura = window.innerWidth;
	console.log(largura, altura);

}

ajustaTamanhoPalcoJogo();

function randomPosition() {

	// remover o mosquito anterior (se existir)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove();	
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