import React from 'react';
import ProductList from '../Product/ProductList';
class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [
        {
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
        },
        {
          id: 2,
          name: "Code4Cutie",
          link: "https://code4cutie.com",
          media: "/img/code4startup.jpeg",
          upvote: 278,
          description: "Code for cutie",
          maker: {
            name: 'mel',
            avatar: '/img/mel.jpg'
          }
        }
      ]
    }
  }


  render() {
    return (
      <section>
        <header>
          <img src="/img/banner.jpeg" width="100%" />
        </header>

        <section>
        <h2>ProductList</h2>
          <section className="container">
            {
              this.state.productList
              ?
              <ProductList productList={this.state.productList}/>
              :
              null
            }
          </section>
        </section>
      </section>
    );
  };
}

export default HomePage;
