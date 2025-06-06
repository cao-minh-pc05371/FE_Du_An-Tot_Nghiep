import { Link } from 'react-router-dom';
import {
  FaBars, FaMapMarkerAlt, FaSearch, FaPhoneAlt, FaShoppingCart, FaUser
} from 'react-icons/fa';
import logo from '../../assets/logo2.png';

const Header = () => {
  return (
    <header className="bg-red-500 text-white sticky top-0 z-50 shadow-sm text-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 h-16">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-white font-bold text-lg">
            <img src={logo} alt="logo" className="h-20" />
          </Link>
        </div>

        {/* Danh mục */}
        <button className="flex items-center gap-2 bg-red-700 px-3 py-2 rounded hover:bg-red-600">
          <FaBars /> Danh mục
        </button>

        {/* Địa điểm */}
        <div className="flex items-center gap-1 bg-red-700 px-3 py-2 rounded hover:bg-red-600">
          <FaMapMarkerAlt className="text-base" />
          <span className="text-xs">Xem giá tại</span>
          <span className="font-bold text-sm">Cần Thơ ▾</span>
        </div>

        {/* Tìm kiếm */}
        <div className="flex items-center w-[300px] bg-white rounded overflow-hidden">
          <input
            type="text"
            placeholder="Bạn cần tìm gì?"
            className="w-full px-3 py-2 text-black text-sm outline-none"
          />
          <button className="px-3 text-gray-600">
            <FaSearch />
          </button>
        </div>

        {/* Hotline */}
        <div className="flex items-center gap-1 bg-red-700 px-3 py-2 rounded text-white">
          <FaPhoneAlt />
          <span className="text-xs">Gọi mua hàng</span>
          <span className="text-sm font-semibold">1800.2097</span>
        </div>

        {/* Liên kết chức năng */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="flex items-center gap-1 bg-red-700 px-3 py-2 rounded hover:bg-red-600">
            <FaShoppingCart />
            <span>Giỏ hàng</span>
          </Link>

          <Link to="/login" className="flex items-center gap-1 bg-red-700 px-3 py-2 rounded hover:bg-red-600">
            <FaUser /> Đăng nhập
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
