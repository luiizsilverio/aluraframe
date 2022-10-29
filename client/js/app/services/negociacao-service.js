class NegociacaoService {
  #http;

  constructor() {
    this.#http = new HttpService();
  }

  obterNegociacoesDaSemana() {

    return new Promise((resolve, reject) => {
      
      this.#http.get('http://localhost:3000/negociacoes/semana')
        .then((neg) => {

          const negociacoes = neg.map(obj => 
            new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
          );

          resolve(negociacoes);
        })
        .catch((erro) => {
          console.warn(erro);
          reject('Não foi possível obter as negociações');
        });
      
    })
  }

  obterNegociacoesDaSemanaRetrasada() {
    
    return new Promise((resolve, reject) => {
      
      this.#http.get('http://localhost:3000/negociacoes/retrasada')
        .then((neg) => {

          const negociacoes = neg.map(obj => 
            new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
          );

          resolve(negociacoes);
        })
        .catch((erro) => {
          console.warn(erro);
          reject('Não foi possível obter as negociações da semana retrasada');
        });
        
    })
  }

  obterNegociacoesDaSemanaAnterior() {

    return new Promise((resolve, reject) => {
      
      this.#http.get('http://localhost:3000/negociacoes/anterior')
        .then((neg) => {

          const negociacoes = neg.map(obj => 
            new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
          );

          resolve(negociacoes);
        })
        .catch((erro) => {
          console.warn(erro);
          reject('Não foi possível obter as negociações da semana anterior');
        });
      
    })
  }

}