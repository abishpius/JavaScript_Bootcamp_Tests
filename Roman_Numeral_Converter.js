function convertToRoman(num2) {
const rn = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
};

const num = [];

while (num2 >= 1000){
  num.push(rn[1000]);
  num2 -= 1000;
}

while (num2 >= 900){
  num.push(rn[900]);
  num2 -= 900;
}

while (num2 >= 500){
  num.push(rn[500]);
  num2 -= 500;
}

while (num2 >= 400){
  num.push(rn[400]);
  num2 -= 400;
}

while (num2 >= 100){
  num.push(rn[100]);
  num2 -= 100;
}

while (num2 >= 90){
  num.push(rn[90]);
  num2 -= 90;
}

while (num2 >= 50){
  num.push(rn[50]);
  num2 -= 50;
}

while (num2 >= 40){
  num.push(rn[40]);
  num2 -= 40;
}

while (num2 >= 10){
  num.push(rn[10]);
  num2 -= 10;
}

while (num2 >= 9){
  num.push(rn[9]);
  num2 -= 9;
} 

while (num2 >= 5){
  num.push(rn[5]);
  num2 -=5;
}

while (num2 >= 4){
  num.push(rn[4]);
  num2 -= 4;
}

while (num2 > 0){
  num.push(rn[1]);
  num2 -= 1;
}

 return num.join('');
}

console.log(convertToRoman(36));
