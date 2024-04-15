document.addEventListener("DOMContentLoaded", function () {
    let element = document.querySelector("#billing").value;
    console.log(element);
})

document.querySelector("label input").addEventListener("change", () => {
    let element = document.querySelector("#billing");
    let variable = document.querySelector("label input");
    if (variable.checked){
        document.querySelector("#home").value = element.value;
        document.querySelector("#home").disabled = true;
    }
    else{
        document.querySelector("#home").value = "";
        document.querySelector("#home").disabled = false;
    }
    console.log("debug");
})