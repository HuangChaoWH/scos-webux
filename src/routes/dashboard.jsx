import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Wallet from "views/Wallet/Wallet.jsx";
import TableList from "views/TableList/TableList.jsx";
import Projects from "views/Projects/Projects.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/projects",
    sidebarName: "Projects",
    navbarName: "Projects",
    icon: LibraryBooks,
    component: Projects
  },
  {
    path: "/user",
    sidebarName: "Citizen",
    navbarName: "Profile",
    icon: Person,
    component: Wallet
  },
  {
    path: "/government",
    sidebarName: "Government",
    navbarName: "Profile",
    icon: Person,
    component: Wallet
  },
  {
    path: "/project/:id",
    icon: ContentPaste,
    component: TableList
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
