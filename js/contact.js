// burger menu js, getting elements and function to toggle open/close burger menu
const openBurger = document.getElementById("openBurger");
const closeBurger = document.getElementById("closeBurger");
openBurger.addEventListener("click", toggleBurgerMenu);
closeBurger.addEventListener("click", toggleBurgerMenu);
let menuOpen = false;

function toggleBurgerMenu() {
  if (!menuOpen) {
    menuOpen = !menuOpen;
    document.getElementById("burgerMenuLinks").style.display = "block";
    document.getElementById("burgerMenuLinks").style.animation =
      "slideDown .3s";
    document.getElementById("closeBurger").style.display = "block";
    document.getElementById("openBurger").style.display = "none";
  } else if (menuOpen) {
    menuOpen = !menuOpen;
    document.getElementById("closeBurger").style.display = "none";
    document.getElementById("openBurger").style.display = "block";
    document.getElementById("burgerMenuLinks").style.animation = "slideUp .3s";
    setTimeout(() => {
      document.getElementById("burgerMenuLinks").style.display = "none";
    }, 200);
  }
}


function postClientNeeds(e){
  e.preventDefault()
const clientName = document.getElementById('clientName').value
const clientEmail = document.getElementById('clientEmail').value
const clientPhone = document.getElementById('clientPhone').value
const clientMessage = document.getElementById('clientMessage').value

fetch('https://jsonplaceholder.typicode.com/posts',{
  method:'POST',
  headers:{
    Accept: 'text/plain, application/json, */*',
    "Content-type":"application/json",
  },
  body:JSON.stringify({name:clientName, email:clientEmail, phone:clientPhone ,message:clientMessage}),
}).then((res)=>res.json()).then((formData)=>console.log(formData))


}

// function for contact form page loading letter and feedback to user

const contactFormBtn = document.getElementById('contactBtn');

contactFormBtn.addEventListener("click", (event)=>{

    postClientNeeds(event)
    const nameClient = document.getElementById('clientName').value
    const clientMessage = document.getElementById('clientMessage').value
    
    if(nameClient != '' && clientMessage.length >=50){
      event.preventDefault()
    contactFormBtn.innerHTML='Please wait ...';
    setTimeout(()=>{
      document.getElementById('contactForm').classList.add('hidden');      document.querySelector(".submission-recieved").classList.remove("hidden");

    },1000)
  }

})

