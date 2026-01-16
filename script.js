document.addEventListener("DOMContentLoaded", () => {
    console.log("Pasteleria Chococat cargada correctamente");
})

const socialItems=document.querySelectorAll(".social-item");
socialItems.forEach(item => {
    item.addEventListener("click", function(e) {
        const link = this.getAttribute("href");
        if (link){
            console.log(`Redirigiendo a: ${link}`);
            window.open(link, "_blank");
        }   
    });
});