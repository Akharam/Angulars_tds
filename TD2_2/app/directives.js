app.directive('contactElem', function() {
  return {
    restrict: 'AE',
    scope:{},
    templateUrl: function(elem, attr){
      return 'client-'+attr.type+'.html';
    }
  };
});