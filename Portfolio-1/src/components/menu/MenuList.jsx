import React from 'react';

const MenuList = ({ menuOpen, setMenuOpen, link, name }) => {
    return (
        <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href={link}>{name}</a>
        </li>
    );
};

export default MenuList;