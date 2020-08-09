window.addEventListener("load", start);

function start() {
  document.getElementById("petro").addEventListener("click", actionPetro);
}

function actionPetro() {
  hiddenSection();
  exchangeImg();
}

function hiddenSection() {
  let section = document.getElementById("section3");
  section.style.display = "none";
}

function exchangeImg() {
  let img1 = document.getElementById("img1");
  img1.setAttribute("src", "img/petroleo01.jpg");

  let img2 = document.getElementById("img2");
  img2.setAttribute("src", "img/petroleo02.jpg");
}

