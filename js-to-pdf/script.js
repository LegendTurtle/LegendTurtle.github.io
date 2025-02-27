const JSdropZone = document.getElementById("js-input-zone");
const JSinput = document.getElementById("js-input");
document.getElementById("start").onclick = embed;

let defaultPdf;
let js_file;
let js_code;
let is_js_receive = false;

function js_click() {
  JSinput.click();
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
function embed() {
  if (is_js_receive) {
    let request = new XMLHttpRequest();
    request.open("GET", "default.pdf", true);
    request.onload = function () {
      defaultPdf = request.responseText;
    };
    request.send(null);
    console.log(defaultPdf);
    result = defaultPdf.slice(0, 394) + js_code + defaultPdf.slice(437, -1);
    console.log(result);
  }
}

JSdropZone.addEventListener("click", js_click);
JSinput.addEventListener("change", js_receive);
