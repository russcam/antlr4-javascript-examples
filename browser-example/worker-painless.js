importScripts("bower_components/ace-worker/worker.js");
importScripts("bower_components/ace-builds/src-noconflict/ace.js");
importScripts("bower_components/ace-worker/mirror.js");

ace.define('ace/worker/worker-painless',["require","exports","module","ace/lib/oop","ace/worker/mirror"], function(require, exports, module) {
  "use strict";

  var oop = require("ace/lib/oop");
  var Mirror = require("ace/worker/mirror").Mirror;

  var PainlessWorker = function(sender) {
    Mirror.call(this, sender);
    this.setTimeout(200);
    this.$dialect = null;
  };

  oop.inherits(PainlessWorker, Mirror);

  // load nodejs compatible require
  var ace_require = require;
  window.require = undefined; // prevent error: "Honey: 'require' already defined in global scope"
  var Honey = { 'requirePath': ['..'] }; // walk up to js folder, see Honey docs
  importScripts("./require.js");
  var antlr4_require = window.require;
  window.require = require = ace_require;

  // load antlr4 and painless
  var antlr4, PainlessLexer, PainlessParser;
  try {
    window.require = antlr4_require;
    antlr4 = antlr4_require('antlr4/index');
    PainlessLexer = antlr4_require('parser/PainlessLexer').PainlessLexer;
    PainlessParser = antlr4_require('parser/PainlessParser').PainlessParser;
  } finally {
    window.require = ace_require;
  }

  // class for gathering errors and posting them to ACE editor
  var AnnotatingErrorListener = function(annotations) {
    antlr4.error.ErrorListener.call(this);
    this.annotations = annotations;
    this.partialToken = null;
    return this;
  };

  AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
  AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;

  AnnotatingErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    this.annotations.push({
      row: line - 1,
      column: column,
      text: msg,
      type: "error"
    });

//// Autocompletion
    this.partialToken = null;
    var typeAssistTokens = ["TYPE", "ID", "DOTID"];
    var parser = recognizer._ctx.parser;
    var tokens = parser.getTokenStream().tokens;

    // last token is always "fake" EOF token
    if (tokens.length > 1) {
        var lastToken = tokens[tokens.length - 2];
        var tokenType = parser.symbolicNames[lastToken.type];

        this.tokenType = tokenType;
        //if (typeAssistTokens.indexOf(tokenType) >= 0) {
            console.log("last token is " + lastToken.text + ". token type is " + tokenType);
            this.partialToken = lastToken.text;
        //}
    }
////

  };

  function validate(input) {
    var stream = new antlr4.InputStream(input);
    var lexer = new PainlessLexer(stream);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new PainlessParser(tokens);
    var annotations = [];
    var listener = new AnnotatingErrorListener(annotations);
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    parser.source();
    return annotations;
  }

  (function() {

    this.onUpdate = function() {
      var value = this.doc.getValue();
      var annotations = validate(value);
      this.sender.emit("annotate", annotations);
    };

  }).call(PainlessWorker.prototype);

  exports.PainlessWorker = PainlessWorker;
});