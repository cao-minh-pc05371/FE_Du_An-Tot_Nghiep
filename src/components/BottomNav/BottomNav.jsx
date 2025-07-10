import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaList, FaStore, FaShoppingCart, FaUser } from 'react-icons/fa';

const BottomNav = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Trang chủ', icon: <FaHome />, path: '/' },
        { name: 'Giỏ hàng', icon: <FaShoppingCart />, path: '/cart' },
        { name: 'Tài khoản', icon: <FaUser />, path: '/account' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 z-50 lg:hidden">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    to={item.path}
                    className={`flex flex-col items-center text-xs ${location.pathname === item.path
                        ? 'text-red-600'
                        : 'text-gray-600'
                        }`}
                >
                    <div className="text-lg">{item.icon}</div>
                    <span>{item.name}</span>
                </Link>
            ))}
        </nav>
    );
};

export default BottomNav;
