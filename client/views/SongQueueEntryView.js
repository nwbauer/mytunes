// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'div',

  template: _.template('<span class="artist"><%= playIndicator %>(<%= artist %>)</span><span class="title"><%= title %></span>'),

  events: {
    click: function(){}
  },

  render: function(){
    return this.$el.attr('class', 'queueSong').html(this.template(this.model.attributes));
  }
});
