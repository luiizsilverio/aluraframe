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
      'adiciona', 'esvazia', 'ordena'
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

  importa() {
    let service = new NegociacaoService();

    Promise.all([
      service.obterNegociacoesDaSemana(),
      service.obterNegociacoesDaSemanaAnterior(),
      service.obterNegociacoesDaSemanaRetrasada(),
    ])
    .then((negociacoes) => {
      negociacoes
        .flat()
        .forEach(neg => this.#listaNegociacoes.adiciona(neg));
        
      this.#mensagem.texto = 'Negociações importadas com sucesso';
    })
    .catch((erro) => this.#mensagem.texto = erro);



  /* Método 2---
    service.obterNegociacoesDaSemana()
      .then((negociacoes) => {
        negociacoes.forEach(negociacao => this.#listaNegociacoes.adiciona(negociacao))
        this.#mensagem.texto = 'Negociações importadas com sucesso';
      })
      .catch((erro) => this.#mensagem.texto = erro);

    service.obterNegociacoesDaSemanaRetrasada()
      .then((negociacoes) => {
        negociacoes.forEach(negociacao => this.#listaNegociacoes.adiciona(negociacao))
        this.#mensagem.texto = 'Negociações importadas com sucesso';
      })
      .catch((erro) => this.#mensagem.texto = erro);

    service.obterNegociacoesDaSemanaAnterior()
      .then((negociacoes) => {
        negociacoes.forEach(negociacao => this.#listaNegociacoes.adiciona(negociacao))
        this.#mensagem.texto = 'Negociações importadas com sucesso';
      })
      .catch((erro) => this.#mensagem.texto = erro);

    
/*  Método 3---
    service.obterNegociacoesDaSemana((erro, negociacoes) => {
      // conceito de Error-first Callback, ou errorback
      if (erro) {
        this.#mensagem.texto = erro;
        return;
      }
      
      negociacoes.forEach(negociacao => this.#listaNegociacoes.adiciona(negociacao));
      this.#mensagem.texto = 'Negociações importadas com sucesso';
    })

    service.obterNegociacoesDaSemanaAnterior((erro, negociacoes) => {
      // conceito de Error-first Callback, ou errorback
      if (erro) {
        this.#mensagem.texto = erro;
        return;
      }
      
      negociacoes.forEach(negociacao => this.#listaNegociacoes.adiciona(negociacao));
      this.#mensagem.texto = 'Negociações importadas com sucesso';
    });

    service.obterNegociacoesDaSemanaRetrasada((erro, negociacoes) => {
      // conceito de Error-first Callback, ou errorback
      if (erro) {
        this.#mensagem.texto = erro;
        return;
      }
      
      negociacoes.forEach(negociacao => this.#listaNegociacoes.adiciona(negociacao));
      this.#mensagem.texto = 'Negociações importadas com sucesso';
    });
*/

  }

  apaga() {
    this.#listaNegociacoes.esvazia();
    this.#mensagem.texto = 'Lista de negociações apagada com sucesso';
    this.#limpaFormulario();
  }

  ordena(coluna) {
    this.#listaNegociacoes.ordena(coluna);
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
