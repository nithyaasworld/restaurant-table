export default function Search({setSearchText}) {
    return (
        <div className="search-box">
            <label htmlFor="searchBox"> Search Restaurants: 
            </label>
            <input onChange={(e) => setSearchText(e.target.value.toLowerCase())} type="text" id="searchBox" />
    </div>
    )
}