// SongQueueView.js - Defines a backbone view class for the song queue.
var PlayListView = Backbone.View.extend({

  tagName: "div",

  initialize: function() {
    // this.render();
    this.model.on('renderPlayListView',function(){
      this.trigger('renderPlayListsView',this);
    },this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    console.log('rendering PlayListView');

    var list = this.model.get('list');

    this.$el.attr('class','PlayList').html('<h2>PlayList</h2>').append(
      list.map(function(song){
        return new PlayListEntryView({model: song}).render();
      })
    );
  }

});
