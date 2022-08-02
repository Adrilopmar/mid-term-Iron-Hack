//  regex for email checking
const regexEmail = `^[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$`;

// js for newsletter section in index.html
const newsLetterBtn = document.getElementById("btnNewsLetter");

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




