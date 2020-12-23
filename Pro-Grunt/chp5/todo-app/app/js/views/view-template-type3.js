/* Javascript Template. Technique: 3: Loading template from DOM */
define(['backbone', 'underscore'], function(Backbone, _) {
    return Backbone.View.extend({
        tagName: 'div',
        className: 'todo-form',
        template: _.template(document.getElementById('title-tmp1').innerHTML),
        render: function() {
            var title = "Hello World";
            this.$el.html(
                this.template({title: title})
            );
        }
    });
});

/**
 The template with the id "title-tmp1" is defined in HTML document using a script tag as show below
 <script type="text/template" id="title-tmp1">
  <h1><%= title %></h1>
 </script>
 */