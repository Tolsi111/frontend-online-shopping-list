import classes from './Layout.module.css'
import NavButton from "../NavButton";

function Header() {
    function handleClick() {

    }

    return (
        <>
            <header className={classes.header}>
                <h1>Online shopping cart</h1>
                <div className={classes.buttonContainer}>
                    <NavButton className={classes.homeButton} title={'Home'} navigateTo={"/"}/>
                </div>
            </header>
        </>
    )
}

export default Header;