let num = 266219;
let y = 1;
while (num>0){
y *= num%10;
num = Math.trunc(num/10);
}
console.log(y);
y = y**3;
console.log(String(y).slice(0,2));