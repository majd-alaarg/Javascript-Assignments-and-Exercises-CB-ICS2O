var characteristics, adj, noun, compliment1, compliment2, compliment3;
characteristics = new Array(5);
  characteristics[0] = "intellect";
  characteristics[1] = "eyes";
  characteristics[2] = "laugh";
  characteristics[3] = "smile";
  characteristics[4] = "logic";
adj = new Array(5);
  adj[0] = "beautiful";
  adj[1] = "amazing";
  adj[2] = "brilliant";
  adj[3] = "fantastic";
  adj[4] = "creative";
noun = new Array(5);
  noun[0] = "hero";
  noun[1] = "genius";
  noun[2] = "madman";
  noun[3] = "unicorn";
  noun[4] = "clown";
characteristics = characteristics[Math.floor(Math.random()*characteristics.length)];
adj = adj[Math.floor(Math.random()*adj.length)];
noun = noun[Math.floor(Math.random()*noun.length)];

document.getElementById("output").innerHTML = "You have the " +characteristics +" of a " +adj +" " +noun +".";