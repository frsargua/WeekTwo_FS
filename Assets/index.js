const detailsButtonEL = document.getElementById("contact-me-button");
const formContainerEl = document.getElementById("form-container");

let verifier = false;
detailsButtonEL.addEventListener("click", function (event) {
  verifier == false ? open() : close();
});

const open = () => {
  formContainerEl.style.display = "flex";
  verifier = true;
};
const close = () => {
  formContainerEl.style.display = "none";
  verifier = false;
};
