function Search({ onSearchMemorabilia }) {
  function handleSearch(event) {
    onSearchMemorabilia(event.target.value);
  }

  return <input type="text" placeholder="search" onChange={handleSearch} />;
}
export default Search;
