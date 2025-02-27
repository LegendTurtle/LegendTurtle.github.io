const JSdropZone = document.getElementById("js-input-zone");
const JSinput = document.getElementById("js-input");
const PDFdropZone = document.getElementById("pdf-input-zone");
const PDFinput = document.getElementById("pdf-input");
document.getElementById("start").onclick = embed;

let defaultPdf;

let js_file;
let pdf_file;

let js_code;
let pdf_code;

let is_js_receive = false;
let is_pdf_receive = false;

function js_click() {
  JSinput.click();
}
function pdf_click() {
  PDFinput.click();
}

function js_receive() {
  js_file = JSinput.files[0];
  const js_reader = new FileReader();
  js_reader.readAsText(js_file);
  js_reader.onload = () => {
    js_code = js_reader.result;
    console.log(js_code);
  };
  is_js_receive = true;
}
function pdf_receive() {
  pdf_file = PDFinput.files[0];
  const pdf_reader = new FileReader();
  pdf_reader.readAsText(pdf_file);
  pdf_reader.onload = () => {
    pdf_code = pdf_reader.result;
    console.log(pdf_code);
  };
  is_pdf_receive = true;
}
function embed() {
  if (is_js_receive && is_pdf_receive) {
    let request = new XMLHttpRequest();
    request.open("GET", "us_quantity.txt", true);
  }
}

JSdropZone.addEventListener("click", js_click);
JSinput.addEventListener("change", js_receive);
PDFdropZone.addEventListener("click", pdf_click);
PDFinput.addEventListener("change", pdf_receive);
