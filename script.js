/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er. \nÞegar ýtt er á OK byrjar leikurinn.');
  play();
  if(confirm('Spila annan leik?')) start();
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  let dateA = new Date();
  var rettSvor = 0;
  var svar = null;
  for(let i=0; i<GAMES_TO_PLAY; i++){
    svar = ask();
    if(svar == true) rettSvor++;
    if(svar == null){
      alert('Hætt í leik')
      return;
    }
  }
  let dateB = new Date();
  var timi = (dateB - dateA) / 1000;
  var medal = rettSvor / timi;
  alert('Þú svaraðir ' + rettSvor + ' svörum af ' + GAMES_TO_PLAY + ' rétt á ' + timi + ' sekúndum \n' +
        'Meðalrétt svör á sekúndu eru ' + medal);
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask(){
  var fylki = operator();
  var t1 = fylki[0];
  var t2 = fylki[1];
  var virki = fylki[2];
  var svar = fylki[3];
  input = prompt('Hvað er ' + t1 + virki + t2);

  if(input==null) return null;
  return Number(input)==(svar);
}

/**
 * Býr til random dæmi
 * Skilar báðum tölum í dæminu ásamt virkja og réttu svari
 */
function operator(){
  var t1 = null;
  var t2 = null;
  var t = randomNumber(1,4);
  var svar = null;
  var virki = null;
  switch(t){
    case 1:
    t1 = randomNumber(1,100);
    t2 = randomNumber(1,100);
    svar = t1 + t2;
    virki = ' + ';
    break;

    case 2:
    t1 = randomNumber(1,100);
    t2 = randomNumber(1,100);
    svar = t1 - t2;
    virki = ' - ';
    break;

    case 3:
    t1 = randomNumber(1,10);
    t2 = randomNumber(1,10);
    svar = t1 * t2;
    virki = ' * ';
    break;

    case 4:
    t2 = randomNumber(2,10);
    t1 = t2 * randomNumber(2,10);
    svar = t1 / t2;    
    virki = ' / ';
    break;
  }
  return [t1, t2, virki, svar];
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
