import "./ShoppingLists.css";
import Card from "../components/Card/Card";
import {useContext, useEffect, useState} from "react";
import ShoppingListItemsContext from "../context/ShoppingListItemsContext";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import Shop from "../components/Shop/Shop";
import ShoppingListItems from "../components/ShoppingListItems/ShoppingListItems";
function Shopping () {
    const [shoppingLists, setShoppingLists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    const itemCtx = useContext(ShoppingListItemsContext);

    useEffect(() => {
        async function fetchShoppingLists() {
            const response = await fetch('http://localhost:8080/shopping-lists')
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const responseData = await response.json();
            const responseItems = responseData.data.items;
            const loadedShoppingLists = [];

            for (const key in responseItems) {
                const loadedShoppingItems = [];
                for (const key2 in responseItems[key].items) {
                    loadedShoppingItems.push({
                        shoppingItemId: responseItems[key].items[key2].id,
                        shoppingItemAmount: responseItems[key].items[key2].amount,
                        itemId: responseItems[key].items[key2].item.id,
                        itemName: responseItems[key].items[key2].item.name,
                        itemCategory: responseItems[key].items[key2].item.category,
                        itemPricePerUnit: responseItems[key].items[key2].item.price_per_unit
                    })
                }
                loadedShoppingLists.push({
                    id: responseItems[key].id,
                    title: responseItems[key].title,
                    description: responseItems[key].description,
                    price: responseItems[key].price,
                    ingredients: loadedShoppingItems
                })
            }
            setShoppingLists(loadedShoppingLists);
            setIsLoading(false);
        }

        fetchShoppingLists().catch((err) => {
            setHttpError(err.message);
            setIsLoading(false);
        });
    }, [])

    const list = shoppingLists.map(shoppingList => <Shop
        key={shoppingList.id}
        itemId={shoppingList.id}
        itemTitle={shoppingList.title}
        itemDescription={shoppingList.description}
        itemPrice={shoppingList.price}
        itemIngredients={shoppingList.ingredients}/>)

    return (
        <>
            {/*<p>This is Shopping!</p>*/}
            <div className={"main"}>
                <section className={"container"}>
                    <Card>
                        <ul>
                            {!itemCtx.isActive && list}
                            {itemCtx.isActive && <ShoppingListItems/>}
                        </ul>
                    </Card>
                </section>
            </div>
        </>
    )
}

export default Shopping;