'use strict';

describe('Service: GameService', function () {

  // load the service's module
  beforeEach(module('pingPongTableApp'));

  // instantiate service
  var GameService;
  beforeEach(inject(function (_GameService_) {
    GameService = _GameService_;
  }));

  it('should do something', function () {
    expect(!!GameService).toBe(true);
  });

});
