import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import constants from '../../constants/constants';
import { Link } from 'react-router-dom';

const ChangePasswordForm = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setMessage('');
        setErrorMessage('');
        setLoading(true);

        try {
            const access_token = localStorage.getItem('access_token');
            const res = await fetch(`${constants.BASE_URL}/password/change`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`
                },
                body: JSON.stringify({
                    current_password: data.currentPassword,
                    new_password: data.newPassword,
                    new_password_confirmation: data.confirmPassword
                })
            });

            const result = await res.json();

            if (!res.ok) {
                setErrorMessage(result.message || 'Đã xảy ra lỗi.');
            } else {
                setMessage(result.message || 'Đổi mật khẩu thành công.');
                reset();
            }
        } catch (err) {
            setErrorMessage('Không thể kết nối đến máy chủ.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold">Đổi mật khẩu</h3>

            {message && <p className="text-green-600 text-sm">{message}</p>}
            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                    <input
                        type="password"
                        placeholder="Mật khẩu hiện tại"
                        {...register('currentPassword', {
                            required: 'Vui lòng nhập mật khẩu hiện tại'
                        })}
                        className={inputClass}
                    />
                    {errors.currentPassword && (
                        <p className="text-red-500 text-xs mt-1">{errors.currentPassword.message}</p>
                    )}
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Mật khẩu mới"
                        {...register('newPassword', {
                            required: 'Vui lòng nhập mật khẩu mới',
                            minLength: {
                                value: 6,
                                message: 'Mật khẩu tối thiểu 6 ký tự'
                            }
                        })}
                        className={inputClass}
                    />
                    {errors.newPassword && (
                        <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>
                    )}
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
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
                    )}
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
                {loading ? 'Đang xử lý...' : 'Đổi mật khẩu'}
            </button>

            <p className="text-xs text-gray-500 mt-2">
                Quên mật khẩu?{' '}
                <Link to="/forgot-password" className="text-blue-600 hover:underline">
                    Lấy lại mật khẩu tại đây
                </Link>
            </p>
        </form>
    );
};

const inputClass = 'w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500';

export default ChangePasswordForm;
