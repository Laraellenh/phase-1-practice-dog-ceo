// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
getData()
function getData() {
    // fetch
    fetch(imgUrl)
        // /parse
        .then(r => r.json())
        // make an object, 
        .then(dataObject => {
            // object.message message is the key (the dog url is the value)
            dataObject.message.forEach(dogURL => {
                const dogCon = document.getElementById("dogImageContainer")
                const img = document.createElement("img")

                img.src = dogURL
                dogCon.append(img)
            })
        })
}
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
getBreedData()

function getBreedData() {
    fetch(breedUrl)
        .then(r => r.json())
        .then(breedObject => {
            // message is the key, breed is the value object.keys or for in
            // get list of keys, Object.keys gts you only in one level of the data object, so we needed to do .message to get the values of the message keys.
            const breedObjKeyArray = Object.keys(breedObject.message)
            breedObjKeyArray.forEach(breed => {
                const breedUL = document.getElementById("dogBreeds")
                const li = document.createElement('li')
                li.addEventListener('click', () => {
                    li.preventDefault()
                    li.style = ''

                })
                li.innerText = breed
                breedUL.append(li)
            })
        })
}



