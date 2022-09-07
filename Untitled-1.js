var liste = document.getElementById('list')
var text0add = document.getElementById('add-text')
var text0input = document.getElementById('text-input')

text0add.addEventListener ('click',btncliked)
function btncliked () {
    var text = text0input.value
    var add = document.createElement('li').innerHTML=text
    liste.append(add)
}