const button = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
const nameInput = document.querySelector('.name');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const temp = document.querySelector('.temp');
const forecastDayTwo = document.querySelector(".forecastDay2");
const forecastH1 = document.querySelector(".forecastH1");
const weatherIcon = document.querySelector(".weatherIcon");
const forecastDescription = document.querySelector(".forecastDescription");
const forecastHumidity = document.querySelector(".forecastHumidity");
const forecastIcon = document.querySelector(".forecastIcon");
const today = document.querySelector(".today");
const tomorrow = document.querySelector(".tomorrow");
const weeklyForecastTxt = document.querySelector(".weeklyForecastTxt");
const weeklyForecastSearch = document.querySelector(".weeklyForecastSearch");
const weeklyForecastDescription3 = document.querySelector(".weeklyForecastDescription3");
const weeklyForecastDescription4 = document.querySelector(".weeklyForecastDescription4");
const weeklyForecastDescription5 = document.querySelector(".weeklyForecastDescription5");
const weeklyThirdDay = document.querySelector(".weeklyThirdDay");
const weeklyFourthDay = document.querySelector(".weeklyFourthDay");
const weeklyFifthDay = document.querySelector(".weeklyFifthDay");
const forecastIcon3 = document.querySelector(".forecastIcon3");
const forecastIcon4 = document.querySelector(".forecastIcon4");
const forecastIcon5 = document.querySelector(".forecastIcon5");


button.addEventListener('click', function() {
    $('body').css("background-image", `url("")`);
    renderImage();
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=a1defeaa1aba1697435b986b6773c5de')
.then(response => response.json())
.then(data => {
    console.log(data);
    let nameValue = data.name;
    let tempValue = data.main.temp;
    let descValue = data.weather[0].description;
    let humidityValue = data.main.humidity; 
    let latCoord = data.coord.lat;
    let lonCoord = data.coord.lon;
    let fahrenheit = (tempValue - 273.15) * 9 / 5 + 32;
    let correctFahrenheit = fahrenheit.toFixed(0);
    let weatherIconData = data.weather[0].icon;

    today.innerHTML = "Today ";
    nameInput.innerHTML = nameValue;
    temp.innerHTML = correctFahrenheit + "&#8457";
    description.innerHTML = descValue.toUpperCase();
    humidity.innerHTML = "Humidity " + humidityValue + "%";
    $('.weatherIcon').attr('src', 'http://openweathermap.org/img/wn/'+weatherIconData+'@2x.png');
            

    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+latCoord+'&lon='+lonCoord+'&exclude=hourly,minutely&appid=a1defeaa1aba1697435b986b6773c5de')
    .then(resp => resp.json())
    .then(forecastData => {
        console.log(forecastData);
        let forecastDayTwoValue = forecastData.daily[0].temp.day;
        let forecastDescriptionValue = forecastData.daily[0].weather[0].description;
        let forecastHumidityValue = forecastData.daily[0].humidity;
        let forecastIconData = forecastData.daily[0].weather[0].icon;
        let forecastIconData3 = forecastData.daily[1].weather[0].icon;
        let forecastIconData4 = forecastData.daily[2].weather[0].icon;
        let forecastIconData5 = forecastData.daily[3].weather[0].icon;



        function fahrenheitSet(x) {
        return (x - 273.15) * 9 / 5 + 32;
        }
        tomorrow.innerHTML = "Tomorrow "
        forecastH1.innerHTML = nameValue;
        forecastDayTwo.innerHTML = fahrenheitSet(forecastDayTwoValue).toFixed(0) + "&#8457";
        forecastDescription.innerHTML = forecastDescriptionValue.toUpperCase();
        forecastHumidity.innerHTML = "Humidity " + forecastHumidityValue + "%";
        $('.forecastIcon').attr('src', 'http://openweathermap.org/img/wn/'+forecastIconData+'@2x.png');

        weeklyForecastTxt.innerHTML = "Weekly Outlook ";
        weeklyForecastDescription3.innerHTML = "Day 3: " + forecastData.daily[1].weather[0].description.toUpperCase();
        weeklyForecastDescription4.innerHTML = "Day 4: " + forecastData.daily[2].weather[0].description.toUpperCase();
        weeklyForecastDescription5.innerHTML = "Day 5: " + forecastData.daily[3].weather[0].description.toUpperCase();
        weeklyThirdDay.innerHTML = fahrenheitSet(forecastData.daily[1].temp.day).toFixed(0) + "&#8457";
        weeklyFourthDay.innerHTML = fahrenheitSet(forecastData.daily[2].temp.day).toFixed(0) + "&#8457";
        weeklyFifthDay.innerHTML = fahrenheitSet(forecastData.daily[3].temp.day).toFixed(0) + "&#8457";
        $('.forecastIcon3').attr('src', 'http://openweathermap.org/img/wn/'+forecastIconData3+'@2x.png');
        $('.forecastIcon4').attr('src', 'http://openweathermap.org/img/wn/'+forecastIconData4+'@2x.png');
        $('.forecastIcon5').attr('src', 'http://openweathermap.org/img/wn/'+forecastIconData5+'@2x.png');
    })
.catch(error => console.error(error))
})
  

function renderImage() {
    fetch("https://api.unsplash.com/search/photos?page=1&query="+inputValue.value+'&client_id=2TGPy7eqrrXFN-oJlxY_6JC5jVzGh7W_KzOulvBKX5w')
    .then(response => response.json())
    .then(data => {
        console.log(data);


    let photoSearchArray = [
        data.results[8].urls.regular,
        data.results[7].urls.regular,
        data.results[6].urls.regular,
        data.results[5].urls.regular,
        data.results[4].urls.regular,
        data.results[3].urls.regular,
        data.results[2].urls.regular,
        data.results[1].urls.regular,
        data.results[0].urls.regular,
    ]   
    let randomSearch = Math.floor(Math.random() * 10);
    console.log(randomSearch);
    let photoSearch = photoSearchArray[randomSearch];
    $('body').css("background-image", `url(${photoSearch})`);
    $('body').css("background-repeat", "no-repeat").css("background-size", "cover").css("background-position", "0% 0%");
    $('.display').css("background-image", `url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/weather-forecast-geometric-background-nessikk.jpg")`).css("opacity", "1.0");
    $('.forecastDisplay').css("background-image", `url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/weather-forecast-geometric-background-nessikk.jpg")`).css("opacity", "1.0");
    $('.weeklyForecast').css("background-image", `url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/weather-forecast-geometric-background-nessikk.jpg")`).css("opacity", "1.0");

    }
     )}
});
