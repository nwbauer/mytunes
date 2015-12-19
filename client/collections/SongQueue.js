// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  
  
  comparator: 'timeEnqueued',
  
  initialize: function(){
    
    this.on('add',function (song){
      // console.log("SongQueue song added!",song);
      
      if(this.length === 1){
        console.log("play first");
        this.playFirst();
      }
    });

    this.on('ended dequeue', function (){
      // console.log('ended triggered, dequeueing',this);
      //this.remove(song);
      this.shift();
      if(this.length !== 0){
        this.playFirst();
      }

    });

  },

  playFirst: function(){
    // console.log('playing first',this.at(0));
    this.at(0).play();

  }

});
