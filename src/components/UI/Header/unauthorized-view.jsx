import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import {
  setShowBanner,
  setShowForgotPasswordModal,
  setShowLanguageModal,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageProvider";
import { LanguageKey } from "../../../const";
import { languageValue } from "../../../utils/language";

export const UnauthorizedView = () => {
  const { valueByLanguage } = useLanguage();
  const { closePopupForForever } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const memberId = result?.result?.memberId;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (result?.result?.changePassword) {
        dispatch(setShowLoginModal(false));
        localStorage.setItem("changePassword", true);
        navigate("/change-password");
      }
      if (!result?.result?.changePassword && token && user) {
        dispatch(setShowLoginModal(false));
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        dispatch(setShowLoginModal(false));
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-1"
      >
        <img
          src="data:image/svg+xml,%3csvg%20width='13'%20height='12'%20viewBox='0%200%2013%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.53027%200.322266C7.30501%200.322266%207.96908%200.598958%208.52246%201.15234C9.07585%201.70573%209.35254%202.37533%209.35254%203.16113C9.35254%203.94694%209.07585%204.61654%208.52246%205.16992C7.96908%205.72331%207.30501%206%206.53027%206C5.75553%206%205.09147%205.72331%204.53809%205.16992C3.9847%204.61654%203.70801%203.94694%203.70801%203.16113C3.70801%202.37533%203.9847%201.70573%204.53809%201.15234C5.09147%200.598958%205.75553%200.322266%206.53027%200.322266ZM6.53027%207.42773C7.5485%207.42773%208.49479%207.55501%209.36914%207.80957C10.2435%208.06413%2010.9352%208.40723%2011.4443%208.83887C11.9535%209.27051%2012.208%209.74089%2012.208%2010.25V11.6777H0.852539V10.25C0.852539%209.74089%201.1071%209.27051%201.61621%208.83887C2.12533%208.40723%202.81706%208.06413%203.69141%207.80957C4.56576%207.55501%205.51204%207.42773%206.53027%207.42773Z'%20fill='%23ECEFF1'/%3e%3c/svg%3e"
          alt="user-icon"
          className="hidden md:block h-3 w-3"
        />
        <div className="items-center hidden md:flex max-md:space-y-2 w-auto ml-1">
          <div className="relative flex items-center gap-2">
            <input
              {...register("username", { required: true })}
              placeholder="Enter Username"
              className="px-2 rounded-[5px] md:placeholder-gray-400 placeholder:text-sm text-sm outline-none h-[25px] md:w-[130px]"
            />
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Enter your Password"
              className="px-2 rounded-[5px] md:placeholder-gray-400 placeholder:text-sm text-sm outline-none h-[25px] md:w-[130px]"
              defaultValue
            />

            <div className="flex flex-col items-start gap-x-2 text-nowrap text-[10px]">
              {Settings.registration && (
                <div
                  onClick={() => dispatch(setShowRegisterModal(true))}
                  className="cursor-pointer text-white"
                >
                  {languageValue(valueByLanguage, LanguageKey.REGISTER)}{" "}
                </div>
              )}
              {Settings.registration && (
                <div
                  onClick={() => dispatch(setShowForgotPasswordModal(true))}
                  className="cursor-pointer w-fit text-white"
                >
                  Forgot password?
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center max-md:space-y-2">
            <div className="flex items-center md:gap-2">
              <button
                type="submit"
                className="active:opacity-70 flex items-center p-[7px_12px] md:p-[7px_18px] text-[10px] font-[500] justify-center gap-1 text-white bg-custom-red-gradient px-2 undefined rounded-[5px]"
              >
                <span className="text-sm md:text-xs text-white font-bold">
                  {languageValue(valueByLanguage, LanguageKey.LOGIN)}{" "}
                </span>
                <img
                  src="data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.49707%204.4668V5.5332H6.99707L4.02637%208.5293L4.78809%209.29102L9.0791%205L4.78809%200.708984L4.02637%201.4707L6.99707%204.4668H0.49707Z'%20fill='white'/%3e%3c/svg%3e"
                  alt="right-arrow"
                  className="h-2.7 w-2.7"
                />
              </button>
              {Settings.demo_login && (
                <button
                  type="button"
                  onClick={loginWithDemo}
                  className="active:opacity-70 flex items-center p-[7px_12px] md:p-[7px_18px] text-[10px] font-[500] justify-center gap-1 text-white bg-custom-red-gradient px-2 undefined rounded-[5px]"
                >
                  <span className="text-sm md:text-xs text-white font-bold">
                    Demo
                  </span>
                  <img
                    src="data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.49707%204.4668V5.5332H6.99707L4.02637%208.5293L4.78809%209.29102L9.0791%205L4.78809%200.708984L4.02637%201.4707L6.99707%204.4668H0.49707Z'%20fill='white'/%3e%3c/svg%3e"
                    alt="right-arrow"
                    className="h-2.7 w-2.7"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex md:hidden items-center gap-1">
          {Settings.registration && (
            <button
              onClick={() => dispatch(setShowRegisterModal(true))}
              type="button"
              className="active:opacity-70 flex items-center p-[7px_12px] md:p-[7px_18px] text-[10px] font-[500] justify-center gap-1 text-white bg-blue4 active:bg-blue5 rounded text-sm bg-button-gradient undefined rounded-[5px]"
            >
              <span className="text-sm md:text-xs text-white font-bold">
                {languageValue(valueByLanguage, LanguageKey.REGISTER)}{" "}
              </span>
            </button>
          )}

          <button
            onClick={() => navigate("/login")}
            type="button"
            className="active:opacity-70 flex items-center p-[7px_12px] md:p-[7px_18px] text-[10px] font-[500] justify-center gap-1 text-white bg-blue4 active:bg-blue5 bg-custom-red-gradient text-white rounded undefined rounded-[5px] truncate"
          >
            <img
              src="data:image/svg+xml,%3csvg%20width='13'%20height='12'%20viewBox='0%200%2013%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.53027%200.322266C7.30501%200.322266%207.96908%200.598958%208.52246%201.15234C9.07585%201.70573%209.35254%202.37533%209.35254%203.16113C9.35254%203.94694%209.07585%204.61654%208.52246%205.16992C7.96908%205.72331%207.30501%206%206.53027%206C5.75553%206%205.09147%205.72331%204.53809%205.16992C3.9847%204.61654%203.70801%203.94694%203.70801%203.16113C3.70801%202.37533%203.9847%201.70573%204.53809%201.15234C5.09147%200.598958%205.75553%200.322266%206.53027%200.322266ZM6.53027%207.42773C7.5485%207.42773%208.49479%207.55501%209.36914%207.80957C10.2435%208.06413%2010.9352%208.40723%2011.4443%208.83887C11.9535%209.27051%2012.208%209.74089%2012.208%2010.25V11.6777H0.852539V10.25C0.852539%209.74089%201.1071%209.27051%201.61621%208.83887C2.12533%208.40723%202.81706%208.06413%203.69141%207.80957C4.56576%207.55501%205.51204%207.42773%206.53027%207.42773Z'%20fill='%23ECEFF1'/%3e%3c/svg%3e"
              alt="user-icon"
              className="h-3.5 w-3.5"
            />
            <span className="text-sm md:text-xs text-white font-bold">
              {languageValue(valueByLanguage, LanguageKey.LOGIN)}{" "}
            </span>
          </button>
        </div>
      </form>
      {Settings.language && (
        <button
          onClick={() => dispatch(setShowLanguageModal(true))}
          className="relative overflow-hidden flex items-center  text-white justify-center text-xs  px-2 rounded-full bg-bg_color_secondary border border-border_color_primary capitalize h-[30px] min-w-[30px]"
          type="button"
        >
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
            className="w-4 h-4 mr-0.5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M3.6 9h16.8" />
            <path d="M3.6 15h16.8" />
            <path d="M11.5 3a17 17 0 0 0 0 18" />
            <path d="M12.5 3a17 17 0 0 1 0 18" />
          </svg>
          {/* {language} */}
          {/* <svg
            fill="currentColor"
            width={16}
            height={16}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
            className="w-3 h-3 ml-2"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </g>
          </svg> */}
        </button>
      )}
      {/* <div className="relative flex items-center">
        <div className="flex items-center justify-between w-full rounded-md text-white px-1.5 text-sm bg-[#243A48]">
          <span className="text-md font-medium p-1">en</span>
          <button className="flex items-center gap-2">
            <img
              src="data:image/svg+xml,%3csvg%20width='10'%20height='8'%20viewBox='0%200%2010%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M4.46885%207.00937L0.218848%202.75937C-0.0749023%202.46563%20-0.0749023%201.99062%200.218848%201.7L0.925098%200.99375C1.21885%200.7%201.69385%200.7%201.98447%200.99375L4.99697%204.00625L8.00947%200.99375C8.30322%200.7%208.77822%200.7%209.06885%200.99375L9.7751%201.7C10.0688%201.99375%2010.0688%202.46875%209.7751%202.75937L5.5251%207.00937C5.2376%207.30312%204.7626%207.30312%204.46885%207.00937Z'%20fill='white'/%3e%3c/svg%3e"
              alt="chevron-down"
              className="w-3 h-3"
            />
          </button>
        </div>
      </div> */}
    </div>
  );
};
