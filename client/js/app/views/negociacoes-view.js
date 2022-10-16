class NegociacaoView {
  #elem

  constructor(elem) {
    this.#elem = elem;
  }

  #template(model) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
          ${
            model.negociacoes.map((n) => (
              `
                <tr>
                  <td>${DateHelper.dataParaTexto(n.data)}</td>
                  <td>${n.quantidade}</td>
                  <td>${n.valor}</td>
                  <td>${n.volume}</td>
                </tr>
              `
            ))
          }
        </tbody>

        <tfoot>
          <td colspan="3"></td>
          <td>
            ${
              model.negociacoes.reduce((acc, n) => (acc + n.volume), 0)
            }
          </td>
        </tfoot>
    </table>
    `;
  }

  update(model) {
    this.#elem.innerHTML = this.#template(model);
  }
}
