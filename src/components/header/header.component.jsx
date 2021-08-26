import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
/*

 <div className='option'>

    <div className='header' >


<Link className='logo-container' to="/">
    <Logo className='logo'/>
</Link>
<UncontrolledDropdown className='options'>
      <DropdownToggle caret>
        Menu
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header><Link className='option' to ='/shop'>
    SHOP
</Link></DropdownItem>
        <DropdownItem ><Link className='option' to ='/contact'>
    CONTACT
</Link></DropdownItem>
      
        <DropdownItem divider />
        <DropdownItem>
        {
   currentUser ? 
<div className='option' onClick={() => auth.signOut()}>
<h3>{currentUser.displayName}</h3>
    SIGN OUT
</div>
   
   :
   <Link className='option' to='/signin'>SIGN IN</Link>
}
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>

<div className='options'>



<CartIcon/>
</div>
{
    hidden ? null :
    <CartDropdown />
}

    </div>
    </div>

*/

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <div className="options">
      <UncontrolledDropdown className="options">
        <DropdownToggle caret>Menu</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>
            <Link className="option" to="/shop">
              SHOP
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link className="option" to="/contact">
              CONTACT
            </Link>
          </DropdownItem>

          <DropdownItem divider />
          <DropdownItem>
            {currentUser ? (
              <div className="option" onClick={() => auth.signOut()}>
                <h3>{currentUser.displayName}</h3>
                SIGN OUT
              </div>
            ) : (
              <Link className="option" to="/signin">
                SIGN IN
              </Link>
            )}
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          <h3>{currentUser.displayName}</h3>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
