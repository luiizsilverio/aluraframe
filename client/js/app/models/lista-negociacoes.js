class ListaNegociacoes {
  #negociacoes = [];
  #contexto;

  constructor(callback) {    

  }

  adiciona(negociacao) {
    this.#negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [...this.#negociacoes];
  }

  esvazia() {
    this.#negociacoes = [];
  }
}