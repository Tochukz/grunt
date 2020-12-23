/* Using Template Module */
define(['backbone', 'js/template'], function(Backbone, Template) {
    return Backbone.View.extends({
        tagName: 'div',
        className: 'todo-form',
        template: Template["build/templates/form.hbs"],
        render: function() {
            var title = "Hello World!";
            this.$rl.html(
                this.template({title: title})
            );
        }
    });
});