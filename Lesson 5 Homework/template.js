// Lesson 5 Homework
function Lesson5Homework() {
    

var sayi1=Number(prompt("Birinci sayıyı giriniz"));
var sayi2=Number(prompt("İkinci sayıyı giriniz"));


document.write("En küçük sayı: "+Math.min(sayi1,sayi2)+"<br>");
document.write("En büyük sayı: "+Math.max(sayi1,sayi2)+"<br>");
document.write("En büyük sayının karekökü: "+Math.sqrt(Math.max(sayi1,sayi2))+"<br>");
document.write("En büyük sayının karekökünün yukarı yuvarlanmış hali: "+Math.ceil(Math.sqrt(Math.max(sayi1,sayi2)))+"<br>");
document.write("En küçük sayının mutlak değeri: "+Math.abs(Math.min(sayi1,sayi2))+"<br>");
document.write("En küçük üs en büyük: "+Math.pow(Math.min(sayi1,sayi2),Math.max(sayi1,sayi2))+"<br>");
}

// Sayı Bulma Oyunu
function  SayiBulmaOyunu() {
    

var tutulanSayi = Math.floor((Math.random()*10+1));
var tahminHakki = 5;

for (let i = 0; i < tahminHakki; i++) {
    var tahminEdilenSayi = Number(prompt("Tahmin için sayı giriniz."));
    if (tahminEdilenSayi == tutulanSayi) {
        var kacinci= i+1;
        alert("Tebrikler " + kacinci + ". tahminde bildiniz.");
        break;
    }else if(tahminEdilenSayi > tutulanSayi){
        alert("Büyük Tahmin");
    }else if(tahminEdilenSayi < tutulanSayi){
        alert("Küçük Tahmin");
    }
    
}
}


