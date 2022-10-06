const myIamge = document.querySelector("img");

myIamge.onclick = () => {
  const mySrc = myIamge.getAttribute("src");
  if (mySrc === "images/portrait-johanna-legere.jpg") {
    myIamge.setAttribute("src", "images/portrait-johanna-business.jpg");
  } else {
    myIamge.setAttribute("src", "images/portrait-johanna-legere.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(text = "Please enter your name.") {
  const myName = prompt(text);
  if (!myName) {
    setUserName("You have to enter a name in order to proceed!");
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Ich grütze Sie, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
