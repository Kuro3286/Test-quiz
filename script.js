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


var allemand = [];

allemand.push(new Quiz("regardless","sans tenir compte/peu importe"))
allemand.push(new Quiz("backwards","en arrière"))
allemand.push(new Quiz("provide","fournir"))
allemand.push(new Quiz("launch","lancer"))
allemand.push(new Quiz("fitted with","équipé de"))
allemand.push(new Quiz("afford","s'offrir/se payer"))
allemand.push(new Quiz("suitable for","addapter à/convenir à"))
allemand.push(new Quiz("run on","durer/s'étendre"))
allemand.push(new Quiz("emit","émettre"))
allemand.push(new Quiz("smoother","plus lisse"))
allemand.push(new Quiz("reliable/unreliable","fiable/pas fiable"))
allemand.push(new Quiz("likely/unlikely","probable/peu probable"))
allemand.push(new Quiz("affordable","abordable"))
allemand.push(new Quiz("make","rendre"))
allemand.push(new Quiz("clinging to","s'accrocher à"))
allemand.push(new Quiz("smart","intelligent"))
allemand.push(new Quiz("task","tâche"))
allemand.push(new Quiz("enhance","améliorer"))
allemand.push(new Quiz("increasing","plus en plus/augmenter"))
allemand.push(new Quiz("disrupt","perturber"))
allemand.push(new Quiz("ability","capacité/aptitude"))
allemand.push(new Quiz("multiple choice","à choix multiple"))
allemand.push(new Quiz("device","appareil"))
allemand.push(new Quiz("span","espace/durée"))
allemand.push(new Quiz("instead of","au lieu de"))
allemand.push(new Quiz("tech-free","sans technologie"))
allemand.push(new Quiz("all in all","dans l'ensemble"))
allemand.push(new Quiz("tough","dur/solide/résistant"))
allemand.push(new Quiz("pros and cons","le pour et le contre"))
allemand.push(new Quiz("tool","outil"))
allemand.push(new Quiz("in short","en résumé"))
allemand.push(new Quiz("not to mention","sans parler de"))
allemand.push(new Quiz("on top of that","pour couronner le tout"))
allemand.push(new Quiz("on the other hand","d'un autre côté"))
allemand.push(new Quiz("accuracy","exactitude/justesse/précision"))
allemand.push(new Quiz("graduate","diplômé"))
allemand.push(new Quiz("tuition fees","frais de scolarité"))
allemand.push(new Quiz("student debt","dette étudiante"))
allemand.push(new Quiz("public funding","financement public"))
allemand.push(new Quiz("taxpayers","ceux qui payent des impôts"))
allemand.push(new Quiz("social mobility","mobilité sociale"))
allemand.push(new Quiz("inequality","inégalité"))
allemand.push(new Quiz("investment in education","investissement dans l'éducation"))
allemand.push(new Quiz("healthcare","système/soins de santé"))
allemand.push(new Quiz("growth","croissance"))
allemand.push(new Quiz("brorrow","emprunter"))
allemand.push(new Quiz("owed","devoir (de l'argent)"))
allemand.push(new Quiz("unfair","injuste"))
allemand.push(new Quiz("income","salaire"))
allemand.push(new Quiz("release","libérer"))
allemand.push(new Quiz("to pass out","transmit"))
allemand.push(new Quiz("bonding","le lien"))
allemand.push(new Quiz("gambling","jeu d'argent"))
allemand.push(new Quiz("trigger","déclencher avec"))
allemand.push(new Quiz("accurate","précis"))
allemand.push(new Quiz("a diagnosis","un diagnostic"))
allemand.push(new Quiz("to prevent","empêcher"))
allemand.push(new Quiz("a disorder","un trouble"))
allemand.push(new Quiz("a stage","un stade"))
allemand.push(new Quiz("to skip","passer/sauter"))
allemand.push(new Quiz("to arrange","organiser"))
allemand.push(new Quiz("to struggle","avoir du mal"))
allemand.push(new Quiz("digital clock","unt horloge numérique"))
allemand.push(new Quiz("a graph","un graphique"))
allemand.push(new Quiz("to head out","se rendre/aller"))
allemand.push(new Quiz("a journey","un trajet"))
allemand.push(new Quiz("ahead","à l'avance/en avance"))
allemand.push(new Quiz("broadcast","diffuser"))
allemand.push(new Quiz("regarding","concernant"))
allemand.push(new Quiz("relevant","pertinent"))
allemand.push(new Quiz("to compile","compiler"))
allemand.push(new Quiz("to embed","intégrer"))
allemand.push(new Quiz("on the go","en chemin/en route"))
allemand.push(new Quiz("reviews","des avis"))
allemand.push(new Quiz("fellow","collègue"))
allemand.push(new Quiz("gather","rassembler"))
allemand.push(new Quiz("opt out","en dehors"))
allemand.push(new Quiz("student loan","prêt étudiant"))
allemand.push(new Quiz("a major/to major in","la matière étudiée"))
allemand.push(new Quiz("undergraduate","licence"))
allemand.push(new Quiz("residency","internat"))
allemand.push(new Quiz("hustle","boulot étudiant"))
allemand.push(new Quiz("saddled with debt","criblé de dettes"))
allemand.push(new Quiz("a down payment","un accompte"))
allemand.push(new Quiz("a condo","appartement"))
allemand.push(new Quiz("while","bien que/tandis que/alors que"))
allemand.push(new Quiz("weheras","tandis que"))
allemand.push(new Quiz("despite","malgré"))
allemand.push(new Quiz("although","bien que/même si"))
allemand.push(new Quiz("comme/puisque","as"))
allemand.push(new Quiz("consequently","ensuite, par la suite"))
allemand.push(new Quiz("there for","donc/par conséquent"))
allemand.push(new Quiz("as well as","ainsi que"))
allemand.push(new Quiz("even though","même si/bien que"))
allemand.push(new Quiz("since","puisque"))
allemand.push(new Quiz("however","cependant"))
allemand.push(new Quiz("such as","tel que"))
allemand.push(new Quiz("unlike","contrairement à"))
allemand.push(new Quiz("pulse","pouls"))
allemand.push(new Quiz("knee","genou"))
allemand.push(new Quiz("chemical","produit chimique"))
allemand.push(new Quiz("cuddle","câlin"))
allemand.push(new Quiz("tongue","langue"))
allemand.push(new Quiz("rate","rythme (coeur)"))
allemand.push(new Quiz("palms","paume"))
allemand.push(new Quiz("sweat","transpiration"))
allemand.push(new Quiz("taste","goût"))
allemand.push(new Quiz("dumb","bête, idiot"))
allemand.push(new Quiz("mate","s'accoupler"))
allemand.push(new Quiz("weigh","évaluer/relâcher"))
allemand.push(new Quiz("release","libérer/relâcher"))
allemand.push(new Quiz("stink","puer"))
allemand.push(new Quiz("a reward","une récompense"))
allemand.push(new Quiz("insane","fou/folle"))
allemand.push(new Quiz("tend to","avoir tendance à"))

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
                    ger = ger + 1;
                    ggg = ger.toString();
                    vrai.splice(2, 1, ggg);
                    grr = vrai.join('');
                    compteur_vrai = document.getElementById("compt_vrai").style.padding = grr;
                    per = per + 1;
                    ppp = per.toString();
                    c_v.splice(8,1,106-ppp);
                    prr = c_v.join('');
                    com_vr = document.getElementById("compt_vrai").style.margin = prr;
                } else {
                    document.getElementById("mauvais").style.color = "red";
                    setTimeout(function() {
                    document.getElementById("mauvais").style.color = "transparent";
                    },1000)
                    fer = fer + 1;
                    fff = fer.toString();
                    faux.splice(6, 1, fff);
                    frr = faux.join('');
                    compteur_faux = document.getElementById("compt_faux").style.padding = frr;
                    ker = ker + 1;
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
    trad1.innerHTML = "Traduction en anglais";
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
                    ger = ger + 1;
                    ggg = ger.toString();
                    vrai.splice(2, 1, ggg);
                    grr = vrai.join('');
                    compteur_vrai = document.getElementById("compt_vrai").style.padding = grr;
                    per = per + 1;
                    ppp = per.toString();
                    c_v.splice(8,1,106-ppp);
                    prr = c_v.join('');
                    com_vr = document.getElementById("compt_vrai").style.margin = prr;
                } else {
                    document.getElementById("mauvais").style.color = "red";
                    setTimeout(function() {
                    document.getElementById("mauvais").style.color = "transparent";
                    },1000)
                    fer = fer + 1;
                    fff = fer.toString();
                    faux.splice(6, 1, fff);
                    frr = faux.join('');
                    compteur_faux = document.getElementById("compt_faux").style.padding = frr;
                    ker = ker + 1;
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
                    ger = ger + 1;
                    ggg = ger.toString();
                    vrai.splice(2, 1, ggg);
                    grr = vrai.join('');
                    compteur_vrai = document.getElementById("compt_vrai").style.padding = grr;
                    per = per + 1;
                    ppp = per.toString();
                    c_v.splice(8,1,106-ppp);
                    prr = c_v.join('');
                    com_vr = document.getElementById("compt_vrai").style.margin = prr;
                } else {
                    document.getElementById("mauvais").style.color = "red";
                    setTimeout(function() {
                    document.getElementById("mauvais").style.color = "transparent";
                    },1000)
                    fer = fer + 1;
                    fff = fer.toString();
                    faux.splice(6, 1, fff);
                    frr = faux.join('');
                    compteur_faux = document.getElementById("compt_faux").style.padding = frr;
                    ker = ker + 1;
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
        trad1.innerHTML = "Traduction en anglais";
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
                    ger = ger + 1;
                    ggg = ger.toString();
                    vrai.splice(2, 1, ggg);
                    grr = vrai.join('');
                    compteur_vrai = document.getElementById("compt_vrai").style.padding = grr;
                    per = per + 1;
                    ppp = per.toString();
                    c_v.splice(8,1,106-ppp);
                    prr = c_v.join('');
                    com_vr = document.getElementById("compt_vrai").style.margin = prr;
                } else {
                    document.getElementById("mauvais").style.color = "red";
                    setTimeout(function() {
                    document.getElementById("mauvais").style.color = "transparent";
                    },1000)
                    fer = fer + 1;
                    fff = fer.toString();
                    faux.splice(6, 1, fff);
                    frr = faux.join('');
                    compteur_faux = document.getElementById("compt_faux").style.padding = frr;
                    ker = ker + 1;
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
