const JSdropZone = document.getElementById("js-input-zone");
const JSinput = document.getElementById("js-input");
document.getElementById("start").onclick = embed;

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
    request.open(
      "GET",
      "https://legendturtle.github.io/js-to-pdf/default.pdf",
      true
    );
    request.onload = function () {
      result =
        request.responseText.slice(0, 360) +
        js_code +
        request.responseText.slice(403, -1);
      document.getElementById("output").textContent = result;
    };
    request.send(null);
    js_file = null;
    js_code = null;
    is_js_receive = false;
  }
}

JSdropZone.addEventListener("click", js_click);
JSinput.addEventListener("change", js_receive);
