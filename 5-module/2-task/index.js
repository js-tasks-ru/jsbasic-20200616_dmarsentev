function toggleText() {
  // ваш код...
  const btn = document.querySelector("button.toggle-text-button");
  const div = document.querySelector("div#text");
  btn.addEventListener('click', () => {
    div.classList.toggle("invisible");
    div.hidden = div.classList.contains("invisible");
  });

}
