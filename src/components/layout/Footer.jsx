import classes from './Layout.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <>
            <footer className={classes.footer}>
                <div>
                    <p>© {new Date().getFullYear()} Andrei Bacila.</p>
                </div>
                <div className={classes.links}>
                    <a href={"https://www.linkedin.com/in/romulus-andrei-bacila-662b1b196/"} target={"_blank"} rel={"noreferrer"}><LinkedInIcon className={classes.link}/></a>
                    <a href={"https://github.com/Tolsi111"} target={"_blank"} rel={"noreferrer"}><GitHubIcon className={classes.link}/></a>
                    <a href={"http://www.cs.ubbcluj.ro/en/"} target={"_blank"} rel={"noreferrer"}><SchoolIcon className={classes.link}/></a>
                </div>
            </footer>
        </>
    )
}

export default Footer