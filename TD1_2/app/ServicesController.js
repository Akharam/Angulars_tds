servicesApp.controller("ServicesController", function(){
        
        var self = this;
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
            if(self.services[val].name == service.name && !service.active )
                service.active = true;
            else if(self.services[val].name == service.name && service.active )
                service.active = false;
        }
    };
    
});