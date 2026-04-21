import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OurProvider = ({ our_provider }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleNavigateToIFrame = (casino) => {
    if (!token) return navigate("/login");
    navigate(`/casino?product=${casino?.product}&category=${casino?.category}`);
  };
  return (
    <div>
      <div className="w-full py-[6px] px-[5px] text-[13px] md:text-[16px] uppercase my-[2px] font-bold text-black bg-goldenYellow">
        Top Providers
      </div>
      <div>
        <div className="grid grid-cols-3 pb-[1rem] md:mt-1 md:grid-cols-4 md:gap-1 gap-[1px] w-full">
          {our_provider?.map((item) => {
            return (
              <div
                onClick={() => handleNavigateToIFrame(item)}
                key={item?.id}
                className="w-full cursor-pointer"
              >
                <img
                  src={`/${item?.url_thumb}`}
                  alt={item?.name}
                  className="w-full sm:h-[200px]"
                />
                <div className="hidden md:block">
                  <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                    <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                      {item?.name}
                    </span>
                    <div className="button-wrapper">
                      <button className="home-animated">
                        <span />
                        <span />
                        <span />
                        <span />
                        Play Now
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 256 256"
                          className="w-2 h-2 text-[darkred]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurProvider;
