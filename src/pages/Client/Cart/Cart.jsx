import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaArrowLeft } from "react-icons/fa";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import iphone from "../../../assets/iphone-16-pro-max_2.webp";

const initialCart = [
<<<<<<< HEAD
=======
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
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
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
<<<<<<< HEAD
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
=======
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const navigate = useNavigate();

<<<<<<< HEAD
  const updateQty = (id, amount) => {
=======
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
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
<<<<<<< HEAD
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
=======
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
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931

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

<<<<<<< HEAD
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
=======
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
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931

  const total = cartItems.reduce(
    (sum, item) => (item.selected ? sum + item.price * item.quantity : sum),
    0
  );

  const selectedCount = cartItems.filter((item) => item.selected).length;

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
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

<<<<<<< HEAD
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

=======
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
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
};

export default Cart;
