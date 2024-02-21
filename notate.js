const Kuroshiro = require('kuroshiro').default
const KuromojiAnalyzer = require('kuroshiro-analyzer-kuromoji')
const kuroshiro = new Kuroshiro()

module.exports = async function(text) {
  if (!kuroshiro._analyzer) {
    await kuroshiro.init(new KuromojiAnalyzer())
  }

  return kuroshiro.convert(text, {mode: 'furigana', to: 'hiragana'})
}
