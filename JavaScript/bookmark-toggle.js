(function () {
  const bookmarkBar = document.getElementById("bookmark-bar");
  const bookmarkOpen = document.getElementById("bookmark-open");
  const bookmarkClose = document.getElementById("bookmark-close");

  // 로컬스토리지에 isBookMarkBarOpen이 close라면 북마크 닫힌 상태로 만들고 open이라면 북마크를 표시
  const isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
  if (isBookMarkBarOpen === "close") {
    bookmarkBar.style.display = "none";
    bookmarkOpen.style.display = "none";
    bookmarkClose.style.display = "flex";
  } else {
    bookmarkBar.style.display = "block";
    bookmarkOpen.style.display = "flex";
    bookmarkClose.style.display = "none";
  }

  // 북마크 열렸는지 닫혔는지의 정보를 로컬 스토리지 저장
  const bookmarkBarToggle = () => {
    const isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
    if (isBookMarkBarOpen === "close") {
      localStorage.setItem("isBookMarkBarOpen", "open");
      bookmarkBar.style.display = "block";
      bookmarkOpen.style.display = "flex";
      bookmarkClose.style.display = "none";
      return;
    }
    localStorage.setItem("isBookMarkBarOpen", "close");
    bookmarkBar.style.display = "none";
    bookmarkOpen.style.display = "none";
    bookmarkClose.style.display = "flex";
  };

  document
    .getElementById("bookmark-open-btn")
    .addEventListener("click", bookmarkBarToggle);
  document
    .getElementById("bookmark-close-btn")
    .addEventListener("click", bookmarkBarToggle);
})();
