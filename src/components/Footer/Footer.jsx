import React from 'react';
import tt from '../../assets/3670151.png';
import fb from '../../assets/733547.png';
import ig from '../../assets/ig.png';
import yt from '../../assets/youtube.png';
import vnpay from '../../assets/vnpay.png';
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 mt-10 border-t">
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Cột 1: Tổng đài */}
        <div>
          <h4 className="font-bold mb-2 text-gray-900">Tổng đài hỗ trợ miễn phí</h4>
          <p>Mua hàng - bảo hành <span className="font-semibold text-red-600">1800.2097</span> (7h30 - 22h)</p>
          <p>Khiếu nại <span className="font-semibold text-red-600">1800.2063</span> (8h - 21h30)</p>

          <h4 className="font-bold mt-4 mb-2 text-gray-900">Phương thức thanh toán</h4>
          <div className="flex items-center gap-2">
            <img src={vnpay} alt="VNPAY" className="h-6" />
            <img src="" alt="MoMo" className="h-6" />
            <img src="" alt="Apple Pay" className="h-6" />
          </div>
        </div>

        {/* Cột 2: Chính sách */}
        <div>
          <h4 className="font-bold mb-2 text-gray-900">Thông tin & Chính sách</h4>
          <ul className="space-y-1">
            <li>Mua hàng & thanh toán Online</li>
            <li>Chính sách đổi trả</li>
            <li>Chính sách bảo hành</li>
            <li>Tra cứu hóa đơn điện tử</li>
            <li>Trung tâm bảo hành</li>
            <li>VAT Refund</li>
          </ul>
        </div>

        {/* Cột 3: Dịch vụ khác */}
        <div>
          <h4 className="font-bold mb-2 text-gray-900">Dịch vụ & Thông tin khác</h4>
          <ul className="space-y-1">
            <li>Khách hàng doanh nghiệp (B2B)</li>
            <li>Tuyển dụng</li>
            <li>Liên hệ hợp tác kinh doanh</li>
            <li>Chính sách bảo mật</li>
          </ul>

          <h4 className="font-bold mt-4 mb-2 text-gray-900">Tải ứng dụng</h4>
          <div className="flex gap-2">
            <img src="" alt="Google Play" className="h-8" />
            <img src="" alt="App Store" className="h-8" />
          </div>
        </div>

        {/* Cột 4: Kết nối & đối tác */}
        <div>
          <h4 className="font-bold mb-2 text-gray-900">Kết nối với SalePhoneX</h4>
          <div className="flex space-x-2 mb-4">
            <img src={fb} alt="Facebook" className="h-6" />
            <img src={yt} alt="YouTube" className="h-6" />
            <img src={ig} alt="instargam" className="h-6" />
            <img src={tt} alt="TikTok" className="h-6" />
          </div>

          <h4 className="font-bold mb-2 text-gray-900">Website thành viên</h4>
          <ul className="space-y-1 text-red-600">
            <li><a href="#">dienthoaivui</a></li>
            <li><a href="#">CareS</a></li>
            <li><a href="#">SChannel</a></li>
            <li><a href="#">Sforum.vn</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-200 text-center py-3 text-xs text-gray-600">
        © 2025 SalePhoneX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
