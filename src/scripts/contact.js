const addContactsContent = () => {
    const contactsContent = document.createElement("div");

    contactsContent.classList.add("contacts-info-div");

    const li = document.createElement("li");
    li.textContent = "Email: emmanuellekamwa@gmail.com";
    contactsContent.appendChild(li);

    return contactsContent;
};

const createContactsDiv = () => {
    const contactsDiv = document.createElement("div");
    contactsDiv.classList.add("contacts-div");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    contactsDiv.appendChild(heading);
    contactsDiv.appendChild(addContactsContent());

    return contactsDiv;
};

export default createContactsDiv;
