import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Trang chủ</h1>
        <p className="text-lg">Chào mừng đến với website của chúng tôi!</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Tìm hiểu thêm
        </button>
      </div>
    </div>
  );
};

export default Home;
