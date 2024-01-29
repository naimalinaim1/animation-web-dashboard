import { createBrowserRouter } from "react-router-dom";
// main layout
import MainLayout from "../layout/MainLayout";
import ErrorPage from "./ErrorPage";
// pages
import Dashboard from "../pages/Dashboard/Dashboard";
import Meeting from "../pages/Meeting/Meeting";
import Login from "../login/Login";
import PrivateRoute from "./PrivateRoute";
import MeetingDetails from "../pages/Meeting/MeetingDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/meeting",
        element: (
          <PrivateRoute>
            <Meeting />
          </PrivateRoute>
        ),
      },
      {
        path: "/meeting/:_id",
        loader: async ({ params }) => {
          return fetch(`https://animation-web-server.vercel.app/contact/${params._id}`);
        },
        element: (
          <PrivateRoute>
            <MeetingDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
