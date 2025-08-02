import { getListMovieAPI } from "../../Service/api_movie_js";
import Movie from "./Movie";
import { useQuery } from "@tanstack/react-query";


export default function ListMovie() {
  // tránh gọi lại API
  const handleRefetch = () =>{refetch()}
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["list-movie"],
    // queryFn phải là function asyn - await hoặc try -catch
    queryFn: () => {
      return getListMovieAPI("GP01"); // khi API chạy thành công hàm getListMovieApi trả về gì thành data useQuery nhận nos
    },
  });
  // Trạng Thái Loadding
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-semibold text-gray-700 dark:text-white animate-pulse">
          Đang tải<span className="animate-bounce">...</span>
        </p>
      </div>
    );
  // Trạng Thái Lỗi
  if (isError)
    return (
      <div>
        Đã có lỗi xảy ra. Vui lòng thử lại!
        <button onClick={handleRefetch} className="p-3 text-sm rounded-sn bg-blue-600 text-white">
          Thử Lại
        </button>
      </div>
    );
  // Trạng Thái OK
  const renderMovie = () => {
    if (data) {
      return data.map((movie) => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderMovie()}
      </div>
    </div>
  );
}
