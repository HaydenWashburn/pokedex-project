function SearchBar() {
  return (
    <form className="search-form gameboy">
      <p className="search-header">Name</p>
      <input type="text" name="name" id="name" />
      <p className="search-header">Type</p>
      <input type="text" name="type" id="type" />
      <p className="search-header">Weaknesses</p>
      <input type="text" name="weaknesses" id="weaknesses" />
      <button type="submit" className="button gameboy">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
