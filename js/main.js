$(document).ready(function() {
    const img  = $('#image-slide');
    const next = $(".next");
    const prev = $(".prev");
    const hamb = $(".hamb-menu");
    const nav  =  $(".nav");
   
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
        } 
        else{
            imagesIndex === imageLength - 1
            imagesIndex = 0
                img.attr("src", images[imagesIndex]);
                next.disabled = false;
        }
        setInterval(next, 3000);
    });

    //previous button
    prev.click(() =>{
    if(imagesIndex < 0){
        imagesIndex -= 1
        img.attr("src", images[imagesIndex])
    }
});

    hamb.click(() =>{
        console.log("lobe");
    })
});
