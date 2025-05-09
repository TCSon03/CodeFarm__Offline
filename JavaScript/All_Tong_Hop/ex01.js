// console.log(sessionStorage);
// console.log(localStorage);

/**
 * Buoc 1: tu thong tin checked quyet dịnh có gắn class darkmode vào body hay không?
 * Bước 2: Cập nhật storage
 * Bước 3: set value mặc định cho checked lấy từ storage ra để mỗi lần vào trang web, tùy chọn theme mode của người dùng được ấp dụng
 */

const themeElement = document.getElementById("theme");
const body = document.querySelector("body");

function clickElement() {
  const checked = event.target.checked;
  if (checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "");
  }
}
const themeLocal = localStorage.getItem("theme");
if (themeLocal === "dark-mode") {
  themeElement.setAttribute("checked", true);
  body.classList.add("dark-mode");
} else {
  body.classList.add("light-mode");
}

themeElement.addEventListener("click", clickElement);
