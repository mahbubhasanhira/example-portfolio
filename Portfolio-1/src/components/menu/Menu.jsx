import React from 'react';
import './menu.scss';
import MenuList from './MenuList';

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={menuOpen ? "menu active" : 'menu'}>
            <ul>
                <MenuList menuOpen={menuOpen} setMenuOpen={setMenuOpen} name='Home' link='#intro' />
                <MenuList menuOpen={menuOpen} setMenuOpen={setMenuOpen} name='Portfolio' link='#portfolio' />
                <MenuList menuOpen={menuOpen} setMenuOpen={setMenuOpen} name='Works' link='#works' />
                <MenuList menuOpen={menuOpen} setMenuOpen={setMenuOpen} name='Testimonials' link='#testimonials' />
                <MenuList menuOpen={menuOpen} setMenuOpen={setMenuOpen} name='Contact' link='#contact' />
            </ul>
        </div>
    );
};

export default Menu;