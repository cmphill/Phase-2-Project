import { useNavigate } from 'react-router-dom';

function ItemCard({ image, name, id }) {
  const navigate = useNavigate();

  function handleItemClick() {
    // history.push(`/item/${key}`);
    console.log('hello world', name);
    navigate(`/item/${id}`);
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div id={id} className="memorabiliacard">
      <div className="cardcontent">
        <p>{name}</p>
        <img src={image} alt="memorabilia item" />
        <button onClick={handleItemClick}>Learn More</button>
      </div>
    </div>
  );
}

export default ItemCard;
