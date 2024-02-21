function calc(win, lose) {
    let result = win - lose;
    return result;
}

function tier(balance) {
    let tierNumber;
    if (balance <= 10) {
        tierNumber = 1; // Ferro
    } else if (balance <= 20) {
        tierNumber = 2; // Bronze
    } else if (balance <= 50 || balance <= 90) {
        tierNumber = 3; // Prata
    } else if (balance <= 80) {
        tierNumber = 4; // Ouro
    } else if (balance <= 100) {
        tierNumber = 5; // Lendário
    } else {
        tierNumber = 6; // Imortal
    }
    return tierNumber;
}

let balance = calc(5, 3);
let tierName = tier(balance); // Chamar a função tier com o saldo calculado

console.log(`o valor é ${balance} e o tier é ${tierName}`);
