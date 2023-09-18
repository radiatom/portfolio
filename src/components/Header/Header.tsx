import './Header.scss'
import { NavBar } from "./NavBar/NavBar";
export const Header= () => {
    return <div className="header">
        <div className="container">
            <NavBar/>
        </div>
    </div>;
};
