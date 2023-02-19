import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import renderCountries from './js/renderCountries';

import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const countryListEl = document.querySelector('.country-list');
const countryInfoEL = document.querySelector('.country-info');
const inputValueEl = document.querySelector('#search-box');

inputValueEl.addEventListener(
  'input',
  debounce(searchCountries, DEBOUNCE_DELAY)
);

function searchCountries(event) {
  let countryName = event.target.value.trim();
  if (countryName) {
    fetchCountries(countryName)
      .then(dataCountries => {
        renderCountries(dataCountries);
      })
      .catch(error => {
        Notify.failure('Oops, there is no coutry with that name');
      });
  } else {
    countryListEl.innerHTML = '';
    countryInfoEL.innerHTML = '';
  }
}
