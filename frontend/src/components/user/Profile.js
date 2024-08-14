// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { Link, Routes, Route } from 'react-router-dom';
// import { FaUser, FaMapMarkerAlt, FaCreditCard, FaGift, FaSignOutAlt, FaStar, FaBell, FaListAlt, FaBoxOpen, FaReceipt } from 'react-icons/fa';
// import '../../assets/styles/Profile.css';
// import { useAuth } from '../context/AuthContext'; 
// import profile from '../../assets/images/bitcoin.jpg';


// const Profile = () => {
//   const navigate = useNavigate();
//   const { logout } = useAuth(); 

//   const handleLogout = () => {
//     logout(); 
//     toast.success('Logged out successfully!');
//     navigate('/login');
//   };
//   return (
//     <div className="profile-container">
//       <div className="sidebar">
//         <div className="profile-header">
//           <img src="https://img.freepik.com/premium-vector/blue-circle-with-white-user-vector_941526-5749.jpg?w=740" alt="Profile" className="profile-pic" />
//           <h2>TrashIt User</h2>
//         </div>
//         <ul className="menu">
//           <li><Link to="/profile/my-orders"><FaBoxOpen className='pro-icon' /> My Orders</Link></li>
//           <li className="menu-heading">Account Settings</li>
//           <li className="submenu"><Link to="/profile/profile-information"><FaUser className='pro-icon' /> Profile Information</Link></li>
//           <li className="submenu"><Link to="/profile/manage-addresses"><FaMapMarkerAlt className='pro-icon' /> Manage Addresses</Link></li>
//           <li className="menu-heading">Payments</li>
//           <li className="submenu"><Link to="/profile/reward-coins"><FaGift className='pro-icon' />Reward Coins</Link></li>
//           <li className="submenu"><Link to="/profile/payment-details"><FaCreditCard  className='pro-icon'/>Payment Details</Link></li>
//           <li className="menu-heading">My Stuff</li>
//           <li className="submenu"><Link to="/profile/notifications"><FaBell className='pro-icon'/> All Notifications</Link></li>
//           <li className="submenu"><Link to="/profile/reviews"><FaStar className='pro-icon' /> My Reviews & Ratings</Link></li>
//           <li className="submenu"><Link to="/profile/wishlist"><FaListAlt className='pro-icon'/> My Wishlist</Link></li>
//           <li onClick={handleLogout}className="logout"><FaSignOutAlt className='pro-icon' /> Logout</li>
//         </ul>
//       </div>
//       <div className="content">
//         <Routes>
//           <Route path="my-orders" element={<MyOrders />} />
//           <Route path="profile-information" element={<ProfileInformation />} />
//           <Route path="manage-addresses" element={<ManageAddresses />} />
//           <Route path="reward-coins" element={<RewardCoins />} />
//           <Route path="payment-details" element={<PaymentDetails />} />
//           <Route path="notifications" element={<Notifications />} />
//           <Route path="reviews" element={<Reviews />} />
//           <Route path="wishlist" element={<Wishlist />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };


// const MyOrders = () => {
//   const orders = [
//     {
//       id: 1,
//       productName: 'TrashIt Multipurpose Foldable Bin',
//       price: 314,
//       deliveredOn: 'Jul 23',
//       status: 'Delivered',
//       canRate: true
//     },
//     {
//       id: 2,
//       productName: 'TrashIt Recycling Bags - Pack of 3',
//       price: 589,
//       deliveredOn: 'May 02',
//       status: 'Delivered',
//       canRate: true
//     },
//     {
//       id: 3,
//       productName: 'TrashIt Compost Bin',
//       price: 404,
//       refundedOn: 'Feb 23',
//       status: 'Refund Completed',
//       canRate: true
//     }
//   ];

//   return (
//     <div className="my-orders">
//       <h3>My Orders</h3>
//       <div className="orders-list">
//         {orders.map(order => (
//           <div key={order.id} className="order-item">
//             <div className="product-details">
//               <h4>{order.productName}</h4>
//               <p>Price: ₹{order.price}</p>
//               {order.status === 'Delivered' ? (
//                 <p className="delivered">Delivered on {order.deliveredOn}</p>
//               ) : (
//                 <p className="refunded">Refund Completed on {order.refundedOn}</p>
//               )}
//               {order.canRate && <a href="#" className="rate-review">Rate & Review Product</a>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const ProfileInformation = () => {
//   const [editMode, setEditMode] = useState(false);
//   const [profile, setProfile] = useState({
//     firstName: '',
//     lastName: '',
//     gender: '',
//     email: '',
//     mobile: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleEdit = () => {
//     setEditMode(true);
//   };

//   const handleCancel = () => {
//     setEditMode(false);
//     // Reset profile to initial state or fetch latest from server
//   };

//   const handleSave = () => {
//     setEditMode(false);
//     // Save profile changes to server
//   };

//   return (
//     <div className="personal-info">
//       <h3>Personal Information</h3>
//       <div className="info-field">
//         <label>First Name</label>
//         <input
//           type="text"
//           name="firstName"
//           value={profile.firstName}
//           onChange={handleInputChange}
//           disabled={!editMode}
//         />
//       </div>
//       <div className="info-field">
//         <label>Last Name</label>
//         <input
//           type="text"
//           name="lastName"
//           value={profile.lastName}
//           onChange={handleInputChange}
//           disabled={!editMode}
//         />
//       </div>
//       <div className="info-field">
//         <label>Your Gender</label>
//         <div className="gender">
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={profile.gender === 'male'}
//             onChange={handleInputChange}
//             disabled={!editMode}
//           /> Male
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={profile.gender === 'female'}
//             onChange={handleInputChange}
//             disabled={!editMode}
//           /> Female
//         </div>
//       </div>
//       <div className="info-field">
//         <label>Email Address</label>
//         <input
//           type="email"
//           name="email"
//           value={profile.email}
//           onChange={handleInputChange}
//           disabled={!editMode}
//         />
//         <span className="edit-link" onClick={handleEdit}>Edit</span>
//       </div>
//       <div className="info-field">
//         <label>Mobile Number</label>
//         <input
//           type="text"
//           name="mobile"
//           value={profile.mobile}
//           onChange={handleInputChange}
//           disabled={!editMode}
//         />
//         <span className="edit-link" onClick={handleEdit}>Edit</span>
//       </div>
//       {editMode && (
//         <div className="action-buttons">
//           <button onClick={handleSave} className="save-button">SAVE</button>
//           <button onClick={handleCancel} className="cancel-button">CANCEL</button>
//         </div>
//       )}
//     </div>
//   );
// };




// const ManageAddresses = () => {
//   const [showForm, setShowForm] = useState(false);

//   const handleAddAddressClick = () => {
//     setShowForm(true);
//   };

//   const handleFormCancel = () => {
//     setShowForm(false);
//   };

//   return (
//     <div className="manage-addresses">
//       <h3>Manage Addresses</h3>
//       <button className="add-address-btn" onClick={handleAddAddressClick}>
//         + ADD A NEW ADDRESS
//       </button>

//       {showForm && (
//         <div className="address-form">
//           <h4>Add New Address</h4>
//           <form>
//             <div className="form-group-add">
//               <label>Name</label>
//               <input type="text" name="name" />
//             </div>
//             <div className="form-group-add">
//               <label>Phone Number</label>
//               <input type="text" name="phoneNumber" />
//             </div>
//             <div className="form-group-add">
//               <label>Pincode</label>
//               <input type="text" name="pincode" />
//             </div>
//             <div className="form-group-add">
//               <label>Address</label>
//               <textarea name="address"></textarea>
//             </div>
//             <div className="form-group-add">
//               <label>City/District</label>
//               <input type="text" name="city" />
//             </div>
//             <div className="form-group-add">
//               <label>State</label>
//               <input type="text" name="state" />
//             </div>
//             <div className="form-group-add">
//               <label>Address Type</label>
//               <div className="radio-group-add">
//                 <label>
//                   <input type="radio" name="addressType" value="home" />
//                   Home
//                 </label>
//                 <label>
//                   <input type="radio" name="addressType" value="work" />
//                   Work
//                 </label>
//               </div>
//             </div>
//             <div className="form-actions-add">
//               <button type="button" onClick={handleFormCancel}>
//                 Cancel
//               </button>
//               <button type="submit">Save</button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Render address list here */}
//     </div>
//   );
// };



// const RewardCoins = () => {
//   const submissions = [
//     {
//       id: 1,
//       type: 'Plastic',
//       quantity: '5 kg',
//       date: 'Jul 23, 2024',
//       coinsEarned: 50,
//     },
//     {
//       id: 2,
//       type: 'Paper',
//       quantity: '10 kg',
//       date: 'May 02, 2024',
//       coinsEarned: 100,
//     },
//     {
//       id: 3,
//       type: 'E-Waste',
//       quantity: '2 kg',
//       date: 'Feb 23, 2024',
//       coinsEarned: 200,
//     },
//   ];

//   return (
//     <div className="reward-coins">
//       <h3>Reward Coins</h3>
//       <div className="submissions-list">
//         {submissions.map(submission => (
//           <div key={submission.id} className="submission-item">
//             <div className="submission-details">
//               <h4>{submission.type}</h4>
//               <p>Quantity: {submission.quantity}</p>
//               <p>Date: {submission.date}</p>
//               <p className="coins-earned">Coins Earned: {submission.coinsEarned}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const PaymentDetails = () => {
//   const transactions = [
//     {
//       id: 1,
//       type: 'Coins to Money',
//       date: 'Jul 23, 2024',
//       amount: '₹500',
//       status: 'Completed',
//     },
//     {
//       id: 2,
//       type: 'Coins to Product',
//       date: 'May 02, 2024',
//       product: 'TrashIt Multipurpose Foldable Bin',
//       status: 'Completed',
//     },
//     {
//       id: 3,
//       type: 'Coins to Money',
//       date: 'Feb 23, 2024',
//       amount: '₹200',
//       status: 'Completed',
//     },
//   ];

//   return (
//     <div className="payment-details">
//       <h3>Payment Details</h3>
//       <div className="transactions-list">
//         {transactions.map(transaction => (
//           <div key={transaction.id} className="transaction-item">
//             <div className="transaction-details">
//               <h4>{transaction.type}</h4>
//               <p>Date: {transaction.date}</p>
//               {transaction.type === 'Coins to Money' ? (
//                 <p>Amount: {transaction.amount}</p>
//               ) : (
//                 <p>Product: {transaction.product}</p>
//               )}
//               <p className={`status ${transaction.status.toLowerCase()}`}>{transaction.status}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



// const Notifications = () => (
//   <div className="notifications">
//     <h3>All Notifications</h3>
//     {/* Add content related to notifications */}
//   </div>
// );

// const Reviews = () => (
//   <div className="reviews">
//     <h3>My Reviews & Ratings</h3>
//     {/* Add content related to reviews and ratings */}
//   </div>
// );

// const Wishlist = () => (
//   <div className="wishlist">
//     <h3>My Wishlist</h3>
//     {/* Add content related to wishlist */}
//   </div>
// );

// export default Profile;



// import React, { useState } from 'react';


import { toast } from 'react-toastify';
import { useNavigate, Link, Routes, Route, Navigate } from 'react-router-dom';
import { FaUser, FaMapMarkerAlt, FaCreditCard, FaGift, FaSignOutAlt, FaStar, FaBell, FaListAlt, FaBoxOpen } from 'react-icons/fa';
import '../../assets/styles/Profile.css';
import { useAuth } from '../context/AuthContext';
import profile from '../../assets/images/bitcoin.jpg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <div className="sidebar-profile">
        <div className="profile-header">
          <img src="https://img.freepik.com/premium-vector/blue-circle-with-white-user-vector_941526-5749.jpg?w=740" alt="Profile" className="profile-pic" />
          <h2>TrashIt User</h2>
        </div>
        <ul className="menu">
          <li><Link to="/profile/my-orders"><FaBoxOpen className='pro-icon' /> My Orders</Link></li>
          <li className="menu-heading">Account Settings</li>
          <li className="submenu"><Link to="/profile/profile-information"><FaUser className='pro-icon' /> Profile Information</Link></li>
          <li className="submenu"><Link to="/profile/manage-addresses"><FaMapMarkerAlt className='pro-icon' /> Manage Addresses</Link></li>
          <li className="menu-heading">Payments</li>
          <li className="submenu"><Link to="/profile/reward-coins"><FaGift className='pro-icon' />Reward Coins</Link></li>
          <li className="submenu"><Link to="/profile/payment-details"><FaCreditCard className='pro-icon'/>Payment Details</Link></li>
          <li className="menu-heading">My Stuff</li>
          <li className="submenu"><Link to="/profile/notifications"><FaBell className='pro-icon'/> All Notifications</Link></li>
          <li className="submenu"><Link to="/profile/reviews"><FaStar className='pro-icon' /> My Reviews & Ratings</Link></li>
          <li className="submenu"><Link to="/profile/wishlist"><FaListAlt className='pro-icon'/> My Wishlist</Link></li>
          <li onClick={handleLogout} className="logout"><FaSignOutAlt className='pro-icon' /> Logout</li>
        </ul>
      </div>
      <div className="content">
        <Routes>
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="profile-information" element={<ProfileInformation />} />
          <Route path="manage-addresses" element={<ManageAddresses />} />
          <Route path="reward-coins" element={<RewardCoins />} />
          <Route path="payment-details" element={<PaymentDetails />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="*" element={<Navigate to="profile-information" />} />
        </Routes>
      </div>
    </div>
  );
};

const MyOrders = () => {
  const orders = [
    {
      id: 1,
      productName: 'TrashIt Multipurpose Foldable Bin',
      price: 314,
      deliveredOn: 'Jul 23',
      status: 'Delivered',
      canRate: true
    },
    {
      id: 2,
      productName: 'TrashIt Recycling Bags - Pack of 3',
      price: 589,
      deliveredOn: 'May 02',
      status: 'Delivered',
      canRate: true
    },
    {
      id: 3,
      productName: 'TrashIt Compost Bin',
      price: 404,
      refundedOn: 'Feb 23',
      status: 'Refund Completed',
      canRate: true
    }
  ];

  return (
    <div className="my-orders">
      <h3>My Orders</h3>
      <div className="orders-list">
        {orders.map(order => (
          <div key={order.id} className="order-item">
            <div className="product-details">
              <h4>{order.productName}</h4>
              <p>Price: ₹{order.price}</p>
              {order.status === 'Delivered' ? (
                <p className="delivered">Delivered on {order.deliveredOn}</p>
              ) : (
                <p className="refunded">Refund Completed on {order.refundedOn}</p>
              )}
              {order.canRate && <a href="#" className="rate-review">Rate & Review Product</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProfileInformation = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    mobile: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    // Reset profile to initial state or fetch latest from server
  };

  const handleSave = () => {
    setEditMode(false);
    // Save profile changes to server
  };

  return (
    <div className="personal-info">
      <h3>Personal Information</h3>
      <div className="info-field">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={profile.firstName}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>
      <div className="info-field">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={profile.lastName}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>
      <div className="info-field">
        <label>Your Gender</label>
        <div className="gender">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={profile.gender === 'male'}
            onChange={handleInputChange}
            disabled={!editMode}
          /> Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={profile.gender === 'female'}
            onChange={handleInputChange}
            disabled={!editMode}
          /> Female
        </div>
      </div>
      <div className="info-field">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <span className="edit-link" onClick={handleEdit}>Edit</span>
      </div>
      <div className="info-field">
        <label>Mobile Number</label>
        <input
          type="text"
          name="mobile"
          value={profile.mobile}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <span className="edit-link" onClick={handleEdit}>Edit</span>
      </div>
      {editMode && (
        <div className="action-buttons">
          <button onClick={handleSave} className="save-button">SAVE</button>
          <button onClick={handleCancel} className="cancel-button">CANCEL</button>
        </div>
      )}
    </div>
  );
};

const ManageAddresses = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddAddressClick = () => {
    setShowForm(true);
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="manage-addresses">
      <h3>Manage Addresses</h3>
      <button className="add-address-btn" onClick={handleAddAddressClick}>
        + ADD A NEW ADDRESS
      </button>

      {showForm && (
        <div className="address-form">
          <h4>Add New Address</h4>
          <form>
            <div className="form-group-add">
              <label>Name</label>
              <input type="text" name="name" />
            </div>
            <div className="form-group-add">
              <label>Phone Number</label>
              <input type="text" name="phoneNumber" />
            </div>
            <div className="form-group-add">
              <label>Pincode</label>
              <input type="text" name="pincode" />
            </div>
            <div className="form-group-add">
              <label>Address</label>
              <textarea name="address"></textarea>
            </div>
            <div className="form-group-add">
              <label>City/District</label>
              <input type="text" name="city" />
            </div>
            <div className="form-group-add">
              <label>State</label>
              <input type="text" name="state" />
            </div>
            <div className="form-group-add">
              <label>Address Type</label>
              <div className="radio-group-add">
                <label>
                  <input type="radio" name="addressType" value="home" />
                  Home
                </label>
                <label>
                  <input type="radio" name="addressType" value="work" />
                  Work
                </label>
              </div>
            </div>
            <div className="form-actions-add">
              <button type="button" onClick={handleFormCancel}>
                Cancel
              </button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      )}

      {/* Render address list here */}
    </div>
  );
};

const RewardCoins = () => {
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState(null); // State to handle errors
  const { user } = useAuth(); // Retrieve user from AuthContext

  useEffect(() => {
    const fetchCoinHistory = async () => {
      try {
        if (user && user.id) { // Ensure user and user.id are available
          const response = await axios.get(`http://localhost:5000/api/coins/history/${user.id}`);
          if (response.status === 200) {
            setSubmissions(response.data);
            setError(null); // Clear error if data is fetched successfully
          }
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError('No coins rewarded yet.');
        } else {
          setError('Error fetching coin history.');
        }
      }
    };

    fetchCoinHistory();
  }, [user]); // Depend on user

  return (
    <div className="reward-coins">
      <h3>Reward Coins</h3>
      {error ? (
        <p>{error}</p> // Display error message
      ) : (
        <div className="submissions-list">
          {submissions.length > 0 ? (
            submissions.map(submission => (
              <div key={submission.coin_id} className="submission-item">
                <div className="submission-details">
                  <h4>{submission.category} - {submission.solution_type}</h4>

                  <p>Date: {new Date(submission.waste_created_at).toLocaleDateString()}</p>
                  <p className="coins-earned">Coins Earned: {submission.coins_rewarded}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No coin history available.</p> // Display message if no submissions
          )}
        </div>
      )}
    </div>
  );
};



const PaymentDetails = () => {
  const transactions = [
    {
      id: 1,
      type: 'Coins to Money',
      date: 'Jul 23, 2024',
      amount: '₹500',
      status: 'Completed',
    },
    {
      id: 2,
      type: 'Coins to Product',
      date: 'May 02, 2024',
      product: 'TrashIt Multipurpose Foldable Bin',
      status: 'Completed',
    },
    {
      id: 3,
      type: 'Coins to Money',
      date: 'Feb 23, 2024',
      amount: '₹200',
      status: 'Completed',
    },
  ];

  return (
    <div className="payment-details">
      <h3>Payment Details</h3>
      <div className="transactions-list">
        {transactions.map(transaction => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-details">
              <h4>{transaction.type}</h4>
              <p>Date: {transaction.date}</p>
              {transaction.type === 'Coins to Money' ? (
                <p>Amount: {transaction.amount}</p>
              ) : (
                <p>Product: {transaction.product}</p>
              )}
              <p className={`status ${transaction.status.toLowerCase()}`}>{transaction.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Notifications = () => (
  <div className="notifications">
    <h3>All Notifications</h3>
    {/* Add content related to notifications */}
  </div>
);

const Reviews = () => (
  <div className="reviews">
    <h3>My Reviews & Ratings</h3>
    {/* Add content related to reviews and ratings */}
  </div>
);

const Wishlist = () => (
  <div className="wishlist">
    <h3>My Wishlist</h3>
    {/* Add content related to wishlist */}
  </div>
);

export default Profile;
