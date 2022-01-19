function fetchWeather(){
    let cityName=place.value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5a210c3b0ed22223b2a5d19b5a3879f1&units=metric`).
    then(res=>{
        if(res.ok){
            return res.json()
        }else{
            throw new Error("cant fetch data from resource")
        }
    }).then(data=>display(data)).
    catch(err=>alert(err))    
}

function display(data){
    console.log(data.weather[0].icon);
    let cityName=data.name
    let temperature=data.main.temp
    let minTemperature=data.main.temp_min
let maxTemperature=data.main.temp_max
let pressure=data.main.pressure
let humidity=data.main.humidity
let weather=data.weather[0].main

let html_data=`<div class="card" style="width: 18rem;">
<img class="card-img-top" src="https://nordicapis.com/wp-content/uploads/5-Best-Free-and-Paid-Weather-APIs-2019-e1587582023501.png" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">City Name:${cityName}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Temperature:${temperature}</li>
  <li class="list-group-item">minTemperature:${minTemperature}</li>
  <li class="list-group-item">maxTemperature:${maxTemperature}</li>
  <li class="list-group-item">pressure:${pressure}</li>
  <li class="list-group-item">humidity:${humidity}</li>
  <li class="list-group-item">weather:${weather}</li>


</ul>
</div>`
document.querySelector("#Result").innerHTML=html_data
}


