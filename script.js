window.onload = async () => {
  // Weather (Quito)
  const weatherCard = document.getElementById("weather-card");
  try {
    const weatherRes = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-0.23&longitude=-78.52&current_weather=true");
    const weatherData = await weatherRes.json();
    const w = weatherData.current_weather;
    weatherCard.innerHTML = `🌤️ Weather in Quito<br>Temp: ${w.temperature}°C<br>Wind: ${w.windspeed} km/h`;
  } catch {
    weatherCard.innerText = "⚠️ Failed to load weather data.";
  }

  // Crypto
  const cryptoCard = document.getElementById("crypto-card");
  try {
    const cryptoRes = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
    const cryptoData = await cryptoRes.json();
    cryptoCard.innerHTML = `💰 Bitcoin Price<br>$${cryptoData.bitcoin.usd} USD`;
  } catch {
    cryptoCard.innerText = "⚠️ Failed to load crypto data.";
  }

  // Joke
  const jokeCard = document.getElementById("joke-card");
  try {
    const jokeRes = await fetch("https://official-joke-api.appspot.com/random_joke");
    const jokeData = await jokeRes.json();
    jokeCard.innerHTML = `😂 ${jokeData.setup}<br><em>${jokeData.punchline}</em>`;
  } catch {
    jokeCard.innerText = "⚠️ Failed to load joke.";
  }
};
