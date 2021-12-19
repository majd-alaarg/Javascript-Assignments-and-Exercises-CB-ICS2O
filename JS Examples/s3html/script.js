var day = prompt("What day were you born? (Enter Number, ex. 22)");
var month = prompt("What month were you born? (Enter Month, ex. May)");
var year = prompt("What year were you born? (Enter Year, ex. 2000)");
var msg;
var imageChoice;
document.write("You were born on" +" " +month +" " +day +", " +year +"!")
if (month == "May" && day > 21 || month == "June" &&  day < 21) {
  msg = " Gemini!";
  imageChoice = "gemini.jpg";
} else if (month ==  "June" || month ==  "July" && day < 23) {
  msg = " Cancer!";
  imageChoice = "cancer.jpg";
} else if (month ==  "July" || month ==  "August" && day < 23) {
  msg = " Leo!";
  imageChoice = "leo.jpg"; 
} else if (month ==  "August" || month ==  "September" && day < 23) {
  msg = " Virgo!";
  imageChoice = "virgo.jpg";
} else if (month ==  "September" || month ==  "October" && day < 23) {
  msg = " Libra!";
  imageChoice = "libra.jpg";
} else if (month ==  "October" || month ==  "November" && day < 23) {
  msg = " Scorpio!";
  imageChoice = "scorpio.jpg";
} else if (month ==  "November" || month ==  "December" && day < 22) {
  msg = " Sagittarius!";
  imageChoice = "sagittarius.jpg";
} else if (month ==  "December" || month ==  "January" && day < 20) {
  msg = " Capricorn!";
  imageChoice = "capricorn.jpg";
} else if (month ==  "January" || month ==  "February" && day < 20) {
  msg = "n Aquarius!";
  imageChoice = "aquarius.jpg";
} else if (month ==  "February" || month ==  "March" && day < 21) {
  msg = " Pisces!";
  imageChoice = "pisces.jpg";
} else if (month ==  "March" || month ==  "April" && day < 21) {
  msg = "n Aries!";
  imageChoice = "aries.jpg";
} else if (month == "April" || month == "May" &&  day < 21){
  msg = " Taurus!"
  imageChoice = "taurus.jpg";
} else {
  msg = " nothing - invalid date"
}
document.write ("<br> You are a" +msg +" ");
document.getElementById("zodiacPic").src = imageChoice;