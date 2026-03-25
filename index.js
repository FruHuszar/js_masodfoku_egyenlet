import { MasodfokuEgyenletMegoldo } from "./fuggvenyek.js";
let pelda = MasodfokuEgyenletMegoldo(2, -12, 10);
console.log(pelda);

let pelda2 = MasodfokuEgyenletMegoldo(1, 4, 4);
console.log(pelda2);

let gombElem = document.getElementById("gomb");

gombElem.addEventListener("click", function () {
  let aErtek = document.getElementById("a").value;
  let bErtek = document.getElementById("b").value;
  let cErtek = document.getElementById("c").value;
  let eredmeny = MasodfokuEgyenletMegoldo(aErtek, bErtek, cErtek);
  document.getElementById("x1").value = eredmeny.x1;
  document.getElementById("x2").value = eredmeny.x2;
});
