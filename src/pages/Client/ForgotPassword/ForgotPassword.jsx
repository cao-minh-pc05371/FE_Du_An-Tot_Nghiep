import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo2.png";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            setError("Vui lòng nhập email");
            return;
        } else if (!emailRegex.test(email)) {
            setError("Email không hợp lệ");
            return;
        }

        setError("");
        setSubmitted(true);
        console.log("Send recovery link to:", email);
        // Gửi yêu cầu reset mật khẩu về backend tại đây
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
                    Quên mật khẩu
                </h2>

                {submitted ? (
                    <div className="text-center text-green-600 text-sm">
                        Liên kết khôi phục đã được gửi đến email của bạn.
                    </div>
                ) : (
                    <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError("");
                                }}
                                placeholder="Nhập email"
                                className={`mt-1 w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-xs sm:text-sm focus:outline-none focus:ring-1 ${error ? "border-red-500 ring-red-500" : "focus:ring-red-500"
                                    }`}
                            />
                            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-md text-sm"
                        >
                            Gửi liên kết khôi phục
                        </button>
                    </form>
                )}

                <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-600">
                    Quay lại{" "}
                    <Link to="/login" className="text-red-600 font-medium hover:underline">
                        Đăng nhập
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
