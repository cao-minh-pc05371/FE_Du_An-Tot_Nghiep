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

  const laptopProducts = [
    {
      id: 1,
      name: "Apple MacBook Air M2 2024 8CPU 8GPU 16GB 256GB | Chính hãng Apple Việt Nam",
      image: MacbookM2,
      discount: "4%",
      price: "20.990.000đ",
      originalPrice: "24.990.000đ",
      smemberDiscount: "305.000đ",
      note: "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.",
      rating: 5,
    },
    {
      id: 2,
      name: "ASUS VivoBook 14 OLED R5 16GB 512GB | Chính hãng ASUS Việt Nam",
      image: MacbookM2,
      discount: "5%",
      price: "16.490.000đ",
      originalPrice: "17.490.000đ",
      smemberDiscount: "200.000đ",
      note: "Hỗ trợ nâng RAM, trả góp 0% qua thẻ tín dụng.",
      rating: 4,
    },
    {
      id: 3,
      name: "Dell Inspiron 15 3511 i5 1135G7 8GB 512GB | Chính hãng Dell",
      image: MacbookM2,
      discount: "3%",
      price: "14.290.000đ",
      originalPrice: "14.790.000đ",
      smemberDiscount: "150.000đ",
      note: "Miễn phí vận chuyển toàn quốc, bảo hành chính hãng 12 tháng.",
      rating: 4,
    },
    {
<<<<<<< HEAD
      id: 4,
      name: "Dell Vostro 3510 i5 1135G7 8GB 512GB | Chính hãng Dell",
=======
      id: 3,
      id: 4,
      name: "Dell Inspiron 15 3511 i5 1135G7 8GB 512GB | Chính hãng Dell",
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
      image: MacbookM2,
      discount: "3%",
      price: "14.290.000đ",
      originalPrice: "14.790.000đ",
      smemberDiscount: "150.000đ",
      note: "Miễn phí vận chuyển toàn quốc, bảo hành chính hãng 12 tháng.",
      rating: 4,
    },
<<<<<<< HEAD
=======
  {
      id: 3,
      id: 5,
      name: "Dell Inspiron 15 3511 i5 1135G7 8GB 512GB | Chính hãng Dell",
      image: MacbookM2,
      discount: "3%",
      price: "14.290.000đ",
      originalPrice: "14.790.000đ",
      smemberDiscount: "150.000đ",
      note: "Miễn phí vận chuyển toàn quốc, bảo hành chính hãng 12 tháng.",
      rating: 4,
    },
  
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
  ];

  const renderStars = (count) => "⭐️".repeat(count);

  return (
    <div className="p-4">
      {/* Tiêu đề + Thương hiệu */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-gray-800">LAPTOP</h1>
<<<<<<< HEAD
        <div className="flex overflow-x-auto gap-2 sm:gap-3 px-1">
=======
  {/* Tiêu đề + Thương hiệu */}
  <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800 whitespace-nowrap">
      LAPTOP
    </h1>

        <div className="flex flex-wrap gap-3">
>>>>>>> 9a741f54eae2281fb30e4eefa77fe463e201b931
          {laptopBrands.map((brand, index) => (
            <button
              key={index}
              className="whitespace-nowrap px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-red-100 transition"
            >
              {brand}
            </button>
          ))}
        </div>
      </div>
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-start sm:justify-end">
      {laptopBrands.map((brand, index) => (
        <button
          key={index}
          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-700 hover:bg-red-100 transition whitespace-nowrap"
        >
          {brand}
        </button>
      ))}
    </div>
  </div>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {laptopProducts.map((product) => (
          
          <div
            key={product.id}
            className="w-full rounded-xl border shadow-md p-4 relative cursor-pointer hover:shadow-lg transition"
          >
            {/* Giảm giá */}
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
              Giảm {product.discount}
            </div>
  {/* Danh sách sản phẩm */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    {laptopProducts.map((product) => (
      <div
        key={product.id}
        className="w-full rounded-xl border shadow-md p-4 relative cursor-pointer hover:shadow-lg transition"
      >
        {/* Giảm giá góc trên trái */}
        <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
          Giảm {product.discount}
        </div>

            {/* Hình ảnh */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 sm:h-48 object-contain mt-6 transition-transform duration-300 hover:scale-105"
            />
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
        {/* Giá và giá gạch */}
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
        {/* Smember giảm thêm */}
        <div className="text-xs sm:text-sm font-medium mt-1">
          <span className="text-gray-600 text-xs">Smember giảm thêm đến </span>
          <span className="text-red-600 text-xs">{product.smemberDiscount}</span>
        </div>

            {/* Ghi chú */}
            <div className="mt-2 text-[11px] sm:text-xs text-gray-700 bg-gray-100 p-2 rounded-lg line-clamp-2">
              {product.note}
            </div>
        {/* Ghi chú */}
        <div className="mt-2 text-[11px] sm:text-xs text-gray-700 bg-gray-100 p-2 rounded-lg line-clamp-2">
          {product.note}
        </div>

            {/* Rating */}
            <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex text-yellow-500">{renderStars(product.rating)}</div>
            </div>
        {/* Rating */}
        <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex text-yellow-500">
            {renderStars(product.rating)}
          </div>
        ))}
        </div>
      </div>
    </div>
    ))}
  </div>
</div>

  );
};

export default Laptop;
