function Check(){
    const statusEl = document.getElementById('status');
    
    if(navigator.onLine){
        statusEl.style.background = "lawngreen"
        statusEl.innerHTML = "Online"
    }
    else{
        statusEl.style.background = "red"
        statusEl.innerHTML = "Offline"
    }

}






