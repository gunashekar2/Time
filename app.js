let localTime = document.getElementById('local-time');
let localDate = document.getElementById('local-date');
let timeZone = document.getElementById('dropdown-zones').value;
let selectedTime = document.getElementById('selected-time');
let selectedDate = document.getElementById('selected-date');

let a ;
setInterval(function(){
    let d = new Date();
    if(d.getHours() < 12){
        a = "AM";
   }else{   
       a = "PM"
                
   }
    console.log(d.getHours());  
    localTime.innerHTML =d.getHours()%12+":"+d.getMinutes()+":"+d.getSeconds() + " "+a;
    localDate.innerHTML =moment().format(" D MMMM  YYYY");
},1000);

function selected(){

    let da = new Date();
    let timeZone = document.getElementById('dropdown-zones').value;
    let d = new Date(da.toLocaleString('en-US', { timeZone: timeZone }));
    if(d.getHours() < 12){
        a = "AM";                
    }else{
        a = "PM";
        
    }
    
    selectedTime.innerHTML = d.getHours()%12+":"+d.getMinutes()+":"+d.getSeconds()+ " "+a ;
    selectedDate.innerHTML = moment().format(" D MMMM  YYYY");
}
setInterval(selected,1000);


