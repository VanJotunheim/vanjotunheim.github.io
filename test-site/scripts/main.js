const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/imagen2.jpg") {
    myImage.setAttribute("src", "images/kaizenstore.jpg");
  } else {
    myImage.setAttribute("src", "images/imagen2.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor ingrese su nombre.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("nombre", myName);
      myHeading.textContent = `Kaizen Store es la ostia, ${myName}`;
    }
  }
  

if (!localStorage.getItem("nombre")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("nombre");
    myHeading.textContent = `Kaizen Store es la ostia, ${storedName}`;
}
    
myButton.onclick = () => {
    setUserName();
};
  