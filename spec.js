const la = require('lazy-ass')
const elementToJson = require('@wildpeaks/snapshot-dom').toJSON
const clean = require('clean-html').clean
const snapshot = require('snap-shot')

const pretty = html => {
  let result
  clean(html, out => {
    result = out
  })
  return result
}

describe('snap-shot DOM', function () {
  it('has document', function () {
    la(typeof document === 'object')
  })

  it('creates DIV', function () {
    const div = document.createElement('div')
    la(div.nodeName === 'DIV')
  })

  it('has element to JSON', function () {
    la(typeof elementToJson === 'function')
  })

  it('can serialize div', function () {
    const div = document.createElement('div')
    div.innerHTML = '<p class="hello">Hello World</p>'
    snapshot(elementToJson(div))
  })

  it('can serialize div using js-beautify.html', function () {
    const div = document.createElement('div')
    div.innerHTML = '<div class="hello"><div id="message">Hello World</div></div>'
    snapshot(pretty(div.innerHTML))
  })
})
