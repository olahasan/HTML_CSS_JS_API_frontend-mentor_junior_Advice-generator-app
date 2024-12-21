let btn = document.getElementsByClassName("btn")[0];
let cardSubtitle = document.getElementsByClassName("card-subtitle")[0];
let tip = document.getElementsByClassName("tip")[0];
let tipError = document.getElementsByClassName("card-text")[0];
let alert = document.getElementsByClassName("alert")[0];

// console.log(btn);
// console.log(cardSubtitle);
// console.log(tip);

btn.onclick = function () {
  getAdvice();
};

function getAdvice() {
  axios
    .get("https://api.adviceslip.com/advice")
    .then((response) => {
      let result = response.data.slip;
      //   console.log(response.data.slip);
      cardSubtitle.innerHTML = `<span>ADVICE</span># ${result.id}`;
      tip.innerHTML = `${result.advice}`;
    })
    .catch((error) => {
      //   console.log(error.message);
      cardSubtitle.innerHTML = `${error.message}`;
      tipError.innerHTML = "";
      showAlert(error.message);
    });
}
getAdvice();

function showAlert(message) {
  alert.classList.add("show");
  alert.innerHTML = `
  ${message} --- refresh the page
    <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
    ></button>`;
}
