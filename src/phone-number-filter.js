angular.module('app').filter('phoneNumber', function() {

  return function (number) {
    if (angular.isNumber(number)) {
      number = '' + number;
    }

    if (!angular.isString(number)) {
      return number;
    }

    return number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  };
});
