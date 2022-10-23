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

    let self = this;

    // Proxies são objetos que encapsulam outros, como "cascas"
    this.#listaNegociacoes = new Proxy(new ListaNegociacoes(), {

      // target é o objeto real que é encapsulado pelo proxy
      // prop é a propriedade em si, que está sendo lida nesse momento
      // receiver é a referência ao próprio proxy
      // Reflect.get realiza a operação no objeto real
      // além do get, temos o set (target, prop, value, receiver)
      get (target, prop, receiver) {         
        if (['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) == 'function') {
          return function() {
            console.log(`interceptando ${prop}`);
            Reflect.apply(target[prop], target, arguments);
            self.#negociacoesView.update(target);
          }
        }          
      }

    });

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
    // this.#negociacoesView.update(this.#listaNegociacoes);
    this.#mensagem.texto = 'Negociação adicionada com sucesso';
    this.#mensagemView.update(this.#mensagem);
    this.#limpaFormulario();
  }

  apaga() {
    this.#listaNegociacoes.esvazia();
    // this.#negociacoesView.update(this.#listaNegociacoes);
    this.#mensagem.texto = 'Lista de negociações apagada com sucesso';
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
