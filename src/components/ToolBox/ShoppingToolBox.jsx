import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ShoppingToolBox(props) {
    function handleShop(e) {
        e.preventDefault()
        console.log("shop!");
    }

    return (
        <div className={"toolbox-buttons-container"}>
            <div className={"toolbox-button shop"} onClick={handleShop}><ShoppingCartIcon/></div>
        </div>
    )
}

export default ShoppingToolBox;