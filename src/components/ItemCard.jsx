function ItemCard(props) {
    const {item} = props;

    return (
        <li className={"item"}>
            <img src={item.image} alt={"Image not present"}/>
            <section>
                <p className={"name"}>{item.name} </p>
                <p className={"price"}>{item.price}</p>
                <p className={"average"}>
                    Rating - {item.rating.average.toFixed(2)}
                </p>
                <p className={"reviews"}>
                    Reviews - {item.rating.reviews}
                </p>
            </section>
        </li>
    )
}

export default ItemCard