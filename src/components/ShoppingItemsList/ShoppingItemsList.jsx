import ShoppingItem from "../ShoppingItem/ShoppingItem";
import {useContext} from "react";
import ShoppingListItemsContext from "../../context/ShoppingListItemsContext";

function ShoppingItemsList() {
    const itemCtx = useContext(ShoppingListItemsContext);

    const list = itemCtx.selectedShoppingListIngredients.map(ingredient => <ShoppingItem
        key={ingredient.itemId + ingredient.shoppingItemId}
        itemName={ingredient.itemName}
        itemCategory={ingredient.itemCategory}
        itemAmount={ingredient.shoppingItemAmount}
        itemPricePerUnit={ingredient.itemPricePerUnit}/>)
    return (
        <>
            {list}
        </>
    )
}

export default ShoppingItemsList;