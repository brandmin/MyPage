(function () {
  const newBookmarkForm = document.getElementById("bookmark-item-input-form");
  const bookmarkItemList = document.getElementById("bookmark-list");
  // 웹 사이트 접속했을 때 추가되어야 함.
  let bookmarkList = [];

  if (localStorage.getItem("bookmarkList")) {
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
  } else {
    // 해당 리스트에 없다면 북마크리스트의 값을 할당한다.
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
  }

  const addBookmarkItem = () => {
    let bookmarkList = [];
    if (localStorage.getItem("bookmarkList")) {
      bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    }
    let name = document.getElementById("new-bookmark-name-input").value;
    let url = document.getElementById("new-bookmark-url-input").value;
    let createAt = Date.now();
    bookmarkList.push({ name: name, url: url, createAt: createAt });
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
    document.getElementById("new-bookmark-name-input").value = "";
    document.getElementById("new-bookmark-url-input").value = "";
    setBookmarkItem({ name: name, url: url, createAt: createAt });
    newBookmarkToggle();
  };
  // 추가 버튼을 눌러야만 북마크 폼 생성
  let isAddBtnClick = false;
  newBookmarkForm.style.display = "none";

  const newBookmarkToggle = () => {
    isAddBtnClick = !isAddBtnClick;
    isAddBtnClick
      ? (newBookmarkForm.style.display = "block")
      : (newBookmarkForm.style.display = "none");
  };

  // 북마크 삭제 작업
  const deleteBookmarkItem = (id) => {
    const isDelete = window.confirm("정말 삭제하시겠습니까?");
    if (isDelete) {
      let bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
      let nowBookmarkList = bookmarkList.filter((elm) => elm.createAt !== id);
      localStorage.setItem("bookmarkList", JSON.stringify(nowBookmarkList));
      document.getElementById(`bookmark-item-${id}`).remove();
    }
  };

  const setBookmarkItem = (item) => {
    const bookmarkItem = document.createElement("div");
    bookmarkItem.classList.add("bookmark-item");
    bookmarkItem.id = `bookmark-item-${item.createAt}`;

    const bookmarkInfo = document.createElement("div");
    bookmarkInfo.classList.add("bookmark-info");
    const bookmarkUrl = document.createElement("a");
    bookmarkUrl.classList.add("bookmark-url");

    const urlIcon = document.createElement("div");
    urlIcon.classList.add("url-icon");

    const urlIconImg = document.createElement("img");
    urlIconImg.src = ` https://www.google.com/s2/favicons?domain_url=${item.url}`;

    const nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.textContent = item.name;

    const bookmarkDelBtn = document.createElement("div");
    bookmarkDelBtn.textContent = "삭제";
    bookmarkDelBtn.classList.add("del-btn");
    bookmarkDelBtn.addEventListener("click", () => {
      deleteBookmarkItem(item.createAt);
    });

    bookmarkItem.appendChild(bookmarkInfo);
    bookmarkItem.appendChild(bookmarkDelBtn);
    bookmarkInfo.appendChild(bookmarkUrl);
    bookmarkUrl.appendChild(urlIcon);
    bookmarkUrl.appendChild(nameElement);
    urlIcon.appendChild(urlIconImg);

    bookmarkItemList.appendChild(bookmarkItem);
  };

  // 로컬스토리지에 저장된 리스트들을 꺼내는 작업
  const setBookmarkList = () => {
    bookmarkList.forEach((item) => {
      console.log(item);
    });
  };

  setBookmarkList();
  document.getElementById("bookmark-item-add-btn").addEventListener("click", newBookmarkToggle);
  document.getElementById("add-btn").addEventListener("click", addBookmarkItem);
  document.getElementById("cancel-btn").addEventListener("click", newBookmarkToggle);
  
})();
