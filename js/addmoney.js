document.getElementById('input-btn').addEventListener('click',function(e){
    const amount = addMoneyInputValueById('input-value-money');
    const moneystore = addMoneyInputValueByIdStore('money');
    const IhaveMoney =IhaveMOney('money-amout');

    if(isNaN(amount) || amount < 0 ){
        alert('please try again')
        return
    }
    if(IhaveMoney < amount){
      alert('please go to earn money')
      return
  }
  
    if(IhaveMoney >= 0){
    const newBalance =IhaveMoney - amount;
    document.getElementById('money-amout').innerText = newBalance;}

    


      document.getElementById('money').innerText = amount;
      document.getElementById('input-value-money').value = ' ';
  
    
    
   
    // modal start 
    const modal = document.getElementById('modal')
    modal.classList.remove('hidden')
    document.getElementById('close').addEventListener('click',function(event){
      event.preventDefault();
      modal.classList.add('hidden')
    })
    // modal end 
    // create  history box 
    const date  = new Date().toString();
   const section = document.getElementById('History-section');
    const div = document.createElement('div');
    div.classList.add("collapse" , "bg-base-200","p-7","mb-8")
    const h3 = document.createElement('h3');
    h3.classList.add("text-2xl" , "font-extrabold")
    h3.innerText = `${amount} Donate for Flood at Noakhali, Bangladesh`;

    div.appendChild(h3)
    const p = document.createElement('p');
    p.innerText = date;
    div.appendChild(p);

    section.appendChild(div);
   



    
    

    })
  
    document.getElementById('input-btn2').addEventListener('click',function(){
    const amount2 = addMoneyInputValueById('input-value-money2');
    const moneystore2 = addMoneyInputValueByIdStore('money2');
    const IhaveMoney2 =IhaveMOney('money-amout');
    if(isNaN(amount2) || amount2 < 0 ){
      alert('please try again')
      return
  }
  if(amount2 > IhaveMoney2){
      alert('please go to earn money')
      return
  }


  if(IhaveMoney2 >= 0){
    const newBalance =IhaveMoney2 - amount2;
    document.getElementById('money-amout').innerText = newBalance;}

    
      document.getElementById('money2').innerText = amount2;
      document.getElementById('input-value-money2').value = ' ';
       // modal start 
    const modal = document.getElementById('modal')
    modal.classList.remove('hidden')
    document.getElementById('close').addEventListener('click',function(event){
      event.preventDefault();
      modal.classList.add('hidden')
    })
    // modal end 
    // create  history box 
    const date  = new Date().toString();
   const section = document.getElementById('History-section');
    const div = document.createElement('div');
    div.classList.add("collapse" , "bg-base-200","p-7","mb-8")
    const h3 = document.createElement('h3');
    h3.classList.add("text-2xl" , "font-extrabold")
    h3.innerText = `${amount2} Taka is Donated for famine-2024 at Feni, Bangladesh`;

    div.appendChild(h3)
    const p = document.createElement('p');
    p.innerText = date;
    div.appendChild(p);

    section.appendChild(div);
   

    })
    document.getElementById('input-btn3').addEventListener('click',function(){
      const amount3 = addMoneyInputValueById('input-value-money3');
      const moneystore3 = addMoneyInputValueByIdStore('money3');
      const IhaveMoney3 =IhaveMOney('money-amout');
      if(isNaN(amount3) || amount3 < 0 ){
        alert('please try again')
        return
    }
    if(amount3 > IhaveMoney3){
        alert('please go to earn money')
        return
    }
    
    if(IhaveMoney3 >= 0){
      const newBalance =IhaveMoney3 - amount3;
      document.getElementById('money-amout').innerText = newBalance;}
  
      
  
  
        document.getElementById('money3').innerText = amount3;
        document.getElementById('input-value-money3').value = ' ';
        // modal start 
    const modal = document.getElementById('modal')
    modal.classList.remove('hidden')
    document.getElementById('close').addEventListener('click',function(event){
      event.preventDefault();
      modal.classList.add('hidden')
    })
    // modal end 
       // create  history box 
    const date  = new Date().toString();
    const section = document.getElementById('History-section');
     const div = document.createElement('div');
     div.classList.add("collapse" , "bg-base-200","p-7")
     const h3 = document.createElement('h3');
     h3.classList.add("text-2xl" , "font-extrabold")
     h3.innerText = `${amount3} Aid for Injured in the Quota Movement`;
 
     div.appendChild(h3)
     const p = document.createElement('p');
     p.innerText = date;
     div.appendChild(p);
 
     section.appendChild(div);
      
      })



  
  

document.getElementById('History').addEventListener('click',function(){
   
 const id = hidden('History-section');
 document.getElementById('donation').classList.remove('bg-[#B4F461]')
 document.getElementById('History').classList.add('bg-[#B4F461]')
 
     
})
document.getElementById('donation').addEventListener('click',function(){
   
  const id = hidden('main-donation-club');
  document.getElementById('History').classList.remove('bg-[#B4F461]')
  document.getElementById('donation').classList.add('bg-[#B4F461]')
      
 })

