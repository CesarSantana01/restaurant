const content = document.querySelector("#content");

export default function getFooter(){
const footer = document.createElement("footer");
    footer.classList.add("footer");

const para = document.createElement("p");
    para.textContent = "Copyright santana"

    footer.appendChild(para);
    
    content.appendChild(footer);
    return footer;
}