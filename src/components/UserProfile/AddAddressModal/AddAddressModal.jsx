import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddAddressModal = ({ visible, onClose, onSubmit }) => {
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const selectedProvince = watch('province');
    const selectedDistrict = watch('district');

    useEffect(() => {
        axios.get('https://provinces.open-api.vn/api/?depth=1').then(res => {
            setProvinces(res.data);
        });
    }, []);

    useEffect(() => {
        if (selectedProvince) {
            axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`).then(res => {
                setDistricts(res.data.districts);
                setValue('district', '');
                setWards([]);
                setValue('ward', '');
            });
        }
    }, [selectedProvince]);

    useEffect(() => {
        if (selectedDistrict) {
            axios.get(`https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`).then(res => {
                setWards(res.data.wards);
                setValue('ward', '');
            });
        }
    }, [selectedDistrict]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">Thêm địa chỉ mới</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    {/* Tên và SĐT */}
                    <input {...register("recipient_name", { required: "Vui lòng nhập họ tên" })} placeholder="Họ tên người nhận" className={inputClass} />
                    {errors.recipient_name && <p className="text-red-500 text-xs">{errors.recipient_name.message}</p>}

                    <input {...register("phone", {
                        required: "Vui lòng nhập số điện thoại",
                        pattern: { value: /^[0-9]{10,11}$/, message: "Số điện thoại không hợp lệ" }
                    })} placeholder="Số điện thoại" className={inputClass} />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}

                    {/* Dropdown Tỉnh/TP */}
                    <select {...register("province", { required: "Vui lòng chọn tỉnh/thành phố" })} className={inputClass}>
                        <option value="">Chọn Tỉnh/Thành phố</option>
                        {provinces.map(p => (
                            <option key={p.code} value={p.code}>{p.name}</option>
                        ))}
                    </select>

                    {/* Dropdown Quận/Huyện */}
                    <select {...register("district", { required: "Vui lòng chọn quận/huyện" })} className={inputClass} disabled={!districts.length}>
                        <option value="">Chọn Quận/Huyện</option>
                        {districts.map(d => (
                            <option key={d.code} value={d.code}>{d.name}</option>
                        ))}
                    </select>

                    {/* Dropdown Phường/Xã */}
                    <select {...register("ward", { required: "Vui lòng chọn phường/xã" })} className={inputClass} disabled={!wards.length}>
                        <option value="">Chọn Phường/Xã</option>
                        {wards.map(w => (
                            <option key={w.code} value={w.name}>{w.name}</option>
                        ))}
                    </select>
                    
                    {/* Địa chỉ cụ thể */}
                    <textarea {...register("address", { required: "Vui lòng nhập địa chỉ" })} placeholder="Địa chỉ (số nhà, tên đường...)" className={`${inputClass} h-20`} />
                    {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}

                    {/* Đặt mặc định */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" {...register("is_default")} />
                        <label>Đặt làm địa chỉ mặc định</label>
                    </div>

                    <div className="flex justify-end gap-3 pt-2 border-t">
                        <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Huỷ</button>
                        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Lưu</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const inputClass = 'w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500';

export default AddAddressModal;
