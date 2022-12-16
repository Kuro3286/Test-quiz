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

var a = new Quiz("die Ordnung","l'ordre")
var b = new Quiz("die Bildung","l'éducation, la culture")
var c = new Quiz("die FDJ (Freie Deutsche Jugend)","organisation d'Etat pour la jeunesse de l'ex-RDA")
var d = new Quiz("das Mitglied (er)","le membre")
var e = new Quiz("der Einfluss","l'influence")
var f = new Quiz("jemandem/etwas beeinflussen","influencer quelqu'un/quelque chose")
var g = new Quiz("die Anpassung","le fait d'être conforme au système, l'adaptation")
var h = new Quiz("angepasst sein","être conforme (au système)")
var i = new Quiz("sich ein/bringen lassen","se laisser embrigader")
var j = new Quiz("etwas zensieren","censurer quelque chose")
var k = new Quiz("jemandem etwas verbieten (o,o)","interdire quelque chose à quelqu'un")
var l = new Quiz("etwas fördern","promouvoir quelque chose")
var m = new Quiz("zu etwas (D) bei/tragen","contribuer à quelque chose")
var n = new Quiz("eine (politische) Tragweite haben","avoir une portée (politique)")
var o = new Quiz("seine Überlegenheit zeigen","montrer sa supériorité")
  
var allemand = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o];
shuffle(allemand);
var p = 0;
var ga = 0;

var ger = 0;
var grr = "";
var ggg = "";
var vrai = ["0", " ", "0","px", " ", "0", " ", "0"];



var fer = 0;
var frr = "";
var fff = "";
var faux = ["0", " ", "0", " ", "0", " ", "0", "px"];



var ker = 0;
var krr = "";
var kkk = "";
var c_f = ["5","px", " ", "106", "px", " ", "5", "px", " ", "0"]


var per = 0;
var prr = "";
var ppp = "";
var c_v = ["5", "px", " ", "0", " ", "5", "px", " ", "106", "px"]


var hy = 0;
var cli = 0;
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
      cli = cli + 1;
    }
    if (cli <= allemand.length){
      if (kr === fi) {
        document.getElementById("bon").style.color = "green";
        timeout = setTimeout(function() {
          document.getElementById("bon").style.color = "transparent";
        },1000)
        ger = ger + 5;
        ggg = ger.toString();
        vrai.splice(2, 1, ggg);
        grr = vrai.join('');
        compteur_vrai = document.getElementById("compt_vrai").style.padding = grr;
        per = per + 5;
        ppp = per.toString();
        c_v.splice(8,1,106-ppp);
        prr = c_v.join('');
        com_vr = document.getElementById("compt_vrai").style.margin = prr;
      } else {
        document.getElementById("mauvais").style.color = "red";
        setTimeout(function() {
          document.getElementById("mauvais").style.color = "transparent";
        },1000)
        fer = fer + 5;
        fff = fer.toString();
        faux.splice(6, 1, fff);
        frr = faux.join('');
        compteur_faux = document.getElementById("compt_faux").style.padding = frr;
        ker = ker + 5;
        console.log(ker);
        kkk = ker.toString();
        c_f.splice(3,1,106-kkk);
        krr = c_f.join('');
        com_fa = document.getElementById("compt_faux").style.margin = krr;
      }
    }
    correction1 = document.getElementById("mot");
    correction1.innerHTML = fi;
    gt = allemand[po];
    fe = gt.al;
    fi = gt.fr;
    print1 = document.getElementById("print");
    print1.innerHTML = fe;
    po = po + 1;
  }
})