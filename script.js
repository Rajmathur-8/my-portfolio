/*==========SHOW MENU ==============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=========== MENU SHOW =============*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* =========== MENU HIDDEN =================*/
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}

/*============== REMOVE MENU MOBILE===================*/
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

navLinks.forEach(n => {
    n.addEventListener('click', linkAction);
});

    

/*===================SWIPER PROJECTS =====================*/
document.addEventListener("DOMContentLoaded", function () {
  
  let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: -56,
      },
    },
  });
});

/* ===================== EMAIL JS =========================*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

      const sendEmail = (e) => {
        e.preventDefault()
          //check if field has a value
        if(contactName.value === '' || contactEmail.value === '' || 
        contactProject.value === '' ){
          //add and remove color
          contactMessage.classList.remove('color-blue')
          contactMessage.classList.add('color-red')
           //show message
        contactMessage.textContent = 'Write all the input fields 📩'
        }else{
          //serviceID - templateID - #form - publicKey
          emailjs.sendForm('service_t3itqxd','template_v8jczk7','#contact-form','_Hy4Hj0UAxLPW-Eo0')
            .then(() => {
              //show message and add color
              contactMessage.classList.add('color-blue')
              contactMessage.textContent = 'Message sent ✅'

              //remove message after 5 sec
              setTimeout(() => {
                contactMessage.textContent = ''
              },5000)
            },(error) => {
              alert('OOPs! SOMETHING WENT WRONG.....',error)
            })
        // to clear the input fields
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
        }
       
      }
      contactForm.addEventListener('submit',sendEmail)

 /*===================SCROLL SECTIONS ACTIVE LINKS=========================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll',scrollActive)


 /*====================== SHOW SCROLL UP =====================*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

 /*============================= DARK-LIGHT THEME ======================================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously choose a topic
if(selectedTheme){
  //if the validation id fulfilled, we ask what the issue was to know if we activated or deacivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}
//Activate / decativate the theme manually with the button
themeButton.addEventListener('click',() => {
  //add or remove the dark
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // we save the theme and the current icon that the user choose
  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon',getCurrentIcon())

})

/*=====================CHANGE BACKGROUND HEADER =============================*/
const scrollHeader = () => {
  const header =  document.getElementById('header')

  //when scroll is graer than 50 viewport height, add the scroll header class to the header tag
  this.scrollY >= 50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

/*===================== SCROLL REVEAL ANIMATION ===============================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration:2500,
  delay: 400,
  // reset: true /*Animations repeat*/ 
})


sr.reveal(`.home__data,projects__container, .footer__container`)
sr.reveal(`.home__info div`,{delay: 600,origin: 'bottom', inteval:100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`,{origin:'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`,{origin:'right'})
sr.reveal(`.qualification__content, .services__card`,{interval:100})
