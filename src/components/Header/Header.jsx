import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBars, FaMapMarkerAlt, FaSearch, FaPhoneAlt, FaShoppingCart, FaUser
} from 'react-icons/fa';
import logo from '../../assets/logo2.png';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import LocationModal from '../LocationModal/LocationModal';

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const categoryRef = useRef();
  const location = useLocation();
  const isCheckoutPage = location.pathname === '/checkout';

  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Cần Thơ');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowCategories(false);
      }
    };
    if (showCategories) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCategories]);

  const renderOverlay = () => {
    if (!showCategories) return null;
    return <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />;
  };

  const renderCategoryMenu = () => {
    return (
      <div className="relative z-50" ref={categoryRef}>
        <button
          onClick={handleToggleCategory}
          className="flex items-center gap-2 bg-red-700 px-4 py-2 rounded-md hover:bg-red-500 transition"
        >
          <FaBars className="text-lg" />
          <span className="font-semibold">Danh mục</span>
        </button>

        {showCategories && (
          <div className="absolute top-full right-0 mt-6 z-[9999]">
            <CategoryMenu onCloseMenu={() => setShowCategories(false)} />
          </div>
        )}
      </div>
    );
  };

  const renderLocationModal = () => {
    return (
      <LocationModal
        visible={showLocationModal}
        selected={selectedLocation}
        onClose={() => setShowLocationModal(false)}
        onSelect={(loc) => {
          setSelectedLocation(loc);
          setShowLocationModal(false);
        }}
      />
    );
  };

  const handleToggleCategory = () => {
    setShowCategories(!showCategories);
  };

  return (
    <>
      {renderOverlay()}

      <header className="bg-red-600 text-white sticky top-0 z-50 shadow-md text-sm">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 h-20 gap-3 relative">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center h-20 transition-transform duration-300 ease-in-out hover:scale-[1.1]"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-[90px] w-auto object-contain drop-shadow-md"
            />
          </Link>

          {/* Danh mục */}
          {!isCheckoutPage && renderCategoryMenu()}

          {/* Địa điểm */}
          <div
            onClick={!isCheckoutPage ? () => setShowLocationModal(true) : undefined}
            className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-md transition
              ${isCheckoutPage ? 'bg-red-500 opacity-70 cursor-not-allowed' : 'bg-red-700 hover:bg-red-500 cursor-pointer'}`}
          >
            <FaMapMarkerAlt className="text-lg" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-100">Xem giá tại</span>
              <span className="font-bold text-sm">{selectedLocation} ▾</span>
            </div>
          </div>

          {/* Tìm kiếm */}
          <div className="flex-grow max-w-[400px]">
            <div className="flex items-center w-full bg-white rounded-md overflow-hidden shadow">
              <input
                type="text"
                placeholder="Bạn cần tìm gì?"
                className="flex-grow px-3 py-2 text-sm text-gray-800 outline-none"
              />
              <button className="px-3 text-gray-600 hover:text-red-600 transition">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Hotline */}
          <div className="hidden lg:flex items-center gap-2 bg-red-700 px-4 py-2 rounded-md hover:bg-red-500 transition">
            <FaPhoneAlt className="text-lg" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-100">Gọi mua hàng</span>
              <span className="font-bold text-sm">1800.2097</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              to="/cart"
              className="flex items-center gap-1 bg-red-700 px-3 py-2 rounded-md hover:bg-red-500 transition"
              title="Xem giỏ hàng"
            >
              <FaShoppingCart className="text-lg" />
              <span className="hidden sm:inline">Giỏ hàng</span>
            </Link>

            <Link
              to="/login"
              className="flex items-center gap-1 bg-red-700 px-3 py-2 rounded-md hover:bg-red-500 transition"
              title="Đăng nhập"
            >
              <FaUser className="text-lg" />
              <span className="hidden sm:inline">Đăng nhập</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Modal chọn tỉnh */}
      {renderLocationModal()}
    </>
  );
};

export default Header;
