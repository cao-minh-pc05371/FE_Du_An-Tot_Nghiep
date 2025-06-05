import { FaSortAmountDown, FaSortAmountUp, FaPercent, FaEye } from "react-icons/fa";

const SortBar = ({ sortType, setSortType }) => {
    const sorts = [
        { label: "Giá Cao - Thấp", value: "price-desc", icon: <FaSortAmountDown /> },
        { label: "Giá Thấp - Cao", value: "price-asc", icon: <FaSortAmountUp /> },
        { label: "Khuyến Mãi Hot", value: "discount", icon: <FaPercent /> },
        { label: "Xem nhiều", value: "popular", icon: <FaEye /> },
    ];

    return (
        <div className="flex flex-wrap gap-2 items-center">
            <span className="font-semibold text-[17px]">Sắp xếp theo</span>
            {sorts.map((item) => (
                <button
                    key={item.value}
                    onClick={() => setSortType(item.value)}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm border ${sortType === item.value
                            ? "bg-red-600 text-white border-red-600"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-transparent"
                        }`}
                >
                    {item.icon} {item.label}
                </button>
            ))}
        </div>
    );
};

export default SortBar;
