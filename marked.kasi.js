const base = require('./marked.base')
module.exports = {
  renderer: {
    paragraph(text) {
      let [p1, p2] = text.split('\n')
      if (p2) {
        return `<details><summary>${p1}</summary>${p2}</details>\n`
      }
      return `<p>${p1}</p>`
    }
  },
  ...base,
}
