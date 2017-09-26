
function getScriptUrl() {
  var url=ScriptApp.getService().getUrl();
  return url;  
}


function doGet(e){

  Logger.log(JSON.stringify(e));
  
  return HtmlService.createTemplateFromFile('index').evaluate();
  
}


//Include new files contents into HTML.
function include(filename) {
  return HtmlService.createTemplateFromFile(filename)
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .getContent();
 }
