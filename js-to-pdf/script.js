const JSdropZone = document.getElementById("js-input-zone");
const JSinput = document.getElementById("js-input");

let js_file;

let is_js_received;
let is_pdf_received;

document.addEventListener("dragover", (ev) => ev.preventDefault());
document.addEventListener("drop", (ev) => ev.preventDefault());

function js_recieved() {
  is_js_received = true;
  log(js_file);
}

JSdropZone.addEventListener("drop", (ev) => {
  ev.preventDefault();
  js_file = ev.dataTransfer.files[0];
  js_recieved();
});

JSdropZone.addEventListener("click", () => {
  JSinput.click();
  JSinput.addEventListener("change", () => {
    js_file = JSinput.files[0];
    js_recieved();
  });
});
