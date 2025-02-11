const JSdropZone = document.getElementById("js-input-zone");
const JSinput = document.getElementById("js-input");

let js_file;
let pdf_file;

function js_click() {
  JSinput.click();
}
function js_receive() {
  js_file = JSinput.files[0];
  console.log(js_file);
}

JSdropZone.addEventListener("click", js_click);
JSinput.addEventListener("change", js_receive);
