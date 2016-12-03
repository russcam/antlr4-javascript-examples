// Generated from browser-example/PainlessParser.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by PainlessParser.
function PainlessParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

PainlessParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PainlessParserListener.prototype.constructor = PainlessParserListener;

// Enter a parse tree produced by PainlessParser#source.
PainlessParserListener.prototype.enterSource = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#source.
PainlessParserListener.prototype.exitSource = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#afunction.
PainlessParserListener.prototype.enterAfunction = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#afunction.
PainlessParserListener.prototype.exitAfunction = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#parameters.
PainlessParserListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#parameters.
PainlessParserListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#if.
PainlessParserListener.prototype.enterIf = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#if.
PainlessParserListener.prototype.exitIf = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#while.
PainlessParserListener.prototype.enterWhile = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#while.
PainlessParserListener.prototype.exitWhile = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#do.
PainlessParserListener.prototype.enterDo = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#do.
PainlessParserListener.prototype.exitDo = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#for.
PainlessParserListener.prototype.enterFor = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#for.
PainlessParserListener.prototype.exitFor = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#each.
PainlessParserListener.prototype.enterEach = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#each.
PainlessParserListener.prototype.exitEach = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#ineach.
PainlessParserListener.prototype.enterIneach = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#ineach.
PainlessParserListener.prototype.exitIneach = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#decl.
PainlessParserListener.prototype.enterDecl = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#decl.
PainlessParserListener.prototype.exitDecl = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#continue.
PainlessParserListener.prototype.enterContinue = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#continue.
PainlessParserListener.prototype.exitContinue = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#break.
PainlessParserListener.prototype.enterBreak = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#break.
PainlessParserListener.prototype.exitBreak = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#return.
PainlessParserListener.prototype.enterReturn = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#return.
PainlessParserListener.prototype.exitReturn = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#try.
PainlessParserListener.prototype.enterTry = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#try.
PainlessParserListener.prototype.exitTry = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#throw.
PainlessParserListener.prototype.enterThrow = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#throw.
PainlessParserListener.prototype.exitThrow = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#expr.
PainlessParserListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#expr.
PainlessParserListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#trailer.
PainlessParserListener.prototype.enterTrailer = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#trailer.
PainlessParserListener.prototype.exitTrailer = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#block.
PainlessParserListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#block.
PainlessParserListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#empty.
PainlessParserListener.prototype.enterEmpty = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#empty.
PainlessParserListener.prototype.exitEmpty = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#initializer.
PainlessParserListener.prototype.enterInitializer = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#initializer.
PainlessParserListener.prototype.exitInitializer = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#afterthought.
PainlessParserListener.prototype.enterAfterthought = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#afterthought.
PainlessParserListener.prototype.exitAfterthought = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#declaration.
PainlessParserListener.prototype.enterDeclaration = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#declaration.
PainlessParserListener.prototype.exitDeclaration = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#decltype.
PainlessParserListener.prototype.enterDecltype = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#decltype.
PainlessParserListener.prototype.exitDecltype = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#declvar.
PainlessParserListener.prototype.enterDeclvar = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#declvar.
PainlessParserListener.prototype.exitDeclvar = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#trap.
PainlessParserListener.prototype.enterTrap = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#trap.
PainlessParserListener.prototype.exitTrap = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#delimiter.
PainlessParserListener.prototype.enterDelimiter = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#delimiter.
PainlessParserListener.prototype.exitDelimiter = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#single.
PainlessParserListener.prototype.enterSingle = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#single.
PainlessParserListener.prototype.exitSingle = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#comp.
PainlessParserListener.prototype.enterComp = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#comp.
PainlessParserListener.prototype.exitComp = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#bool.
PainlessParserListener.prototype.enterBool = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#bool.
PainlessParserListener.prototype.exitBool = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#conditional.
PainlessParserListener.prototype.enterConditional = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#conditional.
PainlessParserListener.prototype.exitConditional = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#assignment.
PainlessParserListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#assignment.
PainlessParserListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#binary.
PainlessParserListener.prototype.enterBinary = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#binary.
PainlessParserListener.prototype.exitBinary = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#instanceof.
PainlessParserListener.prototype.enterInstanceof = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#instanceof.
PainlessParserListener.prototype.exitInstanceof = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#pre.
PainlessParserListener.prototype.enterPre = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#pre.
PainlessParserListener.prototype.exitPre = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#post.
PainlessParserListener.prototype.enterPost = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#post.
PainlessParserListener.prototype.exitPost = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#read.
PainlessParserListener.prototype.enterRead = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#read.
PainlessParserListener.prototype.exitRead = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#operator.
PainlessParserListener.prototype.enterOperator = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#operator.
PainlessParserListener.prototype.exitOperator = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#cast.
PainlessParserListener.prototype.enterCast = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#cast.
PainlessParserListener.prototype.exitCast = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#dynamic.
PainlessParserListener.prototype.enterDynamic = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#dynamic.
PainlessParserListener.prototype.exitDynamic = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#static.
PainlessParserListener.prototype.enterStatic = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#static.
PainlessParserListener.prototype.exitStatic = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#newarray.
PainlessParserListener.prototype.enterNewarray = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#newarray.
PainlessParserListener.prototype.exitNewarray = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#precedence.
PainlessParserListener.prototype.enterPrecedence = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#precedence.
PainlessParserListener.prototype.exitPrecedence = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#numeric.
PainlessParserListener.prototype.enterNumeric = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#numeric.
PainlessParserListener.prototype.exitNumeric = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#true.
PainlessParserListener.prototype.enterTrue = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#true.
PainlessParserListener.prototype.exitTrue = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#false.
PainlessParserListener.prototype.enterFalse = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#false.
PainlessParserListener.prototype.exitFalse = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#null.
PainlessParserListener.prototype.enterNull = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#null.
PainlessParserListener.prototype.exitNull = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#string.
PainlessParserListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#string.
PainlessParserListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#regex.
PainlessParserListener.prototype.enterRegex = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#regex.
PainlessParserListener.prototype.exitRegex = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#listinit.
PainlessParserListener.prototype.enterListinit = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#listinit.
PainlessParserListener.prototype.exitListinit = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#mapinit.
PainlessParserListener.prototype.enterMapinit = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#mapinit.
PainlessParserListener.prototype.exitMapinit = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#variable.
PainlessParserListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#variable.
PainlessParserListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#calllocal.
PainlessParserListener.prototype.enterCalllocal = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#calllocal.
PainlessParserListener.prototype.exitCalllocal = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#newobject.
PainlessParserListener.prototype.enterNewobject = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#newobject.
PainlessParserListener.prototype.exitNewobject = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#postfix.
PainlessParserListener.prototype.enterPostfix = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#postfix.
PainlessParserListener.prototype.exitPostfix = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#postdot.
PainlessParserListener.prototype.enterPostdot = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#postdot.
PainlessParserListener.prototype.exitPostdot = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#callinvoke.
PainlessParserListener.prototype.enterCallinvoke = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#callinvoke.
PainlessParserListener.prototype.exitCallinvoke = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#fieldaccess.
PainlessParserListener.prototype.enterFieldaccess = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#fieldaccess.
PainlessParserListener.prototype.exitFieldaccess = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#braceaccess.
PainlessParserListener.prototype.enterBraceaccess = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#braceaccess.
PainlessParserListener.prototype.exitBraceaccess = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#newstandardarray.
PainlessParserListener.prototype.enterNewstandardarray = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#newstandardarray.
PainlessParserListener.prototype.exitNewstandardarray = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#newinitializedarray.
PainlessParserListener.prototype.enterNewinitializedarray = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#newinitializedarray.
PainlessParserListener.prototype.exitNewinitializedarray = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#listinitializer.
PainlessParserListener.prototype.enterListinitializer = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#listinitializer.
PainlessParserListener.prototype.exitListinitializer = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#mapinitializer.
PainlessParserListener.prototype.enterMapinitializer = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#mapinitializer.
PainlessParserListener.prototype.exitMapinitializer = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#maptoken.
PainlessParserListener.prototype.enterMaptoken = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#maptoken.
PainlessParserListener.prototype.exitMaptoken = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#arguments.
PainlessParserListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#arguments.
PainlessParserListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#argument.
PainlessParserListener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#argument.
PainlessParserListener.prototype.exitArgument = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#lambda.
PainlessParserListener.prototype.enterLambda = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#lambda.
PainlessParserListener.prototype.exitLambda = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#lamtype.
PainlessParserListener.prototype.enterLamtype = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#lamtype.
PainlessParserListener.prototype.exitLamtype = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#classfuncref.
PainlessParserListener.prototype.enterClassfuncref = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#classfuncref.
PainlessParserListener.prototype.exitClassfuncref = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#constructorfuncref.
PainlessParserListener.prototype.enterConstructorfuncref = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#constructorfuncref.
PainlessParserListener.prototype.exitConstructorfuncref = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#capturingfuncref.
PainlessParserListener.prototype.enterCapturingfuncref = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#capturingfuncref.
PainlessParserListener.prototype.exitCapturingfuncref = function(ctx) {
};


// Enter a parse tree produced by PainlessParser#localfuncref.
PainlessParserListener.prototype.enterLocalfuncref = function(ctx) {
};

// Exit a parse tree produced by PainlessParser#localfuncref.
PainlessParserListener.prototype.exitLocalfuncref = function(ctx) {
};



exports.PainlessParserListener = PainlessParserListener;