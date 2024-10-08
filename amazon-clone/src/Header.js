import React from 'react';
import './Header.css'
import logo from './assets/amazon_PNG25.png'
import SearchIcon from '@mui/icons-material/Search';
import {ShoppingCart} from "@mui/icons-material";

function Header(props) {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt=''/>

            <div className='header__search' >
                <input className='header__searchInput' type='text' placeholder='Search by Amazon'/>
                <SearchIcon className='header__searchIcon' s/>
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign In
                    </span>
                </div>
                <div className='header__option'>
                     <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
            </div>
            <div>
                <div className="header__optionBasket">
                    <ShoppingCart/>
                    <span className='header__optionlineTwo header__basketCount'>0</span>
                </div>
            </div>
        </div>
    );
}

export default Header;