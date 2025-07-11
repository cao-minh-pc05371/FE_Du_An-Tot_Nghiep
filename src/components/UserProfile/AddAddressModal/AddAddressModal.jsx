import React from 'react';
import { useForm } from 'react-hook-form';

const AddAddressModal = ({ visible, onClose, onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-4 sm:p-6">

                <h3 className="text-lg font-semibold mb-4">Thêm địa chỉ mới</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

                    <div>
                        <input
                            type="text"
                            placeholder="Họ tên người nhận"
                            {...register('recipient_name', { required: 'Vui lòng nhập họ tên' })}
                            className={inputClass}
                        />
                        {errors.recipient_name && <p className="text-red-500 text-xs">{errors.recipient_name.message}</p>}
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Số điện thoại"
                            {...register('phone', {
                                required: 'Vui lòng nhập số điện thoại',
                                pattern: { value: /^[0-9]{10,11}$/, message: 'Số điện thoại không hợp lệ' }
                            })}
                            className={inputClass}
                        />
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                    </div>

                    <div>
                        <textarea
                            placeholder="Địa chỉ"
                            {...register('address', { required: 'Vui lòng nhập địa chỉ' })}
                            className={`${inputClass} h-20`}
                        ></textarea>
                        {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Phường/Xã"
                            {...register('ward')}
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Quận/Huyện"
                            {...register('district')}
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Tỉnh/Thành phố"
                            {...register('city')}
                            className={inputClass}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            {...register('is_default')}
                        />
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
