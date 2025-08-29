// Clicking on the 💗 heart icon of any card will increase the count in the Navbar 

// heart button 0
    const heartButton = document.getElementById('heart-btn');
    heartButton.addEventListener('click', function(){
    const heartButtonClickedNumber = document.getElementById('heart-btn-clicked')
        
    const currentClick = parseInt(heartButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    heartButtonClickedNumber.innerText = clickedResult;
})
// heart button 1
    const heartButton1 = document.getElementById('heart-btn1');
    heartButton1.addEventListener('click', function(){
    const heartButtonClickedNumber = document.getElementById('heart-btn-clicked')
        
    const currentClick = parseInt(heartButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    heartButtonClickedNumber.innerText = clickedResult;
})
// heart button 2
    const heartButton2 = document.getElementById('heart-btn2');
    heartButton2.addEventListener('click', function(){
    const heartButtonClickedNumber = document.getElementById('heart-btn-clicked')
        
    const currentClick = parseInt(heartButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    heartButtonClickedNumber.innerText = clickedResult;
})
// heart button 3
    const heartButton3 = document.getElementById('heart-btn3');
    heartButton3.addEventListener('click', function(){
    const heartButtonClickedNumber = document.getElementById('heart-btn-clicked')
        
    const currentClick = parseInt(heartButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    heartButtonClickedNumber.innerText = clickedResult;
})
// heart button 4
    const heartButton4 = document.getElementById('heart-btn4');
    heartButton4.addEventListener('click', function(){
    const heartButtonClickedNumber = document.getElementById('heart-btn-clicked')
        
    const currentClick = parseInt(heartButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    heartButtonClickedNumber.innerText = clickedResult;
})
// heart button 5
    const heartButton5 = document.getElementById('heart-btn5');
    heartButton5.addEventListener('click', function(){
    const heartButtonClickedNumber = document.getElementById('heart-btn-clicked')
        
    const currentClick = parseInt(heartButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    heartButtonClickedNumber.innerText = clickedResult;
})
// heart button 6
    const heartButton6 = document.getElementById('heart-btn6');
    heartButton6.addEventListener('click', function(){
    const heartButtonClickedNumber = document.getElementById('heart-btn-clicked')
        
    const currentClick = parseInt(heartButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    heartButtonClickedNumber.innerText = clickedResult;
})
// heart button 7
    const heartButton7 = document.getElementById('heart-btn7');
    heartButton7.addEventListener('click', function(){
    const heartButtonClickedNumber = document.getElementById('heart-btn-clicked')
        
    const currentClick = parseInt(heartButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    heartButtonClickedNumber.innerText = clickedResult;
})
// heart button 8
    const heartButton8 = document.getElementById('heart-btn8');
    heartButton8.addEventListener('click', function(){
    const heartButtonClickedNumber = document.getElementById('heart-btn-clicked')
        
    const currentClick = parseInt(heartButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    heartButtonClickedNumber.innerText = clickedResult;
})

// calls buttons 
//  button 0
const callHistory = [];
const callBtn = document.getElementById('call-btn');
callBtn.addEventListener('click', function(){
   const serviceName = document.getElementById('service-name').innerText
   const serviceNumber = document.getElementById('service-number').innerText
   const coinsHave = document.getElementById('coins');
   const currentCoins = parseInt(coinsHave.innerText)

  if(currentCoins < 20 ){
    alert("Not enough coins! Minimum 20 needed to make a call");
    return;
  }
  const AfterCallCurrentCoins = currentCoins - 20;
  coinsHave.innerText = AfterCallCurrentCoins;

  const data = {
    name: serviceName,
    number: serviceNumber,
    date: new Date (). toLocaleTimeString()
    
  }
  callHistory.push(data)

     alert('emergency-service.netfly.app says \n Calling ' + serviceName +' ' + serviceNumber)
})
document.getElementById('call-btn').addEventListener('click', function(){
    const callHistoryContainer = document.getElementById('call-history-container')
     callHistoryContainer.innerHTML = " ";

    for(const data of callHistory){
        const div = document.createElement("div")
        div.innerHTML = `
        <div class=" flex justify-between items-center mt-3 bg-[#f7f7f7] rounded-lg ">
            <div class="mx-2 my-2">
                <h1 class="font-bold">${data.name}</h1>
            <p class="text-gray-500">${data.number}</p>
            </div>
            <p class="text-gray-700 mr-2">${data.date}</p>
        </div>
        `
        callHistoryContainer.appendChild(div)
    }
})
//  button 1
const callBtn1 = document.getElementById('call-btn1');
callBtn1.addEventListener('click', function(){
   const serviceName = document.getElementById('police-service').innerText
   const serviceNumber = document.getElementById('police-number').innerText
   const coinsHave = document.getElementById('coins');
   const currentCoins = parseInt(coinsHave.innerText)

  if(currentCoins < 20 ){
    alert("Not enough coins! Minimum 20 needed to make a call");
    return;
  }
  
  const AfterCallCurrentCoins = currentCoins - 20;
  coinsHave.innerText = AfterCallCurrentCoins;

  const data1 = {
    name: serviceName,
    number: serviceNumber,
    date: new Date (). toLocaleTimeString()
  }
  callHistory.push(data1)

     alert('emergency-service.netfly.app says \n 📞Calling ' + serviceName +' ' + serviceNumber)
})
document.getElementById('call-btn1').addEventListener('click', function(){
    const callHistoryContainer = document.getElementById('call-history-container')
    callHistoryContainer.innerHTML = " ";

    for(const data1 of callHistory){
        const div1 = document.createElement("div")
        div1.innerHTML = `
        <div class=" flex justify-between items-center mt-3 bg-[#f7f7f7] rounded-lg ">
            <div class="mx-2 my-2">
                <h1 class="font-bold">${data1.name}</h1>
            <p class="text-gray-500">${data1.number}</p>
            </div>
            <p class="text-gray-700 mr-2">${data1.date}</p>
        </div>
        `
       
        callHistoryContainer.appendChild(div1)
    }
})


//  button 2
const callBtn2 = document.getElementById('call-btn2');
callBtn2.addEventListener('click', function(){
   const serviceName = document.getElementById('fire-service').innerText
   const serviceNumber = document.getElementById('fire-service-number').innerText
   const coinsHave = document.getElementById('coins');
   const currentCoins = parseInt(coinsHave.innerText)

  if(currentCoins < 20 ){
    alert("Not enough coins! Minimum 20 needed to make a call");
    return;
  }
  
  const AfterCallCurrentCoins = currentCoins - 20;
  coinsHave.innerText = AfterCallCurrentCoins;

  const data2 = {
    name: serviceName,
    number: serviceNumber,
    date: new Date (). toLocaleTimeString()
  }
  callHistory.push(data2)

     alert('emergency-service.netfly.app says \n 📞Calling ' + serviceName +' ' + serviceNumber)
})
document.getElementById('call-btn2').addEventListener('click', function(){
    const callHistoryContainer = document.getElementById('call-history-container')
    callHistoryContainer.innerHTML = " ";

    for(const data2 of callHistory){
        const div2 = document.createElement("div")
        div2.innerHTML = `
        <div class=" flex justify-between items-center mt-3 bg-[#f7f7f7] rounded-lg ">
            <div class="mx-2 my-2">
                <h1 class="font-bold">${data2.name}</h1>
            <p class="text-gray-500">${data2.number}</p>
            </div>
            <p class="text-gray-700 mr-2">${data2.date}</p>
        </div>
        `
       
        callHistoryContainer.appendChild(div2)
    }
})


//  button 3
const callBtn3 = document.getElementById('call-btn3');
callBtn3.addEventListener('click', function(){
   const serviceName = document.getElementById('ambulance-service').innerText
   const serviceNumber = document.getElementById('ambulance-service-number').innerText
   const coinsHave = document.getElementById('coins');
   const currentCoins = parseInt(coinsHave.innerText)

  if(currentCoins < 20 ){
    alert("Not enough coins! Minimum 20 needed to make a call");
    return;
  }
  
  const AfterCallCurrentCoins = currentCoins - 20;
  coinsHave.innerText = AfterCallCurrentCoins;

  const data3 = {
    name: serviceName,
    number: serviceNumber,
    date: new Date (). toLocaleTimeString()
  }
  callHistory.push(data3)

     alert('emergency-service.netfly.app says \n 📞Calling ' + serviceName +' ' + serviceNumber)
})
document.getElementById('call-btn3').addEventListener('click', function(){
    const callHistoryContainer = document.getElementById('call-history-container')
    callHistoryContainer.innerHTML = " ";

    for(const data3 of callHistory){
        const div3 = document.createElement("div")
        div3.innerHTML = `
        <div class=" flex justify-between items-center mt-3 bg-[#f7f7f7] rounded-lg ">
            <div class="mx-2 my-2">
                <h1 class="font-bold">${data3.name}</h1>
            <p class="text-gray-500">${data3.number}</p>
            </div>
            <p class="text-gray-700 mr-2">${data3.date}</p>
        </div>
        `
       
        callHistoryContainer.appendChild(div3)
    }
})

//  button 4
const callBtn4 = document.getElementById('call-btn4');
callBtn4.addEventListener('click', function(){
   const serviceName = document.getElementById('women-helpline').innerText
   const serviceNumber = document.getElementById('women-helpline-number').innerText
   const coinsHave = document.getElementById('coins');
   const currentCoins = parseInt(coinsHave.innerText)

  if(currentCoins < 20 ){
    alert("Not enough coins! Minimum 20 needed to make a call");
    return;
  }
  
  const AfterCallCurrentCoins = currentCoins - 20;
  coinsHave.innerText = AfterCallCurrentCoins;

  const data4 = {
    name: serviceName,
    number: serviceNumber,
    date: new Date (). toLocaleTimeString()
  }
  callHistory.push(data4)

     alert('emergency-service.netfly.app says \n 📞Calling ' + serviceName +' ' + serviceNumber)
})
document.getElementById('call-btn4').addEventListener('click', function(){
    const callHistoryContainer = document.getElementById('call-history-container')
    callHistoryContainer.innerHTML = " ";

    for(const data4 of callHistory){
        const div4 = document.createElement("div")
        div4.innerHTML = `
        <div class=" flex justify-between items-center mt-3 bg-[#f7f7f7] rounded-lg ">
            <div class="mx-2 my-2">
                <h1 class="font-bold">${data4.name}</h1>
            <p class="text-gray-500">${data4.number}</p>
            </div>
            <p class="text-gray-700 mr-2">${data4.date}</p>
        </div>
        `
       
        callHistoryContainer.appendChild(div4)
    }
})

//  button 5
const callBtn5 = document.getElementById('call-btn5');
callBtn5.addEventListener('click', function(){
   const serviceName = document.getElementById('anti-service').innerText
   const serviceNumber = document.getElementById('anti-service-number').innerText
   const coinsHave = document.getElementById('coins');
   const currentCoins = parseInt(coinsHave.innerText)

  if(currentCoins < 20 ){
    alert("Not enough coins! Minimum 20 needed to make a call");
    return;
  }
  
  const AfterCallCurrentCoins = currentCoins - 20;
  coinsHave.innerText = AfterCallCurrentCoins;

  const data5 = {
    name: serviceName,
    number: serviceNumber,
    date: new Date (). toLocaleTimeString()
  }
  callHistory.push(data5)

     alert('emergency-service.netfly.app says \n 📞Calling ' + serviceName +' ' + serviceNumber)
})
document.getElementById('call-btn5').addEventListener('click', function(){
    const callHistoryContainer = document.getElementById('call-history-container')
    callHistoryContainer.innerHTML = " ";

    for(const data5 of callHistory){
        const div5 = document.createElement("div")
        div5.innerHTML = `
        <div class=" flex justify-between items-center mt-3 bg-[#f7f7f7] rounded-lg ">
            <div class="mx-2 my-2">
                <h1 class="font-bold">${data5.name}</h1>
            <p class="text-gray-500">${data5.number}</p>
            </div>
            <p class="text-gray-700 mr-2">${data5.date}</p>
        </div>
        `
       
        callHistoryContainer.appendChild(div5)
    }
})

//  button 6
const callBtn6 = document.getElementById('call-btn6');
callBtn6.addEventListener('click', function(){
   const serviceName = document.getElementById('electricity-service').innerText
   const serviceNumber = document.getElementById('electricity-service-number').innerText
   const coinsHave = document.getElementById('coins');
   const currentCoins = parseInt(coinsHave.innerText)

  if(currentCoins < 20 ){
    alert("Not enough coins! Minimum 20 needed to make a call");
    return;
  }
  
  const AfterCallCurrentCoins = currentCoins - 20;
  coinsHave.innerText = AfterCallCurrentCoins;

  const data6 = {
    name: serviceName,
    number: serviceNumber,
    date: new Date (). toLocaleTimeString()
  }
  callHistory.push(data6)

     alert('emergency-service.netfly.app says \n 📞Calling ' + serviceName +' ' + serviceNumber)
})
document.getElementById('call-btn6').addEventListener('click', function(){
    const callHistoryContainer = document.getElementById('call-history-container')
    callHistoryContainer.innerHTML = " ";

    for(const data6 of callHistory){
        const div6 = document.createElement("div")
        div6.innerHTML = `
        <div class=" flex justify-between items-center mt-3 bg-[#f7f7f7] rounded-lg ">
            <div class="mx-2 my-2">
                <h1 class="font-bold">${data6.name}</h1>
            <p class="text-gray-500">${data6.number}</p>
            </div>
            <p class="text-gray-700 mr-2">${data6.date}</p>
        </div>
        `
       
        callHistoryContainer.appendChild(div6)
    }
})
//  button 7
const callBtn7 = document.getElementById('call-btn7');
callBtn7.addEventListener('click', function(){
   const serviceName = document.getElementById('brac-service').innerText
   const serviceNumber = document.getElementById('brac-service-number').innerText
   const coinsHave = document.getElementById('coins');
   const currentCoins = parseInt(coinsHave.innerText)

  if(currentCoins < 20 ){
    alert("Not enough coins! Minimum 20 needed to make a call");
    return;
  }
  
  const AfterCallCurrentCoins = currentCoins - 20;
  coinsHave.innerText = AfterCallCurrentCoins;

  const data7 = {
    name: serviceName,
    number: serviceNumber,
    date: new Date (). toLocaleTimeString()
  }
  callHistory.push(data7)

     alert('emergency-service.netfly.app says \n 📞Calling ' + serviceName +' ' + serviceNumber)
})
document.getElementById('call-btn7').addEventListener('click', function(){
    const callHistoryContainer = document.getElementById('call-history-container')
    callHistoryContainer.innerHTML = " ";

    for(const data7 of callHistory){
        const div7 = document.createElement("div")
        div7.innerHTML = `
        <div class=" flex justify-between items-center mt-3 bg-[#f7f7f7] rounded-lg ">
            <div class="mx-2 my-2">
                <h1 class="font-bold">${data7.name}</h1>
            <p class="text-gray-500">${data7.number}</p>
            </div>
            <p class="text-gray-700 mr-2">${data7.date}</p>
        </div>
        `
       
        callHistoryContainer.appendChild(div7)
    }
})

//  button 8
const callBtn8 = document.getElementById('call-btn8');
callBtn8.addEventListener('click', function(){
   const serviceName = document.getElementById('railway-helpline').innerText
   const serviceNumber = document.getElementById('railway-helpline-number').innerText
   const coinsHave = document.getElementById('coins');
   const currentCoins = parseInt(coinsHave.innerText)

  if(currentCoins < 20 ){
    alert("Not enough coins! Minimum 20 needed to make a call");
    return;
  }
  
  const AfterCallCurrentCoins = currentCoins - 20;
  coinsHave.innerText = AfterCallCurrentCoins;

  const data8 = {
    name: serviceName,
    number: serviceNumber,
    date: new Date (). toLocaleTimeString()
  }
  callHistory.push(data8)

     alert('emergency-service.netfly.app says \n 📞Calling ' + serviceName +' ' + serviceNumber)
})
document.getElementById('call-btn8').addEventListener('click', function(){
    const callHistoryContainer = document.getElementById('call-history-container')
    callHistoryContainer.innerHTML = " ";

    for(const data8 of callHistory){
        const div8 = document.createElement("div")
        div8.innerHTML = `
        <div class=" flex justify-between items-center mt-3 bg-[#f7f7f7] rounded-lg ">
            <div class="mx-2 my-2">
                <h1 class="font-bold">${data8.name}</h1>
            <p class="text-gray-500">${data8.number}</p>
            </div>
            <p class="text-gray-700 mr-2">${data8.date}</p>
        </div>
        `
       
        callHistoryContainer.appendChild(div8)
    }
})

//  clear btn 
 const removeBtn = document.getElementById('remove-btn')
const callHistoryContainer = document.getElementById('call-history-container');
removeBtn.addEventListener('click', function(){
    callHistoryContainer.style.display = 'none';
})


// copy button 0
   

    
// const copyButton = document.getElementById('copy-btn');
//     copyButton.addEventListener('click', function(){
//          const serviceNumber = document.getElementById('service-number').innerText
//         const textToCopy = serviceNumber;
//             navigator.clipboard.writeText(textToCopy)
//              alert('The number is copied' + ' ' + serviceNumber + '...')
     
//     const copyButtonClickedNumber = document.getElementById('copy-btn-clicked')    
//     const currentClick = parseInt(copyButtonClickedNumber.innerText);
//     const clickedResult = currentClick + 1;
//     copyButtonClickedNumber.innerText = clickedResult;
// })

// copy button 1
   
    const copyButton1 = document.getElementById('copy-btn1');
    copyButton1.addEventListener('click', function(){
          const serviceNumber = document.getElementById('police-number').innerText
        const textToCopy = serviceNumber;
            navigator.clipboard.writeText(textToCopy)
             alert('The number is copied' + ' ' + serviceNumber + '...')
     
    const copyButtonClickedNumber = document.getElementById('copy-btn-clicked')    
    const currentClick = parseInt(copyButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    copyButtonClickedNumber.innerText = clickedResult;
})
// copy button 2
   
    const copyButton2 = document.getElementById('copy-btn2');
    copyButton2.addEventListener('click', function(){
         const serviceNumber = document.getElementById('fire-service-number').innerText
        const textToCopy = serviceNumber;
            navigator.clipboard.writeText(textToCopy)
             alert('The number is copied' + ' ' + serviceNumber + '...')
     
    const copyButtonClickedNumber = document.getElementById('copy-btn-clicked')    
    const currentClick = parseInt(copyButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    copyButtonClickedNumber.innerText = clickedResult;
})
// copy button 3
       const copyButton3 = document.getElementById('copy-btn3');
       copyButton3.addEventListener('click', function(){
        const serviceNumber = document.getElementById('ambulance-service-number').innerText
        const textToCopy = serviceNumber;
            navigator.clipboard.writeText(textToCopy)
             alert('The number is copied' + ' ' + serviceNumber + '...')
     
    const copyButtonClickedNumber = document.getElementById('copy-btn-clicked')    
    const currentClick = parseInt(copyButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    copyButtonClickedNumber.innerText = clickedResult;
})
 
// copy button 4
       const copyButton4 = document.getElementById('copy-btn4');
       copyButton4.addEventListener('click', function(){
     const serviceNumber = document.getElementById('women-helpline-number').innerText
        const textToCopy = serviceNumber;
            navigator.clipboard.writeText(textToCopy)
             alert('The number is copied' + ' ' + serviceNumber + '...')
     
    const copyButtonClickedNumber = document.getElementById('copy-btn-clicked')    
    const currentClick = parseInt(copyButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    copyButtonClickedNumber.innerText = clickedResult;
})
 
 
// copy button 5
       const copyButton5 = document.getElementById('copy-btn5');
       copyButton5.addEventListener('click', function(){
     const serviceNumber = document.getElementById('anti-service-number').innerText
        const textToCopy = serviceNumber;
            navigator.clipboard.writeText(textToCopy)
             alert('The number is copied' + ' ' + serviceNumber + '...')
     
    const copyButtonClickedNumber = document.getElementById('copy-btn-clicked')    
    const currentClick = parseInt(copyButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    copyButtonClickedNumber.innerText = clickedResult;
})
 
 
// copy button 6
       const copyButton6 = document.getElementById('copy-btn6');
       copyButton6.addEventListener('click', function(){
     const serviceNumber = document.getElementById('electricity-service-number').innerText
        const textToCopy = serviceNumber;
            navigator.clipboard.writeText(textToCopy)
             alert('The number is copied' + ' ' + serviceNumber + '...')
     
    const copyButtonClickedNumber = document.getElementById('copy-btn-clicked')    
    const currentClick = parseInt(copyButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    copyButtonClickedNumber.innerText = clickedResult;
})
 
 
// copy button 7
       const copyButton7 = document.getElementById('copy-btn7');
       copyButton7.addEventListener('click', function(){
    const serviceNumber = document.getElementById('brac-service-number').innerText
        const textToCopy = serviceNumber;
            navigator.clipboard.writeText(textToCopy)
             alert('The number is copied' + ' ' + serviceNumber + '...')
     
    const copyButtonClickedNumber = document.getElementById('copy-btn-clicked')    
    const currentClick = parseInt(copyButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    copyButtonClickedNumber.innerText = clickedResult;
})
 
 
// copy button 8
       const copyButton8 = document.getElementById('copy-btn8');
       copyButton8.addEventListener('click', function(){
     const serviceNumber = document.getElementById('railway-helpline-number').innerText
        const textToCopy = serviceNumber;
            navigator.clipboard.writeText(textToCopy)
             alert('The number is copied' + ' ' + serviceNumber + '...')
     
    const copyButtonClickedNumber = document.getElementById('copy-btn-clicked')    
    const currentClick = parseInt(copyButtonClickedNumber.innerText);
    const clickedResult = currentClick + 1;
    copyButtonClickedNumber.innerText = clickedResult;
})
 
 
