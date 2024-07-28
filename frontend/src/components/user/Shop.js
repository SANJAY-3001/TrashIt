import React, { useState } from 'react';
import '../../assets/styles/Shop.css'
const posts = [
    { productName: 'Smartphone', link: 'https://vuejs.org/', coins: 300, img: 'https://vuejs.org//images/logo.png' },
    { productName: 'Laptop', link: 'https://facebook.github.io/react/', coins: 1000, img: 'https://daynin.github.io/clojurescript-presentation/img/react-logo.png' },
    { productName: 'Smartwatch', link: 'https://angularjs.org/', coins: 200, img: 'https://angularjs.org/img/ng-logo.png' },
    { productName: 'Tablet', link: 'http://emberjs.com/', coins: 400, img: 'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200' },
    { productName: 'Headphones', link: 'https://www.meteor.com/', coins: 150, img: 'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png' },
    { productName: 'Camera', link: 'http://aurelia.io/', coins: 600, img: 'https://cdn.auth0.com/blog/aurelia-logo.png' },
    { productName: 'Speaker', link: 'https://nodejs.org/en/', coins: 250, img: 'https://code-maven.com/img/node.png' },
    { productName: 'Monitor', link: 'https://pusher.com/', coins: 300, img: 'https://avatars1.githubusercontent.com/u/739550?v=3&s=400' },
    { productName: 'Keyboard', link: 'http://feathersjs.com/', coins: 100, img: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg' },
    { productName: 'Mouse', link: 'http://feathersjs.com/', coins: 50, img: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg' },
    { productName: 'Router', link: 'http://feathersjs.com/', coins: 120, img: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg' },
    { productName: 'Printer', link: 'http://feathersjs.com/', coins: 250, img: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg' },
    { productName: 'Scanner', link: 'http://feathersjs.com/', coins: 200, img: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg' },
    { productName: 'Webcam', link: 'http://feathersjs.com/', coins: 80, img: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg' },
    { productName: 'External Hard Drive', link: 'http://feathersjs.com/', coins: 150, img: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg' },
    { productName: 'Flash Drive', link: 'http://feathersjs.com/', coins: 20, img: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg' },
    { productName: 'Memory Card', link: 'http://feathersjs.com/', coins: 30, img: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg' },
    { productName: 'Charger', link: 'http://feathersjs.com/', coins: 25, img: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg' },
  ];
  
  const Shop = () => {
    const [search, setSearch] = useState('');
  
    const filteredList = posts.filter(post => 
      post.productName.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div id="app">
        <div className="search-wrapper">
          <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search product name.." 
          />
          <label>Search product name:</label>
        </div>
        <div className="wrapper">
          {filteredList.map((post, index) => (
            <div className="card" key={index}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img src={post.img} alt={post.productName} />
                <small>Coins needed: {post.coins}</small>
                <p>{post.productName}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  


  export default Shop;