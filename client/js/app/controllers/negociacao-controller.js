class NegociacaoController {
  #inputData;
  #inputQuantidade;
  #inputValor;
  #listaNegociacoes;
  #negociacoesView;
  #mensagem;
  #mensagemView;

  constructor() {
    let $ = document.querySelector.bind(document);
    this.#inputData = $('#data');
    this.#inputQuantidade = $('#quantidade');
    this.#inputValor = $('#valor');

    this.#listaNegociacoes = new ListaNegociacoes();    
    this.#negociacoesView = new NegociacaoView($('#negociacoes-view'));
    this.#negociacoesView.update(this.#listaNegociacoes);

    this.#mensagem = new Mensagem();
    this.#mensagemView = new MensagemView($('#mensagem-view'));
    this.#mensagemView.update(this.#mensagem);
  }

  adiciona(event) {    
    event.preventDefault();

    let negociacao = this.#criaNegociacao();

    this.#listaNegociacoes.adiciona(negociacao);
    this.#negociacoesView.update(this.#listaNegociacoes);
    this.#mensagem.texto = 'Negociação adicionada com sucesso';
    this.#mensagemView.update(this.#mensagem);
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
