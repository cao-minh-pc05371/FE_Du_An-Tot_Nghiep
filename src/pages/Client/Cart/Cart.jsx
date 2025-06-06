import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaArrowLeft } from "react-icons/fa";
import iphone from "../../../assets/iphone-16-pro-max_2.webp";

const initialCart = [
    {
        id: 1,
        name: "iPhone 16 Pro Max 512GB | VN/A - Titan Sa Mạc",
        price: 36790000,
        oldPrice: 40900000,
        image: iphone,
        quantity: 1,
        selected: true,
    },
    {
        id: 2,
        name: "iPhone 16 Pro Max 256GB | VN/A - Titan Sa Mạc",
        price: 30490000,
        oldPrice: 34900000,
        image: iphone,
        quantity: 1,
        selected: false,
    },
];

const Cart = () => {
    const [cartItems, setCartItems] = useState(initialCart);
    const navigate = useNavigate();

    const updateQty = (id, amount) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const toggleSelect = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };

    const isAllSelected = cartItems.length > 0 && cartItems.every(item => item.selected);

    const toggleSelectAll = () => {
        setCartItems((prev) =>
            prev.map((item) => ({ ...item, selected: !isAllSelected }))
        );
    };

    const renderCartItem = (item) => (
        <div key={item.id} className="bg-white rounded-xl shadow p-4 flex gap-4 items-start">
            <input
                type="checkbox"
                checked={item.selected}
                onChange={() => toggleSelect(item.id)}
                className="mt-2 accent-red-600"
            />
            <img src={item.image} alt={item.name} className="w-24 h-24 object-contain rounded-lg" />

            <div className="flex-1">
                <h3 className="font-semibold text-base text-gray-900 mb-1">{item.name}</h3>
                <div className="text-red-600 font-bold text-lg">
                    {item.price.toLocaleString()}đ
                    <span className="ml-2 line-through text-sm text-gray-500">
                        {item.oldPrice.toLocaleString()}đ
                    </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                    <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100"
                    >
                        -
                    </button>
                    <span className="min-w-[32px] text-center">{item.quantity}</span>
                    <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100"
                    >
                        +
                    </button>

                    <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-gray-400 hover:text-red-600"
                    >
                        <FaTrashAlt size={16} />
                    </button>
                </div>
            </div>
        </div>
    );

    const total = cartItems.reduce(
        (sum, item) =>
            item.selected ? sum + item.price * item.quantity : sum,
        0
    );

    return (
        <div className="max-w-[900px] mx-auto px-4 py-6">
            {/* Nút quay lại */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-sm text-gray-600 hover:text-red-600 mb-4"
            >
                <FaArrowLeft className="mr-2" />
                Quay lại
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">Giỏ hàng của bạn</h2>

            {/* Chọn tất cả */}
            {cartItems.length > 0 && (
                <div className="mb-2 flex items-center">
                    <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={toggleSelectAll}
                        className="mr-2 accent-red-600"
                    />
                    <label className="text-sm text-gray-700 font-medium">Chọn tất cả</label>
                </div>
            )}

            <div className="space-y-4">
                {cartItems.map(renderCartItem)}
            </div>

            <div className="mt-6 bg-white rounded-xl shadow p-6 text-right">
                <div className="text-sm text-gray-500 mb-2">Tổng tạm tính</div>
                <div className="text-3xl text-red-600 font-bold mb-4">
                    {total.toLocaleString()}đ
                </div>
                <button
                    className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
                    disabled={cartItems.filter((item) => item.selected).length === 0}
                >
                    Mua ngay ({cartItems.filter((item) => item.selected).length})
                </button>
            </div>
        </div>
    );
};

export default Cart;
