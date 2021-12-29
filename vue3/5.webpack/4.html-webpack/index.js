import "./index.scss";

const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
btn.addEventListener("click", function (e) {
  text.innerHTML = "你好啊";
});
