import "./ShoppingListToolBox.css"
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function ShoppingItemToolBox(props) {

    function handleEdit(e) {
        e.preventDefault();
        console.log("edit shopping item!")
    }

    function handleDelete(e) {
        e.preventDefault();
        console.log("delete shopping item!")
    }

    return (
        <div className={"toolbox-buttons-container"}>
            <div className={"toolbox-button edit"} onClick={handleEdit}><ModeEditIcon/></div>
            <div className={"toolbox-button delete"} onClick={handleDelete}><DeleteForeverIcon/></div>
        </div>
    )
}

export default ShoppingItemToolBox;