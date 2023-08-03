import {useContext} from "react";
import ShoppingListItemsContext from "../../context/ShoppingListItemsContext";
import ShopItem from "../ShopItem/ShopItem";

function ShoppingListItems() {
    const itemCtx = useContext(ShoppingListItemsContext);

    function onDelete (id) {
        itemCtx.setSelectedShoppingListIngredients(prevState => {
            return prevState.filter((shoppingItem) => {
                return shoppingItem.shoppingItemId !== id;
            })
        })
    }

    const list = itemCtx.selectedShoppingListIngredients.map(ingredient => <ShopItem
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

export default ShoppingListItems;