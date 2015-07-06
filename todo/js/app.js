/**
 * Created by linxd on 2015/7/5.
 */

var app = app || {};

var ENTER_KEY = 13;

$(function () {
    console.log(app);
    var appView = new app.AppView({collection:app.Todos});
});
