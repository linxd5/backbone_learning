/**
 * Created by linxd on 2015/7/5.
 */

var app = app || {};

app.Todo = Backbone.Model.extend({
    defaults: {
        title: "",
        completed: false
    },

    toggle: function() {
        this.save({
            completed: !this.get("completed")
        });
    }
});
