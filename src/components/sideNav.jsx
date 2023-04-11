function SearchBar(){
return(
    <form className="search-form gameboy">
        <input type="text" name='name' id='name'/>
        <p>Name</p>
        <input type="text" name="type" id="type" />
        <p>Type</p>
        <input type="text" name='weaknesses' id='weaknesses' />
        <p>Weaknesses</p>
        <button type="submit" className="button gameboy">Search</button>
        </form>
)
}

export default SearchBar;