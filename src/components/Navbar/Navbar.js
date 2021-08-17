import menuItems from "./sub/MenuItems";
import './Navbar.css'
import { useState } from "react";

const Navbar = () => {
    const [isClickedMenuIcon, setClickedMenuIcon] = useState(false);
    
    
    const menuItemsList = menuItems.map((item, id) => (
        <li className="navbar-li" key={id}>
            <a href={item.path} className={item.className}>{item.title}</a>
        </li>
    ))


    const handleClick = () => {
        setClickedMenuIcon(!isClickedMenuIcon);
    }

    return(
        <div className="navbar">
            <div className="navbar-logo">Pokemons<p className="navbar-desc">Make this website colorful</p></div>
            <div className="menu-icon" onClick={handleClick}>{!isClickedMenuIcon ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}</div>
            <ul className={!isClickedMenuIcon ? "navbar-menu" : "navbar-menu active"}>
                {menuItemsList}
            </ul>
        </div>
    )
}

export default Navbar;