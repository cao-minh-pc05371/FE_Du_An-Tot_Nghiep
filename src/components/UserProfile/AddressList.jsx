import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import logo from '../../assets/1ce3169b-4ad7-4038-94d9-00ce4bd19d86.png';
import AddressModal from './AddressModal/AddressModal';
import axios from 'axios';
import constants from '../../constants/constants'; // Chứa BASE_URL

const AddressList = () => {
    const [addresses, setAddresses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [editData, setEditData] = useState(null);
    const perPage = 3;

    const token = localStorage.getItem('access_token');

    const fetchAddresses = async () => {
        try {
            const res = await axios.get(`${constants.BASE_URL}/shipping-addresses`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setAddresses(res.data);
        } catch (error) {
            alert("Lỗi khi tải địa chỉ. Vui lòng đăng nhập lại.");
        }
    };

    useEffect(() => {
        fetchAddresses();
    }, []);

    const handleAddAddress = () => {
        setEditData(null);
        setShowModal(true);
    };

    const handleEdit = (id) => {
        const selected = addresses.find(addr => addr.id === id);
        setEditData(selected);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xoá địa chỉ này?")) {
            try {
                await axios.delete(`${constants.BASE_URL}/shipping-addresses/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchAddresses();
            } catch (err) {
                alert("Không thể xoá địa chỉ.");
            }
        }
    };

    const totalPages = Math.ceil(addresses.length / perPage);
    const paginate = (items) => items.slice((currentPage - 1) * perPage, currentPage * perPage);

    return (
        <>
            <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Sổ địa chỉ</h3>
                    <button
                        onClick={handleAddAddress}
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
                                        <p className="font-medium">{addr.recipient_name} - {addr.phone}</p>
                                        <p className="text-gray-600">{addr.address}, {addr.ward}, {addr.district}, {addr.city}</p>
                                        {addr.is_default && <span className="text-xs text-green-600">Mặc định</span>}
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

            <AddressModal
                visible={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={fetchAddresses}
                editData={editData}
            />
        </>
    );
};

export default AddressList;
