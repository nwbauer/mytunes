// SongQueue.js - Defines a backbone model class for the song queue.
var PlayLists = Songs.extend({
  
  events:{
  },

  initialize: function(){
    this.on('renderPlayListView', function (){
      console.log("In PlayLists, passing render up to PlayListsView")
      this.trigger('renderPlayListsView');
    })
    
  },

  

});
