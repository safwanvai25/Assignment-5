
function addMoneyInputValueById(id){
   const inputMoney = document.getElementById(id).value;
   const inputNumber = parseFloat(inputMoney);
   return inputNumber;
     
}

function addMoneyInputValueByIdStore(moneystore){
 
  const  addMoneyStore = document.getElementById(moneystore).innerText;
  const  addMoneyStoreNumber = parseFloat(addMoneyStore);
  return addMoneyStoreNumber;
       

}
function IhaveMOney(Ihave){
const mainBalance = document.getElementById(Ihave).innerText;
const mainBalanceNUmber = parseFloat(mainBalance);
return mainBalanceNUmber
}
function hidden(id){
document.getElementById('main-donation-club').classList.add('hidden');
document.getElementById('History-section').classList.add('hidden');

const mainOutput = document.getElementById(id).classList.remove('hidden')
return mainOutput



}