const currentyear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentyear;

document.getElementById("lastModified").textContent = document.lastModified;

let temperature = 8;
let windSpeed = 5;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature)
        - (11.37 * Math.pow(windSpeed, 0.16))
        + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

if (temperature <= 10 && windSpeed > 4.8) {
    let windChill = calculateWindChill(temperature, windSpeed);
    document.querySelector("#windChill").textContent = windChill.toFixed(1) + " °C";
} else {
    document.querySelector("#windChill").textContent = "N/A";
}