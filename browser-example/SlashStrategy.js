var SlashStrategy = {
    slashIsRegex: function(localctx, lexer) {

        var tokenIndex = lexer._tokenFactorySourcePair[1]._index;
        if (tokenIndex === 0) {
            return true;
        }

        var lastToken = lexer._tokenFactorySourcePair[1].data[tokenIndex-1];
        var PainlessLexer = lexer.constructor;

        switch (lastToken) {
            case PainlessLexer.RBRACE:
            case PainlessLexer.RP:
            case PainlessLexer.OCTAL:
            case PainlessLexer.HEX:
            case PainlessLexer.INTEGER:
            case PainlessLexer.DECIMAL:
            case PainlessLexer.ID:
            case PainlessLexer.DOTINTEGER:
            case PainlessLexer.DOTID:
                return false;
            default:
                return true;
        }
    }
};

module.exports = SlashStrategy;