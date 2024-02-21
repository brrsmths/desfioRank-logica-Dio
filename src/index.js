//Challenge: Rank Calculation

function calc(win,lose){
    let result = win - lose;
    return result;
}

function tier(balance){
    if (balance <= 10) {
        tierRank = "Ferro";
    } else if (balance <= 20) {
        tierRank = "Bronze";
    } else if (balance <= 50 || balance <= 90) {
        tierRank = "Prata";
    } else if (balance <= 80) {
        tierRank = "Ouro";
    } else if (balance <= 100) {
        tierRank = "Lendário";
    } else {
        tierRank = "Imortal";
    }
    return tierRank;
}

let balance = calc(88,3);
let tierName = tier(balance); // Chamar a função tier com o saldo calculado

console.log(`O Herói tem saldo de ${balance} vitórias e está no nível de ${tierName}`)