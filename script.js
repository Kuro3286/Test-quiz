function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

class Quiz {
    constructor(al, fr) {
      this.al = al;
      this.fr = fr;
    }
}

var a = new Quiz("die Entwicklung","le développement")
var b = new Quiz("sich entwickeln","se développer")
var c = new Quiz("die Frauenanteil","la proportion de femme")
var d = new Quiz("(Geld) verdienen","gagner (de l'argent)")
var e = new Quiz("die Führungsposition","le poste de direction")
var f = new Quiz("das Unternehmen","l'entreprise")
var g = new Quiz("der Lohn","le salaire")
var h = new Quiz("der Lohnunterschied","la différence de salaire")
var i = new Quiz("unterrepräsentiert sein","être sous-représenté")
var j = new Quiz("überrepräsentiert sein","être surreprésenté")
  
var allemand = [a, b, c, d, e, f, g, h, i, j];
shuffle(allemand);
var p = 0;
var ga = 0;
var kr = "";


var x = document.getElementById("traduction");
if (x.type === 'password') {
  x.type = 'text';
}


var po = 0;
var gt = "";
gt = allemand[po];
fe = gt.al;
fi = gt.fr;
print1 = document.getElementById("print");
print1.innerHTML = fe;
po = 1;
document.addEventListener('keypress', function(event) {
  var entrer = event.key === 'Enter';
  for (var jh = 0; jh < 1 && entrer; jh++ && entrer<1) {
    if (event.key === 'Enter') {
      kr = document.getElementById("traduction").value;
      document.getElementById("traduction").value = "";
    }
    if (kr === fi) {
      document.getElementById("bon").style.color = "rgb(75, 247, 89)";
      timeout = setTimeout(function() {
        document.getElementById("bon").style.color = "transparent";
      },1000)
    } else {
      document.getElementById("mauvais").style.color = "red";
      setTimeout(function() {
        document.getElementById("mauvais").style.color = "transparent";
      },1000)
    }
    gt = allemand[po];
    fe = gt.al;
    fi = gt.fr;
    print1 = document.getElementById("print");
    print1.innerHTML = fe;
    po = po + 1;
  }
})