import Navigation from "../components/Navigation";

export default function Profile() {
  return (
    <div className="min-h-screen bg-white pb-20 px-4 pt-6 space-y-6">
      {/* Foydalanuvchi ma'lumotlari */}
      <div className="bg-white rounded-lg shadow p-4 border space-y-2">
        <h3 className="text-gray-800 font-semibold">👤 Foydalanuvchi ma'lumotlari</h3>
        <p><span className="text-gray-500">Ism</span><br /><span className="text-lg font-medium">Aliyev Anvar</span></p>
        <p><span className="text-gray-500">Status</span><br /><span className="text-lg font-medium">Oddiy</span></p>
      </div>

      {/* Status o'zgartirish */}
      <div className="bg-white rounded-lg shadow p-4 border space-y-3">
        <h3 className="text-gray-800 font-semibold">Status o'zgartirish</h3>
        <p className="text-gray-500">Hozirgi status: <span className="font-medium text-black">Oddiy</span></p>

        <div className="flex space-x-2">
          <button className="flex-1 bg-black text-white py-2 rounded-md font-semibold">Oddiy</button>
          <button className="flex-1 border border-black py-2 rounded-md font-semibold">
            👑 Premium
          </button>
        </div>
      </div>

      {/* Pastdagi navigatsiya */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow p-2">
        <Navigation />
      </div>
    </div>
  );
}
