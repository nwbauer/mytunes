// SongQueue.js - Defines a backbone model class for the song queue.
var PlayList = Backbone.Model.extend({
  
  defaults:{
    name: 'playlist',
    list: new Songs(),
  },
  initialize: function(params){
    this.get('list').on('add',function(){
      console.log('song added to playlist',this.get('list'));
      this.trigger('renderPlayListView');
    },this);
  },
  addAllToQueue:function(){
    this.trigger('addMeToQueue',this);
  }

});
