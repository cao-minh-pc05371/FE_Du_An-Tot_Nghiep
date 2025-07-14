import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaArrowLeft } from "react-icons/fa";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
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
    id: 3,
    name: "iPhone 16 Pro Max 1TB | VN/A - Titan Xanh",
    price: 46990000,
    oldPrice: 51900000,
    image: iphone,
    quantity: 2,
    selected: true,
  },
  {
    id: 4,
    name: "iPhone 16 Pro Max 128GB | VN/A - Titan Tự Nhiên",
    price: 28990000,
    oldPrice: 32900000,
    image: iphone,
    quantity: 1,
    selected: false,
  },
  {
    id: 5,
    name: "iPhone 16 256GB | VN/A - Hồng",
    price: 22490000,
    oldPrice: 25900000,
    image: iphone,
    quantity: 1,
    selected: true,
  },
  {
    id: 6,
    name: "iPhone 16 Pro 512GB | VN/A - Titan Đen",
    price: 35490000,
    oldPrice: 38900000,
    image: iphone,
    quantity: 1,
    selected: false,
  },
  {
    id: 7,
    name: "iPhone 16 Plus 128GB | VN/A - Xanh Lá",
    price: 19990000,
    oldPrice: 22900000,
    image: iphone,
    quantity: 1,
    selected: true,
  },
  {
    id: 8,
    name: "iPhone 16 128GB | VN/A - Trắng",
    price: 18490000,
    oldPrice: 20900000,
    image: iphone,
    quantity: 2,
    selected: false,
  },
  {
    id: 9,
    name: "iPhone 16 512GB | VN/A - Tím",
    price: 25490000,
    oldPrice: 28900000,
    image: iphone,
    quantity: 1,
    selected: true,
  },
  {
    id: 10,
    name: "iPhone 16 Pro Max 1TB | VN/A - Titan Tự Nhiên",
    price: 46990000,
    oldPrice: 51900000,
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

  const toggleSelectAll = () => {
    const isAllSelected =
      cartItems.length > 0 && cartItems.every((item) => item.selected);
    setCartItems((prev) =>
      prev.map((item) => ({ ...item, selected: !isAllSelected }))
    );
  };

  const renderCartItem = (item) => (
    <div
      key={item.id}
      className="bg-white border border-gray-100 rounded-2xl shadow p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full"
    >
      <div className="flex items-start gap-3 w-full sm:w-auto">
        <input
          type="checkbox"
          checked={item.selected}
          onChange={() => toggleSelect(item.id)}
          className="accent-red-600 mt-1 w-5 h-5 sm:w-6 sm:h-6"
        />

        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-contain rounded-xl border bg-gray-50"
        />
      </div>

      <div className="flex-1 w-full relative">
        <h3 className="font-medium text-gray-900 leading-snug mb-2 text-sm sm:text-base">
          {item.name}
        </h3>

        <div className="text-sm text-gray-700 mb-1">
          <span className="text-red-600 font-bold text-base">
            {item.price.toLocaleString()}đ
          </span>
          <span className="ml-2 line-through text-gray-400 text-sm">
            {item.oldPrice.toLocaleString()}đ
          </span>
        </div>

        <div className="mt-2 flex items-center gap-3">
          {/* Nút giảm */}
          <button
            onClick={() => updateQty(item.id, -1)}
            className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center 
            text-gray-600 bg-white hover:bg-gray-100 active:bg-gray-200 
            transition"
          >
            <HiMinusSm className="w-4 h-4" />
          </button>

          {/* Số lượng */}
          <span className="w-10 text-center font-semibold text-base text-gray-800">
            {item.quantity}
          </span>

          {/* Nút tăng */}
          <button
            onClick={() => updateQty(item.id, 1)}
            className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center 
            text-gray-600 bg-white hover:bg-gray-100 active:bg-gray-200 
            transition"
          >
            <HiPlusSm className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={() => removeItem(item.id)}
          title="Xoá"
          className="absolute right-2 bottom-2 sm:top-2 sm:bottom-auto 
             w-8 h-8 flex items-center justify-center 
             text-gray-400 bg-white border rounded-full
             hover:text-white hover:bg-red-500 hover:shadow-md hover:scale-110
             transition-all duration-200 ease-in-out"
        >
          <FaTrashAlt className="w-4 h-4" />
        </button>

      </div>
    </div>
  );

  const total = cartItems.reduce(
    (sum, item) => (item.selected ? sum + item.price * item.quantity : sum),
    0
  );

  const selectedCount = cartItems.filter((item) => item.selected).length;

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6 sm:py-10">
      {/* Tiêu đề */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Giỏ hàng của bạn</h2>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition"
        >
          <FaArrowLeft />
          <span>Quay lại mua sắm</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Danh sách sản phẩm */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-xl p-4 sm:p-6">
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

          {/* Danh sách sản phẩm cuộn được */}
          <div className="space-y-5 max-h-[400px] overflow-y-auto pr-2 scroll-smooth">
            {cartItems.length > 0 ? (
              cartItems.map(renderCartItem)
            ) : (
              <p className="text-center text-gray-500">Chưa có sản phẩm nào.</p>
            )}
          </div>
        </div>

        {/* Thông tin đơn hàng */}
        <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Thông tin đơn hàng
          </h3>

          {/* Danh sách sản phẩm đã chọn */}
          <div className="mb-4 space-y-3 max-h-[185px] overflow-y-auto pr-1">
            {cartItems
              .filter(item => item.selected)
              .map(item => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-2 rounded-lg border border-gray-100 bg-gray-50"
                >
                  {/* Hình ảnh và tên sản phẩm */}
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-md object-cover border shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-800 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">Số lượng: {item.quantity}</p>
                    </div>
                  </div>

                  {/* Giá */}
                  <div className="text-sm sm:text-base font-semibold text-red-600 whitespace-nowrap">
                    {(item.price * item.quantity).toLocaleString()}đ
                  </div>
                </div>
              ))}
          </div>


          <div className="space-y-2 text-sm sm:text-base">
            <div className="flex justify-between">
              <span>Tạm tính</span>
              <span className="font-medium text-gray-700">{total.toLocaleString()}đ</span>
            </div>
            <div className="flex justify-between">
              <span>Tiết kiệm</span>
              <span className="text-green-600 font-medium">
                {cartItems
                  .reduce(
                    (sum, item) =>
                      item.selected ? sum + (item.oldPrice - item.price) * item.quantity : sum,
                    0
                  )
                  .toLocaleString()}đ
              </span>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between items-center mb-4">
            <span className="text-base font-bold text-gray-800">Tổng thanh toán</span>
            <span className="text-lg sm:text-xl font-bold text-red-600">{total.toLocaleString()}đ</span>
          </div>

          <button
            disabled={selectedCount === 0}
            className="w-full bg-red-600 text-white py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-red-700 disabled:opacity-50 transition"
          >
            Xác nhận đơn ({selectedCount})
          </button>
        </div>

      </div>
    </div>
  );

};

export default Cart;
