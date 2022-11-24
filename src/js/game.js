export default class Game {
  constructor(img, size) {
    this.size = size;
    this.img = img;
  }

  createContainer() {
    this.name = 'createContainer';
    const body = document.querySelector('body');
    const container = '<section class = "game"><div class = "field_container" id = "fieldContainer"></div></section>';
    body.insertAdjacentHTML('afterbegin', container);
  }

  createField() {
    const fieldContainer = document.getElementById('fieldContainer');
    const fieldSize = this.size ** 2;

    for (let i = 0; i < fieldSize; i += 1) {
      const field = `<div class = "field" data-id = "${i}"></div>`;
      fieldContainer.insertAdjacentHTML('beforeend', field);
    }
  }

  createImage() {
    const image = document.createElement('img');
    image.src = this.img;
    image.className = 'goblin';
    return image;
  }

  getRandom(max) {
    this.name = 'getRandom';
    return Math.floor(Math.random() * max);
  }

  imageInField(img) {
    const max = this.size ** 2;
    const id = this.getRandom(max);
    const dataId = document.querySelector(`div[data-id = '${id}']`);
    dataId.append(img);
  }

  start() {
    this.createContainer();
    this.createField();
    const image = this.createImage();

    setInterval(() => {
      this.imageInField(image);
    }, 1000);
  }
}
