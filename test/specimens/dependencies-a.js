define([ "./dependencies-b.js", "./dependencies-c.js" ], (b, c) => {
    b();
    c();
    
    const div = document.createElement("div");

    div.innerText = "./dependencies-a.js";
    
    document.querySelector("#output").appendChild(div);
});
