var randomWords = ["Sacramentarianism", "Katsaridaphobia", "Ceruminiferous", "welterweight", "Triskaidekaphobia", "Omphalopsychite", "Microminiaturization", "Ecclesiasticus", "Kakorrhaphiophobia", "Utilitarianism", "Necessitarianism", "Dermatopathophobia"]
function randomWord () {
  var randomIndex = Math.floor(Math.random()*(randomWords.length));
  document.getElementById("outputText").innerHTML = 'Your secret word is <span id="sector">' + randomWords[randomIndex] + '</span>';
}