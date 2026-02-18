import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

// fetch(
//   "https://api.open-meteo.com/v1/forecast?latitude=6.4541&longitude=3.3947&daily=sunrise,sunset,uv_index_max&hourly=temperature_2m,visibility,wind_speed_180m,relative_humidity_2m&timezone=Africa%2FCairo&utm_source=chatgpt.com",
// )
fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=6.4541&longitude=3.3947&daily=uv_index_max,sunrise,sunset,relative_humidity_2m_mean,weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m&hourly=temperature_2m,visibility,wind_speed_120m&current=relative_humidity_2m&timezone=Africa%2FCairo&current=weather_code",
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    renderWeather(data);
  });

const today = dayjs();
const presentTime24hrs = today.$H - 1;
console.log(today.$H, presentTime24hrs);

function renderWeather(data) {
  for (let i = 0; i < data.daily.time.length; i++) {
    const days = data.daily.time[i];
    const uvindex = data.daily.uv_index_max[i];

    console.log("date", days, "uv", uvindex);
  }

  const windStatus = data.hourly.wind_speed_120m[presentTime24hrs];
  const sunrise = data.daily.sunrise[0].split("T")[1];
  const sunset = data.daily.sunset[0].split("T")[1];

  const humidity = data.daily.relative_humidity_2m_mean[0];
  const visibility = data.hourly.visibility[presentTime24hrs];
  const temperature = data.hourly.temperature_2m[presentTime24hrs];
  const weatherCode = data.current.weather_code;
  const minTempPerday = data.daily.temperature_2m_min[0];
  const maxTempPerday = data.daily.temperature_2m_max[0];

  const weatherLookup = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    61: "Slight rain",
  };
  const conditionText = weatherLookup[weatherCode];
  console.log(conditionText);
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
}

//DATE AND UV GOTTEN
// WIND STATUS GOTTEN
//SUNRISE AND SUNSET
//HUMIDITY
