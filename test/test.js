var assert = require("assert");
var coin = require("../app.js");
describe('Array', function(){
  describe('#coin()', function(){
    it('should return correct', function(){
      assert.equal(coin.coin(16), '16:1');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(11), '11:1');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(9), '9:1');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(2), '2:1');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(0.5), '0.5:1');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(17), '16:1,0.5:2');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(12), '11:1,0.5:2');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(10), '9:1,0.5:2');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(8), '7:1,0.5:2');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(3), '2:1,0.5:2');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(1), '0.5:2');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(15), '11:1,2:2');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(6), '2:3');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(32), '16:2');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(22), '11:2');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(18), '9:2');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(14), '7:2');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(4), '2:2');
    });
    it('should return correct', function(){
      assert.equal(coin.coin(129), '16:8,0.5:2');
    });
  })
});

