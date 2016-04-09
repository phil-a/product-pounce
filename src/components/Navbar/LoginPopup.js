import React from 'react';
import Popup from './Popup';

class LoginPopup extends React.Component {
  render() {
    return (
      <Popup {...this.props}>
        <img src ="/img/kitty.png"/>
        <h1>Login to Join the Community</h1>
        <p>Product Pounce is a community to share and geek out about the latest code, podcasts and news. Join us :)</p>
        <button className="facebook-btn">Login with Facebook</button>
        <p>We'll never post to Facebook without your permission.</p>
      </Popup>
    );
  }

}

export default LoginPopup
