import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useContext} from "react";
import ShoppingListItemsContext from "../../context/ShoppingListItemsContext";

function ShoppingToolBox(props) {
    const itemCtx = useContext(ShoppingListItemsContext);

    function handleShop(e) {
        e.preventDefault()
        console.log("shop!");
        itemCtx.activate();
        itemCtx.setSelectedShoppingListId(props.itemId);
        itemCtx.setSelectedShoppingListIngredients(props.itemIngredients);
        console.log(props.itemId)
    }

    return (
        <div className={"toolbox-buttons-container"}>
            <div className={"toolbox-button shop"} onClick={handleShop}><ShoppingCartIcon/></div>
        </div>
    )
}

export default ShoppingToolBox;