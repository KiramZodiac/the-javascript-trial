



const person = {
name : 'akram',
age : 25,

intro : function() {
return this.name + this.age


}}


const members =['cephas','akram','isaac'];
let membermap = members.map(function(mem){

return '<h1>'+ mem + '</h1>'


})

console.log(membermap)