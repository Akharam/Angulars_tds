servicesApp.controller("ServicesController",['$http',function($http){
        
        var self = this;
        this.prix = 300;
        this.code=[];
        this.codePromo="";
        this.promoChecked=false;
        this.reduc=1.00;
        this.services =[
    {
        "name": "Web Development",
        "price": 300,
        "active":true
    },{
        "name": "Design",
        "price": 400,
        "active":false
    },{
        "name": "Integration",
        "price": 250,
        "active":false
    },{
        "name": "Formation",
        "price": 220,
        "active":false
    }
    ];
                       
    ($http.get('app/promo.json')).then(function(data){
        self.codes = data.data;
        console.log(self.codes);
    });

    this.total = function(){
        var count = 0;
        for(var val in self.services){
            if(self.services[val].active)
                count++;
        }
        return count;
    
    };

    this.toggleActive = function(service){
        for(var val in self.services){
            if(self.services[val].name == service.name && !service.active ){
                service.active = true;
                self.prix = self.prix+service.price;}
            else if(self.services[val].name == service.name && service.active ){
                service.active = false;
                self.prix = self.prix-service.price;}
        }
    };
    
    this.checkCode=function(){
        console.log(JSON.stringify(self.codes));
        if (this.codePromo.length>0 && self.codes[this.codePromo]){
            this.reduction=1-self.codes[this.codePromo];
        }
        else{
            this.reduction=1;
        }
    }
    
}]);