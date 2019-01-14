import Temperature from '../src/temperature-js'

/**
 * TemperatureTest
 */
describe('TemperatureTest', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('convert celcius to kelvin', () => {
    expect(Temperature.celciusToKelvin(10)).toBe(283.15)
  })

  it('convert celcius to fahrenheit', () => {
    expect(Temperature.celciusToFahrenheit(10)).toBe(50)
  })

  it('convert celcius to reaumur', () => {
    expect(Temperature.celciusToReaumur(10)).toBe(8)
  })

  it('convert celcius to rankine', () => {
    expect(Temperature.celciusToRankine(10)).toBe(509.67)
  })

  it('convert kelvin to celcius', () => {
    expect(Temperature.kelvinToCelcius(10)).toBe(-263.15)
  })

  it('convert kelvin to fahrenheit', () => {
    expect(Temperature.kelvinToFahrenheit(10)).toBe(-441.67)
  })

  it('convert kelvin to rankine', () => {
    expect(Temperature.kelvinToRankine(10)).toBe(18)
  })

  it('convert kelvin to reaumur', () => {
    expect(Temperature.kelvinToReaumur(10)).toBe(-210.51999999999998)
  })

  it('convert fahrenheit to celcius', () => {
    expect(Temperature.fahrenheitToCelcius(10)).toBe(-12.222222222222221)
  })

  it('convert fahrenheit to kelvin', () => {
    expect(Temperature.fahrenheitToKelvin(10)).toBe(260.9277777777778)
  })

  it('convert fahrenheit to reaumur', () => {
    expect(Temperature.fahrenheitToReaumur(10)).toBe(-9.777777777777779)
  })

  it('convert fahrenheit to rankine', () => {
    expect(Temperature.fahrenheitToRankine(10)).toBe(469.67)
  })

  it('convert reaumur to celcius', () => {
    expect(Temperature.reaumurToCelcius(10)).toBe(12.5)
  })

  it('convert reaumur to fahreheit', () => {
    expect(Temperature.reaumurToFahrenheit(10)).toBe(54.5)
  })

  it('convert reaumur to kelvin', () => {
    expect(Temperature.reaumurToKelvin(10)).toBe(285.65)
  })

  it('convert reaumur to rankine', () => {
    expect(Temperature.reaumurToRankine(10)).toBe(514.1700000000001)
  })

  it('convert rankine to celcius', () => {
    expect(Temperature.rankineToCelcius(10)).toBe(-267.59444444444443)
  })

  it('convert rankine to kelvin', () => {
    expect(Temperature.rankineToKelvin(10)).toBe(5.555555555555555)
  })

  it('convert rankine to fahrenheit', () => {
    expect(Temperature.rankineToFahrenheit(10)).toBe(-449.67)
  })

  // it('convert rankine to reaumur', () => {
  //   expect(Temperature.rankineToReaumur(10)).toBe(-214.07555555555555)
  // })
})
