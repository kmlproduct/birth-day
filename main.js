var mybtn = document.getElementById('btn');
var mydiv = document.getElementById('mydiv')
var mydiv2 = document.getElementById('mydiv2')
mybtn.onclick = function () {
    mybtn.style.display = "none"
    mydiv.style.background = "none"
    mydiv2.style.display = "block"
}