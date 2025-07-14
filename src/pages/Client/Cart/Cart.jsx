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

    function renderCart() {
        return cartItems.map((item) => renderCartItem(item));
    }
  function toggleSelect(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  }

    const total = cartItems.reduce(
        (sum, item) => (item.selected ? sum + item.price * item.quantity : sum),
        0
  function toggleSelectAll() {
    const isAllSelected =
      cartItems.length > 0 && cartItems.every((item) => item.selected);
    setCartItems((prev) =>
      prev.map((item) => ({ ...item, selected: !isAllSelected }))
    );
  }

  function renderCartItem(item) {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
      <div
        key={item.id}
        className="bg-white border border-gray-100 rounded-2xl shadow p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full"
      >
        <div className="flex items-start gap-3 w-full sm:w-auto">
        <div className="flex items-start gap-3 w-full">
          <input
            type="checkbox"
            checked={item.selected}
            onChange={() => toggleSelect(item.id)}
            className="accent-red-600 mt-1"
          />

          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-contain rounded-xl border"
          />
        </div>

        <div className="flex-1 w-full">
          <h3 className="font-medium text-gray-900 leading-snug mb-2 text-base sm:text-lg">
            {item.name}
          </h3>

          <div className="text-sm text-gray-700">
            <span className="text-red-600 font-bold text-lg">
              {item.price.toLocaleString()}đ
            </span>
            <span className="ml-2 line-through text-gray-400 text-sm">
              {item.oldPrice.toLocaleString()}đ
            </span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-sm text-gray-600 hover:text-red-600 mb-6"
              onClick={() => updateQty(item.id, -1)}
              className="w-9 h-9 border rounded-lg text-gray-600 hover:bg-gray-100"
            >
                <FaArrowLeft className="mr-2" />
                Quay lại
              -
            </button>
            <span className="text-sm font-semibold min-w-[30px] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQty(item.id, 1)}
              className="w-9 h-9 border rounded-lg text-gray-600 hover:bg-gray-100"
            >
              +
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
            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"/>
          {/* Nội dung bên phải */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Tên + giá */}
            <div>
              <h3 className="text-sm sm:text-base font-medium text-gray-900 leading-snug line-clamp-2">
                {item.name}
              </h3>
              <div className="mt-1 text-xs sm:text-sm text-gray-700 flex items-center gap-2">
                <span className="text-red-600 font-bold text-base sm:text-lg">
                  {item.price.toLocaleString()}đ
                </span>
                <span className="line-through text-gray-400 text-xs sm:text-sm">
                  {item.oldPrice.toLocaleString()}đ
                </span>
              </div>
            </div>
            {/* Số lượng và nút xoá */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQty(item.id, -1)}
                  className="w-8 h-8 border rounded-lg text-gray-600 hover:bg-gray-100">
                  -
                </button>
                <span className="text-sm font-semibold min-w-[30px] text-center">
                  {item.quantity}
                </span>
                <button
                    disabled={cartItems.filter((item) => item.selected).length === 0}
                    className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                    Mua ngay ({cartItems.filter((item) => item.selected).length})
                  onClick={() => updateQty(item.id, 1)}
                  className="w-8 h-8 border rounded-lg text-gray-600 hover:bg-gray-100">
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="p-2 text-gray-400 hover:text-red-600 transition"
                title="Xoá">
                <FaTrashAlt size={18} />
              </button>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="ml-auto text-gray-400 hover:text-red-600 transition"
              title="Xoá"
            >
              <FaTrashAlt size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const total = cartItems.reduce(
    (sum, item) => (item.selected ? sum + item.price * item.quantity : sum),
    0
  );

  const selectedCount = cartItems.filter((item) => item.selected).length;

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-gray-600 hover:text-red-600 ml-4"
        >
          className="flex items-center text-sm text-gray-600 hover:text-red-600 ml-4">
          <FaArrowLeft className="mr-2" />
          Quay lại
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ml-auto">
          Giỏ hàng
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-[66.5%] bg-white border border-gray-100 rounded-2xl shadow p-6">
          {cartItems.length > 0 && (
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={cartItems.every((item) => item.selected)}
                onChange={toggleSelectAll}
                className="accent-red-600 mr-2"
              />
              <span className="text-sm font-medium text-gray-700">
                Chọn tất cả ({selectedCount})
              </span>
            </div>
          )}

          <div className="space-y-5">{cartItems.map(renderCartItem)}</div>
        </div>

        <div className="w-full lg:w-[33.5%]">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Thông tin đơn hàng
            </h3>

            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Tổng tiền</span>
              <span className="text-gray-800 font-medium">
                {total.toLocaleString()}đ
              </span>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Tổng khuyến mãi</span>
              <span className="text-gray-800">
                {cartItems
                  .reduce(
                    (sum, item) =>
                      item.selected
                        ? sum + (item.oldPrice - item.price) * item.quantity
                        : sum,
                    0
                  )
                  .toLocaleString()}
                đ
              </span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-base font-bold text-gray-800 mb-4">
              <span>Cần thanh toán</span>
              <span className="text-red-600">{total.toLocaleString()}đ</span>
            </div>

            <button
              disabled={selectedCount === 0}
              className="w-full bg-red-600 text-white px-4 py-2.5 rounded-md font-semibold text-sm hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Xác nhận đơn ({selectedCount})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
