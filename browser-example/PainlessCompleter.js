var Definition = require("Definition");

function PainlessCompleter() {}

PainlessCompleter.prototype.getCompletions = function(editor, session, pos, prefix, callback) {
    if (prefix.length === 0) { 
        callback(null, []); 
        return;
    }

    // TODO: need to determine if we are dealing with a class, variable, method, etc.
    // by hooking into the ErrorHandlerListener
    var candidates = Definition.classes.filter(function (elem, i, array) {
        return elem.name.startsWith(prefix);
    });

    callback(null, candidates.map(function(c) {
        return {name: c.name, value: c.name, score: 1, meta: "class"}
    }));
}

module.exports = PainlessCompleter;