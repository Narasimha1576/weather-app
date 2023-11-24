let inputEle = document.getElementById("location-input");
let tempEle = document.getElementById("temp-value");
let locEle = document.getElementById("Location");
let weatherdescEle = document.getElementById("Weather-desc");
let btnEle = document.getElementById("btn");
const apikey = '28c10645a476eb22b683fcce243c82c1';

btnEle.onclick = function () {
  if (inputEle.value == "") {
    alert("Please Enter some Location");
  } else {
    const loc = inputEle.value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { name } = data;
        const { feels_like } = data.main;
        const { description } = data.weather[0];
        tempEle.innerText = Math.floor(feels_like - 273);
        locEle.innerText = name;
        weatherdescEle.innerText = description;
      })
      .catch(() => {
        alert("Enter a valid location");
      });

    inputEle.value = "";
  }
};
