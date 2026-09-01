import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { Settings } from "../../../api";
import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";

export const Dropdown = ({ setShowDropdown }) => {
  const { getLanguage } = useLanguage();
  const closePopupForForever = localStorage.getItem("closePopupForForever");
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOpenSocialLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const handleDownloadAPK = (e) => {
    e.preventDefault();
    if (Settings.apk_link) {
      const fileUrl = Settings.apk_link;
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", "site.apk");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }
  };
  return (
    <div className="bg-white h-auto w-40 mt-[1.25rem] z-[100] absolute origin-top-right right-0 rounded-md border border-gray1 border-b-2 border-b-gray-300">
      <ul className="flex flex-col font-helvetica text-[11px]">
        <li className="p-2 text-black text-xs font-bold bg-goldenYellow">
          {user}
        </li>
        {Settings?.branchWhatsapplink && (
          <li
            onClick={() => handleOpenSocialLink(Settings?.branchWhatsapplink)}
            className="hover:underline cursor-pointer border-b border-b-gray18"
          >
            <div className="px-2 py-1">
              <a
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
              >
                {getLanguage(LanguageKey.CUSTOMER_SUPPORT)}
              </a>
            </div>
          </li>
        )}
        {Settings.deposit && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/deposit"
              >
                {getLanguage(LanguageKey.DEPOSIT)}
              </Link>
            </div>
          </li>
        )}
        {Settings.withdraw && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/withdraw"
              >
                {getLanguage(LanguageKey.WITHDRAW)}
              </Link>
            </div>
          </li>
        )}

        {Settings.deposit && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/deposit-report"
              >
                {getLanguage(LanguageKey.DEPOSIT_STATEMENT)}
              </Link>
            </div>
          </li>
        )}
        {Settings.withdraw && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/withdraw-report"
              >
                {getLanguage(LanguageKey.WITHDRAW_STATMENT)}
              </Link>
            </div>
          </li>
        )}

        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/open-bets"
            >
              {getLanguage(LanguageKey.OPEN_BETS)}
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/betting-profit-loss"
            >
              {getLanguage(LanguageKey.BETTING_PROFIT_AND_LOSS)}
            </Link>
          </div>
        </li>
        {Settings.withdraw && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/my-bank-details"
              >
                {getLanguage(LanguageKey.MY_BANK_DETAILS)}
              </Link>
            </div>
          </li>
        )}

        {Settings?.referral && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/affiliate"
              >
                {getLanguage(LanguageKey.AFFILIATE)}
              </Link>
            </div>
          </li>
        )}
        {Settings.b2c && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/promotions"
              >
                {getLanguage(LanguageKey.PROMOTIONS)}
              </Link>
            </div>
          </li>
        )}
        {Settings.b2c && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/bonus-statement"
              >
                {getLanguage(LanguageKey.BONUS_STATEMENT)}
              </Link>
            </div>
          </li>
        )}
        {Settings.b2c && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/promotions"
              >
                {getLanguage(LanguageKey.PROMOTION_AND_BONUSES)}
              </Link>
            </div>
          </li>
        )}
        {Settings.b2c && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/lossback-bonus"
              >
                {getLanguage(LanguageKey.LOSSBACK_BONUS)}
              </Link>
            </div>
          </li>
        )}

        {closePopupForForever && Settings.b2c && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/app-only-bonus"
              >
                {getLanguage(LanguageKey.APP_ONLY_BONUS)}
              </Link>
            </div>
          </li>
        )}

        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/change-password"
            >
              {getLanguage(LanguageKey.CHANGE_PASSWORD)}
            </Link>
          </div>
        </li>
        {Settings.apk_link && (
          <li
            onClick={handleDownloadAPK}
            className="hover:underline cursor-pointer border-b border-b-gray18"
          >
            <div className="px-2 py-1">
              <a
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
              >
                {getLanguage(LanguageKey.DOWNLOAD_APK)}
              </a>
            </div>
          </li>
        )}

        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/rules"
            >
              {getLanguage(LanguageKey.RULES_AND_REGULATION)}
            </Link>
          </div>
        </li>
        <li
          onClick={() => dispatch(logout())}
          className="hover:underline cursor-pointer "
        >
          <div className="text-center bg-blue4 text-white py-2 font-bold text-xs">
            {getLanguage(LanguageKey.LOGOUT)}
          </div>
        </li>
      </ul>
    </div>
  );
};
