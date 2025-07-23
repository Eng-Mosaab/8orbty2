const helperBtn = document.getElementById("helper-btn");
const helperBox = document.getElementById("helper-box");
const faqs = document.querySelectorAll(".faq");

helperBtn.onclick = () => {
  helperBox.style.display = helperBox.style.display === "block" ? "none" : "block";
};

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
  });
});
