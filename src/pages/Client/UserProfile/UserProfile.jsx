// File: UserProfile.jsx
import React, { useState } from 'react';
import { FaUser, FaLock, FaSignOutAlt, FaHistory, FaMapMarkedAlt } from 'react-icons/fa';
import logo from '../../../assets/1ce3169b-4ad7-4038-94d9-00ce4bd19d86.png';
import info from '../../../assets/25c6b0b2-7750-4b33-a857-bd3baaed78a1.png';

const UserProfile = () => {
  const [tab, setTab] = useState('info');

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-white shadow-md rounded-xl p-5">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={info}
              alt="Avatar"
              className="w-14 h-14 rounded-full object-cover border border-gray-300"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-base">Nguyen Cao Minh</h3>
              <p className="text-xs text-gray-500">070•••••58</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <button onClick={() => setTab('info')} className={`flex items-center gap-2 px-3 py-2 rounded-md w-full text-left transition ${tab === 'info' ? 'bg-red-100 text-red-600 font-semibold' : 'hover:bg-gray-100'}`}>
                <FaUser /> Thông tin cá nhân
              </button>
            </li>
            <li>
              <button onClick={() => setTab('history')} className={`flex items-center gap-2 px-3 py-2 rounded-md w-full text-left transition ${tab === 'history' ? 'bg-red-100 text-red-600 font-semibold' : 'hover:bg-gray-100'}`}>
                <FaHistory /> Lịch sử mua hàng
              </button>
            </li>
            <li>
              <button onClick={() => setTab('address')} className={`flex items-center gap-2 px-3 py-2 rounded-md w-full text-left transition ${tab === 'address' ? 'bg-red-100 text-red-600 font-semibold' : 'hover:bg-gray-100'}`}>
                <FaMapMarkedAlt /> Sổ địa chỉ
              </button>
            </li>
            <li>
              <button onClick={() => setTab('password')} className={`flex items-center gap-2 px-3 py-2 rounded-md w-full text-left transition ${tab === 'password' ? 'bg-red-100 text-red-600 font-semibold' : 'hover:bg-gray-100'}`}>
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

        {/* Main Content */}
        <div className="flex-1 bg-white shadow-md rounded-xl p-6">
          {tab === 'info' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Thông tin cá nhân</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Họ và tên" defaultValue="Nguyen Cao Minh" className={inputClass} />
                <input type="text" placeholder="Số điện thoại" value="0707734958" readOnly className={inputClass} />
                <input type="email" placeholder="Email" value="minhncpc05371@fpt.edu.vn" readOnly className={`${inputClass} sm:col-span-2`} />
              </div>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">Lưu thay đổi</button>
            </div>
          )}

          {tab === 'address' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="text-lg font-semibold text-gray-800">Sổ địa chỉ</h3>
                <button className="text-red-600 text-sm font-medium flex items-center gap-1">+ Thêm địa chỉ</button>
              </div>
              <div className="text-center py-12">
                <img src="/images/order-empty.png" alt="empty-address" className="w-28 h-28 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Bạn chưa có địa chỉ nào được tạo</p>
              </div>
            </div>
          )}

          {tab === 'history' && (
            <div className="space-y-6">
              <div className="border-b border-gray-200 text-sm font-semibold flex gap-6">
                {['Tất cả', 'Chờ xác nhận', 'Đã xác nhận', 'Đang vận chuyển', 'Đã giao hàng', 'Đã huỷ'].map((status, index) => (
                  <button key={index} className={`pb-2 ${index === 0 ? 'border-b-2 border-red-500 text-red-600' : 'text-gray-500 hover:text-red-500'}`}>{status}</button>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-medium">Lịch sử mua hàng</span>
                <input type="date" className="border px-3 py-2 rounded" defaultValue="2020-12-01" />
                <span>→</span>
                <input type="date" className="border px-3 py-2 rounded" defaultValue="2025-06-07" />
              </div>
              <div className="text-center py-12">
                <img src={logo} alt="empty" className="w-32 h-32 mx-auto mb-4" />
                <p className="text-gray-500">Bạn chưa có đơn hàng nào <a href="/" className="text-red-500">Trang chủ</a></p>
              </div>
            </div>
          )}

          {tab === 'password' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-3">Đổi mật khẩu</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="password" placeholder="Mật khẩu hiện tại" className={inputClass} />
                <input type="password" placeholder="Mật khẩu mới" className={inputClass} />
                <input type="password" placeholder="Xác nhận mật khẩu mới" className={`${inputClass} sm:col-span-2`} />
              </div>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">Đổi mật khẩu</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const inputClass = 'w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500';

export default UserProfile;
