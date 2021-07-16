let offset = 0;
const brandsIcons = document.querySelector('.brands_icons');


document.querySelector('.btn1').addEventListener('click', function () {
  offset = offset - 260;
  if (offset < 0) {
    offset = 780;
  }
  brandsIcons.style.left = -offset + 'px';
});

document.querySelector('.btn2').addEventListener('click', function () {
  offset = offset + 260;
  if (offset > 780) {
    offset = 0;
  }
  brandsIcons.style.left = -offset + 'px';
});
