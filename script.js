var buttons = document.querySelectorAll("button");
var display = document.querySelector(".display");
var clicks = 0;
var timer,
  timeout = 500;

let out = "";

for (const button of buttons) {
  button.addEventListener("click", function (e) {
    clearTimeout(timer);
    clicks++;
    var evt = e;
    timer = setTimeout(function () {
      if (clicks == 1) {
        var letter = button.getAttribute("data-text");
        out = out + letter[0];
        console.log(letter[0]);
      }
      if (clicks == 2) {
        var letter = button.getAttribute("data-text");
        out = out + letter[1];
        console.log(letter[1]);
      }
      if (clicks == 3) {
        var letter = button.getAttribute("data-text");
        out = out + letter[2];
        console.log(letter[2]);
      }
      clicks = 0;
      console.log(out);
      display.value = out;
    }, timeout);
  });
}
