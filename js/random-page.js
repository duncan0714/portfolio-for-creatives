function randomPage() {
  var arr = [
    "about.html",
    "clone-hero-charts.html",
    "excel-workbooks.html",
    "index.html",
    "magazine-photoshoot.html",
    "shipyards-park-photoshoot.html",
    "work.html",
  ];
  var value = arr[Math.floor(Math.random() * arr.length)];
  window.location = value;
}
