/**
 * Created by Anthony on 24/01/2017.
 */

NoteApp.controller("NoteController", ["$cookies", function ($cookies) {
    var self = this;
    this.messageNote = "";
    this.info = "";
    this.caractere = 100;
    this.status = 2;
    
    this.count = function () {
        self.caractere = 100 - this.messageNote.length;
        self.info ="Note modifiée";
    };

    this.clear = function () {
        self.messageNote = "";
        self.caractere = 100;
        self.info="";
    };
    
    this.save = function () {
      // Retrieving a cookie
  //var favoriteCookie = $cookies.get('myFavorite');
  // Setting a cookie
        $cookies.put('Note', self.messageNote);
        self.info = "Note sauvegardée";
    };

}]);