import Watch from "../../../../assets/SmartWatch/smart_band_1__1.webp";

const SmartWatch = () => {
  const watchBrands = [
    "Apple Watch",
    "Samsung",
    "Garmin",
    "Xiaomi",
    "Huawei",
    "Realme",
    "Oppo",
    "Xem tất cả",
  ];

  const watchProducts = [
    {
      id: 1,
      name: "Apple Watch Series 9 GPS 41mm viền nhôm dây cao su",
      image: Watch,
      discount: "6%",
      price: "9.490.000đ",
      originalPrice: "10.090.000đ",
      smemberDiscount: "250.000đ",
      note: "Trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.",
      rating: 5,
    },
    {
      id: 2,
      name: "Samsung Galaxy Watch6 Classic LTE 43mm",
      image: Watch,
      discount: "10%",
      price: "7.990.000đ",
      originalPrice: "8.890.000đ",
      smemberDiscount: "200.000đ",
      note: "Tặng kèm dây đeo chính hãng, trả góp 0%.",
      rating: 4,
    },
    {
      id: 3,
      name: "Garmin Forerunner 55 GPS – Đồng hồ thể thao cao cấp",
      image: Watch,
      discount: "8%",
      price: "4.690.000đ",
      originalPrice: "5.090.000đ",
      smemberDiscount: "150.000đ",
      note: "Bảo hành chính hãng 12 tháng, miễn phí giao hàng.",
      rating: 4,
    },
  ];

  const renderStars = (count) => {
    return "⭐️".repeat(count);
  };

  return (
    <div className="p-4">
      {/* Tiêu đề + Thương hiệu */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-gray-800">ĐỒNG HỒ THÔNG MINH</h1>

        <div className="flex flex-wrap gap-3">
          {watchBrands.map((brand, index) => (
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
        {watchProducts.map((product) => (
          <div
            key={product.id}
            className="w-60 rounded-xl border shadow-md p-4 relative"
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
                {product.originalPrice}
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
              {product.note}
            </div>

            <div className="mt-3 flex items-center justify-between text-sm">
              <div className="flex text-yellow-500 text-sm">
                {renderStars(product.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartWatch;
