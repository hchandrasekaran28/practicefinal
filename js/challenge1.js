document.addEventListener("DOMContentLoaded", function () {
    let h1Element = document.querySelector("h1");
    h1Element.style.textAlign = "center";
    h1Element.style.color = "#800080";
})

document.addEventListener("dblclick", function(event){
    const d = new Date();
    let time = d.toLocaleTimeString("en-US");
    alert(time);
})

document.querySelector("#toggle").addEventListener("change", () => {
    let item = document.querySelector("#emailBox");
    item.classList.toggle("hidden");
})