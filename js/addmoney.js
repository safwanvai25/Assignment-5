document.getElementById('input-btn').addEventListener('click',function(){
    const amount = addMoneyInputValueById('input-value-money');
    const moneystore = addMoneyInputValueByIdStore('money');
    const IhaveMoney =IhaveMOney('money-amout');
   
    if(isNaN(amount) || amount < 0 ){
        alert('please try again')
        return
    }
    if(amount >= IhaveMoney){
        alert('please go to earn money')
        return
    }
    const newBalance = amount + moneystore;
    document.getElementById('money').innerText = newBalance;

  
    const remainMoney = IhaveMoney - newBalance;
    document.getElementById('money-amout').innerText = remainMoney;


    })
  
    document.getElementById('input-btn2').addEventListener('click',function(){
    const amount2 = addMoneyInputValueById('input-value-money2');
    const moneystore2 = addMoneyInputValueByIdStore('money2');
    const IhaveMoney2 =IhaveMOney('money-amout');
    if(isNaN(amount2) || amount2 < 0 ){
      alert('please try again')
      return
  }
  if(amount2 >= IhaveMoney2){
      alert('please go to earn money')
      return
  }

    const newBalance = amount2 + moneystore2;
    document.getElementById('money2').innerText = newBalance;

  
    const remainMoney = IhaveMoney2 - newBalance;
    document.getElementById('money-amout').innerText = remainMoney;

    })
    document.getElementById('input-btn3').addEventListener('click',function(){
      const amount3 = addMoneyInputValueById('input-value-money3');
      const moneystore3 = addMoneyInputValueByIdStore('money3');
      const IhaveMoney3 =IhaveMOney('money-amout');
      if(isNaN(amount3) || amount3 < 0 ){
        alert('please try again')
        return
    }
    if(amount3 >= IhaveMoney3){
        alert('please go to earn money')
        return
    }
    
      const newBalance = amount3 + moneystore3;
      document.getElementById('money3').innerText = newBalance;
  
    
      const remainMoney = IhaveMoney3 - newBalance;
      document.getElementById('money-amout').innerText = remainMoney;
  
      })



  
  

document.getElementById('History').addEventListener('click',function(){
   
 const id = hidden('History-section');
 
 
     
})
document.getElementById('donation').addEventListener('click',function(){
   
  const id = hidden('main-donation-club');
   
      
 })

