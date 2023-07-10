import "./ShoppingLists.css"
import {useContext, useEffect, useState} from "react";
import Card from "../components/Card/Card";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import ShoppingListForm from "../components/ShoppingListForm/ShoppingListForm";
import ShoppingListItemsContext from "../context/ShoppingListItemsContext";
import ShoppingItemsList from "../components/ShoppingItemsList/ShoppingItemsList";
import classes from "../components/ShoppingListForm/ShoppingListForm.module.css";

function ShoppingLists() {
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

    function deleteShoppingList(id) {
        setShoppingLists(prevState => {
            return prevState.filter((shoppingList) => {
                return shoppingList.id !== id;
            })
        })
    }

    const list = shoppingLists.map(shoppingList => <ShoppingList
        key={shoppingList.id}
        itemId={shoppingList.id}
        itemTitle={shoppingList.title}
        itemDescription={shoppingList.description}
        itemPrice={shoppingList.price}
        itemIngredients={shoppingList.ingredients}
        onDelete={deleteShoppingList}/>)

    function handleBack() {
        itemCtx.deactivate();
    }

    return (
        <>
            <div style={{display: isLoading ? 'flex' : 'none'}} className='modal'>
                <div className={"modal-content"}>
                    <div className={'loader'}></div>
                    <div className={'modal-text'}>Loading...</div>
                </div>
            </div>
            <div className={"shopping-lists-main"}>
                <section className={"container"}>
                    <Card>
                        <ul>
                            {!itemCtx.isActive && list}
                            {itemCtx.isActive && <ShoppingItemsList/>}
                        </ul>
                    </Card>
                </section>
                <section className={"container"}>
                    {!itemCtx.isActive && <ShoppingListForm/>}
                    {/*itemCtx.isActive && <ShoppingItemForm/>  return button*/}
                    {itemCtx.isActive && <div className={"backButton"} onClick={handleBack}><p>Back</p></div>}
                </section>
            </div>
        </>
    )
}

export default ShoppingLists;