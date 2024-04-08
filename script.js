function calculate() {
  let Prinicipaltext = document.getElementById("prinicipaltext");
  let Irtext = document.getElementById("irtext");
  let Yrtext = document.getElementById("yrtext");
  let Totalamount = document.getElementById("totalamount");

  let PRINICAPL = Number(Prinicipaltext.value);
  let INTREST = Number(Irtext.value);
  let YEAR = Number(Yrtext.value);

  if (PRINICAPL < 0 || isNaN(PRINICAPL)) {
    PRINICAPL = 0;
    Prinicipaltext.value = 0;
  }
  if (INTREST < 0 || isNaN(INTREST)) {
    INTREST = 0;
    Irtext.value = 0;
  }
  if (YEAR < 0 || isNaN(YEAR)) {
    YEAR = 0;
    Yrtext.value = 0;
  }

  let result = PRINICAPL * Math.pow(1 + INTREST / 1, 1 * YEAR);

  Totalamount.textContent = result.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
}
