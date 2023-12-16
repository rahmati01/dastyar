const weaderUrl =
	"https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light";

const temperature = document.querySelector(".temperature");
const weatherText = document.querySelector(".weather-sentence");
const weatherMaxMin = document.querySelector(".max-min");

const fetchWeather = async () => {
	const response = await fetch(weaderUrl);
	const data = await response.json();

	temperature.innerHTML = ` <div class="temperature">
                        <p>${data[0].current}</p>
                        <i class='bx bx-cloud-snow'></i>
                    </div>`;

	weatherText.innerHTML = `<p class="weather-sentence">${data[0].customDescription.text}<i>${data[0].customDescription.emoji}</i></p>`;
	weatherMaxMin.innerHTML = `<p class="max-min">حداکثر: ${data[0].max}  حداقل:${data[0].min}</p>`;
};

setInterval(fetchWeather(), 30000);
