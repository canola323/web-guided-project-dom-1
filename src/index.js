// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('header');
// const header = document.getElementsByTagName('header');
const logoTitle = document.querySelector('#logoTitle');
// const logoTitle = document.getElementById('logoTitle');
const firstCard = document.querySelector('.card:nth-of-type(1)');
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img');
const titleFirstCard = firstCard.querySelector('h2');
const subtitleFirstCard = firstCard.querySelector('h3');
const textFirstCard = firstCard.querySelector('p');
// firstCard.querySelector('.card-text');
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll('nav a');
// NEVER USE VAR EVER EVER EVER EVER
// B- Loop over the links and console.log their text content
for(let i = 0; i < links.length; i++) {
  console.log(links[i]);
}
links.forEach(function(link) {
  console.log(link);
})
links.forEach(link => console.log(link));
// C- Turn the collection of links into a real array
const realLinks = Array.from(links);
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeLink = realLinks.find(link => link.textContent === 'Home');
/**
 * for(let i = 0; i < realLinks.length; i++) {
 *   if (realLinks[i].textContent === 'Home') {
 *     return realLinks[i];
 *   }
 * }
 */

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
// innerHTML => change the actual HTML
// p.innerHTML = '<a href="#">AHHHH</a>'
logoTitle.textContent = 'BloomTech Dog';
titleFirstCard.textContent = 'Dogs rule!';
subtitleFirstCard.textContent = 'Cats are the worst!';
textFirstCard.textContent = 'Lorem ipsum dolor sit amet';
link2FirstCard.textContent = 'Dog Ipsum';

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes
link1FirstCard.setAttribute('href', 'https://www.pexels.com/search/dog');
link2FirstCard.setAttribute('href', 'https://doggoipsum.com');
// link2FirstCard.href = 'https://doggoipsum.com';
logoTitle.className = 'logo heading banana';
imageFirstCard.src = 'https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg';

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add('sky');
header.classList.remove('sky');
// setInterval(() => header.classList.toggle('sky'), 1000);
//  B- By manipulating inline styles on the element
header.style.fontSize = '2em';

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';
document.querySelector('nav').appendChild(blogLink);

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
document.querySelector('.card-group').appendChild(secondCard);

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
header.remove();
document.body.prepend(header);

const data =   {
  "contact": {
    "contact-heading" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  }
};

const contactHeading = document.querySelector('.contact-heading');
const address = document.querySelector('.address');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');

contactHeading.textContent = data["contact"]["contact-heading"];
address.textContent = data["contact"]["address"];
// HOW WOULD I UPDATE THE PHONE / EMAIL PORTION?!?!?
phone.textContent = data["contact"]["phone"];
email.textContent = data["contact"]["email"];