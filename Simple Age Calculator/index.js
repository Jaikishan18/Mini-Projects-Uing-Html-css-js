function calculate(){
    setInterval(() => {
        const birthdate = new Date(document.getElementById('birthdate').value)
        const now = new Date()
        const ageInMs = now.getTime() - birthdate.getTime()
    
       const ageInS = ageInMs / 1000;
       const ageInMins = ageInS / 60;
       const ageInHours = ageInMins / 60;
       const ageInDays = ageInHours / 24
       const ageInMonths = ageInDays / 30.4375;
       const ageInYears =  ageInMonths / 12;
    
       document.querySelector('#years').innerHtml = Math.floor(ageInYears);
       document.querySelector('#months').innerHtml = Math.floor(ageInMonths%12);
       document.querySelector('#days').innerHtml = Math.floor(ageInDays%30.4375);
       document.querySelector('#hours').innerHtml = Math.floor(ageInHours%24);
       document.querySelector('#minutes').innerHtml = Math.floor(ageInMins%60);
       document.querySelector('#seconds').innerHtml = Math.floor(ageInS%60);
    
       
    }, 1000);
}

   function reset(){
    window.location.reload();
   }
