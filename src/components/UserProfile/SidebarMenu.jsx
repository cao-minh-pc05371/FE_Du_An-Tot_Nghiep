import React from 'react';
import { FaUser, FaLock, FaSignOutAlt, FaHistory, FaMapMarkedAlt } from 'react-icons/fa';
import info from '../../assets/25c6b0b2-7750-4b33-a857-bd3baaed78a1.png';

const SidebarMenu = ({ tab, setTab }) => {
    const tabClass = (active) =>
        `flex items-center gap-2 px-3 py-2 rounded-md w-full text-left transition ${active ? 'bg-red-100 text-red-600 font-semibold' : 'hover:bg-gray-100'
        }`;

    return (
        <aside className="w-full lg:w-64 bg-white shadow-md rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <img
                    src={info}
                    alt="Avatar"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-gray-300"
                />
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Nguyen Cao Minh</h3>
                    <p className="text-xs text-gray-500">070•••••58</p>
                </div>
            </div>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm font-medium">
                <li>
                    <button onClick={() => setTab('info')} className={tabClass(tab === 'info')}>
                        <FaUser /> Thông tin cá nhân
                    </button>
                </li>
                <li>
                    <button onClick={() => setTab('history')} className={tabClass(tab === 'history')}>
                        <FaHistory /> Lịch sử mua hàng
                    </button>
                </li>
                <li>
                    <button onClick={() => setTab('address')} className={tabClass(tab === 'address')}>
                        <FaMapMarkedAlt /> Sổ địa chỉ
                    </button>
                </li>
                <li>
                    <button onClick={() => setTab('password')} className={tabClass(tab === 'password')}>
                        <FaLock /> Đổi mật khẩu
                    </button>
                </li>
                <li>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-md w-full text-left text-red-600 hover:bg-red-50">
                        <FaSignOutAlt /> Đăng xuất
                    </button>
                </li>
            </ul>
        </aside>
    );
};

export default SidebarMenu;
