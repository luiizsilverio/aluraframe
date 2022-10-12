class Negociacao {
  #data;
  #quantidade = 1;
  #valor = 0.0;

  constructor(data, quantidade, valor) {
    this.#data = data;
    this.#quantidade = quantidade;
    this.#valor = valor;
  }

  get data() {
    return this.#data;
  }

  get quantidade() {
    return this.#quantidade;
  }

  get valor() {
    return this.#valor;
  }
  
  get volume() {
    return this.#quantidade * this.#valor;
  }

}