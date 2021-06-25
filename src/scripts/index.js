import '../style.css';
import loadInitialPage from './loadingpage';
import createMenuDiv from './menu';
import createContactsDiv from './contact';

const body = document.querySelector('body');

const divContent = document.getElementById('content');
const title = 'THE LAGOON RESTAURANT';
const myCaption = 'All your delicious exotic meals at an affordable price';

// create nav bar

const nav = document.createElement('nav');

// tabButton function for populating nav bar with tab buttons.

const tabButton = (content, firstClassName = '') => {
  const myButton = document.createElement('button');
  myButton.textContent = content;
  myButton.classList.add(firstClassName);
  return myButton;
};

// Create and add the tab buttons to nav bar using 'tabButton' function

nav.appendChild(tabButton('Home', 'tab-button'));
nav.appendChild(tabButton('Menu', 'tab-button'));
nav.appendChild(tabButton('Contacts', 'tab-button'));

body.appendChild(nav);

// call all the created tabs.

const myTabs = document.getElementsByClassName('tab-button');

// create displayTabContent function for displaying content upon clicking a specific tab

const displayTabContent = (event) => {
  const tabs = document.getElementsByClassName('tab-button');
  for (let j = 0; j < tabs.length; j += 1) {
    tabs[j].classList.remove('active');
  }
  event.target.classList.add('active');

  divContent.textContent = '';

  switch (event.target.textContent) {
    case 'Home':
      divContent.appendChild(loadInitialPage(title, myCaption));
      break;
    case 'Menu':
      divContent.appendChild(createMenuDiv());
      break;
    case 'Contacts':
      divContent.appendChild(createContactsDiv());
      break;
    default:
  }
};

// Add functionality to the tabs using function "displayTabs"

for (let i = 0; i < myTabs.length; i += 1) {
  myTabs[i].addEventListener('click', displayTabContent);
}

myTabs[0].click();
