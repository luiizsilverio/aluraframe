class ListaNegociacoes {
  #negociacoes = [];
  #contexto;

  // constructor(callback) {}

  adiciona(negociacao) {
    this.#negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [...this.#negociacoes];
  }

  esvazia() {
    this.#negociacoes = [];
  }

  ordena(coluna) {
    this.#negociacoes.sort((a, b) => a[coluna] - b[coluna])  // ordem crescente
  }
}