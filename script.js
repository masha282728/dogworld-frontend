const links = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll(".section");

document.addEventListener("DOMContentLoaded", () => {
  sections.forEach(section => section.classList.remove("active"));
  document.getElementById("home").classList.add("active");
});

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.dataset.target;
    sections.forEach(section => section.classList.remove("active"));
    document.getElementById(target).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const dogInfo = {
  labrador: {
    title: "Labrador Retriever",
    text: "Labrador to przyjazny, wierny i energiczny pies rodzinny. Uwielbia wodę i zabawę, a jego łagodne usposobienie czyni go doskonałym towarzyszem dzieci."
  },
  owczarek: {
    title: "Owczarek niemiecki",
    text: "Owczarek niemiecki to inteligentny i lojalny pies, znany ze swojej odwagi. Doskonale nadaje się do pracy w policji i ratownictwie."
  },
  beagle: {
    title: "Beagle",
    text: "Beagle to wesoły, ciekawski i towarzyski pies. Ma doskonały węch i jest często używany do tropienia. Świetny dla aktywnych rodzin."
  }
};

const dogCards = document.querySelectorAll(".dog");
const dogList = document.getElementById("dogList");
const dogDetails = document.getElementById("dogDetails");
const dogContent = document.getElementById("dogContent");
const backBtn = document.getElementById("backBtn");

dogCards.forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.dog;
    dogList.style.display = "none";
    dogDetails.style.display = "block";
    dogContent.innerHTML = `
      <h3>${dogInfo[key].title}</h3>
      <p>${dogInfo[key].text}</p>
      <img src="${card.querySelector("img").src}" alt="${dogInfo[key].title}" style="width:300px;border-radius:8px;margin-top:10px;">
    `;
  });
});

backBtn.addEventListener("click", () => {
  dogDetails.style.display = "none";
  dogList.style.display = "flex";
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Wiadomość została wysłana!");
  e.target.reset();
});
