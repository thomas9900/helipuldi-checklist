// localStorage reset
const hours = 5; 
const now = new Date().getTime();
const setupTime = localStorage.getItem('setupTime');
if (setupTime == null) {
    localStorage.setItem('setupTime', now)
} else {
    if((now - setupTime) > hours*60*60*1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', now);
    }
}


(function(){
  
    const list = document.querySelector('.list');
    
    list.addEventListener('click', function(e){
        e.target.classList.toggle('checked');
        store();
    })
    
    function store() {
        window.localStorage.myitems = list.innerHTML;
    }
    
    function getValues() {
        const storedValues = window.localStorage.myitems;
        if (!storedValues) {
            list.innerHTML = 
            '<li>Ülekanne (ülekande ajal peaks kogu aeg midagi kostma)</li>'+
            '<li>Ventilatsioon</li>' +
            '<li>Taustamuusika</li>'+
            '<li>Väljaanne alla laetud, videod (jw library)</li>'+
            '<li>Helipuldi nupud õiged</li>' +
            '<li>Lavamikrofonide asetus kontrollida</li>' +
            '<li>4 telekat</li>' +
            '<li>Raadiomikrite saatja ja heliparandi sisse</li>' +
            '<li>Kontrolli taimerit (restardi taimeri kontrolleri kapis, kui ei tööta)</li>' +
            '<li>Taustamuusika kinni 2min enne algust</li>' +
            '<h2>Koosoleku alguses </h2>' +
            '<li>Salvestamine</li>' +
            '<li>Laul käima, JW Library > Koosolek > Meedia</li>' +
            '<h2 class="h2-bottom">Koosoleku lõpus</h2>' +
            '<li>Salvestamine lõpetada</li>' +
            '<li>Taustamuusika</li>' +
            '<li>USB pulgad laetud</li>' +
            '<li>Telekad välja</li>';   
        }
        else {
            list.innerHTML = storedValues;
        }
}

getValues();
})();