import styles from "./App.css"
import ItemCard from "./ItemCard";
function ItemList({memorabilia}) {

    const memorabiliaItem = memorabilia.map((memorabilias) => (
        
        <ItemCard key={memorabilias.id} name={memorabilias.name} image={memorabilias.img_url} />
    ))
    return (
        <div>
            <p>ItemList</p>
            <div className="memorabilialist">
                {memorabiliaItem}
            </div>
        </div>
    )
}

export default ItemList;