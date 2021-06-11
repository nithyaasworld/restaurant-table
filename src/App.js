import { useEffect, useState } from 'react';
import './App.css';
import RestaurantList from './RestaurantList';

const API_URL = "http://128.199.195.196:3001/";
const AUTH_TOKEN = "Bearer iqi509189dxznal;,ggi";
function App() {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: AUTH_TOKEN,
      }
    }).then((res) => res.json()).then((data) => {
      data.sort((a, b) => {
        let nameA = a.name.toUpperCase(); 
        let nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setListOfRestaurants(data);
    });
  },[])
  return (
    <div className="App">
        <RestaurantList listOfRestaurants={listOfRestaurants} />
    </div>
  );
}

export default App;
