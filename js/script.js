const username = document.querySelector("#username");
const password = document.querySelector("# password");
const rememberMecheckbox = document.querySelector(".ck");

function setCookie(cookieName, cookieValue, exDay) {
  const now = new Date();
  now.setTime(now.getTime() + exDay * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}`;
}

function getCookie(cookieName) {
  let cookiesArray = document.cookie.split(";");
  let mainCookie = null;
  cookiesArray.some((cookie) => {
    mainCookie = cookie.substring(cookie.indexOf("=") + 1);
    return true;
  });

  return mainCookie;
}
