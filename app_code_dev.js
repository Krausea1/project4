//app_code_dev.js


var URL = window.location.hostname;

var updateView =  async (button) => {

    if (button.dataset.querytype == 'by_course_code') {
        let queryvalue = document.querySelector('#codeQuery').value;
        api = `https://${URL}/api/by_course_code/${queryvalue}`;
    }
  
    if (button.dataset.querytype == 'by_title') {
        let queryvalue = document.querySelector('#titleQuery').value;
        api = `https://${URL}/api/by_title/${queryvalue}`;
    }

    if (button.dataset.querytype == 'by_instructor') {
        let queryvalue = document.querySelector('#instructorQuery').value;
        api = `https://${URL}/api/by_instructor/${queryvalue}`;
    }

    if (button.dataset.querytype == 'by_level') {
        let queryvalue = document.querySelector('#levelQuery').value;
        api = `https://${URL}/api/by_level/${queryvalue}`;
    }

    if (button.dataset.querytype == 'combined_query') {
        let queryName = document.querySelector('#nameQuery').value;
        let queryLevel = document.querySelector('#levQuery').value;
        api = `https://${URL}/api/combined_query/${queryName}/${queryLevel}`;
    } 
    const data = await fetch(api);
    const model = await data.json();
    render_view(model);
   
} 

//HTML page/
var render_view = (model) => {
    var source = document.querySelector("#show_results_view").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(model);
    document.querySelector("#results").innerHTML = html;
}