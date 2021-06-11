import { useEffect, useState } from "react";
import "./App.css";
import FilterByGenres from "./FilterByGenres";
import RestaurantList from "./RestaurantList";
import Search from "./Search";

const API_URL = "http://128.199.195.196:3001/";
const AUTH_TOKEN = "Bearer iqi509189dxznal;,ggi";
function App() {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [listOfGenres, setListOfGenres] = useState([]);
  let [currGenre, setCurrGenre] = useState("All");
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: AUTH_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //sorting the input by name
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

        //filtering the list of genre
        let genreList = data
          .map((item) => item.genre.split(","))
          .flat()
          .sort();
        genreList.unshift("All");
        setListOfGenres([...new Set(genreList)]);

        //adding all items to the filter list
        setFilteredRestaurants(data);
      });
  }, []);

  useEffect(() => {
    let result = [];
    console.log(currGenre);
    if (currGenre === "All") {
      setFilteredRestaurants(listOfRestaurants);
    } else {
      for (let i = 0; i < listOfRestaurants.length; i++) {
        if (listOfRestaurants[i]["genre"].includes(currGenre)) {
          result.push(listOfRestaurants[i]);
        }
      }
      setFilteredRestaurants(result);
    }
  }, [currGenre]);

  useEffect(() => {
    if (searchText.length === 0) {
      setFilteredRestaurants(listOfRestaurants);
    } else {
      //name, city, or genre.
      let newFilter = listOfRestaurants.filter(
        (item) =>
          item["name"].toLowerCase().includes(searchText) ||
          item["city"].toLowerCase().includes(searchText) ||
          item["genre"].toLowerCase().includes(searchText)
      );
      setFilteredRestaurants(newFilter);
    }
  }, [searchText]);
  return (
    <div className="App">
      <FilterByGenres listOfGenres={listOfGenres} setCurrGenre={setCurrGenre} />
      <Search setSearchText={setSearchText} />
      <RestaurantList listOfRestaurants={filteredRestaurants} />
    </div>
  );
}

export default App;
