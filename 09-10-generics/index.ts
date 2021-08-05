interface Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

fetch('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=3')
    .then(res => res.json())
    .then(data => {
        console.log(data.map)
    })


async function newFetch<T>(url: string) {
    const res = await fetch(url)
    const data: T = await res.json()

    return data
}

newFetch<Photo[]>('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=3')
    .then(photos => {
        photos.map(photo => photo.id)
    })