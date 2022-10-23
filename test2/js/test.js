var codehtml = htmleditor.getValue();
var codecss = '\n<style>\n' + csseditor.getValue() + '\n</style>\n';
var codejs = '\n<scr' + 'ipt>\n' + jseditor.getValue() + '\n</scr' + 'ipt>\n';
localStorage.setItem("codehtml",codehtml);
localStorage.setItem("codecss",codecss);
localStorage.setItem("codejs",codejs);