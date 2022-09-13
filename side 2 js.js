var plus = document.getElementById('plus')
var minus = document.getElementById('minus')
var gange = document.getElementById('gange')
var dividere = document.getElementById('dividere')
var tal1 = document.getElementById('tal-1')
var tal2 = document.getElementById('tal-2')
var resultater = document.getElementById('resultater')

plus.addEventListener('click',plsuclick)
function plsuclick() {
    var sum = Number(tal1.value)+Number(tal2.value);
    resultater.innerHTML= sum
}
minus.addEventListener('click',minusclick)
function minusclick() {
    var sum = Number(tal1.value)-Number(tal2.value);
    resultater.innerHTML= sum
}
gange.addEventListener('click',gangeclick)
function gangeclick() {
    var sum = Number(tal1.value)*Number(tal2.value);

    resultater.innerHTML= sum
}
dividere.addEventListener('click',dividereclick)
function dividereclick() {
    var sum = Number(tal1.value)/Number(tal2.value);
    resultater.innerHTML= sum
}