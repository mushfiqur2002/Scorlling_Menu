const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");

let counter = 0;
// #### EVENT LISTENER #### \\
prevBtn.addEventListener("click", function(){
    counter--;
    carousel();
})
nextBtn.addEventListener("click",function(){
    counter++;
    carousel();
})
// #### FUNCTION #### \\
function carousel(){
    // methood number 01
    // if(counter === slides.length){
    //     counter = 0;
    // }else if(counter<0){
    //     counter = slides.length-1;
    // }
    // methood number 02
    if(counter<slides.length-1){
        nextBtn.style.display = "block";
    }else{
        nextBtn.style.display = "none";
    }
    if(counter === 0){
        prevBtn.style.display = "none";
    }else{
        prevBtn.style.display = "block";
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateY(-${counter*100}%)`;
    })
}
prevBtn.style.display = "none";