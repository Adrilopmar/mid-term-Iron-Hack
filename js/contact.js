// function for contact form page loading letter and feedback to user

const contactFormBtn = document.getElementById('contactBtn');

contactFormBtn.addEventListener("click", (event)=>{
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