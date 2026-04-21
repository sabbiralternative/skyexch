import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HighlightCasino = ({ highlight_casino }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleNavigateToIFrame = (casino) => {
    if (!token) return navigate("/login");
    navigate(`/casino?product=${casino?.product}&category=${casino?.category}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-0.5">
      {highlight_casino?.map((item) => {
        return (
          <div
            onClick={() => handleNavigateToIFrame(item)}
            key={item?.id}
            className="hidden md:block relative"
          >
            <img
              src={item?.url_thumb}
              alt={item?.name}
              className="w-[100%] cursor-pointer"
            />
            <div className="flex w-full h-[33px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-goldenYellow">
              <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-xs md:text-sm font-bold cursor-pointer min-w-0 uppercase break-words">
                {item?.name}
              </div>
              <button
                type="button"
                className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
              >
                Play Now
              </button>
            </div>
          </div>
        );
      })}

      {highlight_casino?.map((item) => {
        return (
          <div
            onClick={() => handleNavigateToIFrame(item)}
            key={item?.id}
            className="md:hidden relative"
          >
            <img
              src={item?.url_thumb}
              alt={item?.name}
              className="w-[100%] h-[100px] sm:h-[113px] cursor-pointer"
            />
            <div className="flex w-full flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-goldenYellow">
              <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-xs md:text-sm font-bold cursor-pointer min-w-0 capitalize break-words">
                {item?.name}
              </div>
              <button
                type="button"
                className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
              >
                Play Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HighlightCasino;
