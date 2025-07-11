import React, { useState } from 'react';
import { FaHome, FaList, FaShoppingCart, FaUser, FaTimes } from 'react-icons/fa';
import CategoryList from './CategoryList/CategoryList';

const BottomNav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };

    const navItems = [
        { name: 'Trang chủ', icon: <FaHome />, path: '/' },
        { name: 'Danh mục', icon: <FaList />, path: '#', onClick: toggleMenu },
        { name: 'Giỏ hàng', icon: <FaShoppingCart />, path: '/cart' },
        { name: 'Tài khoản', icon: <FaUser />, path: '/user-profile' },
    ];

    return (
        <>
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 lg:hidden">
                <ul className="flex justify-around py-2">
                    {navItems.map((item, idx) =>
                        item.onClick ? (
                            <button
                                key={idx}
                                onClick={item.onClick}
                                className={`flex flex-col items-center text-xs px-2 ${showMenu ? 'text-red-600' : 'text-gray-600'}`}
                            >
                                <div className="text-lg">{item.icon}</div>
                                <span>{item.name}</span>
                            </button>
                        ) : (
                            <li key={idx}>
                                <a
                                    href={item.path}
                                    className="flex flex-col items-center text-xs text-gray-600 px-2"
                                >
                                    <div className="text-lg">{item.icon}</div>
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        )
                    )}
                </ul>
            </nav>

            {showMenu && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-70">
                    <div className="absolute bottom-12 left-0 right-0 bg-white rounded-t-2xl p-4 overflow-y-auto max-h-[80vh] sm:max-w-md sm:mx-auto sm:rounded-xl">
                        <div className="flex justify-between items-center border-b pb-2">
                            <h3 className="text-base sm:text-lg font-semibold">Danh mục</h3>
                            <button
                                onClick={() => setShowMenu(false)}
                                className="text-gray-600 hover:text-red-600 transition"
                            >
                                <FaTimes className="text-xl" />
                            </button>
                        </div>

                        <CategoryList onSelect={() => setShowMenu(false)} />
                    </div>
                </div>
            )}

        </>
    );
};

export default BottomNav;
