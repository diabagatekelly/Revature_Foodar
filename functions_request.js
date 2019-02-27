//Request a driver
let tenTip = document.getElementById('ten');
tenTip.onclick = function chooseTenTip() {
  document.getElementById('total').innerHTML = 'Add 10% Tip';
};

let fifteenTip = document.getElementById('fifteen');
fifteenTip.onclick = function chooseFifteenTip() {
  document.getElementById('total').innerHTML = 'Add 15% Tip';
};

let twentyTip = document.getElementById('twenty');
twentyTip.onclick = function chooseTwentyTip() {
  document.getElementById('total').innerHTML = 'Add 20% Tip';
};

let classic = document.getElementById('classic');
classic.onclick = function chooseClassic() {
  classic = '3.00';
  classic = parseFloat(classic);
  document.getElementById('total').innerHTML = 'TOTAL: $' + classic + '.00';

let ten = document.getElementById('ten');
ten.onclick = function chooseTen() {
    ten = '0.10';
    ten = parseFloat(ten);
    let totalClassicTen = classic + (classic * ten);
    document.getElementById('total').innerHTML = 'TOTAL: $' + totalClassicTen + '0';
}

    let fifteen = document.getElementById('fifteen');
    fifteen.onclick = function chooseFifteen() {
      fifteen = '0.15';
      fifteen = parseFloat(fifteen);
      let totalClassicFifteen = classic + (classic * fifteen);
      document.getElementById('total').innerHTML = 'TOTAL: $' + totalClassicFifteen;
}

      let twenty = document.getElementById('twenty');
      twenty.onclick = function chooseTwenty() {
        twenty = '0.20';
        twenty = parseFloat(twenty);
        let totalClassicTwenty = classic + (classic * twenty);
        document.getElementById('total').innerHTML = 'TOTAL: $' + totalClassicTwenty + '0';
    }
  }


let premium = document.getElementById('premium');
premium.onclick = function choosePremium() {
  premium = '5.00';
  premium = parseFloat(premium);
  document.getElementById('total').innerHTML = 'TOTAL: $' + premium + '.00';

  let ten = document.getElementById('ten');
  ten.onclick = function chooseTen() {
    ten = '0.10';
    ten = parseFloat(ten);
    let totalPremiumTen = premium + (premium * ten);
    document.getElementById('total').innerHTML = 'TOTAL: $' + totalPremiumTen + '0';
}

    let fifteen = document.getElementById('fifteen');
    fifteen.onclick = function chooseFifteen() {
      fifteen = '0.15';
      fifteen = parseFloat(fifteen);
      let totalPremiumFifteen = premium + (premium * fifteen);
      document.getElementById('total').innerHTML = 'TOTAL: $' + totalPremiumFifteen;
}

      let twenty = document.getElementById('twenty');
      twenty.onclick = function chooseTwenty() {
        twenty = '0.20';
        twenty = parseFloat(twenty);
        var totalPremiumTwenty = premium + (premium * twenty);
        document.getElementById('total').innerHTML = 'TOTAL: $' + totalPremiumTwenty + '.00';
    }
}

let royal = document.getElementById('royal');
royal.onclick = function chooseRoyal() {
  royal = '10.00';
  royal = parseFloat(royal);
document.getElementById('total').innerHTML = 'TOTAL: $' + royal + '.00';


let ten = document.getElementById('ten');
ten.onclick = function chooseTen() {
  ten = '0.10';
  ten = parseFloat(ten);
  let totalRoyalTen = royal + (royal * ten);
  document.getElementById('total').innerHTML = 'TOTAL: $' + totalRoyalTen + '.00';
}

  let fifteen = document.getElementById('fifteen');
  fifteen.onclick = function chooseFifteen() {
    fifteen = '0.15';
    fifteen = parseFloat(fifteen);
    let totalRoyalFifteen = royal + (royal * fifteen);
    document.getElementById('total').innerHTML = 'TOTAL: $' + totalRoyalFifteen + '0';
}

    let twenty = document.getElementById('twenty');
    twenty.onclick = function chooseTwenty() {
      twenty = '0.20';
      twenty = parseFloat(twenty);
      let totalRoyalTwenty = royal + (royal * twenty);
      document.getElementById('total').innerHTML = 'TOTAL: $' + totalRoyalTwenty + '.00';
  }
};
