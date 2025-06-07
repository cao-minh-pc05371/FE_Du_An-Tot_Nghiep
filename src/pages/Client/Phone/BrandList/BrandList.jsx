import apple from "../../../../assets/y-nghia-logo-apple-2.jpg";
import samsung from "../../../../assets/frame_60.webp";
import xiaomi from "../../../../assets/frame_61.webp";
import oppo from "../../../../assets/frame_62.webp";
import realme from "../../../../assets/frame_63.webp";
import nothing from "../../../../assets/nothing-phone.webp";
import infinix from "../../../../assets/infinixlogo.webp";
import vivo from "../../../../assets/t_i_xu_ng_67_.webp";
import tecno from "../../../../assets/frame_69_1_.webp";
import sony from "../../../../assets/brand-icon-sony_2.webp";
import zte from "../../../../assets/logo-itel-11.webp";
import nubia from "../../../../assets/nubia_1.webp";
import masstel from "../../../../assets/masstel-mobile-logo022.webp";
import nokia from "../../../../assets/frame_37_1.webp";
import oneplus from "../../../../assets/frame_65.webp";
import tcl from "../../../../assets/tivi-logo-cate.webp";
import inoi from "../../../../assets/iinoi-mobile-logo022.webp";
import benco from "../../../../assets/logo-benco-icon-cate-menu.webp";
import asus from "../../../../assets/frame_67.webp";

const brands = [
  { name: "Apple", logo: apple },
  { name: "Samsung", logo: samsung },
  { name: "Xiaomi", logo: xiaomi },
  { name: "Oppo", logo: oppo },
  { name: "Realme", logo: realme },
  { name: "Nothing", logo: nothing },
  { name: "Infinix", logo: infinix },
  { name: "Vivo", logo: vivo },
  { name: "Tecno", logo: tecno },
  { name: "Sony", logo: sony },
  { name: "ZTE", logo: zte },
  { name: "Nubia", logo: nubia },
  { name: "Masstel", logo: masstel },
  { name: "Nokia", logo: nokia },
  { name: "OnePlus", logo: oneplus },
  { name: "TCL", logo: tcl },
  { name: "Inoi", logo: inoi },
  { name: "Benco", logo: benco },
  { name: "Asus", logo: asus },
];

const BrandList = () => {
  return (
    <>
      <div className="flex flex-wrap justify-start gap-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="border border-gray-200 bg-white rounded-lg overflow-hidden hover:shadow cursor-pointer transition w-[100px]"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-[150px] h-[55px] object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BrandList;
