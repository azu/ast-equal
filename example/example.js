// LICENSE : MIT
"use strict";
import { parse } from "esprima";
import astEqual from "ast-equal"
var sourceCode = 'var a = "string";';
var actualAST = parse(sourceCode);
var expectedCode = 'var a = "string";';
var expectedAST = parse(expectedCode);

// AST == Code
astEqual(actualAST, expectedCode);
// AST == AST
astEqual(actualAST, expectedAST);
