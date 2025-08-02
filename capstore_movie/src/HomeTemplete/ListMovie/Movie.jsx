import React from "react";
import { useNavigate } from "react-router-dom";

export default function Movie({ movie }) {
  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate(`/movie-detail/${movie.maPhim}`);
  };

  const handleBooking = (e) => {
    e.stopPropagation(); // Ngăn click lan ra card
    navigate(`/booking/${movie.maPhim}`);
  };

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
    >
      {/* Hình ảnh - click vào ảnh để xem chi tiết */}
      <div onClick={handleViewDetail} className="cursor-pointer">
        <img
          className="w-full h-64 object-cover"
          src={movie.hinhAnh}
          alt={movie.tenPhim}
        />
      </div>

      {/* Nội dung */}
      <div className="p-5 flex flex-col gap-4">
        <h5
          onClick={handleViewDetail}
          className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2 cursor-pointer"
        >
          {movie.tenPhim}
        </h5>

        {/* Nút đặt vé */}
        <button
          onClick={handleBooking}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
        >
          Đặt vé
        </button>
      </div>
    </div>
  );
}
