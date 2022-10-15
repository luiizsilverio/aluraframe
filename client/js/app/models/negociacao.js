class Negociacao {
  #data;
  #quantidade = 1;
  #valor = 0.0;

  constructor(data, quantidade, valor) {
    this.#data = new Date(data);
    this.#quantidade = quantidade;
    this.#valor = valor;
  }

  get data() {
    const newDate = new Date(this.#data)
    // return this.#data;
    return newDate;
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