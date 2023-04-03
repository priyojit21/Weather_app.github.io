
let API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

let form = document.querySelector("form");
let search = document.querySelector("#search");

const getWeather = (city) => { // accept the city name which we provide in search box
    let p = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    p.then((res) => {
        return res.json();
    }).then((data) => {
        //    console.log(data); // to see in console i.e amader api data gulo thik ashche kina
        return showWeather(data);
    })
}

function showWeather(data) {
    console.log(data); // to show full api data in console in form of json(optional line)
    // getting each id and changing it
    let temp = document.getElementById('temp');
    temp.innerText = `${data.main.temp} °C`;
    let type = document.getElementById('type');
    type.innerText = `${data.weather[0].main}`;
    let humid = document.getElementById('humid');
    humid.innerHTML = `Humidity : ${data.main.humidity}`;
    let speed = document.getElementById('speed');
    speed.innerHTML = `Wind-Speed : ${data.wind.speed}`;
    let feel = document.getElementById('feel');
    feel.innerHTML = `Feels-Like : ${data.main.feels_like}`;
    let press = document.getElementById('press');
    press.innerHTML = `Pressure : ${data.main.pressure}`;

    // changing background-img dynammically according to weather-type

    if (type.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('./images/sunny.jpg')";
    }
    else if(type.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('./images/cloudy.avif')";
    }
    else if(type.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('./images/rain.webp')"; 
    }
    else if(type.textContent == 'Haze'){
        document.body.style.backgroundImage = "url('./images/haze.webp')";
    }
    else if(type.textContent == 'Storm'){
        document.body.style.backgroundImage = "url('./images/storm.jpg')";
    }
    else if(type.textContent == 'Snow'){
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    }
}

form.addEventListener("submit", function (event) {
    getWeather(search.value);
    event.preventDefault(); // prevent turant reload of form after submission
})

// we can also write the getWeather function like this i.e like a function and not a const

// function getWeather(city){                           // accept the city name which we provide in search box
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
//     .then(data  => {
//       return data.json();
//     }).then(showWeather);
//   }