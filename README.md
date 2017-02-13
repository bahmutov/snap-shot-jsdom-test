# snap-shot-jsdom-test

> jsdom example for [snap-shot][snap-shot] project

[![Build status][ci-image] ][ci-url]

This is a test project for [snap-shot][snap-shot] for snapshot testing.

* DOM element serialized with
  [package-snapshot-dom](https://github.com/wildpeaks/package-snapshot-dom)
* output HTML can be pretty formatted with
  [posthtml-beautify](https://github.com/gitscrum/posthtml-beautify)
  or other processors

See [spec.js](spec.js) for actual test code. In principle to use snapshot
testing on Node with jsdom and mocha

* Run mocha with `mocha -r jsdom-global/register spec.js` option that loads
  [jsdom-global](https://github.com/rstacruz/jsdom-global#readme) module
* Beautify the element's HTML representation, for example

```js
const clean = require('clean-html').clean
const snapshot = require('snap-shot')

const pretty = html => {
  let result
  clean(html, out => {
    result = out
  })
  return result
}
it('can serialize div using js-beautify.html', function () {
  const div = document.createElement('div')
  div.innerHTML = '<div class="hello"><div id="message">Hello World</div></div>'
  snapshot(pretty(div.innerHTML))
})
```

* Alternatively use JSON representation of the DOM tree

```js
const elementToJson = require('@wildpeaks/snapshot-dom').toJSON
const snapshot = require('snap-shot')
it('can serialize div', function () {
  const div = document.createElement('div')
  div.innerHTML = '<p class="hello">Hello World</p>'
  snapshot(elementToJson(div))
})
```

[snap-shot]: https://github.com/bahmutov/snap-shot
[ci-image]: https://travis-ci.org/bahmutov/snap-shot-jsdom-test.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/snap-shot-jsdom-test
