import React from 'react';
import Popup from '../Navbar/Popup';

class ProductPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {
        id: 1,
        name: "CodeLoads",
        link: "https://codeloads.com",
        media: "/img/codeacademy.jpeg",
        upvote: 169,
        description: "A load of code",
        maker: {
          name: 'phil',
          avatar: '/img/phil.jpg'
        }
      }
    }
  }

  renderUpvoteButton(){
    return(
      <a className="upvote-button" href="#">
        <span>
          <i className="fa fa-sort-asc"></i>
        </span>
        {this.state.product.upvote}
      </a>
    );
  }

  renderHeader(){
    return(
      <header style={{backgroundImage: 'url(' + this.state.product.media + ')'}}>
        <section className="header-shadow">
          <h1>{this.state.product.name}</h1>
          <p>{this.state.product.description}</p>
          <section>
            {this.renderUpvoteButton()}
            <a className="getit-btn" href={this.state.product.link} target="_blank">Get it</a>
          </section>
        </section>

      </header>
    );
  }

  renderBodyDiscussion() {
    return (
      <section className="discussion">
        <h2>Discussion</h2>
        <section className="post-comment">
          <img className="medium-avatar" src="/img/phil.jpg"/>
          <input placeholder="What do you think of this product?" />
        </section>
      </section>
    );
  }

  renderBody() {
    return (
      <section className="product-popup-body">
        <main>
          {this.renderBodyDiscussion()}
        </main>
      </section>
    );
  }

  render() {
    return (
      <Popup {...this.props} style="product-popup">
        {this.renderHeader()}
        {this.renderBody()}
      </Popup>
    );
  }
}

export default ProductPopup;
