let login = (element) => {
    if(element.innerText === "Login"){
        element.innerText = "Logout";
    }else{     
        element.innerText = "Login";
    }
    
}

let alertlike = ()=>{
    alert("Ninja was liked");
}

let remove = (element) => {
    element.style.display = "none";
}