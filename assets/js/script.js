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
        cleaInputs();
        citySearch();
    }
    

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&units=imperial&appid=7cb9d1b9e692149f5ce8f4913f261ae6')
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){
        console.log(response.weather[0].icon);
    

        // history
        localStorage.setItem("city", searchCity);
        console.log(searchCity);
        document.getElementById("history").innerHTML +=
        "<div> <div class=\"span\">" + searchCity;

        // weather
        var weatherSrc = response;
        var uvLon = weatherSrc.coord.lon;
        var uvLat = weatherSrc.coord.lat;
        var currentDate = moment().format("MM/DD/YYYY");
        console.log(currentDate);
       
        // var iconImg = document.createElement('img')
        
        
        // var val = document.getElementById('imagename').value,
        //         src = 'http://webpage.com/images/' + val +'.png',
        //         img = document.createElement('img');

        //     img.src = src;
        //     document.body.appendChild(img);

        
        var iconEl  = document.createElement('img');
        var iconSrc = weatherSrc.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconSrc + ".png";
        iconEl.setAttribute('img', iconSrc);
        document.querySelector('#name').innerHTML = iconUrl;
        document.querySelector('#name').appendChild(iconEl);

        document.getElementById("name").style.color = "blue"
        document.getElementById("name").innerHTML = 
        "<div> <div class=\"h1\">" + weatherSrc.name + ' (' + currentDate + ') ';
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
            
        if (response.value <= 2.99){
            var uv = document.createElement("h5");
            var uvIndex = response.value;
            uv.setAttribute("h5", uvIndex);
            document.getElementById("uv").innerHTML = "UV Index: " + uvIndex;
            document.getElementById("uv").appendChild(uv)
            document.getElementById("uv").style.fontSize = "20px";  
            document.getElementById("uv").style.backgroundColor = "green";  
        } else if (response.value >= 3 && response.value <= 5.99) {
            var uv = document.createElement("h5");
            var uvIndex = response.value;
            uv.setAttribute("h5", uvIndex);
            document.getElementById("uv").innerHTML = "UV Index: " + uvIndex;
            document.getElementById("uv").appendChild(uv)
            document.getElementById("uv").style.fontSize = "20px";  
            document.getElementById("uv").style.backgroundColor = "yellow";  
        } else if (response.value >= 6 && response.value <= 7.99) {
            var uv = document.createElement("h5");
            var uvIndex = response.value;
            uv.setAttribute("h5", uvIndex);
            document.getElementById("uv").innerHTML = "UV Index: " + uvIndex;
            document.getElementById("uv").appendChild(uv)
            document.getElementById("uv").style.fontSize = "20px";  
            document.getElementById("uv").style.backgroundColor = "orange";  
        } else if (response.value >= 8 && response.value <= 10.99) {
            var uv = document.createElement("h5");
            var uvIndex = response.value;
            uv.setAttribute("h5", uvIndex);
            document.getElementById("uv").innerHTML = "UV Index: " + uvIndex;
            document.getElementById("uv").appendChild(uv)
            document.getElementById("uv").style.fontSize = "20px";  
            document.getElementById("uv").style.backgroundColor = "red";  
        } else if (response.value >= 11){
            var uv = document.createElement("h5");
            var uvIndex = response.value;
            uv.setAttribute("h5", uvIndex);
            document.getElementById("uv").innerHTML = "UV Index: " + uvIndex;
            document.getElementById("uv").appendChild(uv)
            document.getElementById("uv").style.fontSize = "20px";  
            document.getElementById("uv").style.backgroundColor = "purple"; 
        }
        //  not color-coded uv index
        // document.getElementById("uv").innerHTML 
        // = "<div> <div class=\"h5\">" + "UV Index: " + response.value;

        // fiveDay forecast
        document.getElementById("fiveDay").style.color = "grey"
        document.getElementById("fiveDay").innerHTML =
        "<div> <div class=\"h2\">" + "5-Day Forecast:";

        })
        return fetch(
            'https://api.openweathermap.org/data/2.5/forecast?q=' + searchCity + '&units=imperial&appid=7cb9d1b9e692149f5ce8f4913f261ae6'
        )
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function(response){
            console.log(response)
        
        // day 1 forcast
        // date
        var date = document.createElement("p");
        var dateAdd0 = moment().add(1,'days');
        var dateSrc0 = dateAdd0.format('MM/DD/YYYY');
        date.setAttribute("p", dateSrc0);
        document.querySelector('#date0').innerHTML = dateSrc0;
        document.querySelector("#date0").appendChild(date);

        // clouds 
        var clouds = document.createElement("p");
        var cloudsSrc = response.list[0].clouds;
        clouds.setAttribute("p", cloudsSrc);
        document.querySelector('#clouds0').innerHTML = cloudsSrc;
        document.querySelector('#clouds0').appendChild(date);
            
        // temp 
        var temp = document.createElement("p");
        var tempSrc = response.list[0].main.temp;
        temp.setAttribute("p", tempSrc);
        document.querySelector('#temp0').innerHTML = tempSrc + " ℉";
        document.querySelector('#temp0').appendChild(date);
            
        // humidity 
        var humidity = document.createElement("p");
        var humiditySrc = response.list[0].main.humidity;
        humidity.setAttribute("p", humiditySrc);
        document.querySelector('#humidity0').innerHTML = humiditySrc + " %";
        document.querySelector('#humidity0').appendChild(date);
        
        // day 2 forecast
        // date 
        var date = document.createElement("p");
        var dateAdd1 = moment().add(2,'days');
        var dateSrc1 = dateAdd1.format('MM/DD/YYYY');
        date.setAttribute("p", dateSrc1);
        document.querySelector('#date1').innerHTML = dateSrc1;
        document.querySelector("#date1").appendChild(date);

        // clouds 
        var clouds = document.createElement("p");
        var cloudsSrc = response.list[1].clouds;
        clouds.setAttribute("p", cloudsSrc);
        document.querySelector('#clouds1').innerHTML = cloudsSrc;
        document.querySelector('#clouds1').appendChild(date);
            
        // temp 
        var temp = document.createElement("p");
        var tempSrc = response.list[1].main.temp;
        temp.setAttribute("p", tempSrc);
        document.querySelector('#temp1').innerHTML = tempSrc + " ℉";
        document.querySelector('#temp1').appendChild(date);
            
        // humidity 
        var humidity = document.createElement("p");
        var humiditySrc = response.list[1].main.humidity;
        humidity.setAttribute("p", humiditySrc);
        document.querySelector('#humidity1').innerHTML = humiditySrc + " %";
        document.querySelector('#humidity1').appendChild(date);

        // day 3 forecast
        // date 
        var date = document.createElement("p");
        var dateAdd2= moment().add(3,'days');
        var dateSrc2 = dateAdd2.format('MM/DD/YYYY');        
        date.setAttribute("p", dateSrc2);
        document.querySelector('#date2').innerHTML = dateSrc2;
        document.querySelector("#date2").appendChild(date);

        // clouds 
        var clouds = document.createElement("p");
        var cloudsSrc = response.list[2].clouds;
        clouds.setAttribute("p", cloudsSrc);
        document.querySelector('#clouds2').innerHTML = cloudsSrc;
        document.querySelector('#clouds2').appendChild(date);
            
        // temp 
        var temp = document.createElement("p");
        var tempSrc = response.list[2].main.temp;
        temp.setAttribute("p", tempSrc);
        document.querySelector('#temp2').innerHTML = tempSrc + " ℉";
        document.querySelector('#temp2').appendChild(date);
            
        // humidity 
        var humidity = document.createElement("p");
        var humiditySrc = response.list[2].main.humidity;
        humidity.setAttribute("p", humiditySrc);
        document.querySelector('#humidity2').innerHTML = humiditySrc + " %";
        document.querySelector('#humidity2').appendChild(date);

        // day 4 forecast
        // date 
        var date = document.createElement("p");
        var dateAdd3= moment().add(4,'days');
        var dateSrc3 = dateAdd3.format('MM/DD/YYYY');        
        date.setAttribute("p", dateSrc3);
        document.querySelector('#date3').innerHTML = dateSrc3;
        document.querySelector("#date3").appendChild(date);

        // clouds 
        var clouds = document.createElement("p");
        var cloudsSrc = response.list[3].clouds;
        clouds.setAttribute("p", cloudsSrc);
        document.querySelector('#clouds3').innerHTML = cloudsSrc;
        document.querySelector('#clouds3').appendChild(date);
            
        // temp 
        var temp = document.createElement("p");
        var tempSrc = response.list[3].main.temp;
        temp.setAttribute("p", tempSrc);
        document.querySelector('#temp3').innerHTML = tempSrc + " ℉";
        document.querySelector('#temp3').appendChild(date);
            
        // humidity 
        var humidity = document.createElement("p");
        var humiditySrc = response.list[3].main.humidity;
        humidity.setAttribute("p", humiditySrc);
        document.querySelector('#humidity3').innerHTML = humiditySrc + " %";
        document.querySelector('#humidity3').appendChild(date);

        // day 5 forecast
        // date 
        var date = document.createElement("p");
        var dateAdd4= moment().add(5,'days');
        var dateSrc4 = dateAdd4.format('MM/DD/YYYY');        
        date.setAttribute("p", dateSrc4);
        document.querySelector('#date4').innerHTML = dateSrc4;
        document.querySelector("#date4").appendChild(date);

        // clouds 
        var clouds = document.createElement("p");
        var cloudsSrc = response.list[4].clouds;
        clouds.setAttribute("p", cloudsSrc);
        document.querySelector('#clouds4').innerHTML = cloudsSrc;
        document.querySelector('#clouds4').appendChild(date);
            
        // temp 
        var temp = document.createElement("p");
        var tempSrc = response.list[4].main.temp;
        temp.setAttribute("p", tempSrc);
        document.querySelector('#temp4').innerHTML = tempSrc + " ℉";
        document.querySelector('#temp4').appendChild(date);
            
        // humidity 
        var humidity = document.createElement("p");
        var humiditySrc = response.list[4].main.humidity;
        humidity.setAttribute("p", humiditySrc);
        document.querySelector('#humidity4').innerHTML = humiditySrc + " %";
        document.querySelector('#humidity4').appendChild(date);
       
    })

}

