class ListaNegociacoes {
  #negociacoes = [];

  adiciona(negociacao) {
    this.#negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [...this.#negociacoes];
  }

}