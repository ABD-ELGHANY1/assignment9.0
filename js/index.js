document.querySelector('.navbar-toggler ').style.color='white'



  document.querySelectorAll('.navbar-nav a').forEach(function(nav){

      nav.addEventListener('mousemove',function(){

        document.querySelector(".nav-link.li-do").classList.remove('li-do')
         nav.classList.add('li-do')
        nav.style.color='white'
      })
    
   
    
    })  
    
 

    


var input= document.getElementById('input1')
var button= document.getElementById('button-addon1')


let all=[]
let date;
let code
let clander
let temp
let days
let ww
let wind1
let deg
let g
let search
let wee
let dayss
let temp2
async function gotDate(city){
  let weather=await fetch(` https://api.weatherapi.com/v1/forecast.json?key=d2e06febb159454188542953240307&q=${city}&days=3&aqi=yes`)

  let response= await weather.json()
   date=response

  g=city
  for(i=0;i<3;i++){
    
  const  d= new Date(`${date.forecast.forecastday[i].date}`)  

  temp=date.forecast.forecastday[i].day.mintemp_c;
  temp2=date.forecast.forecastday[i].day.maxtemp_c;
  day1= d.getDay()
   clander=d.getDate()
 mounth=d.getMonth()

ww=  date.forecast.forecastday[i].day.condition.text;
deg =340

  }


 displaydate( )


}


   input.addEventListener('keyup',function(){
     search=input.value
     gotDate(search)
   })
  
let url
gotDate('cairo')

function displaydate(){
 let cartona = ""
let day=['monday','tuesday','wensday','thursday','friday','satrday','sunday']
 const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
mo=month[mounth];

for(var i=0;i<3;i++){
  const  d= new Date(`${date.forecast.forecastday[i].date}`)  

  temp=date.forecast.forecastday[i].day.mintemp_c;
   day1= d.getDay()
   clander=d.getDate()
 mounth=d.getMonth()

ww=  date.forecast.forecastday[i].day.condition.text;
wind1 ='20%';
deg =340;
let reg=`https:`
 url= reg+ date.forecast.forecastday[0].day.condition.icon;

// console.log(dayss);



 if(deg<90){
  deg='North'

 } if(deg<180){
  deg='West'

 } if(deg<270){
  deg='South'

 } if(deg<360){
  deg='East'

 }
// if(day[day1]==6){
//   dayss=day[day1]
// console.log('klk');
// }

  dayss=day[day1-1]
 

  
 if(i==0){
  if(dayss==undefined){
    dayss=day[6]
  }

  cartona+=`
  
  <div class="col-12 p-0  col-lg-4">
<div class="w-100">

 <div class="col-12 card-header cla  d-flex justify-content-between align-items-center ">
   <h4 class="h6 ">${dayss}</h4>
  <span class="d-block">${clander} <span>
 ${mo}
  </span>
  </span>
 
 </div>
<div class=" mb-2 card-body bo" >
  <span class="d-block">${g}</span>

 
  <div class="text-center   "><h2>${temp}</h2>
   <span id="img" > <img src="${url}" alt=""></span></div>
  <h4  class="h6 mb-2">${ ww}</h4 >
  
<div class="w-25 d-flex align-items-center justify-content-between gap-4">   
 <div class=" d-flex align-items-center gap-1">

<img src="img/icon-umberella@2x.png" class="w-50" alt="">
<span>20%</span>
 </div>
 <div class=" d-flex  align-items-center   gap-2">
   <img src="img/icon-wind@2x.png" class="w-50" alt="">
   <span>${wind1}</span>
     </div>
     <div class=" d-flex align-items-center gap-2">
       <img src="img/icon-compass.png" class="w-50" alt="">
       <span>${deg}</span>
         </div>
</div>
</div>
</div>
</div>
 
 
 `
 }
 
 else if(i==1){

  if(dayss==undefined){
    dayss=day[6]
  }
  
  cartona+=`
  
  <div class="col-12 p-0  col-lg-4 ">
<div class="w-100">

 <div class="col-12  d-flex  cla justify-content-center  ">
   <h4 class="h6 text-center ">${dayss}</h4>
 
 </div>
<div class=" mb-2 ko text-center " >
 <span id="img" > <img src="${url}" alt=""></span>

  
  <h2 class="h3">${temp}</h2>
  <h2 class="h5">${temp2}</h2>
 
  <h4  class="h6 mb-2">${ ww}</h4 >
  </div>

 </div>
</div>

</div>
 

 
 `
}
 else if(i==2){

  if(dayss==undefined){
    dayss=day[6]
  }
  cartona+=`
  
  <div class="col-12 p-0  col-lg-4 ">
<div class="w-100">

 <div class="col-12  d-flex  cla justify-content-center  ">
   <h4 class="h6 text-center ">${dayss}</h4>
 
 </div>
<div class=" mb-2 text-center bo" >
 <span id="img" > <img src="${url}" alt=""></span>

  <h2 class="h3">${temp}</h2>
  <h2 class="h5">${temp2}</h2>

  <h4  class="h6 mb-2">${ ww}</h4 >
  </div>

 </div>
</div>

</div>

`
 }
 
 }
  

document.getElementById('row-date').innerHTML=cartona
 }