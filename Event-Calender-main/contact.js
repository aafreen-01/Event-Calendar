const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message. We will get back to you soon.");
  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";
});
