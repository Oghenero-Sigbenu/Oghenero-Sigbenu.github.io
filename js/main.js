$(document).ready(function() {
    const img = $('img');
    const next = $(".next");
    const prev = $(".prev");
    //images to be displayed in an array
    const images = ["./images/Capture.PNG","./images/Foody UI.PNG", "./images/Creative UI.PNG"];

    let imagesIndex;
    //The length of the array
    const imageLength = images.length;

    //onclicking on the next botton tbe images should change
    next.click(() =>{
        // console.log("love")
        if(imagesIndex < imageLength - 1){
            imagesIndex++
            img.attr("src", images[imagesIndex])
        }else{
            imagesIndex === imageLength - 1
            imagesIndex = 0
                img.attr("src", images[imagesIndex]);
        }
        // setInterval(next, 3000);
    });

//previous button
// prev.click(() =>{
//     // console.log("love")
//     if(imagesIndex > imageLength - 1){
//         imagesIndex --
//         img.attr("src", images[imagesIndex])
//     }else{
//         imagesIndex === imageLength
//         imagesIndex = 0
//             img.attr("src", images[imagesIndex]);
//     }
});


