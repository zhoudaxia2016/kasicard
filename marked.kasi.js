const base = require('./marked.base')
const notate = require('./notate')
module.exports = {
  async: true,
  async walkTokens(token) {
    if (token.type === 'paragraph') {
      let [text, translation] = token.text.split('\n')
      text = await notate(text)
      if (translation) {
        text = `<details><summary>${text}</summary>${translation}</details>`
      }
      token.tokens = this.Lexer.lexInline(text)
    }
  },
  ...base,
}
