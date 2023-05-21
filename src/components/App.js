import {Route, Routes} from "react-router-dom";
import Header from "./layout/Header";
import './styles.css'
import Footer from "./layout/Footer";
import Home from "../pages/Home";
import ShoppingLists from "../pages/ShoppingLists";
import Recipes from "../pages/Recipes";
import Statistics from "../pages/Statistics";

function App() {
    return (
        <>
            <Header/>
            <div className={"main-content"}>
                <Routes>
                    {<Route path={'/'} element={<Home/>}/>}
                    {<Route path={'/shopping-lists'} element={<ShoppingLists/>}/>}
                    {<Route path={'/recipes'} element={<Recipes/>}/>}
                    {<Route path={'/statistics'} element={<Statistics/>}/>}
                    {<Route path={'/*'} element={<Home/>}/>}
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
