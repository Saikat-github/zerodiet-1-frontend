import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Footer, Navbar, ScrollToTop } from './components'
import { useDispatch, useSelector } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout, addDetails, removeDetails, changeLoader } from './store/authSlice'
import dbService from './appwrite/data'
import ReactGA from "react-ga4";
import { ToastContainer } from "react-toastify";
import { Loader2 } from 'lucide-react'

ReactGA.initialize("G-1QYWZQESQK");
ReactGA.send("pageview");




const App = () => {
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const [showNavbar, setShowNavbar] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    if (!userData) return;  // Return early if no userId
    dispatch(changeLoader(true));

    dbService.getPost(userData.$id)
      .then((data) => {
        dispatch(addDetails(data));
      })
      .catch((error) => {
        dispatch(removeDetails())
      })
      .finally(() => {
        dispatch(changeLoader(false));
      });
  }, [userData]);
  // console.log(userData);


  useEffect(() => {
    authService.getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login(user))
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("User can't be logged in, error in App.jsx", error.message)
      })
      .finally(() => {
        dispatch(changeLoader(false));
      })
  }, [])




  return (
    <div className='font-Poppins bg-black text-white/90'>
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Navbar controlled by scroll */}
      <Navbar visible={showNavbar} />

      <main className='min-h-[200vh]'>
        <ScrollToTop />
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App


