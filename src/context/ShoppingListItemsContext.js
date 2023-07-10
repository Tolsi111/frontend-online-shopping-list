import React, {useState} from 'react';

const ShoppingListItemsContext = React.createContext({
    isActive: false,
    shoppingListId: 0,
    selectedShoppingListIngredients: [],
    activate: () => {
    },
    deactivate: () => {
    },
    setSelectedShoppingListId: (id) => {
    },
    setSelectedShoppingListIngredients: (list) => {
    }
})

export const ShoppingListItemsContextProvider = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [shoppingListId, setShoppingListId] = useState(0);
    const [shoppingListIngredients, setShoppingListIngredients] = useState([]);

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

    return (<ShoppingListItemsContext.Provider value={{
        isActive: isActive,
        shoppingListId: shoppingListId,
        selectedShoppingListIngredients: shoppingListIngredients,
        activate: activate,
        deactivate: deactivate,
        setSelectedShoppingListId: setSelectedShoppingListId,
        setSelectedShoppingListIngredients: setSelectedShoppingListIngredients
    }}>{props.children}</ShoppingListItemsContext.Provider>)
}

export default ShoppingListItemsContext;