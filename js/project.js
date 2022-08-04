// burger menu js, getting elements and function to toggle open/close burger menu
const openBurger = document.getElementById("openBurger");
const closeBurger = document.getElementById("closeBurger");
let menuOpen = false;

openBurger.addEventListener("click", toggleBurgerMenu);
closeBurger.addEventListener("click", toggleBurgerMenu);

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

// API request to print porjects information
const apiLink = 'https://jsonplaceholder.typicode.com';
const postEndPoint = '/posts'

async function getProjectsData(){
  const request = await fetch(`${apiLink}${postEndPoint}`);
  return request.json()
}
function printProject(){
    getProjectsData()
      .then((res)=>{
          document.querySelector(`#indProject h2`).innerHTML =`${res[0].title}`
          document.querySelectorAll(`.project-text p`).forEach( (el)=> el.innerHTML =`${res[0].body}`)
        
      })
    }
    function printRecentProjects(){
        getProjectsData()
          .then((res)=>{
            for(let i=1;i<4;i++){
              document.querySelector(`#project${i} h4`).innerHTML =`${res[i].title}`
              document.querySelector(`#project${i} p`).innerHTML =`${res[i].body}`
            }
          })
        }

        printRecentProjects()
    printProject()