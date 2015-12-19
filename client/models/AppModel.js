// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' callback function will always be bound to that context we pass in.
    In the current example, we're binding the value of the keyword this to the App. That is helpful because otherwise
    the 'this' we use inside the function body (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    //listen to the library for play and updating the currentSong from the library
    params.library.on('play', function(song){
      //console.log("app model set",this.get('currentSong'),song);
      var oldSong =this.get('currentSong');
      oldSong.set('playIndicator','');
    
      this.set('currentSong', song);
      //console.log("new currentSong",this.get('currentSong'));
    }, this);


    //listen to the library for enqueue and save a reference to songModel in the library, in the song queue
    params.library.on('enqueue', function (song){
      var songQueue = this.get('songQueue');
      //console.log('AppModel queueing', songQueue);
      songQueue.add(song);

      if(songQueue.length === 1){
        songQueue.playFirst();
      }
    }, this)

   // params.library.on('dequeue', function (song){
   //    var songQueue = this.get('songQueue');
   //    //console.log('AppModel dequeueing', song);
   //    songQueue.remove(song);
   //    songQueue.playFirst();

   //  }, this)

  }

});
