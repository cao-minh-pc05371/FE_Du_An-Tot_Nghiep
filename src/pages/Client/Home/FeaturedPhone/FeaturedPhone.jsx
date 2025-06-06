

import React, { useEffect, useState } from "react";
import Ip16prm from "../../../../assets/SmartPhone/iphone-16-pro-max.webp";
import { ChevronsUp } from "lucide-react";

// Danh sách thương hiệu
const brands = ["Apple", "Samsung", "Xiaomi", "OPPO", "vivo", "ASUS", "Nokia", "Nothing", "Xem tất cả"];

// Danh sách sản phẩm nổi bật
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
    name: "iPhone 16 Pro Max 512GB | Chính hãng VN/A",
    image: Ip16prm,
    discount: "10%",
    price: "36.990.000đ",
    oldPrice: "40.990.000đ",
    smemberDiscount: "400.000đ",
    info: "Tặng phiếu mua hàng trị giá 500.000đ.",
    rating: 5,
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra 256GB | Chính hãng",
    image: Ip16prm,
    discount: "12%",
    price: "26.390.000đ",
    oldPrice: "29.990.000đ",
    smemberDiscount: "260.000đ",
    info: "Tặng gói bảo hành mở rộng 12 tháng.",
    rating: 4,
  },
  {
    id: 4,
    name: "Xiaomi 14 Ultra 512GB | Chính hãng",
    image: Ip16prm,
    discount: "15%",
    price: "23.990.000đ",
    oldPrice: "27.990.000đ",
    smemberDiscount: "320.000đ",
    info: "Hỗ trợ đổi mới trong 15 ngày đầu.",
    rating: 4,
  },
  {
    id: 5,
    name: "OPPO Find X7 Pro 512GB | Chính hãng",
    image: Ip16prm,
    discount: "8%",
    price: "22.490.000đ",
    oldPrice: "24.490.000đ",
    smemberDiscount: "240.000đ",
    info: "Giảm thêm 500.000đ khi thanh toán qua ví điện tử.",
    rating: 4,
  },
  {
    id: 6,
    name: "vivo X100 Pro 512GB | Chính hãng",
    image: Ip16prm,
    discount: "14%",
    price: "19.990.000đ",
    oldPrice: "23.290.000đ",
    smemberDiscount: "200.000đ",
    info: "Tặng tai nghe không dây trị giá 990.000đ.",
    rating: 4,
  },
  {
    id: 7,
    name: "vivo X100 Pro 512GB | Chính hãng",
    image: Ip16prm,
    discount: "14%",
    price: "19.990.000đ",
    oldPrice: "23.290.000đ",
    smemberDiscount: "200.000đ",
    info: "Tặng tai nghe không dây trị giá 990.000đ.",
    rating: 4,
  },
  {
    id: 8,
    name: "vivo X100 Pro 512GB | Chính hãng",
    image: Ip16prm,
    discount: "14%",
    price: "19.990.000đ",
    oldPrice: "23.290.000đ",
    smemberDiscount: "200.000đ",
    info: "Tặng tai nghe không dây trị giá 990.000đ.",
    rating: 4,
  },
  {
    id: 9,
    name: "vivo X100 Pro 512GB | Chính hãng",
    image: Ip16prm,
    discount: "14%",
    price: "19.990.000đ",
    oldPrice: "23.290.000đ",
    smemberDiscount: "200.000đ",
    info: "Tặng tai nghe không dây trị giá 990.000đ.",
    rating: 4,
  },
  {
    id: 10,
    name: "vivo X100 Pro 512GB | Chính hãng",
    image: Ip16prm,
    discount: "14%",
    price: "19.990.000đ",
    oldPrice: "23.290.000đ",
    smemberDiscount: "200.000đ",
    info: "Tặng tai nghe không dây trị giá 990.000đ.",
    rating: 4,
  },
  {
    id: 11,
    name: "vivo X100 Pro 512GB | Chính hãng",
    image: Ip16prm,
    discount: "14%",
    price: "19.990.000đ",
    oldPrice: "23.290.000đ",
    smemberDiscount: "200.000đ",
    info: "Tặng tai nghe không dây trị giá 990.000đ.",
    rating: 4,
  },


];

const FeaturedPhone = () => {
  const [showButton, setShowButton] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Scroll to top
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

  // Tính toán phân trang
  const totalPages = Math.ceil(featuredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = featuredProducts.slice(startIndex, endIndex);

  // Điều khiển phân trang
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handlePageClick = (page) => setCurrentPage(page);


  return (
    <div className="p-2">
      {/* Tiêu đề + Thương hiệu */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-gray-800">ĐIỆN THOẠI NỔI BẬT</h1>
        <div className="flex flex-wrap gap-2">
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
        {currentProducts.map((product) => (
          <div key={product.id} className="w-60 h-[450px] rounded-xl border shadow-md p-4 relative">
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
              Giảm {product.discount}
            </div>
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain mt-6" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-5">{product.name}</h3>
            <div className="mt-1">
              <span className="text-lg font-bold text-red-600">{product.price}</span>{" "}
              <span className="line-through text-gray-500 text-sm">{product.oldPrice}</span>
            </div>
            <div className="text-sm font-medium mt-1">
              <span className="text-gray-600 text-xs">Smember giảm thêm đến </span>
              <span className="text-red-600 text-xs">{product.smemberDiscount}</span>
            </div>
            <div className="mt-2 text-xs text-gray-700 bg-gray-100 p-2 rounded-lg">{product.info}</div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <div className="flex text-yellow-500 text-sm">{"⭐️".repeat(product.rating)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Phân trang */}
      <div className="mt-6 flex justify-center gap-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Trước
        </button>

        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => handlePageClick(idx + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === idx + 1 ? "bg-red-500 text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Tiếp
        </button>
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

