import classes from './Layout.module.css'

function Header() {
    return (
        <>
            <header className={classes.header}>
                <h1>Online shopping cart</h1>
                {/*{authCtx.isLoggedIn && <p>Hi, user</p>}*/}
                {/*{authCtx.isLoggedIn && <NavButton type={"submit"}> logout</NavButton>}*/}
            </header>
        </>
    )
}

export default Header;