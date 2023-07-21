window.onload = function () {
  const wrap = document.querySelector(".wrap");
  const header = document.querySelector(".header");
  let scy = 0; // scrollY

  window.addEventListener("scroll", function () {
    scy = this.document.documentElement.scrollTop;

    // 스크롤이 됐다면
    if (scy > 0) {
      wrap.classList.add("active");
      header.classList.add("active");
    } else {
      wrap.classList.remove("active");
      header.classList.remove("active");
    }
  });
};
