module.exports = {
  literals: {
    'keyword': ['new'],
    'keyword.control': ['if', 'in', 'else', 'while', 'do', 'for', 'continue', 'break', 'return', 'try', 'catch', 'throw'],
    'keyword.operator': ['!', '~', '*', '/', '%', '+', '-', '<<', '>>', '>>>', '<', '<=', '>', '>=', '==', '===', '!=', '!==', '&', '^', '|', '&&', '||', '?', ':', '::', '->', '=~', '==~', '++', '--', '=', '+=', '-=', '*=', '/=', '%=', '&=', '^=', '|=', '<<=', '>>=', '>>>=', 'new', 'instanceof'],
    'paren.lparen': ['(', '{', '['],
    'paren.rparen': [')', '}', ']'],
    'punctuation.operator': [',', ';', '.'],
    'storage.type': ['float', 'int', 'void', 'function'],
    'constant.language': ['true', 'false', 'null'],
    'variable.language': ['this'],
    'support.variable': ['doc', 'ctx']
  },
  symbols: {
    'keyword': ['NEW'],
    'keyword.control': ['IF', 'IN', 'ELSE', 'WHILE', 'DO', 'FOR', 'CONTINUE', 'BREAK', 'RETURN', 'TRY', 'CATCH', 'THROW'],
    'keyword.operator': ['BOOLNOT', 'BWNOT', 'MUL', 'DIV', 'REM', 'ADD', 'SUB', 'LSH', 'RSH', 'USH', 'LT', 'LTE', 'GT', 'GTE', 'EQ', 'EQR', 'NE', 'NER', 'BWAND', 'XOR', 'BWOR', 'BOOLAND', 'BOOLOR', 'COND', 'COLON', 'REF', 'ARROW', 'FIND', 'MATCH', 'INCR', 'DECR', 'ASSIGN', 'AADD', 'ASUB', 'AMUL', 'ADIV', 'AREM', 'AAND', 'AXOR', 'AOR', 'ALSH', 'ARSH', 'AUSH'],
    'paren.lparen': ['LP', 'LBRACE', 'LBRACK'],
    'paren.rparen': ['RP', 'RBRACE', 'RBRACK'],
    'punctuation.operator': ['DOT', 'COMMA', 'SEMICOLON'],
    'identifier': ['ID'],
    'constant.numeric': ['INTEGER', 'DECIMAL', 'HEX', 'OCTAL'],
    'constant.language': ['NULL'],
    'constant.language.boolean': ['TRUE', 'FALSE'],
    'comment': ['COMMENT'],
    'string.quoted.double': ['STRING'],
    'string.quoted.single': ['STRING'],
    'string.regexp': ['REGEX'],
    'variable.language': ['THIS'],
    'storage.type': ['TYPE']
  }
};