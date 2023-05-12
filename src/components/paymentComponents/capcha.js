/**
 * @description Captcha
 * Displays the class to validate captcha
 * @returns captcha along with validating it
 * @author Sanjana Rao
 * @since 15-02-2022
 */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import './capcha.css';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../../actions/cartActions';
import { deleteCart } from '../../service/cartService';

export default function CaptchaTest() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.allCarts.cart);
  const history = useHistory();

  useEffect(() => {
    loadCaptchaEnginge(8);
  }, []);

  const EmptyCart = () => {
    cartItems.map((item) => deleteCart(item.id));
    dispatch(emptyCart());
  };

  const doSubmit = () => {
    const userCaptcha = document.getElementById('userCaptchaInput').value;
    if (validateCaptcha(userCaptcha) === true) {
      EmptyCart();
      history.push('/orderComplete');
      loadCaptchaEnginge(6);
      document.getElementById('userCaptchaInput').value = '';
    } else {
      alert('Captcha Does Not Match');
      document.getElementById('userCaptchaInput').value = '';
    }
  };

  return (
    <div>
      <div className="container">
        <div className="formGroup">
          <div className="template">
            <LoadCanvasTemplate />
          </div>
          <div className="userInputBox">
            <div>
              <input
                placeholder="Enter Captcha"
                id="userCaptchaInput"
                name="userCaptchaInput"
                type="text"
                className="userInput"
              />
            </div>
          </div>

          <div className="buttonText">
            <div>
              <button
                type="submit"
                className="placeOrder"
                onClick={doSubmit}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
