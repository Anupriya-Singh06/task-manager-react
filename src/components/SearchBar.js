function SearchBar({ setQuery }) {

  return (
    <input
      placeholder="Search task..."
      onChange={(e)=>setQuery(e.target.value)}
    />
  );

}

export default SearchBar;