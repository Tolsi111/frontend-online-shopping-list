import classes from "./ResultList.module.css"
import {useContext} from "react";
import ShoppingListItemsContext from "../../../context/ShoppingListItemsContext";

function ResultItem(props) {
    const itemCtx = useContext(ShoppingListItemsContext);

    function handleClick() {
        itemCtx.setSelectedItem(props.id,props.name, 0);
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