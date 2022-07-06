export const setCookie = (cookie_name: any, value: any, miuntes: any): void => {
  const exdate = new Date();
  exdate.setMinutes(exdate.getMinutes() + miuntes);
  const cookie_value =
    escape(value) +
    (miuntes == null ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = cookie_name + "=" + cookie_value;
};
export const getCookie = (cookie_name: any) => {
  var x, y;
  var val = document.cookie.split(";");

  for (var i = 0; i < val.length; i++) {
    x = val[i].substr(0, val[i].indexOf("="));
    y = val[i].substr(val[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, ""); // 앞과 뒤의 공백 제거하기
    if (x === cookie_name) {
      return unescape(y); // unescape로 디코딩 후 값 리턴
    }
  }
};
