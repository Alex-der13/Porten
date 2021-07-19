let offset_1 = 0;
const products_inner = document.querySelector('.products_inner');


document.querySelector('.btn1').addEventListener('click', function () {
  offset_1 = offset_1 - 215;
  if (offset_1 < 0) {
    offset_1 = 430;
  }
  products_inner.style.left = -offset_1 + 'px';
});

document.querySelector('.btn2').addEventListener('click', function () {
  offset_1 = offset_1 + 215;
  if (offset_1 > 430) {
    offset_1 = 0;
  }
  products_inner.style.left = -offset_1 + 'px';
});




let offset_2 = 0;
const brandsIcons = document.querySelector('.brands_icons');


document.querySelector('.btn3').addEventListener('click', function () {
  offset_2 = offset_2 - 260;
  if (offset_2 < 0) {
    offset_2 = 780;
  }
  brandsIcons.style.left = -offset_2 + 'px';
});

document.querySelector('.btn4').addEventListener('click', function () {
  offset_2 = offset_2 + 260;
  if (offset_2 > 780) {
    offset_2 = 0;
  }
  brandsIcons.style.left = -offset_2 + 'px';
});
