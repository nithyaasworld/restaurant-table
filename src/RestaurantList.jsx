import { useRef, useState } from "react";
import RestaurantCard from "./RestaurantCard";
export default function RestaurantList({ listOfRestaurants }) {
    let [currStartRange, setCurrStartRange] = useState(0);
    let [currEndRange, setCurrEndRange] = useState(10);

    let nextBtnRef = useRef();
    let prevBtnRef = useRef();

    const prevBtnFunction = () => {
        console.log("prev btn presesed");
        if (currStartRange !== 0) {
            if (currStartRange - 10 >= 0) {
                let newStartRange = currStartRange - 10;
                setCurrStartRange(newStartRange);
                setCurrEndRange(newStartRange + 10);
            }
        }
    }
    const nextBtnFunction = () => {
        console.log('next btn pressed')
        if (currEndRange !== listOfRestaurants.length) {
            if (currEndRange + 10 <= listOfRestaurants.length) {
                let newStartRange = currStartRange + 10;
                setCurrStartRange(newStartRange);
                setCurrEndRange(newStartRange + 10);
            } else {
                let newStartRange = currEndRange;
                setCurrStartRange(newStartRange);
                setCurrEndRange(listOfRestaurants.length);
            }
        } 
    }
 
  return (
    <div className="main-container">
      <div className="restaurant-list-container">
        {listOfRestaurants && listOfRestaurants.length > 0  &&
          listOfRestaurants.slice(currStartRange, currEndRange).map((restaurant) => (
              <RestaurantCard
                  key={restaurant.id}
              name={restaurant.name}
              city={restaurant.city}
              state={restaurant.state}
              phone={restaurant.telephone}
              genres={restaurant.genre}
            />
          ))}
      </div>
      <nav>
              <div ref={prevBtnRef}
                  onClick={prevBtnFunction}
                  className={`page-nav-btn previous-btn ${currStartRange === 0 ? 'disabled' : ''}`}
                  >Prev</div>
        <div ref={nextBtnRef} onClick={nextBtnFunction} className={`page-nav-btn next-btn  ${listOfRestaurants.length === currEndRange ? 'disabled' : ''} `}>Next</div>
      </nav>
    </div>
  );
}
