import React from "react";

const ProductCard = ({ data }) => {
    const {
        name,
        price,
        oldPrice,
        discount,
        sMemberDiscount,
        image,
        rating, // ⭐ lấy rating từ props data
    } = data;

    return (
        <div className="w-full rounded-xl border shadow-md p-4 relative flex flex-col">
            {/* Tag giảm giá */}
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                Giảm {discount}%
            </div>

            {/* Hình ảnh sản phẩm */}
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-contain mt-6"
            />

            {/* Tên sản phẩm */}
            <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-5 line-clamp-2">
                {name}
            </h3>

            {/* Giá */}
            <div className="mt-1">
                <span className="text-lg font-bold text-red-600">
                    {price.toLocaleString("vi-VN")}đ
                </span>{" "}
                <span className="line-through text-gray-500 text-sm">
                    {oldPrice.toLocaleString("vi-VN")}đ
                </span>
            </div>

            {/* SMember giảm thêm */}
            <div className="text-sm text-red-600 font-medium mt-1">
                Smember giảm thêm đến {sMemberDiscount.toLocaleString("vi-VN")}đ
            </div>

            {/* ⭐ Rating ở dưới cùng */}
            <div className="mt-auto pt-2 flex text-yellow-500 text-xs sm:text-sm">
                {"⭐️".repeat(rating || 5)}
            </div>
        </div>
    );
};

export default ProductCard;
