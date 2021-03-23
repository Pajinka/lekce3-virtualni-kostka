// tady je místo pro náš program

function hazejKostkou() {
  let x = Math.ceil(Math.random() * 6);
  
  //postupne rozebrani predchoziho kroku
  //let x = Math.random();
  //console.log(x);
  //x = x*6;
  //console.log(x);
  //x = x + 1;
  //console.log(x);
  //x = Math.floor(x)
  //console.log()  

  if (x == 6) {
    document.getElementById("zprava").textContent = 'Sestka!!! Vyhralas!';
  } else {
    document.getElementById("zprava").innerHTML = 'Hodila jsi ' + x;
  }
  let obrazek = document.querySelector('img')
  obrazek.src = 'obrazky/'+x+'.png'
}



//function getRndInteger(min, max) {
//  return Math.floor(Math.random() * (max - min + 1) ) + min;
//}