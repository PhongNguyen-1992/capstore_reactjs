import { useParams, NavLink } from "react-router-dom";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetailsAPI } from "../../Service/api_movie_js";

export default function MovieDetail() {
  const { movieID } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie-detail", movieID],
    queryFn: () => getMovieDetailsAPI(movieID),
  });

  if (isLoading) {
    return <div className="text-center py-10 text-gray-500">Đang tải...</div>;
  }

  if (isError) {
    return <div className="text-center py-10 text-red-500">Lỗi tải dữ liệu</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <NavLink
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Movie
            </NavLink>
          </li>         
          <li className="inline-flex items-center">
            <NavLink
              to="/trending-now"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
              Trending Now
            </NavLink>
          </li>
          <li className="inline-flex items-center">
            <NavLink
              to=""
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
              Movie Detail
            </NavLink>
          </li>
          
          
        </ol>
      </nav>

      {/* Movie Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Hình ảnh */}
        <div className="flex justify-center">
          <img
            src={data?.hinhAnh}
            alt={data?.tenPhim}
            className="rounded-xl shadow-lg w-full md:w-auto object-cover"
          />
        </div>

        {/* Thông tin */}
        <div className="md:col-span-2 flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {data?.tenPhim}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {data?.moTa || "Không có mô tả"}
          </p>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Ngày khởi chiếu:</span>
            {data?.ngayKhoiChieu
              ? format(new Date(data?.ngayKhoiChieu), "dd/MM/yyyy")
              : "Chưa có"}
          </div>
        </div>
      </div>
    </div>
  );
}
