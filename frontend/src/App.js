// import React, { useEffect } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Home from './components/static/Home';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
// import Profile from './components/user/Profile';
// import ViewCoins from './components/user/ViewCoins';
// import ConvertCoins from './components/user/ConvertCoins';
// import Shop from './components/user/Shop';
// import MySubmission from './components/user/MySubmissions';
// import SubmitWaste from './components/user/SubmitWaste';
// import Navbar from './components/common/Navbar';
// import SubNavbar from './components/common/SubNavbar';
// import Resident from './components/user/Resident';
// import Commercial from './components/user/Commercial';
// import EWaste from './components/user/EWaste';
// import About from './components/static/About';
// import Slider from './components/static/Slider';
// import { AuthProvider } from './components/context/AuthContext';
// import HowAreWeDoing from './components/user/HowAreWeDoing';
// import HelpAndSupport from './components/user/HelpAndSupport';
// import Schedule from './components/user/Schedule';
// import Jobs from './components/wasteCollector/Jobs';
// import ApplyJob from './components/wasteCollector/ApplyJob';
// import Footer from './components/common/Footer';
// import ShopDetails from './components/user/ShopDetails';
// import AdminDashboard from './components/admin/AdminDashboard';


// // Component to handle scroll restoration
// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// const App = () => {
//   return (
//       <AuthProvider>
//       <ToastContainer/>
//         <SubNavbar />
//         <Navbar />
//         <ScrollToTop />
//         <div className="app-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/profile/*" element={<Profile />} />
//             <Route path="/my-coins" element={<ViewCoins totalCoins={100} transactions={[
//               { date: '2023-07-28', amount: 50, type: 'Completed Challenge' },
//               { date: '2023-07-27', amount: 30, type: 'Submitted Solution' },
//               { date: '2023-07-26', amount: 20, type: 'Reviewed Code' },
//               { date: '2023-07-25', amount: 40, type: 'Daily Login Bonus' },
//               { date: '2023-07-24', amount: 10, type: 'Shared Solution' }
//             ]} />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/mysubmission" element={<MySubmission />} />
//             <Route path="/submitwaste" element={<SubmitWaste />} />
//             <Route path="/resident" element={<Resident />} />
//             <Route path="/commercial" element={<Commercial />} />
//             <Route path="/ewaste" element={<EWaste />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/slider" element={<Slider />} />
//             <Route path="/how-are-we-doing" element={<HowAreWeDoing />} />
//             <Route path="/help-and-support" element={<HelpAndSupport />} />
//             <Route path="/schedule" element={<Schedule />} />
//             <Route path="/jobs" element={<Jobs></Jobs>} />
//             <Route path="/apply-job" element={<ApplyJob/>} />
//             <Route path="/shop-details" element={<ShopDetails/>} />
//             <Route path="/admin" element={<AdminDashboard/>} />
//           </Routes>
//           <Footer/>
//         </div>
//       </AuthProvider>
//   );
// };

// export default App;

import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/static/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/user/Profile';
import ViewCoins from './components/user/ViewCoins';
import ConvertCoins from './components/user/ConvertCoins';
import Shop from './components/user/Shop';
import MySubmission from './components/user/MySubmissions';
import SubmitWaste from './components/user/SubmitWaste';
import Navbar from './components/common/Navbar';
import SubNavbar from './components/common/SubNavbar';
import Resident from './components/user/Resident';
import Commercial from './components/user/Commercial';
import EWaste from './components/user/EWaste';
import About from './components/static/About';
import Slider from './components/static/Slider';
import { AuthProvider } from './components/context/AuthContext';
import HowAreWeDoing from './components/user/HowAreWeDoing';
import HelpAndSupport from './components/user/HelpAndSupport';
import Schedule from './components/user/Schedule';
import Jobs from './components/wasteCollector/Jobs';
import ApplyJob from './components/wasteCollector/ApplyJob';
import Footer from './components/common/Footer';
import ShopDetails from './components/user/ShopDetails';
import AdminDashboard from './components/admin/AdminDashboard';
import CartPage from './components/user/CartPage';
import Contact from './components/static/Contact';

// Component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Component to conditionally render Navbar, SubNavbar, and Footer
const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && (
        <>
          <SubNavbar />
          <Navbar />
        </>
      )}
      <ScrollToTop />
      <div className="app-content">
        {children}
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <ToastContainer />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/my-coins" element={<ViewCoins totalCoins={100} transactions={[
              { date: '2023-07-28', amount: 50, type: 'Completed Challenge' },
              { date: '2023-07-27', amount: 30, type: 'Submitted Solution' },
              { date: '2023-07-26', amount: 20, type: 'Reviewed Code' },
              { date: '2023-07-25', amount: 40, type: 'Daily Login Bonus' },
              { date: '2023-07-24', amount: 10, type: 'Shared Solution' }
            ]} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/mysubmission" element={<MySubmission />} />
            <Route path="/submitwaste" element={<SubmitWaste />} />
            <Route path="/resident" element={<Resident />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/ewaste" element={<EWaste />} />
            <Route path="/about" element={<About />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/how-are-we-doing" element={<HowAreWeDoing />} />
            <Route path="/help-and-support" element={<HelpAndSupport />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/apply-job" element={<ApplyJob />} />
            <Route path="/shop-details" element={<ShopDetails />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="my-cart" element={<CartPage />} />
            <Route path="contact-us" element={<Contact />} />
          </Routes>
        </Layout>
    </AuthProvider>
  );
};

export default App;
