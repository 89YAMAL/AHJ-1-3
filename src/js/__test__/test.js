import Game from '../game';

test('new object class Game', () => {
  const expected = {
    img: 'goblin.png',
    size: 4,
  };

  const result = new Game('goblin.png', 4);
  expect(result).toEqual(expected);
});

test('section in body', () => {
  const game = new Game('goblin.png', 2);
  game.createContainer();

  const result = document.body.querySelector('.field_container');
  expect(result).toEqual(expect.anything());
});

test('create element img', () => {
  document.body.innerHTML = '<img class="goblin" src="goblin.png">';
  const expected = document.querySelector('.goblin');

  document.body.innerHTML = '<div class="div"></div>';
  const div = document.querySelector('.div');

  const game = new Game('goblin.png', 2);
  const img = game.createImage();

  div.insertAdjacentElement('beforeend', img);
  const result = div.querySelector('.goblin');

  expect(result).toEqual(expected);
});

test('img in field', () => {
  document.body.innerHTML = '<div class="field" data-id="0"><img src="goblin.png" class="goblin"></div>';
  const expected = document.querySelector('body .field');

  const game = new Game('goblin.png', 1);
  game.createContainer();
  game.createField();
  const img = game.createImage();
  game.imageInField(img);

  const div = document.getElementById('fieldContainer');
  const result = div.querySelector('.field');
  expect(result).toEqual(expected);
});

test('random', () => {
  const max = 2;
  const game = new Game('goblin.png', 4);
  const result = game.getRandom(max);
  expect(result).toBeLessThan(max);
});
