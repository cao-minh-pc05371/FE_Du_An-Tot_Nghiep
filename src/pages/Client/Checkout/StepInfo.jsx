import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronRight, FaCheckCircle, FaRegFolderOpen } from "react-icons/fa";
import AddressModal from "../../../components/AddressModal/AddressModal";

const addresses = [
    {
        id: 1,
        name: "Nguyen Cao Minh",
        phone: "0707734958",
        province: "TP.HCM",
        district: "Quận 5",
        ward: "Phường 1",
        street: "123 Nguyễn Văn Cừ",
    },
    {
        id: 2,
        name: "Nguyen Van A",
        phone: "0909123456",
        province: "TP.HCM",
        district: "Quận 1",
        ward: "Phường Bến Nghé",
        street: "456 Lê Lợi",
    },
];

const inputClass =
    "w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm transition";

const normalizeStr = (str) =>
    str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "");

const StepInfo = ({ onNext }) => {
    const [shipMethod, setShipMethod] = useState("store");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const [homeName, setHomeName] = useState("");
    const [homePhone, setHomePhone] = useState("");
    const [homeNote, setHomeNote] = useState("");
    const [homeStreet, setHomeStreet] = useState("");

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedWard, setSelectedWard] = useState("");

    // Fetch provinces
    useEffect(() => {
        axios.get("https://provinces.open-api.vn/api/p/").then((res) => {
            setProvinces(res.data);
        });
    }, []);

    // Fetch districts when province changes
    useEffect(() => {
        if (selectedProvince) {
            axios
                .get(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`)
                .then((res) => {
                    setDistricts(res.data.districts);
                    setSelectedDistrict("");
                    setWards([]);
                    setSelectedWard("");
                });
        }
    }, [selectedProvince]);

    // Fetch wards when district changes
    useEffect(() => {
        if (selectedDistrict) {
            axios
                .get(`https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`)
                .then((res) => {
                    setWards(res.data.wards);
                    setSelectedWard("");
                });
        }
    }, [selectedDistrict]);

    const handleSelectSavedAddress = async (addr) => {
        setSelectedAddress(addr);
        setHomeName(addr.name);
        setHomePhone(addr.phone);
        setHomeStreet(addr.street);

        try {
            const province = provinces.find(
                (p) => normalizeStr(p.name) === normalizeStr(addr.province)
            );
            if (!province) return;
            setSelectedProvince(province.code);

            const resDistricts = await axios.get(
                `https://provinces.open-api.vn/api/p/${province.code}?depth=2`
            );
            setDistricts(resDistricts.data.districts);

            const district = resDistricts.data.districts.find(
                (d) => normalizeStr(d.name) === normalizeStr(addr.district)
            );
            if (!district) return;
            setSelectedDistrict(district.code);

            const resWards = await axios.get(
                `https://provinces.open-api.vn/api/d/${district.code}?depth=2`
            );
            setWards(resWards.data.wards);

            const ward = resWards.data.wards.find(
                (w) => normalizeStr(w.name) === normalizeStr(addr.ward)
            );
            setSelectedWard(ward ? ward.code : "");
        } catch (error) {
            console.error("Error fetching location data", error);
        }
    };

    const handleUnselectSavedAddress = () => {
        setSelectedAddress(null);
        setHomeName("");
        setHomePhone("");
        setHomeStreet("");
        setSelectedProvince("");
        setSelectedDistrict("");
        setSelectedWard("");
    };


    return (
        <div className="space-y-8">
            {/* Modal chọn địa chỉ */}
            <AddressModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                addresses={addresses}
                onSelect={handleSelectSavedAddress}
                selectedId={selectedAddress?.id}
                onUnselect={handleUnselectSavedAddress}
            />

            {/* Thông tin khách hàng */}
            <div className="space-y-3">
                <h2 className="text-base font-semibold text-gray-800">Thông tin khách hàng</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <input className={inputClass} placeholder="Tên khách hàng" defaultValue="Nguyen Cao Minh" />
                    <input className={inputClass} placeholder="Số điện thoại" defaultValue="0707734958" />
                    <input className={inputClass} placeholder="Email (nếu có)" defaultValue="minhncpc05371@fpt.edu.vn" />
                </div>
                <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="accent-red-500 w-4 h-4" />
                    Nhận email thông báo và ưu đãi từ hệ thống
                </label>
            </div>

            {/* Thông tin nhận hàng */}
            <div className="space-y-3">
                <h2 className="text-base font-semibold text-gray-800">Thông tin nhận hàng</h2>
                <div className="flex flex-row items-center gap-3 sm:gap-6 text-sm">
                    <label
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer ${shipMethod === "store"
                            ? "bg-gray-100 border-red-500 text-red-600 font-medium"
                            : "border-gray-300"
                            }`}
                    >
                        <input type="radio" name="method" checked={shipMethod === "store"} onChange={() => setShipMethod("store")} />
                        Nhận tại cửa hàng
                    </label>
                    <label
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer ${shipMethod === "home"
                            ? "bg-gray-100 border-red-500 text-red-600 font-medium"
                            : "border-gray-300"
                            }`}
                    >
                        <input type="radio" name="method" checked={shipMethod === "home"} onChange={() => setShipMethod("home")} />
                        Giao hàng tận nơi
                    </label>
                </div>
            </div>

            {shipMethod === "home" && (
                <div className="space-y-3">
                    {/* Hàng tên và sđt */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            className={inputClass}
                            placeholder="Tên người nhận"
                            value={homeName}
                            onChange={(e) => setHomeName(e.target.value)}
                        />
                        <input
                            className={inputClass}
                            placeholder="Số điện thoại nhận hàng"
                            value={homePhone}
                            onChange={(e) => setHomePhone(e.target.value)}
                        />
                    </div>

                    {/* Dropdown hoặc input tỉnh, huyện, xã */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {selectedAddress ? (
                            <>
                                <input className={`${inputClass} bg-gray-100 cursor-not-allowed`} value={selectedAddress.province} readOnly />
                                <input className={`${inputClass} bg-gray-100 cursor-not-allowed`} value={selectedAddress.district} readOnly />
                                <input className={`${inputClass} bg-gray-100 cursor-not-allowed`} value={selectedAddress.ward} readOnly />
                            </>
                        ) : (
                            <>
                                <select className={inputClass} value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)}>
                                    <option value="">Chọn Tỉnh / Thành phố</option>
                                    {provinces.map((p) => (
                                        <option key={p.code} value={p.code}>{p.name}</option>
                                    ))}
                                </select>

                                <select className={inputClass} value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} disabled={!districts.length}>
                                    <option value="">Chọn Quận / Huyện</option>
                                    {districts.map((d) => (
                                        <option key={d.code} value={d.code}>{d.name}</option>
                                    ))}
                                </select>

                                <select className={inputClass} value={selectedWard} onChange={(e) => setSelectedWard(e.target.value)} disabled={!wards.length}>
                                    <option value="">Chọn Phường / Xã</option>
                                    {wards.map((w) => (
                                        <option key={w.code} value={w.code}>{w.name}</option>
                                    ))}
                                </select>
                            </>
                        )}
                    </div>

                    {/* Địa chỉ chi tiết */}
                    <div className="grid grid-cols-1 gap-4">
                        <input className={`${inputClass} ${selectedAddress ? "bg-gray-100 cursor-not-allowed" : ""}`} placeholder="Số nhà, tên đường" value={homeStreet} readOnly={!!selectedAddress} onChange={(e) => setHomeStreet(e.target.value)} />
                        <input className={inputClass} placeholder="Ghi chú thêm (nếu có)" value={homeNote} onChange={(e) => setHomeNote(e.target.value)} />
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className={`flex items-center justify-center gap-2 w-50 px-4 py-3 rounded-lg transition text-sm border ${selectedAddress
                            ? "bg-green-100 border-green-400 text-green-700 hover:bg-green-200"
                            : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {selectedAddress ? (
                            <>
                                <FaCheckCircle className="text-green-500" />
                                Đã chọn
                            </>
                        ) : (
                            <>
                                <FaRegFolderOpen className="text-gray-500" />
                                Chọn địa chỉ đã lưu
                            </>
                        )}
                    </button>
                </div>
            )}

            {shipMethod === "store" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input className={inputClass} placeholder="Tỉnh / Thành phố" defaultValue="Cần Thơ" />
                    <input className={inputClass} placeholder="Quận / Huyện" />
                    <input className={`${inputClass} sm:col-span-2`} placeholder="Địa chỉ cửa hàng" />
                    <input className={`${inputClass} sm:col-span-2`} placeholder="Ghi chú thêm (nếu có)" />
                </div>
            )}

            <div className="text-right">
                <button onClick={onNext} className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-medium transition">
                    Tiếp tục <FaChevronRight className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default StepInfo;
