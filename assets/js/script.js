// Set-Cookie: __cfduid=d519cd78113d4f0674d45c26bf3efc9531571611678; SameSite=None
// var getCityRepos = function(city){
//     var cityEl = document.getElementById("#city").value;

//     //format openweather url
//     var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=7cb9d1b9e692149f5ce8f4913f261ae6";
//     // make a request to the url
//     fetch(apiUrl).then(function(response){
//         response.json()
//         .then(function(data){
//             displayRepos(data, city);
//         });
//         console.log(response);
//     });
// };
function myFunction (){
    
    var searchCity = document.querySelector("#city").value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&appid=7cb9d1b9e692149f5ce8f4913f261ae6')
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){
        console.log(response);
    })
}
// var cityFormEl = document.querySelector("#city-form");

// var formSubmitHandler = function(event){

//     event.preventDefault();
//     //get value of input element
//     var city = cityInputEl.value.trim();

//     if (city) {
//     getCityRepos(city);
//     cityInputEl.value = "";
//     } else {
//     alert("Please enter a city");
//     }
//     console.log(event);
    
// }
// cityFormEl.addEventListener('submit', formSubmitHandler);