import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import { getBannerAPI } from "../../Service/api_banner_js";

export default function ListBanner() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["list-banner"],
    queryFn: getBannerAPI,
  });

  const handleRefetch = () => refetch();

  if (isLoading) {
    return <div className="text-center p-4">Đang tải banner...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        <p>Đã có lỗi xảy ra khi tải banner.</p>
        <button onClick={handleRefetch} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Thử lại
        </button>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <Slider {...settings}>
        {data?.map((banner) => (
          <div key={banner.maBanner}>
            <img
              src={banner.hinhAnh}
              alt={banner.maBanner}
               className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
