import { useState } from "react";
import SortBar from "../../../../components/SortBar/SortBar";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import image from "../../../../assets/SmartPhone/iphone-16-pro-max.webp";

// Tạo danh sách 60 sản phẩm mẫu để thử phân trang
const initialProducts = Array.from({ length: 60 }, (_, i) => ({
  name: `Điện thoại mẫu ${i + 1}`,
  discount: 10 + (i % 5) * 3,
  installment: i % 2 === 0,
  screen: "6.7 inches",
  ram: "12 GB",
  rom: "256 GB",
  oldPrice: 30000000,
  price: 27000000 - i * 100000,
  sMemberDiscount: 200000,
  image: image,
  rating: 4 + (i % 2), // ⭐ thêm rating mẫu (4 hoặc 5 sao)
}));

const PRODUCTS_PER_PAGE = 20;

const PhoneList = () => {
  const [sortType, setSortType] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const getSortedProducts = () => {
    const sorted = [...initialProducts];
    switch (sortType) {
      case "price-desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "price-asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "discount":
        return sorted.sort((a, b) => b.discount - a.discount);
      default:
        return sorted;
    }
  };

  const sortedProducts = getSortedProducts();
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setCurrentPage(newPage);
  };

  return (
    <div className="w-full mx-auto px-2 pt-4 space-y-4 text-sm sm:text-base">
      {/* Sort bar */}
      <SortBar sortType={sortType} setSortType={setSortType} />

      {/* Grid sản phẩm */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {paginatedProducts.map((item, idx) => (
          <ProductCard key={idx} data={item} />
        ))}
      </div>

      {/* Thanh phân trang */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50 text-sm sm:text-base"
        >
          ← Trước
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 border rounded text-sm sm:text-base ${currentPage === i + 1 ? "bg-red-500 text-white" : ""
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50 text-sm sm:text-base"
        >
          Sau →
        </button>
      </div>
    </div>
  );
};

export default PhoneList;
