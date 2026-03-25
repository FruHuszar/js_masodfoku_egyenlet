export function MasodfokuEgyenletMegoldo(a, b, c) {
  const d = b * b - 4 * a * c;
  const x1 = (-b + Math.sqrt(d)) / (2 * a);
  const x2 = (-b - Math.sqrt(d)) / (2 * a);

  const eredmenyKetX = {
    x1: x1,
    x2: x2,
  };

  const eredmenyEgyX = {
    x1: x1,
    x2: "x1=x2",
  };

  const nincsEredmeny = {
    x1: "Nincs megoldás",
    x2: "Nincs megoldás",
  };

  const Barmi = {
    x1: "Minden szám",
    x2: "Minden szám",
  };

  const Lehetetlen = {
    x1: "Lehetetlen",
    x2: "Lehetetlen",
  };

  if (a === 0 && b != 0 && c != 0) {
    return nincsEredmeny;
  } else if (a === 0 && b === 0 && c != 0) {
    return Lehetetlen;
  } else if (a === 0 && b === 0 && c === 0) {
    return Barmi;
  } else if (d < 0) {
    return nincsEredmeny;
  } else if (x1 === x2) {
    return eredmenyEgyX;
  } else {
    return eredmenyKetX;
  }
}
