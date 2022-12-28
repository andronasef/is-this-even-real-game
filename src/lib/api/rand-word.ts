import { dev } from '$app/environment'

export default async function randWord() {
    const wordsFileNum = Math.floor(Math.random() * 22) + 1
    const words = await (await fetch(`${dev ? '' : '/is-this-even-real-game'
        }/words/words_${wordsFileNum}.json`)).json()
    const word = (await words)[Math.floor(Math.random() * words.length)]
    return word

}
