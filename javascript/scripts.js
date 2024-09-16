
//#region Interval text skifter
let switchArray = ["PUSH BOUNDARIES", "BLOCK YOUR EX","BREAK FREE", "GO ALL IN", "DEFY LIMITATIONS", "BLOCK YOUR EX", "GO ALL IN", "LEAVE NO REGRETS", "PUSH LIMITS", "PUSH BEYOND", "CHALLENGE LIMITS"] //Array, med quotes
let switchText = document.querySelectorAll('.switching-text') 


function updateChangingTexts() { //Funktion til at opdatere teksten
  switchText.forEach((element) => { //Forhvert element i min switchText skal den udføre 
    let index = Math.floor(Math.random() * switchArray.length); //Generere et tilfældigt heltal.
    element.textContent = switchArray[index]; //Henter det heltal i mit array, som blev genereret.
  });
}

setInterval(() => { //Interval, som kører min opdater tekst hvert sekund.
  updateChangingTexts();
}, 1000);
//#endregion

//#region Aktivt nav & aktivt burgernav
const sections = document.querySelectorAll("section");
const navBAR = document.querySelectorAll(".nav-bar div");

window.addEventListener("scroll", () => { //Eventlistener på mit window (scroll)
  let currentSection = ""; //Variabel

  sections.forEach((section) => { //Forhver section
    const sectionTop = section.offsetTop; //Afstanden fra toppen af DOM.
    // console.log(sectionTop)
    const sectionHeight = section.clientHeight; //Synlige højde af mit element

    if (pageYOffset >= sectionTop - sectionHeight / 3) { //Kontrollere om man er langt nok nede på siden
      currentSection = section.getAttribute("id"); //henter id, på den sektion man er på
    }
  });

  navBAR.forEach((navElement) => {
    navElement.classList.remove("active-nav"); //Fjerner min active-nav,
    navElement.classList.add("not-active")
    if (navElement.classList.contains(currentSection)) { //Hvis navelement classlist har min currentsection ID i sig
      navElement.classList.remove("not-active") //Fjern not-active
        navElement.classList.add("active-nav"); //Tilføj active
      
    }
  });
});

const burgersections = document.querySelectorAll("section");
const burgerNAV = document.querySelectorAll(".burger-menu div");

window.addEventListener("scroll", () => {
  let currentSection = "";

  burgersections.forEach((section) => {
    const sectionTop = section.offsetTop;
    // console.log(sectionTop)
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 1.8) {
      currentSection = section.getAttribute("id");
    }
  });

  burgerNAV.forEach((navElement) => {
    navElement.classList.remove("active-nav");
    if (navElement.classList.contains(currentSection)) {
      navElement.classList.add("active-nav");
    }
  });
});

//#endregion

//#region Burgermenu
const burger = document.querySelector(".burger-btn");
const burgerMENU = document.querySelector(".burger-menu");
const bars = document.querySelectorAll(".bar");



burger.addEventListener("click", () => { //Click listener på min burger button
  burgerMENU.classList.toggle("show"); //toggler show
  bars.forEach((element) => { //for hver bar
    element.classList.toggle("active");  //toggle active
  });
 
});
burgerMENU.addEventListener("click", () => {
  burgerMENU.classList.remove("show");
  bars.forEach((element) => {
    element.classList.remove("active");
  });

});

//#endregion

//#region Modal flavours
let modalArr = ["ORIGINAL", "STRAWBERRY", "SOUR APPLE" //Array, til mit modal med smage.
]
let modalArr2 = //Array til beskrivelse af smage
["Prepare yourself for an extraordinary energy drink experience that will ignite your senses and unleash your inner titan like never before with the revolutionary taste of Titan Original. This original flavor creation has been meticulously crafted to deliver a sensation that transcends the ordinary, taking your energy drink journey to exhilarating new heights.",
 "With every sip of Titan Strawberry Surge, you'll be transported to a sun-kissed strawberry field, where the aroma of ripe berries fills the air. As the luscious liquid touches your lips, a wave of delightful sweetness dances on your tongue, captivating your taste buds with its fruity allure. It's a tantalizing sensation that's both refreshing and invigorating. Made in collaberation with Heroic.",
 "Get ready to ignite your senses with the electrifying new flavor of Titan energy drink: Sour Apple Explosion! We've taken the bold, tangy essence of sour apples and infused it into every sip, creating an explosion of taste that will leave you craving for more."

]

let modalData = document.querySelectorAll('.modalData')
let modal = document.querySelector('.modal-container')
let closeModal = document.querySelector('.close-btn')
let modalTitle = document.querySelector('.modal-title p')
let modalText = document.querySelector('.modal-text p')




function testFunction(item) {
  modal.classList.add('modal-active'); //Tilføjer klassen
    if (item.id === '0') { //Hvis item.id er = 0. Id'et er angiet på HTML elementet.
      let modalIndex = item.id //Variabel som indeholder mit items id
      modalTitle.innerHTML =modalArr[modalIndex] //Skriver titlen udfra ID'et.
      modalText.innerHTML = modalArr2[modalIndex] //Skriver beskrivelse udfra ID'et
    }
    else if (item.id === '1') {
      let modalIndex = item.id
      modalTitle.innerHTML =modalArr[modalIndex]
      modalText.innerHTML = modalArr2[modalIndex]
    }
    else if (item.id === '2') {
      let modalIndex = item.id
      modalTitle.innerHTML =modalArr[modalIndex]
      modalText.innerHTML = modalArr2[modalIndex]
    }
  
}
closeModal.addEventListener('click', () => { //Klik listener
  modal.classList.remove('modal-active');
})

modalData.forEach((item) => { //Forhvert item i min modalData
  item.addEventListener('click', () => { //Click listener
    testFunction(item) //Kør funktion
  })
});
//#endregion

//#region Splide slideshow
document.addEventListener( 'DOMContentLoaded', function() { //Listener på når mit dokument er loaded.
  var splide = new Splide('.splide', { //Opretter splide
    type: 'loop', //Definerer mit splide
    perPage: 1, //Hvor mange elementer, per side.
  });
  splide.mount(); //Mounter min splide / intialisere den.


} );
//#endregion

//#region Preloader
let loader = document.querySelector('.preloader') 
function Loaded() { //Fiktiv loading funktion for illustration
loader.classList.add('loaded')
}
setTimeout( function() { Loaded(); }, 2500); //Kør funktionen efter 2,5 sekunder.





let signupContainer = document.querySelector('.signup-container') 
let newsLetter = document.querySelector('.newsletter')


newsLetter.addEventListener('click', () => {
  signupContainer.classList.add('signup-active')
})

//#endregion

//#region Newsletter validation

let circleLoader = document.querySelector('.circle-loader')
let checkMark = document.querySelector('.checkmark')
let createBtn = document.querySelector('.createForm');

let formContainer = document.querySelector('.account-form-container')
let message = document.querySelector('.msg')
let minLenght = 3;


let emailValidation = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i); //Regexp, bruges til at validere min mail med et "pattern" ligesom i HTML.
let fullName = document.querySelector('input[name="name"]');
let email = document.querySelector('input[name="email"]')
let complete = document.querySelector('.complete')





createBtn.addEventListener('submit', (e) => { //Listener på submit
    e.preventDefault() //Sørger for den ikke udføre den normale handling
    let nameStr = new String(fullName.value); //Opretter min namestring
    let nameLenght = nameStr.length; //Får længden på mit navn
    let isValidEmail = emailValidation.test(email.value);//Variabel til at validere mail input
    
    message.textContent = '';
if (nameLenght >= 4) { //Hvis navnlængden er større eller ligmed 4
    message.textContent = ''; //Skriv ingenting
        if (isValidEmail === true) { //Hvis isvalidmail  er ligmed true
            message.textContent = ''; //Skriv ingenting
            
          formContainer.classList.add('signup-close')
          complete.classList.add('complete-show')
          setTimeout(() => {
            circleLoader.classList.toggle('load-complete')
            checkMark.classList.add('checkcomplete')
            setTimeout(() => {
              signupContainer.classList.remove('signup-active')
              formContainer.classList.remove('signup-close')
              complete.classList.remove('complete-show')
              circleLoader.classList.remove('load-complete')
              checkMark.classList.remove('checkcomplete')

            }, 1000);
            }, 1500);
                
        }
        else { //Ellers
            message.textContent = 'Din email overholder ikke kravene for en eksiterende email.' //Skriver mailen er forkert.
            
        }
        

}
else {
    message.textContent = 'Dit fulde navn, skal være på mere end 4 bogstaver.' //Skriver navnet er forkert.
}


})



let nameValidIcon = document.querySelector('.name-valid')
let nameInvalidIcon = document.querySelector('.name-invalid')

let emailValidIcon = document.querySelector('.email-valid')
let emailInvalidIcon = document.querySelector('.email-invalid')

fullName.addEventListener('input', () => {
    var nameStr = new String(fullName.value);
    let nameLenght = nameStr.length;
    if (nameLenght >= 4) {
        nameInvalidIcon.style.display ='none'
        nameValidIcon.style.display ='block'
        
    }
    else if (nameLenght === 0) {
        nameInvalidIcon.style.display ='none'
        nameValidIcon.style.display ='none'
    }
    else {
        nameInvalidIcon.style.display ='block'
        nameValidIcon.style.display ='none'
        
    }
})

email.addEventListener('input', () => {
    let isValidEmail = emailValidation.test(email.value);
    var emailStr = new String (email.value)
    let emailLenght = emailStr.length;
    if (isValidEmail === true) {
        emailValidIcon.style.display ='block'
        emailInvalidIcon.style.display='none'
        
    }
    else if (emailLenght === 0) {
        emailValidIcon.style.display ='none'
        emailInvalidIcon.style.display='none'
    }
    
    else {
        emailValidIcon.style.display ='none'
        emailInvalidIcon.style.display='block'
       
    }
})
//#endregion

//#region Accordions
let accordionContent = document.querySelectorAll('.accordion-content');

for (let i = 0; i < accordionContent.length; i++) {
  accordionContent[i].addEventListener('click', function() {
    // Fjern klassen fra alle elementer, udover det trykkede.
    for (let j = 0; j < accordionContent.length; j++) {
      if (accordionContent[j] !== this && accordionContent[j].classList.contains('active-accordion')) { //Hvis accordioncontent er anderledes end this & indeholder klassen, fjern den.
        accordionContent[j].classList.remove('active-accordion'); //Fjerner klassen
      }
    }

    // Tilføj/ fjern klassen på det trykkede element
    if (this.classList.contains('active-accordion')) { //Hvis this indeholder klassen
      this.classList.remove('active-accordion'); //Fjern klassen
    } else {
      this.classList.add('active-accordion'); //TIlføj klassen
    }
  });
}




//#endregion

//#region Observers

let originalContent = document.querySelector('.original')
let strawberryContent = document.querySelector('.strawberry')
let appleContent = document.querySelector('.apple')


function handler1(entries, observer1) { //Funktion hvor jeg modtager to parametre, entries og observer2 som referer til selve observeren.
  for (entry of entries) { //For hver indgang i "entries", hvor indgang er et observeret element.
    let ratio = entry.intersectionRatio; //Gemmer en værdi, hvor stor en procentdel af mit element er synligt.

   if (ratio >= 0.6) { //Hvis mit element er mere synligt end 60%
     originalContent.classList.add("flavours-ani"); //Tilføj klassen
   }
 }
}

let observer1 = new IntersectionObserver(handler1, { threshold: [0.6] }); //Opretter min intersectionobserver, med en threshold på 60%.
observer1.observe(originalContent); //Hvilket element, der skal observeres.


let questionsObserve = document.querySelectorAll('.info-container div p')

function handler20(entries, observer20) {
 entries.forEach((entry => {
   if (entry.intersectionRatio >= 0.6) {
     entry.target.classList.add('info-title-ani')
   }
   
 }))
}
let observer20 = new IntersectionObserver(handler20, {threshold: [0.6] })
questionsObserve.forEach((element) => {
 observer20.observe(element);
});

let accordionBtns = document.querySelectorAll('.accordion-content')

function handler21(entries, observer21) {
 entries.forEach((entry => {
   if (entry.intersectionRatio >= 0.9) {
     entry.target.classList.add('accordion-ani')
   }
   
 }))
}
let observer21 = new IntersectionObserver(handler21, {threshold: [0.9] })
accordionBtns.forEach((element) => {
 observer21.observe(element);
});






let storesTitle = document.querySelector('.stores-title')
let storesText = document.querySelector('.stores-text')
function handler22(entries, observer22) {
 for (let entry of entries) {
   let ratio = entry.intersectionRatio;

   if (ratio >= 0.6) {
     storesTitle.classList.add("info-title-ani");
   }
 }
}

let observer22 = new IntersectionObserver(handler22, { threshold: [0.6] });
observer22.observe(storesTitle);

function handler23(entries, observer22) {
 for (let entry of entries) {
   let ratio = entry.intersectionRatio;

   if (ratio >= 0.6) {
     storesText.classList.add("info-title-ani");
   }
 }
}

let observer23 = new IntersectionObserver(handler23, { threshold: [0.6] });
observer23.observe(storesText);

let storesImg = document.querySelectorAll('.stores-loc img')
function handler24(entries, observer21) {
 entries.forEach((entry => {
   if (entry.intersectionRatio >= 0.9) {
     entry.target.classList.add('accordion-ani')
   }
   
 }))
}
let observer24 = new IntersectionObserver(handler21, {threshold: [0.9] })
storesImg.forEach((element) => {
 observer24.observe(element);
});





function handler2(entries, observer2) {
 for (let entry of entries) {
   let ratio = entry.intersectionRatio;

   if (ratio >= 0.6) {
     strawberryContent.classList.add("flavours-ani-left");
   }
 }
}

let observer2 = new IntersectionObserver(handler2, { threshold: [0.6] });
observer2.observe(strawberryContent);





function handler3 (entries, observer3) {
 for (entry of entries) {
   let ratio = entry.intersectionRatio;

   if (ratio >= 0.6) {
     appleContent.classList.add("flavours-ani");
   }
  
 }
}

let observer3 = new IntersectionObserver(handler3, {threshold: [0.6]}); 
observer3.observe(appleContent)
let a =document.querySelector('.a')
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let d = document.querySelector('.d');
let e = document.querySelector('.e');
let f = document.querySelector('.f');


let scrollText = document.querySelector('.bgg-image p') //Tekstelement i mit scroll-area
function handler4 (entries, observer4) {
 for (entry of entries) {
   let ratio = entry.intersectionRatio;

   if (ratio >= 0.9) {
   scrollText.innerHTML = 'INSPIRE'   //Ændre teksten på mit element.   
   }
  
 }
}

let observer4 = new IntersectionObserver(handler4, {threshold: [0.9]});
observer4.observe(b)

function handler5 (entries, observer5) {
  for (entry of entries) {
    let ratio = entry.intersectionRatio;

    if (ratio >= 0.9) {
    scrollText.innerHTML = 'TASTE'      
    }
   
  }
}

let observer5 = new IntersectionObserver(handler5, {threshold: [0.9]});
observer5.observe(c)


function handler6 (entries, observer6) {
  for (entry of entries) {
    let ratio = entry.intersectionRatio;

    if (ratio >= 0.9) {
    scrollText.innerHTML = 'THIRST'      
    }
   
  }
}

let observer6 = new IntersectionObserver(handler6, {threshold: [0.9]});
observer6.observe(a)


function handler7 (entries, observer7) {
  for (entry of entries) {
    let ratio = entry.intersectionRatio;

    if (ratio >= 0.9) {
    scrollText.innerHTML = 'ANTITOXIN'      
    }
   
  }
}

let observer7 = new IntersectionObserver(handler7, {threshold: [0.9]});
observer7.observe(d)

function handler8 (entries, observer8) {
  for (entry of entries) {
    let ratio = entry.intersectionRatio;

    if (ratio >= 0.9) {
    scrollText.innerHTML = 'NATURAL'      
    }
   
  }
}

let observer8 = new IntersectionObserver(handler8, {threshold: [0.9]});
observer8.observe(e)

//#endregion