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
  setShowLoginModal,
  setShowRegisterModal,
} from "../../redux/features/global/globalSlice";
import toast from "react-hot-toast";

const Login = () => {
  const { closePopupForForever } = useSelector((state) => state.global);

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
        navigate(-1);
        localStorage.setItem("changePassword", true);
        navigate("/change-password");
      }
      if (!result?.result?.changePassword && token && user) {
        navigate(-1);
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
        navigate(-1);
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  const closeLoginModal = () => {
    dispatch(setShowLoginModal(false));
  };

  const showRegister = () => {
    closeLoginModal();
    dispatch(setShowRegisterModal(true));
  };

  const showForgotPassword = () => {
    closeLoginModal();
    dispatch(setShowForgotPasswordModal(true));
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
  return (
    <div className="w-full">
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
            <div className="flex flex-col items-center justify-center text-[10px] font-[500] gap-1 w-full mt-2">
              <div className="flex items-center bg-gray4 rounded-md gap-2">
                <button className="flex bg-[#243A48] items-center justify-center h-[30px] w-fit px-2 capitalize rounded-[4px] text-white text-[15px] ">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_94_2551)'%3e%3cpath%20d='M8.36055%200.789433C5.96258%201.62131%203.89457%203.20024%202.46029%205.29431C1.026%207.38838%200.301037%209.8872%200.391883%2012.4237C0.482728%2014.9603%201.38459%2017.4008%202.96501%2019.3869C4.54543%2021.373%206.72109%2022.8%209.17243%2023.4582C11.1598%2023.971%2013.2419%2023.9935%2015.2399%2023.5238C17.0499%2023.1173%2018.7233%2022.2476%2020.0962%2021.0001C21.5251%2019.662%2022.5622%2017.9597%2023.0962%2016.0763C23.6765%2014.0282%2023.7798%2011.8743%2023.3981%209.78006H12.2381V14.4094H18.7012C18.572%2015.1478%2018.2952%2015.8525%2017.8873%2016.4814C17.4795%2017.1102%2016.9489%2017.6504%2016.3274%2018.0694C15.5382%2018.5915%2014.6485%2018.9428%2013.7156%2019.1007C12.7798%2019.2747%2011.82%2019.2747%2010.8843%2019.1007C9.93591%2018.9046%209.03874%2018.5132%208.24993%2017.9513C6.98271%2017.0543%206.0312%2015.7799%205.53118%2014.3101C5.02271%2012.8127%205.02271%2011.1893%205.53118%209.69193C5.8871%208.64234%206.47549%207.68669%207.25243%206.89631C8.14154%205.97521%209.26718%205.3168%2010.5058%204.99333C11.7445%204.66985%2013.0484%204.6938%2014.2743%205.06256C15.232%205.35654%2016.1078%205.87019%2016.8318%206.56256C17.5606%205.83756%2018.2881%205.11068%2019.0143%204.38193C19.3893%203.99006%2019.7981%203.61693%2020.1674%203.21568C19.0622%202.1872%2017.765%201.38691%2016.3499%200.860683C13.7731%20-0.0749616%2010.9536%20-0.100106%208.36055%200.789433Z'%20fill='white'/%3e%3cpath%20d='M8.3607%200.789367C10.9536%20-0.100776%2013.7731%20-0.0762934%2016.3501%200.858742C17.7654%201.38855%2019.062%202.19269%2020.1657%203.22499C19.7907%203.62624%2019.3951%204.00124%2019.0126%204.39124C18.2851%205.11749%2017.5582%205.84124%2016.832%206.56249C16.1079%205.87012%2015.2321%205.35648%2014.2745%205.06249C13.0489%204.69244%2011.7451%204.66711%2010.5061%204.98926C9.26712%205.31141%208.14079%205.96861%207.2507%206.88874C6.47377%207.67912%205.88538%208.63477%205.52945%209.68437L1.64258%206.67499C3.03384%203.91604%205.44273%201.80566%208.3607%200.789367Z'%20fill='%23E33629'/%3e%3cpath%20d='M0.611157%209.65605C0.820072%208.62067%201.16691%207.61798%201.64241%206.6748L5.52928%209.69168C5.02081%2011.1891%205.02081%2012.8124%205.52928%2014.3098C4.23428%2015.3098%202.93866%2016.3148%201.64241%2017.3248C0.452064%2014.9554%200.0890305%2012.2557%200.611157%209.65605Z'%20fill='%23F8BD00'/%3e%3cpath%20d='M12.2381%209.77832H23.3981C23.7799%2011.8726%2023.6766%2014.0264%2023.0963%2016.0746C22.5623%2017.958%2021.5252%2019.6602%2020.0963%2020.9983C18.8419%2020.0196%2017.5819%2019.0483%2016.3275%2018.0696C16.9494%2017.6501%2017.4802%2017.1094%2017.8881%2016.4798C18.296%2015.8503%2018.5726%2015.1448%2018.7013%2014.4058H12.2381C12.2363%2012.8646%2012.2381%2011.3214%2012.2381%209.77832Z'%20fill='%23587DBD'/%3e%3cpath%20d='M1.64062%2017.3251C2.93687%2016.3251%204.2325%2015.3201%205.5275%2014.3101C6.02851%2015.7804%206.98138%2017.0549%208.25%2017.9513C9.04127%2018.5106%209.94037%2018.8988%2010.89%2019.0913C11.8257%2019.2653%2012.7855%2019.2653%2013.7213%2019.0913C14.6542%2018.9334%2015.5439%2018.5821%2016.3331%2018.0601C17.5875%2019.0388%2018.8475%2020.0101%2020.1019%2020.9888C18.7292%2022.237%2017.0558%2023.1073%2015.2456%2023.5144C13.2476%2023.9841%2011.1655%2023.9616%209.17813%2023.4488C7.60632%2023.0291%206.13814%2022.2893%204.86563%2021.2757C3.51874%2020.2063%202.41867%2018.8588%201.64062%2017.3251Z'%20fill='%23319F43'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_94_2551'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                    alt="social-icon"
                    className="h-[20px] w-[20px] max-md:mr-2"
                  />
                </button>
              </div>
            </div>
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
              <a
                href="https://wa.link/skyexchho"
                target="_blank"
                rel="noreferrer"
                className="w-full mt-3 flex items-center justify-center gap-2 bg-[rgba(255,255,255,.6)] text-black4 rounded-lg py-2.5 px-3 text-xs font-medium border border-gray6"
              >
                <img
                  src="/assets/whatsapp-icon-CS78cpu5.svg"
                  alt=""
                  className="w-5 h-5"
                />
                <span className="text-xs">WhatsApp</span>
              </a>
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
        <div className="h-1.5 w-full bg-black shrink-0" />
      </div>
    </div>
  );
};

export default Login;
