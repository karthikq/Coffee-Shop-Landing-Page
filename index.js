/** @format */

$(document).ready(() => {
  console.log("Coffee shop Website @Karthik");
  setTimeout(() => {
    $(".loader").fadeOut();
  }, 3000);
});
AOS.init({
  delay: 4000,
  duration: 3000,
  easing: "ease",
});
