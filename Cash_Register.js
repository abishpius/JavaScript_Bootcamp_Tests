const MONEY_TABLE = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {
  // store change
  const changeDue = cash-price;
  // Convert to cents
  let changeDueCents = changeDue * 100;

  // sum of money in drawers in cents
  const cashForChange = cid.reduce((acc, moneySlot) => {
    return acc + moneySlot[1]*100
  },0)

  
 // if money is same as cid
 if (changeDueCents === cashForChange){
   return {status: "CLOSED", change: cid}
 }
// calc how many bills we can give out
const changeInHand = cid.reverse().map(([billOrCoinName, valueInSlot])=> {
  let totalCash = 0;
 
  //get slot worth
  const denomination = MONEY_TABLE[billOrCoinName];

  let valueInSlotCents = Math.round(valueInSlot*100)

  
  // loop: while amount of money > 0 and value of slot 
while( valueInSlotCents > 0 && denomination <= changeDueCents){
  totalCash += denomination;
  changeDueCents -= denomination;
  valueInSlotCents -= denomination;

}
return [billOrCoinName, totalCash/100]
}).filter(([_, value]) => value >0 )

if(changeDueCents > 0){
  return {status: "INSUFFICIENT_FUNDS", change: []}
}

return {status: "OPEN", change: changeInHand}
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
