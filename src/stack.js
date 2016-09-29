angular.module('app').factory('$stack', function() {

  // Stack Constructor
  // Creates a new stack structure
  function Stack() {
    this._stack = [];
  }

  Object.defineProperties(Stack.prototype, {
    // The length of the stack (readonly)
    length: {
      get: function() {
        return this._stack.length;
      }
    }
  });

  // Add an item to the stack
  Stack.prototype.add = function(item) {
    this._stack.push(item);
  };

  // Returns the first item on the stack but does not remove it
  Stack.prototype.peek = function() {
    return this._stack[this.length - 1];
  };

  // Returns the first item on the stack and removes it
  Stack.prototype.pop = function() {
    return this._stack.pop();
  };

  // Returns true when stack is isEmpty
  Stack.prototype.isEmpty = function() {
    return this.length === 0;
  };

  // Expose a factory function to create new stack instances
  return function stackFactory() {
    return new Stack();
  };
});
