// import { useHistory } from 'react-router-dom';

function ItemCard({ image, name, key }) {
  // const history = useHistory();

  function handleItemClick() {
    // history.push(`/item/${key}`);
    console.log('hello world', name);
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div key={key} className="memorabiliacard">
      <div className="cardcontent">
        <p>{name}</p>
        <img src={image} alt="memorabilia item" />
        <button onClick={handleItemClick}>Learn More</button>
      </div>
    </div>
  );
}

export default ItemCard;
