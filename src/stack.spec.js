describe('Factory: Stack', function() {

  beforeEach(module('app'));
  beforeEach(inject(function($stack) {
    this.stack = $stack();
  }));

  it('should exist', function() {

  });

  describe('add()', function() {

    beforeEach(function() {
      this.testItem = 'test-item';
    });

    it('should increase the count', function() {

    });

    it('should return the item in a peek', function() {

    });

    it('should return the item in a pop', function() {

    });

    it('should not be empty', function() {

    });

  });

  describe('pop()', function() {

    describe('when empty', function() {

      it('should not change the count', function() {

      });

      it('should return undefined', function() {

      });

      it('should still be empty', function() {

      });

    });

    describe('when not empty', function() {

      beforeEach(function() {

      });

      it('should decrement the count', function() {

      });

      it('should return the item', function() {

      });

      it('should now be empty', function() {

      });

    });

  });

  describe('peek()', function() {

    describe('when empty', function() {

      it('should not change the count', function() {

      });

      it('should return undefined', function() {

      });

      it('should still be empty', function() {

      });

    });

    describe('when not empty', function() {

      beforeEach(function() {

      });

      it('should decrement the count', function() {

      });

      it('should return the item', function() {

      });

      it('should always return the same item', function() {

      });

      it('should not be empty', function() {

      });

    });

  });

  describe('isEmpty()', function() {

    describe('when empty', function() {

      it('should not change the count', function() {

      });

      it('should return true', function() {

      });

    });

    describe('when not empty', function() {

      beforeEach(function() {

      });

      it('should not change the count', function() {

      });

      it('should return false', function() {

      });

    });

  });

  describe('isEmpty()', function() {

    describe('when empty', function() {

      it('should not change the count', function() {

      });

      it('should return true', function() {

      });

    });

    describe('when not empty', function() {

      beforeEach(function() {

      });

      it('should not change the count', function() {

      });

      it('should return false', function() {

      });

    });

  });

  describe('length', function() {

    it('should initiall be zero', function() {

    });

    it('should increment with each add', function() {

    });

    it('should decrement with each pop', function() {

    });

  });

});
