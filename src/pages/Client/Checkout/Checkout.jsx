import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Checkout = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-neutral-200">
                <div className="flex mb-6 border-b border-gray-200 text-sm font-semibold">
                    <div className={`pb-2 px-4 ${step === 1 ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-400'}`}>1. THÔNG TIN</div>
                    <div className={`pb-2 px-4 ${step === 2 ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-400'}`}>2. THANH TOÁN</div>
                </div>

                {step === 1 ? <StepInfo onNext={() => setStep(2)} /> : <StepPayment onBack={() => setStep(1)} />}
            </div>
        </div>
    );
};

const StepInfo = ({ onNext }) => {
    const [expanded, setExpanded] = useState(true);
    const [shipMethod, setShipMethod] = useState('store');

    const products = [
        {
            name: 'iPhone 16 Pro Max 512GB | Chính hãng VN/A - Titan Sa Mạc',
            price: '36.790.000đ',
            oldPrice: '40.990.000đ',
            quantity: 1,
            image: '/images/iphone-512.jpg',
        },
        {
            name: 'iPhone 16 Pro Max 256GB | Chính hãng VN/A - Titan Sa Mạc',
            price: '30.490.000đ',
            oldPrice: '34.990.000đ',
            quantity: 1,
            image: '/images/iphone-256.jpg',
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-sm font-semibold">SẢN PHẨM ĐÃ CHỌN</h2>
                    <span className="text-xs text-gray-500">{products.length} sản phẩm</span>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-md">
                    {(expanded ? products : products.slice(0, 1)).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 border-b last:border-b-0">
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-800 leading-tight">{item.name}</div>
                                <div className="text-sm mt-1">
                                    <span className="text-red-600 font-bold mr-2">{item.price}</span>
                                    <span className="line-through text-gray-400">{item.oldPrice}</span>
                                    <span className="ml-4 text-gray-500">Số lượng: {item.quantity}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div
                        onClick={() => setExpanded(!expanded)}
                        className="text-center text-blue-600 text-sm py-2 cursor-pointer hover:underline"
                    >
                        {expanded ? 'thu gọn ▲' : `xem tất cả ${products.length} sản phẩm ▼`}
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-sm font-semibold mb-2">THÔNG TIN KHÁCH HÀNG</h2>
                <div className="grid grid-cols-2 gap-4">
                    <input className={inputClass} placeholder="VD: Nguyễn Văn A" defaultValue="Nguyen Cao Minh" />
                    <input className={inputClass} placeholder="VD: 0909xxxxxx" defaultValue="0707734958" />
                    <input className={`${inputClass} col-span-2`} placeholder="Email (nếu có)" defaultValue="minhncpc05371@fpt.edu.vn" />
                    <label className="col-span-2 text-sm flex items-center gap-2">
                        <input type="checkbox" className="accent-red-500" />
                        Nhận email thông báo và ưu đãi từ hệ thống
                    </label>
                </div>
            </div>

            <div>
                <h2 className="text-sm font-semibold mb-2">THÔNG TIN NHẬN HÀNG</h2>
                <div className="flex items-center gap-6 text-sm">
                    <label className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${shipMethod === 'store' ? 'bg-gray-100 border border-red-500' : ''}`}>
                        <input type="radio" name="method" checked={shipMethod === 'store'} onChange={() => setShipMethod('store')} /> Nhận tại cửa hàng
                    </label>
                    <label className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${shipMethod === 'home' ? 'bg-gray-100 border border-red-500' : ''}`}>
                        <input type="radio" name="method" checked={shipMethod === 'home'} onChange={() => setShipMethod('home')} /> Giao hàng tận nơi
                    </label>
                </div>

                {shipMethod === 'home' && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <input className={inputClass} placeholder="Tên người nhận" defaultValue="Nguyen Cao Minh" />
                        <input className={inputClass} placeholder="Số điện thoại nhận hàng" defaultValue="0707734958" />
                        <input className={inputClass} placeholder="Tỉnh / Thành phố" defaultValue="Cần Thơ" />
                        <input className={inputClass} placeholder="Chọn quận/huyện" />
                        <input className={inputClass} placeholder="Chọn phường/xã" />
                        <input className={inputClass} placeholder="Số nhà, tên đường" />
                        <input className={`${inputClass} col-span-2`} placeholder="Ghi chú thêm (nếu có)" />
                    </div>
                )}

                {shipMethod === 'store' && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <input className={inputClass} placeholder="Tỉnh / Thành phố" defaultValue="Cần Thơ" />
                        <input className={inputClass} placeholder="Chọn quận/huyện" />
                        <input className={`${inputClass} col-span-2`} placeholder="Chọn địa chỉ cửa hàng" />
                        <input className={`${inputClass} col-span-2`} placeholder="Ghi chú thêm (nếu có)" />
                    </div>
                )}
            </div>

            <div className="text-right">
                <button onClick={onNext} className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-200">
                    Tiếp tục <FaChevronRight className="inline ml-1" />
                </button>
            </div>
        </div>
    );
};

const StepPayment = ({ onBack }) => (
    <div className="space-y-6">
        <div>
            <h2 className="text-sm font-semibold mb-2">THÔNG TIN THANH TOÁN</h2>
            <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-1">
                <div>Sản phẩm: <strong>iPhone 16 Pro Max</strong></div>
                <div>Số lượng: <strong>2</strong></div>
                <div>Giảm giá trực tiếp: <span className="text-red-600">-8.700.000đ</span></div>
                <div className="text-base font-bold mt-2">
                    Tổng tiền: <span className="text-red-600">67.280.000đ</span>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-sm font-semibold mb-2">PHƯƠNG THỨC THANH TOÁN</h2>
            <select className={inputClass} defaultValue="">
                <option value="" disabled>-- Chọn phương thức thanh toán --</option>
                <option>Chuyển khoản</option>
                <option>Thanh toán khi nhận hàng</option>
                <option>Thẻ tín dụng</option>
            </select>
        </div>

        <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-red-500" defaultChecked />
            Bằng việc Đặt hàng, bạn đồng ý với <span className="text-blue-600 underline">Điều khoản sử dụng</span>
        </label>

        <div className="flex justify-between items-center">
            <button onClick={onBack} className="text-blue-600 text-sm flex items-center gap-1">
                <FaChevronLeft /> Quay lại
            </button>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-200">
                Thanh toán
            </button>
        </div>
    </div>
);

const inputClass = 'w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 transition-all duration-150';

export default Checkout;