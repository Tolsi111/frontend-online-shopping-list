import classes from './Layout.module.css'
import NavButton from "../NavButton";

function Header() {
    function handleClick() {

    }

    return (
        <>
            <header className={classes.header}>
                <h1 className={classes.title}>Online shopping cart</h1>
                <div className={classes.buttonContainer}>
                    <NavButton className={classes.homeButton} title={'Home'} navigateTo={"/"}/>
                </div>
                {/*<div className={classes.homeButton} onClick={handleClick}>*/}
                {/*    <p>Home</p>*/}
                {/*</div>*/}
                {/*{authCtx.isLoggedIn && <p>Hi, user</p>}*/}
                {/*{authCtx.isLoggedIn && <NavButton type={"submit"}> logout</NavButton>}*/}
            </header>
        </>
    )
}

export default Header;