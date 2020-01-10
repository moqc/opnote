

HomeOpnoteView = Backbone.View.extend({
    el:'#mainpage',
    render: function() {
        var that = this;

        var opnoteHomeTemplate = _.template($('#opnote-home-template').html())({});
        that.$el.html(opnoteHomeTemplate);

        $('#ovarianOpnoteButton').click(function() {
            router.navigate("ovarian", true);
        });

        $('#cervicalOpnoteButton').click(function() {
            router.navigate("cervical", true);
        });

        $('#endometrialOpnoteButton').click(function() {
            router.navigate("endometrial", true);
        });
    }
});
var homeOpnoteView = new HomeOpnoteView();


OvarianOpnoteView = Backbone.View.extend({
    el:'#mainpage',
    render: function() {
        var that = this;

        var data = {

        };
    
        var ovarianOpnoteTemplate = _.template($('#ovarian-opnote-template').html())(data);
        that.$el.html(ovarianOpnoteTemplate);

    }
});
var ovarianOpnoteView = new OvarianOpnoteView();


CervicalOpnoteView = Backbone.View.extend({
    el:'#mainpage',
    render: function() {
        var that = this;

        var data = {

        };
    
        var cervicalOpnoteTemplate = _.template($('#cervical-opnote-template').html())(data);
        that.$el.html(cervicalOpnoteTemplate);

    }
});
var cervicalOpnoteView = new CervicalOpnoteView();


EndometrialOpnoteView = Backbone.View.extend({
    el:'#mainpage',
    render: function() {
        var that = this;

        var data = {

        };
    
        var endometrialOpnoteTemplate = _.template($('#endometrial-opnote-template').html())(data);
        that.$el.html(endometrialOpnoteTemplate);
    }
});
var endometrialOpnoteView = new EndometrialOpnoteView();

