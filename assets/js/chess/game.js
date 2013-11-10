define([], function() {

    Game = function($board) {
        this.$board = $board;
    };

    Game.prototype = {
        begin : function() {
        }
    }
    
    return {
        Game : Game
    };
});
