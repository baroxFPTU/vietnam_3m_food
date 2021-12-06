const header = document.querySelector("#header");
const headerWrapper = header.querySelector(".wrapper");

document.addEventListener("scroll", (e) => {
  const scrollY = window.scrollY;
  if (scrollY > 150) {
    header.style.backgroundColor = "#333";
    headerWrapper.style.paddingTop = "10px";
    headerWrapper.style.paddingBottom = "10px";
  } else {
    header.style.backgroundColor = "transparent";
    headerWrapper.style.paddingTop = "42px";
    headerWrapper.style.paddingBottom = "30px";
  }
});
