import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          🛒 <span>TeknixShop</span>
        </Link>

        {/* Menu */}
        <nav className="flex gap-8 text-base font-medium">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Trang chủ</Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-600">Sản phẩm</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">Giới thiệu</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Liên hệ</Link>
        </nav>

        {/* Action */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-medium">
          Đăng nhập
        </button>
      </div>
    </header>
  );
};

export default Header;
