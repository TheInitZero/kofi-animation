import { random, sample } from "https://cdn.skypack.dev/lodash";

const EMOJIS = ["🎉", "👍", "☕", "🎊", "💸"];
const MIN_DURATION = 2000;
const MAX_DURATION = 6000;

/** @type {HTMLDivElement} */
const $emojiWrapper = document.getElementById("emojiWrapper");

setInterval(function () {
  const $emoji = document.createElement("div");
  $emoji.ariaHidden = "true";
  $emoji.classList.add("emoji");
  $emoji.innerText = sample(EMOJIS);
  $emoji.style.left = random(100) + "%";
  const animationDuration = random(MIN_DURATION, MAX_DURATION);
  $emoji.style.animationDuration = animationDuration + "ms";
  $emojiWrapper.append($emoji);

  setTimeout(function () {
    $emoji.remove();
  }, animationDuration + 200);
}, 500);
