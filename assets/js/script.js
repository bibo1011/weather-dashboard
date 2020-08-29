// search on enter key
var input = document.getElementById("city");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("myBtn").click();
            }
    });
// search on click
function citySearch (){
    var searchCity = document.querySelector("#city").value;
    if (searchCity === '') {
        alert("enter city");
        citySearch();
    }
    

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
        "<div> <div class=\"span\">" + searchCity;

        // weather
        var weatherSrc = response;
        var uvLon = weatherSrc.coord.lon;
        var uvLat = weatherSrc.coord.lat;
        
        document.getElementById("name").innerHTML = 
        "<div> <div class=\"h1\">" + weatherSrc.name;
        document.getElementById("temp").innerHTML = 
        "<div> <div class=\"h5\">" + "Temperature: " + weatherSrc.main.temp + " ℉";
        document.getElementById("humidity").innerHTML = 
        "<div> <div class=\"h5\">" + "Humidity: " + weatherSrc.main.humidity + " %";
        document.getElementById("wind").innerHTML = 
        "<div> <div class=\"h5\">" + "Wind Speed: " + weatherSrc.wind.speed + " mph";
        
        // uv index
        return fetch(
            'https://api.openweathermap.org/data/2.5/uvi?appid=7cb9d1b9e692149f5ce8f4913f261ae6&lat=' + 
            uvLat + '&lon=' + uvLon);
        })
        .then(function(response){
        console.log(response);
        return response.json();
        })
        .then(function(response){
            console.log(response);    
        
        document.getElementById("uv").innerHTML = 
        "<div> <div class=\"h5\">" + "UV Index: " + response.value;

        // 5-day forecast
        document.getElementById("5-day").innerHTML =
        "<div> <div class=\"h2\">" + "5-Day Forecast:";

        })
}

