 /* Javascript Template. Technique: 1:  Using jQuery without any template engine */
define(['backbone'], function(Backbone) {
    return Backbone.View.extend({
        tagName: 'div',
        className: 'todo-form',
        render: function() {
            var title = "Hello World";
            this.$el.html(
                $('<h1 />').text(title)
            )
        }
    })
})