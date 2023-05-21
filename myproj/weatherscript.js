
const getWeatherData = (city) => {
  
    
    
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '845cbae0d6msh17b3e584432f336p1dc529jsn442a8c43e568',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };
  
  
  return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err));
  
   
  }
  
  
  const searchCity = async() => {
    const city = document.getElementById('city-input').value;
    console.log(city)
    const data=await getWeatherData(city)
    showWeatherData(data)
   
  
  }
  
 
  const showWeatherData = (weatherData) => {
    
    console.log(weatherData)
    console.log(weatherData.main.temp)
    document.getElementById('country').innerText=weatherData.sys.country
    document.getElementById('humidity').innerText=weatherData.main.humidity
    document.getElementById('temp').innerText=weatherData.main.temp
    document.getElementById('city-name').innerText=weatherData.name
    document.getElementById('weather-type').innerText=weatherData.weather[0].main
    document.getElementById('min-temp').innerText=weatherData.main.temp_min
    document.getElementById('max-temp').innerText=weatherData.main.temp_max
    
  }
  
  