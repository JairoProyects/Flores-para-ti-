onload = () =>{
        document.body.classList.remove("container");
};

window.addEventListener("load", () => {
    if (sessionStorage.getItem("playMusic") === "true") {
        document.getElementById("music")
            .play()
            .catch(err => console.log(err));

        sessionStorage.removeItem("playMusic");
    }
});
