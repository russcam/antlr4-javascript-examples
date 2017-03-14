var PainlessCompleter = require("./PainlessCompleter");
var painlessCompleter = new PainlessCompleter();
var langTools = ace.require("ace/ext/language_tools");
var editor = ace.edit('editor');

editor.setTheme("ace/theme/monokai");
editor.getSession().setMode('ace/mode/mode-painless');
editor.setOptions({ fontSize: "14pt", enableBasicAutocompletion: true });

langTools.addCompleter(painlessCompleter);
