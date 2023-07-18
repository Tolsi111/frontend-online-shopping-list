import classes from "./ShoppingItemForm.module.css"
import Tooltip from "@material-ui/core/Tooltip";
import {useContext, useRef, useState} from "react";
import ShoppingListItemsContext from "../../context/ShoppingListItemsContext";
import ResultList from "./ResultList/ResultList";

function ShoppingItemForm() {
    const itemCtx = useContext(ShoppingListItemsContext);

    const [amountError, setAmountError] = useState(false);
    const amountRef = useRef();

    const [searchTerm, setSearchTerm] = useState("");
    const searchRef = useRef();
    const [searching, setSearching] = useState(false);
    const [resultList, setResultList] = useState([]);

    function handleSave() {
        // console.log(amountRef)
        console.log("Saving hopping item...");
        const amountValue = parseInt(amountRef.current.value);
        // console.log("save shopping item!!!" + amountValue);
        if (isNaN(amountValue) || amountValue <= 0) {
            setAmountError(true);
            return;
        }
        else {
            setAmountError(false);
            console.log("shopping item amount saved: " + amountValue);
        }
    }

    async function handleChangeSearchTerm(e) {
        setSearchTerm(e.target.value);
        setSearching(true)
        console.log("Searching...")// begin search toggle on to display search result list
        // when an item is selected, close the overlay

        const response = await fetch('http://localhost:8080/items/by-name?name=' + searchTerm, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const responseData = await response.json();
        // parse responseData
        const responseItems = responseData.data.items;
        const loadedItems = [];
        for (const key in responseItems) {
            loadedItems.push({
                itemId: responseItems[key].id,
                itemName: responseItems[key].name,
                itemCategory: responseItems[key].category,
                itemPrice: responseItems[key].price_per_unit,
            })
        }
        setResultList(loadedItems);
        // begin search toggle off
        console.log("Searching done!");
        console.log(resultList);
    }

    function handleBack() {
        itemCtx.deactivate();
    }

    function closeResultList() {
        setSearching(false);
    }

    return (
        <div className={classes.mainFormContainer}>
            <h1>Save shopping item</h1>
            <form className={classes.inputSection}>
                <div className={classes.input}></div>
                <div className={classes.input}>
                    <label>Search item </label>
                    {searching && <ResultList resultList={resultList} closeResultList={closeResultList}/>}
                    <input type="text" value={searchTerm} onChange={handleChangeSearchTerm}/>
                </div>
                <div className={classes.input}>
                    <label>Amount </label>
                    <Tooltip title={"Please select a valid number"} placement={"top"} open={amountError}>
                        <input type="number" defaultValue={0} ref={amountRef}/>
                    </Tooltip>
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