require(['jquery', 'lib/chess'], function($, chess) {
    var game = new chess.Game($('#chess-board'));
    game.begin();
});
