import "../scss/main.scss";

let icon = document.getElementById("menu-icon");
let menu = document.getElementById("menu");
let body = document.body;

icon.addEventListener("click", function() {
  let x;
  let show;
  if (icon.innerHTML === '<i class="fa fa-bars"></i>'){
    x = '<i class="fa fa-times"></i>';
    icon.innerHTML = x;
    body.classList.add("menu-active");
  } else {
    x = '<i class="fa fa-bars"></i>';
    icon.innerHTML = x;
    body.classList.remove('menu-active');
  }
  console.log(menu);
});
