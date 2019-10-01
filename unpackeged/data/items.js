
const getCountries = () => {
  return fetch('https://date.nager.at/Api/v2/AvailableCountries')
    .then(response => response.json())
    .then(data => console.log(data));
}

getCountries();

 