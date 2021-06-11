export default function RestaurantCard({name, city, state, phone, genres}) {
    return (
        <div className="restaurant-card">
                <p className="restaurant-name">{name}</p>
                <p className="restaurant-city">{city}</p>
                <p className="restaurant-state">{state}</p>
                <p className="restaurant-phone-number">{phone}</p>
                <p className="restaurant-genres">{genres}</p>
        </div>
    )
}