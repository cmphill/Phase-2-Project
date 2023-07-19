import ItemList from './ItemList';

function Home({ memorabilia }) {
  // console.log(memorabilia);
  return (
    <div className="home">
      <ItemList memorabilia={memorabilia} />
    </div>
  );
}

export default Home;
