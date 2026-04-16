import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import APK from "../pages/APK/APK";
import Login from "../pages/Login/Login";
import ExchangeSports from "../pages/ExchangeSports/ExchangeSports";
import EventDetails from "../pages/EventDetails/EventDetails";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import Rules from "../pages/Rules/Rules";
import Casino from "../pages/Casino/Casino";
import BonusStatement from "../pages/BonusStatement/BonusStatement";
import Promotions from "../pages/Promotions/Promotions";
import LossbackBonus from "../pages/LossbackBonus/Promotions";
import Deposit from "../pages/Deposit/Deposit";
import Withdraw from "../pages/Withdraw/Withdraw";
import Affiliate from "../pages/Affiliate/Affiliate";
import AffiliateUserStatement from "../pages/AffiliateUserStatement/AffiliateUserStatement";
import AffiliateUserProfitLoss from "../pages/AffiliateUserProfitLoss/AffiliateUserProfitLoss";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        // {
        //   path: "/event-details/:eventTypeId/:eventId",
        //   element: <EventDetails />,
        // },

        {
          path: "/apk",
          element: <APK />,
        },
        {
          path: "/exchange_sports/:eventName/:eventTypeId",
          element: <ExchangeSports />,
        },

        {
          path: "/event-details/:eventTypeId/:eventId",
          element: <EventDetails />,
        },
        {
          path: "/change-password",
          element: <ChangePassword />,
        },
        {
          path: "/rules",
          element: <Rules />,
        },
        {
          path: "/casino",
          element: <Casino />,
        },
        {
          path: "/bonus-statement",
          element: <BonusStatement />,
        },
        {
          path: "/promotions",
          element: <Promotions />,
        },
        {
          path: "/lossback-bonus",
          element: <LossbackBonus />,
        },
        {
          path: "/deposit",
          element: <Deposit />,
        },
        {
          path: "/withdraw",
          element: <Withdraw />,
        },
        {
          path: "/affiliate",
          element: <Affiliate />,
        },
        {
          path: "/affiliate/user-profit-loss",
          element: <AffiliateUserProfitLoss />,
        },
        {
          path: "/affiliate/user-statement",
          element: <AffiliateUserStatement />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  },
);
