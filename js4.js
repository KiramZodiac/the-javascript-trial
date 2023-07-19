let colors = ['red','green','orange','pink'];

let btn = document.getElementById('btn');

btn.addEventListener('click',function(set){

let change = Math.floor(Math.random() *colors.length)

console.log(change)
})
