import React from "react";
import TiviImg from "../../../../assets/Tivi/55_1_1.webp";

const Tivi = () => {
  const tvBrands = [
    "Sony",
    "Samsung",
    "LG",
    "TCL",
    "Panasonic",
    "Xiaomi",
    "Casper",
    "Xem tất cả",
  ];

  const tvProducts = [
    {
      id: 1,
      name: "Smart Tivi Sony 4K 55 inch KD-55X75K Google TV",
      image: TiviImg,
      discount: "15%",
      price: "11.990.000đ",
      originalPrice: "13.990.000đ",
      smemberDiscount: "500.000đ",
      note: "Miễn phí vận chuyển, lắp đặt tận nơi.",
      rating: 5,
    },
    {
      id: 2,
      name: "Smart Tivi Samsung 4K 50 inch UA50AU8100 Crystal UHD",
      image: TiviImg,
      discount: "12%",
      price: "10.590.000đ",
      originalPrice: "11.990.000đ",
      smemberDiscount: "400.000đ",
      note: "Tặng kèm gói xem TV Samsung TV Plus.",
      rating: 4,
    },
    {
      id: 3,
      name: "Smart Tivi LG 43 inch 4K UHD 43UQ8000PSC ThinQ AI",
      image: TiviImg,
      discount: "10%",
      price: "7.990.000đ",
      originalPrice: "8.890.000đ",
      smemberDiscount: "300.000đ",
      note: "Bảo hành chính hãng 24 tháng.",
      rating: 4,
    },
  ];

  const renderStars = (count) => "⭐️".repeat(count);

  return (
    <div className="p-4">
      {/* Tiêu đề + Thương hiệu */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-gray-800">TIVI THÔNG MINH</h1>
<<<<<<< HEAD
        <div className="flex overflow-x-auto gap-2 sm:gap-3 px-1">
          {tvBrands.map((brand, index) => (
            <button
              key={index}
              className="whitespace-nowrap px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-red-100 transition"
=======
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 whitespace-nowrap">
          TIVI THÔNG MINH
        </h1>

        <div className="flex flex-wrap gap-3">
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-start sm:justify-end">
          {tvBrands.map((brand, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-red-100 transition"
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-700 hover:bg-red-100 transition whitespace-nowrap"
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
            >
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-700 hover:bg-red-100 transition whitespace-nowrap">
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Danh sách sản phẩm */}
<<<<<<< HEAD
=======
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {tvProducts.map((product) => (
          <div
            key={product.id}
<<<<<<< HEAD
            className="w-full rounded-xl border shadow-md p-4 relative cursor-pointer hover:shadow-lg transition"
          >
=======
            className="w-60 rounded-xl border shadow-md p-4 relative"
            className="w-full rounded-xl border shadow-md p-4 relative cursor-pointer hover:shadow-lg transition"
          >
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
            className="w-full rounded-xl border shadow-md p-4 relative cursor-pointer hover:shadow-lg transition">
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
            {/* Giảm giá */}
            <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
              Giảm {product.discount}
            </div>

            {/* Hình ảnh */}
            <img
              src={product.image}
              alt={product.name}
<<<<<<< HEAD
              className="w-full h-36 sm:h-48 object-contain mt-6 transition-transform duration-300 hover:scale-105"
            />

=======
              className="w-full h-48 object-contain mt-6"
              className="w-full h-36 sm:h-48 object-contain mt-6"
            />

            <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-5">
              className="w-full h-36 sm:h-48 object-contain mt-6"/>
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
            {/* Tên sản phẩm */}
            <h3 className="mt-2 text-xs sm:text-sm font-semibold text-gray-900 leading-5 line-clamp-2">
              {product.name}
            </h3>

            {/* Giá */}
            <div className="mt-1">
<<<<<<< HEAD
              <span className="text-base sm:text-lg font-bold text-red-600">
                {product.price}
              </span>{" "}
=======
              <span className="text-lg font-bold text-red-600">
              <span className="text-base sm:text-lg font-bold text-red-600">
                {product.price}
              </span>{" "}
              <span className="line-through text-gray-500 text-sm">
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
              <span className="line-through text-gray-500 text-xs sm:text-sm">
                {product.originalPrice}
              </span>
            </div>

<<<<<<< HEAD
            {/* Smember giảm thêm */}
            <div className="text-xs sm:text-sm font-medium mt-1">
              <span className="text-gray-600 text-xs">Smember giảm thêm đến </span>
              <span className="text-red-600 text-xs">{product.smemberDiscount}</span>
            </div>

=======
            <div className="text-sm font-medium mt-1">
            {/* Smember */}
            <div className="text-xs sm:text-sm font-medium mt-1">
              <span className="text-gray-600 text-xs">
                Smember giảm thêm đến{" "}
              </span>
              <span className="text-red-600 text-xs">
                {product.smemberDiscount}
              </span>
            </div>

            <div className="mt-2 text-xs text-gray-700 bg-gray-100 p-2 rounded-lg">
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
            {/* Ghi chú */}
            <div className="mt-2 text-[11px] sm:text-xs text-gray-700 bg-gray-100 p-2 rounded-lg line-clamp-2">
              {product.note}
            </div>

<<<<<<< HEAD
            {/* Đánh giá */}
            <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex text-yellow-500">{renderStars(product.rating)}</div>
=======
            <div className="mt-3 flex items-center justify-between text-sm">
              <div className="flex text-yellow-500 text-sm">
            {/* Đánh giá */}
            <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex text-yellow-500">
                {renderStars(product.rating)}
              </div>
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tivi;
