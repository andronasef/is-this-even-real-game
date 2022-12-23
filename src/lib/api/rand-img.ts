import randWord from './rand-word'

export enum ImgType {
    stock, stable
}
// Stable Refers to Stable Diffusion => Ai Image Generator

export default async function randImg() {
    // random number from 0 to 1
    const randType = Math.floor(Math.random() * 2)
    const randFuncs = [randStockImg, randStableImg]

    const type = randType === 0 ? ImgType.stock : ImgType.stable
    const img = await randFuncs[randType]()
    return { img, type }
}

export async function randStockImg(): Promise<string> {
    const query: string = randWord()
    const res = await fetch(`https://source.unsplash.com/random/1024x1024/?${query}`)
    if (res.url.includes("source-404")) {
        return await randStockImg()
    }

    return res.url
}

// made multipe stable image sources due to rate limits
export async function randStableImg() {
    const query: string = randWord()
    const providers = [lexicaImg,]
    const randprovider = providers[Math.floor(Math.random() * providers.length)]
    // rand item from list
    const img = await randprovider(query)
    return img
}

async function lexicaImg(query: string) {
    const res = await (await fetch(`https://lexica.art/api/v1/search?q=${query}`)).json()
    const img = res.images[0].src
    return img
}

