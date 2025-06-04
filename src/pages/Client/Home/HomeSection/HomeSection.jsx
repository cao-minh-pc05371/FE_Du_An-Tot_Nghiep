import React, { useState, useEffect } from 'react';
import {
  FaMobileAlt, FaLaptop, FaHeadphones, FaCamera, FaHome, FaPuzzlePiece,
  FaDesktop, FaTv, FaExchangeAlt, FaRedoAlt, FaTags, FaNewspaper
} from 'react-icons/fa';

import banner1 from '../../../../assets/banner.webp';
import banner2 from '../../../../assets/iphone-16-pro-max-sliding-thang-5.webp';
import banner3 from '../../../../assets/s25-home-moi.webp';
import banner4 from '../../../../assets/fit4-home.webp';
import banner5 from '../../../../assets/vivo-v50-lite-5g-thang-6.webp';
import bannerRight1 from '../../../../assets/m55-6990-right-banner.webp';
import bannerRight2 from '../../../../assets/RightBanner-iPadAirM3.webp';
import bannerRight3 from '../../../../assets/s-edu-2-0-right-laptop.webp';

const categories = [
  { icon: <FaMobileAlt />, label: 'Điện thoại, Tablet' },
  { icon: <FaLaptop />, label: 'Laptop' },
  { icon: <FaHeadphones />, label: 'Âm thanh, Mic thu âm' },
  { icon: <FaCamera />, label: 'Đồng hồ, Camera' },
  { icon: <FaHome />, label: 'Đồ gia dụng' },
  { icon: <FaPuzzlePiece />, label: 'Phụ kiện' },
  { icon: <FaDesktop />, label: 'PC, Màn hình, Máy in' },
  { icon: <FaTv />, label: 'Tivi' },
  { icon: <FaExchangeAlt />, label: 'Thu cũ đổi mới' },
  { icon: <FaRedoAlt />, label: 'Hàng cũ' },
  { icon: <FaTags />, label: 'Khuyến mãi' },
  { icon: <FaNewspaper />, label: 'Tin công nghệ' },
];

const bannerTabs = [
  { title: 'MỪNG KHAI TRƯƠNG', subtitle: 'Ưu đãi cực khủng', image: banner1 },
  { title: 'IPHONE 16 PRO MAX', subtitle: 'Mua ngay', image: banner2 },
  { title: 'GALAXY S25 ULTRA', subtitle: 'Giá tốt chốt ngay', image: banner3 },
  { title: 'HUAWEI WATCH FIT 4', subtitle: 'Giá chỉ 2.79 triệu', image: banner4 },
  { title: 'VIVO V50 LITE', subtitle: 'Giá chỉ 10.69 triệu', image: banner5 },
];

const HomeSection = () => {
  const [activeBanner, setActiveBanner] = useState(0);

  // Auto rotate banner mỗi 5 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % bannerTabs.length);
    }, 5000); // 5 giây

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div className="pb-6">
      <div className="max-w-[1440px] mx-auto px-4 mt-6 flex gap-5 items-start">
        {/* Sidebar */}
        <aside className="w-[220px] bg-white rounded-xl shadow p-4 space-y-3">
          {categories.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-700 hover:text-red-600 cursor-pointer">
              <span className="text-base">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </aside>

        {/* Banner + Tabs */}
        <div className="flex-1 grid grid-cols-3 gap-4 relative">
          <div className="col-span-2 relative">
            <img
              src={bannerTabs[activeBanner].image}
              alt={bannerTabs[activeBanner].title}
              className="w-full h-[403px] object-cover rounded-xl shadow transition-all duration-500"
            />

            {/* Tabs dưới banner */}
            <div className="absolute bottom-0 left-0 w-full bg-white rounded-b-xl px-4 py-2 flex gap-6 text-sm font-medium shadow">
              {bannerTabs.map((tab, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveBanner(idx)}
                  className={`cursor-pointer px-2 pb-1 border-b-2 ${
                    activeBanner === idx
                      ? 'border-red-600 text-red-600 font-semibold'
                      : 'border-transparent hover:text-red-600'
                  }`}
                >
                  <div>{tab.title}</div>
                  <div className="text-xs font-normal">{tab.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Banner phải */}
          <div className="flex flex-col gap-4">
            <img src={bannerRight1} alt="ad1" className="rounded-xl shadow object-cover h-[124px]" />
            <img src={bannerRight2} alt="ad2" className="rounded-xl shadow object-cover h-[124px]" />
            <img src={bannerRight3} alt="ad3" className="rounded-xl shadow object-cover h-[124px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
