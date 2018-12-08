let myPicturesArray = [
{
"albumId": 1,
"id": 1,
"title": "accusamus beatae ad facilis cum similique qui sunt",
"url": "http://placehold.it/600/92c952",
"thumbnailUrl": "http://placehold.it/150/92c952"
},
{
"albumId": 1,
"id": 2,
"title": "reprehenderit est deserunt velit ipsam",
"url": "http://placehold.it/600/771796",
"thumbnailUrl": "http://placehold.it/150/771796"
},
{
"albumId": 2,
"id": 51,
"title": "non sunt voluptatem placeat consequuntur rem incidunt",
"url": "http://placehold.it/600/8e973b",
"thumbnailUrl": "http://placehold.it/150/8e973b"
},
{
"albumId": 2,
"id": 52,
"title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
"url": "http://placehold.it/600/121fa4",
"thumbnailUrl": "http://placehold.it/150/121fa4"
},
{
"albumId": 3,
"id": 127,
"title": "magnam quia sed aspernatur",
"url": "http://placehold.it/600/74456b",
"thumbnailUrl": "http://placehold.it/150/74456b"
},
{
"albumId": 3,
"id": 128,
"title": "est facere ut nam repellat numquam quia quia eos",
"url": "http://placehold.it/600/b0931d",
"thumbnailUrl": "http://placehold.it/150/b0931d"
},
{
"albumId": 4,
"id": 200,
"title": "I really want to go to work, but I am too sick to drive",
"url": "http://placehold.it/600/0184c1",
"thumbnailUrl": "http://placehold.it/150/0184c1"
},
{
"albumId": 4,
"id": 228,
"title": "The sky is clear; the stars are twinkling",
"url": "http://placehold.it/600/9f82ee",
"thumbnailUrl": "http://placehold.it/150/9f82ee"
},
{
"albumId": 5,
"id": 158,
"title": "This is the last random sentence I will be writing and I am going to stop mid-sent",
"url": "http://placehold.it/600/f3e9f7",
"thumbnailUrl": "http://placehold.it/150/f3e9f7"
}
];

// Display picures

myPicturesArray.forEach(function(currentImage) {
   let image = document.createElement("img");
   image.src = currentImage.thumbnailUrl;
   image.alt = currentImage.title;

   document.querySelector(".img").append(image);

   image.onclick = function() {
     let color = currentImage.thumbnailUrl.substring(24, 30);
     document.querySelector(".showImg").innerHTML = `<img src="${currentImage.url}">`;
     document.querySelector(".showImgInfo").innerHTML =
     `
     <h2>Album Id: ${currentImage.albumId}</h2>
     <h2>Id: ${currentImage.id}</h2>
     <h2>Title: ${currentImage.title}</h2>
     `;
     document.querySelector(".showImgInfo").style.color = "#" + color;
     document.querySelector(".showImgInfo").style.border = "10px solid #" + color;
   }
});
