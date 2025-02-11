const JSdropZone = document.getElementById("js-input-zone");
const JSinput = document.getElementById("js-input");

let js_file;
let pdf_file;

let js_code;
let pdf_code;

function js_click() {
  JSinput.click();
}
function js_receive() {
  js_file = JSinput.files[0];
  const js_reader = new FileReader();
  reader.readAsText(js_file);
  reader.onload = () => {
    js_code = reader.result;
    console.log(js_code);
  };
}

JSdropZone.addEventListener("click", js_click);
JSinput.addEventListener("change", js_receive);
