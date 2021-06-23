/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const addMenuContent = () => {
    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-info-div");
    menuContent.innerHTML =
        "<h1>EXOTIC MENU</h1><h2>Suchi Rolls</h2><ul><li>Maki Mix  <span>7,00£</span></li><li>Suchi Vegeterian <span>7,50£</span></li><li>Sashimi Zalm <span>6,00£</span></li>Urakami Box<li><span>18,00£</span></li></ul><h2>Exotic Fast Food</h2><ul><li>Döner Kebab (Chicken) <span>4,50£</span></li><li>Baguettes <span>3,50£</span></li><li>Currywurst<span>3,50£</span></li><li>Egg Rolls<span>3,00£</span></li><li>Chicken Nuggets<span>4,50£</span></li><li>Pizza <span>5,00£</span></li><li>Homemade Burger<span>5,00£</span></li></ul>";

    return menuContent;
};

const createMenuDiv = () => {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");

    menuDiv.appendChild(addMenuContent());
    return menuDiv;
};

export default createMenuDiv;
