document.getElementById("farming").addEventListener("click", actionFarming);

function actionFarming() {
  sections();
}

function sections() {
  let section3 = document.getElementById("section3");
  section3.style.display = "block";

  let img1 = document.getElementById("img1");
  img1.setAttribute("src", "img/agricultura01.jpg");
  let sec1H2 = document.getElementById("h2-1");
  sec1H2.innerHTML = "TITULO 1";
  let sec1p1 = document.getElementById("p1");
  sec1p1.innerHTML = "Ejemplo de texto título 1";

  document.getElementById("img2").setAttribute("src", "img/agricultura02.jpg");
  document.getElementById("h2-2").innerHTML = "TITULO 2";
  document.getElementById("p2").innerHTML = "Ejemplo de texto título 1";

  document.getElementById("img3").setAttribute("src", "img/agricultura03.jpg");
  document.getElementById("h2-3").innerHTML = "TITULO 3";
  document.getElementById("p3").innerHTML = "Ejemplo de texto título 3";
}
