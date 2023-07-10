import classes from "./ShoppingItem.module.css"
import ShoppingItemToolBox from "../ToolBox/ShoppingItemToolBox";

function ShoppingItem(props) {
    //use the right props
    const parsedAmount = parseInt(props.itemAmount);
    const parsedPricePerUnit = parseInt(props.itemPricePerUnit);

    const totalValue = parsedAmount * parsedPricePerUnit;

    return (
        <li className={classes.shoppingItem}>
            <div>
                <h3>{props.itemName}</h3>
                <div className={classes.description}>amount: {props.itemAmount}, total value: {totalValue}</div>
                <div className={classes.description}>{props.itemCategory}</div>
            </div>
            <div className={classes.toolboxContainer}>
                <ShoppingItemToolBox/>
            </div>
        </li>
    )
}

export default ShoppingItem;