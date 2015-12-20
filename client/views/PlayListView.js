// SongQueueView.js - Defines a backbone view class for the song queue.
var PlayListView = Backbone.View.extend({

  tagName: "div",

  initialize: function() {
    // this.render();
    this.model.on('renderPlayListView',function(){
      console.log('rendering playList');
      this.trigger('renderPlayListsView',this);
    },this);

  },

  events: {
    'click .play': function(){
      console.log('play clicked');
      this.model.addAllToQueue();
    }
  },
  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    console.log('rendering PlayListView', this.$el.html());

    var list = this.model.get('list');

    return this.$el.attr('class','PlayList').html('<h3>My Jams<span class="play">&#9658;</span></h3>').append(
      list.map(function(song){
        return new PlayListEntryView({model: song}).render();
      })
    );
  }

});
