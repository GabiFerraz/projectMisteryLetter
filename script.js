const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const card = document.querySelector('#carta-gerada');
const styleCard = ['newspaper', 'magazine1', 'magazine2'];
const sizeCard = ['medium', 'big', 'reallybig'];
const rotationCard = ['rotateleft', 'rotateright'];
const inclinationCard = ['skewleft', 'skewright'];
const countCard = document.querySelector('#carta-contador');

// requisito 3 (ao clicar nesse botão, a carta misteriosa deve ser gerada):
// requisitos 4 e 5 também estão aqui:
button.addEventListener('click', () => {
  const saveInput = input.value.split(' ');
  card.innerHTML = '';
  for (let index = 0; index < saveInput.length; index += 1) {
    const spann = document.createElement('span');
    const sortitionStyle = Math.floor(Math.random() * 3);
    const sortitionSize = Math.floor(Math.random() * 3);
    const sortitionRotation = Math.floor(Math.random() * 2);
    const sortitionInclination = Math.floor(Math.random() * 2);
    const finalSortition = `${styleCard[sortitionStyle]} ${sizeCard[sortitionSize]} ${rotationCard[sortitionRotation]} ${inclinationCard[sortitionInclination]}`;
    spann.className = finalSortition;
    spann.innerHTML = saveInput[index];
    card.appendChild(spann);
  }
  countCard.innerText = card.children.length;
  if (input.value === '' || input.value === ' ') {
    card.innerText = 'Por favor, digite o conteúdo da carta.';
  }
});
// split transforma uma string em um array, criei uma variável com o .split(' ') pra ele poder apagar os espaços entre as palavras e deixar tudo junto, cada palavra em um index.
// vi o split no: https://www.w3schools.com/jsref/jsref_split.asp
