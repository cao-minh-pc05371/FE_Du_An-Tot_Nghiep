import React from 'react';
import {
  FaMobileAlt, FaLaptop, FaHeadphones, FaCamera, FaHome,
  FaPuzzlePiece, FaDesktop, FaTv, FaExchangeAlt,
  FaRedoAlt, FaTags, FaNewspaper
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

const CategoryMenu = ({onCloseMenu}) => {
  return (
    <aside className="w-[230px] bg-white rounded-xl shadow-lg border border-gray-200 p-4 space-y-3">
      {categories.map((item, idx) => (
        <div key={idx} className="flex items-start gap-3 text-gray-700">
          <span className="text-base mt-[2px]">{item.icon}</span>
          <div className="flex flex-wrap text-sm font-medium space-x-1">
            {item.parts.map((part, pidx) => (
              <React.Fragment key={pidx}>
                <Link to={part.link} onClick={onCloseMenu} className="hover:text-red-600 hover:scale-[1.05] transition-colors">
                  {part.text}
                </Link>
                {pidx < item.parts.length - 1 && <span>,</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default CategoryMenu;
