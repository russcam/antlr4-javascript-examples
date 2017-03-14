ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
    "use strict";

    var oop = require("ace/lib/oop");
    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

    var DocCommentHighlightRules = function() {
        this.$rules = {
            "start" : [ {
                token : "comment.doc.tag",
                regex : "@[\\w\\d_]+" // TODO: fix email addresses
            }, 
            DocCommentHighlightRules.getTagRule(),
            {
                defaultToken : "comment.doc",
                caseInsensitive: true
            }]
        };
    };

    oop.inherits(DocCommentHighlightRules, TextHighlightRules);

    DocCommentHighlightRules.getTagRule = function(start) {
        return {
            token : "comment.doc.tag.storage.type",
            regex : "\\b(?:TODO|FIXME|XXX|HACK)\\b"
        };
    }

    DocCommentHighlightRules.getStartRule = function(start) {
        return {
            token : "comment.doc", // doc comment
            regex : "\\/\\*(?=\\*)",
            next  : start
        };
    };

    DocCommentHighlightRules.getEndRule = function (start) {
        return {
            token : "comment.doc", // closing comment
            regex : "\\*\\/",
            next  : start
        };
    };

    exports.DocCommentHighlightRules = DocCommentHighlightRules;
});


ace.define("ace/mode/painless_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules"], function(require, exports, module) {
    "use strict";

    var oop = require("ace/lib/oop");
    var DocCommentHighlightRules = require("ace/mode/doc_comment_highlight_rules").DocCommentHighlightRules;

    var PainlessHighlightRules = function() {
    this.$rules = {
        token: "comment.doc",
        regex: "\\/\\*(?=\\*)",
        caseInsensitive:true,
        push:[
            {
                token: "comment.doc",
                regex: "\\*\\/",
                caseInsensitive:true,
                next:"pop"
            },
            {defaultToken:"comment"}
        ]
    }
    };

    oop.inherits(PainlessHighlightRules, DocCommentHighlightRules);

    exports.PainlessHighlightRules = PainlessHighlightRules;
});


ace.define(
  'ace/mode/mode-painless',
  [
    "require",
    "exports",
    "module",
    "ace/lib/oop",
    "ace/mode/text",
    "ace/ext/antlr4/token-type-map",
    "ace/ext/antlr4/tokenizer",
    "ace/mode/text_highlight_rules",
    "ace/mode/doc_comment_highlight_rules",
    "ace/mode/painless_highlight_rules",
    "ace/worker/worker_client"
  ],
  function(require, exports, module) {
    var oop = require("ace/lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var PainlessHighlightRules = require("ace/mode/painless_highlight_rules").PainlessHighlightRules;
    var tokenTypeMapping = antlr4_require('./painless-token-type-mapping');
    var createTokenTypeMap = require('ace/ext/antlr4/token-type-map').createTokenTypeMap;
    var tokenTypeToNameMap = createTokenTypeMap(tokenTypeMapping);
    var PainlessLexer = antlr4_require('./parser/PainlessLexer').PainlessLexer;
    var Antlr4Tokenizer = require('ace/ext/antlr4/tokenizer').Antlr4Tokenizer;

    var PainlessMode = function() {

    };

    oop.inherits(PainlessMode, TextMode);

    (function() {

      this.$id = "ace/mode/mode-painless";

      this.HighlightRules = PainlessHighlightRules;

      this.getTokenizer = function() {
        if (!this.$tokenizer) {
          this.$highlightRules = this.$highlightRules || new this.HighlightRules();
          this.$tokenizer = new Antlr4Tokenizer(PainlessLexer, tokenTypeToNameMap);
        }
        return this.$tokenizer;
      };

      var WorkerClient = require("ace/worker/worker_client").WorkerClient;
      this.createWorker = function(session) {
        this.$worker = new WorkerClient(["ace"], "ace/worker/worker-painless", "PainlessWorker");
        this.$worker.attachToDocument(session.getDocument());

        this.$worker.on("errors", function(e) {
          session.setAnnotations(e.data);
        });

        this.$worker.on("annotate", function(e) {
          session.setAnnotations(e.data);
        });

        this.$worker.on("terminate", function() {
          session.clearAnnotations();
        });

        return this.$worker;

      };

    }).call(PainlessMode.prototype);

    exports.Mode = PainlessMode;
});