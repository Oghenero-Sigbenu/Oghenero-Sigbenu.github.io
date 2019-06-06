// $(document).ready(function() {
//     const img  = $('#image-slide');
//     const next = $(".next");
//     const prev = $(".prev");
   
//     //images to be displayed in an array
//     const images = ["./images/Capture.PNG","./images/Foody UI.PNG", "./images/Creative UI.PNG"];
//     let imagesIndex = 0;
//     //The length of the array
//     const imageLength = images.length;

//     //onclicking on the next botton tbe images should change
//     next.click(() =>{
//         if(imagesIndex < imageLength - 1){
//             imagesIndex++
//             img.attr("src", images[imagesIndex])
//          } else{
//             imagesIndex === imageLength - 1
//             imagesIndex = 0
//             img.attr("src", images[imagesIndex]);
//                                                 }});

//     setInterval(() => {
//     if(imagesIndex < imageLength - 1){
//         imagesIndex++
//         img.attr("src", images[imagesIndex])} 
//         }, 2000);

// });
