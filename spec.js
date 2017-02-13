const la = require('lazy-ass')

describe('snap-shot DOM', function () {
  it('has document', function () {
    la(typeof document === 'object')
  })

  it('creates DIV', function () {
    const div = document.createElement('div')
    la(div.nodeName === 'DIV')
  })
})
