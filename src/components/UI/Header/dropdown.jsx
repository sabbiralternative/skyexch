import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { Settings } from "../../../api";

export const Dropdown = ({ setShowDropdown }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="bg-white h-auto w-40 mt-[1.25rem] z-[100] absolute origin-top-right right-0 rounded-md border border-gray1 border-b-2 border-b-gray-300">
      <ul className="flex flex-col font-helvetica text-[11px]">
        <li className="p-2 text-black text-xs font-bold bg-goldenYellow">
          {user}
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/deposit"
            >
              Deposit
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/withdraw"
            >
              Withdraw
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/my-profile"
            >
              My Profile
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/account-statement"
            >
              Account Statement
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/profit-loss"
            >
              Profit Loss Report
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/my-wallet"
            >
              My Wallet
            </Link>
          </div>
        </li>
        {!Settings?.referral && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/affiliate"
              >
                Affiliate
              </Link>
            </div>
          </li>
        )}

        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/promotions"
            >
              Promotions
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/bonus-statement"
            >
              Bonus Statement
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/promotions"
            >
              Promos & Bonus
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/lossback-bonus"
            >
              Lossback Bonus
            </Link>
          </div>
        </li>

        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/my-bets"
            >
              Bet History
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/change-password"
            >
              Change Password
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/rules"
            >
              Rules and Regulations
            </Link>
          </div>
        </li>
        <li
          onClick={() => dispatch(logout())}
          className="hover:underline cursor-pointer "
        >
          <div className="text-center bg-blue4 text-white py-2 font-bold text-xs">
            Logout
          </div>
        </li>
      </ul>
    </div>
  );
};
