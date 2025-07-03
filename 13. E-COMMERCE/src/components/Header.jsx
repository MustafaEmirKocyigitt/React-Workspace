import React, { useState } from 'react'
import '../css/header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDrawer } from '../redux/sileces/basketSlice';



function Header() {
    const navigate = useNavigate();
    const { products } = useSelector((store) => store.basket);
    const dispatch = useDispatch();

    return (
        <div>
            <nav className="navbar">
                <div className="logo-text" onClick={() => navigate("/")}>
                    Ayaz Ticaret
                </div>

                <ul className="nav-links">
                    <li><a href="#">Anasayfa</a></li>
                    <li><a href="#">Hakkımızda</a></li>
                    <li><a href="#">Hizmetler</a></li>
                    <li><a href="#">İletişim</a></li>
                </ul>
                <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="primary">
                    <div className="search-container">
                        <input type="text" placeholder="Ürün Ara..." />
                        <CiShoppingBasket className='icon' />
                    </div>
                </Badge>
            </nav>
        </div>

    )
}

export default Header