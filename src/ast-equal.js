// LICENSE : MIT
"use strict";
import assert from "power-assert"
import {parse} from "esprima"
import {generate} from "escodegen"
const parseOption = {
    loc: true,
    range: true,
    comment: true,
    attachComment: true,
    sourceType: "module"
};
const generateOption = {
    comment: true
};
const boundParse = (code)=> {
    return parse(code, parseOption);
};
const boundGenerate = (AST)=> {
    return generate(AST, generateOption);
};
const boundAssert = buildAssert(boundParse, boundGenerate);

export function buildAssert(codeParse, codeGenerate) {
    return function astEqual(actualCodeOrAST, expectedCodeOrAST, message) {
        var parseActual = typeof actualCodeOrAST === "string" ? codeParse(actualCodeOrAST) : actualCodeOrAST;
        var parseExpected = typeof expectedCodeOrAST === "string" ? codeParse(expectedCodeOrAST) : expectedCodeOrAST;
        var actual = codeGenerate(parseActual);
        var expected = codeGenerate(parseExpected);
        assert.strictEqual(actual, expected, message);
    }
}

/**
 * Asserts that the `actual` is strictly equal actual to `expected`
 * @param {string|Object} actual
 * @param {string|Object} expected
 * @param {string?} message
 */
export default function astEqual(actual, expected, message) {
    boundAssert(actual, expected, message);
};