// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  
  defaults: {
    playIndicator: '',
    playCount: 0
  },

  initalize: function(){
    
  },
  play: function(){
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to.
    // Why do we need to pass along the keyword this when we trigger the 'play' event?
    

    this.trigger('play', this);
    // console.log("song playing");
    this.set('playIndicator','&#9658;');
    
    //console.log()
  },
  enqueue: function(){
    var d = new Date();
    this.set('timeEnqueued',-d.getTime());
    //console.log('SongModel enqueue fired');
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.timeEnqueued = 0;
    
    this.trigger('dequeue',this);
  },
  ended: function(){

    var playCount = this.get('playCount');
    this.set('playCount',playCount+1);
    console.log(playCount);
    
    this.timeEnqueued = 0;
    
    this.trigger('ended',this);
  },
  saveToList: function(listName){
    console.log('firing saveToList');
    this.trigger('saveToList',this);
  },
  removeFromList: function(){
    this.trigger('removeFromList',this);
  }

});
