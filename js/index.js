function weather() {
  let key = "2b6c4af07f57c2ccf98db18010b30054";
  let hot = document.getElementById("hot");
  let temp;
  let time2;
  let weathe2;
  let set;
  let date = new Date();
  let weather = document.getElementById("weathe");
  let city = document.getElementById("txt1");
  let da = document.getElementById("date");
  let val = document.getElementById("val").value;
  let conditoin = document.getElementById("conditoin");

  clearInterval(set);
  set = setInterval(() => {
    let date2 = new Date();
    let tiem = document.getElementById("time");
    let hours = date2.getHours();
    let minutes = date2.getMinutes();
    let formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
    tiem.textContent = `Current Time : ${formattedTime}`;
  }, 1000);
  da.textContent = `Current Date : ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} `;
  city.textContent = `Your Fav city : ${val}`;

  //   console.log(time);
  let prom = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${key}`
  );
  prom
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((data) => {
      weathe2 = document.getElementById("weathe");
      time2 = document.getElementById("time");
      let weatherCondition = data.weather[0];
      let weatherMain = weatherCondition.main;
      let weatherDescription = weatherCondition.description;
      let weatherIcon = weatherCondition.icon;
      conditoin.textContent = `Weather : "${weatherMain}" About the Weather "${weatherDescription}"`;
      temp = Math.round(Number(data.main.temp - 273));
      weather.textContent = `Current Weather : ${temp} °C Stay safe and enjoy your day! 🌤️`;
      if (weatherMain == "rain") {
        hot.textContent =
          "You're in rain! Please wear a raincoat and stay safe ❤️";
      } else if (weatherMain == "clouds") {
        hot.textContent = "Your in chill condition Enjoy the Day 🤗";
      } else if (weatherMain == "mist") {
        hot.textContent = "It's misty! Enjoy the calm and cool weather 🤗";
      } else if (weatherMain == "clear") {
        hot.textContent = `It's a bright sunny day! Enjoy the sunshine 🌞`;
      } else if (weatherMain == "Snow") {
        hot.textContent = `It's snowing! Stay warm and safe ❄️`;
      } else if (weatherMain == "Thunderstorm") {
        hot.textContent = `There is a thunderstorm. Stay safe indoors ⚡`;
      } else if (weatherMain == "Drizzle") {
        hot.textContent = `Light rain is falling. Don't forget your umbrella ☔`;
      } else {
        return;
      }
      console.log(temp);
    })
    .catch(() => {
      console.log("error");
      alert("Please Enter the city name properly");
      city.textContent = "Please Enter the city name properly";
    });
}
