$(document).ready(function () {
  const header = $("#header:not(#header.not-fixed");
  const headerWrapper = header.children(".wrapper");

  $(document).scroll(function (e) {
    const scrollY = window.scrollY;
    if (scrollY > 150) {
      header.css("background-color", "#1c1c1c");
      headerWrapper.css({ "padding-top": "10px", "padding-bottom": "10px" });
    } else {
      header.css("background-color", "transparent");
      headerWrapper.css({ "padding-top": "42px", "padding-bottom": "30px" });
    }
  });
});
