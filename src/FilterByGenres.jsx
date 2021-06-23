export default function FilterByGenres({ listOfGenres, setCurrGenre }) {
  return (
    <div className="genres-filter">
      <label htmlFor="genre-list">Genre List</label>
          <select onChange={(e) => setCurrGenre(e.target.options[[e.target.selectedIndex]].value)} name="genre-list" id="genre-list">
              {listOfGenres.map((genre) => <option key={genre} value={genre}>{genre}</option>)}
      </select>
    </div>
  );
}