

function renderSurvey() {

    var data = {

    };

    var surveyFormTemplate = _.template($('#survey-form-template').html())(data);
    $('#mainpage').html(surveyFormTemplate);

}

renderSurvey();