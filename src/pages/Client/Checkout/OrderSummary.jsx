import React from 'react';
import image from "../../../assets/SmartPhone/iphone-16-pro-max.webp";

const OrderSummary = () => {
  const products = [
    {
      name: 'iPhone 16 Pro Max 512GB | VN/A - Titan Sa Mạc',
      price: 36790000,
      quantity: 1,
      image: image,
    },
    {
      name: 'iPhone 16 Pro Max 256GB | VN/A - Titan Sa Mạc',
      price: 30490000,
      quantity: 1,
      image: image,
    },
    {
      name: 'iPhone 16 Pro Max 512GB | VN/A - Titan Sa Mạc',
      price: 36790000,
      quantity: 1,
      image: image,
    },
    {
      name: 'iPhone 16 Pro Max 256GB | VN/A - Titan Sa Mạc',
      price: 30490000,
      quantity: 1,
      image: image,
    },
    {
      name: 'iPhone 16 Pro Max 512GB | VN/A - Titan Sa Mạc',
      price: 36790000,
      quantity: 1,
      image: image,
    },
    {
      name: 'iPhone 16 Pro Max 256GB | VN/A - Titan Sa Mạc',
      price: 30490000,
      quantity: 1,
      image: image,
    },
  ];

  const subtotal = products.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const shipping = 50000;
  const taxes = subtotal * 0.05;
  const total = subtotal + shipping + taxes;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 space-y-6 h-fit lg:col-span-1 border border-neutral-200">
      <h1 className="text-lg sm:text-xl font-bold border-b pb-3">Đơn hàng</h1>

      {/* Scrollable products list */}
      <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
        {products.map((p, idx) => (
          <div key={idx} className="flex items-center gap-3 sm:gap-4">
            <img
              src={p.image}
              alt={p.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover border"
            />
            <div className="flex-1">
              <div className="text-xs sm:text-sm md:text-base font-medium text-gray-800">{p.name}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 mt-1">Số lượng: {p.quantity}</div>
            </div>
            <div className="text-xs sm:text-sm md:text-base font-semibold text-red-600">{p.price.toLocaleString()}đ</div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
        <div className="flex justify-between">
          <span>Tạm tính</span>
          <span>{subtotal.toLocaleString()}đ</span>
        </div>
        <div className="flex justify-between">
          <span>Phí vận chuyển</span>
          <span>{shipping.toLocaleString()}đ</span>
        </div>
        <div className="flex justify-between">
          <span>Thuế (5%)</span>
          <span>{taxes.toLocaleString()}đ</span>
        </div>
        <div className="flex justify-between font-bold text-sm sm:text-base pt-2 border-t">
          <span>Tổng cộng</span>
          <span className="text-red-600">{total.toLocaleString()}đ</span>
        </div>
      </div>

      <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium text-sm sm:text-base transition">
        Tiến hành thanh toán
      </button>
    </div>
  );
};

export default OrderSummary;
