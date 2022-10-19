// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i= 0; i<numbers.length; i++){
//   const value = numbers[i];
//   if(i > 6){
//     break;
//   }
//   console.log(value);

// }

const bigData = [2, 3, 4, -5, -6, -7, -8, -9, -10, -11, -14, 10 , 11, 12, 14, 15, 18]
for (let i = 0; i<bigData.length; i++){
  const value = bigData[i];
  if(value < 0){
    continue;
  }
  console.log(value);
};