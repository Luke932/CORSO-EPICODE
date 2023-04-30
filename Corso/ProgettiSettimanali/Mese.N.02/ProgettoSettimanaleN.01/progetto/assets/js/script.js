const change = 785;
const modBtn = document.getElementById("btnG");
const headCh = document.getElementById("head");
window.addEventListener("scroll", () => {
  if (window.scrollY >= change) {
    modBtn.classList.add("btnG");
    headCh.classList.add("headCh");
    modBtn.classList.remove("outBtn");
    headCh.classList.remove("outHead");
  } else if (window.screenY < change) {
    modBtn.classList.remove("btnG");
    headCh.classList.remove("headCh");
    modBtn.classList.add("outBtn");
    headCh.classList.add("outHead");
  }
});

let m = document.querySelectorAll("g[stroke-linecap='butt']");
setInterval(() => {
  let random = Math.round(Math.random() * (m.length - 3));
  m[random].classList.toggle("opacity");
}, 10);