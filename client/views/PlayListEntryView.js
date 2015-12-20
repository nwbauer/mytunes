// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var PlayListEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'div',

  template: _.template('<span class="removeButton">-</span><span class="artist">(<%= artist %>)</span><span class="title"><%= title %></span>'),

  events: {
    'click .removeButton': function(){
      console.log("removing song");
      this.model.removeFromList();
    }
  },

  render: function(){
    console.log('rendering PlayListEntryView ');
    return this.$el.attr('class', 'listSong').html(this.template(this.model.attributes));
  }
});
