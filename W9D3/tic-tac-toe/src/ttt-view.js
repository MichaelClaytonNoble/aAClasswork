class View {
  constructor(game, $el) {
    this.game = game;
    this.$el= $el;
    this.setupBoard();
    this.bindEvents(); ///=/////
  }

  bindEvents() {
    
    // this.$el.on("click", "li", ( event => {
    //   const $square = $(event.currentTarget);
    //   this.makeMove($square);
    // }));


    this.$el.on('click', 'li', ( (e) => {


      // makeMove(e.target);
    }))

    //on('click', Game.playMove(position))
    //grab input element and save as jQuery object 
    //element.on('event', ()=>{
          // $.text 
          // $.attr

    // });
    
  }
  
  makeMove($square) {
    
    //change css to make background: white; -----change class .white 
    //add players mark
    //alert("INVALID MOVE")
    //congratulate the winner 


  }

  setupBoard() {

    const newUl = $("<ul class='ttt-board'></ul>");
    $('.ttt').append(newUl);

    for(let i = 0; i < 9; i++) {
      let newLi = $("<li class='ttt-cell'></li>");
      newLi.attr('id', i);
      $('.ttt-board').append(newLi);
    };
  };
};

module.exports = View;
