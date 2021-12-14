const holam = document.getElementById("holam");

holam.onmouseenter = () => {
  holam.innerHTML = "";
};

holam.onclick = () => {
    holam.innerHTML = "<h1>Hola mundo!</h1>";
};
