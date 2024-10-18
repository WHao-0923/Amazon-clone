import React from 'react';
import './Header.css'
import logo from './assets/amazon_PNG25.png'
import SearchIcon from '@mui/icons-material/Search';
import {ShoppingCart} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function Header(props) {
    const [{cart,user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src={logo} alt=''/>
            </Link>
            <div className='header__search' >
                <input className='header__searchInput' type='text' placeholder='Search by Amazon'/>
                <SearchIcon className='header__searchIcon' s/>
            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionLineOne'>
                            Hello {user? user.email.split('@')[0] : 'Guest'}
                        </span>
                        <span className='header__optionLineTwo'>
                            {user? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>
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
                <Link to='/checkout'>
                    <div className="header__optionCart">
                        <ShoppingCart/>
                        <span className='header__optionlineTwo header__cartCount'>{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;