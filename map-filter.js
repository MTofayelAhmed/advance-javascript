const number = [2, 3, 4, 5, 6, 7, 8]; 
const output = [];
for(let i = 0; i < number.length; i++){
  const Element = number[i];
  const result = Element * Element;
  output.push(result);
}


console.log(output);



 const result = number.map(function(element){
  return element * element;
})
console.log(result);


function square(element){
  return element * element;
};


const result = square (12);
console.log(result);

const result = element => element * element;

const result = number.map(x=> x * x);
console.log(result);

filter concept 
const biggerNumber = number.filter(x => x>5);
console.log(biggerNumber);
const Bigger = number.find(x=> x>7);
console.log(Bigger);