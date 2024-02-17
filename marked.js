const rubyPattern = /^\{([^|]+)\|([^|]+)\}/
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
  extensions: [{
    name: 'ruby',
    level: 'inline',
    start(src) { return src.match('{')?.index },
    tokenizer(src) {
      const match = rubyPattern.exec(src);
      if (match) {
        return {
          type: 'ruby',
          raw: match[0],
          text: match[1],
          phonetic: match[2],
        };
      }
    },
    renderer(token) {
      return `<ruby>${token.text}<rt>${token.phonetic}</rt></ruby>`
    }
  }],
}
