import { useState } from "react";
import { FaFilter, FaTruck, FaMoneyBillWave } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const filters = [
    { name: "Bộ lọc", icon: <FaFilter /> },
    { name: "Sẵn hàng", icon: <FaTruck /> },
    { name: "Giá", icon: <FaMoneyBillWave /> },
    {
        name: "Nhu cầu sử dụng",
        subOptions: ["Chơi game", "Pin trâu", "Dung lượng lớn", "Cấu hình cao", "Mỏng nhẹ", "Chụp ảnh đẹp", "Nhỏ gọn", "Livestream"],
    },
    { name: "Chip xử lí", subOptions: ["Snapdragon", "MediaTek", "Apple", "Exynos"] },
    { name: "Loại điện thoại", subOptions: ["Android", "iPhone", "Phổ thông"] },
    { name: "Dung lượng RAM", subOptions: ["2GB", "4GB", "6GB", "8GB", "12GB"] },
    { name: "Bộ nhớ trong", subOptions: ["32GB", "64GB", "128GB", "256GB"] },
    { name: "Tính năng đặc biệt", subOptions: ["Kháng nước", "Mở khóa vân tay", "Sạc nhanh"] },
    { name: "Tính năng camera", subOptions: ["Chụp đêm", "Zoom quang học", "Camera góc rộng"] },
    { name: "Tần số quét", subOptions: ["60Hz", "90Hz", "120Hz"] },
    { name: "Kích thước màn hình", subOptions: ["< 6 inch", "6 - 6.5 inch", "> 6.5 inch"] },
    { name: "Kiểu màn hình", subOptions: ["AMOLED", "LCD", "OLED"] },
    { name: "Công nghệ NFC", subOptions: ["Hỗ trợ NFC", "Không hỗ trợ"] },
];

const FilterTabs = () => {
    const [open, setOpen] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({});

    const toggleDropdown = (name) => {
        setOpen(prev => prev === name ? null : name);
    };

    const toggleOption = (filterName, option) => {
        setSelectedOptions(prev => {
            const current = prev[filterName] || [];
            const updated = current.includes(option)
                ? current.filter(o => o !== option)
                : [...current, option];
            return { ...prev, [filterName]: updated };
        });
    };

    const removeSelected = (filterName, option) => {
        setSelectedOptions(prev => {
            if (option === null) {
                const updated = { ...prev };
                delete updated[filterName];
                return updated;
            }
            return {
                ...prev,
                [filterName]: prev[filterName].filter(o => o !== option)
            };
        });
    };

    const closeDropdown = () => setOpen(null);

    return (
        <>
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
                {filters.map((filter, index) => (
                    <div key={index} className="relative">
                        <button
                            onClick={() => toggleDropdown(filter.name)}
                            className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm border ${open === filter.name
                                ? "bg-white border-red-500 text-red-600 shadow"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                }`}
                        >
                            {filter.icon && <span>{filter.icon}</span>}
                            <span>{filter.name}</span>
                            {filter.subOptions && <FiChevronDown className="text-xs ml-1" />}
                        </button>

                        {/* Dropdown */}
                        {open === filter.name && filter.subOptions && (
                            <div className="absolute left-0 top-full mt-2 z-50 bg-white shadow-lg rounded-xl p-4 w-[320px]">

                                {/* Danh sách chọn */}
                                <div className="flex flex-wrap gap-2">
                                    {filter.subOptions.map((option, idx) => {
                                        const isSelected = selectedOptions[filter.name]?.includes(option);
                                        return (
                                            <div
                                                key={idx}
                                                onClick={() => toggleOption(filter.name, option)}
                                                className={`px-3 py-1 rounded-full text-sm cursor-pointer transition ${isSelected
                                                    ? "bg-red-100 text-red-600 border border-red-500"
                                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                                    }`}
                                            >
                                                {option}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Nút đóng / xem kết quả */}
                                <div className="flex justify-between items-center mt-4">
                                    <button
                                        onClick={closeDropdown}
                                        className="bg-red-50 text-red-500 px-4 py-1.5 rounded hover:bg-red-100 text-sm"
                                    >
                                        Đóng
                                    </button>
                                    <button
                                        onClick={closeDropdown}
                                        className="bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700 text-sm"
                                    >
                                        Xem kết quả
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Đang lọc theo */}
            {Object.values(selectedOptions).some(arr => arr.length > 0) && (
                <div>
                    <h3 className="mb-2 text-sm font-semibold text-gray-800">Đang lọc theo</h3>
                    <div className="flex flex-wrap gap-2 items-center">
                        {Object.entries(selectedOptions).map(([filterName, options]) =>
                            options.length > 0 && (
                                <div
                                    key={filterName}
                                    className="border border-red-500 text-red-600 bg-red-50 px-3 py-1 rounded-full flex items-center text-sm"
                                >
                                    <button
                                        onClick={() => removeSelected(filterName, null)}
                                        className="bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center mr-2"
                                    >
                                        ×
                                    </button>
                                    <span className="font-medium mr-1">{filterName}:</span>
                                    <span>{options.join(" | ")}</span>
                                </div>
                            )
                        )}
                        <button
                            onClick={() => setSelectedOptions({})}
                            className="border border-red-500 text-red-600 bg-red-50 px-3 py-1 rounded-full text-sm hover:bg-red-100"
                        >
                            × Bỏ chọn tất cả
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default FilterTabs;
