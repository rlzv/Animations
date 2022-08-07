const txt = document.querySelector(".sec-text");

const txtLoad = () => {
    setTimeout(() => {
        txt.textContent = "WeVideo";
    }, 0);
    setTimeout(() => {
        txt.textContent = "Animations";
    }, 4000);

}

txtLoad();
setInterval(txtLoad, 12000);