import { useState } from 'react';

const Form = ({ setCitySearchArr }) => {
  const [searchText, setSearchText] = useState('');
  const API_key = 'tONo2lZrXACMgEsso0j4EdZFAuuC8DyA';
  const searchURL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_key}&q=`;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(`${searchURL}${searchText}`)
      .then((response) => {
        return response.json();
      })
      .then(
        (cityData) => {
          setCitySearchArr(cityData);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleSearchReset = () => {
    setCitySearchArr([]);
    setSearchText('');
  };

  return (
    <form onSubmit={handleSearchSubmit} onReset={handleSearchReset}>
      <label htmlFor="searchCity">Input city for search:</label>
      <input
        type="text"
        id="searchCity"
        value={searchText}
        placeholder="Enter city"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit" className="">
        Search
      </button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default Form;
