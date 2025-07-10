import React, { useState } from 'react';
import { FaUser, FaLock, FaSignOutAlt, FaHistory, FaMapMarkedAlt, FaEdit, FaTrash } from 'react-icons/fa';
import logo from '../../../assets/1ce3169b-4ad7-4038-94d9-00ce4bd19d86.png';
import info from '../../../assets/25c6b0b2-7750-4b33-a857-bd3baaed78a1.png';

const UserProfile = () => {
  const [tab, setTab] = useState('info');
  const [orderStatusFilter, setOrderStatusFilter] = useState('Tất cả');
  const [currentAddressPage, setCurrentAddressPage] = useState(1);
  const [currentOrderPage, setCurrentOrderPage] = useState(1);

  const addressesPerPage = 3;
  const ordersPerPage = 3;

  const [addresses, setAddresses] = useState([
    { id: 1, name: 'Nguyen Cao Minh', phone: '0707734958', address: '123 Nguyễn Văn Cừ, Quận 5, TP.HCM' },
    { id: 2, name: 'Nguyen Van A', phone: '0909123456', address: '456 Lê Lợi, Quận 1, TP.HCM' },
    { id: 3, name: 'Nguyen Van B', phone: '0912123456', address: '789 Trần Hưng Đạo, Quận 5, TP.HCM' },
    { id: 4, name: 'Nguyen Van C', phone: '0923123456', address: '101 Hùng Vương, Quận 5, TP.HCM' },
  ]);

  const orders = [
    { id: 1, date: '2025-07-01', total: 1500000, status: 'Đã giao hàng' },
    { id: 2, date: '2025-06-20', total: 2500000, status: 'Đang vận chuyển' },
    { id: 3, date: '2025-06-18', total: 1200000, status: 'Đã huỷ' },
    { id: 4, date: '2025-06-15', total: 800000, status: 'Chờ xác nhận' },
    { id: 5, date: '2025-06-10', total: 2200000, status: 'Đã xác nhận' },
  ];

  const filteredOrders =
    orderStatusFilter === 'Tất cả'
      ? orders
      : orders.filter((order) => order.status === orderStatusFilter);

  const orderStatuses = ['Tất cả', 'Chờ xác nhận', 'Đã xác nhận', 'Đang vận chuyển', 'Đã giao hàng', 'Đã huỷ'];

  // Function sửa địa chỉ
  const handleEdit = (id) => {
    console.log("Edit address id:", id);
    // Mở modal chỉnh sửa địa chỉ ở đây
  };

  // Function xoá địa chỉ
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xoá địa chỉ này?")) {
      setAddresses(addresses.filter(addr => addr.id !== id));
    }
  };

  // Pagination logic
  const paginate = (items, currentPage, itemsPerPage) => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  };

  const totalAddressPages = Math.ceil(addresses.length / addressesPerPage);
  const totalOrderPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-10">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Sidebar */}
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

        {/* Main Content */}
        <div className="flex-1 bg-white shadow-md rounded-xl p-4 sm:p-6 text-xs sm:text-sm">
          {tab === 'address' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Sổ địa chỉ</h3>
                <button className="text-red-600 text-xs sm:text-sm font-medium flex items-center gap-1">+ Thêm địa chỉ</button>
              </div>
              {addresses.length === 0 ? (
                <div className="text-center py-12">
                  <img src={logo} alt="empty-address" className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Bạn chưa có địa chỉ nào được tạo</p>
                </div>
              ) : (
                <>
                  <ul className="space-y-2">
                    {paginate(addresses, currentAddressPage, addressesPerPage).map(addr => (
                      <li key={addr.id} className="border p-3 rounded-md flex justify-between items-center">
                        <div>
                          <p className="font-medium">{addr.name} - {addr.phone}</p>
                          <p className="text-gray-600">{addr.address}</p>
                        </div>
                        <div className="flex gap-3 text-gray-600">
                          <button onClick={() => handleEdit(addr.id)} className="hover:text-blue-600">
                            <FaEdit />
                          </button>
                          <button onClick={() => handleDelete(addr.id)} className="hover:text-red-600">
                            <FaTrash />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Pagination for addresses */}
                  {totalAddressPages > 1 && (
                    <div className="flex justify-center gap-2 mt-3">
                      <button
                        onClick={() => setCurrentAddressPage((p) => Math.max(p - 1, 1))}
                        disabled={currentAddressPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                      >
                        ←
                      </button>
                      {Array.from({ length: totalAddressPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentAddressPage(i + 1)}
                          className={`px-3 py-1 border rounded ${currentAddressPage === i + 1 ? 'bg-red-500 text-white' : ''}`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentAddressPage((p) => Math.min(p + 1, totalAddressPages))}
                        disabled={currentAddressPage === totalAddressPages}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                      >
                        →
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* History */}
          {tab === 'history' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="border-b border-gray-200 text-xs sm:text-sm font-semibold flex gap-4 sm:gap-6 overflow-x-auto">
                {orderStatuses.map((status, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setOrderStatusFilter(status);
                      setCurrentOrderPage(1);
                    }}
                    className={`pb-2 whitespace-nowrap ${orderStatusFilter === status
                        ? 'border-b-2 border-red-500 text-red-600'
                        : 'text-gray-500 hover:text-red-500'
                      }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {filteredOrders.length > 0 ? (
                  <>
                    {paginate(filteredOrders, currentOrderPage, ordersPerPage).map(order => (
                      <div key={order.id} className="border p-3 rounded-md flex flex-col sm:flex-row justify-between sm:items-center">
                        <div>
                          <p>Mã đơn: <span className="font-medium">#{order.id}</span></p>
                          <p>Ngày đặt: {order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-red-600">{order.total.toLocaleString('vi-VN')}đ</p>
                          <p className="text-green-600">{order.status}</p>
                        </div>
                      </div>
                    ))}

                    {/* Pagination for orders */}
                    {totalOrderPages > 1 && (
                      <div className="flex justify-center gap-2 mt-3">
                        <button
                          onClick={() => setCurrentOrderPage((p) => Math.max(p - 1, 1))}
                          disabled={currentOrderPage === 1}
                          className="px-3 py-1 border rounded disabled:opacity-50"
                        >
                          ←
                        </button>
                        {Array.from({ length: totalOrderPages }, (_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentOrderPage(i + 1)}
                            className={`px-3 py-1 border rounded ${currentOrderPage === i + 1 ? 'bg-red-500 text-white' : ''}`}
                          >
                            {i + 1}
                          </button>
                        ))}
                        <button
                          onClick={() => setCurrentOrderPage((p) => Math.min(p + 1, totalOrderPages))}
                          disabled={currentOrderPage === totalOrderPages}
                          className="px-3 py-1 border rounded disabled:opacity-50"
                        >
                          →
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12">
                    <img src={logo} alt="empty" className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-2" />
                    <p className="text-gray-500">Không có đơn hàng nào</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Các tab khác giữ nguyên (info, password) */}
          {tab === 'info' && (
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">Thông tin cá nhân</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input type="text" placeholder="Họ và tên" defaultValue="Nguyen Cao Minh" className={inputClass} />
                <input type="text" placeholder="Số điện thoại" value="0707734958" readOnly className={inputClass} />
                <input type="email" placeholder="Email" value="minhncpc05371@fpt.edu.vn" readOnly className={`${inputClass} sm:col-span-2`} />
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Lưu thay đổi</button>
            </div>
          )}

          {tab === 'password' && (
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-semibold">Đổi mật khẩu</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input type="password" placeholder="Mật khẩu hiện tại" className={inputClass} />
                <input type="password" placeholder="Mật khẩu mới" className={inputClass} />
                <input type="password" placeholder="Xác nhận mật khẩu mới" className={`${inputClass} sm:col-span-2`} />
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Đổi mật khẩu</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const inputClass = 'w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500';

const tabClass = (active) =>
  `flex items-center gap-2 px-3 py-2 rounded-md w-full text-left transition ${active ? 'bg-red-100 text-red-600 font-semibold' : 'hover:bg-gray-100'}`;

export default UserProfile;
