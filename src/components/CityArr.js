const CityArr = ({ citySearchArr, cityAddedArr, setCityAddedArr }) => {
  const onClickHandler = (town) => {
    console.log(town.Key);
    setCityAddedArr([...cityAddedArr, town]);
  };
  return citySearchArr.map((city) => (
    <p key={city.Key}>
      {city.LocalizedName} ({city.AdministrativeArea.LocalizedName}) -{' '}
      {city.Country.LocalizedName}{' '}
      <button onClick={() => onClickHandler(city)}>Add</button>
    </p>
  ));
};

export default CityArr;
