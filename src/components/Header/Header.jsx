import { Link } from 'react-router-dom';
import {
  FaBars, FaMapMarkerAlt, FaSearch, FaPhoneAlt,
  FaStore, FaTruck, FaShoppingCart, FaUser
} from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-red-600 text-white sticky top-0 z-50 shadow-sm text-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 h-16">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-12" />
          <span className="text-xl font-bold">salephoneX</span>
        </div>

        {/* Danh mục */}
        <button className="flex items-center gap-2 bg-red-500 px-3 py-2 rounded hover:bg-red-400">
          <FaBars /> Danh mục
        </button>

        {/* Địa điểm */}
        <div className="flex items-center gap-1 bg-red-500 px-3 py-2 rounded hover:bg-red-400">
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
        <div className="flex items-center gap-2 text-white">
          <FaPhoneAlt />
          <span className="text-xs">Gọi mua hàng</span>
          <span className="text-sm font-semibold">1800.2097</span>
        </div>

        {/* Liên kết chức năng */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FaStore />
            <span>Cửa hàng</span>
          </div>
          <div className="flex items-center gap-1">
            <FaTruck />
            <span>Tra cứu</span>
          </div>
          <div className="flex items-center gap-1">
            <FaShoppingCart />
            <span>Giỏ hàng</span>
          </div>

          <Link to="/login" className="flex items-center gap-1 bg-red-500 px-3 py-2 rounded hover:bg-red-400">
            <FaUser /> Đăng nhập
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
