// Single Line Comment 

/*
multiLine Comment
*/

//document: çalıştığımız sayfanın html-body taglerine erişmek
//window: her şeyin atası en üstteki önemli bir yapı

// alert("pop-up");
// window.alert("window alert");

// console.log("console.log")
// document.write("html yazdım"+"<br>")

// var obj={adi:"deneme"};
// console.log(obj)
// document.write(obj)

// ""   ==>   ' '  ==>   ` `
///////////////////////////////////////////////////////////////
//Variable
// var variable=44;
// document.write("<br>"+typeof variable);
// document.write("==>"+variable);

// variable=55.63;
// document.write("<br>"+typeof variable);
// document.write("==>"+variable);

// variable=false;
// document.write("<br>"+typeof variable);
// document.write("==>"+variable);


// variable="Merhabalar";
// document.write("<br>"+typeof variable);
// document.write("==>"+variable);

document.writeln("++++++++++++++++++++++++<br>")
// //variable rules English variable use
// var rules=55;
// var rulesProperty=55; //camel Case
// var rulesProperty9632=55; 
// var $rulesProperty9632=55; 
// var _rulesProperty9632=55; 

//yazamazsın
//var 66rules=55;
//var &rules=55;
//var üğşçöĞŞÇÖ=55; //

///////////////////////////////////////////////////////////////
// =   ATAMA
// ==  EŞİT (Türe bakmıyor)  Examples => 4 == "4" (TRUE)
// === EŞİT (Tür bakıyor)    Examples => 4 ==="4" (FALSE)

//Operators
// 1-) Logic Operators        ==> &&=VE  ||=VEYA
// 2-) Mathematics Operators  ==> + - * ** / % 
// 3-) Comparations Operators ==> > >= < <=  !  == === 
// 4-) increment deincrement  ==> x++ , ++x , y-- , --y

///////////////////////////////////////////////////////////////
//kullanıcıdan veri almak
//prompt ==> string olarak geliyor.
// var userData=prompt("lütfen bir kelime giriniz")
// document.write(userData);

///////////////////////////////////////////////////////////////
//CAST: dönüştür
//Number() ==> SAYI
//String() ==> KELIME
// var resutl="14",result2="26";
// document.write(resutl+result2+"<br>");
// document.write( Number(resutl)  + Number(result2) +"<br>");

// //////////////////////////////////////////////////////////////
// //Math: static
// document.write("PI: "+Math.PI+"<br>");
// document.write("E: "+Math.E+"<br>");
// document.write("sin: "+Math.sin(45)+"<br>");

// document.write("Max: "+Math.max([1,2,4])+"<br>");
// document.write("Min: "+Math.min(4,5,2,5,125)+"<br>");
// document.write("Mutlak: "+Math.abs(-44)+"<br>");
// document.write("Karekök: "+Math.sqrt(16)+"<br>");
// document.write("Mutlak-Karekök: "+Math.sqrt(Math.abs(16))+"<br>"); //monad
// document.write("üslü: "+Math.pow(2,5)+"<br>");

// document.write("Aşağı yuvarla: "+Math.floor(2.9)+"<br>");
// document.write("Yukarı yuvarla: "+Math.ceil(2.1)+"<br>");
// document.write("Aşağı/Yukarı yuvarla: "+Math.round(7.4)+"<br>");
// document.write("Aşağı/Yukarı yuvarla: "+Math.round(7.5)+"<br>");

// Kullanıcıda tarafından aldığımız 2 tane sayının
// s1-) Bu sayılardan en küçüğü nedir ?
// s2-) Bu sayılardan en büyüğü nedir ?
// s3-) Bu sayılardan en büyüğü karekökü nedir ?
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// s5-) Bu sayılardan en küçüğü mutlak nedir ?
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım

//////////////////////////////////////////////////////////////
//undefined:tanımsız
// var undefinedData;
// document.writeln(undefinedData+"<br>");

// //NaN=Not A Number
// var nanData=16/"asd";
// document.writeln(nanData+"<br>");

// //isNaN=is Not A Number  ==> false=SAYIDIR 
// var is=16/4;
// document.writeln( isNaN(is)  +"<br>");

// //Infinity: Sonsuz
// var infinityData=5/0;
// document.writeln(infinityData+"<br>");

//new  ==> Hafıza yer açar (doğma)
//null ==> Hafızayı boşaltmak (ölüm)
//zero ==> Çarpma yutan, toplama etkisiz

//////////////////////////////////////////////////////////////
//Escape character
// document.writeln("\""+"<br>");
// document.writeln("' '"+"<br>");


//////////////////////////////////////////////////////////////
//Random
// document.writeln( Math.round((Math.random()*4+1))+"<br>");

//if else 
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye çalışalım bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin eğer sayıdan küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?


//////////////////////////////////////////////////////////////
//SAYI
// var number1=44;
// var number2=44.66;

// //BILIMSEL
// var bilimsel=45E+3;
// document.write(bilimsel+"<br>")

// //CAST
// var number3= Number(prompt("Lütfen bir sayı giriniz"));
//  document.writeln(number3+15);

// //Sayı sistemler
// //2-8-16 => 10 tabana çevirme
// var binary=0b001101; //0-1 oluşur
// document.writeln(binary+"<br>")

// var octal=076; //01234567
// document.writeln(octal+"<br>")

// var hexadecimal=0xab; //0123456789abcdef
// document.writeln(hexadecimal+"<br>")


//////////////////////////////////////////////////////////////
//String
// var value="html5 css3 JAVASCRIPT Bootstrap responsive design css3 ";
// document.writeln(value+"<br>");

// document.writeln(value.length+"<br>");
// document.writeln(value.trim().length+"<br>");

// document.writeln(value.toUpperCase()+"<br>");
// document.writeln(value.toLowerCase()+"<br>");

// document.writeln(value.concat("-son44")+"<br>");

// document.writeln(value.startsWith("h")+"<br>");
// document.writeln(value.endsWith(" ")+"<br>");

// document.writeln(value.substring(1)+"<br>");
// document.writeln(value.substring(0,5)+"<br>"); //0<=X<= 5-1

// document.writeln(value.indexOf("css3")+"<br>");
// document.writeln(value.lastIndexOf("css3")+"<br>");
// document.writeln(value.charAt(0)+"<br>");

// document.writeln(value.replace(value,"Merhabalar")+"<br>");

/////////////////////////////////////////////////////////////////////////////////////
//String
var object={
    "adi":"Hamit",
    "soyadi":"Mızrak"
};

var static=JSON.stringify(object);
document.writeln(static+"<br>");

//1-)statik kodlaması
//substring
var nameNumber=static.indexOf("Hamit");
document.writeln(static.substring(nameNumber,nameNumber+5) +"<br>")

var surnameNumber=static.indexOf("Mızrak");
document.writeln(static.substring(surnameNumber,surnameNumber+6) +"<br>")

document.writeln("++++++++++++++++++++++"+"<br>")

//2-)dinamik kodlaması
var dynamic=JSON.stringify(object);
var parse=JSON.parse(dynamic);

var name=parse.adi;
document.writeln(name+"<br>")

var surname=parse.soyadi;
document.writeln(surname+"<br>")

document.writeln("++++++++++++++++++++++"+"<br>")

//3-)dinamik kodlaması
document.writeln(JSON.parse(JSON.stringify(object)).adi+" "+JSON.parse(JSON.stringify(object)).soyadi);














