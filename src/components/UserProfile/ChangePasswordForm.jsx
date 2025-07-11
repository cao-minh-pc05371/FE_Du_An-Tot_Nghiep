import React from 'react';
import { useForm } from 'react-hook-form';

const ChangePasswordForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Change password data:", data);
        // Call API change password here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold">Đổi mật khẩu</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                    <input
                        type="password"
                        placeholder="Mật khẩu hiện tại"
                        {...register('currentPassword', { required: 'Vui lòng nhập mật khẩu hiện tại' })}
                        className={inputClass}
                    />
                    {errors.currentPassword && <p className="text-red-500 text-xs mt-1">{errors.currentPassword.message}</p>}
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Mật khẩu mới"
                        {...register('newPassword', { required: 'Vui lòng nhập mật khẩu mới', minLength: { value: 6, message: 'Mật khẩu tối thiểu 6 ký tự' } })}
                        className={inputClass}
                    />
                    {errors.newPassword && <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>}
                </div>

                <div className="sm:col-span-2">
                    <input
                        type="password"
                        placeholder="Xác nhận mật khẩu mới"
                        {...register('confirmPassword', {
                            required: 'Vui lòng xác nhận mật khẩu',
                            validate: value => value === watch('newPassword') || 'Mật khẩu không khớp'
                        })}
                        className={inputClass}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                </div>
            </div>

            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Đổi mật khẩu</button>
        </form>
    );
};

const inputClass = 'w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500';

export default ChangePasswordForm;
