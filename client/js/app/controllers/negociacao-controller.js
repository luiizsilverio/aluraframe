class NegociacaoController {
  #inputData;
  #inputQuantidade;
  #inputValor;
  
  constructor() {
    let $ = document.querySelector.bind(document);
    this.#inputData = $('#data');
    this.#inputQuantidade = $('#quantidade');
    this.#inputValor = $('#valor');
  }

  adiciona(event) {    
    event.preventDefault();

    let data = this.#inputData.value.split("-")

    let negociacao = new Negociacao(
      data, //this.#inputData.value,
      this.#inputQuantidade.value,
      this.#inputValor.value
    )
    
    console.log(negociacao)

  }
}
