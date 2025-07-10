import { FaSortAmountDown, FaSortAmountUp, FaPercent, FaEye } from "react-icons/fa";

const SortBar = ({ sortType, setSortType }) => {
    const sorts = [
        { label: "Phổ biến", value: "popular", icon: <FaEye /> },
        { label: "Khuyến mãi", value: "discount", icon: <FaPercent /> },
        { label: "Giá ↑", value: "price-asc", icon: <FaSortAmountUp /> },
        { label: "Giá ↓", value: "price-desc", icon: <FaSortAmountDown /> },
    ];

    const renderSortButtons = () => {
        return sorts.map((item) => {
            const isActive = sortType === item.value;
            const baseClass = "flex-shrink-0 px-3 py-2 text-sm whitespace-nowrap transition-colors duration-200";

            const mobileClass = isActive
                ? "border-b-2 border-red-500 text-red-600 font-semibold"
                : "border-b-2 border-transparent text-gray-600 hover:text-red-500";

            const desktopClass = isActive
                ? "sm:bg-blue-50 sm:text-blue-600 sm:border sm:border-blue-500 sm:font-semibold"
                : "sm:bg-gray-100 sm:text-gray-800 sm:border sm:border-transparent sm:hover:bg-gray-200";

            return (
                <button
                    key={item.value}
                    onClick={() => setSortType(item.value)}
                    className={`flex items-center ${baseClass} ${mobileClass} ${desktopClass} sm:rounded-full`}
                >
                    <span className="hidden sm:inline mr-1">{item.icon}</span>
                    {item.label}
                </button>

            );
        });
    };

    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <h1 className="text-sm sm:text-xl font-bold text-gray-800 mb-2 sm:mb-0">
                Sắp xếp theo
            </h1>

            <div className="flex flex-nowrap overflow-x-auto gap-2 border-b sm:border-0">
                {renderSortButtons()}
            </div>
        </div>
    );
};

export default SortBar;
