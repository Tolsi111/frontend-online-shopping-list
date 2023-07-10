import classes from "./ShoppingItemForm.module.css"
import Tooltip from "@material-ui/core/Tooltip";
import {useContext} from "react";
import ShoppingListItemsContext from "../../context/ShoppingListItemsContext";

function ShoppingItemForm() {
    const itemCtx = useContext(ShoppingListItemsContext);

    function handleSave() {
        console.log("save shopping item!!!")
    }

    function handleBack() {
        itemCtx.deactivate();
    }

    return (
        <div className={classes.mainFormContainer}>
            <h1>Save shopping item</h1>
            <form className={classes.inputSection}>
                <div className={classes.input}></div>
                <div className={classes.input}>
                    <label>Title </label>
                    {/*<Tooltip title={"Please add a title"} placement={"top"} open={titleError}>*/}
                    {/*    <input type="text" defaultValue={formCtx.title} ref={titleRef}/>*/}
                    {/*</Tooltip>*/}
                </div>
                <div className={classes.input}>
                    <label>Description </label>
                    {/*<Tooltip title={"Please write a description"} placement={"top"} open={descriptionError}>*/}
                    {/*    <input type="textarea" defaultValue={formCtx.description} ref={descriptionRef}/>*/}
                    {/*</Tooltip>*/}
                </div>
                <div className={classes.input}></div>
            </form>
            <div className={classes.buttonsContainer}>
                <div className={classes.formButton} onClick={handleBack}>
                    <p>Back</p>
                </div>
                <div className={classes.formButton} onClick={handleSave}>
                    <p>Save</p>
                </div>
            </div>
        </div>
    )
}

export default ShoppingItemForm