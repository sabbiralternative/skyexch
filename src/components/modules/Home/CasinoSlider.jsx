import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CasinoSlider = ({ data, title }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleNavigateToIFrame = (casino) => {
    if (!token) return navigate("/login");
    navigate(`/casino/${casino?.name?.replace(/ /g, "")}/${casino?.id}`);
  };

  return (
    <div className="flex flex-col gap-0.5">
      <h2 className="text-[13px] md:text-[16px] px-1.5 py-1 font-bold bg-goldenYellow text-black">
        {title}
      </h2>
      <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar">
        {data?.map((casino) => {
          return (
            <div
              onClick={() => handleNavigateToIFrame(casino)}
              key={casino?.id}
              className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]"
            >
              <div className="relative overflow-hidden flex-1">
                <img
                  loading="lazy"
                  src={casino?.url_thumb}
                  alt={casino?.name}
                  className="w-full h-full cursor-pointer object-cover"
                />
                <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                  <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                    <span className="truncate">{casino?.name}</span>
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                  >
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CasinoSlider;
