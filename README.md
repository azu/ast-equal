# ast-equal

Test helper to assert JavaScript AST equality.

## Installation

    npm install ast-equal

## Usage

### astEqual(actual, expected, message)

```
/**
 * Asserts that the `actual` is strictly equal actual to `expected`
 * @param {string|Object} actual
 * @param {string|Object} expected
 * @param {string?} message
 */
astEqual(actual, expected, message);
```

#### [Example](./example)

```js
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
```


## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT