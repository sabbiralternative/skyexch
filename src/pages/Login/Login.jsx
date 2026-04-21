import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../api";
import { useLogo } from "../../context/ApiProvider";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { setUser } from "../../redux/features/auth/authSlice";
import {
  setShowBanner,
  setShowForgotPasswordModal,
  setShowRegisterModal,
} from "../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import Register from "../../components/modals/Register/Register";
import ForgotPassword from "../../components/modals/ForgotPassword/ForgotPassword";

const Login = () => {
  const { closePopupForForever, showRegisterModal, showForgotPasswordModal } =
    useSelector((state) => state.global);

  const navigate = useNavigate();

  const { logo } = useLogo();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
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
        navigate("/");
        localStorage.setItem("changePassword", true);
        navigate("/change-password");
      }
      if (!result?.result?.changePassword && token && user) {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  /* handle login demo user */
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
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
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = Settings.apk_link;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "site.apk");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const getWhatsAppId = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="w-full">
      {showRegisterModal && <Register />}
      {showForgotPasswordModal && <ForgotPassword />}
      <div className="flex flex-col w-full bg-goldenYellow min-h-screen">
        <header
          className="relative flex flex-col items-center justify-center h-[36vh] pt-12 pb-8 px-4 shrink-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("/src/assets/img/login_page_banner-CbcBaCVU.webp")',
          }}
        >
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black flex items-center justify-center p-2 hover:opacity-90"
            aria-label="Close"
          >
            <img
              src="data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.70615%201.70664C10.0968%201.31602%2010.0968%200.681641%209.70615%200.291016C9.31553%20-0.0996094%208.68115%20-0.0996094%208.29053%200.291016L4.9999%203.58477L1.70615%200.294141C1.31553%20-0.0964844%200.681152%20-0.0964844%200.290527%200.294141C-0.100098%200.684766%20-0.100098%201.31914%200.290527%201.70977L3.58428%205.00039L0.293652%208.29414C-0.0969726%208.68476%20-0.0969726%209.31914%200.293652%209.70977C0.684277%2010.1004%201.31865%2010.1004%201.70928%209.70977L4.9999%206.41602L8.29365%209.70664C8.68428%2010.0973%209.31865%2010.0973%209.70928%209.70664C10.0999%209.31602%2010.0999%208.68164%209.70928%208.29102L6.41553%205.00039L9.70615%201.70664Z'%20fill='white'/%3e%3c/svg%3e"
              alt=""
              className="w-full h-full [filter:brightness(0)_invert(1)]"
            />
          </button>
          <img
            src={logo}
            style={{ height: Settings.logo_height, width: Settings.logo_width }}
            alt="logo"
            className="h-[110px] object-contain"
          />
        </header>
        <main className="flex-1 px-6 py-3 md:py-6 md:mt-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="items-center flex flex-col w-full sm:w-96 space-y-2 text-black3"
          >
            <div className="relative flex flex-col w-full items-center space-y-2">
              <input
                {...register("username", { required: true })}
                placeholder="Enter Username"
                className="px-2 rounded-[5px] md:placeholder-gray-400 placeholder:text-sm text-sm outline-none h-[40px] w-full bg-white rounded-lg"
              />
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter Your Password"
                className="px-2 rounded-[5px] md:placeholder-gray-400 placeholder:text-sm text-sm outline-none h-[40px] w-full bg-white rounded-lg"
              />

              <div className="w-full flex justify-end text-nowrap text-[10px] flex-col mt-1 text-black4">
                <div
                  onClick={() => dispatch(setShowRegisterModal(true))}
                  className="cursor-pointer mr-1 text-black4"
                >
                  Sign Up
                </div>
                <div
                  onClick={() => dispatch(setShowForgotPasswordModal(true))}
                  className="cursor-pointer w-fit mr-1 text-black4"
                >
                  Forgot password?
                </div>
                {/* <div className="text-[10px] cursor-pointer w-fit mr-1 text-black4">
                  Resend Verification email?
                </div> */}
              </div>
            </div>
            <button
              type="submit"
              className=" active:opacity-70 w-full bg-header-gradient text-goldenYellow p-[10px] text-[13px] rounded-lg font-bold hover:bg-black4"
            >
              Login
            </button>
            <button
              onClick={loginWithDemo}
              type="button"
              className=" active:opacity-70 w-full bg-header-gradient text-goldenYellow p-[10px] text-[13px] rounded-lg font-bold hover:bg-black4"
            >
              Demo login
            </button>

            <div className="w-full flex justify-center mt-1">
              <span className="text-black4 text-xs">
                Don&apos;t have an account?
              </span>
              <span
                onClick={() => dispatch(setShowRegisterModal(true))}
                className="cursor-pointer text-black4 font-bold text-xs underline"
              >
                Sign Up
              </span>
            </div>
            <div className="flex gap-2 w-full h-[42px] items-end">
              {Settings?.whatsapplink && Settings.registration_whatsapp && (
                <a
                  onClick={() => getWhatsAppId(Settings?.whatsapplink)}
                  rel="noreferrer"
                  className="w-full mt-3 flex items-center justify-center gap-2 bg-[rgba(255,255,255,.6)] text-black4 rounded-lg py-2.5 px-3 text-xs font-medium border border-gray6"
                >
                  <img
                    src="/src/assets/img/whatsapp-icon-CS78cpu5.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                  <span className="text-xs">WhatsApp</span>
                </a>
              )}

              {Settings.apk_link && (
                <button
                  onClick={handleDownload}
                  type="button"
                  className=" active:opacity-70 bg-lime-900 w-full text-white flex items-center justify-center gap-2 p-1 h-[42px] rounded-lg text-xs"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m10.213 1.471.691-1.26q.069-.124-.048-.192-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11.35.35 0 0 1-.263-.11.37.37 0 0 1-.107-.264.37.37 0 0 1 .107-.265.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11.37.37 0 0 1-.268-.11.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685 1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69.97.97 0 0 1-.707.284 1 1 0 0 1-.712-.284.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68" />
                  </svg>{" "}
                  Download .apk
                </button>
              )}
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
