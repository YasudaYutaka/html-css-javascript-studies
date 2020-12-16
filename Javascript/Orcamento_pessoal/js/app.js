class Despesa {
	constructor(ano, mes, dia, tipo, descricao, valor) {
		this.ano = ano;
		this.mes = mes;
		this.dia = dia;
		this.tipo = tipo;
		this.descricao = descricao;
		this.valor = valor;
	}

	validarDados() {
		for(let i in this) {
			if(this[i] == undefined || this[i] == '' || this[i] == null) {
				return false;
			}
		}
		return true;
	}
}

class Bd {

	constructor() {
		let id = localStorage.getItem('id');
		if(id === null) {
			localStorage.setItem('id', 0);
		}
	}

	getNextId() {
		let nextId = localStorage.getItem('id');
		return parseInt(nextId) + 1;
	}

	gravar(d) {
		let id = this.getNextId();
		localStorage.setItem(id, JSON.stringify(d));
		localStorage.setItem('id', id);
	}

	recuperarTodosRegistros() {
		let despesas = Array();
		let id = localStorage.getItem('id');
		for(let i = 1; i <= id; i++) { // recuperar todas despesas do localStorage
			//recuperar despesa
			let despesa = JSON.parse(localStorage.getItem(i));
			//verificar se tem indices removidos/pulados
			if(despesa === null) {
				continue;
			}
			despesas.push(despesa);
		}
		return despesas;
	}

}

let bd = new Bd();

function cadastrarDespesa() {

	let ano = document.getElementById('ano');
	let mes = document.getElementById('mes');
	let dia = document.getElementById('dia');
	let tipo = document.getElementById('tipo');
	let descricao = document.getElementById('descricao');
	let valor = document.getElementById('valor');

	let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value);

	if(despesa.validarDados()) {
		bd.gravar(despesa);	
		document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso';
		document.getElementById('modal_titulo_div').className = 'modal-header text-success';
		document.getElementById('modal_descricao').innerHTML = 'Despesa foi cadastrada com sucesso!';
		document.getElementById('modal_botao').innerHTML = 'Voltar';
		document.getElementById('modal_botao').className = 'btn btn-success';
		$('#modalRegistraDespesa').modal('show');
	} else {
		document.getElementById('modal_titulo').innerHTML = 'Erro na gravação';
		document.getElementById('modal_titulo_div').className = 'modal-header text-danger';
		document.getElementById('modal_descricao').innerHTML = 'Existem campos obrigatórios que não foram preenchidos corretamente';
		document.getElementById('modal_botao').innerHTML = 'Voltar e corrigir';
		document.getElementById('modal_botao').className = 'btn btn-danger';
		$('#modalRegistraDespesa').modal('show');
	}

}

function carregaListaDespesa() {

	let despesas = Array();
	despesas = bd.recuperarTodosRegistros();

	// selecionando elemento tbody da tabela
	let listaDespesas = document.getElementById('listaDespesas');

	// percorrer array despesas, listando os elementos de forma dinâmica
	despesas.forEach(function(d) {

		// criando o tr (linha)
		let linha = listaDespesas.insertRow();
		// criar o td (coluna)
		linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`;

		
		// ajustar tipo
		switch(d.tipo) {
			case '1':
				d.tipo = 'Alimentação';
				break;
			case '2':
				d.tipo = 'Educação';
				break;	
			case '3':
				d.tipo = 'Lazer';
				break;
			case '4':
				d.tipo = 'Saúde';
				break;
			case '5':
				d.tipo = 'Transporte';
				break;		
		}
		linha.insertCell(1).innerHTML = d.tipo;

		linha.insertCell(2).innerHTML = d.descricao;
		linha.insertCell(3).innerHTML = d.valor;

	})

}
