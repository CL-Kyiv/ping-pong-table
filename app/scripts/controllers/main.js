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
    var RANKFORWIN = 11;
    this.clearAll = function () {
      this.player1 = this.player2 = 'noname';
      this.rank1 = this.rank2 = 0;
    };
    this.clearAll();
    this.save = function (player) {
      var playerState = {};
      playerState.name = player === 'player1' ? this.player1 : this.player2;
      playerState.rank = player === 'player1' ? this.rank1 : this.rank2;
      playerState = JSON.stringify(playerState);
      localStorage.setItem(player, playerState);
    }
    this.load = function (player) {
      var loadedState = localStorage.getItem(player);
      loadedState = JSON.parse(loadedState);
      if (player === 'player1') {
        this.player1 = loadedState.name;
        this.rank1 = loadedState.rank;
      } else {
        this.player2 = loadedState.name;
        this.rank2 = loadedState.rank;
      }
    }
    this.hasSaved = function (player) {
      return _.indexOf(_.keys(localStorage), player) > -1;
    }
    this.clearLocalStorage = function() {
      localStorage.clear();
    }
    this.checkRank = function(player) {
      var rank = player === 'player1' ? this.rank1 : this.rank2;
      if(rank >= RANKFORWIN) {
        this.winner = player === 'player1' ? this.player1 : this.player2;;
      }
    }
    this.incrementRank = function (player, value) {
      if (player === 'player1') {
        this.rank1 += value;
      } else {
        this.rank2 += value;
      }
      this.checkRank(player);
    }
  });
