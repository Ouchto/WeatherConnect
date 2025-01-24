
const images = {
    cloudy:"images/amcharts_weather_icons_1.0.0/animated/cloudy.svg",
    cloudy_day_3:"images/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg",
    cloudy_night:"images/amcharts_weather_icons_1.0.0/animated/cloudy-night-3.svg",
    day:"images/amcharts_weather_icons_1.0.0/animated/day.svg",
    night:"images/amcharts_weather_icons_1.0.0/animated/night.svg",
    rainy:"images/amcharts_weather_icons_1.0.0/animated/rainy-5.svg",
    drizzle:"images/amcharts_weather_icons_1.0.0/animated/rainy-6.svg",

    snowy:"images/amcharts_weather_icons_1.0.0/animated/snowy-6.svg",
    thunder:"images/amcharts_weather_icons_1.0.0/animated/thunder.svg",
}

const apiKey = "8b8242ca595205c3ca962cba7c8e1e6c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiUrlDaily = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q="

const inputSearch = document.getElementById("input");
const btnSearch = document.getElementById("btnSearch");
const weatherIcon = document.getElementById("weatherIcon");



async function weatherToday(name) {
    
    const response2 = await fetch(apiUrlDaily + name +`&appid=${apiKey}`);

        var dataDaily = await response2.json();
        console.log(dataDaily);
        
        document.getElementById("twelve").innerHTML = Math.round(dataDaily.list[0].main.temp) + "°C";
        document.getElementById("three").innerHTML = Math.round(dataDaily.list[1].main.temp) + "°C";
        document.getElementById("six").innerHTML = Math.round(dataDaily.list[3].main.temp) + "°C";
        document.getElementById("nine").innerHTML = Math.round(dataDaily.list[4].main.temp) + "°C";
        // twelve Image
        if(dataDaily.list[0].weather[0].main == "Clouds"){
            document.getElementById("twelveImage").src = images.cloudy;
            document.getElementById("imgDay").src = images.cloudy;

        }else if(dataDaily.list[0].weather[0].main == "Clear"){
            document.getElementById("twelveImage").src  = images.day;
            document.getElementById("imgDay").src = images.day;

        }else if(dataDaily.list[0].weather[0].main == "Rain"){
            document.getElementById("twelveImage").src  = images.rainy;
            document.getElementById("imgDay").src = images.rainy;

        }else if(dataDaily.list[0].weather[0].main == "Drizzle"){
            document.getElementById("twelveImage").src  = images.drizzle;
            document.getElementById("imgDay").src = images.drizzle;

        }else if(dataDaily.list[0].weather[0].main == "Mist"){
            document.getElementById("twelveImage").src  = images.cloudy_day_3;
            document.getElementById("imgDay").src = images.cloudy_day_3;

        }else{
            document.getElementById("threeImage").src  = images.snowy;
            document.getElementById("imgDay").src = images.snowy;

        }
        // three Image 
        if(dataDaily.list[1].weather[0].main == "Clouds"){
            document.getElementById("threeImage").src = images.cloudy;
        }else if(dataDaily.list[1].weather[0].main == "Clear"){
            document.getElementById("threeImage").src  = images.day;
        }else if(dataDaily.list[1].weather[0].main == "Rain"){
            document.getElementById("threeImage").src  = images.rainy;
        }else if(dataDaily.list[1].weather[0].main == "Drizzle"){
            document.getElementById("threeImage").src  = images.drizzle;
        }else if(dataDaily.list[1].weather[0].main == "Mist"){
            document.getElementById("threeImage").src  = images.cloudy_day_3;
        }else{
            document.getElementById("threeImage").src  = images.snowy;
  
        }

        // six Image

        if(dataDaily.list[2].weather[0].main == "Clouds"){
            document.getElementById("sixImage").src = images.cloudy;
        }else if(dataDaily.list[2].weather[0].main == "Clear"){
            document.getElementById("sixImage").src  = images.day;
        }else if(dataDaily.list[2].weather[0].main == "Rain"){
            document.getElementById("sixImage").src  = images.rainy;
        }else if(dataDaily.list[2].weather[0].main == "Drizzle"){
            document.getElementById("sixImage").src  = images.drizzle;
        }else if(dataDaily.list[2].weather[0].main == "Mist"){
            document.getElementById("sixImage").src  = images.cloudy_day_3;
        }else{
            document.getElementById("sixImage").src  = images.snowy;
        }

        // nine Image
        if(dataDaily.list[3].weather[0].main == "Clouds"){
            document.getElementById("nineImage").src = images.cloudy;
        }else if(dataDaily.list[3].weather[0].main == "Clear"){
            document.getElementById("nineImage").src  = images.day;
            document.getElementById("nineImage").src  = images.rainy;
        }else if(dataDaily.list[3].weather[0].main == "Drizzle"){
            document.getElementById("nineImage").src  = images.drizzle;
        }else if(dataDaily.list[3].weather[0].main == "Mist"){
            document.getElementById("nineImage").src  = images.cloudy_day_3;
        }else{
            document.getElementById("nineImage").src  = images.snowy;
        }
        //-----------------------------------------------DAYS----------------------------------------------------------
        
        document.getElementById("mainDay").innerHTML = dataDaily.list[0].weather[0].main ;
        document.getElementById("mainDay2").innerHTML = dataDaily.list[7].weather[0].main ;
        document.getElementById("mainDay3").innerHTML = dataDaily.list[14].weather[0].main ;
        document.getElementById("mainDay4").innerHTML = dataDaily.list[22].weather[0].main ;
        document.getElementById("mainDay5").innerHTML = dataDaily.list[30].weather[0].main ;
        document.getElementById("mainDay6").innerHTML = dataDaily.list[38].weather[0].main ;


        // Image day 2 

        if(dataDaily.list[7].weather[0].main == "Clouds"){
            document.getElementById("imgDay2").src = images.cloudy;
        }else if(dataDaily.list[7].weather[0].main == "Clear"){
            document.getElementById("imgDay2").src  = images.day;
        }else if(dataDaily.list[7].weather[0].main == "Rain"){
            document.getElementById("imgDay2").src  = images.rainy;
        }else if(dataDaily.list[7].weather[0].main == "Drizzle"){
            document.getElementById("imgDay2").src  = images.drizzle;
        }else if(dataDaily.list[7].weather[0].main == "Mist"){
            document.getElementById("imgDay2").src  = images.cloudy_day_3;
        }else{
            document.getElementById("imgDay2").src  = images.snowy;
        }
        
        // Image day 3

        if(dataDaily.list[14].weather[0].main == "Clouds"){
            document.getElementById("imgDay3").src = images.cloudy;
        }else if(dataDaily.list[14].weather[0].main == "Clear"){
            document.getElementById("imgDay3").src  = images.day;
        }else if(dataDaily.list[14].weather[0].main == "Rain"){
            document.getElementById("imgDay3").src  = images.rainy;
        }else if(dataDaily.list[14].weather[0].main == "Drizzle"){
            document.getElementById("imgDay3").src  = images.drizzle;
        }else if(dataDaily.list[14].weather[0].main == "Mist"){
            document.getElementById("imgDay3").src  = images.cloudy_day_3;
        }else{
            document.getElementById("imgDay3").src  = images.snowy;
        }

        // Image day 4 

        if(dataDaily.list[22].weather[0].main == "Clouds"){
            document.getElementById("imgDay4").src = images.cloudy;
        }else if(dataDaily.list[22].weather[0].main == "Clear"){
            document.getElementById("imgDay4").src  = images.day;
        }else if(dataDaily.list[22].weather[0].main == "Rain"){
            document.getElementById("imgDay4").src  = images.rainy;
        }else if(dataDaily.list[22].weather[0].main == "Drizzle"){
            document.getElementById("imgDay4").src  = images.drizzle;
        }else if(dataDaily.list[22].weather[0].main == "Mist"){
            document.getElementById("imgDay4").src  = images.cloudy_day_3;
        }else{
            document.getElementById("imgDay4").src  = images.snowy;
        }

        // Image day 5 
        if(dataDaily.list[30].weather[0].main == "Clouds"){
            document.getElementById("imgDay5").src = images.cloudy;
        }else if(dataDaily.list[30].weather[0].main == "Clear"){
            document.getElementById("imgDay5").src  = images.day;
        }else if(dataDaily.list[30].weather[0].main == "Rain"){
            document.getElementById("imgDay5").src  = images.rainy;
        }else if(dataDaily.list[30].weather[0].main == "Drizzle"){
            document.getElementById("imgDay5").src  = images.drizzle;
        }else if(dataDaily.list[30].weather[0].main == "Mist"){
            document.getElementById("imgDay5").src  = images.cloudy_day_3;
        }else{
            document.getElementById("imgDay5").src  = images.snowy;
        }

        // Image day 6 
        if(dataDaily.list[38].weather[0].main == "Clouds"){
            document.getElementById("imgDay6").src = images.cloudy;
        }else if(dataDaily.list[38].weather[0].main == "Clear"){
            document.getElementById("imgDay6").src  = images.day;
        }else if(dataDaily.list[38].weather[0].main == "Rain"){
            document.getElementById("imgDay6").src  = images.rainy;
        }else if(dataDaily.list[38].weather[0].main == "Drizzle"){
            document.getElementById("imgDay6").src  = images.drizzle;
        }else if(dataDaily.list[38].weather[0].main == "Mist"){
            document.getElementById("imgDay6").src  = images.cloudy_day_3;
        }else{
            document.getElementById("imgDay6").src  = images.snowy;
        }



        const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];


        const date = new Date();
        let jour = weekday[date.getDay()];

        todayIndex = weekday.indexOf(jour);
        const newDays = weekday.slice(todayIndex + 1 ,weekday.length).concat(weekday.slice(0,todayIndex - 1));

        
        console.log(newDays);

        let daysElements = document.querySelectorAll('.dayElement');

        daysElements.forEach((element,index) =>{
            element.innerHTML = newDays[index];
        })

}
        



async function Weather(city) {
    
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.getElementById("error").style.display = 'block';
    }else{
        var data = await response.json();

        document.getElementById("error").style.display = 'none';
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("daraja").innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById("reelFeel").innerHTML = Math.round(data.main.feels_like) + "°C";
        document.getElementById("humidity").innerHTML = Math.round(data.main.humidity) + " %";
        document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = images.cloudy;
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = images.day;
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = images.rainy;
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = images.drizzle;
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = images.cloudy_day_3;
        }else{
            weatherIcon.src = images.snowy
        }
    }



}

btnSearch.addEventListener("click", () => {
    weatherToday(inputSearch.value);
    Weather(inputSearch.value);
})


























