currencyApp.controller("currencyController" ,['$http', function($http){
    var self = this;
    
    this.result;
    
    
    
    $http.get('app/currencymap.json').
    then(function(response) {
        self.currencies = response.data;
        self.from = self.currencies["EUR"];
        self.to = self.currencies["USD"];
    },
    function(response) {
        console.log("Erreur avec le statut Http : "+response.status);
    });
    
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://free.currencyconverterapi.com/**'
    ]);
    
    $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code, {jsonpCallbackParam: 'callback'})
    .then(function(response) {
        self.result=response.data[self.from.code+'_'+self.to.code].val;
        
    });
    
    this.swap = function(){
        var tmp;
        this.tmp = self.from;
        self.from = self.to;
        self.to = this.tmp;
    };
    
    this.getResult = function(){
          
    };
}]);