/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const weatherByZip = /* GraphQL */ `
  query WeatherByZip($zip: Int!) {
    weatherByZip(zip: $zip) {
      time
      cityname
      temperature
    }
  }
`;
export const weatherByCity = /* GraphQL */ `
  query WeatherByCity($city: String!) {
    weatherByCity(city: $city) {
      time
      cityname
      temperature
    }
  }
`;
