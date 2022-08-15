export default function getAbout(){
    const changes  = document.createElement("div");
    changes.classList.add("changes");
    content.appendChild(changes);

    const about = document.createElement("div");
    about.classList.add("aboutPage");

    const table = document.createElement("div");
        table.classList.add("aboutTable");
    about.appendChild(table);
   
    const para = document.createElement("p");
    para.textContent = "This is some information about us!"
    table.appendChild(para);

    changes.appendChild(about);
    return about;





}