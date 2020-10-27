import React from 'react'
import { connect } from 'react-redux';
import { selectorCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem =>  (
        <CartItem key={cartItem.key} item={cartItem}/>
      ))}
    </div>
    <CustomButton>go to checkout</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectorCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);