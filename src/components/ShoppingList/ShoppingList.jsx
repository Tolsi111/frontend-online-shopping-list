import classes from "./ShoppingList.module.css"
import ShoppingListToolBox from "../ToolBox/ShoppingListToolBox";


function ShoppingList (props) {
    const price = `${props.itemPrice.toFixed(2)} ron`;

    return (
        <li className={classes.shoppingList}>
            <div>
                <h3>{props.itemTitle}</h3>
                <div className={classes.description}>{props.itemDescription}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div className={classes.toolboxContainer}>
                <ShoppingListToolBox itemId={props.itemId} ondelete={props.onDelete} itemTitle={props.itemTitle} itemDescriprion={props.itemDescription}></ShoppingListToolBox>
            </div>
        </li>
    )
}

export default ShoppingList;