import { useSelector } from "react-redux";
import { Settings } from "../../../api";
import { useLogo } from "../../../context/ApiProvider";
import { QuickAccessNavList } from "./quick-access-nav-list";
import { UnauthorizedView } from "./unauthorized-view";
import { Authorized } from "./authorized";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { logo } = useLogo();
  const { token } = useSelector((state) => state.auth);

  return (
    <div>
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
              className="md:my-2 lg:my-0 cursor-pointer h-[28px] md:h-[40px] lg:h-[53px]"
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
