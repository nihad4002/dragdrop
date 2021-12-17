let boxs = document.querySelectorAll(".box");
let bigbox = document.querySelector(".bigbox");
boxs.forEach((box)=>{
    box.ondragstart=function(e){
        //e.dataTransfer.setData("text",e.target.data-id) ozun yaratdiqin (data-id) bire seyi e.target.data-id yazmaq olamz e.targt.id ,classname olar
        let salam = box.getAttribute("data-id")
        e.dataTransfer.setData("text", salam);
    }
})

bigbox.ondragover=function(e){
    e.preventDefault();
}

bigbox.ondrop = function(e) {
    let color = e.dataTransfer.getData("text");
    bigbox.style.backgroundColor = color;
    console.log(color);
}

