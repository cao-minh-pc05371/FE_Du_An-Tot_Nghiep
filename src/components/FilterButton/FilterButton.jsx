import React from "react";
import { FiChevronDown } from "react-icons/fi";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function FilterButton(props) {
    function handleClick() {
        props.toggleDropdown(props.filter.name);
    }

    const hasSelection = props.selectedOptions[props.filter.name]?.length > 0;

    return (
        <div className="relative">
            <button
                onClick={handleClick}
                className={
                    "flex items-center gap-1 px-4 py-2 rounded-full text-sm border " +
                    (
                        props.open === props.filter.name
                            ? "bg-white border-red-500 text-red-600 shadow"
                            : hasSelection
                                ? "bg-red-50 border-red-500 text-red-600"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    )
                }
            >
                {props.filter.icon && <span>{props.filter.icon}</span>}
                <span>{props.filter.name}</span>
            </button>

            {/* Bộ lọc tổng dropdown responsive */}
            {props.open === props.filter.name && props.filter.name === "Bộ lọc" && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-center items-center md:absolute md:inset-auto md:left-0 md:top-full md:mt-2 md:bg-transparent md:block">
                    <div className="relative bg-white rounded-t-xl md:rounded-xl p-0 w-full max-w-md h-auto max-h-[70vh] overflow-y-auto md:w-[800px] md:max-w-[800px] md:max-h-[40vh] shadow-lg">

                        {/* Header sticky */}
                        <div className="sticky top-0 bg-white px-4 py-3 border-b flex justify-between items-center">
                            <h3 className="text-lg md:text-xl font-semibold">Bộ lọc sản phẩm</h3>
                            <button
                                onClick={props.closeDropdown}
                                className="md:hidden text-gray-500 hover:text-gray-700 text-xl"
                            >
                                Huỷ
                            </button>
                        </div>

                        {/* Content */}
                        <div className="px-4 py-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {props.filters.map(function (filter, index) {
                                    if (!filter.subOptions) return null;
                                    return (
                                        <div key={index}>
                                            <h4 className="font-medium mb-2 text-sm md:text-base">{filter.name}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {filter.subOptions.map(function (option, idx) {
                                                    const isSelected = props.selectedOptions[filter.name]?.includes(option);
                                                    function handleOptionClick() {
                                                        props.toggleOption(filter.name, option);
                                                    }
                                                    return (
                                                        <div
                                                            key={idx}
                                                            onClick={handleOptionClick}
                                                            className={
                                                                "px-3 py-1 rounded-full text-xs md:text-sm cursor-pointer transition " +
                                                                (isSelected
                                                                    ? "bg-red-100 text-red-600 border border-red-500"
                                                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200")
                                                            }
                                                        >
                                                            {option}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Footer sticky */}
                        <div className="sticky bottom-0 bg-white px-4 py-3 border-t flex flex-col md:flex-row justify-between items-center gap-2">
                            <button
                                onClick={props.resetOptions}
                                className="w-full md:w-auto bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm"
                            >
                                Thiết lập lại
                            </button>
                            <button
                                onClick={props.closeDropdown}
                                className="w-full md:w-auto bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
                            >
                                Xem kết quả
                            </button>
                        </div>

                    </div>
                </div>
            )}

            {/* Filter giá */}
            {props.open === props.filter.name && props.isPrice && (
                <div className="absolute left-1/2 sm:left-0 top-full mt-2 z-40 bg-white shadow-lg rounded-xl p-4 w-[240px] sm:w-[320px] transform -translate-x-1/2 sm:translate-x-0">
                    <h3 className="text-center font-semibold mb-4 text-sm sm:text-base">
                        Hãy chọn mức giá phù hợp với bạn
                    </h3>

                    <div className="flex items-center justify-between mb-4">
                        <input
                            type="text"
                            value={new Intl.NumberFormat('vi-VN').format(props.minPrice)}
                            onChange={(e) => {
                                const raw = e.target.value.replace(/\D/g, '');
                                props.handleMinChange({ target: { value: Number(raw) } });
                            }}
                            className="border rounded px-2 py-1 w-[45%]"
                        />
                        <span>-</span>
                        <input
                            type="text"
                            value={new Intl.NumberFormat('vi-VN').format(props.maxPrice)}
                            onChange={(e) => {
                                const raw = e.target.value.replace(/\D/g, '');
                                props.handleMaxChange({ target: { value: Number(raw) } });
                            }}
                            className="border rounded px-2 py-1 w-[45%]"
                        />
                    </div>

                    <Slider
                        range
                        min={0}
                        max={50000000}
                        step={100000}
                        value={[props.minPrice, props.maxPrice]}
                        onChange={props.handleSliderChange}
                        trackStyle={[{ backgroundColor: "#dc2626", height: 6 }]}
                        handleStyle={[
                            { borderColor: "#dc2626", backgroundColor: "#dc2626" },
                            { borderColor: "#dc2626", backgroundColor: "#dc2626" },
                        ]}
                        railStyle={{ height: 6 }}
                    />

                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={props.closeDropdown}
                            className="bg-red-50 text-red-500 px-4 py-1.5 rounded hover:bg-red-100 text-sm"
                        >
                            Đóng
                        </button>
                        <button
                            onClick={props.closeDropdown}
                            className="bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700 text-sm"
                        >
                            Xem kết quả
                        </button>
                    </div>
                </div>
            )}

            {/* Filter subOptions nhỏ */}
            {props.open === props.filter.name && props.filter.subOptions && props.filter.name !== "Bộ lọc" && !props.isPrice && (
                <div className="absolute left-0 top-full mt-2 z-40 bg-white shadow-lg rounded-xl p-4 w-[320px]">
                    <div className="flex flex-wrap gap-2">
                        {props.filter.subOptions.map(function (option, idx) {
                            const isSelected = props.selectedOptions[props.filter.name]?.includes(option);
                            function handleOptionClick() {
                                props.toggleOption(props.filter.name, option);
                            }
                            return (
                                <div
                                    key={idx}
                                    onClick={handleOptionClick}
                                    className={
                                        "px-3 py-1 rounded-full text-sm cursor-pointer transition " +
                                        (isSelected
                                            ? "bg-red-100 text-red-600 border border-red-500"
                                            : "bg-gray-100 text-gray-800 hover:bg-gray-200")
                                    }
                                >
                                    {option}
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={props.closeDropdown}
                            className="bg-red-50 text-red-500 px-4 py-1.5 rounded hover:bg-red-100 text-sm"
                        >
                            Đóng
                        </button>
                        <button
                            onClick={props.closeDropdown}
                            className="bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700 text-sm"
                        >
                            Xem kết quả
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FilterButton;
