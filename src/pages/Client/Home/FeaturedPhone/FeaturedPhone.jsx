import React from "react";
import { useNavigate } from "react-router-dom";
import Ip16prm from "../../../../assets/SmartPhone/iphone-16-pro-max.webp";
import Ip16prmden from "../../../../assets/SmartPhone/iphone-16-pro-titan-den.webp";

const FeaturedPhone = () => {
  const navigate = useNavigate();

  const phoneBrands = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "OPPO",
    "vivo",
    "ASUS",
    "Nokia",
    "Nothing",
    "Xem tất cả",
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
      image: Ip16prm,
      discount: "13%",
      price: "30.490.000đ",
      originalPrice: "34.990.000đ",
      smemberDiscount: "305.000đ",
      note: "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.",
      rating: 5,
    },
    {
      id: 2,
      name: "iPhone 16 Pro Max 512GB Titan Đen | Chính hãng VN/A",
      image: Ip16prmden,
      discount: "10%",
      price: "36.990.000đ",
      originalPrice: "40.990.000đ",
      smemberDiscount: "400.000đ",
      note: "Tặng phiếu mua hàng trị giá 500.000đ.",
      rating: 5,
    },
    {
      id: 3,
      name: "iPhone 16 Pro Max 1TB | Chính hãng VN/A",
      image: Ip16prm,
      discount: "5%",
      price: "42.990.000đ",
      originalPrice: "44.990.000đ",
      smemberDiscount: "500.000đ",
      note: "Tặng phiếu mua hàng trị giá 1.000.000đ.",
      rating: 5,
    },
    {
      id: 4,
      name: "iPhone 16 Pro Max 2TB | Chính hãng VN/A",
      image: Ip16prm,
      discount: "2%",
      price: "52.990.000đ",
      originalPrice: "54.990.000đ",
      smemberDiscount: "600.000đ",
      note: "Tặng phiếu mua hàng trị giá 1.500.000đ.",
      rating: 5,
    },
    {
      id: 5,
      name: "Samsung Galaxy S25 Ultra 256GB | Chính hãng VN/A",
      image: Ip16prm,
      discount: "15%",
      price: "28.490.000đ",
      originalPrice: "33.490.000đ",
      smemberDiscount: "300.000đ",
      note: "Tặng phiếu mua hàng trị giá 300.000đ.",
      rating: 5,
    },
    {
      id: 6,
      name: "Samsung Galaxy S25 Ultra 512GB | Chính hãng VN/A",
      image: Ip16prm,
      discount: "12%",
      price: "34.990.000đ",
      originalPrice: "39.990.000đ",
      smemberDiscount: "400.000đ",
      note: "Tặng phiếu mua hàng trị giá 500.000đ.",
      rating: 5,
    },
  ];

  const renderStars = (count) => "⭐️".repeat(count);

  return (
    <div className="p-4">
      {/* Tiêu đề + Thương hiệu */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-gray-800">ĐIỆN THOẠI</h1>
        <div className="flex overflow-x-auto gap-2 sm:gap-3 px-1">
          {phoneBrands.map((brand, index) => (
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
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="w-full rounded-xl border shadow-md p-4 relative cursor-pointer hover:shadow-lg transition"
          >
            {/* Giảm giá */}
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
              Giảm {product.discount}
            </div>

            {/* Hình ảnh */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 sm:h-48 object-contain mt-6 transition-transform duration-300 hover:scale-105"
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
              <span className="text-gray-600 text-xs">Smember giảm thêm đến </span>
              <span className="text-red-600 text-xs">{product.smemberDiscount}</span>
            </div>

            {/* Ghi chú */}
            <div className="mt-2 text-[11px] sm:text-xs text-gray-700 bg-gray-100 p-2 rounded-lg line-clamp-2">
              {product.note}
            </div>

            {/* Rating */}
            <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex text-yellow-500">{renderStars(product.rating)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPhone;
