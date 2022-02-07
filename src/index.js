// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

const oldCard = document.getElementsByClassName("card-group");
const oldTitle = document.getElementById("logoTitle");

// A- finding across the entire DOM
const header = document.querySelector("header");
const logoTitle = documnet.querySelector("#logoTitle"); //'h1'
const firstCard = documnet.querySelector(".card:nth-of-type(1)");
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img");
const titleFirstCard = firstCard.querySelector("h2");
const subtitleFirstCard = firstCard.querySelector("h3");
const textFirstCard = firstCard.querySelector("p");
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav a");
// B- Loop over the links and console.log their text content
links.forEach(link => console.log(link.textContent));
// C- Turn the collection of links into a real array
const realLinks = Array.from(links)
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeTag = realLinks.find(link => link.textContent === "Home");
/**
 * what is the difference between == ====????
 * == type coercion => "0" == 0
 * === does NOT do type coercion => "0" !== 0
 */

HTMLFormControlsCollection.log(homeTag);
// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
logoTitle.textContent = "BloomTech Doggo";
const logo = document.querySelector(".logo-container img");
logo.src = "https://eskipaper.com/images/cute-puppy-look-1.jpg"

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes
link1FirstCard.setAttribute("href", "https://www.pexels.com/search/dog/");
link2FirstCard.setAttribute("href", "https://dogoipsum.com/");
link2FirstCard.textContent = "Doggo Ipsum";
imageFirstCard.src = "https://eskipaper.com/images/cute-puppy-look-1.jpg";

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add("sky");
header.classList.remove("sky");
//  B- By manipulating inline styles on the element
header.stytle.fontSize = "2rem";

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const newLink = document.createElement("a");
newLink.textContent = "Blog";
newLink.href = "#";
document.querySelector("nav").appendChild(newLink);

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true); // secondCard !== firstCard
documnet.querySelector(".card-group").appenedChild(secondCard);

const data =   {
  "contact": {
    "contact-heading" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  }
};

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
const heading = document.querySelector(".contact-heading");
const address = document.querySelector(".address");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");

/**
 * what are the two ways you access key value pairs in an object???
 * dot notation + bracket notation
 */
heading.textContent = data['contact']['contact-heading'];
address.textCOntect = data['contact']['address'];
// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
