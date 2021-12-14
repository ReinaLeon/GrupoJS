const boouno = document.getElementById("boouno");
const boodos = document.getElementById("boodos");
boodos.style.display = "none";

boouno.onmouseover = () => {
  boouno.style.display = "none";
  boodos.style.display = "block";
};

boouno.onmouseleave = () => {
    boouno.style.display = "block";
    boodos.style.display = "none";
  
}