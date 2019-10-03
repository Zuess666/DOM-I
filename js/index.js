const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent.cta["img-src"]);

 // IN THE FOLLOWING LOOP I ADDED 1 TO i BECAUSE THE OBJECT ALSO
  //HAS AN IMAGE PROPERTY WHICH SKEWS WHERE i ENDS
let navBar = document.querySelectorAll("a");
console.log(navBar);
for (let i = 0; i < navBar.length; i++) {
 navBar[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}

// Dom is Awesome header above button

let header = document.querySelector("h1");
header.textContent = siteContent["cta"]["h1"];


// text within button element

let btnCta = document.querySelector("button");
btnCta.textContent = siteContent["cta"]["button"];


// top content section

let topContent = document.querySelectorAll(".text-content h4");
console.log(topContent);

for (let i = 0; i < topContent.length; i++) {
  if (i % 2 == 0) {
    topContent[i].textContent = siteContent["main-content"]["features-h4"];
  } else {
    topContent[i].textContent = siteContent["main-content"]["about-h4"];
  }
}

// middle image section

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//bottom content section

let btmContent = document.querySelectorAll(".text-content p");
console.log(btmContent);
for (let i = 0; i < btmContent.length; i++) {
  if (i % 2 == 0) {
    btmContent[i].textContent = siteContent["main-content"]["features-content"];
  } else {
    btmContent[i].textContent = siteContent["main-content"]["about-content"];
  }
}

//contact section

// top DOM is specifically for the h4 sub-heading above the contact info

let contact = document.querySelector('.contact h4');
contact.textContent = siteContent["contact"]["contact-h4"];

// contact info

let contactsP = document.querySelectorAll('.contact p');
contactsP[0].textContent = siteContent["contact"]["address"];

contactsP[1].textContent = siteContent["contact"]["phone"];

contactsP[2].textContent = siteContent["contact"]["email"];


// footer // although a footer it is also listed as a'p' tag

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];


//green nav bar

 let navbarGreen = document.querySelectorAll('nav a');
 for(let i = 1;i<7;i++){navbarGreen[i-1].style.color = 'green'};

// //app and prepend

 let navbarParent = document.querySelector('nav');

 let Last = document.createElement('a');

 Last.textContent="Last"

 navbarParent.append(Last);

 const First = document.createElement('a');

 First.textContent="First"

 navbarParent.prepend(First);