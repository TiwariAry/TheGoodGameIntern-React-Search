import ItemCard from './ItemCard.jsx'

function ItemGrid(props) {
    const {items} = props;

    return (
        <ul className={"grid"}>
            {items.map((item) => {
                return (
                    <ItemCard item={item}/>
                )
            })}
        </ul>
    )
}

export default ItemGrid