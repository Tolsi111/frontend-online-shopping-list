import classes from "./ResultList.module.css"

function ResultItem(props) {
    function handleClick() {
        console.log("Clicked on item: " + props.id + " " + props.name + " " + props.category + " " + props.price + " ")
        props.closeResultList();
    }

    return (
        <li className={classes.itemContainer} onClick={handleClick}>
            <div>
                <div>{props.name}</div>
                <div>{props.category}</div>
            </div>
            <div>price: {props.price}</div>
        </li>
    )
}

export default ResultItem;