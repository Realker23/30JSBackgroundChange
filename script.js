const imgBox = document.querySelector(".imgBox");
const imgWrap = document.querySelector(".imgWrap");
const originalImg = document.getElementById("original-img");
const line = document.querySelector(".line");

originalImg.style.width = `${imgBox.offsetWidth}px`;

let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function (e) {
  boxWidth = e.pageX - leftSpace + "px";
  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
};
