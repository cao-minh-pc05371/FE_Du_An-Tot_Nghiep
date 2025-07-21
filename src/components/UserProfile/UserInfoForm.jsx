import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import constants from '../../constants/constants'; // nhớ đã dùng cái này rồi

const UserInfoForm = () => {
    const [loading, setLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const token = localStorage.getItem("access_token");

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        defaultValues: {
            fullName: '',
            phone: '',
            email: ''
        }
    });

    useEffect(() => {
        if (user) {
            setValue("fullName", user.name || "");
            setValue("phone", user.phone || "");
            setValue("email", user.email || "");
        }
    }, [user, setValue]);

    const onSubmit = async (data) => {
        try {
            const token = localStorage.getItem("access_token") || sessionStorage.getItem("access_token");
            const userId = user.id;

            const response = await fetch(`${constants.BASE_URL}/users/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name: data.fullName,
                    phone: data.phone,
                    // không cần gửi email nếu không đổi
                }),
            });

            if (!response.ok) {
                throw new Error("Cập nhật thất bại");
            }

            const updatedUser = await response.json();

            // ✅ Cập nhật localStorage ngay
            localStorage.setItem("user", JSON.stringify(updatedUser));

            // ✅ Nếu bạn có hàm cập nhật global state (như Context hoặc Redux), gọi tại đây
            toast.success("Cập nhật thành công!");

            // ✅ Optional: refresh lại component nếu cần
            window.location.reload(); // hoặc trigger state set lại user nếu dùng Context

        } catch (error) {
            toast.error("Có lỗi xảy ra khi cập nhật.");
            console.error(error);
        }
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
                            pattern: {
                                value: /^[0-9]{10,11}$/,
                                message: 'Số điện thoại không hợp lệ'
                            }
                        })}
                        className={inputClass}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div className="sm:col-span-2">
                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email')}
                        readOnly
                        className={`${inputClass} bg-gray-100 cursor-not-allowed`}
                    />
                    <p className="text-gray-500 text-xs mt-1">Email không thể thay đổi</p>
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:opacity-60"
            >
                {loading ? "Đang lưu..." : "Lưu thay đổi"}
            </button>
        </form>
    );
};

const inputClass = 'w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500';

export default UserInfoForm;
