
let count = 0;

let value = document.querySelector('.value')
let btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {

btn.addEventListener('click',function(e){

let styles = e.currentTarget.classList

if (styles.contains('decrease')){

console.log(styles)
value.textContent = count --
}
if (styles.contains('increase')){

    value.textContent = count ++
}

else if(styles.contains('reset')) {
count == 0


}


})
})











 











