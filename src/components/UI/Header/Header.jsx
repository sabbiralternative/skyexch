import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import { useLogo } from "../../../context/ApiProvider";
import { QuickAccessNavList } from "./quick-access-nav-list";
import { UnauthorizedView } from "./unauthorized-view";
import { Authorized } from "./authorized";
import { useLocation, useNavigate } from "react-router-dom";
import AppPopup from "./AppPopUp";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
// import Notification from "./Notification";
import { useEffect } from "react";
import {
  setClosePopUpForForever,
  setShowAPKModal,
  setShowAppPopUp,
} from "../../../redux/features/global/globalSlice";
import Error from "../../modals/Error/Error";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logo } = useLogo();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { showAppPopUp, windowWidth, showAPKModal, closePopupForForever } =
    useSelector((state) => state?.global);

  useEffect(() => {
    const apk_modal_shown = sessionStorage.getItem("apk_modal_shown");
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    dispatch(setClosePopUpForForever(closePopupForForever ? true : false));
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      sessionStorage.setItem("apk_modal_shown", true);
      localStorage.setItem("closePopupForForever", true);
      dispatch(setClosePopUpForForever(true));
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!apk_modal_shown) {
        dispatch(setShowAPKModal(true));
      }
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if ((!expiryTime || currentTime > expiryTime) && Settings.apk_link) {
          localStorage.removeItem("installPromptExpiryTime");

          dispatch(setShowAppPopUp(true));
        }
      }
    }
  }, [
    dispatch,
    windowWidth,
    showAppPopUp,
    location?.state?.pathname,
    location.pathname,
  ]);

  if (Settings.app_only && !closePopupForForever) {
    return <Error />;
  }

  return (
    <div>
      {/* <Notification /> */}
      {Settings.apk_link && showAppPopUp && windowWidth < 1040 && <AppPopup />}
      {Settings.apk_link && showAPKModal && <DownloadAPK />}
      <div className="flex flex-col flex-0 w-full">
        <div className="relative max-md:z-30 flex items-center justify-between p-2 md:p-2 bg-header-gradient">
          <div className="flex md:gap-3 items-center">
            <img
              onClick={() => navigate("/")}
              src={logo}
              style={{
                height: Settings.logo_height,
                width: Settings.logo_width,
              }}
              alt="logo"
              className="md:my-2 lg:my-0 cursor-pointer"
            />
          </div>
          {token ? <Authorized /> : <UnauthorizedView />}
        </div>
        <QuickAccessNavList />
      </div>
    </div>
  );
};

export default Header;
