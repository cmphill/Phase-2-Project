import ItemList from "./ItemList";
function Home({memorabilia}) {
    console.log(memorabilia)
    return (
        <div className="home">
            <h2>Welcome</h2>
            <ItemList memorabilia={memorabilia} />
            
        </div>
    )
}

export default Home;