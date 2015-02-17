'use strict';

/**
 * @ngdoc function
 * @name pingPongTableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pingPongTableApp
 */
angular.module('pingPongTableApp')
  .controller('MainCtrl', function () {
    this.clearAll = function () {
      this.player1 = this.player2 = "noname";
      this.rank1 = this.rank2 = 0;
    }
    this.clearAll();
    this.incrementRank = function(player, value) {
      if(player === 'player1') {
        this.rank1 += value;
      } else if(player === 'player2') {
        this.rank2 += value;
      } else {
        throw new Error('Such player does\'t exist ' + player);
      }
    }
  });
