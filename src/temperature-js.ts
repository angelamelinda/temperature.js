const Temperature = {
  celciusToKelvin: (temp: number) => {
    return temp + 273.15
  },
  celciusToFahrenheit: (temp: number) => {
    return (temp * 9) / 5 + 32
  },
  celciusToReaumur: (temp: number) => {
    return temp * 0.8
  },
  celciusToRankine: (temp: number) => {
    return temp * 1.8 + 32 + 459.67
  },
  kelvinToCelcius: (temp: number) => {
    return temp - 273.15
  },
  kelvinToFahrenheit: (temp: number) => {
    return temp * 1.8 - 459.67
  },
  kelvinToRankine: (temp: number) => {
    return temp * 1.8
  },
  kelvinToReaumur: (temp: number) => {
    return (temp - 273.15) * 0.8
  },
  fahrenheitToCelcius: (temp: number) => {
    return (temp - 32) / 1.8
  },
  fahrenheitToKelvin: (temp: number) => {
    return (temp + 459.67) / 1.8
  },
  fahrenheitToRankine: (temp: number) => {
    return temp + 459.67
  },
  fahrenheitToReaumur: (temp: number) => {
    return (temp - 32) / 2.25
  },
  reaumurToCelcius: (temp: number) => {
    return temp * 1.25
  },
  reaumurToFahrenheit: (temp: number) => {
    return temp * 2.25 + 32
  },
  reaumurToKelvin: (temp: number) => {
    return temp * 1.25 + 273.15
  },
  reaumurToRankine: (temp: number) => {
    return temp * 2.25 + 32 + 459.67
  },
  rankineToCelcius: (temp: number) => {
    return (temp - 32 - 459.67) / 1.8
  },
  rankineToFahrenheit: (temp: number) => {
    return temp - 459.67
  },
  rankineToKelvin: (temp: number) => {
    return temp / 1.8
  },
  rankineToReaumur: (temp: number) => {
    return (temp - 32 - 459.67) / 2.25
  }
}

export default Temperature
