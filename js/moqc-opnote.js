

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

            //scroll
            $("body,html").animate(
                {
                  scrollTop: $("#fullNodesTitleDiv").offset().top
                },
                500 //speed
            );

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
            
            //scroll
            $("body,html").animate(
                {
                  scrollTop: $("#leftNodesTitleDiv").offset().top
                },
                500 //speed
            );
        });

        //on the form submit generate the opnote
        $('#opnoteForm').submit(function (e) {
            e.preventDefault();
            var formId = this.id;  // "this" is a reference to the submitted form

            // var formData = $('#opnoteForm').serializeArray().reduce(function(obj, item) {
            //     obj[item.name] = item.value;
            //     return obj;
            // }, {});

            var formData = $('#opnoteForm').serializeArray();

            console.log(formData);

            var opnote = generateOpnote(formData);

            $('#generatedOpnote').html(opnote);
            $('#generatedOpnote').slideDown(500);
            $('#copyToClipboardDiv').slideDown(500);
            
            $("body,html").animate(
                {
                  scrollTop: $("#generatedOpnoteDiv").offset().top
                },
                500 //speed
            );

            $('#copyToClipboardButton').click(function() {
                copyToClipboard(opnote);
                $('#copiedAlert').fadeIn(200);
            });

        });

        $('#resetFormButton').click(function() {
            router.navigate("cervical");
            window.location.reload();
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


function generateOpnote(formData) {

    var generatedText = "";

    var useHistologyText = false;

    //collapse any same-named entries into the same value
    var entryMap = {};
    var firstLine = true;
    for(var i = 0; i < formData.length; i++) {

        //special case for histology
        if(formData[i].name == "Histology" && formData[i].value == "Other") {
            useHistologyText = true;
        } else {

            if(formData[i].name == "histologyTextInput" && !useHistologyText) {
                //do nothing
            } else {

                //if there are multiple entries with the same name, then put them under the same heading
                if(!entryMap.hasOwnProperty(formData[i].name)) {
                    generatedText += '\n' + translateName(formData[i].name) + ": " + formData[i].value;
                    entryMap[formData[i].name] = "";
                } else {
                    generatedText += ", " + formData[i].value;
                }
            }
        }
    }

    generatedText += '\n' + '\n';

    return generatedText;
}

function translateName(name) {

    //special case change the text input name
    if(name == "histologyTextInput") {
        return "Histology";
    }

    //replace all the underscores with spaces
    return name.replace(/_/g, ' ');
}

// https://stackoverflow.com/a/33946647
function copyToClipboard(textToCopy) {
    // Create a dummy input to copy the string array inside it
    var dummy = document.createElement("textarea");

    // Add it to the document
    document.body.appendChild(dummy);

    // Set its ID
    dummy.setAttribute("id", "dummy_id");

    // Output the array into it
    document.getElementById("dummy_id").value=textToCopy;

    // Select it
    dummy.select();

    // Copy its contents
    document.execCommand("copy");

    // Remove it as its not needed anymore
    document.body.removeChild(dummy);
}
