import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo2.png";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // xóa lỗi khi người dùng nhập lại
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!form.email.trim()) newErrors.email = "Vui lòng nhập email";
        if (!form.password.trim()) newErrors.password = "Vui lòng nhập mật khẩu";

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Xử lý đăng nhập ở đây
            console.log("Form submitted:", form);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                {/* Logo */}
                <Link to="/">
                    <div className="flex justify-center mb-6">
                        <div className="bg-red-600 px-3 py-1 rounded-md">
                            <img src={logo} alt="Logo" className="h-16" />
                        </div>
                    </div>
                </Link>

                {/* Heading */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Đăng nhập tài khoản
                </h2>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Nhập email"
                            className={`mt-1 w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 ${errors.email ? "border-red-500 ring-red-500" : "focus:ring-red-500"
                                }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Nhập mật khẩu"
                            className={`mt-1 w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 ${errors.password ? "border-red-500 ring-red-500" : "focus:ring-red-500"
                                }`}
                        />
                        {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-md text-sm"
                    >
                        Đăng nhập
                    </button>

                    <div className="text-right text-sm">
                        <Link to="/forgot-password" className="text-blue-600 hover:underline">
                            Quên mật khẩu?
                        </Link>
                    </div>
                </form>


                {/* Register link */}
                <p className="mt-6 text-center text-sm">
                    Bạn chưa có tài khoản?{" "}
                    <Link to="/register" className="text-red-600 font-medium hover:underline">
                        Đăng ký ngay
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
