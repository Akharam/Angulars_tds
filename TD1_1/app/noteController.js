/**
 * Created by Anthony on 24/01/2017.
 */

NoteApp.controller("NoteController", ["$cookies", function ($cookies) {
    var self = this;
    this.messageNote = $cookies.get('message');
    this.info = "";
    this.status="";
    
    this.count = function () {
        var caractere = 100 - this.messageNote.length;
        if(caractere<50 && caractere>=20)
                self.status="alert-warning";
            else if(caractere<20)
                self.status="alert-danger";
            else
                self.status="alert-info";
        return caractere;
    };

    this.clear = function () {
        self.messageNote = "";
        self.info="";
    };
    
    this.save = function () {
      if(self.messageNote!="") {
          self.info = "Note sauvegardée";
          $cookies.put('message', this.messageNote);
      }
    };

}]);