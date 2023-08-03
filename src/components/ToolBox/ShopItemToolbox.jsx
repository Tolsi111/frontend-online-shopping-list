import {useContext} from "react";
import ShoppingListItemsContext from "../../context/ShoppingListItemsContext";
import CheckIcon from '@mui/icons-material/Check';

function ShopItemToolbox(props) {
    const itemCtx = useContext(ShoppingListItemsContext);

    function handleDelete(e) {
        e.preventDefault();
        props.ondelete(props.shoppingItemId);
    }


    return (
        <div className={"toolbox-buttons-container"}>
            <div className={"toolbox-button view"} onClick={handleDelete}><CheckIcon/></div>
        </div>
    )
}

export default ShopItemToolbox;