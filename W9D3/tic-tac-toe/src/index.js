const View = require('./ttt-view'); // require appropriate file
const Game = require('./ttt-solutions/game'); // require appropriate file


$(() => {
  // Your code here
    const game = new Game();
    const $container = $('.ttt');
    const view = new View(game, $container);
    
  });
