export default class Game {
  constructor(field) {
    this.field = field;
    this.scores = { vic: 0, loose: 0 };

    this.checkTarget = this.checkTarget.bind(this);
  }

  init() {
    this.field.parent.addEventListener('click', this.checkTarget);
    this.field.setActive();
    this.timerId = setInterval(() => {
      const gameOver = this.checkScores(false);
      if (gameOver) return;
      this.field.state(this.scores, '');
      this.field.setActive();
    }, 1000);
  }

  checkScores(clickEvent) {
    if (this.scores.loose >= 5 || this.scores.vic >= 5) {
      clearInterval(this.timerId);
      this.field.parent.removeEventListener('click', this.checkTarget);
      this.field.state(this.scores, 'Игра окончена');
      return true;
    } if (!clickEvent) this.scores.loose += +1;
    else this.scores.loose -= 1;
    return false;
  }

  checkTarget(e) {
    if (e.target === this.field.img) {
      this.scores.vic += 1;
      this.field.deleteImg();
      this.checkScores(true);
    }
  }
}
