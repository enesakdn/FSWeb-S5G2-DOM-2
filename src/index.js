import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

document.addEventListener("wheel", function (event) {
  let elements = document.querySelectorAll(
    "p, h1, h2, h3, h4, h5, h6, span, a"
  );
  if (event.deltaY > 0) {
    elements.forEach((el) => (el.style.color = "black"));
  } else {
    elements.forEach((el) => (el.style.color = "green"));
  }
});

const body1 = document.querySelectorAll("body");
body1[0].style.backgroundColor = "#F5F5DC";

const nameInputs = document.querySelectorAll("[id='name']");
const messages = document.querySelectorAll("[id='message']");

nameInputs.forEach((nameInput) => {
  nameInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      messages.forEach((message) => {
        message.textContent = "Tebrikler!! Kaydınız Alındı!";
      });
    }
  });
});

let images = document.querySelectorAll("img");

images.forEach(function (image) {
  image.addEventListener("mouseover", function () {
    this.style.filter = "grayscale(100%)";
  });
  image.addEventListener("mouseout", function () {
    this.style.filter = "grayscale(0%)";
  });
});

let paragraf = document.querySelectorAll("p");

paragraf.forEach(function (p) {
  p.addEventListener("mouseover", function () {
    p.style.fontSize = "2em";
  });
  p.addEventListener("mouseout", function () {
    p.style.fontSize = "";
  });
});

let double = document.getElementsByClassName("btn");

for (let i = 0; double.length; i++) {
  double[i].addEventListener("dblclick", function () {
    location.href =
      "https://genclikkamplari.gsb.gov.tr/Modul/Aktiviteler.aspx?id=7";
  });
}

const title = document.querySelector("h1");
const frame = document.createElement("div");
frame.style.border = "15px solid black";
