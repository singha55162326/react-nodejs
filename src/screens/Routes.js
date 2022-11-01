import { Navigate, useRoutes, Outlet } from "react-router-dom";
import {
  Dashboard,
  NotFound,
  Car,
  Employee,
  Supplier,
  OilScreen,
  Customer,
  UserScreen,
  Document,
  Transports,
  Sale,
  Order,
  ImportScreen,
  ReportSell,
  ReportOrder,
  ReportImport,
  ReportTransfer,
  ReportOils
} from "./index";
import { Header, Menu } from "../components/index";
import Cookie from "js-cookie";

export default function Router() {
  const userInfo = Cookie.getJSON("userInfo") || null;
  let role = userInfo ? userInfo.auth[0].role : null;
  return useRoutes([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <Menu />
          <Outlet />
          {/* <Footer/> */}
        </div>
      ),

      children: [
        { element: <Navigate to="/Home" replace /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "CarInformation", element: role == 1 ? <Car /> : <NotFound /> },
        { path: "ManageEmployee", element: role == 1 ? <Employee /> : <NotFound /> },
        { path: "supplierManage", element: role == 1 ? <Supplier /> : <NotFound /> },
        { path: "oilManage", element: role == 1 ? <OilScreen /> : <NotFound /> },
        { path: "CustomerInformation", element: role == 1 ? <Customer /> : <NotFound /> },
        { path: "UserScreen", element: role == 1 ? <UserScreen /> : <NotFound /> },
        { path: "FuelDeliveryDocument", element: role == 1 ? <Document /> : <NotFound /> },
        { path: "FuelDelivery", element: role == 1 ? <Transports /> : <NotFound /> },
        { path: "Sell", element: <Sale /> },
        { path: "OrderSreen", element: <Order /> },
        { path: "ImportScreen", element: <ImportScreen /> },
        { path: "SalesItems", element: <ReportSell /> },
        { path: "OrderReport", element: <ReportOrder /> },
        { path: "ImportReport", element: <ReportImport /> },
        { path: "ReportFuelDeliveryInformation", element: <ReportTransfer /> },
        { path: "ReportFuelInformation", element: <ReportOils /> },
        { path: "404", element: <NotFound /> },
      ],
    },
    {
      path: "/",
      children: [
        { path: "/", element: <Navigate to="/dashboard/app" /> },
        { path: "*", element: <Navigate to="/404" /> },
        { path: "/", element: <Navigate to="/" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
