import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import banner1 from '../../../../assets/dien-thoai-oppo-reno14-home.webp';
import banner2 from '../../../../assets/iphone-16-pro-max-sliding-thang-5.webp';
import banner3 from '../../../../assets/s25-home-moi.webp';
import banner4 from '../../../../assets/fit4-home.webp';
import banner5 from '../../../../assets/vivo-v50-lite-5g-thang-6.webp';
import bannerRight1 from '../../../../assets/m55-6990-right-banner.webp';
import bannerRight2 from '../../../../assets/RightBanner-iPadAirM3.webp';
import bannerRight3 from '../../../../assets/s-edu-2-0-right-laptop.webp';

const categories = [
  { text: 'Điện thoại', link: '/dien-thoai' },
  { text: 'Tablet', link: '/tablet' },
  { text: 'Laptop', link: '/laptop' },
  { text: 'Âm thanh', link: '/am-thanh' },
  { text: 'Mic thu âm', link: '/mic-thu-am' },
  { text: 'Camera', link: '/camera' },
  { text: 'Đồng hồ', link: '/dong-ho' },
  { text: 'Đồ gia dụng', link: '/do-gia-dung' },
  { text: 'Phụ kiện', link: '/phu-kien' },
  { text: 'PC', link: '/pc' },
  { text: 'Tivi', link: '/tivi' },
  { text: 'Thu cũ đổi mới', link: '/thu-cu-doi-moi' },
  { text: 'Hàng cũ', link: '/hang-cu' },
  { text: 'Khuyến mãi', link: '/khuyen-mai' },
  { text: 'Tin công nghệ', link: '/tin-cong-nghe' },
];

const bannerTabs = [
  { title: "MỪNG KHAI TRƯƠNG", subtitle: "Ưu đãi cực khủng", image: banner1 },
  { title: "IPHONE 16 PRO MAX", subtitle: "Mua ngay", image: banner2 },
  { title: "GALAXY S25 ULTRA", subtitle: "Giá tốt chốt ngay", image: banner3 },
  { title: "HUAWEI WATCH FIT 4", subtitle: "Giá chỉ 2.79 triệu", image: banner4 },
  { title: "VIVO V50 LITE", subtitle: "Giá chỉ 10.69 triệu", image: banner5 },
];

const HomeSection = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  const bannerRef = useRef(null);
  const tabsRef = useRef(null);
  const [sidebarHeight, setSidebarHeight] = useState(403);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % bannerTabs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Calculate sidebarHeight = banner + tabs + 10px
  useEffect(() => {
    const updateHeight = () => {
      const bannerH = bannerRef.current?.offsetHeight || 0;
      const tabsH = tabsRef.current?.offsetHeight || 0;
      setSidebarHeight(bannerH + tabsH + 10);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (bannerRef.current) resizeObserver.observe(bannerRef.current);
    if (tabsRef.current) resizeObserver.observe(tabsRef.current);

    window.addEventListener('resize', updateHeight);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  // Sidebar list: dùng flex-col
  const renderSidebar = () => (
    <aside
      className="bg-white rounded-xl p-4 space-y-3 shadow-xl overflow-y-auto"
      style={{ maxHeight: sidebarHeight }}
    >
      {categories.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-800 hover:text-red-500 transition-all cursor-pointer text-sm font-medium"
        >
          <div className="w-5 h-5 bg-red-600 rounded-sm flex items-center justify-center text-xs text-white">
            <span>{item.text.charAt(0)}</span>
          </div>

          <span className="truncate">{item.text}</span>
        </a>
      ))}
    </aside>
  );

  // Main banner + tabs
  const renderMainBanner = () => (
    <>
      <div ref={bannerRef} className="relative overflow-hidden rounded-xl shadow-lg group w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeBanner * 100}%)` }}
        >
          {bannerTabs.map((banner, idx) => (
            <img
              key={idx}
              src={banner.image}
              alt={banner.title}
              className="min-w-full object-cover"
            />
          ))}
        </div>

        {/* Navigation - only show on hover */}
        <button
          onClick={() =>
            setActiveBanner((prev) => (prev - 1 + bannerTabs.length) % bannerTabs.length)
          }
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/60 p-2 rounded-full z-30 opacity-0 group-hover:opacity-100 transition"
        >
          <FaChevronLeft className="text-xl" />
        </button>

        <button
          onClick={() => setActiveBanner((prev) => (prev + 1) % bannerTabs.length)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/60 p-2 rounded-full z-30 opacity-0 group-hover:opacity-100 transition"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>

      {/* Tabs */}
      <div
        ref={tabsRef}
        className="hidden sm:flex w-full bg-white rounded-xl px-4 py-4 gap-4 text-sm font-normal shadow-xl"
      >
        {bannerTabs.map((tab, idx) => (
          <div
            key={idx}
            onClick={() => setActiveBanner(idx)}
            className={`cursor-pointer px-1 pb-1 border-b-2 ${activeBanner === idx
                ? 'border-red-600 text-red-600 font-semibold'
                : 'border-transparent hover:text-red-600'
              } ${idx === bannerTabs.length - 1 ? 'hidden md:block lg:block' : ''}`}
          >
            <div className="font-normal whitespace-normal overflow-hidden">{tab.title}</div>
            <div className="text-xs font-normal">{tab.subtitle}</div>
          </div>
        ))}
      </div>
    </>
  );


  // Right banners: đổi sang grid
  const renderRightBanners = () => (
    <div
      className="grid grid-cols-1 gap-2"
      style={{ height: sidebarHeight }}
    >
      {[bannerRight1, bannerRight2, bannerRight3].map((img, idx) => (
        <div key={idx} className="overflow-hidden hover:scale-[1.015] transition-transform duration-300 rounded-xl">
          <img
            src={img}
            alt={`right-banner-${idx}`}
            className="w-full h-full object-cover rounded-xl shadow-lg"
            style={{ height: sidebarHeight / 3 - 8 }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="pb-6">
      <div className="w-full mx-auto px-4 mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(120px,180px)_1fr] lg:grid-cols-[minmax(150px,220px)_1fr_auto] gap-3 items-start">

          <div className="hidden sm:block">
            {renderSidebar()}
          </div>

          <div className="flex flex-col gap-2">
            {renderMainBanner()}
          </div>

          <div className="hidden lg:block overflow-hidden">
            {renderRightBanners()}
          </div>

        </div>
      </div>
      </div>{" "}    
    </div>
  );

};

export default HomeSection;

