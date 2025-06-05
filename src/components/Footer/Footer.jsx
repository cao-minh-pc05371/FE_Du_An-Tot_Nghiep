import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 mt-10">
      <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 pb-10">

        {/* Logo + Slogan */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-white">TekStore</h2>
          <p className="text-sm text-gray-400">
            Chuyên cung cấp điện thoại, laptop, phụ kiện và thiết bị công nghệ chính hãng với giá tốt nhất.
          </p>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
          </div>
        </div>

        {/* Sản phẩm */}
        <div>
          <h3 className="text-white font-semibold mb-3">Sản phẩm</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/dien-thoai" className="hover:text-white">Điện thoại</a></li>
            <li><a href="/laptop" className="hover:text-white">Laptop</a></li>
            <li><a href="/phu-kien" className="hover:text-white">Phụ kiện</a></li>
            <li><a href="/tivi" className="hover:text-white">Tivi</a></li>
          </ul>
        </div>

        {/* Hỗ trợ khách hàng */}
        <div>
          <h3 className="text-white font-semibold mb-3">Hỗ trợ khách hàng</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/huong-dan-mua-hang" className="hover:text-white">Hướng dẫn mua hàng</a></li>
            <li><a href="/tra-cuu-don-hang" className="hover:text-white">Tra cứu đơn hàng</a></li>
            <li><a href="/bao-hanh" className="hover:text-white">Chính sách bảo hành</a></li>
            <li><a href="/doi-tra" className="hover:text-white">Chính sách đổi trả</a></li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <h3 className="text-white font-semibold mb-3">Liên hệ</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-[2px]" /> <span>123 Đường Công Nghệ, Quận 1, TP.HCM</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <a href="tel:0123456789" className="hover:text-white">0123 456 789</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <a href="mailto:support@tekstore.vn" className="hover:text-white">support@tekstore.vn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400 border-t border-gray-700">
        © 2025 TekStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
