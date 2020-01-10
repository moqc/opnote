

HomeOpnoteView = Backbone.View.extend({
    el:'#mainpage',
    render: function() {
        var that = this;

        //render header
        var data = {
            surgicalType: ""
        };
        var opnoteHeaderTemplate = _.template($('#opnote-header-template').html())(data);
        $('#header').html(opnoteHeaderTemplate);

        //render mainpage buttons
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

        //render header
        var data = {
            surgicalType: " - Ovarian Surgery"
        };
        var opnoteHeaderTemplate = _.template($('#opnote-header-template').html())(data);
        $('#header').html(opnoteHeaderTemplate);
    
        //render mainpage form
        var ovarianOpnoteTemplate = _.template($('#ovarian-opnote-template').html())({});
        that.$el.html(ovarianOpnoteTemplate);

    }
});
var ovarianOpnoteView = new OvarianOpnoteView();


CervicalOpnoteView = Backbone.View.extend({
    el:'#mainpage',
    render: function() {
        var that = this;

        //render header
        var data = {
            surgicalType: " - Cervical Surgery"
        };
        var opnoteHeaderTemplate = _.template($('#opnote-header-template').html())(data);
        $('#header').html(opnoteHeaderTemplate);

        //render mainpage form
        var cervicalOpnoteTemplate = _.template($('#cervical-opnote-template').html())({});
        that.$el.html(cervicalOpnoteTemplate);

        $('#dissection1').click(function() {
            console.log("FULL");

            $("#fullNodesTitleDiv").attr('hidden', false);
            $("#fullNodesFormDiv").attr('hidden', false);

            $("#leftNodesTitleDiv").attr('hidden', true);
            $("#leftNodesFormDiv").attr('hidden', true);
            $("#rightNodesTitleDiv").attr('hidden', true);
            $("#rightNodesFormDiv").attr('hidden', true);

        });

        $('#dissection2').click(function() {
            console.log("HALF");

            $("#fullNodesTitleDiv").attr('hidden', true);
            $("#fullNodesFormDiv").attr('hidden', true);

            $("#leftNodesTitleDiv").attr('hidden', false);
            $("#leftNodesFormDiv").attr('hidden', false);
            $("#rightNodesTitleDiv").attr('hidden', false);
            $("#rightNodesFormDiv").attr('hidden', false);
        });

    }
});
var cervicalOpnoteView = new CervicalOpnoteView();


EndometrialOpnoteView = Backbone.View.extend({
    el:'#mainpage',
    render: function() {
        var that = this;
        
        //render header
        var data = {
            surgicalType: " - Endometrial Surgery"
        };
        var opnoteHeaderTemplate = _.template($('#opnote-header-template').html())(data);
        $('#header').html(opnoteHeaderTemplate);

        //render mainpage form
        var endometrialOpnoteTemplate = _.template($('#endometrial-opnote-template').html())({});
        that.$el.html(endometrialOpnoteTemplate);
    }
});
var endometrialOpnoteView = new EndometrialOpnoteView();

