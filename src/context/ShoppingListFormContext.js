import React, {useState} from 'react';

const ShoppingListFormContext = React.createContext({
    id: 0,
    title: '',
    description: '',
    shoppingLists: [],
    setSelectedShoppingList: (shoppingList) => {
    }
})

export const ShoppingListContextProvider = (props) => {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const setSelectedShoppingList = (shoppingList) => {
        setId(shoppingList.id);
        setTitle(shoppingList.title);
        setDescription(shoppingList.description);
    }


    return (<ShoppingListFormContext.Provider value={{
        id: id,
        title: title,
        description: description,
        setSelectedShoppingList: setSelectedShoppingList
    }}>{props.children}</ShoppingListFormContext.Provider>)
}

export default ShoppingListFormContext;