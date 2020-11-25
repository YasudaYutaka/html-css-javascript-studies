var altura = 0;
var largura = 0;

function ajustaTamanhoPalcoJogo() {

	altura = window.innerHeight;
	largura = window.innerWidth;
	console.log(largura, altura);

}

ajustaTamanhoPalcoJogo();

function randomPosition() {

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
	mosquito.className = 'mosquito1';
	mosquito.style.left = posicaoX + 'px';
	mosquito.style.top = posicaoY + 'px';
	mosquito.style.position = 'absolute';

	document.body.appendChild(mosquito);

}