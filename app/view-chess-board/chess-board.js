'use strict';

angular.module('chessApp.chessBoard', ['ngRoute', 'ngSanitize'])

.config(['$routeProvider', '$provide', function($routeProvider, $provide) {
  $routeProvider.when('/view-chess-board', {
    templateUrl: 'view-chess-board/chess-board.html',
    controller: 'ChessBoardCtrl as chessboard'
  });
  $provide.value('PIECES', {
    'PAWN': ['pawn', 9817],
    'KNIGHT': ['knight', 9816],
    'BISHOP': ['bishop', 9815],
    'ROOK': ['rook', 9814],
    'QUEEN': ['queen', 9813],
    'KING': ['king', 9812]
  })
  $provide.value('PLAYERS', {
    'WHITE': 'white',
    'BLACK': 'black'
  })
}])

.controller('ChessBoardCtrl', ['pieceFactory', 'PIECES', 'PLAYERS', function(pieceFactory, PIECES, PLAYERS) {

  this.white_pawn = pieceFactory.fn(PIECES.PAWN, PLAYERS.WHITE)
  this.white_knight = pieceFactory.fn(PIECES.KNIGHT, PLAYERS.WHITE)
  this.white_bishop = pieceFactory.fn(PIECES.BISHOP, PLAYERS.WHITE)
  this.white_rook = pieceFactory.fn(PIECES.ROOK, PLAYERS.WHITE)
  this.white_queen = pieceFactory.fn(PIECES.QUEEN, PLAYERS.WHITE)
  this.white_king = pieceFactory.fn(PIECES.KING, PLAYERS.WHITE)

  this.black_pawn = pieceFactory.fn(PIECES.PAWN, PLAYERS.BLACK)
  this.black_knight = pieceFactory.fn(PIECES.KNIGHT, PLAYERS.BLACK)
  this.black_bishop = pieceFactory.fn(PIECES.BISHOP, PLAYERS.BLACK)
  this.black_rook = pieceFactory.fn(PIECES.ROOK, PLAYERS.BLACK)
  this.black_queen = pieceFactory.fn(PIECES.QUEEN, PLAYERS.BLACK)
  this.black_king = pieceFactory.fn(PIECES.KING, PLAYERS.BLACK)

}])

.factory('pieceFactory', ['PLAYERS', 'PIECES', function(PLAYERS, PIECES) {
  return {
    fn: function(type, player) {
      var BLACK_OFFSET = 6;
      var BASE_UNICODE = '&#'

      var unicode = BASE_UNICODE;
      if (player == PLAYERS.BLACK) {
        unicode +=  String(type[1] + 6);
      } else {
        unicode += String(type[1]);
      }

      return { 'type': type[0], 'player': player, 'unicode': unicode }
    }
  }
}]);
