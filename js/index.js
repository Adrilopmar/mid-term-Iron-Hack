//  regex for email checking
const regexEmail = `^[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$`;

// js for newsletter section in index.html
const newsLetterBtn = document.getElementById("btnNewsLetter");
const openBurger = document.getElementById('openBurger')
const closeBurger = document.getElementById('closeBurger')


let menuOpen = false
// function for newsletter section loading letter and feedback to user
newsLetterBtn.addEventListener("click", (event) =>{
  const emailClient = document.getElementById("inputNewsLetter").value;
  if (emailClient.match(regexEmail)) {
    event.preventDefault();
    newsLetterBtn.innerHTML = "Please wait ...";
    setTimeout(() => {
      document.getElementById("formNewsLetter").classList.add("hidden");
      document.querySelector(".submission-recieved").classList.remove("hidden");
    }, 1000);
  }
});


openBurger.addEventListener('click',toggleBurgerMenu)
closeBurger.addEventListener('click',toggleBurgerMenu)

function toggleBurgerMenu(){
  if(!menuOpen){
    menuOpen = !menuOpen
    document.getElementById('burgerMenuLinks').style.display ='block'
    document.getElementById('burgerMenuLinks').style.animation= 'slideDown .3s'
    document.getElementById('closeBurger').style.display ='block'
    document.getElementById('openBurger').style.display ='none'
  }else if(menuOpen){
    menuOpen = !menuOpen
    document.getElementById('closeBurger').style.display ='none'
    document.getElementById('openBurger').style.display ='block'
    document.getElementById('burgerMenuLinks').style.animation= 'slideUp .3s'
    setTimeout(()=>{
      document.getElementById('burgerMenuLinks').style.display ='none'
    },200)
  }

}


