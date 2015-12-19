// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  comparator: 'timeEnqueued',
  initialize: function(){
    this.on('removeFromList',function(song){
      this.remove(song);
    },this);
  }

});