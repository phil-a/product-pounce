import React from 'react';

class Navbar extends React.Component {
  renderProductSearch() {
    return (
      <section className="left-side">
        <input className="product-search" placeholder="Search" />
      </section>
    );
  }

  renderLogo() {
    return (
      <a href="#"><img src="/img/favicon.ico"/></a>
    );
  }

  renderUser() {
    return (
      <section className="right-side">
        <a href="#" className="login-btn">Login</a>
      </section>
    );
  }

  render() {
    return (
      <section>
        <section className="navbar">
          {this.renderProductSearch()}
          {this.renderLogo()}
          {this.renderUser()}
        </section>
      </section>
    );
  }
}

export default Navbar;
