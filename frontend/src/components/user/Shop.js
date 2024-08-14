// import React, { useState } from 'react';
// import '../../assets/styles/Shop.css';
// import {Link} from 'react-router-dom';
// import Smartphone from '../../assets/images/iphone.jpg'
// import Laptop from '../../assets/images/lap.jpg'
// import Smartwatch from '../../assets/images/watch.jpg'
// import Tablet from '../../assets/images/tab.jpg'
// import Headphones from '../../assets/images/headph.jpg'
// import Camera from '../../assets/images/camera.jpg'
// import Speaker from '../../assets/images/charger.jpg'
// import Monitor from '../../assets/images/monitor.jpg'
// import Keyboard from '../../assets/images/keyboard.jpg'
// import Mouse from '../../assets/images/mouse.jpg'
// import Router from '../../assets/images/router.jpg'
// import Printer from '../../assets/images/printer.jpg'
// import Scanner from '../../assets/images/scanner.jpg'
// import Webcam from '../../assets/images/scan.jpg'
// import Ex from '../../assets/images/harddrive.jpg'
// import Fd from '../../assets/images/pen.jpg'
// import Md from '../../assets/images/mem.jpg'
// import Charger from '../../assets/images/charger.jpg'
// const posts = [
//     { productName: 'Smartphone', vuejs.org/', coins: 300, img: Smartphone },
//     { productName: 'Laptop', facebook.github.io/react/', coins: 1000, img: Laptop },
//     { productName: 'Smartwatch', angularjs.org/', coins: 200, img:Smartwatch},
//     { productName: 'Tablet', link: 'http://emberjs.com/', coins: 400, img:  Tablet},
//     { productName: 'Headphones', www.meteor.com/', coins: 150, img: Headphones },
//     { productName: 'Camera', link: 'http://aurelia.io/', coins: 600, img:  Camera},
//     { productName: 'Speaker', nodejs.org/en/', coins: 250, img: Speaker },
//     { productName: 'Monitor', pusher.com/', coins: 300, img: Monitor},
//     { productName: 'Keyboard',  coins: 100, img: Keyboard },
//     { productName: 'Mouse',  coins: 50, img:  Mouse},
//     { productName: 'Router',  coins: 120, img:  Router},
//     { productName: 'Printer',  coins: 250, img: Printer},
//     { productName: 'Scanner',  coins: 200, img: Scanner},
//     { productName: 'Webcam',  coins: 80, img: Webcam },
//     { productName: 'External Hard Drive',  coins: 150, img: Ex },
//     { productName: 'Flash Drive',  coins: 20, img: Fd },
//     { productName: 'Memory Card',  coins: 30, img: Md},
//     { productName: 'Charger',  coins: 25, img: Charger }
//   ];
  
//   const Shop = () => {
//     const [search, setSearch] = useState('');
  
//     const filteredList = posts.filter(post => 
//       post.productName.toLowerCase().includes(search.toLowerCase())
//     );
  
//     return (
//       <div id="app">
//         <div className="search-wrapper">
//           <input 
//             type="text" 
//             value={search} 
//             onChange={(e) => setSearch(e.target.value)} 
//             placeholder="Search product name.." 
//           />
//           <label>Search product name:</label>
//         </div>
//         <div className="wrapper">
//           {filteredList.map((post, index) => (
//             <div className="card" key={index}>
//               <Link to={post.link} target="_blank" rel="noopener noreferrer">
//                 <img src={post.img} alt={post.productName} />
//                 <small>Coins needed: {post.coins}</small>
//                 <p>{post.productName}</p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  


//   export default Shop;


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faCoins } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/Shop.css';
import { useNavigate } from 'react-router-dom';
import Smartphone from '../../assets/images/iphone.jpg';
import Laptop from '../../assets/images/lap.jpg';
import Smartwatch from '../../assets/images/watch.jpg';
import Tablet from '../../assets/images/tab.jpg';
import Headphones from '../../assets/images/headph.jpg';
import Camera from '../../assets/images/camera.jpg';
import Speaker from '../../assets/images/charger.jpg';
import Monitor from '../../assets/images/monitor.jpg';
import Keyboard from '../../assets/images/keyboard.jpg';
import Mouse from '../../assets/images/mouse.jpg';
import Router from '../../assets/images/router.jpg';
import Printer from '../../assets/images/printer.jpg';
import Scanner from '../../assets/images/scanner.jpg';
import Webcam from '../../assets/images/scan.jpg';
import Ex from '../../assets/images/harddrive.jpg';
import Fd from '../../assets/images/pen.jpg';
import Md from '../../assets/images/mem.jpg';
import Charger from '../../assets/images/charger.jpg';

const posts = [
  { productName: 'Smartphone', coins: 300, img: Smartphone, description: 'A powerful smartphone with the latest features.', rating: 4.5 },
  { productName: 'Laptop',  coins: 1000, img: Laptop, description: 'A high-performance laptop for all your needs.', rating: 4.7 },
  { productName: 'Smartwatch',  coins: 200, img: Smartwatch, description: 'Stay connected with this stylish smartwatch.', rating: 4.3 },
  { productName: 'Tablet', coins: 400, img: Tablet, description: 'A versatile tablet for work and play.', rating: 4.6 },
  { productName: 'Headphones',  coins: 150, img: Headphones, description: 'Experience high-quality sound with these headphones.', rating: 4.4 },
  { productName: 'Camera',  coins: 600, img: Camera, description: 'Capture moments with this high-resolution camera.', rating: 4.8 },
  { productName: 'Speaker',  coins: 250, img: Speaker, description: 'Enjoy your music with this powerful speaker.', rating: 4.5 },
  { productName: 'Monitor',  coins: 300, img: Monitor, description: 'A clear and sharp monitor for your computer.', rating: 4.2 },
  { productName: 'Keyboard',  coins: 100, img: Keyboard, description: 'A comfortable keyboard for all-day typing.', rating: 4.1 },
  { productName: 'Mouse',  coins: 50, img: Mouse, description: 'A precise and ergonomic mouse.', rating: 4.0 },
  { productName: 'Router',  coins: 120, img: Router, description: 'A fast and reliable router for your internet needs.', rating: 4.3 },
  { productName: 'Printer',  coins: 250, img: Printer, description: 'Print documents and photos with ease.', rating: 4.6 },
  { productName: 'Scanner',  coins: 200, img: Scanner, description: 'Scan documents quickly and efficiently.', rating: 4.2 },
  { productName: 'Webcam',  coins: 80, img: Webcam, description: 'High-quality video calls with this webcam.', rating: 4.1 },
  { productName: 'External Hard Drive',  coins: 150, img: Ex, description: 'Store your files securely with this hard drive.', rating: 4.4 },
  { productName: 'Flash Drive',  coins: 20, img: Fd, description: 'Portable storage on the go.', rating: 4.3 },
  { productName: 'Memory Card',  coins: 30, img: Md, description: 'Expand your device storage with this memory card.', rating: 4.2 },
  { productName: 'Charger',  coins: 25, img: Charger, description: 'Fast and reliable charging for your devices.', rating: 4.5 }
];
const Shop = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredList = posts.filter(post => 
    post.productName.toLowerCase().includes(search.toLowerCase())
  );

  const handleCardClick = (post) => {
    navigate('/shop-details', { state: post });
  };

  const handleCartClick = () => {
    navigate('/my-cart');
  };

  return (
    <div id="app">
      <div className="header">
        <div className="cart-button" onClick={handleCartClick}>
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          <span>Cart</span>
        </div>
      </div>
      <div className="search-wrapper">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input 
          type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          // placeholder="Search product name.." 
        />
        <label>Search product name:</label>
      </div>
      <div className="wrapper">
        {filteredList.map((post, index) => (
          <div className="card" key={index} onClick={() => handleCardClick(post)}>
            <img src={post.img} alt={post.productName} />
            <small>
              <FontAwesomeIcon icon={faCoins} className="coin-icon" />
              Coins needed: {post.coins}
            </small>
            <p>{post.productName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;