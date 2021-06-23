/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
const loadInitialPage = (title, myCaption = "") => {
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info-div");

    const heading = document.createElement("h1");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = myCaption;

    infoDiv.appendChild(heading);
    infoDiv.appendChild(paragraph);

    return infoDiv;
};

export default loadInitialPage;
