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


// Die Welt der Mädchen (Station 1)
var a = new Quiz("Er war einmal...","Il était une fois")
var b = new Quiz("das Märchen(-)","le conte")
var c = new Quiz("märchenhaft","féérique")
var d = new Quiz("die Märchenwelt","l'univers du conte")
var e = new Quiz("Märchen erzählen","raconter des histoires")
var f = new Quiz("Märchen sammeln","collecter des contes")
var g = new Quiz("mündlich überliefern","transmettre oralement")
var h = new Quiz("um/arbeiten","remanier, retravailler")

// Märchen und Moral (Station 1)
var i = new Quiz("eine Botschaft vermitteln","transmettre en message")
var j = new Quiz("eine Moral lehren","enseigner une morale")
var k = new Quiz("Werte weiter/geben","transmettre des valeurs")
var l = new Quiz("ein gutes/schlechtes Vorbild sein","être un bon/mauvais exemple")
var m = new Quiz("hinter (+D) stecken","se cacher derrière quelque chose")
var n = new Quiz("einen während Kern haben","avoir un fond de réalité")
var o = new Quiz("die Realität wider/spiegeln","refléter la réalité")
var p = new Quiz("grausam","cruel")

//Hilfe
var q = new Quiz("der Forscher","le chercheur")
var r = new Quiz("das Volksgut","le bien populaire")
var s = new Quiz("bewahren","garder, conserver")
var t = new Quiz("rau und roh","brut, cru")
var u = new Quiz("die Umarbeitung","le remaniement")


var allemand = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u];
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
po = 1;

if (document.getElementById("c_l").checked){
    print1 = document.getElementById("print");
    print1.innerHTML = fe;
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

} else{
    print1 = document.getElementById("print");
    print1.innerHTML = fi;
    trad1 = document.getElementById("trad");
    trad1.innerHTML = "Traduction en allemand";
    document.addEventListener('keypress', function(event) {
        var entrer = event.key === 'Enter';
        for (var jh = 0; jh < 1 && entrer; jh++ && entrer<1) {
            if (event.key === 'Enter') {
            kr = document.getElementById("traduction").value;
            document.getElementById("traduction").value = "";
            cli = cli + 1;
            }
            if (cli <= allemand.length){
                if (kr === fe) {
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
            correction1.innerHTML = fe;
            gt = allemand[po];
            fe = gt.al;
            fi = gt.fr;
            print1 = document.getElementById("print");
            print1.innerHTML = fi;
            po = po + 1;
        }
        })
}

function fonction(){
    var checkBox = document.getElementById("c_l");
    if (checkBox.checked == true){
        setTimeout(function() {
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
        location.reload()
        },0.3*1000)
        
    } else{
        setTimeout(function() {
        var po = 0;
        var gt = "";
        gt = allemand[po];
        fe = gt.al;
        fi = gt.fr;
        print1 = document.getElementById("print");
        print1.innerHTML = fi;
        trad1 = document.getElementById("trad");
        trad1.innerHTML = "Traduction en allemand";
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
                if (kr === fe) {
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
            correction1.innerHTML = fe;
            gt = allemand[po];
            fe = gt.al;
            fi = gt.fr;
            print1 = document.getElementById("print");
            print1.innerHTML = fi;
            po = po + 1;
        }
        })
        location.reload()
        },0.3*1000)
        
    }
}
