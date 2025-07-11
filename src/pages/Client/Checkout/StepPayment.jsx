import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

const inputClass = 'w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition shadow-sm';

const StepPayment = ({ onBack }) => (
    <div className="space-y-8">
        {/* Thông tin thanh toán */}
        <div>
            <h2 className="text-base font-semibold text-gray-800 mb-3">Thông tin thanh toán</h2>
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner space-y-2 text-sm">
                <div className="flex justify-between">
                    <span>Sản phẩm:</span>
                    <strong>iPhone 16 Pro Max</strong>
                </div>
                <div className="flex justify-between">
                    <span>Số lượng:</span>
                    <strong>2</strong>
                </div>
                <div className="flex justify-between">
                    <span>Giảm giá trực tiếp:</span>
                    <span className="text-red-600">-8.700.000đ</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-base font-bold">
                    <span>Tổng tiền:</span>
                    <span className="text-red-600">67.280.000đ</span>
                </div>
            </div>
        </div>

        {/* Phương thức thanh toán */}
        <div>
            <h2 className="text-base font-semibold text-gray-800 mb-3">Phương thức thanh toán</h2>
            <select className={inputClass} defaultValue="">
                <option value="" disabled>-- Chọn phương thức thanh toán --</option>
                <option>Chuyển khoản</option>
                <option>Thanh toán khi nhận hàng</option>
                <option>Thẻ tín dụng</option>
            </select>
        </div>

        {/* Checkbox điều khoản */}
        <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-red-500 w-4 h-4" defaultChecked />
            Bằng việc Đặt hàng, bạn đồng ý với <span className="text-blue-600 underline cursor-pointer">Điều khoản sử dụng</span>
        </label>

        {/* Buttons */}
        <div className="flex justify-between items-center">
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-blue-600 text-sm hover:underline transition"
            >
                <FaChevronLeft /> Quay lại
            </button>
        </div>
    </div>
);

export default StepPayment;
