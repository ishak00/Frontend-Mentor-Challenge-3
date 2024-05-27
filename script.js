const chareImg = document.querySelector(".chareImg");
const panel = document.querySelector(".panel");

let isPanelHidden = true;

chareImg.addEventListener("click", () => {
  if (isPanelHidden) {
    panel.style.display = "block";
  } else {
    panel.style.display = "none";
  }
  isPanelHidden = !isPanelHidden;
});
