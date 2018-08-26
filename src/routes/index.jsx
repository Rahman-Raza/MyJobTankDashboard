import Pages from "layouts/Pages.jsx";
import RTL from "layouts/RTL.jsx";
import Dashboard from "layouts/Dashboard.jsx";
import JobDescription from "views/JobDescription/JobDescription.js"

var indexRoutes = [
  { path: "/rtl", name: "RTL", component: RTL },
  { path: "/pages", name: "Pages", component: Pages },
  { path: "/", name: "Home", component: Dashboard },
  { path: "/job-description", name: "Job Description", component: JobDescription }
];

export default indexRoutes;
