import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Country from './components/Country/Country';
function App() {
  const [countries, setCountries] = useState([]);
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
      })
  }, [])

  const addCountry = (country) =>{
     const newCard = [...card, country];
     setCard(newCard);
  } 
  return (
    <div>
      <h1>Country Loaded: {countries.length}</h1>
      <Card card={card}></Card>
        {
          countries.map(country => <Country country={country} addCountry={addCountry} key={country.alpha2Code}> </Country>)
        }
    </div>
  );
}

export default App;
