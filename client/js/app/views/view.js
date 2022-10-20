class View {
  #elemento;

  constructor (elemento) {
    this.#elemento = elemento;
  }

  update(model) {
    this.#elemento.innerHTML = this._template(model);
  }

}