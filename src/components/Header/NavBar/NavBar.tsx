import { FC } from "react";
import './NavBar.scss'
export const NavBar: FC = () => {
    return <div className="navBar">
        <h1 className="navBar__logo">Vitalii Velychko <span>portfolio</span></h1>
        <div className="navBar__row">
            {/* <div className="navBar__language">UA</div> */}
            <nav className="navBar__nav">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>CV</li>
                    <li>Contacts</li>
                </ul>
            </nav>
            {/* <div className="navBar__theme">
                dark
            </div> */}
        </div>
    </div>;
};

