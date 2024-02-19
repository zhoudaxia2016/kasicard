const rubyPattern = /^\{([^|]+)\|([^|]+)\}/
module.exports = {
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
