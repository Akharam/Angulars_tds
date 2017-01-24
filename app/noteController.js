/**
 * Created by Anthony on 24/01/2017.
 */

NoteApp.controller("NoteController", function(){
    var self = this;
    this.messageNote ="";
    this.sauvegarde ="";
    this.caractere = 100;

    this.count = function(){
        self.caractere = 100 - this.messageNote.length;
    };

    this.clear = function(){
        self.messageNote = "";
        self.caractere = 100;
    };

});