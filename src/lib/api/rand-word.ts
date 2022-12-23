
export default async function randWord() {
    // random word from words.json
    // random number between 1 and equal or less 22
    const wordsFileNum = Math.floor(Math.random() * 23)
    const words = await (await fetch(`/words/words_${wordsFileNum}.json`)).json()
    const word = (await words)[Math.floor(Math.random() * words.length)]
    return word

}
