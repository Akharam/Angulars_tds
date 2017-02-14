contactsApp.controller("contactController" , function(){
    
    var self = this;
    this.contacts=[
    {
        "nom": "ZUCKERBERG",
        "prenom": "mark",
        "mail": "mark@facebook.com",
        "suppr":false
    },{
        "nom": "GATES",
        "prenom": "bill",
        "mail": "bill@microsoft.com",
        "suppr":false
    },{
        "nom": "JOBS",
        "prenom": "steeve",
        "mail": "Steeve@apple.com",
        "suppr":false
    }];
    
    this.contact;
    this.tmpContact;
    this.operation="";
    this.edit=false;
    
    this.toUpdate = function(contact){
        self.operation="modif";
    };
    
    this.toAdd = function(){
        self.edit=true;
        self.operation="ajout";
    };
    
    this.add = function(){
        
    };
    
    this.update= function(){
        
    };
    
    this.delete = function(contact){
        for(var x; x<self.contacts; x++){
            if(self.contacts[x].nom == this.contact.nom)
                self.contacts[x].suppr = true;        }
        
    };
});