$(document).ready(function () {
  $("#fullpage").fullpage({
    anchors: ["one", "two", "three", "four", "five", "six"],
  });
  $(".carousel").carousel();
  const loaderPage = function () {
    setInterval(function () {
      $(".fh5co-loader").fadeOut("slow");
    }, 10000);
  };
  loaderPage();
});

//
// const mediaQueryMe = window.matchMedia("(max-width: 576px)");

// mediaQueryMe.addEventListener("change", (e) => {
//   if (e.matches) {
//     console.log(`Mobile`);
//   } else {
//     console.log("no mobile");
//   }
// });
