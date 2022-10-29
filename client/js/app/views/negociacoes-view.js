class NegociacaoView extends View {

  constructor (elemento) {
    super(elemento);
  }

  template(model) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th role="button" onclick="negociacaoController.ordena('data')">DATA</th>
                <th role="button" onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                <th role="button" onclick="negociacaoController.ordena('valor')">VALOR</th>
                <th role="button" onclick="negociacaoController.ordena('volume')">VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
          ${
            model.negociacoes?.map((n) => (
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
              model.negociacoes?.reduce((acc, n) => (acc + n.volume), 0)
            }
          </td>
        </tfoot>
    </table>
    `;
  }

}
