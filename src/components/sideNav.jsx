function SearchBar(){


return(
    <form className="search-form gameboy">
        <p>Name</p>
        <input type="text" name='name' id='name'/>
        <p>Type</p>
        <input type="text" name="type" id="type" />
        <p>Weaknesses</p>
        <input type="text" name='weaknesses' id='weaknesses' />
        <button type="submit" className="button gameboy">Search</button>
        </form>
)
}

export default SearchBar;