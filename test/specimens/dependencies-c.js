define(() => () => {
    const div = document.createElement("div");

    div.innerText = "./dependencies-c.js";
    
    document.querySelector("#output").appendChild(div);
});
