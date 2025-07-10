import React, { useState } from "react";
import logo from "../../../assets/logo2.png";
import { Link } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{9,}$/;

        if (!form.name.trim()) newErrors.name = "Vui lòng nhập họ tên";

        if (!form.email.trim()) {
            newErrors.email = "Vui lòng nhập email";
        } else if (!emailRegex.test(form.email)) {
            newErrors.email = "Email không hợp lệ";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Vui lòng nhập số điện thoại";
        } else if (!phoneRegex.test(form.phone)) {
            newErrors.phone = "Số điện thoại không hợp lệ";
        }

        if (!form.password.trim()) {
            newErrors.password = "Vui lòng nhập mật khẩu";
        } else if (form.password.length < 6) {
            newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
        }

        if (!form.confirmPassword.trim()) {
            newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu";
        } else if (form.password !== form.confirmPassword) {
            newErrors.confirmPassword = "Mật khẩu không khớp";
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Xử lý đăng ký ở đây
            console.log("Đăng ký:", form);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-2 sm:px-4">
            <div className="w-full max-w-sm sm:max-w-md bg-white rounded-xl shadow-md p-4 sm:p-8">
                {/* Logo */}
                <Link to="/">
                    <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="bg-red-600 px-2 py-1 rounded-md">
                            <img src={logo} alt="Logo" className="h-12 sm:h-16" />
                        </div>
                    </div>
                </Link>

                <h2 className="text-lg sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
                    Đăng ký tài khoản
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    {/* Họ tên */}
                    <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700">Họ và tên</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Nhập họ tên"
                            className={`mt-1 w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-xs sm:text-sm ${errors.name ? "border-red-500" : ""
                                }`}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Nhập email"
                            className={`mt-1 w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-xs sm:text-sm ${errors.email ? "border-red-500" : ""
                                }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    {/* Số điện thoại */}
                    <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700">Số điện thoại</label>
                        <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Nhập số điện thoại"
                            className={`mt-1 w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-xs sm:text-sm ${errors.phone ? "border-red-500" : ""
                                }`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    {/* Mật khẩu */}
                    <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700">Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Nhập mật khẩu"
                            className={`mt-1 w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-xs sm:text-sm ${errors.password ? "border-red-500" : ""
                                }`}
                        />
                        {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                    </div>

                    {/* Xác nhận mật khẩu */}
                    <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            placeholder="Nhập lại mật khẩu"
                            className={`mt-1 w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-xs sm:text-sm ${errors.confirmPassword ? "border-red-500" : ""
                                }`}
                        />
                        {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-md text-sm"
                    >
                        Đăng ký
                    </button>
                </form>

                <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm">
                    Bạn đã có tài khoản?{" "}
                    <Link to="/login" className="text-red-600 font-medium hover:underline">
                        Đăng nhập
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
