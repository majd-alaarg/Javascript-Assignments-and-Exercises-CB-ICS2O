var flavourInpute = '';
function radioInput(flavour) {
    flavourInpute = flavour;
    console.log(flavourInpute);
} 
function Cat() {
    var nameInput = document.getElementById("nameInput").value;
    var ageInput = document.getElementById("ageInput").value;
    var genderInput = document.getElementById("genderInput").value;
    var petInput = document.getElementById("petInput").value;
    var boredInput = document.getElementById("boredInput").value;
    var bdayInput = document.getElementById("bdayInput").value;
    var sliderInput = document.getElementById("sliderInput").value;
    var lunchInput = document.getElementById("lunchInput").value;
    var flavourInput = flavourInpute;
    var colourInput = document.getElementById("colourInput").value;
    var secretInput = document.getElementById("secretwordInput").value;  
    var quizInput = document.getElementById("rnInput").value; 

    if (ageInput >= 30 && (genderInput == 'Male' || genderInput == "Female") && petInput >= 5) {
        document.getElementById("imageChoice").src = "caringcat.jpg";
        document.getElementById("outputText").innerHTML = "You are a very nice and caring cat!";
    } else if (rnInput == "Doing an amazing quiz about what cat you are") {
        document.getElementById("imageChoice").src = "smartcat.png";
        document.getElementById("outputText").innerHTML = "You are a smart cat!";
    } else if (sliderInput > 5 && secretInput.length > 5) {
        document.getElementById("imageChoice").src = "happycat.jpg";
        document.getElementById("outputText").innerHTML = "You are a happy cat!";
    } else if (bdayInput.split("-")[0] >= "2010" && lunchInput.split(":")[0] <= 12) {
        document.getElementById("imageChoice").src ="youngcat.jpg";
        document.getElementById("outputText").innerHTML = "You are a young cat. Keep on growing!";
    } else if (flavourInput == "chocolate") {
        document.getElementById("imageChoice").src = "civilizedcat.jpg";
        document.getElementById("outputText").innerHTML = "You are a civilized cat! Classy!";
    } else if (petInput > 2) {
        document.getElementById("imageChoice").src = "petowner.jpg";
        document.getElementById("outputText").innerHTML = "You are not a cat, you are a pet owner! Congrats on being a great person!";
    } else if (boredInput == true) {
        document.getElementById("imageChoice").src = "lazycat.jpg";
        document.getElementById("outputText").innerHTML = "You are a lazy and bored cat! Do something fun!";
    } else if (nameInput.length >= 0 && colourInput == "#000000") {
        document.getElementById("imageChoice").src = "lecat.jpg";
        document.getElementById("outputText").innerHTML = "You are a low-effort cat! Next time complete the examination :(";
    }
}