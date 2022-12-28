import { writable } from 'svelte/store'

const game = writable({
    img: '',
    imgType: 0,
    isImageLoaded: false,
    score: 0,
})

export default game;




