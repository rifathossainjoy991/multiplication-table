let heading = document.querySelector(".heading")
let inputbox = document.querySelector(".namota")
let button = document.querySelector(".button")
let err = document.querySelector(".err")


button.addEventListener("click", ()=>{

    if (!inputbox.value) {
        
        err.innerHTML = "namta number is requied!"
    }else if(!isNaN(inputbox.value)){
        heading.innerHTML = ""
        err.innerHTML = ""
        for (let i = 1; i < 11; i++) {
            heading.innerHTML +=inputbox.value + "x" + i + "=" + inputbox.value*i + "<br>"
        }
    }
    
})



   
