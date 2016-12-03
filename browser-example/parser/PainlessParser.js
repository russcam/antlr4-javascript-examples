// Generated from browser-example/PainlessParser.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PainlessParserListener = require('./PainlessParserListener').PainlessParserListener;
var grammarFileName = "PainlessParser.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003T\u01fb\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0003\u0002\u0007\u0002D\n\u0002",
    "\f\u0002\u000e\u0002G\u000b\u0002\u0003\u0002\u0007\u0002J\n\u0002\f",
    "\u0002\u000e\u0002M\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "]\n\u0004\f\u0004\u000e\u0004`\u000b\u0004\u0005\u0004b\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005n\n\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005v\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005\u0083\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "\u0087\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u008b\n\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u0090\n\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0006\u0005\u00b1\n\u0005\r\u0005\u000e\u0005\u00b2\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005\u00bc\n\u0005\u0003\u0006\u0003\u0006\u0005\u0006\u00c0\n\u0006",
    "\u0003\u0007\u0003\u0007\u0007\u0007\u00c4\n\u0007\f\u0007\u000e\u0007",
    "\u00c7\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0005\t\u00cf\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0007\u000b\u00d7\n\u000b\f\u000b\u000e\u000b\u00da\u000b",
    "\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u00df\n\f\f\f\u000e\f\u00e2\u000b",
    "\f\u0003\r\u0003\r\u0003\r\u0005\r\u00e7\n\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0007\u0010\u0122\n\u0010\f\u0010\u000e\u0010\u0125\u000b",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u0134\n\u0011\u0003\u0012\u0003\u0012",
    "\u0007\u0012\u0138\n\u0012\f\u0012\u000e\u0012\u013b\u000b\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u0140\n\u0012\f\u0012\u000e",
    "\u0012\u0143\u000b\u0012\u0003\u0012\u0005\u0012\u0146\n\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005",
    "\u0013\u015a\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014",
    "\u015f\n\u0014\u0003\u0015\u0003\u0015\u0005\u0015\u0163\n\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0006\u0019\u0176",
    "\n\u0019\r\u0019\u000e\u0019\u0177\u0003\u0019\u0003\u0019\u0007\u0019",
    "\u017c\n\u0019\f\u0019\u000e\u0019\u017f\u000b\u0019\u0005\u0019\u0181",
    "\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u018b\n\u0019\f\u0019",
    "\u000e\u0019\u018e\u000b\u0019\u0005\u0019\u0190\n\u0019\u0003\u0019",
    "\u0005\u0019\u0193\n\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u0197",
    "\n\u0019\f\u0019\u000e\u0019\u019a\u000b\u0019\u0005\u0019\u019c\n\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u01a2\n",
    "\u001a\f\u001a\u000e\u001a\u01a5\u000b\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0005\u001a\u01ab\n\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u01b1\n\u001b\f\u001b\u000e",
    "\u001b\u01b4\u000b\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0005\u001b\u01bb\n\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0007",
    "\u001d\u01c5\n\u001d\f\u001d\u000e\u001d\u01c8\u000b\u001d\u0005\u001d",
    "\u01ca\n\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0005\u001e\u01d1\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0007\u001f\u01d8\n\u001f\f\u001f\u000e\u001f",
    "\u01db\u000b\u001f\u0005\u001f\u01dd\n\u001f\u0003\u001f\u0005\u001f",
    "\u01e0\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u01e5",
    "\n\u001f\u0003 \u0005 \u01e8\n \u0003 \u0003 \u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0005",
    "!\u01f9\n!\u0003!\u0002\u0003\u001e\"\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@\u0002",
    "\u000e\u0003\u0003\r\r\u0003\u0002\u001f!\u0003\u0002\"#\u0003\u0002",
    "89\u0003\u0002$&\u0003\u0002\'*\u0003\u0002+.\u0003\u0002<G\u0003\u0002",
    ":;\u0004\u0002\u001d\u001e\"#\u0003\u0002HK\u0003\u0002ST\u0233\u0002",
    "E\u0003\u0002\u0002\u0002\u0004P\u0003\u0002\u0002\u0002\u0006U\u0003",
    "\u0002\u0002\u0002\b\u00bb\u0003\u0002\u0002\u0002\n\u00bf\u0003\u0002",
    "\u0002\u0002\f\u00c1\u0003\u0002\u0002\u0002\u000e\u00ca\u0003\u0002",
    "\u0002\u0002\u0010\u00ce\u0003\u0002\u0002\u0002\u0012\u00d0\u0003\u0002",
    "\u0002\u0002\u0014\u00d2\u0003\u0002\u0002\u0002\u0016\u00db\u0003\u0002",
    "\u0002\u0002\u0018\u00e3\u0003\u0002\u0002\u0002\u001a\u00e8\u0003\u0002",
    "\u0002\u0002\u001c\u00ef\u0003\u0002\u0002\u0002\u001e\u00f1\u0003\u0002",
    "\u0002\u0002 \u0133\u0003\u0002\u0002\u0002\"\u0145\u0003\u0002\u0002",
    "\u0002$\u0159\u0003\u0002\u0002\u0002&\u015e\u0003\u0002\u0002\u0002",
    "(\u0162\u0003\u0002\u0002\u0002*\u0164\u0003\u0002\u0002\u0002,\u0168",
    "\u0003\u0002\u0002\u0002.\u016b\u0003\u0002\u0002\u00020\u019b\u0003",
    "\u0002\u0002\u00022\u01aa\u0003\u0002\u0002\u00024\u01ba\u0003\u0002",
    "\u0002\u00026\u01bc\u0003\u0002\u0002\u00028\u01c0\u0003\u0002\u0002",
    "\u0002:\u01d0\u0003\u0002\u0002\u0002<\u01df\u0003\u0002\u0002\u0002",
    ">\u01e7\u0003\u0002\u0002\u0002@\u01f8\u0003\u0002\u0002\u0002BD\u0005",
    "\u0004\u0003\u0002CB\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002\u0002",
    "EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FK\u0003\u0002\u0002",
    "\u0002GE\u0003\u0002\u0002\u0002HJ\u0005\b\u0005\u0002IH\u0003\u0002",
    "\u0002\u0002JM\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002KL\u0003",
    "\u0002\u0002\u0002LN\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002",
    "NO\u0007\u0002\u0002\u0003O\u0003\u0003\u0002\u0002\u0002PQ\u0005\u0016",
    "\f\u0002QR\u0007R\u0002\u0002RS\u0005\u0006\u0004\u0002ST\u0005\f\u0007",
    "\u0002T\u0005\u0003\u0002\u0002\u0002Ua\u0007\t\u0002\u0002VW\u0005",
    "\u0016\f\u0002W^\u0007R\u0002\u0002XY\u0007\f\u0002\u0002YZ\u0005\u0016",
    "\f\u0002Z[\u0007R\u0002\u0002[]\u0003\u0002\u0002\u0002\\X\u0003\u0002",
    "\u0002\u0002]`\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002^_",
    "\u0003\u0002\u0002\u0002_b\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002",
    "\u0002aV\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002bc\u0003\u0002",
    "\u0002\u0002cd\u0007\n\u0002\u0002d\u0007\u0003\u0002\u0002\u0002ef",
    "\u0007\u000e\u0002\u0002fg\u0007\t\u0002\u0002gh\u0005\u001e\u0010\u0002",
    "hi\u0007\n\u0002\u0002im\u0005\n\u0006\u0002jk\u0007\u0010\u0002\u0002",
    "kn\u0005\n\u0006\u0002ln\u0006\u0005\u0002\u0002mj\u0003\u0002\u0002",
    "\u0002ml\u0003\u0002\u0002\u0002n\u00bc\u0003\u0002\u0002\u0002op\u0007",
    "\u0011\u0002\u0002pq\u0007\t\u0002\u0002qr\u0005\u001e\u0010\u0002r",
    "u\u0007\n\u0002\u0002sv\u0005\n\u0006\u0002tv\u0005\u000e\b\u0002us",
    "\u0003\u0002\u0002\u0002ut\u0003\u0002\u0002\u0002v\u00bc\u0003\u0002",
    "\u0002\u0002wx\u0007\u0012\u0002\u0002xy\u0005\f\u0007\u0002yz\u0007",
    "\u0011\u0002\u0002z{\u0007\t\u0002\u0002{|\u0005\u001e\u0010\u0002|",
    "}\u0007\n\u0002\u0002}~\u0005\u001c\u000f\u0002~\u00bc\u0003\u0002\u0002",
    "\u0002\u007f\u0080\u0007\u0013\u0002\u0002\u0080\u0082\u0007\t\u0002",
    "\u0002\u0081\u0083\u0005\u0010\t\u0002\u0082\u0081\u0003\u0002\u0002",
    "\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002",
    "\u0002\u0084\u0086\u0007\r\u0002\u0002\u0085\u0087\u0005\u001e\u0010",
    "\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002",
    "\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u008a\u0007\r\u0002",
    "\u0002\u0089\u008b\u0005\u0012\n\u0002\u008a\u0089\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002",
    "\u0002\u008c\u008f\u0007\n\u0002\u0002\u008d\u0090\u0005\n\u0006\u0002",
    "\u008e\u0090\u0005\u000e\b\u0002\u008f\u008d\u0003\u0002\u0002\u0002",
    "\u008f\u008e\u0003\u0002\u0002\u0002\u0090\u00bc\u0003\u0002\u0002\u0002",
    "\u0091\u0092\u0007\u0013\u0002\u0002\u0092\u0093\u0007\t\u0002\u0002",
    "\u0093\u0094\u0005\u0016\f\u0002\u0094\u0095\u0007R\u0002\u0002\u0095",
    "\u0096\u00075\u0002\u0002\u0096\u0097\u0005\u001e\u0010\u0002\u0097",
    "\u0098\u0007\n\u0002\u0002\u0098\u0099\u0005\n\u0006\u0002\u0099\u00bc",
    "\u0003\u0002\u0002\u0002\u009a\u009b\u0007\u0013\u0002\u0002\u009b\u009c",
    "\u0007\t\u0002\u0002\u009c\u009d\u0007R\u0002\u0002\u009d\u009e\u0007",
    "\u000f\u0002\u0002\u009e\u009f\u0005\u001e\u0010\u0002\u009f\u00a0\u0007",
    "\n\u0002\u0002\u00a0\u00a1\u0005\n\u0006\u0002\u00a1\u00bc\u0003\u0002",
    "\u0002\u0002\u00a2\u00a3\u0005\u0014\u000b\u0002\u00a3\u00a4\u0005\u001c",
    "\u000f\u0002\u00a4\u00bc\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007\u0014",
    "\u0002\u0002\u00a6\u00bc\u0005\u001c\u000f\u0002\u00a7\u00a8\u0007\u0015",
    "\u0002\u0002\u00a8\u00bc\u0005\u001c\u000f\u0002\u00a9\u00aa\u0007\u0016",
    "\u0002\u0002\u00aa\u00ab\u0005\u001e\u0010\u0002\u00ab\u00ac\u0005\u001c",
    "\u000f\u0002\u00ac\u00bc\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007\u0018",
    "\u0002\u0002\u00ae\u00b0\u0005\f\u0007\u0002\u00af\u00b1\u0005\u001a",
    "\u000e\u0002\u00b0\u00af\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002",
    "\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002",
    "\u0002\u0002\u00b3\u00bc\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007\u001a",
    "\u0002\u0002\u00b5\u00b6\u0005\u001e\u0010\u0002\u00b6\u00b7\u0005\u001c",
    "\u000f\u0002\u00b7\u00bc\u0003\u0002\u0002\u0002\u00b8\u00b9\u0005\u001e",
    "\u0010\u0002\u00b9\u00ba\u0005\u001c\u000f\u0002\u00ba\u00bc\u0003\u0002",
    "\u0002\u0002\u00bbe\u0003\u0002\u0002\u0002\u00bbo\u0003\u0002\u0002",
    "\u0002\u00bbw\u0003\u0002\u0002\u0002\u00bb\u007f\u0003\u0002\u0002",
    "\u0002\u00bb\u0091\u0003\u0002\u0002\u0002\u00bb\u009a\u0003\u0002\u0002",
    "\u0002\u00bb\u00a2\u0003\u0002\u0002\u0002\u00bb\u00a5\u0003\u0002\u0002",
    "\u0002\u00bb\u00a7\u0003\u0002\u0002\u0002\u00bb\u00a9\u0003\u0002\u0002",
    "\u0002\u00bb\u00ad\u0003\u0002\u0002\u0002\u00bb\u00b4\u0003\u0002\u0002",
    "\u0002\u00bb\u00b8\u0003\u0002\u0002\u0002\u00bc\t\u0003\u0002\u0002",
    "\u0002\u00bd\u00c0\u0005\f\u0007\u0002\u00be\u00c0\u0005\b\u0005\u0002",
    "\u00bf\u00bd\u0003\u0002\u0002\u0002\u00bf\u00be\u0003\u0002\u0002\u0002",
    "\u00c0\u000b\u0003\u0002\u0002\u0002\u00c1\u00c5\u0007\u0005\u0002\u0002",
    "\u00c2\u00c4\u0005\b\u0005\u0002\u00c3\u00c2\u0003\u0002\u0002\u0002",
    "\u00c4\u00c7\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002",
    "\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c8\u0003\u0002\u0002\u0002",
    "\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c8\u00c9\u0007\u0006\u0002\u0002",
    "\u00c9\r\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007\r\u0002\u0002\u00cb",
    "\u000f\u0003\u0002\u0002\u0002\u00cc\u00cf\u0005\u0014\u000b\u0002\u00cd",
    "\u00cf\u0005\u001e\u0010\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00ce",
    "\u00cd\u0003\u0002\u0002\u0002\u00cf\u0011\u0003\u0002\u0002\u0002\u00d0",
    "\u00d1\u0005\u001e\u0010\u0002\u00d1\u0013\u0003\u0002\u0002\u0002\u00d2",
    "\u00d3\u0005\u0016\f\u0002\u00d3\u00d8\u0005\u0018\r\u0002\u00d4\u00d5",
    "\u0007\f\u0002\u0002\u00d5\u00d7\u0005\u0018\r\u0002\u00d6\u00d4\u0003",
    "\u0002\u0002\u0002\u00d7\u00da\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003",
    "\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u0015\u0003",
    "\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00db\u00e0\u0007",
    "Q\u0002\u0002\u00dc\u00dd\u0007\u0007\u0002\u0002\u00dd\u00df\u0007",
    "\b\u0002\u0002\u00de\u00dc\u0003\u0002\u0002\u0002\u00df\u00e2\u0003",
    "\u0002\u0002\u0002\u00e0\u00de\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003",
    "\u0002\u0002\u0002\u00e1\u0017\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003",
    "\u0002\u0002\u0002\u00e3\u00e6\u0007R\u0002\u0002\u00e4\u00e5\u0007",
    "<\u0002\u0002\u00e5\u00e7\u0005\u001e\u0010\u0002\u00e6\u00e4\u0003",
    "\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u0019\u0003",
    "\u0002\u0002\u0002\u00e8\u00e9\u0007\u0019\u0002\u0002\u00e9\u00ea\u0007",
    "\t\u0002\u0002\u00ea\u00eb\u0007Q\u0002\u0002\u00eb\u00ec\u0007R\u0002",
    "\u0002\u00ec\u00ed\u0007\n\u0002\u0002\u00ed\u00ee\u0005\f\u0007\u0002",
    "\u00ee\u001b\u0003\u0002\u0002\u0002\u00ef\u00f0\t\u0002\u0002\u0002",
    "\u00f0\u001d\u0003\u0002\u0002\u0002\u00f1\u00f2\b\u0010\u0001\u0002",
    "\u00f2\u00f3\u0005 \u0011\u0002\u00f3\u0123\u0003\u0002\u0002\u0002",
    "\u00f4\u00f5\f\u0010\u0002\u0002\u00f5\u00f6\t\u0003\u0002\u0002\u00f6",
    "\u0122\u0005\u001e\u0010\u0011\u00f7\u00f8\f\u000f\u0002\u0002\u00f8",
    "\u00f9\t\u0004\u0002\u0002\u00f9\u0122\u0005\u001e\u0010\u0010\u00fa",
    "\u00fb\f\u000e\u0002\u0002\u00fb\u00fc\t\u0005\u0002\u0002\u00fc\u0122",
    "\u0005\u001e\u0010\u000f\u00fd\u00fe\f\r\u0002\u0002\u00fe\u00ff\t\u0006",
    "\u0002\u0002\u00ff\u0122\u0005\u001e\u0010\u000e\u0100\u0101\f\f\u0002",
    "\u0002\u0101\u0102\t\u0007\u0002\u0002\u0102\u0122\u0005\u001e\u0010",
    "\r\u0103\u0104\f\n\u0002\u0002\u0104\u0105\t\b\u0002\u0002\u0105\u0122",
    "\u0005\u001e\u0010\u000b\u0106\u0107\f\t\u0002\u0002\u0107\u0108\u0007",
    "/\u0002\u0002\u0108\u0122\u0005\u001e\u0010\n\u0109\u010a\f\b\u0002",
    "\u0002\u010a\u010b\u00070\u0002\u0002\u010b\u0122\u0005\u001e\u0010",
    "\t\u010c\u010d\f\u0007\u0002\u0002\u010d\u010e\u00071\u0002\u0002\u010e",
    "\u0122\u0005\u001e\u0010\b\u010f\u0110\f\u0006\u0002\u0002\u0110\u0111",
    "\u00072\u0002\u0002\u0111\u0122\u0005\u001e\u0010\u0007\u0112\u0113",
    "\f\u0005\u0002\u0002\u0113\u0114\u00073\u0002\u0002\u0114\u0122\u0005",
    "\u001e\u0010\u0006\u0115\u0116\f\u0004\u0002\u0002\u0116\u0117\u0007",
    "4\u0002\u0002\u0117\u0118\u0005\u001e\u0010\u0002\u0118\u0119\u0007",
    "5\u0002\u0002\u0119\u011a\u0005\u001e\u0010\u0004\u011a\u0122\u0003",
    "\u0002\u0002\u0002\u011b\u011c\f\u0003\u0002\u0002\u011c\u011d\t\t\u0002",
    "\u0002\u011d\u0122\u0005\u001e\u0010\u0003\u011e\u011f\f\u000b\u0002",
    "\u0002\u011f\u0120\u0007\u001c\u0002\u0002\u0120\u0122\u0005\u0016\f",
    "\u0002\u0121\u00f4\u0003\u0002\u0002\u0002\u0121\u00f7\u0003\u0002\u0002",
    "\u0002\u0121\u00fa\u0003\u0002\u0002\u0002\u0121\u00fd\u0003\u0002\u0002",
    "\u0002\u0121\u0100\u0003\u0002\u0002\u0002\u0121\u0103\u0003\u0002\u0002",
    "\u0002\u0121\u0106\u0003\u0002\u0002\u0002\u0121\u0109\u0003\u0002\u0002",
    "\u0002\u0121\u010c\u0003\u0002\u0002\u0002\u0121\u010f\u0003\u0002\u0002",
    "\u0002\u0121\u0112\u0003\u0002\u0002\u0002\u0121\u0115\u0003\u0002\u0002",
    "\u0002\u0121\u011b\u0003\u0002\u0002\u0002\u0121\u011e\u0003\u0002\u0002",
    "\u0002\u0122\u0125\u0003\u0002\u0002\u0002\u0123\u0121\u0003\u0002\u0002",
    "\u0002\u0123\u0124\u0003\u0002\u0002\u0002\u0124\u001f\u0003\u0002\u0002",
    "\u0002\u0125\u0123\u0003\u0002\u0002\u0002\u0126\u0127\t\n\u0002\u0002",
    "\u0127\u0134\u0005\"\u0012\u0002\u0128\u0129\u0005\"\u0012\u0002\u0129",
    "\u012a\t\n\u0002\u0002\u012a\u0134\u0003\u0002\u0002\u0002\u012b\u0134",
    "\u0005\"\u0012\u0002\u012c\u012d\t\u000b\u0002\u0002\u012d\u0134\u0005",
    " \u0011\u0002\u012e\u012f\u0007\t\u0002\u0002\u012f\u0130\u0005\u0016",
    "\f\u0002\u0130\u0131\u0007\n\u0002\u0002\u0131\u0132\u0005 \u0011\u0002",
    "\u0132\u0134\u0003\u0002\u0002\u0002\u0133\u0126\u0003\u0002\u0002\u0002",
    "\u0133\u0128\u0003\u0002\u0002\u0002\u0133\u012b\u0003\u0002\u0002\u0002",
    "\u0133\u012c\u0003\u0002\u0002\u0002\u0133\u012e\u0003\u0002\u0002\u0002",
    "\u0134!\u0003\u0002\u0002\u0002\u0135\u0139\u0005$\u0013\u0002\u0136",
    "\u0138\u0005&\u0014\u0002\u0137\u0136\u0003\u0002\u0002\u0002\u0138",
    "\u013b\u0003\u0002\u0002\u0002\u0139\u0137\u0003\u0002\u0002\u0002\u0139",
    "\u013a\u0003\u0002\u0002\u0002\u013a\u0146\u0003\u0002\u0002\u0002\u013b",
    "\u0139\u0003\u0002\u0002\u0002\u013c\u013d\u0005\u0016\f\u0002\u013d",
    "\u0141\u0005(\u0015\u0002\u013e\u0140\u0005&\u0014\u0002\u013f\u013e",
    "\u0003\u0002\u0002\u0002\u0140\u0143\u0003\u0002\u0002\u0002\u0141\u013f",
    "\u0003\u0002\u0002\u0002\u0141\u0142\u0003\u0002\u0002\u0002\u0142\u0146",
    "\u0003\u0002\u0002\u0002\u0143\u0141\u0003\u0002\u0002\u0002\u0144\u0146",
    "\u00050\u0019\u0002\u0145\u0135\u0003\u0002\u0002\u0002\u0145\u013c",
    "\u0003\u0002\u0002\u0002\u0145\u0144\u0003\u0002\u0002\u0002\u0146#",
    "\u0003\u0002\u0002\u0002\u0147\u0148\u0007\t\u0002\u0002\u0148\u0149",
    "\u0005\u001e\u0010\u0002\u0149\u014a\u0007\n\u0002\u0002\u014a\u015a",
    "\u0003\u0002\u0002\u0002\u014b\u015a\t\f\u0002\u0002\u014c\u015a\u0007",
    "N\u0002\u0002\u014d\u015a\u0007O\u0002\u0002\u014e\u015a\u0007P\u0002",
    "\u0002\u014f\u015a\u0007L\u0002\u0002\u0150\u015a\u0007M\u0002\u0002",
    "\u0151\u015a\u00052\u001a\u0002\u0152\u015a\u00054\u001b\u0002\u0153",
    "\u015a\u0007R\u0002\u0002\u0154\u0155\u0007R\u0002\u0002\u0155\u015a",
    "\u00058\u001d\u0002\u0156\u0157\u0007\u0017\u0002\u0002\u0157\u0158",
    "\u0007Q\u0002\u0002\u0158\u015a\u00058\u001d\u0002\u0159\u0147\u0003",
    "\u0002\u0002\u0002\u0159\u014b\u0003\u0002\u0002\u0002\u0159\u014c\u0003",
    "\u0002\u0002\u0002\u0159\u014d\u0003\u0002\u0002\u0002\u0159\u014e\u0003",
    "\u0002\u0002\u0002\u0159\u014f\u0003\u0002\u0002\u0002\u0159\u0150\u0003",
    "\u0002\u0002\u0002\u0159\u0151\u0003\u0002\u0002\u0002\u0159\u0152\u0003",
    "\u0002\u0002\u0002\u0159\u0153\u0003\u0002\u0002\u0002\u0159\u0154\u0003",
    "\u0002\u0002\u0002\u0159\u0156\u0003\u0002\u0002\u0002\u015a%\u0003",
    "\u0002\u0002\u0002\u015b\u015f\u0005*\u0016\u0002\u015c\u015f\u0005",
    ",\u0017\u0002\u015d\u015f\u0005.\u0018\u0002\u015e\u015b\u0003\u0002",
    "\u0002\u0002\u015e\u015c\u0003\u0002\u0002\u0002\u015e\u015d\u0003\u0002",
    "\u0002\u0002\u015f\'\u0003\u0002\u0002\u0002\u0160\u0163\u0005*\u0016",
    "\u0002\u0161\u0163\u0005,\u0017\u0002\u0162\u0160\u0003\u0002\u0002",
    "\u0002\u0162\u0161\u0003\u0002\u0002\u0002\u0163)\u0003\u0002\u0002",
    "\u0002\u0164\u0165\u0007\u000b\u0002\u0002\u0165\u0166\u0007T\u0002",
    "\u0002\u0166\u0167\u00058\u001d\u0002\u0167+\u0003\u0002\u0002\u0002",
    "\u0168\u0169\u0007\u000b\u0002\u0002\u0169\u016a\t\r\u0002\u0002\u016a",
    "-\u0003\u0002\u0002\u0002\u016b\u016c\u0007\u0007\u0002\u0002\u016c",
    "\u016d\u0005\u001e\u0010\u0002\u016d\u016e\u0007\b\u0002\u0002\u016e",
    "/\u0003\u0002\u0002\u0002\u016f\u0170\u0007\u0017\u0002\u0002\u0170",
    "\u0175\u0007Q\u0002\u0002\u0171\u0172\u0007\u0007\u0002\u0002\u0172",
    "\u0173\u0005\u001e\u0010\u0002\u0173\u0174\u0007\b\u0002\u0002\u0174",
    "\u0176\u0003\u0002\u0002\u0002\u0175\u0171\u0003\u0002\u0002\u0002\u0176",
    "\u0177\u0003\u0002\u0002\u0002\u0177\u0175\u0003\u0002\u0002\u0002\u0177",
    "\u0178\u0003\u0002\u0002\u0002\u0178\u0180\u0003\u0002\u0002\u0002\u0179",
    "\u017d\u0005(\u0015\u0002\u017a\u017c\u0005&\u0014\u0002\u017b\u017a",
    "\u0003\u0002\u0002\u0002\u017c\u017f\u0003\u0002\u0002\u0002\u017d\u017b",
    "\u0003\u0002\u0002\u0002\u017d\u017e\u0003\u0002\u0002\u0002\u017e\u0181",
    "\u0003\u0002\u0002\u0002\u017f\u017d\u0003\u0002\u0002\u0002\u0180\u0179",
    "\u0003\u0002\u0002\u0002\u0180\u0181\u0003\u0002\u0002\u0002\u0181\u019c",
    "\u0003\u0002\u0002\u0002\u0182\u0183\u0007\u0017\u0002\u0002\u0183\u0184",
    "\u0007Q\u0002\u0002\u0184\u0185\u0007\u0007\u0002\u0002\u0185\u0186",
    "\u0007\b\u0002\u0002\u0186\u018f\u0007\u0005\u0002\u0002\u0187\u018c",
    "\u0005\u001e\u0010\u0002\u0188\u0189\u0007\f\u0002\u0002\u0189\u018b",
    "\u0005\u001e\u0010\u0002\u018a\u0188\u0003\u0002\u0002\u0002\u018b\u018e",
    "\u0003\u0002\u0002\u0002\u018c\u018a\u0003\u0002\u0002\u0002\u018c\u018d",
    "\u0003\u0002\u0002\u0002\u018d\u0190\u0003\u0002\u0002\u0002\u018e\u018c",
    "\u0003\u0002\u0002\u0002\u018f\u0187\u0003\u0002\u0002\u0002\u018f\u0190",
    "\u0003\u0002\u0002\u0002\u0190\u0192\u0003\u0002\u0002\u0002\u0191\u0193",
    "\u0007\r\u0002\u0002\u0192\u0191\u0003\u0002\u0002\u0002\u0192\u0193",
    "\u0003\u0002\u0002\u0002\u0193\u0194\u0003\u0002\u0002\u0002\u0194\u0198",
    "\u0007\u0006\u0002\u0002\u0195\u0197\u0005&\u0014\u0002\u0196\u0195",
    "\u0003\u0002\u0002\u0002\u0197\u019a\u0003\u0002\u0002\u0002\u0198\u0196",
    "\u0003\u0002\u0002\u0002\u0198\u0199\u0003\u0002\u0002\u0002\u0199\u019c",
    "\u0003\u0002\u0002\u0002\u019a\u0198\u0003\u0002\u0002\u0002\u019b\u016f",
    "\u0003\u0002\u0002\u0002\u019b\u0182\u0003\u0002\u0002\u0002\u019c1",
    "\u0003\u0002\u0002\u0002\u019d\u019e\u0007\u0007\u0002\u0002\u019e\u01a3",
    "\u0005\u001e\u0010\u0002\u019f\u01a0\u0007\f\u0002\u0002\u01a0\u01a2",
    "\u0005\u001e\u0010\u0002\u01a1\u019f\u0003\u0002\u0002\u0002\u01a2\u01a5",
    "\u0003\u0002\u0002\u0002\u01a3\u01a1\u0003\u0002\u0002\u0002\u01a3\u01a4",
    "\u0003\u0002\u0002\u0002\u01a4\u01a6\u0003\u0002\u0002\u0002\u01a5\u01a3",
    "\u0003\u0002\u0002\u0002\u01a6\u01a7\u0007\b\u0002\u0002\u01a7\u01ab",
    "\u0003\u0002\u0002\u0002\u01a8\u01a9\u0007\u0007\u0002\u0002\u01a9\u01ab",
    "\u0007\b\u0002\u0002\u01aa\u019d\u0003\u0002\u0002\u0002\u01aa\u01a8",
    "\u0003\u0002\u0002\u0002\u01ab3\u0003\u0002\u0002\u0002\u01ac\u01ad",
    "\u0007\u0007\u0002\u0002\u01ad\u01b2\u00056\u001c\u0002\u01ae\u01af",
    "\u0007\f\u0002\u0002\u01af\u01b1\u00056\u001c\u0002\u01b0\u01ae\u0003",
    "\u0002\u0002\u0002\u01b1\u01b4\u0003\u0002\u0002\u0002\u01b2\u01b0\u0003",
    "\u0002\u0002\u0002\u01b2\u01b3\u0003\u0002\u0002\u0002\u01b3\u01b5\u0003",
    "\u0002\u0002\u0002\u01b4\u01b2\u0003\u0002\u0002\u0002\u01b5\u01b6\u0007",
    "\b\u0002\u0002\u01b6\u01bb\u0003\u0002\u0002\u0002\u01b7\u01b8\u0007",
    "\u0007\u0002\u0002\u01b8\u01b9\u00075\u0002\u0002\u01b9\u01bb\u0007",
    "\b\u0002\u0002\u01ba\u01ac\u0003\u0002\u0002\u0002\u01ba\u01b7\u0003",
    "\u0002\u0002\u0002\u01bb5\u0003\u0002\u0002\u0002\u01bc\u01bd\u0005",
    "\u001e\u0010\u0002\u01bd\u01be\u00075\u0002\u0002\u01be\u01bf\u0005",
    "\u001e\u0010\u0002\u01bf7\u0003\u0002\u0002\u0002\u01c0\u01c9\u0007",
    "\t\u0002\u0002\u01c1\u01c6\u0005:\u001e\u0002\u01c2\u01c3\u0007\f\u0002",
    "\u0002\u01c3\u01c5\u0005:\u001e\u0002\u01c4\u01c2\u0003\u0002\u0002",
    "\u0002\u01c5\u01c8\u0003\u0002\u0002\u0002\u01c6\u01c4\u0003\u0002\u0002",
    "\u0002\u01c6\u01c7\u0003\u0002\u0002\u0002\u01c7\u01ca\u0003\u0002\u0002",
    "\u0002\u01c8\u01c6\u0003\u0002\u0002\u0002\u01c9\u01c1\u0003\u0002\u0002",
    "\u0002\u01c9\u01ca\u0003\u0002\u0002\u0002\u01ca\u01cb\u0003\u0002\u0002",
    "\u0002\u01cb\u01cc\u0007\n\u0002\u0002\u01cc9\u0003\u0002\u0002\u0002",
    "\u01cd\u01d1\u0005\u001e\u0010\u0002\u01ce\u01d1\u0005<\u001f\u0002",
    "\u01cf\u01d1\u0005@!\u0002\u01d0\u01cd\u0003\u0002\u0002\u0002\u01d0",
    "\u01ce\u0003\u0002\u0002\u0002\u01d0\u01cf\u0003\u0002\u0002\u0002\u01d1",
    ";\u0003\u0002\u0002\u0002\u01d2\u01e0\u0005> \u0002\u01d3\u01dc\u0007",
    "\t\u0002\u0002\u01d4\u01d9\u0005> \u0002\u01d5\u01d6\u0007\f\u0002\u0002",
    "\u01d6\u01d8\u0005> \u0002\u01d7\u01d5\u0003\u0002\u0002\u0002\u01d8",
    "\u01db\u0003\u0002\u0002\u0002\u01d9\u01d7\u0003\u0002\u0002\u0002\u01d9",
    "\u01da\u0003\u0002\u0002\u0002\u01da\u01dd\u0003\u0002\u0002\u0002\u01db",
    "\u01d9\u0003\u0002\u0002\u0002\u01dc\u01d4\u0003\u0002\u0002\u0002\u01dc",
    "\u01dd\u0003\u0002\u0002\u0002\u01dd\u01de\u0003\u0002\u0002\u0002\u01de",
    "\u01e0\u0007\n\u0002\u0002\u01df\u01d2\u0003\u0002\u0002\u0002\u01df",
    "\u01d3\u0003\u0002\u0002\u0002\u01e0\u01e1\u0003\u0002\u0002\u0002\u01e1",
    "\u01e4\u00077\u0002\u0002\u01e2\u01e5\u0005\f\u0007\u0002\u01e3\u01e5",
    "\u0005\u001e\u0010\u0002\u01e4\u01e2\u0003\u0002\u0002\u0002\u01e4\u01e3",
    "\u0003\u0002\u0002\u0002\u01e5=\u0003\u0002\u0002\u0002\u01e6\u01e8",
    "\u0005\u0016\f\u0002\u01e7\u01e6\u0003\u0002\u0002\u0002\u01e7\u01e8",
    "\u0003\u0002\u0002\u0002\u01e8\u01e9\u0003\u0002\u0002\u0002\u01e9\u01ea",
    "\u0007R\u0002\u0002\u01ea?\u0003\u0002\u0002\u0002\u01eb\u01ec\u0007",
    "Q\u0002\u0002\u01ec\u01ed\u00076\u0002\u0002\u01ed\u01f9\u0007R\u0002",
    "\u0002\u01ee\u01ef\u0005\u0016\f\u0002\u01ef\u01f0\u00076\u0002\u0002",
    "\u01f0\u01f1\u0007\u0017\u0002\u0002\u01f1\u01f9\u0003\u0002\u0002\u0002",
    "\u01f2\u01f3\u0007R\u0002\u0002\u01f3\u01f4\u00076\u0002\u0002\u01f4",
    "\u01f9\u0007R\u0002\u0002\u01f5\u01f6\u0007\u001b\u0002\u0002\u01f6",
    "\u01f7\u00076\u0002\u0002\u01f7\u01f9\u0007R\u0002\u0002\u01f8\u01eb",
    "\u0003\u0002\u0002\u0002\u01f8\u01ee\u0003\u0002\u0002\u0002\u01f8\u01f2",
    "\u0003\u0002\u0002\u0002\u01f8\u01f5\u0003\u0002\u0002\u0002\u01f9A",
    "\u0003\u0002\u0002\u00022EK^amu\u0082\u0086\u008a\u008f\u00b2\u00bb",
    "\u00bf\u00c5\u00ce\u00d8\u00e0\u00e6\u0121\u0123\u0133\u0139\u0141\u0145",
    "\u0159\u015e\u0162\u0177\u017d\u0180\u018c\u018f\u0192\u0198\u019b\u01a3",
    "\u01aa\u01b2\u01ba\u01c6\u01c9\u01d0\u01d9\u01dc\u01df\u01e4\u01e7\u01f8"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'{'", "'}'", "'['", "']'", "'('", 
                     "')'", "'.'", "','", "';'", "'if'", "'in'", "'else'", 
                     "'while'", "'do'", "'for'", "'continue'", "'break'", 
                     "'return'", "'new'", "'try'", "'catch'", "'throw'", 
                     "'this'", "'instanceof'", "'!'", "'~'", "'*'", "'/'", 
                     "'%'", "'+'", "'-'", "'<<'", "'>>'", "'>>>'", "'<'", 
                     "'<='", "'>'", "'>='", "'=='", "'==='", "'!='", "'!=='", 
                     "'&'", "'^'", "'|'", "'&&'", "'||'", "'?'", "':'", 
                     "'::'", "'->'", "'=~'", "'==~'", "'++'", "'--'", "'='", 
                     "'+='", "'-='", "'*='", "'/='", "'%='", "'&='", "'^='", 
                     "'|='", "'<<='", "'>>='", "'>>>='", null, null, null, 
                     null, null, null, "'true'", "'false'", "'null'" ];

var symbolicNames = [ null, "WS", "COMMENT", "LBRACK", "RBRACK", "LBRACE", 
                      "RBRACE", "LP", "RP", "DOT", "COMMA", "SEMICOLON", 
                      "IF", "IN", "ELSE", "WHILE", "DO", "FOR", "CONTINUE", 
                      "BREAK", "RETURN", "NEW", "TRY", "CATCH", "THROW", 
                      "THIS", "INSTANCEOF", "BOOLNOT", "BWNOT", "MUL", "DIV", 
                      "REM", "ADD", "SUB", "LSH", "RSH", "USH", "LT", "LTE", 
                      "GT", "GTE", "EQ", "EQR", "NE", "NER", "BWAND", "XOR", 
                      "BWOR", "BOOLAND", "BOOLOR", "COND", "COLON", "REF", 
                      "ARROW", "FIND", "MATCH", "INCR", "DECR", "ASSIGN", 
                      "AADD", "ASUB", "AMUL", "ADIV", "AREM", "AAND", "AXOR", 
                      "AOR", "ALSH", "ARSH", "AUSH", "OCTAL", "HEX", "INTEGER", 
                      "DECIMAL", "STRING", "REGEX", "TRUE", "FALSE", "NULL", 
                      "TYPE", "ID", "DOTINTEGER", "DOTID" ];

var ruleNames =  [ "source", "afunction", "parameters", "statement", "trailer", 
                   "block", "empty", "initializer", "afterthought", "declaration", 
                   "decltype", "declvar", "trap", "delimiter", "expression", 
                   "unary", "chain", "primary", "postfix", "postdot", "callinvoke", 
                   "fieldaccess", "braceaccess", "arrayinitializer", "listinitializer", 
                   "mapinitializer", "maptoken", "arguments", "argument", 
                   "lambda", "lamtype", "funcref" ];

function PainlessParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PainlessParser.prototype = Object.create(antlr4.Parser.prototype);
PainlessParser.prototype.constructor = PainlessParser;

Object.defineProperty(PainlessParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PainlessParser.EOF = antlr4.Token.EOF;
PainlessParser.WS = 1;
PainlessParser.COMMENT = 2;
PainlessParser.LBRACK = 3;
PainlessParser.RBRACK = 4;
PainlessParser.LBRACE = 5;
PainlessParser.RBRACE = 6;
PainlessParser.LP = 7;
PainlessParser.RP = 8;
PainlessParser.DOT = 9;
PainlessParser.COMMA = 10;
PainlessParser.SEMICOLON = 11;
PainlessParser.IF = 12;
PainlessParser.IN = 13;
PainlessParser.ELSE = 14;
PainlessParser.WHILE = 15;
PainlessParser.DO = 16;
PainlessParser.FOR = 17;
PainlessParser.CONTINUE = 18;
PainlessParser.BREAK = 19;
PainlessParser.RETURN = 20;
PainlessParser.NEW = 21;
PainlessParser.TRY = 22;
PainlessParser.CATCH = 23;
PainlessParser.THROW = 24;
PainlessParser.THIS = 25;
PainlessParser.INSTANCEOF = 26;
PainlessParser.BOOLNOT = 27;
PainlessParser.BWNOT = 28;
PainlessParser.MUL = 29;
PainlessParser.DIV = 30;
PainlessParser.REM = 31;
PainlessParser.ADD = 32;
PainlessParser.SUB = 33;
PainlessParser.LSH = 34;
PainlessParser.RSH = 35;
PainlessParser.USH = 36;
PainlessParser.LT = 37;
PainlessParser.LTE = 38;
PainlessParser.GT = 39;
PainlessParser.GTE = 40;
PainlessParser.EQ = 41;
PainlessParser.EQR = 42;
PainlessParser.NE = 43;
PainlessParser.NER = 44;
PainlessParser.BWAND = 45;
PainlessParser.XOR = 46;
PainlessParser.BWOR = 47;
PainlessParser.BOOLAND = 48;
PainlessParser.BOOLOR = 49;
PainlessParser.COND = 50;
PainlessParser.COLON = 51;
PainlessParser.REF = 52;
PainlessParser.ARROW = 53;
PainlessParser.FIND = 54;
PainlessParser.MATCH = 55;
PainlessParser.INCR = 56;
PainlessParser.DECR = 57;
PainlessParser.ASSIGN = 58;
PainlessParser.AADD = 59;
PainlessParser.ASUB = 60;
PainlessParser.AMUL = 61;
PainlessParser.ADIV = 62;
PainlessParser.AREM = 63;
PainlessParser.AAND = 64;
PainlessParser.AXOR = 65;
PainlessParser.AOR = 66;
PainlessParser.ALSH = 67;
PainlessParser.ARSH = 68;
PainlessParser.AUSH = 69;
PainlessParser.OCTAL = 70;
PainlessParser.HEX = 71;
PainlessParser.INTEGER = 72;
PainlessParser.DECIMAL = 73;
PainlessParser.STRING = 74;
PainlessParser.REGEX = 75;
PainlessParser.TRUE = 76;
PainlessParser.FALSE = 77;
PainlessParser.NULL = 78;
PainlessParser.TYPE = 79;
PainlessParser.ID = 80;
PainlessParser.DOTINTEGER = 81;
PainlessParser.DOTID = 82;

PainlessParser.RULE_source = 0;
PainlessParser.RULE_afunction = 1;
PainlessParser.RULE_parameters = 2;
PainlessParser.RULE_statement = 3;
PainlessParser.RULE_trailer = 4;
PainlessParser.RULE_block = 5;
PainlessParser.RULE_empty = 6;
PainlessParser.RULE_initializer = 7;
PainlessParser.RULE_afterthought = 8;
PainlessParser.RULE_declaration = 9;
PainlessParser.RULE_decltype = 10;
PainlessParser.RULE_declvar = 11;
PainlessParser.RULE_trap = 12;
PainlessParser.RULE_delimiter = 13;
PainlessParser.RULE_expression = 14;
PainlessParser.RULE_unary = 15;
PainlessParser.RULE_chain = 16;
PainlessParser.RULE_primary = 17;
PainlessParser.RULE_postfix = 18;
PainlessParser.RULE_postdot = 19;
PainlessParser.RULE_callinvoke = 20;
PainlessParser.RULE_fieldaccess = 21;
PainlessParser.RULE_braceaccess = 22;
PainlessParser.RULE_arrayinitializer = 23;
PainlessParser.RULE_listinitializer = 24;
PainlessParser.RULE_mapinitializer = 25;
PainlessParser.RULE_maptoken = 26;
PainlessParser.RULE_arguments = 27;
PainlessParser.RULE_argument = 28;
PainlessParser.RULE_lambda = 29;
PainlessParser.RULE_lamtype = 30;
PainlessParser.RULE_funcref = 31;

function SourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_source;
    return this;
}

SourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceContext.prototype.constructor = SourceContext;

SourceContext.prototype.EOF = function() {
    return this.getToken(PainlessParser.EOF, 0);
};

SourceContext.prototype.afunction = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AfunctionContext);
    } else {
        return this.getTypedRuleContext(AfunctionContext,i);
    }
};

SourceContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

SourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterSource(this);
	}
};

SourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitSource(this);
	}
};




PainlessParser.SourceContext = SourceContext;

PainlessParser.prototype.source = function() {

    var localctx = new SourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, PainlessParser.RULE_source);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 64;
                this.afunction(); 
            }
            this.state = 69;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

        this.state = 73;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.IF - 5)) | (1 << (PainlessParser.WHILE - 5)) | (1 << (PainlessParser.DO - 5)) | (1 << (PainlessParser.FOR - 5)) | (1 << (PainlessParser.CONTINUE - 5)) | (1 << (PainlessParser.BREAK - 5)) | (1 << (PainlessParser.RETURN - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.TRY - 5)) | (1 << (PainlessParser.THROW - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (PainlessParser.INCR - 56)) | (1 << (PainlessParser.DECR - 56)) | (1 << (PainlessParser.OCTAL - 56)) | (1 << (PainlessParser.HEX - 56)) | (1 << (PainlessParser.INTEGER - 56)) | (1 << (PainlessParser.DECIMAL - 56)) | (1 << (PainlessParser.STRING - 56)) | (1 << (PainlessParser.REGEX - 56)) | (1 << (PainlessParser.TRUE - 56)) | (1 << (PainlessParser.FALSE - 56)) | (1 << (PainlessParser.NULL - 56)) | (1 << (PainlessParser.TYPE - 56)) | (1 << (PainlessParser.ID - 56)))) !== 0)) {
            this.state = 70;
            this.statement();
            this.state = 75;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 76;
        this.match(PainlessParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AfunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_afunction;
    return this;
}

AfunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AfunctionContext.prototype.constructor = AfunctionContext;

AfunctionContext.prototype.decltype = function() {
    return this.getTypedRuleContext(DecltypeContext,0);
};

AfunctionContext.prototype.ID = function() {
    return this.getToken(PainlessParser.ID, 0);
};

AfunctionContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

AfunctionContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

AfunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterAfunction(this);
	}
};

AfunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitAfunction(this);
	}
};




PainlessParser.AfunctionContext = AfunctionContext;

PainlessParser.prototype.afunction = function() {

    var localctx = new AfunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, PainlessParser.RULE_afunction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.decltype();
        this.state = 79;
        this.match(PainlessParser.ID);
        this.state = 80;
        this.parameters();
        this.state = 81;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.LP = function() {
    return this.getToken(PainlessParser.LP, 0);
};

ParametersContext.prototype.RP = function() {
    return this.getToken(PainlessParser.RP, 0);
};

ParametersContext.prototype.decltype = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DecltypeContext);
    } else {
        return this.getTypedRuleContext(DecltypeContext,i);
    }
};

ParametersContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.ID);
    } else {
        return this.getToken(PainlessParser.ID, i);
    }
};


ParametersContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.COMMA);
    } else {
        return this.getToken(PainlessParser.COMMA, i);
    }
};


ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitParameters(this);
	}
};




PainlessParser.ParametersContext = ParametersContext;

PainlessParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PainlessParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(PainlessParser.LP);
        this.state = 95;
        _la = this._input.LA(1);
        if(_la===PainlessParser.TYPE) {
            this.state = 84;
            this.decltype();
            this.state = 85;
            this.match(PainlessParser.ID);
            this.state = 92;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PainlessParser.COMMA) {
                this.state = 86;
                this.match(PainlessParser.COMMA);
                this.state = 87;
                this.decltype();
                this.state = 88;
                this.match(PainlessParser.ID);
                this.state = 94;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 97;
        this.match(PainlessParser.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;


 
StatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DeclContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeclContext.prototype = Object.create(StatementContext.prototype);
DeclContext.prototype.constructor = DeclContext;

PainlessParser.DeclContext = DeclContext;

DeclContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

DeclContext.prototype.delimiter = function() {
    return this.getTypedRuleContext(DelimiterContext,0);
};
DeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterDecl(this);
	}
};

DeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitDecl(this);
	}
};


function BreakContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BreakContext.prototype = Object.create(StatementContext.prototype);
BreakContext.prototype.constructor = BreakContext;

PainlessParser.BreakContext = BreakContext;

BreakContext.prototype.BREAK = function() {
    return this.getToken(PainlessParser.BREAK, 0);
};

BreakContext.prototype.delimiter = function() {
    return this.getTypedRuleContext(DelimiterContext,0);
};
BreakContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterBreak(this);
	}
};

BreakContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitBreak(this);
	}
};


function ForContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForContext.prototype = Object.create(StatementContext.prototype);
ForContext.prototype.constructor = ForContext;

PainlessParser.ForContext = ForContext;

ForContext.prototype.FOR = function() {
    return this.getToken(PainlessParser.FOR, 0);
};

ForContext.prototype.LP = function() {
    return this.getToken(PainlessParser.LP, 0);
};

ForContext.prototype.SEMICOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.SEMICOLON);
    } else {
        return this.getToken(PainlessParser.SEMICOLON, i);
    }
};


ForContext.prototype.RP = function() {
    return this.getToken(PainlessParser.RP, 0);
};

ForContext.prototype.trailer = function() {
    return this.getTypedRuleContext(TrailerContext,0);
};

ForContext.prototype.empty = function() {
    return this.getTypedRuleContext(EmptyContext,0);
};

ForContext.prototype.initializer = function() {
    return this.getTypedRuleContext(InitializerContext,0);
};

ForContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ForContext.prototype.afterthought = function() {
    return this.getTypedRuleContext(AfterthoughtContext,0);
};
ForContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterFor(this);
	}
};

ForContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitFor(this);
	}
};


function DoContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DoContext.prototype = Object.create(StatementContext.prototype);
DoContext.prototype.constructor = DoContext;

PainlessParser.DoContext = DoContext;

DoContext.prototype.DO = function() {
    return this.getToken(PainlessParser.DO, 0);
};

DoContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

DoContext.prototype.WHILE = function() {
    return this.getToken(PainlessParser.WHILE, 0);
};

DoContext.prototype.LP = function() {
    return this.getToken(PainlessParser.LP, 0);
};

DoContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DoContext.prototype.RP = function() {
    return this.getToken(PainlessParser.RP, 0);
};

DoContext.prototype.delimiter = function() {
    return this.getTypedRuleContext(DelimiterContext,0);
};
DoContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterDo(this);
	}
};

DoContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitDo(this);
	}
};


function WhileContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhileContext.prototype = Object.create(StatementContext.prototype);
WhileContext.prototype.constructor = WhileContext;

PainlessParser.WhileContext = WhileContext;

WhileContext.prototype.WHILE = function() {
    return this.getToken(PainlessParser.WHILE, 0);
};

WhileContext.prototype.LP = function() {
    return this.getToken(PainlessParser.LP, 0);
};

WhileContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileContext.prototype.RP = function() {
    return this.getToken(PainlessParser.RP, 0);
};

WhileContext.prototype.trailer = function() {
    return this.getTypedRuleContext(TrailerContext,0);
};

WhileContext.prototype.empty = function() {
    return this.getTypedRuleContext(EmptyContext,0);
};
WhileContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterWhile(this);
	}
};

WhileContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitWhile(this);
	}
};


function IneachContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IneachContext.prototype = Object.create(StatementContext.prototype);
IneachContext.prototype.constructor = IneachContext;

PainlessParser.IneachContext = IneachContext;

IneachContext.prototype.FOR = function() {
    return this.getToken(PainlessParser.FOR, 0);
};

IneachContext.prototype.LP = function() {
    return this.getToken(PainlessParser.LP, 0);
};

IneachContext.prototype.ID = function() {
    return this.getToken(PainlessParser.ID, 0);
};

IneachContext.prototype.IN = function() {
    return this.getToken(PainlessParser.IN, 0);
};

IneachContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IneachContext.prototype.RP = function() {
    return this.getToken(PainlessParser.RP, 0);
};

IneachContext.prototype.trailer = function() {
    return this.getTypedRuleContext(TrailerContext,0);
};
IneachContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterIneach(this);
	}
};

IneachContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitIneach(this);
	}
};


function EachContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EachContext.prototype = Object.create(StatementContext.prototype);
EachContext.prototype.constructor = EachContext;

PainlessParser.EachContext = EachContext;

EachContext.prototype.FOR = function() {
    return this.getToken(PainlessParser.FOR, 0);
};

EachContext.prototype.LP = function() {
    return this.getToken(PainlessParser.LP, 0);
};

EachContext.prototype.decltype = function() {
    return this.getTypedRuleContext(DecltypeContext,0);
};

EachContext.prototype.ID = function() {
    return this.getToken(PainlessParser.ID, 0);
};

EachContext.prototype.COLON = function() {
    return this.getToken(PainlessParser.COLON, 0);
};

EachContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

EachContext.prototype.RP = function() {
    return this.getToken(PainlessParser.RP, 0);
};

EachContext.prototype.trailer = function() {
    return this.getTypedRuleContext(TrailerContext,0);
};
EachContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterEach(this);
	}
};

EachContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitEach(this);
	}
};


function ThrowContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ThrowContext.prototype = Object.create(StatementContext.prototype);
ThrowContext.prototype.constructor = ThrowContext;

PainlessParser.ThrowContext = ThrowContext;

ThrowContext.prototype.THROW = function() {
    return this.getToken(PainlessParser.THROW, 0);
};

ThrowContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ThrowContext.prototype.delimiter = function() {
    return this.getTypedRuleContext(DelimiterContext,0);
};
ThrowContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterThrow(this);
	}
};

ThrowContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitThrow(this);
	}
};


function ContinueContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ContinueContext.prototype = Object.create(StatementContext.prototype);
ContinueContext.prototype.constructor = ContinueContext;

PainlessParser.ContinueContext = ContinueContext;

ContinueContext.prototype.CONTINUE = function() {
    return this.getToken(PainlessParser.CONTINUE, 0);
};

ContinueContext.prototype.delimiter = function() {
    return this.getTypedRuleContext(DelimiterContext,0);
};
ContinueContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterContinue(this);
	}
};

ContinueContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitContinue(this);
	}
};


function TryContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TryContext.prototype = Object.create(StatementContext.prototype);
TryContext.prototype.constructor = TryContext;

PainlessParser.TryContext = TryContext;

TryContext.prototype.TRY = function() {
    return this.getToken(PainlessParser.TRY, 0);
};

TryContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

TryContext.prototype.trap = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TrapContext);
    } else {
        return this.getTypedRuleContext(TrapContext,i);
    }
};
TryContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterTry(this);
	}
};

TryContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitTry(this);
	}
};


function ExprContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprContext.prototype = Object.create(StatementContext.prototype);
ExprContext.prototype.constructor = ExprContext;

PainlessParser.ExprContext = ExprContext;

ExprContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExprContext.prototype.delimiter = function() {
    return this.getTypedRuleContext(DelimiterContext,0);
};
ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitExpr(this);
	}
};


function IfContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IfContext.prototype = Object.create(StatementContext.prototype);
IfContext.prototype.constructor = IfContext;

PainlessParser.IfContext = IfContext;

IfContext.prototype.IF = function() {
    return this.getToken(PainlessParser.IF, 0);
};

IfContext.prototype.LP = function() {
    return this.getToken(PainlessParser.LP, 0);
};

IfContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfContext.prototype.RP = function() {
    return this.getToken(PainlessParser.RP, 0);
};

IfContext.prototype.trailer = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TrailerContext);
    } else {
        return this.getTypedRuleContext(TrailerContext,i);
    }
};

IfContext.prototype.ELSE = function() {
    return this.getToken(PainlessParser.ELSE, 0);
};
IfContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterIf(this);
	}
};

IfContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitIf(this);
	}
};


function ReturnContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReturnContext.prototype = Object.create(StatementContext.prototype);
ReturnContext.prototype.constructor = ReturnContext;

PainlessParser.ReturnContext = ReturnContext;

ReturnContext.prototype.RETURN = function() {
    return this.getToken(PainlessParser.RETURN, 0);
};

ReturnContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnContext.prototype.delimiter = function() {
    return this.getTypedRuleContext(DelimiterContext,0);
};
ReturnContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterReturn(this);
	}
};

ReturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitReturn(this);
	}
};



PainlessParser.StatementContext = StatementContext;

PainlessParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, PainlessParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 185;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            localctx = new IfContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 99;
            this.match(PainlessParser.IF);
            this.state = 100;
            this.match(PainlessParser.LP);
            this.state = 101;
            this.expression(0);
            this.state = 102;
            this.match(PainlessParser.RP);
            this.state = 103;
            this.trailer();
            this.state = 107;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
            switch(la_) {
            case 1:
                this.state = 104;
                this.match(PainlessParser.ELSE);
                this.state = 105;
                this.trailer();
                break;

            case 2:
                this.state = 106;
                if (!(  _input.LA(1) != ELSE )) {
                    throw new antlr4.error.FailedPredicateException(this, " _input.LA(1) != ELSE ");
                }
                break;

            }
            break;

        case 2:
            localctx = new WhileContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.match(PainlessParser.WHILE);
            this.state = 110;
            this.match(PainlessParser.LP);
            this.state = 111;
            this.expression(0);
            this.state = 112;
            this.match(PainlessParser.RP);
            this.state = 115;
            switch(this._input.LA(1)) {
            case PainlessParser.LBRACK:
            case PainlessParser.LBRACE:
            case PainlessParser.LP:
            case PainlessParser.IF:
            case PainlessParser.WHILE:
            case PainlessParser.DO:
            case PainlessParser.FOR:
            case PainlessParser.CONTINUE:
            case PainlessParser.BREAK:
            case PainlessParser.RETURN:
            case PainlessParser.NEW:
            case PainlessParser.TRY:
            case PainlessParser.THROW:
            case PainlessParser.BOOLNOT:
            case PainlessParser.BWNOT:
            case PainlessParser.ADD:
            case PainlessParser.SUB:
            case PainlessParser.INCR:
            case PainlessParser.DECR:
            case PainlessParser.OCTAL:
            case PainlessParser.HEX:
            case PainlessParser.INTEGER:
            case PainlessParser.DECIMAL:
            case PainlessParser.STRING:
            case PainlessParser.REGEX:
            case PainlessParser.TRUE:
            case PainlessParser.FALSE:
            case PainlessParser.NULL:
            case PainlessParser.TYPE:
            case PainlessParser.ID:
                this.state = 113;
                this.trailer();
                break;
            case PainlessParser.SEMICOLON:
                this.state = 114;
                this.empty();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;

        case 3:
            localctx = new DoContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 117;
            this.match(PainlessParser.DO);
            this.state = 118;
            this.block();
            this.state = 119;
            this.match(PainlessParser.WHILE);
            this.state = 120;
            this.match(PainlessParser.LP);
            this.state = 121;
            this.expression(0);
            this.state = 122;
            this.match(PainlessParser.RP);
            this.state = 123;
            this.delimiter();
            break;

        case 4:
            localctx = new ForContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 125;
            this.match(PainlessParser.FOR);
            this.state = 126;
            this.match(PainlessParser.LP);
            this.state = 128;
            _la = this._input.LA(1);
            if(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (PainlessParser.INCR - 56)) | (1 << (PainlessParser.DECR - 56)) | (1 << (PainlessParser.OCTAL - 56)) | (1 << (PainlessParser.HEX - 56)) | (1 << (PainlessParser.INTEGER - 56)) | (1 << (PainlessParser.DECIMAL - 56)) | (1 << (PainlessParser.STRING - 56)) | (1 << (PainlessParser.REGEX - 56)) | (1 << (PainlessParser.TRUE - 56)) | (1 << (PainlessParser.FALSE - 56)) | (1 << (PainlessParser.NULL - 56)) | (1 << (PainlessParser.TYPE - 56)) | (1 << (PainlessParser.ID - 56)))) !== 0)) {
                this.state = 127;
                this.initializer();
            }

            this.state = 130;
            this.match(PainlessParser.SEMICOLON);
            this.state = 132;
            _la = this._input.LA(1);
            if(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (PainlessParser.INCR - 56)) | (1 << (PainlessParser.DECR - 56)) | (1 << (PainlessParser.OCTAL - 56)) | (1 << (PainlessParser.HEX - 56)) | (1 << (PainlessParser.INTEGER - 56)) | (1 << (PainlessParser.DECIMAL - 56)) | (1 << (PainlessParser.STRING - 56)) | (1 << (PainlessParser.REGEX - 56)) | (1 << (PainlessParser.TRUE - 56)) | (1 << (PainlessParser.FALSE - 56)) | (1 << (PainlessParser.NULL - 56)) | (1 << (PainlessParser.TYPE - 56)) | (1 << (PainlessParser.ID - 56)))) !== 0)) {
                this.state = 131;
                this.expression(0);
            }

            this.state = 134;
            this.match(PainlessParser.SEMICOLON);
            this.state = 136;
            _la = this._input.LA(1);
            if(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (PainlessParser.INCR - 56)) | (1 << (PainlessParser.DECR - 56)) | (1 << (PainlessParser.OCTAL - 56)) | (1 << (PainlessParser.HEX - 56)) | (1 << (PainlessParser.INTEGER - 56)) | (1 << (PainlessParser.DECIMAL - 56)) | (1 << (PainlessParser.STRING - 56)) | (1 << (PainlessParser.REGEX - 56)) | (1 << (PainlessParser.TRUE - 56)) | (1 << (PainlessParser.FALSE - 56)) | (1 << (PainlessParser.NULL - 56)) | (1 << (PainlessParser.TYPE - 56)) | (1 << (PainlessParser.ID - 56)))) !== 0)) {
                this.state = 135;
                this.afterthought();
            }

            this.state = 138;
            this.match(PainlessParser.RP);
            this.state = 141;
            switch(this._input.LA(1)) {
            case PainlessParser.LBRACK:
            case PainlessParser.LBRACE:
            case PainlessParser.LP:
            case PainlessParser.IF:
            case PainlessParser.WHILE:
            case PainlessParser.DO:
            case PainlessParser.FOR:
            case PainlessParser.CONTINUE:
            case PainlessParser.BREAK:
            case PainlessParser.RETURN:
            case PainlessParser.NEW:
            case PainlessParser.TRY:
            case PainlessParser.THROW:
            case PainlessParser.BOOLNOT:
            case PainlessParser.BWNOT:
            case PainlessParser.ADD:
            case PainlessParser.SUB:
            case PainlessParser.INCR:
            case PainlessParser.DECR:
            case PainlessParser.OCTAL:
            case PainlessParser.HEX:
            case PainlessParser.INTEGER:
            case PainlessParser.DECIMAL:
            case PainlessParser.STRING:
            case PainlessParser.REGEX:
            case PainlessParser.TRUE:
            case PainlessParser.FALSE:
            case PainlessParser.NULL:
            case PainlessParser.TYPE:
            case PainlessParser.ID:
                this.state = 139;
                this.trailer();
                break;
            case PainlessParser.SEMICOLON:
                this.state = 140;
                this.empty();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;

        case 5:
            localctx = new EachContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 143;
            this.match(PainlessParser.FOR);
            this.state = 144;
            this.match(PainlessParser.LP);
            this.state = 145;
            this.decltype();
            this.state = 146;
            this.match(PainlessParser.ID);
            this.state = 147;
            this.match(PainlessParser.COLON);
            this.state = 148;
            this.expression(0);
            this.state = 149;
            this.match(PainlessParser.RP);
            this.state = 150;
            this.trailer();
            break;

        case 6:
            localctx = new IneachContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 152;
            this.match(PainlessParser.FOR);
            this.state = 153;
            this.match(PainlessParser.LP);
            this.state = 154;
            this.match(PainlessParser.ID);
            this.state = 155;
            this.match(PainlessParser.IN);
            this.state = 156;
            this.expression(0);
            this.state = 157;
            this.match(PainlessParser.RP);
            this.state = 158;
            this.trailer();
            break;

        case 7:
            localctx = new DeclContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 160;
            this.declaration();
            this.state = 161;
            this.delimiter();
            break;

        case 8:
            localctx = new ContinueContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 163;
            this.match(PainlessParser.CONTINUE);
            this.state = 164;
            this.delimiter();
            break;

        case 9:
            localctx = new BreakContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 165;
            this.match(PainlessParser.BREAK);
            this.state = 166;
            this.delimiter();
            break;

        case 10:
            localctx = new ReturnContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 167;
            this.match(PainlessParser.RETURN);
            this.state = 168;
            this.expression(0);
            this.state = 169;
            this.delimiter();
            break;

        case 11:
            localctx = new TryContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 171;
            this.match(PainlessParser.TRY);
            this.state = 172;
            this.block();
            this.state = 174; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 173;
            		this.trap();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 176; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 12:
            localctx = new ThrowContext(this, localctx);
            this.enterOuterAlt(localctx, 12);
            this.state = 178;
            this.match(PainlessParser.THROW);
            this.state = 179;
            this.expression(0);
            this.state = 180;
            this.delimiter();
            break;

        case 13:
            localctx = new ExprContext(this, localctx);
            this.enterOuterAlt(localctx, 13);
            this.state = 182;
            this.expression(0);
            this.state = 183;
            this.delimiter();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TrailerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_trailer;
    return this;
}

TrailerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrailerContext.prototype.constructor = TrailerContext;

TrailerContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

TrailerContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

TrailerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterTrailer(this);
	}
};

TrailerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitTrailer(this);
	}
};




PainlessParser.TrailerContext = TrailerContext;

PainlessParser.prototype.trailer = function() {

    var localctx = new TrailerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, PainlessParser.RULE_trailer);
    try {
        this.state = 189;
        switch(this._input.LA(1)) {
        case PainlessParser.LBRACK:
            this.enterOuterAlt(localctx, 1);
            this.state = 187;
            this.block();
            break;
        case PainlessParser.LBRACE:
        case PainlessParser.LP:
        case PainlessParser.IF:
        case PainlessParser.WHILE:
        case PainlessParser.DO:
        case PainlessParser.FOR:
        case PainlessParser.CONTINUE:
        case PainlessParser.BREAK:
        case PainlessParser.RETURN:
        case PainlessParser.NEW:
        case PainlessParser.TRY:
        case PainlessParser.THROW:
        case PainlessParser.BOOLNOT:
        case PainlessParser.BWNOT:
        case PainlessParser.ADD:
        case PainlessParser.SUB:
        case PainlessParser.INCR:
        case PainlessParser.DECR:
        case PainlessParser.OCTAL:
        case PainlessParser.HEX:
        case PainlessParser.INTEGER:
        case PainlessParser.DECIMAL:
        case PainlessParser.STRING:
        case PainlessParser.REGEX:
        case PainlessParser.TRUE:
        case PainlessParser.FALSE:
        case PainlessParser.NULL:
        case PainlessParser.TYPE:
        case PainlessParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 188;
            this.statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.LBRACK = function() {
    return this.getToken(PainlessParser.LBRACK, 0);
};

BlockContext.prototype.RBRACK = function() {
    return this.getToken(PainlessParser.RBRACK, 0);
};

BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitBlock(this);
	}
};




PainlessParser.BlockContext = BlockContext;

PainlessParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, PainlessParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(PainlessParser.LBRACK);
        this.state = 195;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.IF - 5)) | (1 << (PainlessParser.WHILE - 5)) | (1 << (PainlessParser.DO - 5)) | (1 << (PainlessParser.FOR - 5)) | (1 << (PainlessParser.CONTINUE - 5)) | (1 << (PainlessParser.BREAK - 5)) | (1 << (PainlessParser.RETURN - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.TRY - 5)) | (1 << (PainlessParser.THROW - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (PainlessParser.INCR - 56)) | (1 << (PainlessParser.DECR - 56)) | (1 << (PainlessParser.OCTAL - 56)) | (1 << (PainlessParser.HEX - 56)) | (1 << (PainlessParser.INTEGER - 56)) | (1 << (PainlessParser.DECIMAL - 56)) | (1 << (PainlessParser.STRING - 56)) | (1 << (PainlessParser.REGEX - 56)) | (1 << (PainlessParser.TRUE - 56)) | (1 << (PainlessParser.FALSE - 56)) | (1 << (PainlessParser.NULL - 56)) | (1 << (PainlessParser.TYPE - 56)) | (1 << (PainlessParser.ID - 56)))) !== 0)) {
            this.state = 192;
            this.statement();
            this.state = 197;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 198;
        this.match(PainlessParser.RBRACK);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EmptyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_empty;
    return this;
}

EmptyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyContext.prototype.constructor = EmptyContext;

EmptyContext.prototype.SEMICOLON = function() {
    return this.getToken(PainlessParser.SEMICOLON, 0);
};

EmptyContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterEmpty(this);
	}
};

EmptyContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitEmpty(this);
	}
};




PainlessParser.EmptyContext = EmptyContext;

PainlessParser.prototype.empty = function() {

    var localctx = new EmptyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, PainlessParser.RULE_empty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(PainlessParser.SEMICOLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_initializer;
    return this;
}

InitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitializerContext.prototype.constructor = InitializerContext;

InitializerContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

InitializerContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

InitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterInitializer(this);
	}
};

InitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitInitializer(this);
	}
};




PainlessParser.InitializerContext = InitializerContext;

PainlessParser.prototype.initializer = function() {

    var localctx = new InitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, PainlessParser.RULE_initializer);
    try {
        this.state = 204;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 202;
            this.declaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 203;
            this.expression(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AfterthoughtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_afterthought;
    return this;
}

AfterthoughtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AfterthoughtContext.prototype.constructor = AfterthoughtContext;

AfterthoughtContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AfterthoughtContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterAfterthought(this);
	}
};

AfterthoughtContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitAfterthought(this);
	}
};




PainlessParser.AfterthoughtContext = AfterthoughtContext;

PainlessParser.prototype.afterthought = function() {

    var localctx = new AfterthoughtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, PainlessParser.RULE_afterthought);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.decltype = function() {
    return this.getTypedRuleContext(DecltypeContext,0);
};

DeclarationContext.prototype.declvar = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclvarContext);
    } else {
        return this.getTypedRuleContext(DeclvarContext,i);
    }
};

DeclarationContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.COMMA);
    } else {
        return this.getToken(PainlessParser.COMMA, i);
    }
};


DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitDeclaration(this);
	}
};




PainlessParser.DeclarationContext = DeclarationContext;

PainlessParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, PainlessParser.RULE_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.decltype();
        this.state = 209;
        this.declvar();
        this.state = 214;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PainlessParser.COMMA) {
            this.state = 210;
            this.match(PainlessParser.COMMA);
            this.state = 211;
            this.declvar();
            this.state = 216;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DecltypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_decltype;
    return this;
}

DecltypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DecltypeContext.prototype.constructor = DecltypeContext;

DecltypeContext.prototype.TYPE = function() {
    return this.getToken(PainlessParser.TYPE, 0);
};

DecltypeContext.prototype.LBRACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.LBRACE);
    } else {
        return this.getToken(PainlessParser.LBRACE, i);
    }
};


DecltypeContext.prototype.RBRACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.RBRACE);
    } else {
        return this.getToken(PainlessParser.RBRACE, i);
    }
};


DecltypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterDecltype(this);
	}
};

DecltypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitDecltype(this);
	}
};




PainlessParser.DecltypeContext = DecltypeContext;

PainlessParser.prototype.decltype = function() {

    var localctx = new DecltypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, PainlessParser.RULE_decltype);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.match(PainlessParser.TYPE);
        this.state = 222;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 218;
                this.match(PainlessParser.LBRACE);
                this.state = 219;
                this.match(PainlessParser.RBRACE); 
            }
            this.state = 224;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclvarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_declvar;
    return this;
}

DeclvarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclvarContext.prototype.constructor = DeclvarContext;

DeclvarContext.prototype.ID = function() {
    return this.getToken(PainlessParser.ID, 0);
};

DeclvarContext.prototype.ASSIGN = function() {
    return this.getToken(PainlessParser.ASSIGN, 0);
};

DeclvarContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DeclvarContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterDeclvar(this);
	}
};

DeclvarContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitDeclvar(this);
	}
};




PainlessParser.DeclvarContext = DeclvarContext;

PainlessParser.prototype.declvar = function() {

    var localctx = new DeclvarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, PainlessParser.RULE_declvar);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.match(PainlessParser.ID);
        this.state = 228;
        _la = this._input.LA(1);
        if(_la===PainlessParser.ASSIGN) {
            this.state = 226;
            this.match(PainlessParser.ASSIGN);
            this.state = 227;
            this.expression(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TrapContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_trap;
    return this;
}

TrapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrapContext.prototype.constructor = TrapContext;

TrapContext.prototype.CATCH = function() {
    return this.getToken(PainlessParser.CATCH, 0);
};

TrapContext.prototype.LP = function() {
    return this.getToken(PainlessParser.LP, 0);
};

TrapContext.prototype.TYPE = function() {
    return this.getToken(PainlessParser.TYPE, 0);
};

TrapContext.prototype.ID = function() {
    return this.getToken(PainlessParser.ID, 0);
};

TrapContext.prototype.RP = function() {
    return this.getToken(PainlessParser.RP, 0);
};

TrapContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

TrapContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterTrap(this);
	}
};

TrapContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitTrap(this);
	}
};




PainlessParser.TrapContext = TrapContext;

PainlessParser.prototype.trap = function() {

    var localctx = new TrapContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, PainlessParser.RULE_trap);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.match(PainlessParser.CATCH);
        this.state = 231;
        this.match(PainlessParser.LP);
        this.state = 232;
        this.match(PainlessParser.TYPE);
        this.state = 233;
        this.match(PainlessParser.ID);
        this.state = 234;
        this.match(PainlessParser.RP);
        this.state = 235;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DelimiterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_delimiter;
    return this;
}

DelimiterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DelimiterContext.prototype.constructor = DelimiterContext;

DelimiterContext.prototype.SEMICOLON = function() {
    return this.getToken(PainlessParser.SEMICOLON, 0);
};

DelimiterContext.prototype.EOF = function() {
    return this.getToken(PainlessParser.EOF, 0);
};

DelimiterContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterDelimiter(this);
	}
};

DelimiterContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitDelimiter(this);
	}
};




PainlessParser.DelimiterContext = DelimiterContext;

PainlessParser.prototype.delimiter = function() {

    var localctx = new DelimiterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, PainlessParser.RULE_delimiter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        _la = this._input.LA(1);
        if(!(_la===PainlessParser.EOF || _la===PainlessParser.SEMICOLON)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function SingleContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SingleContext.prototype = Object.create(ExpressionContext.prototype);
SingleContext.prototype.constructor = SingleContext;

PainlessParser.SingleContext = SingleContext;

SingleContext.prototype.unary = function() {
    return this.getTypedRuleContext(UnaryContext,0);
};
SingleContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterSingle(this);
	}
};

SingleContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitSingle(this);
	}
};


function CompContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CompContext.prototype = Object.create(ExpressionContext.prototype);
CompContext.prototype.constructor = CompContext;

PainlessParser.CompContext = CompContext;

CompContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

CompContext.prototype.LT = function() {
    return this.getToken(PainlessParser.LT, 0);
};

CompContext.prototype.LTE = function() {
    return this.getToken(PainlessParser.LTE, 0);
};

CompContext.prototype.GT = function() {
    return this.getToken(PainlessParser.GT, 0);
};

CompContext.prototype.GTE = function() {
    return this.getToken(PainlessParser.GTE, 0);
};

CompContext.prototype.EQ = function() {
    return this.getToken(PainlessParser.EQ, 0);
};

CompContext.prototype.EQR = function() {
    return this.getToken(PainlessParser.EQR, 0);
};

CompContext.prototype.NE = function() {
    return this.getToken(PainlessParser.NE, 0);
};

CompContext.prototype.NER = function() {
    return this.getToken(PainlessParser.NER, 0);
};
CompContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterComp(this);
	}
};

CompContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitComp(this);
	}
};


function BoolContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolContext.prototype = Object.create(ExpressionContext.prototype);
BoolContext.prototype.constructor = BoolContext;

PainlessParser.BoolContext = BoolContext;

BoolContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

BoolContext.prototype.BOOLAND = function() {
    return this.getToken(PainlessParser.BOOLAND, 0);
};

BoolContext.prototype.BOOLOR = function() {
    return this.getToken(PainlessParser.BOOLOR, 0);
};
BoolContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterBool(this);
	}
};

BoolContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitBool(this);
	}
};


function ConditionalContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConditionalContext.prototype = Object.create(ExpressionContext.prototype);
ConditionalContext.prototype.constructor = ConditionalContext;

PainlessParser.ConditionalContext = ConditionalContext;

ConditionalContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ConditionalContext.prototype.COND = function() {
    return this.getToken(PainlessParser.COND, 0);
};

ConditionalContext.prototype.COLON = function() {
    return this.getToken(PainlessParser.COLON, 0);
};
ConditionalContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterConditional(this);
	}
};

ConditionalContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitConditional(this);
	}
};


function AssignmentContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentContext.prototype = Object.create(ExpressionContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

PainlessParser.AssignmentContext = AssignmentContext;

AssignmentContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

AssignmentContext.prototype.ASSIGN = function() {
    return this.getToken(PainlessParser.ASSIGN, 0);
};

AssignmentContext.prototype.AADD = function() {
    return this.getToken(PainlessParser.AADD, 0);
};

AssignmentContext.prototype.ASUB = function() {
    return this.getToken(PainlessParser.ASUB, 0);
};

AssignmentContext.prototype.AMUL = function() {
    return this.getToken(PainlessParser.AMUL, 0);
};

AssignmentContext.prototype.ADIV = function() {
    return this.getToken(PainlessParser.ADIV, 0);
};

AssignmentContext.prototype.AREM = function() {
    return this.getToken(PainlessParser.AREM, 0);
};

AssignmentContext.prototype.AAND = function() {
    return this.getToken(PainlessParser.AAND, 0);
};

AssignmentContext.prototype.AXOR = function() {
    return this.getToken(PainlessParser.AXOR, 0);
};

AssignmentContext.prototype.AOR = function() {
    return this.getToken(PainlessParser.AOR, 0);
};

AssignmentContext.prototype.ALSH = function() {
    return this.getToken(PainlessParser.ALSH, 0);
};

AssignmentContext.prototype.ARSH = function() {
    return this.getToken(PainlessParser.ARSH, 0);
};

AssignmentContext.prototype.AUSH = function() {
    return this.getToken(PainlessParser.AUSH, 0);
};
AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitAssignment(this);
	}
};


function BinaryContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryContext.prototype = Object.create(ExpressionContext.prototype);
BinaryContext.prototype.constructor = BinaryContext;

PainlessParser.BinaryContext = BinaryContext;

BinaryContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

BinaryContext.prototype.MUL = function() {
    return this.getToken(PainlessParser.MUL, 0);
};

BinaryContext.prototype.DIV = function() {
    return this.getToken(PainlessParser.DIV, 0);
};

BinaryContext.prototype.REM = function() {
    return this.getToken(PainlessParser.REM, 0);
};

BinaryContext.prototype.ADD = function() {
    return this.getToken(PainlessParser.ADD, 0);
};

BinaryContext.prototype.SUB = function() {
    return this.getToken(PainlessParser.SUB, 0);
};

BinaryContext.prototype.FIND = function() {
    return this.getToken(PainlessParser.FIND, 0);
};

BinaryContext.prototype.MATCH = function() {
    return this.getToken(PainlessParser.MATCH, 0);
};

BinaryContext.prototype.LSH = function() {
    return this.getToken(PainlessParser.LSH, 0);
};

BinaryContext.prototype.RSH = function() {
    return this.getToken(PainlessParser.RSH, 0);
};

BinaryContext.prototype.USH = function() {
    return this.getToken(PainlessParser.USH, 0);
};

BinaryContext.prototype.BWAND = function() {
    return this.getToken(PainlessParser.BWAND, 0);
};

BinaryContext.prototype.XOR = function() {
    return this.getToken(PainlessParser.XOR, 0);
};

BinaryContext.prototype.BWOR = function() {
    return this.getToken(PainlessParser.BWOR, 0);
};
BinaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterBinary(this);
	}
};

BinaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitBinary(this);
	}
};


function InstanceofContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InstanceofContext.prototype = Object.create(ExpressionContext.prototype);
InstanceofContext.prototype.constructor = InstanceofContext;

PainlessParser.InstanceofContext = InstanceofContext;

InstanceofContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

InstanceofContext.prototype.INSTANCEOF = function() {
    return this.getToken(PainlessParser.INSTANCEOF, 0);
};

InstanceofContext.prototype.decltype = function() {
    return this.getTypedRuleContext(DecltypeContext,0);
};
InstanceofContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterInstanceof(this);
	}
};

InstanceofContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitInstanceof(this);
	}
};



PainlessParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 28;
    this.enterRecursionRule(localctx, 28, PainlessParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new SingleContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 240;
        this.unary();
        this._ctx.stop = this._input.LT(-1);
        this.state = 289;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 287;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BinaryContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 242;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 243;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PainlessParser.MUL) | (1 << PainlessParser.DIV) | (1 << PainlessParser.REM))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 244;
                    this.expression(15);
                    break;

                case 2:
                    localctx = new BinaryContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 245;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 246;
                    _la = this._input.LA(1);
                    if(!(_la===PainlessParser.ADD || _la===PainlessParser.SUB)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 247;
                    this.expression(14);
                    break;

                case 3:
                    localctx = new BinaryContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 248;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 249;
                    _la = this._input.LA(1);
                    if(!(_la===PainlessParser.FIND || _la===PainlessParser.MATCH)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 250;
                    this.expression(13);
                    break;

                case 4:
                    localctx = new BinaryContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 251;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 252;
                    _la = this._input.LA(1);
                    if(!(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (PainlessParser.LSH - 34)) | (1 << (PainlessParser.RSH - 34)) | (1 << (PainlessParser.USH - 34)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 253;
                    this.expression(12);
                    break;

                case 5:
                    localctx = new CompContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 254;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 255;
                    _la = this._input.LA(1);
                    if(!(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (PainlessParser.LT - 37)) | (1 << (PainlessParser.LTE - 37)) | (1 << (PainlessParser.GT - 37)) | (1 << (PainlessParser.GTE - 37)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 256;
                    this.expression(11);
                    break;

                case 6:
                    localctx = new CompContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 257;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 258;
                    _la = this._input.LA(1);
                    if(!(((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (PainlessParser.EQ - 41)) | (1 << (PainlessParser.EQR - 41)) | (1 << (PainlessParser.NE - 41)) | (1 << (PainlessParser.NER - 41)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 259;
                    this.expression(9);
                    break;

                case 7:
                    localctx = new BinaryContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 260;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 261;
                    this.match(PainlessParser.BWAND);
                    this.state = 262;
                    this.expression(8);
                    break;

                case 8:
                    localctx = new BinaryContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 263;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 264;
                    this.match(PainlessParser.XOR);
                    this.state = 265;
                    this.expression(7);
                    break;

                case 9:
                    localctx = new BinaryContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 266;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 267;
                    this.match(PainlessParser.BWOR);
                    this.state = 268;
                    this.expression(6);
                    break;

                case 10:
                    localctx = new BoolContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 269;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 270;
                    this.match(PainlessParser.BOOLAND);
                    this.state = 271;
                    this.expression(5);
                    break;

                case 11:
                    localctx = new BoolContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 272;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 273;
                    this.match(PainlessParser.BOOLOR);
                    this.state = 274;
                    this.expression(4);
                    break;

                case 12:
                    localctx = new ConditionalContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 275;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 276;
                    this.match(PainlessParser.COND);
                    this.state = 277;
                    this.expression(0);
                    this.state = 278;
                    this.match(PainlessParser.COLON);
                    this.state = 279;
                    this.expression(2);
                    break;

                case 13:
                    localctx = new AssignmentContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 281;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 282;
                    _la = this._input.LA(1);
                    if(!(((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (PainlessParser.ASSIGN - 58)) | (1 << (PainlessParser.AADD - 58)) | (1 << (PainlessParser.ASUB - 58)) | (1 << (PainlessParser.AMUL - 58)) | (1 << (PainlessParser.ADIV - 58)) | (1 << (PainlessParser.AREM - 58)) | (1 << (PainlessParser.AAND - 58)) | (1 << (PainlessParser.AXOR - 58)) | (1 << (PainlessParser.AOR - 58)) | (1 << (PainlessParser.ALSH - 58)) | (1 << (PainlessParser.ARSH - 58)) | (1 << (PainlessParser.AUSH - 58)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 283;
                    this.expression(1);
                    break;

                case 14:
                    localctx = new InstanceofContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PainlessParser.RULE_expression);
                    this.state = 284;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 285;
                    this.match(PainlessParser.INSTANCEOF);
                    this.state = 286;
                    this.decltype();
                    break;

                } 
            }
            this.state = 291;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function UnaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_unary;
    return this;
}

UnaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryContext.prototype.constructor = UnaryContext;


 
UnaryContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CastContext(parser, ctx) {
	UnaryContext.call(this, parser);
    UnaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CastContext.prototype = Object.create(UnaryContext.prototype);
CastContext.prototype.constructor = CastContext;

PainlessParser.CastContext = CastContext;

CastContext.prototype.LP = function() {
    return this.getToken(PainlessParser.LP, 0);
};

CastContext.prototype.decltype = function() {
    return this.getTypedRuleContext(DecltypeContext,0);
};

CastContext.prototype.RP = function() {
    return this.getToken(PainlessParser.RP, 0);
};

CastContext.prototype.unary = function() {
    return this.getTypedRuleContext(UnaryContext,0);
};
CastContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterCast(this);
	}
};

CastContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitCast(this);
	}
};


function PreContext(parser, ctx) {
	UnaryContext.call(this, parser);
    UnaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreContext.prototype = Object.create(UnaryContext.prototype);
PreContext.prototype.constructor = PreContext;

PainlessParser.PreContext = PreContext;

PreContext.prototype.chain = function() {
    return this.getTypedRuleContext(ChainContext,0);
};

PreContext.prototype.INCR = function() {
    return this.getToken(PainlessParser.INCR, 0);
};

PreContext.prototype.DECR = function() {
    return this.getToken(PainlessParser.DECR, 0);
};
PreContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterPre(this);
	}
};

PreContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitPre(this);
	}
};


function ReadContext(parser, ctx) {
	UnaryContext.call(this, parser);
    UnaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReadContext.prototype = Object.create(UnaryContext.prototype);
ReadContext.prototype.constructor = ReadContext;

PainlessParser.ReadContext = ReadContext;

ReadContext.prototype.chain = function() {
    return this.getTypedRuleContext(ChainContext,0);
};
ReadContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterRead(this);
	}
};

ReadContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitRead(this);
	}
};


function PostContext(parser, ctx) {
	UnaryContext.call(this, parser);
    UnaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PostContext.prototype = Object.create(UnaryContext.prototype);
PostContext.prototype.constructor = PostContext;

PainlessParser.PostContext = PostContext;

PostContext.prototype.chain = function() {
    return this.getTypedRuleContext(ChainContext,0);
};

PostContext.prototype.INCR = function() {
    return this.getToken(PainlessParser.INCR, 0);
};

PostContext.prototype.DECR = function() {
    return this.getToken(PainlessParser.DECR, 0);
};
PostContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterPost(this);
	}
};

PostContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitPost(this);
	}
};


function OperatorContext(parser, ctx) {
	UnaryContext.call(this, parser);
    UnaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OperatorContext.prototype = Object.create(UnaryContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;

PainlessParser.OperatorContext = OperatorContext;

OperatorContext.prototype.unary = function() {
    return this.getTypedRuleContext(UnaryContext,0);
};

OperatorContext.prototype.BOOLNOT = function() {
    return this.getToken(PainlessParser.BOOLNOT, 0);
};

OperatorContext.prototype.BWNOT = function() {
    return this.getToken(PainlessParser.BWNOT, 0);
};

OperatorContext.prototype.ADD = function() {
    return this.getToken(PainlessParser.ADD, 0);
};

OperatorContext.prototype.SUB = function() {
    return this.getToken(PainlessParser.SUB, 0);
};
OperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterOperator(this);
	}
};

OperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitOperator(this);
	}
};



PainlessParser.UnaryContext = UnaryContext;

PainlessParser.prototype.unary = function() {

    var localctx = new UnaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, PainlessParser.RULE_unary);
    var _la = 0; // Token type
    try {
        this.state = 305;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PreContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 292;
            _la = this._input.LA(1);
            if(!(_la===PainlessParser.INCR || _la===PainlessParser.DECR)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 293;
            this.chain();
            break;

        case 2:
            localctx = new PostContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 294;
            this.chain();
            this.state = 295;
            _la = this._input.LA(1);
            if(!(_la===PainlessParser.INCR || _la===PainlessParser.DECR)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            break;

        case 3:
            localctx = new ReadContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 297;
            this.chain();
            break;

        case 4:
            localctx = new OperatorContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 298;
            _la = this._input.LA(1);
            if(!(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (PainlessParser.BOOLNOT - 27)) | (1 << (PainlessParser.BWNOT - 27)) | (1 << (PainlessParser.ADD - 27)) | (1 << (PainlessParser.SUB - 27)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 299;
            this.unary();
            break;

        case 5:
            localctx = new CastContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 300;
            this.match(PainlessParser.LP);
            this.state = 301;
            this.decltype();
            this.state = 302;
            this.match(PainlessParser.RP);
            this.state = 303;
            this.unary();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ChainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_chain;
    return this;
}

ChainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChainContext.prototype.constructor = ChainContext;


 
ChainContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StaticContext(parser, ctx) {
	ChainContext.call(this, parser);
    ChainContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StaticContext.prototype = Object.create(ChainContext.prototype);
StaticContext.prototype.constructor = StaticContext;

PainlessParser.StaticContext = StaticContext;

StaticContext.prototype.decltype = function() {
    return this.getTypedRuleContext(DecltypeContext,0);
};

StaticContext.prototype.postdot = function() {
    return this.getTypedRuleContext(PostdotContext,0);
};

StaticContext.prototype.postfix = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PostfixContext);
    } else {
        return this.getTypedRuleContext(PostfixContext,i);
    }
};
StaticContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterStatic(this);
	}
};

StaticContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitStatic(this);
	}
};


function DynamicContext(parser, ctx) {
	ChainContext.call(this, parser);
    ChainContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DynamicContext.prototype = Object.create(ChainContext.prototype);
DynamicContext.prototype.constructor = DynamicContext;

PainlessParser.DynamicContext = DynamicContext;

DynamicContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};

DynamicContext.prototype.postfix = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PostfixContext);
    } else {
        return this.getTypedRuleContext(PostfixContext,i);
    }
};
DynamicContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterDynamic(this);
	}
};

DynamicContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitDynamic(this);
	}
};


function NewarrayContext(parser, ctx) {
	ChainContext.call(this, parser);
    ChainContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewarrayContext.prototype = Object.create(ChainContext.prototype);
NewarrayContext.prototype.constructor = NewarrayContext;

PainlessParser.NewarrayContext = NewarrayContext;

NewarrayContext.prototype.arrayinitializer = function() {
    return this.getTypedRuleContext(ArrayinitializerContext,0);
};
NewarrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterNewarray(this);
	}
};

NewarrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitNewarray(this);
	}
};



PainlessParser.ChainContext = ChainContext;

PainlessParser.prototype.chain = function() {

    var localctx = new ChainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, PainlessParser.RULE_chain);
    try {
        this.state = 323;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            localctx = new DynamicContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 307;
            this.primary();
            this.state = 311;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 308;
                    this.postfix(); 
                }
                this.state = 313;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
            }

            break;

        case 2:
            localctx = new StaticContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 314;
            this.decltype();
            this.state = 315;
            this.postdot();
            this.state = 319;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 316;
                    this.postfix(); 
                }
                this.state = 321;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
            }

            break;

        case 3:
            localctx = new NewarrayContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 322;
            this.arrayinitializer();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_primary;
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;


 
PrimaryContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ListinitContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListinitContext.prototype = Object.create(PrimaryContext.prototype);
ListinitContext.prototype.constructor = ListinitContext;

PainlessParser.ListinitContext = ListinitContext;

ListinitContext.prototype.listinitializer = function() {
    return this.getTypedRuleContext(ListinitializerContext,0);
};
ListinitContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterListinit(this);
	}
};

ListinitContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitListinit(this);
	}
};


function RegexContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RegexContext.prototype = Object.create(PrimaryContext.prototype);
RegexContext.prototype.constructor = RegexContext;

PainlessParser.RegexContext = RegexContext;

RegexContext.prototype.REGEX = function() {
    return this.getToken(PainlessParser.REGEX, 0);
};
RegexContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterRegex(this);
	}
};

RegexContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitRegex(this);
	}
};


function NullContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NullContext.prototype = Object.create(PrimaryContext.prototype);
NullContext.prototype.constructor = NullContext;

PainlessParser.NullContext = NullContext;

NullContext.prototype.NULL = function() {
    return this.getToken(PainlessParser.NULL, 0);
};
NullContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterNull(this);
	}
};

NullContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitNull(this);
	}
};


function StringContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringContext.prototype = Object.create(PrimaryContext.prototype);
StringContext.prototype.constructor = StringContext;

PainlessParser.StringContext = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(PainlessParser.STRING, 0);
};
StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitString(this);
	}
};


function MapinitContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MapinitContext.prototype = Object.create(PrimaryContext.prototype);
MapinitContext.prototype.constructor = MapinitContext;

PainlessParser.MapinitContext = MapinitContext;

MapinitContext.prototype.mapinitializer = function() {
    return this.getTypedRuleContext(MapinitializerContext,0);
};
MapinitContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterMapinit(this);
	}
};

MapinitContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitMapinit(this);
	}
};


function CalllocalContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CalllocalContext.prototype = Object.create(PrimaryContext.prototype);
CalllocalContext.prototype.constructor = CalllocalContext;

PainlessParser.CalllocalContext = CalllocalContext;

CalllocalContext.prototype.ID = function() {
    return this.getToken(PainlessParser.ID, 0);
};

CalllocalContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
CalllocalContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterCalllocal(this);
	}
};

CalllocalContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitCalllocal(this);
	}
};


function TrueContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TrueContext.prototype = Object.create(PrimaryContext.prototype);
TrueContext.prototype.constructor = TrueContext;

PainlessParser.TrueContext = TrueContext;

TrueContext.prototype.TRUE = function() {
    return this.getToken(PainlessParser.TRUE, 0);
};
TrueContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterTrue(this);
	}
};

TrueContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitTrue(this);
	}
};


function FalseContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FalseContext.prototype = Object.create(PrimaryContext.prototype);
FalseContext.prototype.constructor = FalseContext;

PainlessParser.FalseContext = FalseContext;

FalseContext.prototype.FALSE = function() {
    return this.getToken(PainlessParser.FALSE, 0);
};
FalseContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterFalse(this);
	}
};

FalseContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitFalse(this);
	}
};


function VariableContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableContext.prototype = Object.create(PrimaryContext.prototype);
VariableContext.prototype.constructor = VariableContext;

PainlessParser.VariableContext = VariableContext;

VariableContext.prototype.ID = function() {
    return this.getToken(PainlessParser.ID, 0);
};
VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitVariable(this);
	}
};


function NumericContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumericContext.prototype = Object.create(PrimaryContext.prototype);
NumericContext.prototype.constructor = NumericContext;

PainlessParser.NumericContext = NumericContext;

NumericContext.prototype.OCTAL = function() {
    return this.getToken(PainlessParser.OCTAL, 0);
};

NumericContext.prototype.HEX = function() {
    return this.getToken(PainlessParser.HEX, 0);
};

NumericContext.prototype.INTEGER = function() {
    return this.getToken(PainlessParser.INTEGER, 0);
};

NumericContext.prototype.DECIMAL = function() {
    return this.getToken(PainlessParser.DECIMAL, 0);
};
NumericContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterNumeric(this);
	}
};

NumericContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitNumeric(this);
	}
};


function NewobjectContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewobjectContext.prototype = Object.create(PrimaryContext.prototype);
NewobjectContext.prototype.constructor = NewobjectContext;

PainlessParser.NewobjectContext = NewobjectContext;

NewobjectContext.prototype.NEW = function() {
    return this.getToken(PainlessParser.NEW, 0);
};

NewobjectContext.prototype.TYPE = function() {
    return this.getToken(PainlessParser.TYPE, 0);
};

NewobjectContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
NewobjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterNewobject(this);
	}
};

NewobjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitNewobject(this);
	}
};


function PrecedenceContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrecedenceContext.prototype = Object.create(PrimaryContext.prototype);
PrecedenceContext.prototype.constructor = PrecedenceContext;

PainlessParser.PrecedenceContext = PrecedenceContext;

PrecedenceContext.prototype.LP = function() {
    return this.getToken(PainlessParser.LP, 0);
};

PrecedenceContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrecedenceContext.prototype.RP = function() {
    return this.getToken(PainlessParser.RP, 0);
};
PrecedenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterPrecedence(this);
	}
};

PrecedenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitPrecedence(this);
	}
};



PainlessParser.PrimaryContext = PrimaryContext;

PainlessParser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, PainlessParser.RULE_primary);
    var _la = 0; // Token type
    try {
        this.state = 343;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PrecedenceContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 325;
            this.match(PainlessParser.LP);
            this.state = 326;
            this.expression(0);
            this.state = 327;
            this.match(PainlessParser.RP);
            break;

        case 2:
            localctx = new NumericContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 329;
            _la = this._input.LA(1);
            if(!(((((_la - 70)) & ~0x1f) == 0 && ((1 << (_la - 70)) & ((1 << (PainlessParser.OCTAL - 70)) | (1 << (PainlessParser.HEX - 70)) | (1 << (PainlessParser.INTEGER - 70)) | (1 << (PainlessParser.DECIMAL - 70)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            break;

        case 3:
            localctx = new TrueContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 330;
            this.match(PainlessParser.TRUE);
            break;

        case 4:
            localctx = new FalseContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 331;
            this.match(PainlessParser.FALSE);
            break;

        case 5:
            localctx = new NullContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 332;
            this.match(PainlessParser.NULL);
            break;

        case 6:
            localctx = new StringContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 333;
            this.match(PainlessParser.STRING);
            break;

        case 7:
            localctx = new RegexContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 334;
            this.match(PainlessParser.REGEX);
            break;

        case 8:
            localctx = new ListinitContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 335;
            this.listinitializer();
            break;

        case 9:
            localctx = new MapinitContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 336;
            this.mapinitializer();
            break;

        case 10:
            localctx = new VariableContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 337;
            this.match(PainlessParser.ID);
            break;

        case 11:
            localctx = new CalllocalContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 338;
            this.match(PainlessParser.ID);
            this.state = 339;
            this.arguments();
            break;

        case 12:
            localctx = new NewobjectContext(this, localctx);
            this.enterOuterAlt(localctx, 12);
            this.state = 340;
            this.match(PainlessParser.NEW);
            this.state = 341;
            this.match(PainlessParser.TYPE);
            this.state = 342;
            this.arguments();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PostfixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_postfix;
    return this;
}

PostfixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PostfixContext.prototype.constructor = PostfixContext;

PostfixContext.prototype.callinvoke = function() {
    return this.getTypedRuleContext(CallinvokeContext,0);
};

PostfixContext.prototype.fieldaccess = function() {
    return this.getTypedRuleContext(FieldaccessContext,0);
};

PostfixContext.prototype.braceaccess = function() {
    return this.getTypedRuleContext(BraceaccessContext,0);
};

PostfixContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterPostfix(this);
	}
};

PostfixContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitPostfix(this);
	}
};




PainlessParser.PostfixContext = PostfixContext;

PainlessParser.prototype.postfix = function() {

    var localctx = new PostfixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, PainlessParser.RULE_postfix);
    try {
        this.state = 348;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 345;
            this.callinvoke();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 346;
            this.fieldaccess();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 347;
            this.braceaccess();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PostdotContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_postdot;
    return this;
}

PostdotContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PostdotContext.prototype.constructor = PostdotContext;

PostdotContext.prototype.callinvoke = function() {
    return this.getTypedRuleContext(CallinvokeContext,0);
};

PostdotContext.prototype.fieldaccess = function() {
    return this.getTypedRuleContext(FieldaccessContext,0);
};

PostdotContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterPostdot(this);
	}
};

PostdotContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitPostdot(this);
	}
};




PainlessParser.PostdotContext = PostdotContext;

PainlessParser.prototype.postdot = function() {

    var localctx = new PostdotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, PainlessParser.RULE_postdot);
    try {
        this.state = 352;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 350;
            this.callinvoke();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 351;
            this.fieldaccess();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CallinvokeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_callinvoke;
    return this;
}

CallinvokeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CallinvokeContext.prototype.constructor = CallinvokeContext;

CallinvokeContext.prototype.DOT = function() {
    return this.getToken(PainlessParser.DOT, 0);
};

CallinvokeContext.prototype.DOTID = function() {
    return this.getToken(PainlessParser.DOTID, 0);
};

CallinvokeContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};

CallinvokeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterCallinvoke(this);
	}
};

CallinvokeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitCallinvoke(this);
	}
};




PainlessParser.CallinvokeContext = CallinvokeContext;

PainlessParser.prototype.callinvoke = function() {

    var localctx = new CallinvokeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, PainlessParser.RULE_callinvoke);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 354;
        this.match(PainlessParser.DOT);
        this.state = 355;
        this.match(PainlessParser.DOTID);
        this.state = 356;
        this.arguments();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldaccessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_fieldaccess;
    return this;
}

FieldaccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldaccessContext.prototype.constructor = FieldaccessContext;

FieldaccessContext.prototype.DOT = function() {
    return this.getToken(PainlessParser.DOT, 0);
};

FieldaccessContext.prototype.DOTID = function() {
    return this.getToken(PainlessParser.DOTID, 0);
};

FieldaccessContext.prototype.DOTINTEGER = function() {
    return this.getToken(PainlessParser.DOTINTEGER, 0);
};

FieldaccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterFieldaccess(this);
	}
};

FieldaccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitFieldaccess(this);
	}
};




PainlessParser.FieldaccessContext = FieldaccessContext;

PainlessParser.prototype.fieldaccess = function() {

    var localctx = new FieldaccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, PainlessParser.RULE_fieldaccess);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        this.match(PainlessParser.DOT);
        this.state = 359;
        _la = this._input.LA(1);
        if(!(_la===PainlessParser.DOTINTEGER || _la===PainlessParser.DOTID)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BraceaccessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_braceaccess;
    return this;
}

BraceaccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BraceaccessContext.prototype.constructor = BraceaccessContext;

BraceaccessContext.prototype.LBRACE = function() {
    return this.getToken(PainlessParser.LBRACE, 0);
};

BraceaccessContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

BraceaccessContext.prototype.RBRACE = function() {
    return this.getToken(PainlessParser.RBRACE, 0);
};

BraceaccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterBraceaccess(this);
	}
};

BraceaccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitBraceaccess(this);
	}
};




PainlessParser.BraceaccessContext = BraceaccessContext;

PainlessParser.prototype.braceaccess = function() {

    var localctx = new BraceaccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, PainlessParser.RULE_braceaccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 361;
        this.match(PainlessParser.LBRACE);
        this.state = 362;
        this.expression(0);
        this.state = 363;
        this.match(PainlessParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayinitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_arrayinitializer;
    return this;
}

ArrayinitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayinitializerContext.prototype.constructor = ArrayinitializerContext;


 
ArrayinitializerContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NewstandardarrayContext(parser, ctx) {
	ArrayinitializerContext.call(this, parser);
    ArrayinitializerContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewstandardarrayContext.prototype = Object.create(ArrayinitializerContext.prototype);
NewstandardarrayContext.prototype.constructor = NewstandardarrayContext;

PainlessParser.NewstandardarrayContext = NewstandardarrayContext;

NewstandardarrayContext.prototype.NEW = function() {
    return this.getToken(PainlessParser.NEW, 0);
};

NewstandardarrayContext.prototype.TYPE = function() {
    return this.getToken(PainlessParser.TYPE, 0);
};

NewstandardarrayContext.prototype.LBRACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.LBRACE);
    } else {
        return this.getToken(PainlessParser.LBRACE, i);
    }
};


NewstandardarrayContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

NewstandardarrayContext.prototype.RBRACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.RBRACE);
    } else {
        return this.getToken(PainlessParser.RBRACE, i);
    }
};


NewstandardarrayContext.prototype.postdot = function() {
    return this.getTypedRuleContext(PostdotContext,0);
};

NewstandardarrayContext.prototype.postfix = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PostfixContext);
    } else {
        return this.getTypedRuleContext(PostfixContext,i);
    }
};
NewstandardarrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterNewstandardarray(this);
	}
};

NewstandardarrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitNewstandardarray(this);
	}
};


function NewinitializedarrayContext(parser, ctx) {
	ArrayinitializerContext.call(this, parser);
    ArrayinitializerContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewinitializedarrayContext.prototype = Object.create(ArrayinitializerContext.prototype);
NewinitializedarrayContext.prototype.constructor = NewinitializedarrayContext;

PainlessParser.NewinitializedarrayContext = NewinitializedarrayContext;

NewinitializedarrayContext.prototype.NEW = function() {
    return this.getToken(PainlessParser.NEW, 0);
};

NewinitializedarrayContext.prototype.TYPE = function() {
    return this.getToken(PainlessParser.TYPE, 0);
};

NewinitializedarrayContext.prototype.LBRACE = function() {
    return this.getToken(PainlessParser.LBRACE, 0);
};

NewinitializedarrayContext.prototype.RBRACE = function() {
    return this.getToken(PainlessParser.RBRACE, 0);
};

NewinitializedarrayContext.prototype.LBRACK = function() {
    return this.getToken(PainlessParser.LBRACK, 0);
};

NewinitializedarrayContext.prototype.RBRACK = function() {
    return this.getToken(PainlessParser.RBRACK, 0);
};

NewinitializedarrayContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

NewinitializedarrayContext.prototype.SEMICOLON = function() {
    return this.getToken(PainlessParser.SEMICOLON, 0);
};

NewinitializedarrayContext.prototype.postfix = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PostfixContext);
    } else {
        return this.getTypedRuleContext(PostfixContext,i);
    }
};

NewinitializedarrayContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.COMMA);
    } else {
        return this.getToken(PainlessParser.COMMA, i);
    }
};

NewinitializedarrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterNewinitializedarray(this);
	}
};

NewinitializedarrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitNewinitializedarray(this);
	}
};



PainlessParser.ArrayinitializerContext = ArrayinitializerContext;

PainlessParser.prototype.arrayinitializer = function() {

    var localctx = new ArrayinitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, PainlessParser.RULE_arrayinitializer);
    var _la = 0; // Token type
    try {
        this.state = 409;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            localctx = new NewstandardarrayContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 365;
            this.match(PainlessParser.NEW);
            this.state = 366;
            this.match(PainlessParser.TYPE);
            this.state = 371; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 367;
            		this.match(PainlessParser.LBRACE);
            		this.state = 368;
            		this.expression(0);
            		this.state = 369;
            		this.match(PainlessParser.RBRACE);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 373; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,27, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 382;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
            if(la_===1) {
                this.state = 375;
                this.postdot();
                this.state = 379;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 376;
                        this.postfix(); 
                    }
                    this.state = 381;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
                }


            }
            break;

        case 2:
            localctx = new NewinitializedarrayContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 384;
            this.match(PainlessParser.NEW);
            this.state = 385;
            this.match(PainlessParser.TYPE);
            this.state = 386;
            this.match(PainlessParser.LBRACE);
            this.state = 387;
            this.match(PainlessParser.RBRACE);
            this.state = 388;
            this.match(PainlessParser.LBRACK);
            this.state = 397;
            _la = this._input.LA(1);
            if(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (PainlessParser.INCR - 56)) | (1 << (PainlessParser.DECR - 56)) | (1 << (PainlessParser.OCTAL - 56)) | (1 << (PainlessParser.HEX - 56)) | (1 << (PainlessParser.INTEGER - 56)) | (1 << (PainlessParser.DECIMAL - 56)) | (1 << (PainlessParser.STRING - 56)) | (1 << (PainlessParser.REGEX - 56)) | (1 << (PainlessParser.TRUE - 56)) | (1 << (PainlessParser.FALSE - 56)) | (1 << (PainlessParser.NULL - 56)) | (1 << (PainlessParser.TYPE - 56)) | (1 << (PainlessParser.ID - 56)))) !== 0)) {
                this.state = 389;
                this.expression(0);
                this.state = 394;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===PainlessParser.COMMA) {
                    this.state = 390;
                    this.match(PainlessParser.COMMA);
                    this.state = 391;
                    this.expression(0);
                    this.state = 396;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 400;
            _la = this._input.LA(1);
            if(_la===PainlessParser.SEMICOLON) {
                this.state = 399;
                this.match(PainlessParser.SEMICOLON);
            }

            this.state = 402;
            this.match(PainlessParser.RBRACK);
            this.state = 406;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 403;
                    this.postfix(); 
                }
                this.state = 408;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListinitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_listinitializer;
    return this;
}

ListinitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListinitializerContext.prototype.constructor = ListinitializerContext;

ListinitializerContext.prototype.LBRACE = function() {
    return this.getToken(PainlessParser.LBRACE, 0);
};

ListinitializerContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ListinitializerContext.prototype.RBRACE = function() {
    return this.getToken(PainlessParser.RBRACE, 0);
};

ListinitializerContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.COMMA);
    } else {
        return this.getToken(PainlessParser.COMMA, i);
    }
};


ListinitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterListinitializer(this);
	}
};

ListinitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitListinitializer(this);
	}
};




PainlessParser.ListinitializerContext = ListinitializerContext;

PainlessParser.prototype.listinitializer = function() {

    var localctx = new ListinitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, PainlessParser.RULE_listinitializer);
    var _la = 0; // Token type
    try {
        this.state = 424;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 411;
            this.match(PainlessParser.LBRACE);
            this.state = 412;
            this.expression(0);
            this.state = 417;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PainlessParser.COMMA) {
                this.state = 413;
                this.match(PainlessParser.COMMA);
                this.state = 414;
                this.expression(0);
                this.state = 419;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 420;
            this.match(PainlessParser.RBRACE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 422;
            this.match(PainlessParser.LBRACE);
            this.state = 423;
            this.match(PainlessParser.RBRACE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MapinitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_mapinitializer;
    return this;
}

MapinitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapinitializerContext.prototype.constructor = MapinitializerContext;

MapinitializerContext.prototype.LBRACE = function() {
    return this.getToken(PainlessParser.LBRACE, 0);
};

MapinitializerContext.prototype.maptoken = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MaptokenContext);
    } else {
        return this.getTypedRuleContext(MaptokenContext,i);
    }
};

MapinitializerContext.prototype.RBRACE = function() {
    return this.getToken(PainlessParser.RBRACE, 0);
};

MapinitializerContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.COMMA);
    } else {
        return this.getToken(PainlessParser.COMMA, i);
    }
};


MapinitializerContext.prototype.COLON = function() {
    return this.getToken(PainlessParser.COLON, 0);
};

MapinitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterMapinitializer(this);
	}
};

MapinitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitMapinitializer(this);
	}
};




PainlessParser.MapinitializerContext = MapinitializerContext;

PainlessParser.prototype.mapinitializer = function() {

    var localctx = new MapinitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, PainlessParser.RULE_mapinitializer);
    var _la = 0; // Token type
    try {
        this.state = 440;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 426;
            this.match(PainlessParser.LBRACE);
            this.state = 427;
            this.maptoken();
            this.state = 432;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PainlessParser.COMMA) {
                this.state = 428;
                this.match(PainlessParser.COMMA);
                this.state = 429;
                this.maptoken();
                this.state = 434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 435;
            this.match(PainlessParser.RBRACE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 437;
            this.match(PainlessParser.LBRACE);
            this.state = 438;
            this.match(PainlessParser.COLON);
            this.state = 439;
            this.match(PainlessParser.RBRACE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MaptokenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_maptoken;
    return this;
}

MaptokenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MaptokenContext.prototype.constructor = MaptokenContext;

MaptokenContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MaptokenContext.prototype.COLON = function() {
    return this.getToken(PainlessParser.COLON, 0);
};

MaptokenContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterMaptoken(this);
	}
};

MaptokenContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitMaptoken(this);
	}
};




PainlessParser.MaptokenContext = MaptokenContext;

PainlessParser.prototype.maptoken = function() {

    var localctx = new MaptokenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, PainlessParser.RULE_maptoken);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        this.expression(0);
        this.state = 443;
        this.match(PainlessParser.COLON);
        this.state = 444;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.LP = function() {
    return this.getToken(PainlessParser.LP, 0);
};

ArgumentsContext.prototype.RP = function() {
    return this.getToken(PainlessParser.RP, 0);
};

ArgumentsContext.prototype.argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgumentContext);
    } else {
        return this.getTypedRuleContext(ArgumentContext,i);
    }
};

ArgumentsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.COMMA);
    } else {
        return this.getToken(PainlessParser.COMMA, i);
    }
};


ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitArguments(this);
	}
};




PainlessParser.ArgumentsContext = ArgumentsContext;

PainlessParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, PainlessParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 446;
        this.match(PainlessParser.LP);
        this.state = 455;
        _la = this._input.LA(1);
        if(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.THIS - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (PainlessParser.INCR - 56)) | (1 << (PainlessParser.DECR - 56)) | (1 << (PainlessParser.OCTAL - 56)) | (1 << (PainlessParser.HEX - 56)) | (1 << (PainlessParser.INTEGER - 56)) | (1 << (PainlessParser.DECIMAL - 56)) | (1 << (PainlessParser.STRING - 56)) | (1 << (PainlessParser.REGEX - 56)) | (1 << (PainlessParser.TRUE - 56)) | (1 << (PainlessParser.FALSE - 56)) | (1 << (PainlessParser.NULL - 56)) | (1 << (PainlessParser.TYPE - 56)) | (1 << (PainlessParser.ID - 56)))) !== 0)) {
            this.state = 447;
            this.argument();
            this.state = 452;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PainlessParser.COMMA) {
                this.state = 448;
                this.match(PainlessParser.COMMA);
                this.state = 449;
                this.argument();
                this.state = 454;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 457;
        this.match(PainlessParser.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_argument;
    return this;
}

ArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentContext.prototype.constructor = ArgumentContext;

ArgumentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ArgumentContext.prototype.lambda = function() {
    return this.getTypedRuleContext(LambdaContext,0);
};

ArgumentContext.prototype.funcref = function() {
    return this.getTypedRuleContext(FuncrefContext,0);
};

ArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterArgument(this);
	}
};

ArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitArgument(this);
	}
};




PainlessParser.ArgumentContext = ArgumentContext;

PainlessParser.prototype.argument = function() {

    var localctx = new ArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, PainlessParser.RULE_argument);
    try {
        this.state = 462;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 459;
            this.expression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 460;
            this.lambda();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 461;
            this.funcref();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LambdaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_lambda;
    return this;
}

LambdaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LambdaContext.prototype.constructor = LambdaContext;

LambdaContext.prototype.ARROW = function() {
    return this.getToken(PainlessParser.ARROW, 0);
};

LambdaContext.prototype.lamtype = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LamtypeContext);
    } else {
        return this.getTypedRuleContext(LamtypeContext,i);
    }
};

LambdaContext.prototype.LP = function() {
    return this.getToken(PainlessParser.LP, 0);
};

LambdaContext.prototype.RP = function() {
    return this.getToken(PainlessParser.RP, 0);
};

LambdaContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

LambdaContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

LambdaContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.COMMA);
    } else {
        return this.getToken(PainlessParser.COMMA, i);
    }
};


LambdaContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterLambda(this);
	}
};

LambdaContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitLambda(this);
	}
};




PainlessParser.LambdaContext = LambdaContext;

PainlessParser.prototype.lambda = function() {

    var localctx = new LambdaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, PainlessParser.RULE_lambda);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 477;
        switch(this._input.LA(1)) {
        case PainlessParser.TYPE:
        case PainlessParser.ID:
            this.state = 464;
            this.lamtype();
            break;
        case PainlessParser.LP:
            this.state = 465;
            this.match(PainlessParser.LP);
            this.state = 474;
            _la = this._input.LA(1);
            if(_la===PainlessParser.TYPE || _la===PainlessParser.ID) {
                this.state = 466;
                this.lamtype();
                this.state = 471;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===PainlessParser.COMMA) {
                    this.state = 467;
                    this.match(PainlessParser.COMMA);
                    this.state = 468;
                    this.lamtype();
                    this.state = 473;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 476;
            this.match(PainlessParser.RP);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 479;
        this.match(PainlessParser.ARROW);
        this.state = 482;
        switch(this._input.LA(1)) {
        case PainlessParser.LBRACK:
            this.state = 480;
            this.block();
            break;
        case PainlessParser.LBRACE:
        case PainlessParser.LP:
        case PainlessParser.NEW:
        case PainlessParser.BOOLNOT:
        case PainlessParser.BWNOT:
        case PainlessParser.ADD:
        case PainlessParser.SUB:
        case PainlessParser.INCR:
        case PainlessParser.DECR:
        case PainlessParser.OCTAL:
        case PainlessParser.HEX:
        case PainlessParser.INTEGER:
        case PainlessParser.DECIMAL:
        case PainlessParser.STRING:
        case PainlessParser.REGEX:
        case PainlessParser.TRUE:
        case PainlessParser.FALSE:
        case PainlessParser.NULL:
        case PainlessParser.TYPE:
        case PainlessParser.ID:
            this.state = 481;
            this.expression(0);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LamtypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_lamtype;
    return this;
}

LamtypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LamtypeContext.prototype.constructor = LamtypeContext;

LamtypeContext.prototype.ID = function() {
    return this.getToken(PainlessParser.ID, 0);
};

LamtypeContext.prototype.decltype = function() {
    return this.getTypedRuleContext(DecltypeContext,0);
};

LamtypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterLamtype(this);
	}
};

LamtypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitLamtype(this);
	}
};




PainlessParser.LamtypeContext = LamtypeContext;

PainlessParser.prototype.lamtype = function() {

    var localctx = new LamtypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, PainlessParser.RULE_lamtype);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 485;
        _la = this._input.LA(1);
        if(_la===PainlessParser.TYPE) {
            this.state = 484;
            this.decltype();
        }

        this.state = 487;
        this.match(PainlessParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncrefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PainlessParser.RULE_funcref;
    return this;
}

FuncrefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncrefContext.prototype.constructor = FuncrefContext;


 
FuncrefContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ClassfuncrefContext(parser, ctx) {
	FuncrefContext.call(this, parser);
    FuncrefContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ClassfuncrefContext.prototype = Object.create(FuncrefContext.prototype);
ClassfuncrefContext.prototype.constructor = ClassfuncrefContext;

PainlessParser.ClassfuncrefContext = ClassfuncrefContext;

ClassfuncrefContext.prototype.TYPE = function() {
    return this.getToken(PainlessParser.TYPE, 0);
};

ClassfuncrefContext.prototype.REF = function() {
    return this.getToken(PainlessParser.REF, 0);
};

ClassfuncrefContext.prototype.ID = function() {
    return this.getToken(PainlessParser.ID, 0);
};
ClassfuncrefContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterClassfuncref(this);
	}
};

ClassfuncrefContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitClassfuncref(this);
	}
};


function CapturingfuncrefContext(parser, ctx) {
	FuncrefContext.call(this, parser);
    FuncrefContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CapturingfuncrefContext.prototype = Object.create(FuncrefContext.prototype);
CapturingfuncrefContext.prototype.constructor = CapturingfuncrefContext;

PainlessParser.CapturingfuncrefContext = CapturingfuncrefContext;

CapturingfuncrefContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PainlessParser.ID);
    } else {
        return this.getToken(PainlessParser.ID, i);
    }
};


CapturingfuncrefContext.prototype.REF = function() {
    return this.getToken(PainlessParser.REF, 0);
};
CapturingfuncrefContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterCapturingfuncref(this);
	}
};

CapturingfuncrefContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitCapturingfuncref(this);
	}
};


function ConstructorfuncrefContext(parser, ctx) {
	FuncrefContext.call(this, parser);
    FuncrefContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstructorfuncrefContext.prototype = Object.create(FuncrefContext.prototype);
ConstructorfuncrefContext.prototype.constructor = ConstructorfuncrefContext;

PainlessParser.ConstructorfuncrefContext = ConstructorfuncrefContext;

ConstructorfuncrefContext.prototype.decltype = function() {
    return this.getTypedRuleContext(DecltypeContext,0);
};

ConstructorfuncrefContext.prototype.REF = function() {
    return this.getToken(PainlessParser.REF, 0);
};

ConstructorfuncrefContext.prototype.NEW = function() {
    return this.getToken(PainlessParser.NEW, 0);
};
ConstructorfuncrefContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterConstructorfuncref(this);
	}
};

ConstructorfuncrefContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitConstructorfuncref(this);
	}
};


function LocalfuncrefContext(parser, ctx) {
	FuncrefContext.call(this, parser);
    FuncrefContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LocalfuncrefContext.prototype = Object.create(FuncrefContext.prototype);
LocalfuncrefContext.prototype.constructor = LocalfuncrefContext;

PainlessParser.LocalfuncrefContext = LocalfuncrefContext;

LocalfuncrefContext.prototype.THIS = function() {
    return this.getToken(PainlessParser.THIS, 0);
};

LocalfuncrefContext.prototype.REF = function() {
    return this.getToken(PainlessParser.REF, 0);
};

LocalfuncrefContext.prototype.ID = function() {
    return this.getToken(PainlessParser.ID, 0);
};
LocalfuncrefContext.prototype.enterRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.enterLocalfuncref(this);
	}
};

LocalfuncrefContext.prototype.exitRule = function(listener) {
    if(listener instanceof PainlessParserListener ) {
        listener.exitLocalfuncref(this);
	}
};



PainlessParser.FuncrefContext = FuncrefContext;

PainlessParser.prototype.funcref = function() {

    var localctx = new FuncrefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, PainlessParser.RULE_funcref);
    try {
        this.state = 502;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ClassfuncrefContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 489;
            this.match(PainlessParser.TYPE);
            this.state = 490;
            this.match(PainlessParser.REF);
            this.state = 491;
            this.match(PainlessParser.ID);
            break;

        case 2:
            localctx = new ConstructorfuncrefContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 492;
            this.decltype();
            this.state = 493;
            this.match(PainlessParser.REF);
            this.state = 494;
            this.match(PainlessParser.NEW);
            break;

        case 3:
            localctx = new CapturingfuncrefContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 496;
            this.match(PainlessParser.ID);
            this.state = 497;
            this.match(PainlessParser.REF);
            this.state = 498;
            this.match(PainlessParser.ID);
            break;

        case 4:
            localctx = new LocalfuncrefContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 499;
            this.match(PainlessParser.THIS);
            this.state = 500;
            this.match(PainlessParser.REF);
            this.state = 501;
            this.match(PainlessParser.ID);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


PainlessParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 3:
			return this.statement_sempred(localctx, predIndex);
	case 14:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

PainlessParser.prototype.statement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return  _input.LA(1) != ELSE ;
		default:
			throw "No predicate with index:" + predIndex;
	}
};

PainlessParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 14);
		case 2:
			return this.precpred(this._ctx, 13);
		case 3:
			return this.precpred(this._ctx, 12);
		case 4:
			return this.precpred(this._ctx, 11);
		case 5:
			return this.precpred(this._ctx, 10);
		case 6:
			return this.precpred(this._ctx, 8);
		case 7:
			return this.precpred(this._ctx, 7);
		case 8:
			return this.precpred(this._ctx, 6);
		case 9:
			return this.precpred(this._ctx, 5);
		case 10:
			return this.precpred(this._ctx, 4);
		case 11:
			return this.precpred(this._ctx, 3);
		case 12:
			return this.precpred(this._ctx, 2);
		case 13:
			return this.precpred(this._ctx, 1);
		case 14:
			return this.precpred(this._ctx, 9);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.PainlessParser = PainlessParser;
