import "./Header.css";

import { Outlet, Link } from "react-router-dom";

function Header(){
    return(
        <header>
            Header
            <Link to="/shop">shop</Link>
        </header>
    );
}

export default Header;