# 🌤️ Väder-App

A simple weather application that fetches real-time weather data using the OpenWeather API.

## 🌍 Live Demo
*(lägg din GitHub Pages-länk här om du har en)*

---

## 📌 Description
This application allows the user to search for a city and get current weather information.

The app first converts the city name into coordinates (latitude and longitude) using a geocoding API, then fetches weather data based on those coordinates.

---

## ✨ Features
- Search weather by city name
- Real-time weather data
- Displays temperature, wind speed and description
- Weather icons from API
- Input validation with user feedback
- Error handling for incorrect city names

---

## 🛠️ Tech Stack
- HTML5
- CSS3
- JavaScript
- OpenWeather API

---

## 🚀 How it works
1. User enters a city name
2. App sends request to Geocoding API
3. Receives latitude and longitude
4. Sends new request to Weather API
5. Displays weather data on the page

---

## 🚀 How to run locally
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
   ```
2. Open the project in IntelliJ or another editor
3. Open `index.html` in your browser

---

## ⚠️ Notes
- Requires an API key from OpenWeather
- The API key is currently stored in the JavaScript file
- Make sure not to expose your API key in public projects
