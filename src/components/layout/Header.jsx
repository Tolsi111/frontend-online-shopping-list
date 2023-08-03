import classes from './Layout.module.css'
import NavButton from "../NavButton";
import {useContext} from "react";
import ShoppingListItemsContext from "../../context/ShoppingListItemsContext";
import ShoppingListFormContext from "../../context/ShoppingListFormContext";

function Header() {
    const itemCtx = useContext(ShoppingListItemsContext);
    const formCtx = useContext(ShoppingListFormContext);

    function handleClick() {
        itemCtx.refresh();
        formCtx.refresh();
    }

    return (
        <>
            <header className={classes.header}>
                <h1>Online shopping cart</h1>
                <div className={classes.buttonContainer} onClick={handleClick}>
                    <NavButton className={classes.homeButton} title={'Home'} navigateTo={"/"} />
                </div>
            </header>
        </>
    )
}

export default Header;