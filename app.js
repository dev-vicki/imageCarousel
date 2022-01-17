const image = document.getElementById("center");
const API = "https://api.unsplash.com/photos/?client_id=xDKZOGSLtv3YmEIBmHrNcv_PLc7G9XkDaIvAUA1ngj0";

   fetch(API)
   .then((res) => {
     return res.json();
   })
   .then((data) =>{
     console.log(data)
       data.map((value) => {
           key=value.id;
           let img = document.createElement("img");
           img.src = value.urls.small;
           center.appendChild(img);
       })
   })


