// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'div',

  template: _.template('<span class="playIndicator"><%= playIndicator %></span><span class="artist">(<%= artist %>)</span><span class="title"><%= title %></span>'),

  events: {
  },

  render: function(){
    return this.$el.attr('class', 'queueSong').html(this.template(this.model.attributes));
  }
});
