import BrandList from "./BrandList/BrandList";
import FilterTabs from "./FilterTabs/FilterTabs";
import PhoneList from "./ProductList/ProductList";

import banner1 from "../../../assets/16e-cate.webp";
import banner2 from "../../../assets/16e-cate.webp";

const Phone = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 pt-2">

      {/* Banner */}
      <div className="flex justify-center mb-4">
        <div className="grid grid-cols-2 gap-16">
          <img src={banner1} alt="banner" className="rounded-xl" />
          <img src={banner2} alt="banner" className="rounded-xl" />
        </div>
      </div>

      {/* Danh sách thương hiệu */}
      <BrandList />

      {/* Bộ lọc */}
      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Chọn theo tiêu chí</h2>
      <FilterTabs />

      {/* Phần sản phẩm hiển thị sẽ thêm sau */}
      <PhoneList />
    </div>
  );
};

export default Phone;
