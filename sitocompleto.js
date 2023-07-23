// Funzioni del codice principale
function showForm(formName) {
  var forms = document.getElementsByClassName("form-content");
  for (var i = 0; i < forms.length; i++) {
    forms[i].classList.remove("show");
  }
  document.getElementById(formName + "-form").classList.add("show");

  var options = document.getElementsByClassName("form-option");
  for (var i = 0; i < options.length; i++) {
    options[i].classList.remove("selected");
  }
  event.target.classList.add("selected");
}

// Cambiacolore al titolo
var colorChangingTitle = document.querySelector(".color-changing");
var titleText = colorChangingTitle.textContent;
var colors = ["blue", "green"];
var colorIndex = 0;

function changeLetterColor() {
  var coloredTitle = titleText
    .split("")
    .map((letter, index) =>
      index % 2 === colorIndex ? `<span style="color: ${colors[colorIndex]}">${letter}</span>` : letter
    )
    .join("");
  colorChangingTitle.innerHTML = coloredTitle;
  colorIndex = (colorIndex + 1) % colors.length;
}

document.addEventListener("DOMContentLoaded", function () {
    // Imposta il valore di default per EUR/USD a 1.112
    document.getElementById("exchangeRate").value = "1.112";

    // Resto del codice (funzioni e gestione degli eventi)...
});

setInterval(changeLetterColor, 1000);

// Imposta il valore iniziale di contoFondatoValue come quello selezionato in contoFondatoSelect
function setContoFondatoValue() {
  var contoFondatoValue = document.getElementById("contoFondatoValue");
  var contoFondatoSelect = document.getElementById("contoFondatoSelect").value;
  contoFondatoValue.value = contoFondatoSelect;
  accountBalance.value = contoFondatoSelect;
}

// Imposta il valore di EUR/USD della seconda tabella uguale a quello della prima tabella
document.getElementById("exchangeRateReal").value = document.getElementById("exchangeRate").value;
// Imposta il valore di default della percentuale di rischio della seconda tabella a 33
document.getElementById("riskPercentageReal").value = 33;
// Ottieni il valore di Valore del Pip del Pair della prima tabella
let pipValue = document.getElementById("pipValue").value;

// Imposta il valore di default di Valore del Pip del Pair della seconda tabella uguale a quello della prima tabella
document.getElementById("pipValueReal").value = pipValue;

// Impedisce di modificare il valore di contoFondatoValue quando la checkbox è attiva
function disableContoFondatoValue() {
  var contoFondatoValue = document.getElementById("contoFondatoValue");
  var contoFondatoCheckbox = document.getElementById("contoFondatoCheckbox");
  contoFondatoValue.disabled = contoFondatoCheckbox.checked;
}

// Chiama le funzioni per impostare il valore iniziale e gestire l'abilitazione/disabilitazione
setContoFondatoValue();
disableContoFondatoValue();

// Aggiungi event listener per gestire il cambiamento della checkbox
document.getElementById("contoFondatoCheckbox").addEventListener("change", disableContoFondatoValue);

// Aggiungi event listener per gestire il cambiamento del valore selezionato nel menu a tendina
document.getElementById("contoFondatoSelect").addEventListener("change", setContoFondatoValue);

// Aggiorna il valore di contoRealeValue in base alla selezione di contoFondatoSelect
function updateContoRealeValue() {
  var contoFondatoSelect = document.getElementById("contoFondatoSelect").value;
  var contoRealeValue = document.getElementById("contoRealeValue");

  // Mappa le opzioni di contoFondatoSelect ai valori desiderati per contoRealeValue
  var contoRealeValueMap = {
    "10001": 174,
    "20001": 280,
    "40000": 386,
    "80000": 605,
    "160000": 1210,
    "5000": 49,
    "10000": 84,
    "20000": 139,
    "50000": 299,
    "100000": 499,
    "200000": 979,
    "300000": 1389, // Aggiungi altri valori desiderati per le altre opzioni di contoFondatoSelect
  };

  // Imposta il valore corretto in contoRealeValue
  contoRealeValue.value = contoRealeValueMap[contoFondatoSelect];
  accountBalanceReal.value = contoRealeValueMap[contoFondatoSelect];

  // Se la checkbox è spuntata, disabilita la modifica di contoRealeValue
  var contoRealeCheckbox = document.getElementById("contoRealeCheckbox");
  contoRealeValue.disabled = contoRealeCheckbox.checked;
}

// Aggiungi event listener per gestire il cambiamento di contoFondatoSelect
document.getElementById("contoFondatoSelect").addEventListener("change", updateContoRealeValue);

// Aggiungi event listener per gestire il cambiamento della checkbox
document.getElementById("contoRealeCheckbox").addEventListener("change", function () {
  var contoRealeValue = document.getElementById("contoRealeValue");
  var contoRealeCheckbox = document.getElementById("contoRealeCheckbox");
  contoRealeValue.disabled = contoRealeCheckbox.checked;
});

// Chiama la funzione updateContoRealeValue all'avvio per impostare il valore iniziale
updateContoRealeValue();

// Gestisci la checkbox per la percentuale di rischio predefinita
var riskPercentageInput = document.getElementById("riskPercentage");
var disableRiskPercentageCheckbox = document.getElementById("disableRiskPercentageCheckbox");

// Imposta la percentuale di rischio predefinita a 4
riskPercentageInput.value = 4;

// Disabilita inizialmente il campo della percentuale di rischio se la checkbox è selezionata
riskPercentageInput.disabled = disableRiskPercentageCheckbox.checked;

// Aggiungi un evento per gestire il cambiamento della checkbox
disableRiskPercentageCheckbox.addEventListener("change", function () {
  riskPercentageInput.disabled = this.checked;
});

// Gestisci la checkbox per il campo "takeProfitPips"
var takeProfitPipsInput = document.getElementById("takeProfitPips");
var disableTakeProfitPipsCheckbox = document.getElementById("disableTakeProfitPipsCheckbox");

// Funzione per generare il valore di "takeProfitPips" come il doppio di "stopLossPips"
function generateTakeProfitPips() {
  // Ottieni il valore di Pips dallo Stop Loss dalla prima tabella
  var stopLossPipsInput = document.getElementById("stopLossPips");
  var stopLossPipsValue = parseFloat(stopLossPipsInput.value);

  // Calcola il valore di Pips dal Take Profit basato sul valore di Pips dallo Stop Loss
  var takeProfitPipsValue = stopLossPipsValue * 2;

  // Imposta il valore di Pips dal Take Profit nella seconda tabella
  document.getElementById("takeProfitPips").value = takeProfitPipsValue;
  
  takeProfitPipsReal
    document.getElementById("takeProfitPipsReal").value = stopLossPipsValue;
  

  // Imposta il valore di Pips dallo Stop Loss nella seconda tabella come il valore di Pips dal Take Profit della prima tabella
  document.getElementById("stopLossPipsReal").value = takeProfitPipsValue;
}

// Collega la funzione al pulsante "Genera TP" nella prima tabella
document.getElementById("calculateButton").addEventListener("click", generateTakeProfitPips);

// Disabilita inizialmente il campo "takeProfitPips" se la checkbox è selezionata
takeProfitPipsInput.disabled = disableTakeProfitPipsCheckbox.checked;

// Aggiungi un evento per gestire il cambiamento della checkbox
disableTakeProfitPipsCheckbox.addEventListener("change", function () {
  takeProfitPipsInput.disabled = this.checked;
});

// Gestisci la checkbox per il campo "pipValue"
var pipValueInput = document.getElementById("pipValue");
var disablePipValueCheckbox = document.getElementById("disablePipValueCheckbox");

// Funzione per aggiornare il valore di "exchangeRate"
function updateExchangeRate() {
  var exchangeRateInput = document.getElementById("exchangeRate");
  var disableExchangeRateCheckbox = document.getElementById("disableExchangeRateCheckbox");

  // Disabilita inizialmente l'input "exchangeRate" se la checkbox è selezionata
  exchangeRateInput.disabled = disableExchangeRateCheckbox.checked;

  // Aggiungi un evento per gestire il cambiamento della checkbox
  disableExchangeRateCheckbox.addEventListener("change", function () {
    exchangeRateInput.disabled = this.checked;
  });
}

// Chiama la funzione per impostare il valore iniziale di "exchangeRate" e gestire la checkbox
updateExchangeRate();

// Imposta il valore del pip del pair a 8.99
pipValueInput.value = 8.99;

// Disabilita inizialmente il campo "pipValue" se la checkbox è selezionata
pipValueInput.disabled = disablePipValueCheckbox.checked;

// Aggiungi un evento per gestire il cambiamento della checkbox
disablePipValueCheckbox.addEventListener("change", function () {
  pipValueInput.disabled = this.checked;
});


// Funzione per calcolare la dimensione del lotto
function calculateLotSize() {
    event.preventDefault(); // Impedisce il comportamento predefinito (spostamento della pagina)

    // ... (il resto del codice per calcolare la dimensione del lotto è stato omesso per brevità)
}

// Chiama la funzione updateContoRealeValue all'avvio per impostare il valore iniziale
updateContoRealeValue();

document.addEventListener("DOMContentLoaded", function () {
    var calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateLotSize);

    var calculateButtonReal = document.getElementById("calculateButtonReal");
    calculateButtonReal.addEventListener("click", function (event) {
        event.preventDefault(); // Impedisce il comportamento predefinito (spostamento della pagina)
        calculateLotSizeReal();
    });

    function calculateLotSizeReal() {
        // ... (il codice per calcolare la dimensione del lotto reale è stato omesso per brevità)
    }
});