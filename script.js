
document.getElementById("gallery1").style.display="flex";


document.getElementById("layout").addEventListener("change",(e)=>{
    console.log(e.target.value,"target value")

    document.querySelectorAll(".mom_item").forEach(e=>e.style.display = "none")

    switch(e.target.value){
        case "flexbox":
            document.getElementById("gallery1").style.display="flex";
            break;
        case "grid":
            document.getElementById("gallery2").style.display="grid";
            break;
        case "js":
            document.getElementById("gallery3").style.display="block";
            break;
    }

})




