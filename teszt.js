import { MasodfokuEgyenletMegoldo } from "./fuggvenyek.js";

function tesztesetek() {
  const tesztesetLista = [
    {
      a: 2,
      b: -12,
      c: 10,
      vart: { x1: 5, x2: 1 },
      szoveg: "Hiba: Két megoldásos visszatéréssel.",
    },
    {
      a: 1,
      b: 4,
      c: 4,
      vart: { x1: -2, x2: "x1=x2" },
      szoveg: "Hiba: Egy megoldásos visszatéréssel.",
    },
    {
      a: 1,
      b: 1,
      c: 1,
      vart: { x1: "Nincs megoldás", x2: "Nincs megoldás" },
      szoveg: "Hiba: Megoldás nélküli egyenletre ad vissza értéket.",
    },
    {
      a: 0,
      b: 0,
      c: 0,
      vart: { x1: "Minden szám", x2: "Minden szám" },
      szoveg:
        "Hiba: Minden szám 0-ra bármilyen megoldás elfogadott kéne legyen.",
    },
    {
      a: 0,
      b: 0,
      c: 5,
      vart: { x1: "Lehetetlen", x2: "Lehetetlen" },
      szoveg:
        "Hiba: Ha első két szám nulla és harmadik valami más, akkor nem kellene, hogy legyen megoldás.",
    },
  ];
  for (let i = 0; i < tesztesetLista.length; i++) {
    let eredmeny = MasodfokuEgyenletMegoldo(
      tesztesetLista[i].a,
      tesztesetLista[i].b,
      tesztesetLista[i].c,
    );
    console.assert(
      eredmeny.x1 === tesztesetLista[i].vart.x1 &&
        eredmeny.x2 === tesztesetLista[i].vart.x2,
      `a=${tesztesetLista[i].a}, b=${tesztesetLista[i].b}, c=${tesztesetLista[i].c},
        elvart=${JSON.stringify(tesztesetLista[i].vart)},
        kapott=${JSON.stringify(eredmeny)}`,
      tesztesetLista[i].szoveg,
    );
  }
}

tesztesetek();
