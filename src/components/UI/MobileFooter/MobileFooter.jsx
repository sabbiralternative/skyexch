import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";

const MobileFooter = () => {
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
  return (
    <div className="md:hidden">
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <div className="grid grid-cols-5 items-center fixed bottom-0 w-full bg-mobile-footer-background-color z-20 h-[60px]">
        <a
          className="flex flex-col items-center justify-center h-full"
          onClick={() => handleNavigateToIFrame("sportsbook", "550000")}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-[24px] w-[24px] text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="text-white text-xs text-center">Sportsbook</div>
        </a>
        <Link
          className="flex flex-col items-center justify-center h-full"
          to="/exchange_sports/inplay/0"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            className="h-[24px] w-[24px] text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M470 124.837l-98.443-81.78-27.814 32.931 98.442 81.769L470 124.837zM167.192 74.919L139.366 42 42 124.837l27.814 32.919 97.378-82.837zm99.509 97.709H234.6v127.446l101.649 60.539L352.3 334.06l-85.6-49.917V172.628zM256 87.665c-107 0-192.601 86.021-192.601 191.166C63.399 383.98 149 470 256 470c105.936 0 192.601-86.02 192.601-191.169 0-105.144-86.665-191.166-192.601-191.166zm0 339.855c-82.393 0-149.8-66.906-149.8-148.688 0-81.777 67.407-148.684 149.8-148.684 82.394 0 149.8 66.906 149.8 148.684 0 82.839-67.406 148.688-149.8 148.688z" />
          </svg>
          <div className="text-white text-xs text-center">In-Play</div>
        </Link>
        <Link
          className="flex flex-col items-center justify-center h-full"
          to="/"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            className="h-[24px] w-[24px] text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z" />
            <path d="m490.91 244.15-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" />
          </svg>
          <div className="text-white text-xs text-center">Home</div>
        </Link>
        <Link
          to="/casino?product=All&category=All"
          className="flex flex-col items-center justify-center h-full"
        >
          <img
            src="data:image/png;base64,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"
            alt="Casino icon"
            className="w-7 h-7 filter invert brightness-200"
          />
          <div className="text-white text-xs text-center">Casino</div>
        </Link>
        <Link
          className="flex flex-col items-center justify-center h-full"
          to={token ? "/account" : "/login"}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 448 512"
            className="h-[24px] w-[24px] text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <div className="text-white text-xs text-center">Account</div>
        </Link>
      </div>
    </div>
  );
};

export default MobileFooter;
