import React, { useState, useEffect } from "react";
import {
  FaMobileAlt, FaLaptop, FaHeadphones, FaCamera, FaHome, FaPuzzlePiece,
  FaDesktop, FaTv, FaExchangeAlt, FaRedoAlt, FaTags, FaNewspaper,
  FaChevronLeft, FaChevronRight
} from 'react-icons/fa';

import banner1 from '../../../../assets/banner.png';
import banner2 from '../../../../assets/iphone-16-pro-max-sliding-thang-5.webp';
import banner3 from '../../../../assets/s25-home-moi.webp';
import banner4 from '../../../../assets/fit4-home.webp';
import banner5 from '../../../../assets/vivo-v50-lite-5g-thang-6.webp';
import bannerRight1 from '../../../../assets/m55-6990-right-banner.webp';
import bannerRight2 from '../../../../assets/RightBanner-iPadAirM3.webp';
import bannerRight3 from '../../../../assets/s-edu-2-0-right-laptop.webp';

// Danh mục
const categories = [
  {
    icon: <FaMobileAlt />,
    parts: [
      { text: 'Điện thoại', link: '/dien-thoai' },
      { text: 'Tablet', link: '/tablet' },
    ],
  },
  { icon: <FaLaptop />, parts: [{ text: 'Laptop', link: '/laptop' }] },
  {
    icon: <FaHeadphones />,
    parts: [
      { text: 'Âm thanh', link: '/am-thanh' },
      { text: 'Mic thu âm', link: '/mic-thu-am' },
    ],
  },
  {
    icon: <FaCamera />,
    parts: [
      { text: 'Đồng hồ', link: '/dong-ho' },
      { text: 'Camera', link: '/camera' },
    ],
  },
  { icon: <FaHome />, parts: [{ text: 'Đồ gia dụng', link: '/do-gia-dung' }] },
  { icon: <FaPuzzlePiece />, parts: [{ text: 'Phụ kiện', link: '/phu-kien' }] },
  {
    icon: <FaDesktop />,
    parts: [
      { text: 'PC', link: '/pc' },
      { text: 'Màn hình', link: '/man-hinh' },
      { text: 'Máy in', link: '/may-in' },
    ],
  },
  { icon: <FaTv />, parts: [{ text: 'Tivi', link: '/tivi' }] },
  { icon: <FaExchangeAlt />, parts: [{ text: 'Thu cũ đổi mới', link: '/thu-cu-doi-moi' }] },
  { icon: <FaRedoAlt />, parts: [{ text: 'Hàng cũ', link: '/hang-cu' }] },
  { icon: <FaTags />, parts: [{ text: 'Khuyến mãi', link: '/khuyen-mai' }] },
  { icon: <FaNewspaper />, parts: [{ text: 'Tin công nghệ', link: '/tin-cong-nghe' }] },
];

const bannerTabs = [
  { title: "MỪNG KHAI TRƯƠNG", subtitle: "Ưu đãi cực khủng", image: banner1 },
  { title: "IPHONE 16 PRO MAX", subtitle: "Mua ngay", image: banner2 },
  { title: "GALAXY S25 ULTRA", subtitle: "Giá tốt chốt ngay", image: banner3 },
  {
    title: "HUAWEI WATCH FIT 4",
    subtitle: "Giá chỉ 2.79 triệu",
    image: banner4,
  },
  { title: "VIVO V50 LITE", subtitle: "Giá chỉ 10.69 triệu", image: banner5 },
];

const HomeSection = () => {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % bannerTabs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderSidebar = () => (
    <aside className="w-[220px] bg-white rounded-xl p-4 space-y-3 shadow-xl">
      {categories.map((item, idx) => (
        <div key={idx} className="flex items-start gap-3 text-gray-700">
          <span className="text-base mt-[2px]">{item.icon}</span>
          <div className="flex flex-wrap text-sm font-medium space-x-1">
            {item.parts.map((part, pidx) => (
              <React.Fragment key={pidx}>
                <a
                  href={part.link}
                  className="text-gray-800 hover:text-red-500 hover:scale-[1.05] transition-all"
                >
                  {part.text}
                </a>
                {pidx < item.parts.length - 1 && <span>,</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );

  const renderMainBanner = () => (
    <div className="col-span-2 relative overflow-hidden rounded-xl shadow-xl group">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeBanner * 100}%)` }}
      >
        {bannerTabs.map((banner, idx) => (
          <img
            key={idx}
            src={banner.image}
            alt={banner.title}
            className="min-w-full h-[403px] object-cover"
          />
        ))}
      </div>

      {/* Mũi tên trái */}
      <button
        onClick={() =>
          setActiveBanner((prev) => (prev - 1 + bannerTabs.length) % bannerTabs.length)
        }
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/60 p-2 rounded-full z-10 transition"
      >
        <FaChevronLeft className="text-xl" />
      </button>

      {/* Mũi tên phải */}
      <button
        onClick={() => setActiveBanner((prev) => (prev + 1) % bannerTabs.length)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/60 p-2 rounded-full z-10 transition"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Tabs dưới banner */}
      <div className="absolute bottom-0 left-0 w-full bg-white/90 rounded-b-xl px-4 py-2 flex gap-6 text-sm font-medium shadow-inner">
        {bannerTabs.map((tab, idx) => (
          <div
            key={idx}
            onClick={() => setActiveBanner(idx)}
            className={`cursor-pointer px-2 pb-1 border-b-2 ${activeBanner === idx
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
  );

  const renderRightBanners = () => (
    <div className="flex flex-col gap-4">
      {[bannerRight1, bannerRight2, bannerRight3].map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`right-banner-${idx}`}
          className="rounded-xl shadow-xl object-cover h-[124px] hover:scale-[1.015] transition-transform duration-300"
        />
      ))}
    </div>
  );

  return (
    <div className="pb-6">
      <div className="max-w-[1440px] mx-auto px-4 mt-2 flex gap-5 items-start">
        {renderSidebar()}
        <div className="flex-1 grid grid-cols-3 gap-4">
          {renderMainBanner()}
          {renderRightBanners()}
        </div>
      </div>{" "}    
    </div>
  );
};

export default HomeSection;
