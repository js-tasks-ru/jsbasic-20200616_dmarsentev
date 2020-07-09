function hideSelf() {
  let btn1;
  btn1 = document.querySelector(".hide-self-button");
  btn1.addEventListener('click', event => {
    event.target.hidden = true;
  });
}
