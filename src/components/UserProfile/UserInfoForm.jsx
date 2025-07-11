import React from 'react';
import { useForm } from 'react-hook-form';

const UserInfoForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            fullName: 'Nguyen Cao Minh',
            phone: '0707734958',
            email: 'minhncpc05371@fpt.edu.vn'
        }
    });

    const onSubmit = (data) => {
        console.log("Submit user info:", data);
        // Call API update user info here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">Thông tin cá nhân</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                    <input
                        type="text"
                        placeholder="Họ và tên"
                        {...register('fullName', { required: 'Họ và tên không được để trống' })}
                        className={inputClass}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Số điện thoại"
                        {...register('phone', {
                            required: 'Số điện thoại không được để trống',
                            pattern: { value: /^[0-9]{10,11}$/, message: 'Số điện thoại không hợp lệ' }
                        })}
                        className={inputClass}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div className="sm:col-span-2">
                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email', { required: 'Email không được để trống' })}
                        className={inputClass}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
            </div>

            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Lưu thay đổi</button>
        </form>
    );
};

const inputClass = 'w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500';

export default UserInfoForm;
