alert("Welcome to Madlibs!");
var noun, adjective, verb, adverb, name, place, animal, sport, player;
player = prompt("What is your name?");
noun = prompt("Type a noun:");
adjective = prompt("Type an adjective:");
verb = prompt("Type a verb in the past tense:");
adverb = prompt("Type an adverb:");
name = prompt("Type a name:");
place = prompt("Type a place:");
animal = prompt("Type an animal:");
sport = prompt("Type a sport:");
document.write("<h1>Welcome to Madlibs </h1>" +player);
document.write("<br><br><p> It was a beautiful hot summer when " +name +" " +"took a " +adjective +" " +"walk around his neighbourhood. But as he walked across the field in his local park " +name +" " +"noticed a " +animal +" " + "playing" +" " +sport +". So then, " +name +" " +"kept running" +" " +adverb +" " +"to" +" " +place +" " +"but then the " +" " +animal + " " +"came forward to him so " +name +" " +verb +" him with his" +" " +noun +".</p>");