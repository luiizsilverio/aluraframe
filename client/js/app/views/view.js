class View {
  #elemento;

  constructor (elemento) {
    this.#elemento = elemento;
  }

  update(model) {
    this.#elemento.innerHTML = this.template(model);
  }

  template() {
    throw new Error('O método template deve ser implementado');
  }
}