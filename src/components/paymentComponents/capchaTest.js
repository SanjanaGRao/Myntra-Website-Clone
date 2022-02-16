/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import './capcha.css';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';

class CaptchaTest extends Component {
  componentDidMount() {
    loadCaptchaEnginge(8);
  }

  doSubmit() {
    const userCaptcha = document.getElementById('userCaptchaInput').value;
    if (validateCaptcha(userCaptcha) === true) {
      window.location.href = '/orderComplete';
      loadCaptchaEnginge(6);
      document.getElementById('userCaptchaInput').value = '';
    } else {
      alert('Captcha Does Not Match');
      document.getElementById('userCaptchaInput').value = '';
    }
  }

  render() {
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
                  onClick={() => this.doSubmit()}
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
}

export default CaptchaTest;
