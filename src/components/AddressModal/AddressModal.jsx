import React from "react";

const AddressModal = ({
    isOpen,
    onClose,
    addresses,
    onSelect,
    selectedId,
    onUnselect,
}) => {
    if (!isOpen) return null;

    const handleClick = (addr) => {
        if (selectedId === addr.id) {
            onUnselect(); // Bỏ chọn nếu click lại
        } else {
            onSelect(addr);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
            <div className="bg-white rounded-lg w-full max-w-md sm:max-w-lg p-4 sm:p-6 shadow-xl relative max-h-[80vh] overflow-y-auto">
                <h2 className="text-base sm:text-lg font-semibold mb-4 text-center">
                    Chọn địa chỉ giao hàng
                </h2>

                <div className="space-y-3">
                    {addresses.map((addr) => (
                        <div
                            key={addr.id}
                            onClick={() => handleClick(addr)}
                            className={`p-3 sm:p-4 border rounded-md cursor-pointer transition text-sm sm:text-base ${
                                selectedId === addr.id
                                    ? "bg-green-100 border-green-400 text-green-700 font-medium hover:bg-green-200"
                                    : "border-gray-200 hover:bg-gray-50"
                            }`}
                        >
                            <div className="font-medium">
                                {addr.name} - {addr.phone}
                            </div>
                            <div className="text-gray-600 text-xs sm:text-sm mt-1">
                                {addr.street}, {addr.ward}, {addr.district}, {addr.province}
                            </div>
                            {selectedId === addr.id && (
                                <div className="text-green-600 text-xs mt-1">Đã chọn</div>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default AddressModal;
