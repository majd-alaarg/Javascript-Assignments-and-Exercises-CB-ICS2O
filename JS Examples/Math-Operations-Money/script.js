var money, quarters, dimes, nickels, pennies;
money = prompt("How many cents do you have?");
quarters = Math.floor(money/25);
dimes = Math.floor((money%25)/10);
nickels = Math.floor(((money%25)%10)/5);
pennies =(((money%25)%10)%5);
document.write ("You have " +quarters +" " +"quarters, " + "" +dimes +" " +"dimes, " + nickels +" " +"nickels and " +pennies +" " +"pennies.");