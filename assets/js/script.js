$(document).ready(function () {
  AOS.init();
  let header = $("#header");
  const navbarBtn = $(".navbar__btn");
  const headerWrapper = header.children(".wrapper");
  const navbar = $(".navbar");
  const overlay = $("#header .wrapper .overlay");

  function showNavbar() {
    navbar.css("transform", "translateX(0px)");
    overlay.css("display", "block");
  }
  function hideNavbar() {
    navbar.css("transform", "translateX(100%)");
    overlay.css("display", "none");
  }

  $(document).scroll(function (e) {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      header.css("background-color", "#1c1c1c");
      headerWrapper.css({ "padding-top": "10px", "padding-bottom": "10px" });

      if (header.is(".not-fixed")) {
        header.css("position", "fixed");
      }
    } else {
      if (!header.is(".not-fixed")) {
        header.css("background-color", "transparent");
      } else {
        header.css("position", "relative");
      }

      headerWrapper.css({ "padding-top": "42px", "padding-bottom": "30px" });
    }
  });

  navbarBtn.click(showNavbar);

  overlay.click(hideNavbar);
});
