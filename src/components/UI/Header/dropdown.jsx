import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";

export const Dropdown = () => {
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
            <a className="cursor-pointer" href="/my-profile">
              My Profile
            </a>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <a className="cursor-pointer" href="/account-statement">
              Account Statement
            </a>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <a className="cursor-pointer" href="/profit-loss">
              Profit Loss Report
            </a>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <a className="cursor-pointer" href="/my-wallet">
              My Wallet
            </a>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <a className="cursor-pointer" href="/promotions">
              Promotions
            </a>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <a className="cursor-pointer" href="/my-bets">
              Bet History
            </a>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <a className="cursor-pointer" href="/change-password">
              Change Password
            </a>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <a className="cursor-pointer" href="/rules">
              Rules and Regulations
            </a>
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
