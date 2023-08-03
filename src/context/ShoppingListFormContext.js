import React, {useState} from 'react';

const ShoppingListFormContext = React.createContext({
    id: 0,
    title: '',
    description: '',
    shoppingLists: [],
    setSelectedShoppingList: (shoppingList) => {
    },
    refresh: () => {

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

    const refresh = () => {
        setId(0);
        setTitle('');
        setDescription('');
    }


    return (<ShoppingListFormContext.Provider value={{
        id: id,
        title: title,
        description: description,
        setSelectedShoppingList: setSelectedShoppingList,
        refresh: refresh
    }}>{props.children}</ShoppingListFormContext.Provider>)
}

export default ShoppingListFormContext;