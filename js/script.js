const username = document.querySelector("#username");
const password = document.querySelector("# password");
const rememberMecheckbox = document.querySelector(".ck");

function setCookie(cookieName, cookieValue, exDay) {
  const now = new Date();
  now.setTime(now.getTime() + exDay * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}`;
}

getCookieBtn.addEventListener("click", () => {
  let mainCookieName = prompt("Enter the name");

  let cookiesArray = document.cookie.split(";");
  console.log(cookiesArray);
  let mainCookie = null;
  cookiesArray.some((cookie) => {
    if (cookie.includes(mainCookieName)) {
      mainCookie = cookie.substring(cookie.indexOf("=") + 1);
      return true;
    }
  });
  console.log(mainCookie);
});
removeCookieBtn.addEventListener("click", () => {
  console.log("ok");
  let mainCookieName = prompt("Enter the main cookie name");
  const now = new Date();
  now.setTime(now.getTime() - 2 * 24 * 60 * 60 * 1000);
  console.log(now);
  document.cookie = `${mainCookieName}=28;path=/;expries=${now}`;
});
