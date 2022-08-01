// Get element from HTML
let myBtn = document.querySelector("#btn");
let myInput = document.querySelector("#input")
// Event

myBtn.addEventListener("click", togglePassword)

function togglePassword(){
  if(myBtn.getAttribute("data-text") === "show"){
    myInput.setAttribute("type", "text");
    this.setAttribute("data-text", "hidden")
    this.innerHTML = "Hide";
  } else {
    myInput.setAttribute("type", "password");
    this.setAttribute("data-text", "show")
    this.innerHTML = "Show";
  }
}