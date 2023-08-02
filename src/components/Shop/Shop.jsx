import classes from "./Shop.module.css"
import ShoppingToolBox from "../ToolBox/ShoppingToolBox";

function Shop(props) {
    const price = `${props.itemPrice.toFixed(2)} ron`;

    return (
        <li className={classes.item}>
            <div>
                <h3>{props.itemTitle}</h3>
                <div className={classes.description}>{props.itemDescription}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <ShoppingToolBox></ShoppingToolBox>
        </li>
    )
}

export default Shop;