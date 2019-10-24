/* JavaScript Template. Technique 2: Inline templates using Underscore.js template function */
define(['backbone', 'underscore'], function(Backbone, _) {
    return Backbone.View.extend({
        tagName: 'div',
        className: 'todo-form',
        template: _.template('<h1><%= title %></h1>'),
        render: function() {
            var title = "Hello World";
            this.$el.html(
                this.template({title: title})
            );
        }
    });
});