/** Dump Truck Loading Animation **/
window.addEventListener("DOMContentLoaded", loading)
function loading() {
  let percents = [0.25, 0.5, 0.75, 1];
  let step = 0;
  let truckLoopDur = 10;
  let fill = function () {
    let fillEl = document.querySelector(".progress-fill");
    fillEl.style.transform = "scaleY(" + percents[step] + ")";
    ++step;
    if (step < percents.length) {
      setTimeout(fill, (truckLoopDur * 1e3) / 2);
    }
  };
  setTimeout(fill, (truckLoopDur * 1e3) / 4);
}
