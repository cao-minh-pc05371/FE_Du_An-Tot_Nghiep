import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Ip16prm from "../../../assets/SmartPhone/iphone-16-pro-max.webp";
import Ip16prmtrang from "../../../assets/SmartPhone/iphone-16-pro-titan-trang.webp";
import Ip16prmden from "../../../assets/SmartPhone/iphone-16-pro-titan-den.webp";
import Ip16prmtunhien from "../../../assets/SmartPhone/iphone-16-pro-titan-tu-nhien.webp";

import colorYelow from "../../../assets/SmartPhone/iphone-16-pro-max.webp";
import colorBlack from "../../../assets/SmartPhone/iphone-16-pro-titan-den.webp";
import colorWhite from "../../../assets/SmartPhone/iphone-16-pro-titan-trang.webp";
import colorGrey from "../../../assets/SmartPhone/iphone-16-pro-titan-tu-nhien.webp";

import banner1 from "../../../assets/iphone-16-pro-max-1-638639190782955686.jpg";
import banner2 from "../../../assets/iphone-16-pro-max-2-638639190801601764.jpg";
const colors = [
  {
    name: "Titan sa mạc",

    image: colorYelow,
  },
  {
    name: "Titan Đen",

    image: colorBlack,
  },
  {
    name: "Titan Trắng",

    image: colorWhite,
  },
  {
    name: "Titan tự nhiên",

    image: colorGrey,
  },
];
// Dữ liệu sản phẩm mẫu
const featuredProducts = [
  {
    id: 1,
    name: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    images: [Ip16prm, colorYelow, colorBlack, colorWhite, colorGrey],
    image: Ip16prm,
    discount: "13%",
    note: "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.",
    price: "30.490.000đ",
    oldPrice: "34.990.000đ",
    smemberDiscount: "305.000đ",
    info: "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.",
    rating: 5,
    specs: {
      screenSize: "6.1 inches",
      screenTech: "Super Retina XDR OLED",
      rearCamera: "Chính 48 MP & Phụ 12 MP",
      frontCamera: "12MP, f/1.9",
      chipset: "Apple A16 Bionic 6 nhân",
      nfc: "Có",
      ram: "6 GB",
      storage: "256 GB",
      battery: "3349 mAh",
      sim: "2 SIM (nano-SIM và eSIM)",
      os: "iOS 17",
      resolution: "2556 x 1179 pixels",
      screenFeatures: [
        "Dynamic Island",
        "HDR display",
        "True Tone",
        "Wide color (P3)",
        "Haptic Touch",
        "Lớp phủ oleophobic chống dấu vân tay",
        "Độ sáng tối đa: 2000 nits",
        "Mặt kính cường lực Ceramic Shield",
        "Tần số quét 60 Hz",
      ],
      cpuType: "CPU 6 lõi với 2 lõi hiệu năng và 4 lõi tiết kiệm điện",
    },
  },
  {
    id: 2,
    name: "iPhone 16 Pro Max 512GB Titan Đen | Chính hãng VN/A",
    images: [Ip16prmden, colorYelow, colorBlack, colorWhite, colorGrey],
    image: Ip16prmden,
    discount: "13%",
    note: "Miễn phí vận chuyển toàn quốc, bảo hành chính hãng 12 tháng.",
    price: "30.490.000đ",
    oldPrice: "34.990.000đ",
    smemberDiscount: "305.000đ",
    info: "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.",
    rating: 5,
    specs: {
      screenSize: "6.1 inches",
      screenTech: "Super Retina XDR OLED",
      rearCamera: "Chính 48 MP & Phụ 12 MP",
      frontCamera: "12MP, f/1.9",
      chipset: "Apple A16 Bionic 6 nhân",
      nfc: "Có",
      ram: "8 GB",
      storage: "512 GB",
      battery: "3349 mAh",
      sim: "2 SIM (nano-SIM và eSIM)",
      os: "iOS 17",
      resolution: "2556 x 1179 pixels",
      screenFeatures: [
        "Dynamic Island",
        "HDR display",
        "True Tone",
        "Wide color (P3)",
        "Haptic Touch",
        "Lớp phủ oleophobic chống dấu vân tay",
        "Độ sáng tối đa: 2000 nits",
        "Mặt kính cường lực Ceramic Shield",
        "Tần số quét 60 Hz",
      ],
      cpuType: "CPU 6 lõi với 2 lõi hiệu năng và 4 lõi tiết kiệm điện",
    },
  },
  {
    id: 3,
    name: "iPhone 16 Pro Max 1TB Titan Blue | Chính hãng VN/A",
    images: [Ip16prmtrang, colorYelow, colorBlack, colorWhite, colorGrey],
    image: Ip16prmtrang,
    discount: "13%",
    note: "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.",
    price: "43.990.000đ",
    oldPrice: "47.990.000đ",
    smemberDiscount: "305.000đ",
    info: "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.",
    rating: 5,
    specs: {
      screenSize: "6.1 inches",
      screenTech: "Super Retina XDR OLED",
      rearCamera: "Chính 48 MP & Phụ 12 MP",
      frontCamera: "12MP, f/1.9",
      chipset: "Apple A16 Bionic 6 nhân",
      nfc: "Có",
      ram: "6 GB",
      storage: "1TB",
      battery: "3349 mAh",
      sim: "2 SIM (nano-SIM và eSIM)",
      os: "iOS 17",
      resolution: "2556 x 1179 pixels",
      screenFeatures: [
        "Dynamic Island",
        "HDR display",
        "True Tone",
        "Wide color (P3)",
        "Haptic Touch",
        "Lớp phủ oleophobic chống dấu vân tay",
        "Độ sáng tối đa: 2000 nits",
        "Mặt kính cường lực Ceramic Shield",
        "Tần số quét 60 Hz",
      ],
      cpuType: "CPU 6 lõi với 2 lõi hiệu năng và 4 lõi tiết kiệm điện",
    },
  },
  {
    id: 4,
    name: "iPhone 16 Pro Max 1TB Titan Tự nhiên | Chính hãng VN/A",
    images: [Ip16prmtunhien, colorYelow, colorBlack, colorWhite, colorGrey],
    image: Ip16prmtunhien,
    discount: "13%",
    note: "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.",
    price: "43.990.000đ",
    oldPrice: "47.990.000đ",
    smemberDiscount: "305.000đ",
    info: "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.",
    rating: 5,
    specs: {
      screenSize: "6.1 inches",
      screenTech: "Super Retina XDR OLED",
      rearCamera: "Chính 48 MP & Phụ 12 MP",
      frontCamera: "12MP, f/1.9",
      chipset: "Apple A16 Bionic 6 nhân",
      nfc: "Có",
      ram: "6 GB",
      storage: "1TB",
      battery: "3349 mAh",
      sim: "2 SIM (nano-SIM và eSIM)",
      os: "iOS 17",
      resolution: "2556 x 1179 pixels",
      screenFeatures: [
        "Dynamic Island",
        "HDR display",
        "True Tone",
        "Wide color (P3)",
        "Haptic Touch",
        "Lớp phủ oleophobic chống dấu vân tay",
        "Độ sáng tối đa: 2000 nits",
        "Mặt kính cường lực Ceramic Shield",
        "Tần số quét 60 Hz",
      ],
      cpuType: "CPU 6 lõi với 2 lõi hiệu năng và 4 lõi tiết kiệm điện",
    },
  },
];

const renderStars = (count) => {
  return "⭐️".repeat(count);
};
// Component hàng thông số
const SpecRow = ({ label, value }) => (
  <tr className="border-t">
    <td className="p-3 font-medium bg-gray-50 w-1/3">{label}</td>
    <td className="p-3">{value}</td>
  </tr>
);

const ProductDetail = () => {
  const [showMore, setShowMore] = useState(false);
  const handleColorChange = (color) => {
    setSelectedColor(color.name);
    setSelectedImage(color.image);
  };
  const { id } = useParams();
  const product = featuredProducts.find((p) => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image
  );

  const versionOptions = ["256GB", "512GB", "1TB"];
  const [selectedVersion, setSelectedVersion] = useState(
    () =>
      versionOptions.find((opt) => product?.name.includes(opt)) ||
      versionOptions[0]
  );

  const additionalImages = product?.images || [];

  if (!product) {
    return (
      <div className="p-4 text-red-600 font-semibold">
        Không tìm thấy sản phẩm.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 flex flex-wrap items-center space-x-1">
        <Link to="/" className="text-gray-600 hover:underline">
          Trang chủ
        </Link>
        <span className="mx-1 text-gray-400">›</span>
        <Link to="/dien-thoai" className="text-gray-600 hover:underline">
          Điện thoại
        </Link>
        <span className="mx-1 text-gray-400">›</span>
        <Link to="/apple" className="text-gray-600 hover:underline">
          Apple
        </Link>
        <span className="mx-1 text-gray-400">›</span>
        <Link to="/iphone-16-series" className="text-gray-600 hover:underline">
          iPhone 16 Series
        </Link>
        <span className="mx-1 text-gray-400">›</span>
        <span className="font-medium text-gray-900">{product.name}</span>
      </nav>

      {/* Tên sản phẩm */}
      <h1 className="text-2xl max-w-7xl font-bold">{product.name}</h1>

      {/* Chi tiết sản phẩm */}
      <div className="flex flex-wrap gap-6">
        <div className="w-full md:w-1/2 space-y-6">
          {/* Hình ảnh sản phẩm */}
          <div className="rounded-xl border p-2 bg-white shadow-md">
            <div className="relative w-full pt-[60%] overflow-hidden rounded-lg ">
              <img
                src={selectedImage}
                alt="Ảnh sản phẩm"
                className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Ảnh phụ */}
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {additionalImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 p-1 border rounded-lg ${
                  selectedImage === img ? "border-red-500" : "border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`Ảnh phụ ${idx + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-gray-300 bg-gray-50 p-5 shadow-md space-y-4 ">
            <h3 className="text-base font-semibold text-gray-800">
              SalePhoneX cam kết
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              {/* Cam kết 1 */}
              <div className="flex items-start gap-3">
                <div className="text-blue-500 text-xl">📦</div>
                <div>Sản phẩm mới (Cần thanh toán trước khi mở hộp).</div>
              </div>

              {/* Cam kết 2 */}
              <div className="flex items-start gap-3">
                <div className="text-blue-500 text-xl">📦</div>
                <div>
                  Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cáp, Cây lấy sim
                </div>
              </div>

              {/* Cam kết 3 */}
              <div className="flex items-start gap-3">
                <div className="text-blue-500 text-xl">🔁</div>
                <div>
                  Hư gì đổi nấy <strong>12 tháng</strong> tại 2956 siêu thị toàn
                  quốc (miễn phí tháng đầu){" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Xem chi tiết
                  </a>
                </div>
              </div>

              {/* Cam kết 4 */}
              <div className="flex items-start gap-3">
                <div className="text-blue-500 text-xl">🛡️</div>
                <div>
                  Bảo hành <strong>chính hãng điện thoại 1 năm</strong> tại các
                  trung tâm bảo hành hãng{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Xem địa chỉ bảo hành
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Thông số kỹ thuật */}
          {product.specs && (
            <div>
              <h2 className="text-lg font-semibold mb-3">Thông số kỹ thuật</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg text-sm text-left shadow-md">
                  <tbody>
                    <SpecRow
                      label="Kích thước màn hình"
                      value={product.specs.screenSize}
                    />
                    <SpecRow
                      label="Công nghệ màn hình"
                      value={product.specs.screenTech}
                    />
                    <SpecRow
                      label="Camera sau"
                      value={product.specs.rearCamera}
                    />
                    <SpecRow
                      label="Camera trước"
                      value={product.specs.frontCamera}
                    />
                    <SpecRow label="Chipset" value={product.specs.chipset} />
                    <SpecRow label="Công nghệ NFC" value={product.specs.nfc} />
                    <SpecRow label="Dung lượng RAM" value={product.specs.ram} />
                    <SpecRow
                      label="Bộ nhớ trong"
                      value={product.specs.storage}
                    />
                    <SpecRow label="Pin" value={product.specs.battery} />
                    <SpecRow label="Thẻ SIM" value={product.specs.sim} />
                    <SpecRow label="Hệ điều hành" value={product.specs.os} />
                    <SpecRow
                      label="Độ phân giải màn hình"
                      value={product.specs.resolution}
                    />
                    <tr className="border-t">
                      <td className="p-3 font-medium bg-gray-50 w-1/3 align-top">
                        Tính năng màn hình
                      </td>
                      <td className="p-3">
                        <ul className="list-disc pl-5 space-y-1">
                          {product.specs.screenFeatures.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                    <SpecRow label="Loại CPU" value={product.specs.cpuType} />
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Cột phải: thông tin giá + phiên bản */}
        <div className="w-full md:flex-1 space-y-4">
          {/* Giá & giảm giá gọn gàng với giá cũ nằm ngang */}
          <div className="bg-white p-3 rounded-lg border border-red-300 shadow-sm space-y-1 w-[280px]">
            {/* Tiêu đề */}
            <h3 className="text-base font-semibold text-gray-700 mb-1">
              Giá sản phẩm
            </h3>

            {/* Hàng chứa giá chính, giảm giá và giá cũ */}
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-2xl font-bold text-red-600">
                {product.price}
              </span>

              <span className="text-sm text-gray-400 line-through">
                {product.oldPrice}
              </span>
            </div>
          </div>

          {/* Chọn phiên bản */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg mb-2">Phiên Bản</h3>
            <div className="flex gap-3 flex-wrap">
              {versionOptions.map((option, index) => {
                const isSelected = selectedVersion === option;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedVersion(option)}
                    className={`relative px-5 py-2 rounded-lg border text-sm font-semibold transition-all duration-200
                      ${
                        isSelected
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 text-black hover:border-red-500"
                      }`}
                  >
                    {option}
                    {isSelected && (
                      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full translate-x-1/2 -translate-y-1/2">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            {/* Màu sắc */}
            <h3 className="font-semibold text-lg mb-2">Màu sắc</h3>
            <div className="flex gap-3 mb-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleColorChange(color)}
                  className={`flex items-center border rounded-md px-3 py-2 w-32 relative ${
                    selectedColor === color.name
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 text-black hover:border-red-500"
                  }`}
                >
                  <img
                    src={color.image}
                    alt={color.name}
                    className="w-11 h-11 rounded mr-2"
                  />
                  <div className="text-sm font-medium">{color.name}</div>
                  {selectedColor === color.name && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full translate-x-1/2 -translate-y-1/2">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Khuyến mãi hấp dẫn */}
          <div className="rounded-xl border border-blue-300 bg-blue-50 p-5 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-blue-800 font-semibold text-base">
              <span className="text-blue-500 text-xl">🎁</span>
              Khuyến mãi hấp dẫn
            </div>
            <ul className="space-y-3 text-sm text-gray-800">
              {[
                {
                  label:
                    "Đặc quyền trợ giá lên đến 4 triệu khi thu cũ lên đời iPhone",
                  linkText: "Xem chi tiết",
                },
                {
                  label:
                    "Trả góp 0% lãi suất, tối đa 12 tháng, trả trước từ 10% qua CTTC hoặc 0đ qua thẻ tín dụng",
                  linkText: "Xem chi tiết",
                },
                {
                  label:
                    "Tặng Sim / Esim Viettel 5G có 8GB data/ngày kèm TV360 4K & 30GB Mybox – miễn phí 1 tháng sử dụng (Chỉ áp dụng tại cửa hàng)",
                  linkText: "Xem chi tiết",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-xs flex items-center justify-center leading-none text-center">
                    {index + 1}
                  </div>
                  <div>
                    {item.label}{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {item.linkText}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Nút hành động */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="bg-white text-blue-600 border border-blue-600 rounded-lg px-4 py-2 font-semibold hover:bg-blue-50 transition">
              Trả góp 0%
            </button>
            <button className="flex-1 bg-red-600 text-white rounded-lg px-4 py-2 font-bold hover:bg-red-700 transition">
              MUA NGAY
              <span className="block text-xs font-normal">
                Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng
              </span>
            </button>
            <button className="border border-red-500 text-red-500 rounded-lg px-4 py-2 font-semibold hover:bg-red-50 transition flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h14l-1.35 5.38a2 2 0 01-1.95 1.62H7.5a2 2 0 01-1.98-1.75L5 6H3"
                />
              </svg>
              Thêm vào giỏ
            </button>
          </div>

          {/* xem chi nhanhs co hang ko */}
          <div className="rounded-xl border border-gray-300 bg-gray-50 p-5 shadow-md mt-6">
            {/* Hàng tiêu đề và dropdown nằm ngang đẹp */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="text-blue-800 font-semibold text-base sm:self-center">
                Xem chi nhánh có hàng
              </div>

              <div className="flex gap-3 flex-wrap ml-1">
                <select className="px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Hồ Chí Minh</option>
                  <option>Cần Thơ</option>
                  <option>Hà Nội</option>
                </select>
                <select className="px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Quận/Huyện</option>
                  <option>Quận 1</option>
                  <option>Ninh Kiều</option>
                </select>
              </div>
            </div>

            {/* Số lượng chi nhánh */}
            <div className="text-sm text-gray-600 mt-0">
              Có <strong className="text-blue-600">2</strong> cửa hàng có sản
              phẩm
            </div>

            {/* Danh sách chi nhánh */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                {
                  address: "131A - 133 Cách Mạng Tháng 8 , Ninh Kiều, Cần Thơ",
                  phone: "02871010133",
                },
                {
                  address:
                    "272 đường 30 tháng 4, P. Hưng Lợi, Q. Ninh Kiều, Cần Thơ",
                  phone: "02871009272",
                },
              ].map((branch, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-3 bg-white shadow-sm space-y-1 min-w-[250px]"
                >
                  <div className="text-sm font-medium text-gray-900 leading-snug">
                    {branch.address}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-700">
                    <span className="flex items-center gap-1 text-red-600">
                      📞 {branch.phone}
                    </span>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
                    >
                      📍 <span>Bản đồ</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ưu đãi thanh toán */}
          <div className="rounded-xl border border-blue-300 bg-blue-50 p-5 shadow-md space-y-4">
            {/* Tiêu đề */}
            <div className="flex items-center gap-2 text-blue-800 font-semibold text-base">
              <span className="text-red-500 text-xl">🎁</span>
              Ưu đãi thanh toán
            </div>

            {/* Danh sách ưu đãi */}
            <ul className="space-y-2 text-sm text-gray-800">
              {[
                "Xem chính sách ưu đãi dành cho thành viên Smember",
                <>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/HSBC_logo_%282018%29.svg/120px-HSBC_logo_%282018%29.svg.png"
                    alt="HSBC"
                    className="inline w-12 h-auto mr-1"
                  />
                  Hoàn tiền đến 2 triệu khi mở thẻ tín dụng HSBC
                </>,
                <>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/vi/3/3c/VietBank_Logo.png"
                    alt="VietBank"
                    className="inline w-14 h-auto mr-1"
                  />
                  Giảm đến 1 triệu khi thanh toán qua thẻ tín dụng Vietbank
                </>,
                <>
                  <img
                    src="https://muadee.vn/assets/images/logo-muadee.svg"
                    alt="Muadee"
                    className="inline w-16 h-auto mr-1"
                  />
                  Giảm đến 1 triệu khi thanh toán qua thẻ Muadee by HDBank
                </>,
                <>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/VIB_Bank_logo.svg/512px-VIB_Bank_logo.svg.png"
                    alt="VIB"
                    className="inline w-10 h-auto mr-1"
                  />
                  Mở thẻ VIB nhận E-Voucher đến 600K
                </>,
                <>
                  <img
                    src="https://seeklogo.com/images/K/kredivo-logo-6D58C70075-seeklogo.com.png"
                    alt="Kredivo"
                    className="inline w-16 h-auto mr-1"
                  />
                  Giảm đến 500.000đ khi thanh toán qua Kredivo
                </>,
                <>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/vi/e/e4/Logo_Sacombank.png"
                    alt="Sacombank"
                    className="inline w-20 h-auto mr-1"
                  />
                  Giảm 200K khi trả góp bằng thẻ Visa Sacombank qua MPOS
                </>,
                <>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
                    alt="MoMo"
                    className="inline w-10 h-auto mr-1"
                  />
                  Giảm đến 200K khi thanh toán qua MOMO
                </>,
                "Liên hệ B2B để được tư vấn giá tốt nhất cho khách hàng doanh nghiệp khi mua số lượng nhiều",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-snug">
                  <span className="text-green-500 text-lg">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-4xl mx-auto px-4 rounded-lg">
            <h1 className="text-lg font-semibold mb-3">Bài viết sản phẩm</h1>

            <div className="relative">
              <img
                src={banner1}
                alt="iPhone 16 Pro Banner"
              />
            </div>


            {showMore && (
                <div className="relative">
                  <img
                    src={banner2}
                    alt="iPhone 16 Pro Banner"
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold">
                  Tổng quan về iPhone 16 Pro Max và iPhone 16 Pro
                </h2>
                <div>
                  <p>
                    iPhone 16 Pro và iPhone 16 Pro Max có nhiều điểm chung nhưng
                    cũng tồn tại một số khác biệt quan trọng. Cả hai đều sử dụng
                    khung viền titan với mặt kính nhám và hỗ trợ kháng nước
                    IP68. Về màu sắc, cả hai phiên bản có bốn lựa chọn: Natural
                    Titanium, White Titanium, Black Titanium và Desert Titanium.
                    Cả hai mẫu đều được trang bị nút Action Button và có nút
                    chức năng Camera Control giúp điều khiển nhanh camera. Màn
                    hình của iPhone 16 Pro Max là Super Retina XDR OLED 6.9
                    inch, lớn hơn so với màn hình 6.3 inch của iPhone 16 Pro.
                    Hai máy đều có độ sáng tối đa 2000 nits và dùng chip A18 Pro
                    cho hiệu năng mạnh mẽ. Thời lượng pin của iPhone 16 Pro Max
                    tốt hơn với 33 giờ xem video, trong khi iPhone 16 Pro là 27
                    giờ. Bộ nhớ của iPhone 16 Pro Max bắt đầu từ 256 GB, trong
                    khi iPhone 16 Pro có thêm tùy chọn 128 GB.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Hệ thống camera chuyên nghiệp, đỉnh cao
                  </h3>
                  <p>
                    iPhone 16 Pro Max với hệ thống ba camera sau mang lại trải
                    nghiệm chụp ảnh chuyên nghiệp. Camera chính 48 MP cùng ống
                    kính tetra prism cho phép zoom quang học 5x, tạo ra hình ảnh
                    sắc nét ngay cả khi phóng to. Zoom kỹ thuật số lên đến 25x
                    giúp chụp chi tiết từ xa mà không giảm chất lượng ảnh.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sản phẩm liên quan */}
        <div className="mt-10">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            SẢN PHẨM LIÊN QUAN
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {featuredProducts
              .filter((p) => p.id !== product.id) // loại bỏ sản phẩm hiện tại
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="w-60 rounded-xl border shadow-md p-4 relative"
                >
                  <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                    Giảm {product.discount}
                  </div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-contain mt-6"
                  />

                  <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-5">
                    {item.name}
                  </h3>
                  <div className="mt-1">
                    <span className="text-lg font-bold text-red-600">
                      {item.price}
                    </span>{" "}
                    <span className="line-through text-gray-500 text-sm">
                      {item.oldPrice}
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
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
