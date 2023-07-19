import { useParams, useNavigate } from 'react-router-dom';

function ItemDetails({ memorabilia, addToCollection }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const items = memorabilia.filter((item) => item.id == id);

  return (
    <div className="itemdetails">
      <h2>{items[0].Name}</h2>
      {items[0] && (
        <div className="itemelements">
          <img id="detailimage" src={items[0].img_url} alt={items[0].Name} />
          <p className="circa">Circa: {items[0].Circa} </p>
          <p> Description: {items[0].Description} </p>
          <button onClick={() => addToCollection(items[0])}>
            Add To Collection
          </button>
        </div>
      )}
    </div>
  );
}

export default ItemDetails;
