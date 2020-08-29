
// search 
function citySearch (){
    var searchCity = document.querySelector("#city").value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&units=imperial&appid=7cb9d1b9e692149f5ce8f4913f261ae6')
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){
        console.log(response);
    

        // history
        localStorage.setItem("city", searchCity);
        console.log(searchCity);
        document.getElementById("history").innerHTML +=
        "<div> <div class=\"p\">" + searchCity;

        // weather
        var weatherSrc = response;
        var uvLon = weatherSrc.coord.lon;
        var uvLat = weatherSrc.coord.lat;
        
        document.getElementById("name").innerHTML = 
        "<div> <div class=\"h1\">" + weatherSrc.name;
        document.getElementById("temp").innerHTML = 
        "<div> <div class=\"h3\">" + "Temperature: " + weatherSrc.main.temp + " ℉";
        document.getElementById("humidity").innerHTML = 
        "<div> <div class=\"h3\">" + "Humidity: " + weatherSrc.main.humidity + " %";
        document.getElementById("wind").innerHTML = 
        "<div> <div class=\"h3\">" + "Wind Speed: " + weatherSrc.wind.speed + " mph";
        
        // return fetch('https://api.openweathermap.org/data/2.5/uvi?lat=' + uvLat + '&lon=' + uvLon + '/weather?q=' + searchCity + '&units=imperial&appid=7cb9d1b9e692149f5ce8f4913f261ae6')
        // .then(function(response){
        //     console.log(response);
        //     return response.json();
        // })
        // .then(function(response){
        //     console.log(response);    
        
        // document.getElementById("uv").innerHTML = 
        // "<div> <div class=\"h3\">" + "UV Index: " + response.value;

        // })
    })
    // document.querySelector("#weather").appendChild(weatherSrc);
    // document.getElementById("weather").innerHTML =
    // "<div> <div class=\"p\">" + weatherSrc;
    
    // var x = document.createElement("P");
    // var t = document.createTextNode(searchCity);
    // x.appendChild(t);
    // document.body.div.div.div.appendChild(x);

    
   
    







    // var showHistory = localStorage.getItem("city");

    
    // var ssearchHistory = document.createElement("li")
    // ssearchHistory.style.
    // ssearchHistory.setAttribute('src', searchCity)
}
