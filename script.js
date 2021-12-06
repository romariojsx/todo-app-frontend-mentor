/*
=======  Seletores =======
*/

const activeListaChecked = document.querySelector('.active-lista');

const clickCheck = document.querySelectorAll('.circle');

const itemLista = document.querySelector('.item-lista');
const input = document.querySelector('input');
// adiciona uma class nos elementos
const contentItem = document.querySelector('.content-lista');
const item = document.querySelector('.item');
const itens = document.getElementById('NumberItems');

// footer
const deleteAll = document.getElementById('deleteAll');

// Seletores dark mode

let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
let imagemLight = document.querySelector('.image-light');
let todoFormDarkMode = document.querySelector('.todo-form');
let itemContainerForm = document.querySelector('.item-container');
let itemsFooter = document.querySelector('.items');

let tarefas = [];

// Uma forma de puxar os itens no frontend;
function itensNumbers() {
  const tasks = tarefas.length;
  itens.innerText = `${tasks} Item(s)`;
}

itensNumbers();

function adicionar(evento, status) {
  if (evento.key === 'Enter' && input.value != '') {
    evento.preventDefault();
    tarefas.push(input.value);
    input.value = '';

    tarefas.forEach((item) => {
      console.log(item);
    });

    render();
  }
}
input.addEventListener('keypress', adicionar);

// atualizo a tela
function render() {
  itemLista.innerHTML = null;

  tarefas.forEach((item, index) => {
    // itens.innerText = `${index + 1} Itens(s)`;

    const p = document.createElement('p');
    const activeLista = document.createElement('div');
    // const sublista = document.createElement('div');
    const circulo = document.createElement('button');
    let onButton = document.createElement('button');
    const imgIcon = document.createElement('img');

    // div.innerHTML = item;
    p.innerText = item;
    onButton.innerText = 'X';

    activeLista.appendChild(p);
    itemLista.appendChild(activeLista);
    activeLista.appendChild(circulo);
    activeLista.appendChild(onButton);
    circulo.appendChild(imgIcon);
    // itemLista.appendChild(div);
    circulo.classList.add('circle');
    activeLista.classList.add('item', 'active-lista');
    p.classList.add('content-lista');
    onButton.classList.add('deletar-item');
    itensNumbers();
    onButton.setAttribute('data-id', index);
  });

  document.querySelectorAll('.deletar-item').forEach((item, index) => {
    item.addEventListener('click', (event) => {
      const position = event.target.getAttribute('data-id', index);

      if (tarefas.length === 1) {
        tarefas = [];
      } else {
        tarefas.splice(position, 1);
      }

      itensNumbers();
      render();
    });
  });
}

function cleanAllItems(eventoAll) {
  tarefas = [];
  eventoAll.preventDefault();
  render();
  itensNumbers();
}

deleteAll.addEventListener('click', cleanAllItems);

//*****************Dark Mode********************

// Quando clicar no icon Moon, adicionar dark mode nas classes
function clickOnMoon() {
  document.body.classList.add('dark_Mode');
  imagemLight.classList.add('imagem-dark');
  todoFormDarkMode.classList.add('todo-form-darkmode');
  itemContainerForm.classList.add('item-container-darkmode');
  itemsFooter.classList.add('items-form-darkmode');
  sun.style.display = 'block';
  moon.style.display = 'none';
}

moon.addEventListener('click', clickOnMoon);

// Quando clicar no icone Sun, remover a classe dark-mode
function clickOnSun() {
  document.body.classList.remove('dark_Mode');
  imagemLight.classList.remove('imagem-dark');
  todoFormDarkMode.classList.remove('todo-form-darkmode');
  itemsFooter.classList.remove('items-form-darkmode');
  itemContainerForm.classList.remove('item-container-darkmode');
  sun.style.display = 'none';
  moon.style.display = 'block';
}

sun.addEventListener('click', clickOnSun);
