// SaZYUKo20lkQS7qLnzxH6MFIm1iLxqzJhslto3ota7s
function getImage() {
    let key = "SaZYUKo20lkQS7qLnzxH6MFIm1iLxqzJhslto3ota7s";
    let uri = "https://api.unsplash.com/photos/random/?client_id=";

    fetch(uri + key)
    .then((data) => {
        return data.json();
    }) 
    .then((jsonData) => {
        console.log(jsonData);
        let result = `<img src=${jsonData.urls.regular}/>
        <h3>${jsonData.description}</h3>`
        
        document.body.style.backgroundColor = jsonData.color;
        if (jsonData.description === null) {
            return document.getElementById("container").innerHTML = `<img src=${jsonData.urls.regular}/>` + `<h3>(No Description Found)</h3>`
        } else {
            document.getElementById("container").innerHTML = result;
        }
    })

}
