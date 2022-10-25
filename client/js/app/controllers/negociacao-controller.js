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

    this.#negociacoesView = new NegociacaoView($('#negociacoes-view'));
    
    this.#listaNegociacoes = new Bind(
      new ListaNegociacoes(), 
      this.#negociacoesView,
      'adiciona', 'esvazia',
    )

    this.#mensagemView = new MensagemView($('#mensagem-view'));
    
    this.#mensagem = new Bind(
      new Mensagem(),
      this.#mensagemView,
      'texto',
    )
  }

  adiciona(event) {    
    event.preventDefault();
    let negociacao = this.#criaNegociacao();
    this.#listaNegociacoes.adiciona(negociacao);
    this.#mensagem.texto = 'Negociação adicionada com sucesso';
    this.#limpaFormulario();
  }

  apaga() {
    this.#listaNegociacoes.esvazia();
    this.#mensagem.texto = 'Lista de negociações apagada com sucesso';
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
