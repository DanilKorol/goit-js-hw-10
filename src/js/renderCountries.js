import '../css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function renderCountries(dataCountries) {
  const countryListEl = document.querySelector('.country-list');
  const countryInfoEL = document.querySelector('.country-info');

  let quantityCountries = dataCountries.length;
  let countryItems = [];
  let currentCountry = dataCountries[0];

  if (quantityCountries > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (quantityCountries >= 2 && quantityCountries <= 10) {
    countryInfoEL.innerHTML = '';
    dataCountries.map(country => {
      countryItems.push(
        `
                <li class="country-items">
                    <img class = "country-flag" src = "${country.flags.svg}">
                    <span class = "countries-name">${country.name.official}</span>
                </li>
                 `
      );
    });
    countryListEl.innerHTML = countryItems.join('');
  } else {
    countryListEl.innerHTML = '';
    countryInfoEL.innerHTML = `
        <div>
        <img class = "country-flag" src = "${currentCountry.flags.svg}">
        <span class = "country-name">${currentCountry.name.official}</span>
        </div>
        <div>
        <p class = "country-text">Capital: <span class = "country-data">${
          currentCountry.capital
        }</span></p>
        <p class = "country-text">Population: <span class = "country-data">${
          currentCountry.population
        }</span></p>
        <p class = "country-text">Languages: <span class = "country-data">${Object.values(
          currentCountry.languages
        ).join(', ')}</span></p>
        </div> 
        `;
  }
}
