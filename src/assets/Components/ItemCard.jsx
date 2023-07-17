import styles from './App.css'
function ItemCard({image, name}) {

    return (
        <div className="memorabiliacard">
            <p>{name}</p>
            <img src={image} alt="memorabilia item"></img>
        </div>
    )
}

export default ItemCard;