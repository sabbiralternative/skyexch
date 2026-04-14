import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import APK from "../pages/APK/APK";
import Login from "../pages/Login/Login";
import ExchangeSports from "../pages/ExchangeSports/ExchangeSports";
import EventDetails from "../pages/EventDetails/EventDetails";

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
