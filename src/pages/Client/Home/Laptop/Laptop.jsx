import React from "react";
import MacbookM2 from "../../../../assets/Laptop/macbook_air_m2_1_1_1.webp";

const Laptop = () => {
  const laptopBrands = [
    "MacBook",
    "ASUS",
    "Dell",
    "HP",
    "Lenovo",
    "Acer",
    "MSI",
    "LG",
    "Huawei",
    "Surface",
    "Gigabyte",
    "Xem tất cả",
  ];

  return (
    <div className="p-4">
      {/* Tiêu đề + Thương hiệu nằm cùng hàng */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-gray-800">LAPTOP</h1>

        <div className="flex flex-wrap gap-3">
          {laptopBrands.map((brand, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-red-100 transition"
            >
              {brand}
            </button>
          ))}
        </div>
      </div>
      {/* Thẻ sản phẩm */}
      <div className="w-64 rounded-xl border shadow-md p-4 relative">
        {/* Tag giảm giá */}
        <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
          Giảm 4%
        </div>

        {/* Hình ảnh sản phẩm */}
        <img
          src={MacbookM2}
          alt="Apple MacBook Air M2 2024 8CPU 8GPU 16GB 256GB"
          className="w-full h-48 object-contain mt-6"
        />

        {/* Tên sản phẩm */}
        <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-5">
          Apple MacBook Air M2 2024 8CPU 8GPU 16GB 256GB I Chính hãng Apple Việt
          Nam
        </h3>

        {/* Giá */}
        <div className="mt-1">
          <span className="text-lg font-bold text-red-600">20.990.000đ</span>{" "}
          <span className="line-through text-gray-500 text-sm">
            24.990.000đ
          </span>
        </div>

        {/* Smember */}
        <div className="text-sm font-medium mt-1">
          <span className="text-gray-600 text-xs">Smember giảm thêm đến </span>
          <span className="text-red-600 text-xs">305.000đ</span>
        </div>

        {/* Thông tin thêm */}
        <div className="mt-2 text-xs text-gray-700 bg-gray-100 p-2 rounded-lg">
          Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.
        </div>

        {/* Đánh giá và yêu thích */}
        <div className="mt-3 flex items-center justify-between text-sm">
          <div className="flex text-yellow-500 text-sm">
            {"⭐️⭐️⭐️⭐️⭐️"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
