class NegociacaoController {
  #inputData;
  #inputQuantidade;
  #inputValor;
  #listaNegociacoes;
  #negociacoesView;

  constructor() {
    let $ = document.querySelector.bind(document);
    this.#inputData = $('#data');
    this.#inputQuantidade = $('#quantidade');
    this.#inputValor = $('#valor');
    this.#listaNegociacoes = new ListaNegociacoes();
    this.#negociacoesView = new NegociacaoView($('#negociacoesView'));
    this.#negociacoesView.update(this.#listaNegociacoes);
  }

  adiciona(event) {    
    event.preventDefault();

    let negociacao = this.#criaNegociacao();

    this.#listaNegociacoes.adiciona(negociacao);
    this.#negociacoesView.update(this.#listaNegociacoes);
    this.#limpaFormulario();
  }

  #criaNegociacao() {
    let data = this.#inputData.value.split("-");

    return new Negociacao(
      data, //this.#inputData.value,
      this.#inputQuantidade.value,
      this.#inputValor.value
    )
  }
  
  #limpaFormulario() {
    this.#inputData.value = '';
    this.#inputQuantidade.value = 1;
    this.#inputValor.value = 0.0;
    this.#inputData.focus();
  }
}
