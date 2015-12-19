// SongQueueView.js - Defines a backbone view class for the song queue.
var PlayListsView = Backbone.View.extend({

  tagName: "div",

  initialize: function() {
    this.render();
    
    this.collection.on('renderPlayListsView', function(){
      console.log("Rendering the PlayListsView");
      this.render();
    }, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    console.log('rendering PlayListsView');

    this.$el.attr('class','PlayList').html('<h2>PlayList</h2>').append(
      this.collection.map(function(playList){
        return new PlayListView({model: playList}).render();
      })
    );
  }

});
