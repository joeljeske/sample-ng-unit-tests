describe('Filter: phoneNumber', function() {

  beforeEach(module('app'));
  beforeEach(inject(function($filter) {
    this.phoneNumber = $filter('phoneNumber');
  }));

  var testCases = [
    {in: 1234567890,    out: '(123) 456-7890'},
    {in: '12345678901', out: '(123) 456-78901'},
    {in: '1234567890',  out: '(123) 456-7890'},
    {in: '123456789',   out: '123456789'},
    {in: '12345678',    out: '12345678'},
    {in: '1234567',     out: '1234567'},
    {in: '123456',      out: '123456'},
    {in: 123,           out: '123'},
    {in: null,          out: null},
    {in: [],            out: []},
    {in: {},            out: {}},
    {in: true,          out: true},
    {in: false,         out: false},
  ];

  it('should exist', function() {
    expect(this.phoneNumber).toBeDefined();
  });

  angular.forEach(testCases, function(test, idx) {

    it('(#' + idx + ') should convert "' + test.in + '" to "' + test.out + '"', function() {
      expect(this.phoneNumber(test.in)).toEqual(test.out);
    });


  });

});
