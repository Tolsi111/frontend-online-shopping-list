import "./ShoppingLists.css"
import {useContext, useEffect, useState} from "react";
import Card from "../components/Card/Card";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import ShoppingListForm from "../components/ShoppingListForm/ShoppingListForm";
import ShoppingListItemsContext from "../context/ShoppingListItemsContext";
import ShoppingItemsList from "../components/ShoppingItemsList/ShoppingItemsList";

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
                loadedShoppingLists.push({
                    id: responseItems[key].id,
                    title: responseItems[key].title,
                    description: responseItems[key].description,
                    price: responseItems[key].price,
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
        onDelete={deleteShoppingList}/>)

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
                            {list}
                        </ul>
                    </Card>
                </section>
                <section className={"container"}>
                    {!itemCtx.isActive && <ShoppingListForm/>}
                    {itemCtx.isActive && <ShoppingItemsList/>}
                </section>
            </div>
        </>
    )
}

export default ShoppingLists;