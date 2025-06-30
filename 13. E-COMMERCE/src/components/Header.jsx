import React, { useState } from 'react'
import '../css/header.css'
import { CiShoppingBasket } from "react-icons/ci";
function Header() {

    return (
        <div>
            <nav className="navbar">
                <div className="logo-text">
                    Ayaz Ticaret
                </div>

                <ul className="nav-links">
                    <li><a href="#">Anasayfa</a></li>
                    <li><a href="#">Hakkımızda</a></li>
                    <li><a href="#">Hizmetler</a></li>
                    <li><a href="#">İletişim</a></li>
                </ul>

                <div className="search-container">
                    <input type="text" placeholder="Ürün Ara..." />
                    <CiShoppingBasket className='icon' />
                </div>
            </nav>
        </div>

    )
}

export default Header