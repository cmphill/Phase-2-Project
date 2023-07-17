function ItemCard({ image, name }) {
  function handleItemClick(e) {
    console.log(e.target, 'I was clicked');
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="memorabiliacard">
      <div className="cardcontent">
        <p>{name}</p>
        <img src={image} alt="memorabilia item" />
        <button onClick={handleItemClick}>Learn More</button>
      </div>
    </div>
  );
}

export default ItemCard;
