

document.getElementById('donate_now').addEventListener('click', function(){
    const getTotalDonate = parseFloat(document.getElementById('totalDonate').innerText)
    // console.log(getTotalDonate)

    const getDonate1 = parseFloat(document.getElementById('getDonate1').value);
    // console.log(getDonate)

    const getThisDonate1 = parseFloat(document.getElementById('getThisDonate1').innerText);
    // console.log(getThisDonate)

    const setTotalThisDonate = document.getElementById('getThisDonate1')
    const setTotalDonate = document.getElementById('totalDonate')
    
    if(getDonate1>=1){
        const totalThisDonate1=getDonate1+getThisDonate1;
        const currentTotalDonate = getDonate1+getTotalDonate;
        
        setTotalThisDonate.innerText = totalThisDonate1.toFixed(2);
        setTotalDonate.innerText = currentTotalDonate.toFixed(2)
    }else{
        alert('give donate')
    }

    const card1_title = document.getElementById('card1_title').innerText
    const historyItem = document.createElement("div")
    historyItem.className="flex flex-col border-solid border-[1px] w-[1140px] mx-auto rounded-[8px] border-gray-400 mb-14 p-4";
    historyItem.innerHTML=`
    <h1 class="text-2xl font-bold">${getDonate1,card1_title}</h1>
    `;
    const historyContainer = document.getElementById('history');
    historyContainer.insertBefore(historyItem,historyContainer.firstChild)
    
    
})

document.getElementById('donate_now2').addEventListener('click', function(){
    console.log("donate2")
    const getTotalDonate = parseFloat(document.getElementById('totalDonate').innerText)
    // console.log(getTotalDonate)

    const getDonate2 = parseFloat(document.getElementById('getDonate2').value);
    // console.log(getDonate)

    const getThisDonate2 = parseFloat(document.getElementById('getThisDonate2').innerText);
    // console.log(getThisDonate)

    const setTotalThisDonate = document.getElementById('getThisDonate2')
    const setTotalDonate = document.getElementById('totalDonate')
    
    if(getDonate2>=1){
        const totalThisDonate2=getDonate2+getThisDonate2;
        const currentTotalDonate = getDonate2+getTotalDonate;
        
        setTotalThisDonate.innerText = totalThisDonate2.toFixed(2);
        setTotalDonate.innerText = currentTotalDonate.toFixed(2)
    }else{
        alert('give donate')
    }

    const card2_title = document.getElementById('card2_title').innerText
    const historyItem = document.createElement("div")
    historyItem.className="flex flex-col border-solid border-[1px] w-[1140px] mx-auto rounded-[8px] border-gray-400 mb-14 p-4";
    historyItem.innerHTML=`
    <h1 class="text-2xl font-bold">${getDonate2,card2_title}</h1>
    `;
    const historyContainer = document.getElementById('history');
    historyContainer.insertBefore(historyItem,historyContainer.firstChild)
})

document.getElementById('donate_now3').addEventListener('click', function(){
    
    const getTotalDonate = parseFloat(document.getElementById('totalDonate').innerText)
    // console.log(getTotalDonate)

    const getDonate3 = parseFloat(document.getElementById('getDonate3').value);
    // console.log(getDonate)

    const getThisDonate3 = parseFloat(document.getElementById('getThisDonate3').innerText);
    // console.log(getThisDonate)

    const setTotalThisDonate = document.getElementById('getThisDonate3')
    const setTotalDonate = document.getElementById('totalDonate')
    
    if(getDonate3>=1){
        const totalThisDonate3=getDonate3+getThisDonate3;
        const currentTotalDonate = getDonate3+getTotalDonate;
        
        setTotalThisDonate.innerText = totalThisDonate3.toFixed(2);
        setTotalDonate.innerText = currentTotalDonate.toFixed(2)
    }else{
        alert('give donate')
    }

    const card3_title = document.getElementById('card3_title').innerText
    const historyItem = document.createElement("div")
    historyItem.className="flex flex-col border-solid border-[1px] w-[1140px] mx-auto rounded-[8px] border-gray-400 mb-14 p-4";
    historyItem.innerHTML=`
    <h1 class="text-2xl font-bold">${getDonate3,card3_title}</h1>
    `;
    const historyContainer = document.getElementById('history');
    historyContainer.insertBefore(historyItem,historyContainer.firstChild)

})

const historyTab = document.getElementById('historyTab');
const donateTab = document.getElementById('donateTab')

historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-btn_bg',)
    donateTab.classList.add('border-solid', 'border-[1px]', 'border-slate-400')    

    document.getElementById('cards').classList.add('hidden');

    donateTab.classList.remove('bg-btn_bg')
    document.getElementById('history').classList.remove('hidden')
    
})

donateTab.addEventListener('click',function(){
    donateTab.classList.add('bg-btn_bg')
    donateTab.classList.remove('border-solid', 'border-[1px]', 'border-slate-400')
    historyTab.classList.remove('bg-btn_bg')
    historyTab.classList.add('border-solid', 'border-[1px]', 'border-slate-400')
    document.getElementById('cards').classList.remove('hidden');

})

