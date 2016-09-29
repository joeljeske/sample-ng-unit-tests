describe('Factory: Stack', function() {

  beforeEach(module('app'));
  beforeEach(inject(function($stack) {
    this.stack = $stack();
  }));

  it('should exist', function() {
    expect(this.stack).toBeDefined();
  });

  describe('add()', function() {

    beforeEach(function() {
      this.testItem = 'test-item';
      this.stack.add(this.testItem);
    });

    it('should increase the count', function() {
      expect(this.stack.length).toBe(1);
    });

    it('should return the item in a peek', function() {
      expect(this.stack.peek()).toBe(this.testItem);
    });

    it('should return the item in a pop', function() {
      expect(this.stack.pop()).toBe(this.testItem);
    });

    it('should not be empty', function() {
      expect(this.stack.isEmpty()).toBe(false);
    });

  });

  describe('pop()', function() {

    describe('when empty', function() {

      it('should not change the count', function() {
        var initial = this.stack.length;
        this.stack.pop();
        expect(this.stack.length).toBe(initial);
      });

      it('should return undefined', function() {
        expect(this.stack.pop()).toBe(undefined);
      });

      it('should still be empty', function() {
        expect(this.stack.isEmpty()).toBe(true);
        this.stack.pop();
        expect(this.stack.isEmpty()).toBe(true);
      });

    });

    describe('when not empty', function() {

      beforeEach(function() {
        this.testItem = 'test-item';
        this.stack.add(this.testItem);
      });

      it('should decrement the count', function() {
        var initial = this.stack.length;
        this.stack.pop();
        expect(this.stack.length).toBe(initial - 1);
      });

      it('should return the item', function() {
        expect(this.stack.pop()).toBe(this.testItem);
      });

      it('should now be empty', function() {
        expect(this.stack.isEmpty()).toBe(false);
        this.stack.pop();
        expect(this.stack.isEmpty()).toBe(true);
      });

    });

  });

  describe('peek()', function() {

    describe('when empty', function() {

      it('should not change the count', function() {
        var initial = this.stack.length;
        this.stack.pop();
        expect(this.stack.length).toBe(initial);
      });

      it('should return undefined', function() {
        expect(this.stack.pop()).toBe(undefined);
      });

      it('should still be empty', function() {
        expect(this.stack.isEmpty()).toBe(true);
        this.stack.pop();
        expect(this.stack.isEmpty()).toBe(true);
      });

    });

    describe('when not empty', function() {

      beforeEach(function() {
        this.testItem = 'test-item';
        this.stack.add(this.testItem);
      });

      it('should decrement the count', function() {
        var initial = this.stack.length;
        this.stack.peek();
        expect(this.stack.length).toBe(initial);
      });

      it('should return the item', function() {
        expect(this.stack.peek()).toBe(this.testItem);
      });

      it('should always return the same item', function() {
        expect(this.stack.peek()).toBe(this.stack.peek());
      });

      it('should not be empty', function() {
        expect(this.stack.isEmpty()).toBe(false);
        this.stack.peek();
        expect(this.stack.isEmpty()).toBe(false);
      });

    });

  });

  describe('isEmpty()', function() {

    describe('when empty', function() {

      it('should not change the count', function() {
        var initial = this.stack.length;
        this.stack.isEmpty();
        expect(this.stack.length).toBe(initial);
      });

      it('should return true', function() {
        expect(this.stack.isEmpty()).toBe(true);
      });

    });

    describe('when not empty', function() {

      beforeEach(function() {
        this.testItem = 'test-item';
        this.stack.add(this.testItem);
      });

      it('should not change the count', function() {
        var initial = this.stack.length;
        this.stack.isEmpty();
        expect(this.stack.length).toBe(initial);
      });

      it('should return false', function() {
        expect(this.stack.isEmpty()).toBe(false);
      });

    });

  });

  describe('isEmpty()', function() {

    describe('when empty', function() {

      it('should not change the count', function() {
        var initial = this.stack.length;
        this.stack.isEmpty();
        expect(this.stack.length).toBe(initial);
      });

      it('should return true', function() {
        expect(this.stack.isEmpty()).toBe(true);
      });

    });

    describe('when not empty', function() {

      beforeEach(function() {
        this.testItem = 'test-item';
        this.stack.add(this.testItem);
      });

      it('should not change the count', function() {
        var initial = this.stack.length;
        this.stack.isEmpty();
        expect(this.stack.length).toBe(initial);
      });

      it('should return false', function() {
        expect(this.stack.isEmpty()).toBe(false);
      });

    });

  });

  describe('length', function() {

    it('should initiall be zero', function() {
      expect(this.stack.length).toBe(0);
    });

    it('should increment with each add', function() {
      expect(this.stack.length).toBe(0);

      this.stack.add('test');
      expect(this.stack.length).toBe(1);

      this.stack.add('test');
      expect(this.stack.length).toBe(2);

      this.stack.add('test');
      expect(this.stack.length).toBe(3);
    });


    it('should decrement with each pop', function() {
      this.stack.add('test');
      this.stack.add('test');
      this.stack.add('test');

      expect(this.stack.length).toBe(3);

      this.stack.pop();
      expect(this.stack.length).toBe(2);

      this.stack.peek();
      expect(this.stack.length).toBe(2);

      this.stack.pop();
      expect(this.stack.length).toBe(1);

      this.stack.pop();
      expect(this.stack.length).toBe(0);

      this.stack.pop();
      expect(this.stack.length).toBe(0);
    });

  });

});
