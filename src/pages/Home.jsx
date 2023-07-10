import NavButton from "../components/NavButton";
import "./Home.css";

function Home() {

    return (
        <div className={"buttons-container"}>
            <div className={"button-row"}>
                <div className={"saveButton"}>
                    <NavButton title={'Start shopping'} navigateTo={'/shopping-lists'}/>
                </div>
                <div className={"saveButton"}>
                    <NavButton title={'Statistics'} navigateTo={'/statistics'}/>
                </div>
            </div>
            <div className={"button-row"}>
                <div className={"saveButton"}>
                    <NavButton title={'Shopping lists'} navigateTo={'/shopping-lists'}/>
                </div>
                <div className={"saveButton"}>
                    <NavButton title={'Recipes list'} navigateTo={'/recipes'}/>
                </div>
            </div>
        </div>
    )
}

export default Home;