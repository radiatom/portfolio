import React, { FC } from "react";
import './Header.scss'
import { NavBar } from "./NavBar/NavBar";
export const Header: FC = () => {
    return <div className="header">
        <div className="container">
            <NavBar/>
        </div>
    </div>;
};
