class ProxyFactory {

  static create(objeto, props, acao) {

    return new Proxy(objeto, {

      get (target, prop, receiver) {         
        if (props.includes(prop) && ProxyFactory.#isFunction(target[prop])) {
          return function() {
            console.log(`interceptando ${prop}`);
            Reflect.apply(target[prop], target, arguments);
            return acao(target);
          }
        }          
      },

      set (target, prop, value, receiver) {
        if (props.includes(prop)) {
          target[prop] = value;
          acao(target);
        }
        return Reflect.set(target, prop, value, receiver);
      }

    })
  }  

  static #isFunction(func) {
    return typeof(func) === 'function';
  }
}

// Proxies são objetos que encapsulam outros.
// É uma estratégia útil quando queremos interceptar os métodos e propriedades
// target é o objeto real que é encapsulado pelo proxy
// prop é a propriedade em si, que está sendo lida nesse momento
// receiver é a referência ao próprio proxy
// Reflect.get realiza a operação no objeto real
// além do get, temos o set (target, prop, value, receiver)
