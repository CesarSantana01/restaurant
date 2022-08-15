


export default function getMenu(){

    const changes  = document.createElement("div");
    changes.classList.add("changes");
    content.appendChild(changes);

const menu = document.createElement("div");
    menu.classList.add("mainMenu");

   
const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer")
    menu.appendChild(menuContainer);


   const menuItem1 = document.createElement("div");
    const p1 = document.createElement("p");
        p1.textContent = "Cheese pizza"
    const img1 = document.createElement("div");
        img1.classList.add("img1");
    const lp1 = document.createElement('p');
        lp1.textContent = "$12"
        menuItem1.appendChild(p1);
        menuItem1.appendChild(img1);
        menuItem1.appendChild(lp1);

    menuContainer.appendChild(menuItem1);

    const menuItem2 = document.createElement("div");
    const p2 = document.createElement("p");
        p2.textContent = "French Fries"
    const img2 = document.createElement("div");
        img2.classList.add("img2");
    const lp2 = document.createElement('p');
        lp2.textContent = "$6"
        menuItem2.appendChild(p2);
        menuItem2.appendChild(img2);
        menuItem2.appendChild(lp2);

    menuContainer.appendChild(menuItem2);

    const menuItem3 = document.createElement("div");
    const p3 = document.createElement("p");
        p3.textContent = "Salad"
    const img3 = document.createElement("div");
        img3.classList.add("img3");
    const lp3 = document.createElement('p');
        lp3.textContent = "$8"
        menuItem3.appendChild(p3);
        menuItem3.appendChild(img3);
        menuItem3.appendChild(lp3);

    menuContainer.appendChild(menuItem3);

    const menuItem4 = document.createElement("div");
    const p4 = document.createElement("p");
        p4.textContent = "Pasta bowl";
    const img4 = document.createElement("div");
        img4.classList.add("img4");
    const lp4 = document.createElement('p');
        lp4.textContent = "$9";
        menuItem4.appendChild(p4);
        menuItem4.appendChild(img4);
        menuItem4.appendChild(lp4);

    menuContainer.appendChild(menuItem4);

    const menuItem5 = document.createElement("div");
    const p5 = document.createElement("p");
        p5.textContent = "Subs";
    const img5 = document.createElement("div");
        img5.classList.add("img5");
    const lp5 = document.createElement('p');
        lp5.textContent = "$8";
        menuItem5.appendChild(p5);
        menuItem5.appendChild(img5);
        menuItem5.appendChild(lp5);

    menuContainer.appendChild(menuItem5);

    const menuItem6 = document.createElement("div");
    const p6 = document.createElement("p");
        p6.textContent = "2L Coke";
    const img6 = document.createElement("div");
        img6.classList.add("img6");
    const lp6 = document.createElement('p');
        lp6.textContent = "$2";
        menuItem6.appendChild(p6);
        menuItem6.appendChild(img6);
        menuItem6.appendChild(lp6);

    menuContainer.appendChild(menuItem6);

    const menuItem7 = document.createElement("div");
    const p7 = document.createElement("p");
    p7.textContent = "2L Sprite";
    const img7 = document.createElement("div");
        img7.classList.add("img7");
    const lp7 = document.createElement('p');
    lp7.textContent = "$2";
        menuItem7.appendChild(p7);
        menuItem7.appendChild(img7);
        menuItem7.appendChild(lp7);
    
    menuContainer.appendChild(menuItem7);

    const menuItem8 = document.createElement("div");
    const p8 = document.createElement("p");
        p8.textContent = "Build your own!";
    const img8 = document.createElement("div");
    img8.classList.add("img8");
    const lp8 = document.createElement('p');
        lp8.textContent = "Starting at $6";
        menuItem8.appendChild(p8);
        menuItem8.appendChild(img8);
        menuItem8.appendChild(lp8);

    menuContainer.appendChild(menuItem8);






   

    changes.appendChild(menu);
    return menu
}