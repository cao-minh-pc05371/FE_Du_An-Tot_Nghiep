import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo2.png";

const ResetPassword = () => {
    const [form, setForm] = useState({ password: "", confirmPassword: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!form.password.trim()) {
            newErrors.password = "Vui lòng nhập mật khẩu mới";
        } else if (form.password.length < 6) {
            newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
        }

        if (!form.confirmPassword.trim()) {
            newErrors.confirmPassword = "Vui lòng xác nhận lại mật khẩu";
        } else if (form.password !== form.confirmPassword) {
            newErrors.confirmPassword = "Mật khẩu không khớp";
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Gửi mật khẩu mới về backend ở đây
            console.log("Resetting password:", form.password);
            setSubmitted(true);
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

                {/* Heading */}
                <h2 className="text-lg sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
                    Đặt lại mật khẩu
                </h2>

                {submitted ? (
                    <div className="text-center text-green-600 text-sm">
                        Mật khẩu của bạn đã được cập nhật thành công.{" "}
                        <Link to="/login" className="text-red-600 font-semibold underline">
                            Đăng nhập
                        </Link>
                    </div>
                ) : (
                    <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700">Mật khẩu mới</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Nhập mật khẩu mới"
                                className={`mt-1 w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-xs sm:text-sm focus:outline-none focus:ring-1 ${errors.password ? "border-red-500 ring-red-500" : "focus:ring-red-500"
                                    }`}
                            />
                            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                        </div>

                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="Nhập lại mật khẩu"
                                className={`mt-1 w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-xs sm:text-sm focus:outline-none focus:ring-1 ${errors.confirmPassword ? "border-red-500 ring-red-500" : "focus:ring-red-500"
                                    }`}
                            />
                            {errors.confirmPassword && (
                                <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-md text-sm"
                        >
                            Cập nhật mật khẩu
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ResetPassword;
