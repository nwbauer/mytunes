// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',

  template: _.template('<span class="addButton">+</span><span class="artist">(<%= artist %>)</span><span class="title"><%= title %></span><span class="playCount"><%= playCount %></span>'),


  initialize: function(){
    
    this.model.on('change:playCount', function(){
      console.log("rendering library");
      this.render();
    },this);

  },

  events: {
    'click .artist, .title': function() {
      this.model.enqueue();
      this.model.play();
    },
    'click .addButton': function(){
      this.model.saveToList();
    },
  },

  render: function(){
    //console.log('rendering entry');
    return this.$el.attr("class", "librarySong").html(this.template(this.model.attributes));
  }

});
