import React, {useState} from 'react';

const ShoppingListItemsContext = React.createContext({
    isActive: false,
    shoppingListId: 0,
    selectedShoppingListIngredients: [],
    selectedItemId: 0,
    selectedShoppingItemId: 0,
    selectedItemName: '',
    activate: () => {
    },
    deactivate: () => {
    },
    setSelectedShoppingListId: (id) => {
    },
    setSelectedShoppingListIngredients: (list) => {
    },
    setSelectedItem: (id, name) => {
    },
    refresh: () => {

    }
})

export const ShoppingListItemsContextProvider = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [shoppingListId, setShoppingListId] = useState(0);
    const [shoppingListIngredients, setShoppingListIngredients] = useState([]);

    const [selectedItemId, setSelectedItemId] = useState(0);
    const [selectedShoppingItemId, setSelectedShoppingItemId] = useState(0);
    const [selectedItemName, setSelectedItemName] = useState('');

    const setSelectedItem = (id, name, shoppingItemId) => {
        console.log("selecting item: " + id + " " + name)
        setSelectedItemId(id);
        setSelectedItemName(name);
        setSelectedShoppingItemId(shoppingItemId)
        console.log("selecting item done: " + selectedItemId + " " + selectedItemName)
    }

    const activate = () => {
        setIsActive(true);
    }

    const deactivate = () => {
        setIsActive(false);
    }

    const setSelectedShoppingListId = (id) => {
        setShoppingListId(id);
    }

    const setSelectedShoppingListIngredients = (list) => {
        setShoppingListIngredients(list);
    }

    const refresh = () => {
        setIsActive(false);
        setShoppingListId(0);
        setShoppingListIngredients([]);
        setSelectedItemId(0);
        setSelectedShoppingItemId(0);
        setSelectedItemName('')
    }

    return (<ShoppingListItemsContext.Provider value={{
        isActive: isActive,
        shoppingListId: shoppingListId,
        selectedShoppingListIngredients: shoppingListIngredients,
        selectedItemId: selectedItemId,
        selectedShoppingItemId: selectedShoppingItemId,
        selectedItemName: selectedItemName,
        activate: activate,
        deactivate: deactivate,
        setSelectedShoppingListId: setSelectedShoppingListId,
        setSelectedShoppingListIngredients: setSelectedShoppingListIngredients,
        setSelectedItem: setSelectedItem,
        refresh: refresh
    }}>{props.children}</ShoppingListItemsContext.Provider>)
}

export default ShoppingListItemsContext;