import React, { useState } from 'react';
import './Header.scss';
import Logo from "../assest/img/logo.svg"
function Header() {
    const [nav, setNav] = useState(false);
  return (
    <header className='header'>
        <div className="container">
            <nav className='nav'>
                <a className='nav__img' href="#">
                    <img src={Logo} alt="" />
                </a>
                <ul className='nav__list'>
                    <li className='nav__list__items'><a href="#">Shop</a></li>
                    <li className='nav__list__items'><a href="#">Blog</a></li>
                    <li className='nav__list__items'><a href="#">Our Story</a></li>
                </ul>
                <ul className='nav__list__icon'>
                    <li className='nav__list__icon__items'>|</li>
                    <li className='nav__list__icon__items'><a href="#"><i class="bi bi-search"></i></a></li>
                    <li className='nav__list__icon__items'><a href="#"><i class="bi bi-cart"></i></a></li>
                    <li className='nav__list__icon__items'><a href="#"><i class="bi bi-person"></i></a></li>
                </ul>
                <ul className='nav__res' onClick={()=> setNav(!nav)}>
                    <li><a className='nav__res__a' href="#"><i class="bi bi-cart"></i></a></li>
                    {nav ? <li><button onClick={(e)=>console.log("ok2")} className='nav__res__btn2' ><i class="bi bi-x-lg"></i></button></li>: <li><button onClick={(e)=>console.log("ok1")} className='nav__res__btn1' ><i class="bi bi-text-right"></i></button></li>}
                </ul>
                <div className={nav ? ['nav__responsive', 'active'].join(' ') : ["nav__responsive"]}>
                    <div className="search">
                        <button>
                            <i class="bi bi-search"></i>
                        </button>
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="nav__responsive__list">
                        <ul className='nav__responsive__list__1'>
                            <li className='nav__responsive__list__1__items'><a href="#">Home</a></li>
                            <li className='nav__responsive__list__1__items'><a href="#">Shop</a></li>
                            <li className='nav__responsive__list__1__items'><a href="#">About</a></li>
                            <li className='nav__responsive__list__1__items'><a href="#">Blog</a></li>
                            <li className='nav__responsive__list__1__items'><a href="#">Help</a></li>
                            <li className='nav__responsive__list__1__items'><a href="#">Contact</a></li>
                            <li className='nav__responsive__list__1__items'><a href="#">Search</a></li>
                        </ul>
                        <ul className='nav__responsive__list__2'>
                            <li className='nav__responsive__list__2__items'><a href="#"><i class="bi bi-person"></i> My account</a></li>
                            <li className='nav__responsive__list__2__items'><a href="#"><i class="bi bi-box-arrow-right"></i> Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  );
}

export default Header;
