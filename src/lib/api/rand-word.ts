
export default async function randWord() {
    const wordsFileNum = Math.floor(Math.random() * 22) + 1
    const words = await (await fetch(`/words/words_${wordsFileNum}.json`)).json()
    const word = (await words)[Math.floor(Math.random() * words.length)]
    return word

}
