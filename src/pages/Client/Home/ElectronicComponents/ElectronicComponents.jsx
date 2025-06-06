const ElectronicComponents = () => {
  const categories = [
    {
      name: "PC ráp sẵn CellphoneS",
      image: "link_anh_1",
      bgColor: "bg-red-300",
    },
    { name: "CPU", image: "link_anh_2", bgColor: "bg-pink-300" },
    { name: "Mainboard", image: "link_anh_3", bgColor: "bg-pink-400" },
    { name: "RAM", image: "link_anh_4", bgColor: "bg-purple-300" },
    { name: "Ổ cứng", image: "link_anh_5", bgColor: "bg-blue-300" },
    { name: "Card màn hình", image: "link_anh_6", bgColor: "bg-blue-400" },
    { name: "Nguồn máy tính", image: "link_anh_7", bgColor: "bg-green-300" },
    { name: "Tản nhiệt", image: "link_anh_8", bgColor: "bg-yellow-300" },
    { name: "Case máy tính", image: "link_anh_9", bgColor: "bg-orange-300" },
  ];

  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">LINH KIỆN MÁY TÍNH</h1>
        <button className="text-sm text-black-600 hover:underline">
          Xem tất cả
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`${cat.bgColor} rounded-lg p-3 flex flex-col items-center text-white shadow-md transition-transform hover:scale-105 cursor-pointer`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-15 h-15 object-contain mb-2"
            />
            <p className="text-center text-sm font-semibold">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicComponents;
