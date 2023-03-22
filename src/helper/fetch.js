const { VITE_APP_API_KEY, VITE_APP_DOMAIN } = import.meta.env;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': VITE_APP_API_KEY,
    'X-RapidAPI-Host': 'us-zip-code-information.p.rapidapi.com'
  }
};

export const http = (code) =>
  fetch(`${VITE_APP_DOMAIN}/?zipcode=${code}`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
