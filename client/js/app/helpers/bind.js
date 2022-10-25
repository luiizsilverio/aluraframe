class Bind {
 
  constructor(model, view, ...props) {
    let proxy = ProxyFactory.create(model, props, (model) => {
      view.update(model);
    })

    view.update(model); // renderiza pela 1.a vez

    return proxy;
  }

}