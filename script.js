console.log("js funkar");
const knapp = document.querySelector('button');
const stadInput = document.querySelector('#stadInput');
const meddelande = document.querySelector('#meddelande');
const vädret = document.querySelector('#vädret');
/* alt:
const knapp = document.getElementById('sökKnapp');
const stadInput = document.getElementById('stadInput');
etc..
*/

// min API-nyckel som jag fick på OpenWeather-sidan
const apiKey = "45608c70e9d427901d32021a61834513";

// en funktion till knappen som utförs vid klick.
// async function() betyder att funktionen får använda await.
// dvs: vissa saker tar tid, tex att hämta data från internet, 
// då använder man async och await.
knapp.addEventListener('click', async function() {

    const stad = stadInput.value.trim();
    console.log(stad);

    if (stad === "") {
        meddelande.innerText = "Jag kan inte läsa tankar, skriv in en stad. 🤷🏼‍♀️";
        // tömmer gammalt innehåll
        vädret.innerHTML = "";
        return;  // return -> stoppar koden från att gå vidare 
        // dvs om användaren inte skriver nått, visa felmeddelande och gör inget mer.
    }

    meddelande.innerText = '';
    console.log('Stad att söka efter:', stad);
    vädret.innerHTML = '';

    // här byggs webbadressen till geocoding API
    // q=${stad} -> stadens namn, limit=1 -> ta bara första träffen, appid=${apiKey} -> min API-nyckel
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${stad}&limit=1&appid=${apiKey}`;

    try {
        // await fetch(geoUrl) -> hämta data från internet
        const response = await fetch(geoUrl);
        // svar från API kommer i JSON-format, här gör jag om svaret till JavaScript-data.
        const data = await response.json();
        console.log(data);

        if (data.length === 0) {
            meddelande.innerText = 'Hmmm,, 🤔 kolla nu så du stavade rätt.';
            return;
        }

        const lat = data[0].lat;
        const lon = data[0].lon;
        const stadNamn = data[0].name;

        // här byggs webbadressen till väder-Url:en Den använder:
        // lat, lon, apiKey, units=metric, units=metric visar temperaturen i celsius
        const väderUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        const väderSvar = await fetch(väderUrl);
        const väderData = await väderSvar.json();

        console.log('latitud:', lat);
        console.log('longitud:', lon);
        console.log(väderData);


        const beskrivning = väderData.weather[0].description;
        const temp = väderData.main.temp;
        const vind = väderData.wind.speed;
        const iconCode = väderData.weather[0].icon;

        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        vädret.innerHTML = `
            <h2>${stadNamn}</h2>
            <p>Beskrivning: ${beskrivning}</p>
            <p>Temperatur: ${temp} °C</p>
            <p>Vindhastighet: ${vind} m/s</p>
            <img src='${iconUrl}' alt='${beskrivning}'>
            `;

        // try/catch - prova kör koden, om fel visa felmeddelande. 
    } catch (bippbopp) {
        message.innerText = 'Fel när data skulle hämtas 😕';
        console.log(bippbopp);
    }
});