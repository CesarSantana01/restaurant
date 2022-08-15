

export default function getHomepage(){
    const changes  = document.createElement("div");
    changes.classList.add("changes");
    content.appendChild(changes);

const main = document.createElement("div");
    main.classList.add("mainHomepage");

const table = document.createElement("div");
main.appendChild(table);

const para1 = document.createElement("p");
    para1.textContent = "This is us"

const img = document.createElement("div");
    img.classList.add("imgHomepage");

const para2 = document.createElement("p");
    para2.textContent = "Thank you!"

table.appendChild(para1);
table.appendChild(img);
table.appendChild(para2);




changes.appendChild(main);

return main;
}