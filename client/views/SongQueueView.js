// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "div",

  initialize: function() {
    this.render();

    this.collection.on('remove',function(){
      this.render();
    },this);
  
    this.collection.on('add',function(){
      //console.log("SongQueueView add detected!")
      this.render();
    },this);

    this.collection.on('change:playIndicator',function(model){
      //console.log("SongQueueView play change detected!",model.get('playIndicator'),model.get('title'))
      this.render();
    },this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.attr('class','Queue').html('<h2>Play Queue</h2>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
