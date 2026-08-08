import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import { eventNameList } from "../../../static/event-name-list";
import { useGroupQuery } from "../../../hooks/group";

const EventNameList = ({ eventTypeId }) => {
  const { data } = useGroupQuery({ sportsType: Number(0) });
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token, bonusToken } = useSelector((state) => state.auth);

  const handleNavigateToIFrame = (name, id) => {
    if (token) {
      if (bonusToken) {
        return toast.error("Bonus wallet is available only on sports.");
      }
      if (Settings.casino_currency !== "AED") {
        navigate(`/casino/${name}/${id}`);
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: name, gameId: id });
        setShowWarning(true);
      }
    } else {
      toast.error("Please login to access the game");
    }
  };

  const groupedData = useMemo(() => {
    if (!data)
      return {
        cricket: 0,
        football: 0,
        tennis: 0,
        horseRace: 0,
        greyhound: 0,
        kabaddi: 0,
        politics: 0,
      };

    return Object.values(data).reduce(
      (acc, value) => {
        if (!value.visible) return acc;
        if (value.inPlay === 0) return acc;
        if (value.eventTypeId === 4) acc.cricket++;
        if (value.eventTypeId === 2) acc.tennis++;
        if (value.eventTypeId === 1) acc.football++;
        if (value.eventTypeId === 7) acc.horseRace++;
        if (value.eventTypeId === 4339) acc.greyhound++;
        if (value.eventTypeId === 5) acc.kabaddi++;
        if (value.eventTypeId === 6) acc.politics++;

        return acc;
      },
      {
        cricket: 0,
        football: 0,
        tennis: 0,
        horseRace: 0,
        greyhound: 0,
        kabaddi: 0,
        politics: 0,
      },
    );
  }, [data]);
  return (
    <div className="flex flex-col flex-0 md:gap-[1px]">
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <div className="flex flex-col md:gap-[1px] overflow-hidden">
        <div className="relative">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            className="w-10 h-10 p-1 text-white bg-gradient-to-b from-blue10 to-blue11 absolute right-[1px] top-1/2 -translate-y-1/2 z-10"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z" />
          </svg>
          <div className="flex hide-scrollbar bg-sub-header-gradient overflow-x-scroll pr-10 relative">
            <div className="relative">
              <Link
                aria-current="page"
                className={`flex justify-center items-end mt-2 gap-[2px] font-[400] px-7 py-2 text-[14px] whitespace-nowrap 
                       font-sans text-[13px] font-[600] ${eventTypeId == 4 || !eventTypeId ? "bg-black1 border-x border-t border-white rounded-t-[8px] text-[#ffb600]" : "text-black"}`}
                to="/sports/?eventTypeId=4"
              >
                Cricket
                {groupedData?.cricket > 0 && (
                  <span className="inline-flex items-center rounded bg-white text-[10px] font-normal text-red-500 absolute top-0 m-auto">
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-radio h-3 w-3 shrink-0 text-red-500"
                      >
                        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                        <circle cx={12} cy={12} r={2} />
                        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                        <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                      </svg>
                    </div>
                    <div className="bg-red-500 text-white font-bold rounded-r px-1">
                      {groupedData?.cricket}
                    </div>
                  </span>
                )}
              </Link>
            </div>
            <div className="relative">
              <Link
                className={`flex justify-center items-end mt-2 gap-[2px] font-[400] px-7 py-2 text-[14px] whitespace-nowrap 
                       font-sans text-[13px] font-[600] ${eventTypeId == 1 ? "bg-black1 border-x border-t border-white rounded-t-[8px] text-[#ffb600]" : "text-black"}`}
                to="/sports/?eventTypeId=1"
              >
                Football
                {groupedData?.football > 0 && (
                  <span className="inline-flex items-center rounded bg-white text-[10px] font-normal text-red-500 absolute top-0 m-auto">
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-radio h-3 w-3 shrink-0 text-red-500"
                      >
                        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                        <circle cx={12} cy={12} r={2} />
                        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                        <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                      </svg>
                    </div>
                    <div className="bg-red-500 text-white font-bold rounded-r px-1">
                      {groupedData?.football}
                    </div>
                  </span>
                )}
              </Link>
            </div>
            <div className="relative">
              <Link
                className={`flex justify-center items-end mt-2 gap-[2px] font-[400] px-7 py-2 text-[14px] whitespace-nowrap 
                       font-sans text-[13px] font-[600] ${eventTypeId == 2 ? "bg-black1 border-x border-t border-white rounded-t-[8px] text-[#ffb600]" : "text-black"}`}
                to="/sports/?eventTypeId=2"
              >
                Tennis
                {groupedData?.tennis > 0 && (
                  <span className="inline-flex items-center rounded bg-white text-[10px] font-normal text-red-500 absolute top-0 m-auto">
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-radio h-3 w-3 shrink-0 text-red-500"
                      >
                        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                        <circle cx={12} cy={12} r={2} />
                        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                        <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                      </svg>
                    </div>
                    <div className="bg-red-500 text-white font-bold rounded-r px-1">
                      {groupedData?.tennis}
                    </div>
                  </span>
                )}
              </Link>
            </div>
            {/* <div className="relative">
              <Link
                className="flex justify-center items-end mt-2 gap-[2px] font-[400] px-7 py-2 text-[14px] whitespace-nowrap  text-black
                       font-sans text-[13px] font-[600]"
                to="/dc/gamev1.1/cockfight-NDAwMzMy-U1YtTElWRS0wMDE=-QVdD-U1YzODg=-R0FQ"
              >
                Cock Fight
              </Link>
            </div> */}
            <div className="relative">
              <Link
                className="flex justify-center items-end mt-2 gap-[2px] font-[400] px-7 py-2 text-[14px] whitespace-nowrap  text-black
                      animate-highlight rounded-t-lg font-sans text-[13px] font-[600]"
                to="/casino?product=All&category=All"
              >
                Casino
              </Link>
            </div>
            <div className="relative">
              <a
                className="flex justify-center items-end mt-2 gap-[2px] font-[400] px-7 py-2 text-[14px] whitespace-nowrap  text-black
                       font-sans text-[13px] font-[600]"
                onClick={() => handleNavigateToIFrame("sportsbook", "550000")}
              >
                Sportsbook
              </a>
            </div>
            <div className="relative">
              <Link
                className={`flex justify-center items-end mt-2 gap-[2px] font-[400] px-7 py-2 text-[14px] whitespace-nowrap 
                       font-sans text-[13px] font-[600] ${eventTypeId == 7 ? "bg-black1 border-x border-t border-white rounded-t-[8px] text-[#ffb600]" : "text-black"}`}
                to="/sports/?eventTypeId=7"
              >
                Horse Racing
              </Link>
            </div>
            <div className="relative">
              <Link
                className={`flex justify-center items-end mt-2 gap-[2px] font-[400] px-7 py-2 text-[14px] whitespace-nowrap 
                       font-sans text-[13px] font-[600] ${eventTypeId == 4339 ? "bg-black1 border-x border-t border-white rounded-t-[8px] text-[#ffb600]" : "text-black"}`}
                to="/sports/?eventTypeId=4339"
              >
                Greyhound Racing
              </Link>
            </div>
            <div className="relative">
              <Link
                className={`flex justify-center items-end mt-2 gap-[2px] font-[400] px-7 py-2 text-[14px] whitespace-nowrap 
                       font-sans text-[13px] font-[600] ${eventTypeId == 5 ? "bg-black1 border-x border-t border-white rounded-t-[8px] text-[#ffb600]" : "text-black"}`}
                to="/sports/?eventTypeId=5"
              >
                Kabaddi
              </Link>
            </div>
            <div className="relative">
              <Link
                className={`flex justify-center items-end mt-2 gap-[2px] font-[400] px-7 py-2 text-[14px] whitespace-nowrap 
                       font-sans text-[13px] font-[600] ${eventTypeId == 6 ? "bg-black1 border-x border-t border-white rounded-t-[8px] text-[#ffb600]" : "text-black"}`}
                to="/sports/?eventTypeId=6"
              >
                Politics
              </Link>
            </div>
            {eventNameList.map((item) => {
              return (
                <Link
                  key={item.id}
                  className={`flex justify-center items-end mt-2 gap-[2px] font-[400] px-7 py-2 text-[14px] whitespace-nowrap 
                       font-sans text-[13px] font-[600] ${eventTypeId == item.id ? "bg-black1 border-x border-t border-white rounded-t-[8px] text-[#ffb600]" : "text-black"}`}
                  to={`/sports/?eventTypeId=${item.id}`}
                >
                  <div className="flex items-center justify-center gap-1">
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventNameList;
