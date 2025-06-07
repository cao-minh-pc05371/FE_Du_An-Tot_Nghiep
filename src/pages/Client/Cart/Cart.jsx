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

    function updateQty(id, amount) {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    }

    function removeItem(id) {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    }

    function toggleSelect(id) {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    }

    function toggleSelectAll() {
        const isAllSelected =
            cartItems.length > 0 && cartItems.every((item) => item.selected);
        setCartItems((prev) =>
            prev.map((item) => ({ ...item, selected: !isAllSelected }))
        );
    }

    function renderCartItem(item) {
        return (
            <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex gap-4 items-start"
            >
                <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => toggleSelect(item.id)}
                    className="mt-2 accent-red-600"
                />

                <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded-lg border"
                />

                <div className="flex-1">
                    <h3 className="font-medium text-gray-800 leading-snug mb-1">
                        {item.name}
                    </h3>

                    <div className="text-sm mt-1 text-gray-700">
                        <span className="text-red-600 font-bold text-lg">
                            {item.price.toLocaleString()}đ
                        </span>
                        <span className="ml-2 line-through text-gray-400 text-sm">
                            {item.oldPrice.toLocaleString()}đ
                        </span>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                        <button
                            onClick={() => updateQty(item.id, -1)}
                            className="w-8 h-8 border rounded-md text-gray-600 hover:bg-gray-100"
                        >
                            -
                        </button>
                        <span className="text-sm font-semibold min-w-[30px] text-center">
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => updateQty(item.id, 1)}
                            className="w-8 h-8 border rounded-md text-gray-600 hover:bg-gray-100"
                        >
                            +
                        </button>

                        <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-gray-400 hover:text-red-600 transition"
                            title="Xóa"
                        >
                            <FaTrashAlt size={16} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    function renderCart() {
        return cartItems.map((item) => renderCartItem(item));
    }

    const total = cartItems.reduce(
        (sum, item) => (item.selected ? sum + item.price * item.quantity : sum),
        0
    );

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-sm text-gray-600 hover:text-red-600 mb-6"
            >
                <FaArrowLeft className="mr-2" />
                Quay lại
            </button>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">Giỏ hàng</h2>

            {cartItems.length > 0 && (
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        checked={cartItems.every((item) => item.selected)}
                        onChange={toggleSelectAll}
                        className="accent-red-600 mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">Chọn tất cả</span>
                </div>
            )}

            <div className="space-y-5">{renderCart()}</div>

            <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-md p-6 text-right">
                <div className="text-gray-500 text-sm mb-2">Tổng tạm tính</div>
                <div className="text-3xl text-red-600 font-bold mb-4">
                    {total.toLocaleString()}đ
                </div>
                <button
                    disabled={cartItems.filter((item) => item.selected).length === 0}
                    className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                    Mua ngay ({cartItems.filter((item) => item.selected).length})
                </button>
            </div>
        </div>
    );
};

export default Cart;
