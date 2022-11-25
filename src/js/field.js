import random from './random';

export default class Field {
  constructor() {
    [this.img] = document.images;
    [this.parent] = document.getElementsByClassName('game-goblin');
    [this.gameState] = document.getElementsByClassName('game-state');
    this.oldNumber = null;

    this.setActive = this.setActive.bind(this);
  }

  createCells() {
    for (let i = 0; i < 16; i += 1) {
      const div = document.createElement('div');
      this.parent.appendChild(div);
    }
  }

  init() {
    this.img.parentElement.removeChild(this.img);
    this.createCells();
  }

  deleteImg() {
    const active = document.images[0].parentElement;
    active.removeChild(this.img);
  }

  setActive() {
    if (document.images[0]) this.deleteImg();

    const child = this.parent.children;
    const newNumber = random(this.oldNumber);
    this.oldNumber = newNumber;
    child[newNumber].appendChild(this.img);
  }

  state(scores, status) {
    this.gameState.innerHTML = `
    <h3>${status}</h3>
    Попадания: <strong>${scores.vic}</strong>, Промахи: <strong>${scores.loose}</strong> 
    `;
  }
}
