import getAbout from "./about";
import getHomepage from "./homepage";
import getMenu from "./menu";


const precontent = document.querySelector("#content");
const mainMenu = document.querySelector(".mainMenu");
const mainHomepage = document.querySelector(".mainHomepage");

export default function getTitle(){
 const container1 = document.createElement("div");
container1.classList.add("container1");

    const titleContainer = document.createElement("div");
    //inside of titleContainer
      const title = document.createElement("h1");
            title.textContent = "Santana Pizza";

        titleContainer.appendChild(title);

        container1.appendChild(titleContainer);
    //close of titleContainer
    

    
    const btnContainer = document.createElement("div");
    //inside of btnContainer
        const homeBtn = document.createElement("button");
              homeBtn.classList.add("homeBtn");
              homeBtn.textContent = "HOME";
              homeBtn.addEventListener("click", function(){
                
                const prechanges = document.querySelector(".changes");
                prechanges.remove();
                getHomepage();
               
            })


        const menuBtn = document.createElement("button");
              menuBtn.classList.add("menuBtn");
              menuBtn.textContent = "MENU";
              menuBtn.addEventListener("click", function(){

                const prechanges = document.querySelector(".changes");
                prechanges.remove();
                getMenu();
            })

        const aboutBtn = document.createElement("button");
              aboutBtn.classList.add("aboutBtn");
              aboutBtn.textContent = "ABOUT";
              aboutBtn.addEventListener("click", function(){

                const preChanges = document.querySelector(".changes");
                preChanges.remove();
                getAbout();
            })

        btnContainer.appendChild(homeBtn);
        btnContainer.appendChild(menuBtn);
        btnContainer.appendChild(aboutBtn);

        container1.appendChild(btnContainer);
    //close of btnContainer
    content.appendChild(container1);

    
    getMenu();

    return content;
 
}

