import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaMobileAlt, FaTabletAlt, FaLaptop, FaHeadphones, FaCamera,
  FaRegClock, FaBlender, FaPlug, FaDesktop, FaTv,
  FaExchangeAlt, FaRedoAlt, FaTags, FaNewspaper
} from 'react-icons/fa';

const CategoryList = ({ onSelect }) => {
  const location = useLocation();

  const categories = [
    { name: 'Điện thoại', path: '/dien-thoai', icon: <FaMobileAlt /> },
    { name: 'Tablet', path: '/tablet', icon: <FaTabletAlt /> },
    { name: 'Laptop', path: '/laptop', icon: <FaLaptop /> },
    { name: 'Âm thanh', path: '/am-thanh', icon: <FaHeadphones /> },
    { name: 'Camera', path: '/camera', icon: <FaCamera /> },
    { name: 'Đồng hồ', path: '/dong-ho', icon: <FaRegClock /> },
    { name: 'Gia dụng', path: '/do-gia-dung', icon: <FaBlender /> },
    { name: 'Phụ kiện', path: '/phu-kien', icon: <FaPlug /> },
    { name: 'PC, Màn hình', path: '/pc', icon: <FaDesktop /> },
    { name: 'Tivi', path: '/tivi', icon: <FaTv /> },
    { name: 'Thu cũ đổi mới', path: '/thu-cu-doi-moi', icon: <FaExchangeAlt /> },
    { name: 'Hàng cũ', path: '/hang-cu', icon: <FaRedoAlt /> },
    { name: 'Khuyến mãi', path: '/khuyen-mai', icon: <FaTags /> },
    { name: 'Tin công nghệ', path: '/tin-cong-nghe', icon: <FaNewspaper /> },
  ];

  return (
    <ul className="space-y-1">
      {categories.map((cat, idx) => (
        <li key={idx}>
          <Link
            to={cat.path}
            onClick={onSelect}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              location.pathname === cat.path
                ? 'bg-red-100 text-red-600 font-semibold'
                : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'
            }`}
          >
            <span className="text-base">{cat.icon}</span>
            <span className="text-sm">{cat.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
