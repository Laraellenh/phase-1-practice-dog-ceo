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
