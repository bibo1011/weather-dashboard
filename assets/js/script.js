
// search 
function citySearch (){
    var searchCity = document.querySelector("#city").value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&appid=7cb9d1b9e692149f5ce8f4913f261ae6')
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){
        console.log(response);
    })

    // history
    localStorage.setItem("city", searchCity);
    console.log(searchCity);
    // document.getElementById("history-container").innerHTML = searchCity;
    
    // var x = document.createElement("P");
    // var t = document.createTextNode(searchCity);
    // x.appendChild(t);
    // document.body.div.div.div.appendChild(x);

    document.getElementById("history").innerHTML +=
    "<div> <div class=\"p\">" + searchCity
   
    







    // var showHistory = localStorage.getItem("city");

    
    // var ssearchHistory = document.createElement("li")
    // ssearchHistory.style.
    // ssearchHistory.setAttribute('src', searchCity)
}
