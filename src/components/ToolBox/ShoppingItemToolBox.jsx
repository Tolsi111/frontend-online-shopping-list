import "./ShoppingListToolBox.css"
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {useContext} from "react";
import ShoppingListItemsContext from "../../context/ShoppingListItemsContext";

function ShoppingItemToolBox(props) {

    const itemCtx = useContext(ShoppingListItemsContext);

    function handleEdit(e) {
        e.preventDefault();
        itemCtx.setSelectedItem(props.itemId,props.itemName, props.shoppingItemId);
    }

    function handleDelete(e) {
        e.preventDefault();

        async function deleteShoppingItem() {
            const response = await fetch('http://localhost:8080/shopping-items/' + props.shoppingItemId, {
                method: 'DELETE'
            })
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const responseData = await response.json();
        }

        deleteShoppingItem().catch((err) => {
            console.log(err);
        });
        props.ondelete(props.shoppingItemId);
    }

    return (
        <div className={"toolbox-buttons-container"}>
            <div className={"toolbox-button edit"} onClick={handleEdit}><ModeEditIcon/></div>
            <div className={"toolbox-button delete"} onClick={handleDelete}><DeleteForeverIcon/></div>
        </div>
    )
}

export default ShoppingItemToolBox;