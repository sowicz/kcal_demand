//wyswietlanie wartosci za suwakami
const wiekslider = document.getElementById('wiek-suwak');
const wiekspan = document.querySelector('.wiek-value');
const wagaslider = document.getElementById('waga-suwak');
const wagaspan = document.querySelector('.waga-value');
const aktywnoscslider = document.getElementById('aktywnosc-suwak');
const aktywnoscspan = document.querySelector('.aktywnosc-value');

wiekspan.textContent = wiekslider.value;
wiekslider.oninput = function(){
    wiekspan.textContent = this.value;
}

wiekspan.textContent = wagaslider.value;
wagaslider.oninput = function(){
    wagaspan.textContent = this.value;
}

aktywnoscspan.textContent = aktywnoscslider.value;
aktywnoscslider.oninput = function(){
    aktywnoscspan.textContent = this.value;
}