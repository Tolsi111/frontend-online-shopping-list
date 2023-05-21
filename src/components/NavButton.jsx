import classes from './NavButton.module.css'
import {useNavigate} from "react-router";
// import {Link} from 'react-router-dom'

function NavButton (props) {
    const navigate = useNavigate();

    function handleClick() {
        // event.preventDefault();
        navigate(props.navigateTo)
    }


    return (
        <button onClick={handleClick} className={classes.btn}>
            <p>{props.title}</p>
        </button>
    )
}

export default NavButton;