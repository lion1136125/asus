document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("serviceForm");
  const popup = document.getElementById("submitSuccess");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (popup) {
        popup.style.display = "block";
        setTimeout(() => {
          popup.style.display = "none";
        }, 5000);
      }
      form.reset();
    });
  }
});
