import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import constants from '../../../constants/constants';

const AddressModal = ({ visible, onClose, onSubmit, editData }) => {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editData) {
            reset({
                ...editData,
                is_default: editData.is_default ? 'true' : '',
            });
        }
    }, [editData, reset]);

    if (!visible) return null;

    const onInternalSubmit = async (data) => {
        setLoading(true);
        const token = localStorage.getItem('access_token');

        const isDefaultChecked = data.is_default === 'true' || data.is_default === true;

        const payload = {
            recipient_name: data.recipient_name,
            phone: data.phone,
            address: data.address,
            city: data.city,
            district: data.district,
            ward: data.ward,
            is_default: isDefaultChecked,
        };

        try {
            if (editData?.id) {
                await axios.put(`${constants.BASE_URL}/shipping-addresses/${editData.id}`, payload, {
                    headers: { Authorization: `Bearer ${token}` }
                });
            } else {
                await axios.post(`${constants.BASE_URL}/shipping-addresses`, payload, {
                    headers: { Authorization: `Bearer ${token}` }
                });
            }

            onSubmit();
            onClose();
        } catch (err) {
            if (err.response?.status === 401) {
                alert("Lỗi khi lưu địa chỉ. Vui lòng đăng nhập lại.");
            } else {
                alert(err.response?.data?.message || "Lưu địa chỉ thất bại.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">
                    {editData ? 'Cập nhật địa chỉ' : 'Thêm địa chỉ mới'}
                </h3>
                <form onSubmit={handleSubmit(onInternalSubmit)} className="space-y-3">
                    <input
                        {...register("recipient_name", { required: "Vui lòng nhập họ tên" })}
                        placeholder="Họ tên người nhận"
                        className={inputClass}
                    />
                    {errors.recipient_name && <p className="text-red-500 text-xs">{errors.recipient_name.message}</p>}

                    <input
                        {...register("phone", {
                            required: "Vui lòng nhập số điện thoại",
                            pattern: { value: /^[0-9]{10,11}$/, message: "Số điện thoại không hợp lệ" }
                        })}
                        placeholder="Số điện thoại"
                        className={inputClass}
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}

                    <input
                        {...register("city", { required: "Vui lòng nhập Tỉnh/Thành phố" })}
                        placeholder="Tỉnh/Thành phố"
                        className={inputClass}
                    />
                    {errors.city && <p className="text-red-500 text-xs">{errors.city.message}</p>}

                    <input
                        {...register("district", { required: "Vui lòng nhập Quận/Huyện" })}
                        placeholder="Quận/Huyện"
                        className={inputClass}
                    />
                    {errors.district && <p className="text-red-500 text-xs">{errors.district.message}</p>}

                    <input
                        {...register("ward", { required: "Vui lòng nhập Phường/Xã" })}
                        placeholder="Phường/Xã"
                        className={inputClass}
                    />
                    {errors.ward && <p className="text-red-500 text-xs">{errors.ward.message}</p>}

                    <textarea
                        {...register("address", { required: "Vui lòng nhập địa chỉ" })}
                        placeholder="Địa chỉ (số nhà, tên đường...)"
                        className={`${inputClass} h-20`}
                    />
                    {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            value="true"
                            {...register("is_default")}
                            defaultChecked={editData?.is_default}
                        />
                        <label>Đặt làm địa chỉ mặc định</label>
                    </div>

                    <div className="flex justify-end gap-3 pt-2 border-t">
                        <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Huỷ</button>
                        <button type="submit" disabled={loading} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                            {loading ? 'Đang lưu...' : 'Lưu'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const inputClass = 'w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500';

export default AddressModal;
