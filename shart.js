function hisobla(a,b,amal)
{
switch(amal){
case '+':return a+b;
case '-':return a-b;
case '*':return a*b;
case '/':return a/b;
default:console.error("Xato amal kiritildi");
}
}
let natija=hisobla(20,30,'-');
console.log(`natija=${natija}`);
natija=hisobla(20,30,'+');
console.log(`natija=${natija}`);
natija=hisobla(20,30,'*');
console.log(`natija=${natija}`);
natija=hisobla(20,30,'/');
console.log(`natija=${natija}`);