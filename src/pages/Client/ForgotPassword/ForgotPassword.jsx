import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo2.png";
import constants from "../../../constants/constants";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
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
        setLoading(true);

        try {
            const res = await fetch(`${constants.BASE_URL}/password/forgot`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Đã xảy ra lỗi.");
            } else {
                setSubmitted(true);
                setToken(data.token || "");
            }
        } catch (err) {
            setError("Không thể kết nối tới máy chủ.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-2 sm:px-4">
            <div className="w-full max-w-sm sm:max-w-md bg-white rounded-xl shadow-md p-4 sm:p-8">
                <Link to="/">
                    <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="bg-red-600 px-2 py-1 rounded-md">
                            <img src={logo} alt="Logo" className="h-12 sm:h-16" />
                        </div>
                    </div>
                </Link>

                <h2 className="text-lg sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
                    Quên mật khẩu
                </h2>

                {submitted ? (
                    <div className="text-center text-green-600 text-sm space-y-2">
                        <p>Token đã được gửi thành công. Vui lòng kiểm tra email của bạn.</p>
                        {token && (
                            <>
                                <p className="text-xs text-gray-600">
                                    Dùng token này để đặt lại mật khẩu tại link: <br />
                                    <Link
                                        to={`/reset-password?email=${encodeURIComponent(email)}&token=${token}`}
                                        className="text-blue-600 underline break-all"
                                    >
                                        /reset-password?email={email}&token={token}
                                    </Link>
                                </p>
                            </>
                        )}
                    </div>
                ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {error && (
                            <div className="text-sm text-red-500 text-center">{error}</div>
                        )}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError("");
                                }}
                                placeholder="Nhập email của bạn"
                                className={`mt-1 w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 ${error ? "border-red-500 ring-red-500" : "focus:ring-red-500"
                                    }`}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-md text-sm"
                        >
                            {loading ? "Đang gửi..." : "Gửi liên kết khôi phục"}
                        </button>
                    </form>
                )}

                <p className="mt-6 text-center text-sm text-gray-600">
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
