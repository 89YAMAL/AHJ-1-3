import Field from './field';
import Game from './game';

const field = new Field();
field.init();
const game = new Game(field);
game.init();
