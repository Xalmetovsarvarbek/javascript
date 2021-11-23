
class yosh {
 yil=new Date();
constructor(year,month,day){
    this.year=year;
    this.month=month;
    this.day=day;
};
 yili=()=>{
return this.yil.getFullYear()-this.year;
}
 oy=()=>{
    return this.yil.getMonth()+1-this.month;
}
 kun=()=> {return this.yil.getDate()-this.day;
}
getyosh(){
    console.log(`Sizning tugilgan kuningizga ${this.yili()} yili ${this.oy()} oyi ${this.kun()} kun bolibdi.`);
}
}
let Sarvar=new yosh(1990,4,16);
Sarvar.getyosh();