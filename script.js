let raining = true;

if (raining) {
  console.log("şemsiyeni al");
}
let a = 8;
let b = 6;
let c = 6;

if (a > b && b === c) {
  console.log(`${a} ${b}'den büyüktür`);
} else {
  console.log(`${a} ${b}'den büyük değil`);
}

let x = 12;

if (x >= 18) {
  console.log(`dişari çikabilir`);
} else {
  console.log(`dişari çikamaz`);
}

if (x >= 10 && x < 18) {
  console.log("dişari çik");
} else if (x >= 18) {
  console.log(`dişari çik,takil`);
} else {
  console.log(`evde otur`);
}

isMantarZehir = false;

if (isMantarZehir) {
  if (x < 6 && x > 65) console.log("yoğun bakim");
} else {
  console.log("ayakta tedavi");
}

let water = 44;
water = true;
water = 0;
water = null;
water = undefined;
water = NaN;
water = "";
water = [];
water = {};

console.log(water);
if (water) {
  console.log("suyunu iç");
} else {
  console.log("suyunu içme");
}

let y = 0;
let randum = Math.floor(Math.random() * 10);
if (randum > 5) {
  y--;
} else {
  y++;
}
console.log(y);

let weekDay = prompt("gün giriniz").toLowerCase();

switch (weekDay) {
  case "monday":
    console.log(`Bugün günlerden ${weekDay} yemek menüsü ispanak.....`);
    break;
  case "sunday":
    console.log(`Bugün günlerden ${weekDay} yemek menüsü patates.....`);
    break;
  case "thursday":
    console.log(`Bugün günlerden ${weekDay} yemek menüsü bamya.....`);
    break;
  case "wednesday":
    console.log(`Bugün günlerden ${weekDay} yemek menüsü köfte....`);
    break;
  default:
    console.log(`Bugün haftasonu`);
    break;
}

let k = 5;
let l = 2;

switch (k > l) {
  case true:
    console.log(`k l'den büyük`);
    break;
  case true:
    console.log(`k l'den küçük`);
    break;
  default:
    console.log(`eşittir`);
    break;
}
let time = 12;
let mesaj = "";

time >=17 ? mesaj = "mesai bitti" : time >= 12 && time <= 13 ? mesaj = "öğlen arasi" : time < 6 ? mesaj = "mesai başlamadi" : mesaj = "mesai devam"
 console.log (mesaj)

 let mesaj2 = time > 8 ? "mesai başladi" : "mesai başlamadi";
 console.log(mesaj2)
