import "./ShoppingListToolBox.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useContext, useState} from "react";
import ShoppingListFormContext from "../../context/ShoppingListFormContext";
import ShoppingListItemsContext from "../../context/ShoppingListItemsContext";

function ShoppingListToolBox(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState();

    const formCtx = useContext(ShoppingListFormContext);
    const itemCtx = useContext(ShoppingListItemsContext);

    function handleView(e) {
        e.preventDefault()
        itemCtx.activate();
        itemCtx.setSelectedShoppingListId(props.itemId);
        itemCtx.setSelectedShoppingListIngredients(props.itemIngredients);
    }

    function handleShop(e) {
        e.preventDefault()
        console.log("shop!");
    }

    function handleEdit(e) {
        e.preventDefault()
        formCtx.setSelectedShoppingList({id: props.itemId, title: props.itemTitle, description: props.itemDescription})
        console.log("edit!");
    }

    function handleDelete(e) {
        e.preventDefault()
        setIsLoading(true);

        async function deleteShoppingList() {
            const response = await fetch('http://localhost:8080/shopping-lists/' + props.itemId, {
                method: 'DELETE'
            })

            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const responseData = await response.json();
            setIsLoading(false)
        }

        deleteShoppingList().catch((err) => {
            setHttpError(err.message);
            setIsLoading(false);
        });
        props.ondelete(props.itemId)
        console.log("delete: " + props.itemId);
    }

    return (
        <div className={"toolbox-buttons-container"}>
            <div className={"toolbox-button view"} onClick={handleView}><VisibilityIcon/></div>
            <div className={"toolbox-button shop"} onClick={handleShop}><ShoppingCartIcon/></div>
            <div className={"toolbox-button edit"} onClick={handleEdit}><ModeEditIcon/></div>
            <div className={"toolbox-button delete"} onClick={handleDelete}><DeleteForeverIcon/></div>
        </div>
    )
}

export default ShoppingListToolBox;