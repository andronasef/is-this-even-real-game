import words from './words.json'

export default function randWord() {
    // random word from words.json
    return words[Math.floor(Math.random() * words.length)]

}
