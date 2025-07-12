import React, { useEffect, useState } from "react";
import Ip16prm from "../../../../assets/SmartPhone/iphone-16-pro-max.webp";
import Ip16prmtrang from "../../../../assets/SmartPhone/iphone-16-pro-titan-trang.webp";
import Ip16prmden from "../../../../assets/SmartPhone/iphone-16-pro-titan-den.webp";
import Ip16prmtunhien from "../../../../assets/SmartPhone/iphone-16-pro-titan-tu-nhien.webp";
import { ChevronsUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
const brands = [
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
    oldPrice: "34.990.000đ",
    smemberDiscount: "305.000đ",
    info: "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.",
    rating: 5,
  },
  {
    id: 2,
    name: "iPhone 16 Pro Max 512GB Titan Đen | Chính hãng VN/A",
    image: Ip16prmden,
    discount: "10%",
    price: "36.990.000đ",
    oldPrice: "40.990.000đ",
    smemberDiscount: "400.000đ",
    info: "Tặng phiếu mua hàng trị giá 500.000đ.",
    rating: 5,
  },
  {
    id: 3,
    name: "iPhone 16 Pro Max 1TB Titan Blue | Chính hãng VN/A",
    image: Ip16prmtrang,
    discount: "8%",
    price: "43.990.000đ",
    oldPrice: "47.990.000đ",
    smemberDiscount: "500.000đ",
    info: "Giảm thêm 1 triệu khi thanh toán qua VIB.",
    rating: 4,
  },
  {
    id: 4,
    name: "iPhone 16 Pro 1TB Titan Tự nhiên | Chính hãng VN/A",
    image: Ip16prmtunhien,
    discount: "12%",
    price: "33.490.000đ",
    oldPrice: "37.990.000đ",
    smemberDiscount: "350.000đ",
    info: "Tặng eSim Viettel 8GB/ngày kèm gói TV360 miễn phí 1 tháng.",
    rating: 4,
  },
];

const FeaturedPhone = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = useNavigate();
  return (
    <div className="p-4">
      {/* Tiêu đề + Thương hiệu */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-gray-800">ĐIỆN THOẠI NỔI BẬT</h1>
        <div className="flex flex-wrap gap-3">
          {brands.map((brand, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-red-100 transition"
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="w-60  rounded-xl border shadow-md p-4 relative"
          >
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
              Giảm {product.discount}
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mt-6"
            />
            <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-5">
              {product.name}
            </h3>
            <div className="mt-1">
              <span className="text-lg font-bold text-red-600">
                {product.price}
              </span>{" "}
              <span className="line-through text-gray-500 text-sm">
                {product.oldPrice}
              </span>
            </div>
            <div className="text-sm font-medium mt-1">
              <span className="text-gray-600 text-xs">
                Smember giảm thêm đến{" "}
              </span>
              <span className="text-red-600 text-xs">
                {product.smemberDiscount}
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-700 bg-gray-100 p-2 rounded-lg">
              {product.info}
            </div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <div className="flex text-yellow-500 text-sm">
                {"⭐️".repeat(product.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nút "Lên đầu" */}
      {showButton && (
  {/* Tiêu đề + Thương hiệu */}
  <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
      ĐIỆN THOẠI NỔI BẬT
    </h1>
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-start sm:justify-end">
      {brands.map((brand, index) => (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-900 text-white font-semibold shadow-md hover:bg-neutral-800 transition-all"
          key={index}
          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-700 hover:bg-red-100 transition whitespace-nowrap"
        >
          Lên đầu <ChevronsUp size={18} />
          {brand}
        </button>
      )}
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
        <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
          Giảm {product.discount}
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-36 sm:h-48 object-contain mt-6 transition-transform duration-300 hover:scale-105"
        />
        <h3 className="mt-2 text-xs sm:text-sm font-semibold text-gray-900 leading-5 line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-1">
          <span className="text-base sm:text-lg font-bold text-red-600">
            {product.price}
          </span>{" "}
          <span className="line-through text-gray-500 text-xs sm:text-sm">
            {product.oldPrice}
          </span>
        </div>
        <div className="text-xs sm:text-sm font-medium mt-1">
          <span className="text-gray-600 text-xs">Smember giảm thêm đến </span>
          <span className="text-red-600 text-xs">
            {product.smemberDiscount}
          </span>
        </div>
        <div className="mt-2 text-[11px] sm:text-xs text-gray-700 bg-gray-100 p-2 rounded-lg line-clamp-2">
          {product.info}
        </div>
        <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex text-yellow-500">
            {"⭐️".repeat(product.rating)}
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Nút "Lên đầu" */}
  {showButton && (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-900 text-white font-semibold shadow-md hover:bg-neutral-800 transition-all"
    >
      Lên đầu <ChevronsUp size={18} />
    </button>
  )}
</div>

  );
};

export default FeaturedPhone;
