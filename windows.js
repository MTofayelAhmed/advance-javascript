
var Name = "kuddus";

function add (num1, num2){
  var result = num1 + num2;
  console.log( "inside Name", Name);
  function double(num){
return num * 2;
}
var total = double (result);
console.log(total);
 
  return total; 
};

var sum = add (12, 14);
console.log(sum);