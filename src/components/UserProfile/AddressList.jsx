import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import logo from '../../assets/1ce3169b-4ad7-4038-94d9-00ce4bd19d86.png';
import AddAddressModal from './AddAddressModal/AddAddressModal';

const AddressList = () => {
    const [addresses, setAddresses] = useState([
        { id: 1, name: 'Nguyen Cao Minh', phone: '0707734958', address: '123 Nguyễn Văn Cừ, Quận 5, TP.HCM' },
        { id: 2, name: 'Nguyen Van A', phone: '0909123456', address: '456 Lê Lợi, Quận 1, TP.HCM' },
        { id: 3, name: 'Nguyen Van B', phone: '0912123456', address: '789 Trần Hưng Đạo, Quận 5, TP.HCM' },
        { id: 4, name: 'Nguyen Van C', phone: '0923123456', address: '101 Hùng Vương, Quận 5, TP.HCM' },
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 3;
    const totalPages = Math.ceil(addresses.length / perPage);
    const [showModal, setShowModal] = useState(false);

    const handleAddAddress = (data) => {
        console.log("Address data submitted:", data);
        // Call API create address here
        setShowModal(false);
    };

    const handleEdit = (id) => {
        console.log("Edit address id:", id);
    };

    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xoá địa chỉ này?")) {
            setAddresses(addresses.filter(addr => addr.id !== id));
        }
    };

    const paginate = (items) => items.slice((currentPage - 1) * perPage, currentPage * perPage);

    return (
        <>
            <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Sổ địa chỉ</h3>
                    <button
                        onClick={() => setShowModal(true)}
                        className="text-red-600 text-xs sm:text-sm font-medium flex items-center gap-1"
                    >
                        + Thêm địa chỉ
                    </button>
                </div>
                {addresses.length === 0 ? (
                    <div className="text-center py-12">
                        <img src={logo} alt="empty-address" className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">Bạn chưa có địa chỉ nào được tạo</p>
                    </div>
                ) : (
                    <>
                        <ul className="space-y-2">
                            {paginate(addresses).map(addr => (
                                <li key={addr.id} className="border p-3 rounded-md flex justify-between items-center">
                                    <div>
                                        <p className="font-medium">{addr.name} - {addr.phone}</p>
                                        <p className="text-gray-600">{addr.address}</p>
                                    </div>
                                    <div className="flex gap-3 text-gray-600">
                                        <button onClick={() => handleEdit(addr.id)} className="hover:text-blue-600"><FaEdit /></button>
                                        <button onClick={() => handleDelete(addr.id)} className="hover:text-red-600"><FaTrash /></button>
                                    </div>
                                </li>
                            ))}
                        </ul>

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
                )}
            </div>
            <AddAddressModal
                visible={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={handleAddAddress}
            />
        </>
    );
};

export default AddressList;
