let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

let tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  let tr = document.createElement('tr');
  
  campos.forEach((campo) => {
    let td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);
  })

  let tdVol = document.createElement('td');
  tdVol.textContent = campos[1].value * campos[2].value;
  tr.appendChild(tdVol);
  tbody.appendChild(tr);

  console.log(event.target)
  event.target.reset(); // limpa o formulário

  

})