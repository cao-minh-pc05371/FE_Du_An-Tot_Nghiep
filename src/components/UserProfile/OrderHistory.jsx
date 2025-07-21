import React, { useEffect, useState } from "react";
import constants from "../../constants/constants";
import logo from "../../assets/1ce3169b-4ad7-4038-94d9-00ce4bd19d86.png";

const OrderHistory = () => {
    const user = JSON.parse(localStorage.getItem("user") || sessionStorage.getItem("user"));
    const [orders, setOrders] = useState([]);
    const [statusFilter, setStatusFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 3;

    const statusMap = {
        all: "Tất cả",
        pending: "Chờ xác nhận",
        confirmed: "Đã xác nhận",
        shipped: "Đang vận chuyển",
        delivered: "Đã giao hàng",
        cancelled: "Đã huỷ"
    };

    const statusOptions = Object.keys(statusMap);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch(`${constants.BASE_URL}/orders`);
                const data = await res.json();
                const userOrders = data.filter((order) => order.user_id === user?.id);
                setOrders(userOrders);
            } catch (error) {
                console.error("Lỗi khi lấy đơn hàng:", error);
            }
        };

        if (user) fetchOrders();
    }, [user]);

    const filtered = statusFilter === "all" ? orders : orders.filter((o) => o.status === statusFilter);
    const totalPages = Math.ceil(filtered.length / perPage);
    const paginate = (items) => items.slice((currentPage - 1) * perPage, currentPage * perPage);

    return (
        <div className="space-y-4 sm:space-y-6">
            <div className="border-b border-gray-200 text-xs sm:text-sm font-semibold flex gap-4 sm:gap-6 overflow-x-auto">
                {statusOptions.map((status) => (
                    <button
                        key={status}
                        onClick={() => {
                            setStatusFilter(status);
                            setCurrentPage(1);
                        }}
                        className={`pb-2 whitespace-nowrap ${statusFilter === status ? "border-b-2 border-red-500 text-red-600" : "text-gray-500 hover:text-red-500"
                            }`}
                    >
                        {statusMap[status]}
                    </button>
                ))}
            </div>

            <div className="space-y-3">
                {filtered.length > 0 ? (
                    <>
                        {paginate(filtered).map((order) => (
                            <div key={order.id} className="border p-3 rounded-md flex flex-col sm:flex-row justify-between sm:items-center">
                                <div>
                                    <p>Mã đơn: <span className="font-medium">#{order.id}</span></p>
                                    <p>Ngày đặt: {order.created_at?.slice(0, 10)}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-red-600">{Number(order.total_amount).toLocaleString("vi-VN")}đ</p>
                                    <p className="text-green-600">{statusMap[order.status]}</p>
                                </div>
                            </div>
                        ))}

                        {totalPages > 1 && (
                            <div className="flex justify-center gap-2 mt-3">
                                <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 border rounded disabled:opacity-50">←</button>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-red-500 text-white" : ""}`}>
                                        {i + 1}
                                    </button>
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
