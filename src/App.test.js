import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Forecast from './components/Forecast';
import Image from "./components/Image";

test("app is rendered correctly", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /weather/i })).toBeInTheDocument();
  expect(screen.getByRole("combobox", { name: /write a city name here/i })).toBeInTheDocument();
})

test("user can enter a city to search for the forecast", async () => {
  render (<App />);
  const input = screen.getByRole("combobox", { name: /write a city name here/i });
  userEvent.type(input, "Paris{enter}");
})

const getWeather = async () => {
  // Mock fetch forecast and displays it.
  const forecast = {
    "lat": 48.8546,
    "lon": 2.3477,
    "timezone": "Europe/Paris",
    "timezone_offset": 3600,
    "current": {
      "dt": 1616611930,
      "sunrise": 1616564693,
      "sunset": 1616609322,
      "temp": 15,
      "feels_like": 11.03,
      "pressure": 1021,
      "humidity": 47,
      "dew_point": 2.88,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 2.06,
      "wind_deg": 240,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ]
    },
    "minutely": [
      {
        "dt": 1616611980,
        "precipitation": 0
      },
      {
        "dt": 1616612040,
        "precipitation": 0
      },
      {
        "dt": 1616612100,
        "precipitation": 0
      },
      {
        "dt": 1616612160,
        "precipitation": 0
      },
      {
        "dt": 1616612220,
        "precipitation": 0
      },
      {
        "dt": 1616612280,
        "precipitation": 0
      },
      {
        "dt": 1616612340,
        "precipitation": 0
      },
      {
        "dt": 1616612400,
        "precipitation": 0
      },
      {
        "dt": 1616612460,
        "precipitation": 0
      },
      {
        "dt": 1616612520,
        "precipitation": 0
      },
      {
        "dt": 1616612580,
        "precipitation": 0
      },
      {
        "dt": 1616612640,
        "precipitation": 0
      },
      {
        "dt": 1616612700,
        "precipitation": 0
      },
      {
        "dt": 1616612760,
        "precipitation": 0
      },
      {
        "dt": 1616612820,
        "precipitation": 0
      },
      {
        "dt": 1616612880,
        "precipitation": 0
      },
      {
        "dt": 1616612940,
        "precipitation": 0
      },
      {
        "dt": 1616613000,
        "precipitation": 0
      },
      {
        "dt": 1616613060,
        "precipitation": 0
      },
      {
        "dt": 1616613120,
        "precipitation": 0
      },
      {
        "dt": 1616613180,
        "precipitation": 0
      },
      {
        "dt": 1616613240,
        "precipitation": 0
      },
      {
        "dt": 1616613300,
        "precipitation": 0
      },
      {
        "dt": 1616613360,
        "precipitation": 0
      },
      {
        "dt": 1616613420,
        "precipitation": 0
      },
      {
        "dt": 1616613480,
        "precipitation": 0
      },
      {
        "dt": 1616613540,
        "precipitation": 0
      },
      {
        "dt": 1616613600,
        "precipitation": 0
      },
      {
        "dt": 1616613660,
        "precipitation": 0
      },
      {
        "dt": 1616613720,
        "precipitation": 0
      },
      {
        "dt": 1616613780,
        "precipitation": 0
      },
      {
        "dt": 1616613840,
        "precipitation": 0
      },
      {
        "dt": 1616613900,
        "precipitation": 0
      },
      {
        "dt": 1616613960,
        "precipitation": 0
      },
      {
        "dt": 1616614020,
        "precipitation": 0
      },
      {
        "dt": 1616614080,
        "precipitation": 0
      },
      {
        "dt": 1616614140,
        "precipitation": 0
      },
      {
        "dt": 1616614200,
        "precipitation": 0
      },
      {
        "dt": 1616614260,
        "precipitation": 0
      },
      {
        "dt": 1616614320,
        "precipitation": 0
      },
      {
        "dt": 1616614380,
        "precipitation": 0
      },
      {
        "dt": 1616614440,
        "precipitation": 0
      },
      {
        "dt": 1616614500,
        "precipitation": 0
      },
      {
        "dt": 1616614560,
        "precipitation": 0
      },
      {
        "dt": 1616614620,
        "precipitation": 0
      },
      {
        "dt": 1616614680,
        "precipitation": 0
      },
      {
        "dt": 1616614740,
        "precipitation": 0
      },
      {
        "dt": 1616614800,
        "precipitation": 0
      },
      {
        "dt": 1616614860,
        "precipitation": 0
      },
      {
        "dt": 1616614920,
        "precipitation": 0
      },
      {
        "dt": 1616614980,
        "precipitation": 0
      },
      {
        "dt": 1616615040,
        "precipitation": 0
      },
      {
        "dt": 1616615100,
        "precipitation": 0
      },
      {
        "dt": 1616615160,
        "precipitation": 0
      },
      {
        "dt": 1616615220,
        "precipitation": 0
      },
      {
        "dt": 1616615280,
        "precipitation": 0
      },
      {
        "dt": 1616615340,
        "precipitation": 0
      },
      {
        "dt": 1616615400,
        "precipitation": 0
      },
      {
        "dt": 1616615460,
        "precipitation": 0
      },
      {
        "dt": 1616615520,
        "precipitation": 0
      },
      {
        "dt": 1616615580,
        "precipitation": 0
      }
    ],
    "hourly": [
      {
        "dt": 1616608800,
        "temp": 15,
        "feels_like": 10.37,
        "pressure": 1021,
        "humidity": 47,
        "dew_point": 2.88,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 3.01,
        "wind_deg": 261,
        "wind_gust": 6.08,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616612400,
        "temp": 13.49,
        "feels_like": 10.4,
        "pressure": 1021,
        "humidity": 52,
        "dew_point": 3.84,
        "uvi": 0,
        "clouds": 48,
        "visibility": 10000,
        "wind_speed": 2.48,
        "wind_deg": 262,
        "wind_gust": 5.94,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616616000,
        "temp": 12.28,
        "feels_like": 9.6,
        "pressure": 1022,
        "humidity": 59,
        "dew_point": 4.51,
        "uvi": 0,
        "clouds": 78,
        "visibility": 10000,
        "wind_speed": 2.08,
        "wind_deg": 277,
        "wind_gust": 5.7,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616619600,
        "temp": 11.03,
        "feels_like": 8.63,
        "pressure": 1023,
        "humidity": 66,
        "dew_point": 4.93,
        "uvi": 0,
        "clouds": 93,
        "visibility": 10000,
        "wind_speed": 1.8,
        "wind_deg": 300,
        "wind_gust": 4.87,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616623200,
        "temp": 10.21,
        "feels_like": 7.97,
        "pressure": 1023,
        "humidity": 70,
        "dew_point": 4.99,
        "uvi": 0,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 1.59,
        "wind_deg": 323,
        "wind_gust": 3.48,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616626800,
        "temp": 9.73,
        "feels_like": 7.62,
        "pressure": 1022,
        "humidity": 73,
        "dew_point": 4.98,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.44,
        "wind_deg": 336,
        "wind_gust": 2.91,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616630400,
        "temp": 9.31,
        "feels_like": 7.57,
        "pressure": 1022,
        "humidity": 75,
        "dew_point": 4.99,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 0.91,
        "wind_deg": 346,
        "wind_gust": 1.4,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616634000,
        "temp": 8.96,
        "feels_like": 7.41,
        "pressure": 1022,
        "humidity": 77,
        "dew_point": 4.97,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 0.65,
        "wind_deg": 337,
        "wind_gust": 0.99,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.05
      },
      {
        "dt": 1616637600,
        "temp": 8.74,
        "feels_like": 7.03,
        "pressure": 1022,
        "humidity": 78,
        "dew_point": 4.93,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 0.87,
        "wind_deg": 290,
        "wind_gust": 1.36,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.13
      },
      {
        "dt": 1616641200,
        "temp": 9.01,
        "feels_like": 6.94,
        "pressure": 1022,
        "humidity": 77,
        "dew_point": 4.99,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.41,
        "wind_deg": 277,
        "wind_gust": 2.68,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.27
      },
      {
        "dt": 1616644800,
        "temp": 8.72,
        "feels_like": 6.42,
        "pressure": 1022,
        "humidity": 80,
        "dew_point": 5.41,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.82,
        "wind_deg": 284,
        "wind_gust": 3.64,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 0.4,
        "rain": {
          "1h": 0.2
        }
      },
      {
        "dt": 1616648400,
        "temp": 8.43,
        "feels_like": 6.43,
        "pressure": 1022,
        "humidity": 86,
        "dew_point": 6.08,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.62,
        "wind_deg": 282,
        "wind_gust": 3.24,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 0.54,
        "rain": {
          "1h": 0.41
        }
      },
      {
        "dt": 1616652000,
        "temp": 8.35,
        "feels_like": 7.03,
        "pressure": 1022,
        "humidity": 89,
        "dew_point": 6.59,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 0.78,
        "wind_deg": 230,
        "wind_gust": 1.59,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.68,
        "rain": {
          "1h": 0.61
        }
      },
      {
        "dt": 1616655600,
        "temp": 8.55,
        "feels_like": 7.16,
        "pressure": 1022,
        "humidity": 89,
        "dew_point": 6.77,
        "uvi": 0.03,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 0.94,
        "wind_deg": 199,
        "wind_gust": 1.49,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.6,
        "rain": {
          "1h": 0.16
        }
      },
      {
        "dt": 1616659200,
        "temp": 8.79,
        "feels_like": 6.79,
        "pressure": 1022,
        "humidity": 88,
        "dew_point": 6.8,
        "uvi": 0.1,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.83,
        "wind_deg": 222,
        "wind_gust": 3.83,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.74
      },
      {
        "dt": 1616662800,
        "temp": 8.88,
        "feels_like": 6.62,
        "pressure": 1022,
        "humidity": 89,
        "dew_point": 7.05,
        "uvi": 0.19,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.29,
        "wind_deg": 236,
        "wind_gust": 5.14,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.62
      },
      {
        "dt": 1616666400,
        "temp": 9.13,
        "feels_like": 6.67,
        "pressure": 1023,
        "humidity": 86,
        "dew_point": 6.81,
        "uvi": 2.12,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.49,
        "wind_deg": 274,
        "wind_gust": 5.33,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.55
      },
      {
        "dt": 1616670000,
        "temp": 9.97,
        "feels_like": 7.33,
        "pressure": 1023,
        "humidity": 75,
        "dew_point": 5.66,
        "uvi": 2.67,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.38,
        "wind_deg": 288,
        "wind_gust": 4.44,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.55
      },
      {
        "dt": 1616673600,
        "temp": 12.41,
        "feels_like": 9.7,
        "pressure": 1022,
        "humidity": 60,
        "dew_point": 4.78,
        "uvi": 2.84,
        "clouds": 88,
        "visibility": 10000,
        "wind_speed": 2.22,
        "wind_deg": 265,
        "wind_gust": 4.08,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.5
      },
      {
        "dt": 1616677200,
        "temp": 13.55,
        "feels_like": 10.16,
        "pressure": 1022,
        "humidity": 52,
        "dew_point": 3.79,
        "uvi": 2.25,
        "clouds": 69,
        "visibility": 10000,
        "wind_speed": 2.92,
        "wind_deg": 247,
        "wind_gust": 4.41,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.13
      },
      {
        "dt": 1616680800,
        "temp": 14.11,
        "feels_like": 10.16,
        "pressure": 1021,
        "humidity": 46,
        "dew_point": 2.82,
        "uvi": 1.69,
        "clouds": 62,
        "visibility": 10000,
        "wind_speed": 3.42,
        "wind_deg": 251,
        "wind_gust": 4.71,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.07
      },
      {
        "dt": 1616684400,
        "temp": 14.37,
        "feels_like": 10.36,
        "pressure": 1021,
        "humidity": 44,
        "dew_point": 2.23,
        "uvi": 1.04,
        "clouds": 54,
        "visibility": 10000,
        "wind_speed": 3.4,
        "wind_deg": 251,
        "wind_gust": 4.98,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.05
      },
      {
        "dt": 1616688000,
        "temp": 14.52,
        "feels_like": 10.68,
        "pressure": 1021,
        "humidity": 43,
        "dew_point": 1.9,
        "uvi": 0.7,
        "clouds": 50,
        "visibility": 10000,
        "wind_speed": 3.12,
        "wind_deg": 248,
        "wind_gust": 4.89,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0.03
      },
      {
        "dt": 1616691600,
        "temp": 13.98,
        "feels_like": 10.35,
        "pressure": 1020,
        "humidity": 46,
        "dew_point": 2.47,
        "uvi": 0.21,
        "clouds": 44,
        "visibility": 10000,
        "wind_speed": 2.93,
        "wind_deg": 248,
        "wind_gust": 4.43,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0.01
      },
      {
        "dt": 1616695200,
        "temp": 12.48,
        "feels_like": 9.31,
        "pressure": 1021,
        "humidity": 53,
        "dew_point": 2.98,
        "uvi": 0,
        "clouds": 42,
        "visibility": 10000,
        "wind_speed": 2.43,
        "wind_deg": 256,
        "wind_gust": 5.42,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616698800,
        "temp": 11.41,
        "feels_like": 8.77,
        "pressure": 1021,
        "humidity": 57,
        "dew_point": 3.04,
        "uvi": 0,
        "clouds": 26,
        "visibility": 10000,
        "wind_speed": 1.68,
        "wind_deg": 249,
        "wind_gust": 4.05,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616702400,
        "temp": 10.73,
        "feels_like": 8.05,
        "pressure": 1022,
        "humidity": 60,
        "dew_point": 3.14,
        "uvi": 0,
        "clouds": 17,
        "visibility": 10000,
        "wind_speed": 1.75,
        "wind_deg": 223,
        "wind_gust": 3.81,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616706000,
        "temp": 10.21,
        "feels_like": 7.29,
        "pressure": 1022,
        "humidity": 62,
        "dew_point": 3.2,
        "uvi": 0,
        "clouds": 13,
        "visibility": 10000,
        "wind_speed": 2.09,
        "wind_deg": 216,
        "wind_gust": 5.31,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616709600,
        "temp": 9.75,
        "feels_like": 6.7,
        "pressure": 1021,
        "humidity": 64,
        "dew_point": 3.26,
        "uvi": 0,
        "clouds": 14,
        "visibility": 10000,
        "wind_speed": 2.28,
        "wind_deg": 214,
        "wind_gust": 5.93,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616713200,
        "temp": 9.44,
        "feels_like": 6.34,
        "pressure": 1021,
        "humidity": 66,
        "dew_point": 3.31,
        "uvi": 0,
        "clouds": 16,
        "visibility": 10000,
        "wind_speed": 2.39,
        "wind_deg": 207,
        "wind_gust": 6.01,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616716800,
        "temp": 9.19,
        "feels_like": 5.98,
        "pressure": 1021,
        "humidity": 67,
        "dew_point": 3.37,
        "uvi": 0,
        "clouds": 18,
        "visibility": 10000,
        "wind_speed": 2.54,
        "wind_deg": 203,
        "wind_gust": 6.48,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616720400,
        "temp": 8.97,
        "feels_like": 5.51,
        "pressure": 1021,
        "humidity": 68,
        "dew_point": 3.42,
        "uvi": 0,
        "clouds": 47,
        "visibility": 10000,
        "wind_speed": 2.9,
        "wind_deg": 206,
        "wind_gust": 7.75,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616724000,
        "temp": 8.72,
        "feels_like": 5.16,
        "pressure": 1020,
        "humidity": 70,
        "dew_point": 3.48,
        "uvi": 0,
        "clouds": 53,
        "visibility": 10000,
        "wind_speed": 3.09,
        "wind_deg": 205,
        "wind_gust": 8.34,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616727600,
        "temp": 8.02,
        "feels_like": 4.5,
        "pressure": 1020,
        "humidity": 74,
        "dew_point": 3.64,
        "uvi": 0,
        "clouds": 43,
        "visibility": 10000,
        "wind_speed": 3.06,
        "wind_deg": 204,
        "wind_gust": 8.32,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616731200,
        "temp": 7.4,
        "feels_like": 3.95,
        "pressure": 1019,
        "humidity": 77,
        "dew_point": 3.63,
        "uvi": 0,
        "clouds": 35,
        "visibility": 10000,
        "wind_speed": 2.95,
        "wind_deg": 203,
        "wind_gust": 8.38,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616734800,
        "temp": 7.07,
        "feels_like": 3.6,
        "pressure": 1019,
        "humidity": 79,
        "dew_point": 3.55,
        "uvi": 0,
        "clouds": 31,
        "visibility": 10000,
        "wind_speed": 2.98,
        "wind_deg": 201,
        "wind_gust": 8.62,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616738400,
        "temp": 6.71,
        "feels_like": 3.21,
        "pressure": 1019,
        "humidity": 80,
        "dew_point": 3.47,
        "uvi": 0,
        "clouds": 27,
        "visibility": 10000,
        "wind_speed": 2.98,
        "wind_deg": 198,
        "wind_gust": 8.91,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616742000,
        "temp": 7.39,
        "feels_like": 3.55,
        "pressure": 1019,
        "humidity": 77,
        "dew_point": 3.54,
        "uvi": 0.33,
        "clouds": 1,
        "visibility": 10000,
        "wind_speed": 3.5,
        "wind_deg": 198,
        "wind_gust": 9.64,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616745600,
        "temp": 8.82,
        "feels_like": 4.41,
        "pressure": 1019,
        "humidity": 72,
        "dew_point": 3.92,
        "uvi": 0.91,
        "clouds": 1,
        "visibility": 10000,
        "wind_speed": 4.43,
        "wind_deg": 204,
        "wind_gust": 9.46,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616749200,
        "temp": 10.55,
        "feels_like": 5.81,
        "pressure": 1019,
        "humidity": 64,
        "dew_point": 4.04,
        "uvi": 1.77,
        "clouds": 1,
        "visibility": 10000,
        "wind_speed": 4.89,
        "wind_deg": 207,
        "wind_gust": 9.15,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616752800,
        "temp": 12.23,
        "feels_like": 7.09,
        "pressure": 1018,
        "humidity": 56,
        "dew_point": 3.67,
        "uvi": 2.55,
        "clouds": 1,
        "visibility": 10000,
        "wind_speed": 5.38,
        "wind_deg": 210,
        "wind_gust": 8.71,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616756400,
        "temp": 13.52,
        "feels_like": 8.16,
        "pressure": 1017,
        "humidity": 52,
        "dew_point": 3.78,
        "uvi": 3.21,
        "clouds": 1,
        "visibility": 10000,
        "wind_speed": 5.74,
        "wind_deg": 211,
        "wind_gust": 8.9,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616760000,
        "temp": 14.58,
        "feels_like": 8.82,
        "pressure": 1016,
        "humidity": 47,
        "dew_point": 3.43,
        "uvi": 3.4,
        "clouds": 14,
        "visibility": 10000,
        "wind_speed": 6.19,
        "wind_deg": 213,
        "wind_gust": 9.33,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616763600,
        "temp": 15.14,
        "feels_like": 9.06,
        "pressure": 1015,
        "humidity": 45,
        "dew_point": 3.21,
        "uvi": 2.35,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 6.61,
        "wind_deg": 215,
        "wind_gust": 9.84,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616767200,
        "temp": 15.02,
        "feels_like": 8.96,
        "pressure": 1015,
        "humidity": 47,
        "dew_point": 3.86,
        "uvi": 1.78,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 6.72,
        "wind_deg": 217,
        "wind_gust": 10.39,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616770800,
        "temp": 14.65,
        "feels_like": 9.07,
        "pressure": 1014,
        "humidity": 51,
        "dew_point": 4.59,
        "uvi": 1.1,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 6.26,
        "wind_deg": 214,
        "wind_gust": 11.17,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616774400,
        "temp": 14.11,
        "feels_like": 8.75,
        "pressure": 1013,
        "humidity": 54,
        "dew_point": 5,
        "uvi": 0.44,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 6.04,
        "wind_deg": 207,
        "wind_gust": 11.74,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1616778000,
        "temp": 13.48,
        "feels_like": 7.98,
        "pressure": 1013,
        "humidity": 60,
        "dew_point": 5.78,
        "uvi": 0.14,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 6.5,
        "wind_deg": 208,
        "wind_gust": 13.09,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.01
      }
    ],
    "daily": [
      {
        "dt": 1616583600,
        "sunrise": 1616564693,
        "sunset": 1616609322,
        "temp": {
          "day": 13.66,
          "min": 5.92,
          "max": 16.97,
          "night": 10.21,
          "eve": 15.61,
          "morn": 6.2
        },
        "feels_like": {
          "day": 10.43,
          "night": 7.97,
          "eve": 11.89,
          "morn": 3.55
        },
        "pressure": 1024,
        "humidity": 52,
        "dew_point": 3.86,
        "wind_speed": 2.72,
        "wind_deg": 212,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": 64,
        "pop": 0,
        "uvi": 3.91
      },
      {
        "dt": 1616670000,
        "sunrise": 1616650965,
        "sunset": 1616695811,
        "temp": {
          "day": 9.97,
          "min": 8.35,
          "max": 14.52,
          "night": 9.75,
          "eve": 13.98,
          "morn": 8.43
        },
        "feels_like": {
          "day": 7.33,
          "night": 6.7,
          "eve": 10.35,
          "morn": 6.43
        },
        "pressure": 1023,
        "humidity": 75,
        "dew_point": 5.66,
        "wind_speed": 2.38,
        "wind_deg": 288,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 100,
        "pop": 0.74,
        "rain": 1.38,
        "uvi": 2.84
      },
      {
        "dt": 1616756400,
        "sunrise": 1616737238,
        "sunset": 1616782301,
        "temp": {
          "day": 13.52,
          "min": 6.71,
          "max": 15.14,
          "night": 6.77,
          "eve": 13.48,
          "morn": 7.07
        },
        "feels_like": {
          "day": 8.16,
          "night": 0.95,
          "eve": 7.98,
          "morn": 3.6
        },
        "pressure": 1017,
        "humidity": 52,
        "dew_point": 3.78,
        "wind_speed": 5.74,
        "wind_deg": 211,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 1,
        "pop": 1,
        "rain": 2.94,
        "uvi": 3.4
      },
      {
        "dt": 1616842800,
        "sunrise": 1616823511,
        "sunset": 1616868790,
        "temp": {
          "day": 8.86,
          "min": 3.97,
          "max": 10.7,
          "night": 8.15,
          "eve": 9.98,
          "morn": 4.01
        },
        "feels_like": {
          "day": 3.03,
          "night": 4.95,
          "eve": 6.49,
          "morn": -2.04
        },
        "pressure": 1026,
        "humidity": 51,
        "dew_point": -0.78,
        "wind_speed": 5.34,
        "wind_deg": 262,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": 72,
        "pop": 0.8,
        "uvi": 2.71
      },
      {
        "dt": 1616929200,
        "sunrise": 1616909784,
        "sunset": 1616955279,
        "temp": {
          "day": 13.9,
          "min": 5.64,
          "max": 15.4,
          "night": 11.77,
          "eve": 13.55,
          "morn": 5.64
        },
        "feels_like": {
          "day": 8.12,
          "night": 7.82,
          "eve": 9.39,
          "morn": 1.89
        },
        "pressure": 1026,
        "humidity": 42,
        "dew_point": 1.24,
        "wind_speed": 5.68,
        "wind_deg": 217,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": 56,
        "pop": 0,
        "uvi": 3.75
      },
      {
        "dt": 1617015600,
        "sunrise": 1616996057,
        "sunset": 1617041768,
        "temp": {
          "day": 17.73,
          "min": 8.22,
          "max": 19.13,
          "night": 14.86,
          "eve": 16.96,
          "morn": 8.22
        },
        "feels_like": {
          "day": 12.44,
          "night": 12.31,
          "eve": 13.81,
          "morn": 3.32
        },
        "pressure": 1026,
        "humidity": 42,
        "dew_point": 4.72,
        "wind_speed": 5.85,
        "wind_deg": 231,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": 46,
        "pop": 0,
        "uvi": 4.23
      },
      {
        "dt": 1617102000,
        "sunrise": 1617082331,
        "sunset": 1617128257,
        "temp": {
          "day": 19.55,
          "min": 9.97,
          "max": 21.18,
          "night": 15.18,
          "eve": 18.36,
          "morn": 9.97
        },
        "feels_like": {
          "day": 16.41,
          "night": 14.08,
          "eve": 16.27,
          "morn": 7.59
        },
        "pressure": 1026,
        "humidity": 42,
        "dew_point": 6.05,
        "wind_speed": 3.26,
        "wind_deg": 237,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": 3,
        "pop": 0,
        "uvi": 5
      },
      {
        "dt": 1617188400,
        "sunrise": 1617168604,
        "sunset": 1617214746,
        "temp": {
          "day": 20.22,
          "min": 10.46,
          "max": 21.52,
          "night": 10.46,
          "eve": 13.45,
          "morn": 11.52
        },
        "feels_like": {
          "day": 18.25,
          "night": 6.34,
          "eve": 10.09,
          "morn": 10.74
        },
        "pressure": 1017,
        "humidity": 46,
        "dew_point": 8.13,
        "wind_speed": 2.23,
        "wind_deg": 237,
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "clouds": 1,
        "pop": 1,
        "rain": 6.26,
        "uvi": 5
      }
    ]
  }
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(forecast)
  }));

  await act(async () => {
    render(<Forecast
      city="Paris"
      country="France"
      countryCode="fr"
      lat="48.8546"
      lng="2.34771"
      getWeather={() => {}} />)
  })
};

const checkWeather = async (temperature, precipitation, humidity, wind) => {
  expect(await screen.findByText(new RegExp(`${temperature}°C`, "i"))).toBeInTheDocument();
  expect((await screen.findByTestId("precipitation")).textContent).toMatch(new RegExp(`Precipitation: ${precipitation}%`, "i"));
  expect((await screen.findByTestId("humidity")).textContent).toMatch(new RegExp(`Humidity: ${humidity}%`, "i"));
  expect((await screen.findByTestId("wind")).textContent).toMatch(new RegExp(`Wind: ${wind}m/s`, "i"));
}

test("app fetches and displays weather forecast", async () => {
  await getWeather();

  // Displays the location
  expect(screen.getByRole("heading", { name: /Paris, France/i })).toBeInTheDocument();

  // Displays the forecast
  expect(await screen.findByText(/Clear - Clear Sky/i)).toBeInTheDocument();
  checkWeather("15", "0", "47", "3.01")
});

test("user can access the hourly forecast", async () => {
  await getWeather();

  // Clicks on button to change the forecast time.
  const button = await screen.findByTestId(/hourly-3/i);
  userEvent.click(button);
  checkWeather("11.03", "0", "66", "1.8");
})

test("user can access to daily forecast", async () => {
  await getWeather();

  // Clicks on button to change the forecast day.
  const button = await screen.findByTestId(/daily-1/i);
  userEvent.click(button);
  checkWeather("9.97", "74", "75", "2.38");
})

test("app fetches an image and displays it", async () => {
  const image = "https://images.unsplash.com/photo-1568112122445-27b3815d2ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNzkxOTd8MHwxfHNlYXJjaHwxOXx8c2t5fGVufDB8fHx8MTYxNjc2MzEwNQ&ixlib=rb-1.2.1&q=80&w=1080";

  jest.spyOn(global, "fetch").mockImplementation(() => {
    let results = new Array(20);
    for (let i = 0 ; i < results.length ; i++) {
      results[i] = {
        urls: {
          regular: image
        }
      }
    }

    return Promise.resolve({
      json: () => Promise.resolve(
        {
          results,
          description: "Sky"
        }
      )
    })
  });

  await act(async () => {
    render(<Image description={{ weather: [{ description: "Sky" }]}} />)
  })
  
  expect(await screen.findByRole("img", { name: "Sky" })).toBeInTheDocument();
})