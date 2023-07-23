document.addEventListener("DOMContentLoaded", function () {
    var calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateLotSize);

    var calculateButtonReal = document.getElementById("calculateButtonReal");
    calculateButtonReal.addEventListener("click", calculateLotSizeReal);

    function calculateLotSize() {
        var riskPercentage = parseFloat(document.getElementById("riskPercentage").value);
        var accountBalance = parseFloat(document.getElementById("accountBalance").value);
        var stopLossPips = parseInt(document.getElementById("stopLossPips").value);
        var takeProfitPips = parseInt(document.getElementById("takeProfitPips").value);
        var pipValue = parseFloat(document.getElementById("pipValue").value);
        var exchangeRate = parseFloat(document.getElementById("exchangeRate").value);

        var accountCurrency = document.getElementById("accountCurrency").value;
        var riskAmount = (riskPercentage / 100) * accountBalance;

        if (accountCurrency === "USD") {
            riskAmount /= exchangeRate; // Convertire in equivalente EUR
        }

        var pipRiskAmount = riskAmount / stopLossPips;
        var lotSize = pipRiskAmount / pipValue;

        document.getElementById("lotSizeResult").innerText = lotSize.toFixed(2);

        var potentialProfit = takeProfitPips * lotSize * pipValue;
        var potentialLoss = stopLossPips * lotSize * pipValue;

        document.getElementById("potentialProfitResult").innerText = potentialProfit.toFixed(2);
        document.getElementById("potentialLossResult").innerText = potentialLoss.toFixed(2);
    }


    function calculateLotSizeReal() {
        var riskPercentage = parseFloat(document.getElementById("riskPercentageReal").value);
        var accountBalance = parseFloat(document.getElementById("accountBalanceReal").value);
        var stopLossPips = parseInt(document.getElementById("stopLossPipsReal").value);
        var takeProfitPips = parseInt(document.getElementById("takeProfitPipsReal").value);
        var pipValue = parseFloat(document.getElementById("pipValueReal").value);
        var exchangeRate = parseFloat(document.getElementById("exchangeRateReal").value);

        var accountCurrency = document.getElementById("accountCurrencyReal").value;
        var riskAmount = (riskPercentage / 100) * accountBalance;

        if (accountCurrency === "USD") {
            riskAmount /= exchangeRate; // Convertire in equivalente EUR
        }

        var pipRiskAmount = riskAmount / stopLossPips;
        var lotSize = pipRiskAmount / pipValue;

        document.getElementById("lotSizeResultReal").innerText = lotSize.toFixed(2);

        var potentialProfit = takeProfitPips * lotSize * pipValue;
        var potentialLoss = stopLossPips * lotSize * pipValue;

        document.getElementById("potentialProfitResultReal").innerText = potentialProfit.toFixed(2);
        document.getElementById("potentialLossResultReal").innerText = potentialLoss.toFixed(2);
    }
	
	  // Disabilita l'input per "Saldo del Conto" inizialmente
  var accountBalanceInput = document.getElementById("accountBalance");
  var accountBalanceCheckbox = document.getElementById("accountBalanceCheckbox");
  accountBalanceInput.disabled = true;
  
    // Disabilita l'input per "Saldo del Conto Reale" inizialmente
  var accountBalanceRealInput = document.getElementById("accountBalanceReal");
  var accountBalanceRealCheckbox = document.getElementById("accountBalanceRealCheckbox");
  accountBalanceRealInput.disabled = true;
  
    // Aggiungi evento per gestire il cambiamento della checkbox
  accountBalanceCheckbox.addEventListener("change", function () {
    accountBalanceInput.disabled = this.checked;
  });
  
    // Aggiungi evento per gestire il cambiamento della checkbox
  accountBalanceRealCheckbox.addEventListener("change", function () {
    accountBalanceRealInput.disabled = this.checked;
  });
  
  
});