import React from "react";
import ipad from "../../../../assets/Tablet/ipad-air-6-m2-13-inch-256gb.webp";

const Tablet = () => {
  const tabletBrands = [
    "iPad",
    "Samsung",
    "Huawei",
    "Xiaomi",
    "Lenovo",
    "Microsoft",
    "Nokia",
    "Masstel",
    "Realme",
    "Kindle",
    "Xem tất cả",
  ];

  const tabletProducts = [
    {
      id: 1,
      name: "iPad Pro M2 11 inch 2022 Wi-Fi 128GB | Chính hãng Apple VN",
      image: ipad,
      discount: "7%",
      price: "20.490.000đ",
      originalPrice: "21.990.000đ",
      smemberDiscount: "500.000đ",
      note: "Trả góp 0% qua thẻ tín dụng, bảo hành 12 tháng chính hãng.",
      rating: 5,
    },
    {
      id: 2,
      name: "Samsung Galaxy Tab S9 FE 10.9 inch Wi-Fi 128GB",
      image: ipad,
      discount: "10%",
      price: "9.990.000đ",
      originalPrice: "11.190.000đ",
      smemberDiscount: "300.000đ",
      note: "Tặng bao da chính hãng, bảo hành 24 tháng.",
      rating: 4,
    },
    {
      id: 3,
      name: "Xiaomi Pad 6 8GB/128GB - Snapdragon 870",
      image: ipad,
      discount: "12%",
      price: "6.990.000đ",
      originalPrice: "7.990.000đ",
      smemberDiscount: "250.000đ",
      note: "Giảm thêm khi thanh toán VNPAY, bảo hành 12 tháng.",
      rating: 4,
    },
  ];

  const renderStars = (count) => "⭐️".repeat(count);

  return (
    <div className="p-4">
      {/* Tiêu đề + Thương hiệu */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-gray-800">MÁY TÍNH BẢNG</h1>
        <div className="flex overflow-x-auto gap-2 sm:gap-3 px-1">
          {tabletBrands.map((brand, index) => (
            <button
              key={index}
              className="whitespace-nowrap px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-red-100 transition"
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {tabletProducts.map((product) => (
          <div
            key={product.id}
            className="w-full rounded-xl border shadow-md p-4 relative cursor-pointer hover:shadow-lg transition"
          >
            {/* Tag giảm giá */}
            <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
              Giảm {product.discount}
            </div>

            {/* Hình ảnh */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 sm:h-48 object-contain mt-6"
            />

            {/* Tên sản phẩm */}
            <h3 className="mt-2 text-xs sm:text-sm font-semibold text-gray-900 leading-5 line-clamp-2">
              {product.name}
            </h3>

            {/* Giá */}
            <div className="mt-1">
              <span className="text-base sm:text-lg font-bold text-red-600">
                {product.price}
              </span>{" "}
              <span className="line-through text-gray-500 text-xs sm:text-sm">
                {product.originalPrice}
              </span>
            </div>

            {/* Smember giảm thêm */}
            <div className="text-xs sm:text-sm font-medium mt-1">
              <span className="text-gray-600 text-xs">
                Smember giảm thêm đến{" "}
              </span>
              <span className="text-red-600 text-xs">
                {product.smemberDiscount}
              </span>
            </div>

            {/* Ghi chú */}
            <div className="mt-2 text-[11px] sm:text-xs text-gray-700 bg-gray-100 p-2 rounded-lg line-clamp-2">
              {product.note}
            </div>

            {/* Đánh giá */}
            <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex text-yellow-500">
                {renderStars(product.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tablet;
