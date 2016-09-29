describe('Factory: phoneModel', function() {

  beforeEach(module('app'));
  beforeEach(inject(function(phoneModel, $httpBackend) {
    this.phoneModel = phoneModel;
    this.$httpBackend = $httpBackend;
    this.success = jasmine.createSpy('success');
    this.error = jasmine.createSpy('error');
  }));

  afterEach(function() {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });

  it('should exist', function() {
    expect(this.phoneModel).toBeDefined();
  });

  it('should request on get()', function() {
    var phoneNumbers = ['1234567890', '0987654321', '5555555555'];
    this.$httpBackend.expectGET('/api/model').respond(200, phoneNumbers);

    this.phoneModel.get().then(this.success, this.error);

    this.$httpBackend.flush();

    expect(this.success).toHaveBeenCalledWith(phoneNumbers);
    expect(this.error).not.toHaveBeenCalled();
  });

  it('should post on update()', function() {
    var oldVal = '1234567890';
    var newVal = '0987654321';

    this.$httpBackend.expectPOST('/api/model', {oldVal: oldVal, newVal: newVal}).respond(200);

    this.phoneModel.update(oldVal, newVal).then(this.success, this.error);

    this.$httpBackend.flush();

    expect(this.success).toHaveBeenCalled();
    expect(this.error).not.toHaveBeenCalled();
  });

});
