class ListaNegociacoes {
  #negociacoes = [];
  #contexto;

  constructor(callback) {    
    this._callback = callback;
  }

  adiciona(negociacao) {
    this.#negociacoes.push(negociacao);
    this._callback(this);
  }

  get negociacoes() {
    return [...this.#negociacoes];
  }

  esvazia() {
    this.#negociacoes = [];
    this._callback(this);
  }
}