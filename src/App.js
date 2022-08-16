// TODO move key to env files from Form and WeatherTable
import { useState } from 'react';
import Form from './components/Form';
import CityArr from './components/CityArr';
import WeatherTable from './components/WeatherTable';

function App() {
  const [citySearchArr, setCitySearchArr] = useState([]);
  const [cityAddedArr, setCityAddedArr] = useState([]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Hello weather compare app!
      </h1>
      <Form setCitySearchArr={setCitySearchArr} />
      {citySearchArr.length !== 0 && (
        <CityArr
          citySearchArr={citySearchArr}
          cityAddedArr={cityAddedArr}
          setCityAddedArr={setCityAddedArr}
        />
      )}
      <WeatherTable cityAddedArr={cityAddedArr} />
    </div>
  );
}

export default App;
