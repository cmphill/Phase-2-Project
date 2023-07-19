import { useParams } from 'react-router-dom';
import MyCollection from './MyCollection';

function ItemDetails({ memorabilia }) {
  console.log(memorabilia);
  const { id } = useParams();
  console.log(id);
  const items = memorabilia.filter((item) => item.id == id);
  console.log(items);
  // items = items[0];
  function handleClick(newCollectionItem) {
    console.log("I'm adding to collection", newCollectionItem);
    // return <MyCollection newCollectionItem={newCollectionItem} />;
  }
  return (
    <div className="itemdetails">
      <h2>{items[0].Name}</h2>
      {items[0] && (
        <div className="itemelements">
          <img id="detailimage" src={items[0].img_url} alt={items[0].Name} />
          <p className="circa">Circa: {items[0].Circa} </p>
          <p> Description: {items[0].Description} </p>
          <button onClick={handleClick(items[0])}> Add To Collection </button>
        </div>
      )}
    </div>
  );
}

export default ItemDetails;
