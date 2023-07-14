const clickCount = document.querySelector("h1");
let counter = 0;
function count() {
  counter++;
  clickCount.innerHTML = "Click count = " + counter;
  if (counter % 10 === 0) {
    alert(`You have clicked ${counter} times`);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").onclick = count;
});
