import ShoppingItem from "../ShoppingItem/ShoppingItem";
import {useContext} from "react";
import ShoppingListItemsContext from "../../context/ShoppingListItemsContext";

function ShoppingItemsList() {
    const itemCtx = useContext(ShoppingListItemsContext);

    function onDelete (id) {
        itemCtx.setSelectedShoppingListIngredients(prevState => {
            return prevState.filter((shoppingItem) => {
                return shoppingItem.shoppingItemId !== id;
            })
        })
    }

    const list = itemCtx.selectedShoppingListIngredients.map(ingredient => <ShoppingItem
        key={ingredient.itemId + ingredient.shoppingItemId}
        itemId={ingredient.itemId}
        shoppingItemId={ingredient.shoppingItemId}
        itemName={ingredient.itemName}
        itemCategory={ingredient.itemCategory}
        itemAmount={ingredient.shoppingItemAmount}
        itemPricePerUnit={ingredient.itemPricePerUnit}
        ondelete={onDelete}/>)
    return (
        <>
            {list}
        </>
    )
}

export default ShoppingItemsList;