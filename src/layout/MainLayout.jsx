import { Outlet, useLocation } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Settings } from "../api";
import Header from "../components/UI/Header/Header";
import Register from "../components/modals/Register/Register";
import ForgotPassword from "../components/modals/ForgotPassword/ForgotPassword";

const MainLayout = () => {
  const [, setShowBuildVersion] = useState(false);
  const stored_build_version = localStorage.getItem("build_version");
  const { group, showRegisterModal, showForgotPasswordModal } = useSelector(
    (state) => state.global,
  );
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, group]);

  useEffect(() => {
    const newVersion = Settings?.build_version;
    if (!stored_build_version) {
      if (newVersion) {
        localStorage.setItem("build_version", newVersion);
      }
    }
    if (stored_build_version && newVersion) {
      const parseVersion = JSON.parse(stored_build_version);
      if (newVersion > parseVersion) {
        setShowBuildVersion(true);
      }
    }
  }, [stored_build_version]);

  return (
    <div className="h-full">
      {showRegisterModal && <Register />}
      {showForgotPasswordModal && <ForgotPassword />}
      <div className="flex bg-[#dee2e6] flex-col h-full w-full overflow-auto gap-[1px] mb-64 router-ctn">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
