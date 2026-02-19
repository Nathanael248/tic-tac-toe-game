import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

// fetch(
//   "https://api.open-meteo.com/v1/forecast?latitude=6.4541&longitude=3.3947&daily=sunrise,sunset,uv_index_max&hourly=temperature_2m,visibility,wind_speed_180m,relative_humidity_2m&timezone=Africa%2FCairo&utm_source=chatgpt.com",
// )
fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=6.4541&longitude=3.3947&daily=uv_index_max,sunrise,sunset,relative_humidity_2m_mean,weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m&hourly=temperature_2m,visibility,wind_speed_120m&current=relative_humidity_2m,apparent_temperature&timezone=Africa%2FCairo&current=weather_code",
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    renderWeather(data);
  });

const today = dayjs();
const presentTimeArray = today.$H - 1;
// console.log(today.$H, presentTimeArray);
// console.log(today);
const dayToday = dayjs().format("dddd");
const presentTime24hrs = today.format("HH:mm");
console.log(dayToday, presentTimeArray);

document.querySelector(".js-day").textContent =
  `${dayToday}, ${presentTime24hrs}`;

function renderWeather(data) {
  for (let i = 0; i < data.daily.time.length; i++) {
    const days = data.daily.time[i];
    const uvindex = data.daily.uv_index_max[i];

    // console.log("date", days, "uv", uvindex);

    const weekDays = today.add(i, "day").format("ddd");
    console.log(weekDays);
    const dayElement = document.querySelector(`.js-today-${i + 1}`);
    dayElement.textContent = weekDays;
  }

  const windStatus = data.hourly.wind_speed_120m[presentTimeArray];
  const sunrise = data.daily.sunrise[0].split("T")[1];
  const sunset = data.daily.sunset[0].split("T")[1];

  const humidity = data.daily.relative_humidity_2m_mean[0];
  const visibility = data.hourly.visibility[presentTimeArray];
  const temperature = data.hourly.temperature_2m[presentTimeArray];
  const weatherCode = data.current.weather_code;
  const minTempPerday = data.daily.temperature_2m_min[0];
  const maxTempPerday = data.daily.temperature_2m_max[0];
  const currentTemp = data.current.apparent_temperature;
  const currentTempReal = currentTemp.toString().split(".")[0];

  document.querySelector(".temp-number").textContent = `${currentTempReal}`;

  const weatherLookup = {
    0: "sun", //clear sky
    1: "mainly clear", //mainly clear
    2: "weather", //partly cloudy
    3: "cloudy", //overcast
    45: "Foggy", //fog
    61: "Slight rain", //slight rain
    63: "rainy-day", //moderate rain
    65: "heavy-rain", //heavy rain
    71: "Slight snow", //slight snow
    73: "snow", //moderate snow
    75: "Heavy snow", //heavy snow
    80: "sudden-rain", //rain showers: slight
    96: "thunderstorm", //thunderstorm: slight or moderate
  };
  const conditionText = weatherLookup[weatherCode];
  console.log(conditionText);

  const weatherImage = document.querySelector(".js-weather-image");
  weatherImage.src = `weather.png`;
  // weatherImage.innerHTML = "HOW";
  // `<img class="weather-image" src=${weatherLookup[weatherCode]}.png />`;
  // `${weatherLookup[weatherCode]}.png`;
  console.log(
    "sunrise",
    sunrise,
    "sunset",
    sunset,
    "humidity",
    humidity,
    "visibility",
    visibility,
    "windstatus",
    windStatus,
    "temperature",
    temperature,
    "C",
    "condition code",
    conditionText,
    "min temp",
    minTempPerday,
    "max temp",
    maxTempPerday,
  );
  console.log(presentTimeArray);
}

//DATE AND UV GOTTEN
// WIND STATUS GOTTEN
//SUNRISE AND SUNSET
//HUMIDITY
