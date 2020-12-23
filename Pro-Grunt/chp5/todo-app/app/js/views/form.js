/* Javascript Template. Technique: 3: Loading template from DOM */
define(['backbone'], function(Backbone) {
    return Backbone.View.extend({
        tagName: 'div',
        className: 'todo-form',
        render: function() {
            var title = "Hello World";
            
            /* Technique: 1:  Using jQuery without any template engine */
            this.$el.html(
                $('<h1 />').text(title)
            )

            /* Technique 2: Inline templares using underscore.js templare function */
           
        }
    })
})