import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaBars, FaMapMarkerAlt, FaSearch, FaPhoneAlt, FaShoppingCart, FaUser, FaSignOutAlt
} from 'react-icons/fa';
import logo from '../../assets/logo2.png';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import LocationModal from '../LocationModal/LocationModal';
import constants from '../../constants/constants';

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Cần Thơ');
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef();
  const categoryRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const isCheckoutPage = location.pathname === '/checkout';

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowCategories(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    const token =
      localStorage.getItem("access_token") || sessionStorage.getItem("access_token");

    if (!token) {
      setUser(null);
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      sessionStorage.removeItem("access_token");
      sessionStorage.removeItem("user");
      alert("Đăng xuất thành công!");
      navigate("/");
      return;
    }

    try {
      await fetch(`${constants.BASE_URL}/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
    } catch (error) {
      console.error("Lỗi khi gọi API đăng xuất:", error);
    }

    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("user");
    setUser(null);
    alert("Đăng xuất thành công!");
    navigate("/");
  };

  const renderUserSection = () => {
    if (user) {
      return (
        <div ref={userMenuRef} className="relative">
          <button
            onClick={() => setShowUserMenu((prev) => !prev)}
            className="flex items-center gap-1 bg-red-700 px-3 py-2 rounded-md hover:bg-red-500 transition"
            title="Tài khoản"
          >
            <FaUser className="text-lg" />
            <span className="hidden sm:inline">{user.name || 'Tài khoản'}</span>
          </button>
          {showUserMenu && (
            <div className="absolute right-0 mt-2 bg-white text-gray-800 shadow-md rounded-md z-50 min-w-[150px] overflow-hidden text-sm">
              <Link
                to="/profile"
                className="block px-4 py-2 border-b hover:bg-gray-100 transition"
                onClick={() => setShowUserMenu(false)}
              >
                Thông tin cá nhân
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-red-100 flex items-center gap-2 text-red-600"
              >
                <FaSignOutAlt />
                Đăng xuất
              </button>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <Link
          to="/login"
          className="flex items-center gap-1 bg-red-700 px-3 py-2 rounded-md hover:bg-red-500 transition"
          title="Đăng nhập"
        >
          <FaUser className="text-lg" />
          <span className="hidden sm:inline">Đăng nhập</span>
        </Link>
      );
    }
  };

  return (
    <>
      {showCategories && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />}
      {/* Mobile */}
      <header className="bg-red-600 text-white sticky top-0 z-50 shadow-md text-sm lg:hidden">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-2 h-16 gap-2">
          <Link to="/" className="flex items-center h-16">
            <img src={logo} alt="Logo" className="h-14 md:h-20 w-auto object-contain drop-shadow-md" />
          </Link>

          <div className="flex-grow mx-1 min-w-0">
            <div className="flex items-center bg-white rounded-md shadow border border-gray-300">
              <input
                type="text"
                placeholder="Bạn cần tìm gì?"
                className="flex-grow px-2 py-2 text-xs text-gray-800 outline-none"
              />
              <button className="px-2 text-gray-600 hover:text-red-600 transition">
                <FaSearch />
              </button>
            </div>
          </div>

          <button
            disabled={isCheckoutPage}
            onClick={() => setShowLocationModal(true)}
            className={`flex items-center px-2 py-2 rounded-md transition max-w-[200px] flex-shrink-0
                      ${isCheckoutPage
                ? 'bg-red-500 opacity-70 cursor-not-allowed'
                : 'bg-red-700 hover:bg-red-500 cursor-pointer'
              }`}
          >
            <FaMapMarkerAlt className="text-lg flex-shrink-0" />
            <span className="ml-1 text-sm md:font-bold truncate">{selectedLocation} ▾</span>
          </button>
        </div>
      </header>

      {/* Desktop */}
      <header className="bg-red-600 text-white sticky top-0 z-50 shadow-md text-sm hidden lg:block">
        <div className="max-w-[1300px] mx-auto flex items-center px-4 h-20 gap-3">
          <Link to="/" className="flex items-center h-20">
            <img src={logo} alt="Logo" className="h-[90px] w-auto object-contain drop-shadow-md" />
          </Link>

          {!isCheckoutPage && (
            <div ref={categoryRef} className="relative z-50">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="flex items-center gap-2 bg-red-700 px-4 py-2 rounded-md hover:bg-red-500 transition"
              >
                <FaBars />
                <span className="font-semibold">Danh mục</span>
              </button>
              {showCategories && (
                <div className="absolute top-full mt-2 left-0">
                  <CategoryMenu onCloseMenu={() => setShowCategories(false)} />
                </div>
              )}
            </div>
          )}

          <button
            disabled={isCheckoutPage}
            onClick={() => setShowLocationModal(true)}
            className={`flex items-center px-2 py-2 rounded-md transition max-w-[110px] flex-shrink-0
                      ${isCheckoutPage
                ? 'bg-red-500 opacity-70 cursor-not-allowed'
                : 'bg-red-700 hover:bg-red-500 cursor-pointer'
              }`}
          >
            <FaMapMarkerAlt className="text-lg flex-shrink-0" />
            <span className="ml-1 text-sm md:font-bold truncate">{selectedLocation} ▾</span>
          </button>

          <div className="flex-grow">
            <div className="flex items-center bg-white rounded-md overflow-hidden shadow w-full">
              <input type="text" placeholder="Bạn cần tìm gì?" className="w-full px-3 py-2 text-sm text-gray-800 outline-none" />
              <button className="px-3 text-gray-600 hover:text-red-600"><FaSearch /></button>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-red-700 px-4 py-2 rounded-md hover:bg-red-500 transition">
            <FaPhoneAlt />
            <span className="font-bold text-sm">1800.2097</span>
          </button>

          <Link to="/cart" className="bg-red-700 px-3 py-2 rounded-md hover:bg-red-500 flex items-center gap-1">
            <FaShoppingCart />
            <span className="hidden sm:inline">Giỏ hàng</span>
          </Link>

          {renderUserSection()}
        </div>
      </header>

      <LocationModal
        visible={showLocationModal}
        selected={selectedLocation}
        onClose={() => setShowLocationModal(false)}
        onSelect={(loc) => {
          setSelectedLocation(loc);
          setShowLocationModal(false);
        }}
      />
    </>
  );
};

export default Header;
