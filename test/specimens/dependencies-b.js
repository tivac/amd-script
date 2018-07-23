define(() => () => {
    const div = document.createElement("div");

    div.innerText = "./dependencies-b.js";
    
    document.querySelector("#output").appendChild(div);
});
