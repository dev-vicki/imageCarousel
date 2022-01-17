const image = document.getElementById("center");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
.then((res) => {
  return res.json();
})
.then((data) =>{
    data.map((value) => {
        key=value.id;
        let img = document.createElement("img");
        img.src = `https://picsum.photos/600/600?random=${value.id}`;
        center.appendChild(img);
        console.log(value.url)
    })
})

