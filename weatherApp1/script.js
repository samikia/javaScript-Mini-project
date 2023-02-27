let citiesData = {
  tehran: {
    city: "Tehran",
    temp: 12,
    weather: "sunny",
    humidity: 23,
    windSpeed: 32,
  },
  ahwaz: {
    city: "Ahwaz",
    temp: 20,
    weather: "sunny",
    humidity: 40,
    windSpeed: 32,
  },
  shiraz: {
    city: "Shiraz",
    temp: 15,
    weather: "rainy",
    humidity: 7,
    windSpeed: 2,
  },
  isfahan: {
    city: "Esfahan",
    temp: 12,
    weather: "windg",
    humidity: 10,
    windSpeed: 12,
  },
};

let $ = document;
let searchBtn = $.getElementById("search");
let searchBar = $.querySelector(".search-bar");
searchBtn.addEventListener("click", function () {
  let searchBarValue = searchBar.value;
  let mainCityData = citiesData[searchBarValue];
  if (mainCityData) {
    $.querySelector(".weather").classList.remove("loading");
    $.querySelector(".city").innerHTML = "Weather in " + mainCityData.city;
    $.querySelector(".temp").innerHTML = mainCityData.temp + " C";
    $.querySelector("description").innerHTML = mainCityData.weather;
    $.querySelector("humidity").innerHTML =
      "humidity:" + mainCityData.humidity + " %";
    $.querySelector("wind").innerHTML =
      "Wind speed:" + mainCityData.windSpeed + " km/h";
  } else {
    alert("please inseart a correct city name");
  }
});
