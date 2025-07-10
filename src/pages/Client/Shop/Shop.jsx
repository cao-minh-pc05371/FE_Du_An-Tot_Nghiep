import BrandList from "./BrandList/BrandList";
import FilterTabs from "./FilterTabs/FilterTabs";
import PhoneList from "./ProductList/ProductList";
import BannerSlider from "../../../components/BannerSlider/BannerSlider";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import banner1 from "../../../assets/16e-cate.webp";
import banner2 from "../../../assets/16e-cate.webp";


const Phone = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 pt-4">

      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <Link to="/" className="flex items-center hover:text-red-500">
          <HomeIcon className="w-4 h-4 mr-1" />
          Trang chủ
        </Link>
        <span className="mx-2">/</span>
        <span className="text-red-600 font-medium">Điện thoại</span>
      </div>


      {/* Banner */}
      <BannerSlider />

      <h1 className="text-sm sm:text-xl font-bold text-gray-800 mb-4">Điện thoại</h1>

      {/* Danh sách thương hiệu */}
      <BrandList />

      {/* Bộ lọc */}
      <h1 className="text-sm sm:text-xl font-bold text-gray-800 mt-4 mb-4">Chọn theo tiêu chí</h1>
      <FilterTabs />

      {/* Phần sản phẩm hiển thị sẽ thêm sau */}
      <PhoneList />
    </div>
  );
};

export default Phone;
