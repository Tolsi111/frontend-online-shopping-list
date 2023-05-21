import classes from "./ShoppingListForm.module.css"
import {useContext, useRef, useState} from "react";
import ShoppingListFormContext from "../../context/ShoppingListFormContext";

function ShoppingListForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState();

    const formCtx = useContext(ShoppingListFormContext);

    const titleRef = useRef();
    const descriptionRef = useRef()

    async function createShoppingList(title, description) {
        setIsLoading(true)

        const postObject = {
            title: title,
            description: description
        }

        const response = await fetch('http://localhost:8080/shopping-lists', {
            method: "POST",
            body: JSON.stringify(postObject),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const responseData = await response.json();
        console.log(responseData);
        setIsLoading(false);
    }

    async function updateShoppingList(id, title, description) {
        setIsLoading(true)

        const postObject = {
            title: title,
            description: description
        }

        const response = await fetch('http://localhost:8080/shopping-lists/'+ id, {
            method: "PUT",
            body: JSON.stringify(postObject),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const responseData = await response.json();
        console.log(responseData);
        setIsLoading(false);
    }

    function handleSave() {
        console.log("saving...")
        console.log(formCtx.id)
        console.log(titleRef.current.value)
        console.log(descriptionRef.current.value)

        if (formCtx.id === 0) //save
        {
            createShoppingList(titleRef.current.value, descriptionRef.current.value)
                .catch((err) => {
                    setHttpError(err.message);
                    setIsLoading(false);
                });
            console.log("save!" + titleRef.current.value + " " +  descriptionRef.current.value)
        } else // edit
        {
            updateShoppingList(formCtx.id,titleRef.current.value, descriptionRef.current.value)
                .catch((err) => {
                    setHttpError(err.message);
                    setIsLoading(false);
                });
            console.log("edit! " + formCtx.id + " " + titleRef.current.value + " " +  descriptionRef.current.value)
        }
        window.location.reload();
        console.log("saved!")
    }

    return (
        <div className={classes.mainFormContainer}>
            <h1>Save shopping list</h1>
            <form className={classes.inputSection}>
                <div className={classes.input}></div>
                <div className={classes.input}>
                    <label>Title </label>
                    <input type="text" defaultValue={formCtx.title} ref={titleRef}/>
                </div>
                <div className={classes.input}>
                    <label>Description </label>
                    <input type="textarea" defaultValue={formCtx.description} ref={descriptionRef}/>
                </div>
                <div className={classes.input}></div>
            </form>
            <div className={classes.saveButton} onClick={handleSave}>
                <p>Save</p>
            </div>
        </div>
    )
}

export default ShoppingListForm;