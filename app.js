async function fetchData(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=1ea453f5501c528eb93b8765879e5373')
    const data = await response.json()
    console.log(data)
    return data
}

async function outputWeather(){
    const data = await fetchData()
    console.log(`Широта: ${data.coord.lat}`)
    console.log(`Долгота: ${data.coord.lon}`)
    console.log(`Температура: ${(data.main.temp-273).toFixed(2)} градусов цельсия`)
    console.log(`Влажность: ${data.main.humidity}%`)
    console.log(`Местоположение: ${data.name}`)
    console.log(`Погода: ${data.weather[0].description}`)
    console.log(`Скорость ветра: ${data.wind.speed} м/с`)
}

outputWeather()