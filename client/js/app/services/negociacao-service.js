class NegociacaoService {

  obterNegociacoesDaSemana(cb) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:3000/negociacoes/semana');
    
    xhr.onreadystatechange = () => {
      /* 
        readyState:
        0: requisição ainda não iniciada
        1: conexão com o servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição concluída e resposta está pronta
      */
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {          
          const negociacoes = JSON.parse(xhr.responseText)
            .map(obj => 
              new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
            );
            
          cb(null, negociacoes);

        } else {
          cb('Não foi possível obter as negociações');
        }
      }
    }

    xhr.send();
  }
}