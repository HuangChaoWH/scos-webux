import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Citizen from "views/Citizen/Citizen.jsx";
import Project from "views/Project/Project.jsx";
import Projects from "views/Projects/Projects.jsx";
import Government from "views/Government/Government.jsx";
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
    path: "/citizen",
    sidebarName: "Citizen",
    navbarName: "Citizen",
    icon: Person,
    component: Citizen
  },
  {
    path: "/government",
    sidebarName: "Government",
    navbarName: "Government",
    icon: Person,
    component: Government
  },
  {
    path: "/project/:id",
    icon: ContentPaste,
    component: Project
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
