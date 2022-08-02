//wyswietlanie wartosci za suwakami
const wiekslider = document.getElementById('wiek-suwak');
const wiekspan = document.querySelector('.wiek');
const wagaslider = document.getElementById('waga-suwak');
const wagaspan = document.querySelector('.waga');
const aktywnoscslider = document.getElementById('aktywnosc-suwak');
const aktywnoscspan = document.querySelector('.aktywnosc');
const wynik = document.querySelector('.wynik');
const infooblicz = document.querySelector('.info-oblicz')

 wiekspan.textContent = wiekslider.value;
wiekslider.oninput = function(){
    wiekspan.textContent = this.value;
} 
wagaspan.textContent = wagaslider.value;
wagaslider.oninput = function(){
    wagaspan.textContent = this.value;
}
aktywnoscspan.textContent = aktywnoscslider.value;
aktywnoscslider.oninput = function(){
    aktywnoscspan.textContent = this.value;
}
function przelicz() {
    var wiek = parseInt(document.querySelector('.wiek').innerHTML);
    var waga = parseInt(document.querySelector('.waga').innerHTML);
    var aktywnosc = parseInt(document.querySelector('.aktywnosc').innerHTML);

    const results = (wiek+waga+aktywnosc) * 15;
    infooblicz.innerHTML = "Twoje zapotrzebowanie wynosi: "
    wynik.innerHTML = results + " kcal";

}

function reset() {
    const reset = document.querySelector('.reset');
    przelicz.results = "";
    infooblicz.innerHTML = "";
    wynik.innerHTML = "";

}

wiekslider.addEventListener("mouseover", function wiekbubble() {
    const wb = document.createElement('div');
    const wa = document.createElement('div');
    wb.classList.add("bubble-wiek");
    wa.classList.add("wiek-arrow");

    wb.innerHTML = "Podaj swój wiek";

    document.body.appendChild(wb);
    document.body.appendChild(wa);
});

wiekslider.addEventListener("mouseout",function bubbleremove() {
    const r = document.querySelector(".bubble-wiek");
    const r2 = document.querySelector(".wiek-arrow");
    r.remove();
    r2.remove();

});

wagaslider.addEventListener("mouseover", function wagabubble() {
    const wb = document.createElement('div');
    const wa = document.createElement('div');
    wb.classList.add("bubble-waga");
    wa.classList.add("waga-arrow");

    wb.innerHTML = "Podaj swoją wagę";

    document.body.appendChild(wb);
    document.body.appendChild(wa);
});

wagaslider.addEventListener("mouseout",function bubbleremove() {
    const r = document.querySelector(".bubble-waga");
    const r2 = document.querySelector(".waga-arrow");
    r.remove();
    r2.remove();

});

aktywnoscslider.addEventListener("mouseover", function aktbubble() {
    const wb = document.createElement('div');
    const wa = document.createElement('div');
    wb.classList.add("bubble-akt");
    wa.classList.add("akt-arrow");

    wb.innerHTML = "Podaj swój poziom aktywności fizycznej w ciągu dnia:<br><br>1 = Praca siedząca, brak aktywności.<br>2 = Praca siedząca + trening 1x w tygodniu<br>3 = Praca fizyczna + trening 1x w tygodniu<br>4 = Praca fizyczna + trening 3x w tygodniu<br>";

    document.body.appendChild(wb);
    document.body.appendChild(wa);
});
aktywnoscslider.addEventListener("mouseout",function bubbleremove() {
    const r = document.querySelector(".bubble-akt");
    const r2 = document.querySelector(".akt-arrow");
    r.remove();
    r2.remove();
});
