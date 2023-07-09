import React, {useState} from 'react';

const ShoppingListItemsContext = React.createContext({
    isActive: false,
    shoppingListId: 0,
    activate: () => {},
    deactivate: () => {},
    setSelectedShoppingListId: (id) => {}
})

export const ShoppingListItemsContextProvider = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [shoppingListId, setShoppingListId] = useState(0);

    const activate = () => {
        setIsActive(true);
    }

    const deactivate = () => {
        setIsActive(false);
    }

    const setSelectedShoppingListId = (id) => {
        setShoppingListId(id);
    }

    return (<ShoppingListItemsContext.Provider value={{
        isActive: isActive,
        shoppingListId: shoppingListId,
        activate: activate,
        deactivate: deactivate,
        setSelectedShoppingListId: setSelectedShoppingListId
    }}>{props.children}</ShoppingListItemsContext.Provider> )
}

export default ShoppingListItemsContext;