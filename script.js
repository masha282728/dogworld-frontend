const links = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll(".section");


document.getElementById("home").classList.add("active");


links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.dataset.target;

    sections.forEach(section => section.classList.remove("active"));


    document.getElementById(target).classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const form = document.getElementById("contactForm");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Wiadomość została wysłana!");
  form.reset();
});
