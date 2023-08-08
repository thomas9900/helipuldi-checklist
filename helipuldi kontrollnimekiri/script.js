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
            '<li>Väljaanne alla laetud, videod (jw library)</li>'+
            '<li>Taustamuusika</li>'+
            '<li>Helipuldi nupud õiged</li>' +
            '<li>Lavamikrofonide asetus kontrollida</li>' +
            '<li>4 telekat, kõrvalsaali heli sisse</li>' +
            '<li>Raadiomikrite saatja ja heliparandi sisse</li>' +
            '<li>Kontrolli taimerit (restardi taimeri kontrolleri kapis, kui ei tööta)</li>' +
            '<li>Ventilatsioon</li>' +
            '<li>Taustamuusika kinni 2min enne algust</li>' +
            '<h2>Zoom</h2>' +
            '<li>Teenindaja määrata co-hostiks</li>' +
            '<li>Kell :56 share video sisse (share screen>advanced>videos)</li>' +
            '<li>Kell :58 share video välja</li>' +
            '<li>Pilt ja heli sisse</li>' +
            '<li>Spotlight (saali zoom)</li>' +
            '<h2>Koosoleku alguses </h2>' +
            '<li>Mikrofonid sisse</li>' +
            '<li>Laul käima, JW Library > Koosolek > Meedia</li>' +
            '<h2 class="h2-bottom">Koosoleku lõpus</h2>' +
            '<li>Zoom: spotlight, pilt, heli kinni</li>' +
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
