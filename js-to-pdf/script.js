const JSdropZone = document.getElementById("js-input-zone");
const JSinput = document.getElementById("js-input");

let js_file;
let pdf_file;

function js_receive() {
  console.log("click");
}

JSdropZone.addEventListener("click", js_receive);
