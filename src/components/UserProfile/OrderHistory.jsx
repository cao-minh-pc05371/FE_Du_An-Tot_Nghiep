import React, { useState } from 'react';
import logo from '../../assets/1ce3169b-4ad7-4038-94d9-00ce4bd19d86.png';

const OrderHistory = () => {
    const orders = [
        { id: 1, date: '2025-07-01', total: 1500000, status: 'Đã giao hàng' },
        { id: 2, date: '2025-06-20', total: 2500000, status: 'Đang vận chuyển' },
        { id: 3, date: '2025-06-18', total: 1200000, status: 'Đã huỷ' },
        { id: 4, date: '2025-06-15', total: 800000, status: 'Chờ xác nhận' },
        { id: 5, date: '2025-06-10', total: 2200000, status: 'Đã xác nhận' },
    ];
    const orderStatuses = ['Tất cả', 'Chờ xác nhận', 'Đã xác nhận', 'Đang vận chuyển', 'Đã giao hàng', 'Đã huỷ'];
    const [statusFilter, setStatusFilter] = useState('Tất cả');
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 3;

    const filtered = statusFilter === 'Tất cả' ? orders : orders.filter(o => o.status === statusFilter);
    const totalPages = Math.ceil(filtered.length / perPage);
    const paginate = (items) => items.slice((currentPage - 1) * perPage, currentPage * perPage);

    return (
        <div className="space-y-4 sm:space-y-6">
            <div className="border-b border-gray-200 text-xs sm:text-sm font-semibold flex gap-4 sm:gap-6 overflow-x-auto">
                {orderStatuses.map((status, i) => (
                    <button key={i} onClick={() => { setStatusFilter(status); setCurrentPage(1); }} className={`pb-2 whitespace-nowrap ${statusFilter === status ? 'border-b-2 border-red-500 text-red-600' : 'text-gray-500 hover:text-red-500'}`}>{status}</button>
                ))}
            </div>

            <div className="space-y-3">
                {filtered.length > 0 ? (
                    <>
                        {paginate(filtered).map(order => (
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

                        {totalPages > 1 && (
                            <div className="flex justify-center gap-2 mt-3">
                                <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 border rounded disabled:opacity-50">←</button>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-red-500 text-white' : ''}`}>{i + 1}</button>
                                ))}
                                <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-3 py-1 border rounded disabled:opacity-50">→</button>
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
    );
};

export default OrderHistory;
