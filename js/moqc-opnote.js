

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

            //show the full node controls
            $("#fullNodesTitleDiv").attr('hidden', false);
            $("#fullNodesFormDiv").attr('hidden', false);

            //hide the half node controls
            $("#leftNodesTitleDiv").attr('hidden', true);
            $("#leftNodesFormDiv").attr('hidden', true);
            $("#rightNodesTitleDiv").attr('hidden', true);
            $("#rightNodesFormDiv").attr('hidden', true);

            //require these radio buttons
            $("#fullNodes1").attr('required', true);
            $("#fullNodes2").attr('required', true);
            $("#fullNodes3").attr('required', true);

        });

        $('#dissection2').click(function() {

            //hide the full node controls
            $("#fullNodesTitleDiv").attr('hidden', true);
            $("#fullNodesFormDiv").attr('hidden', true);

            //show the half node controls
            $("#leftNodesTitleDiv").attr('hidden', false);
            $("#leftNodesFormDiv").attr('hidden', false);
            $("#rightNodesTitleDiv").attr('hidden', false);
            $("#rightNodesFormDiv").attr('hidden', false);

            //do not require since these are hidden
            $("#fullNodes1").attr('required', false);
            $("#fullNodes2").attr('required', false);
            $("#fullNodes3").attr('required', false);
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

