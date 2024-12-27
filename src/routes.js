
// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "COMPANY",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "About Us",
        collapse: [
          {
            name: "Company Information",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Management",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Leadership",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
      
    ],
  },
  {
    name: "CORE VALUES",
    icon: <Icon>article</Icon>,
    href: "#",
  },
  {
    name: "SOCIAL RESPONSIBILITY",
    icon: <Icon>article</Icon>,
    href: "#",
  },
  {
    name: "SOLUTIONS",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Corporate Solutions",
        description: "",
        dropdown: true,
        collapse: [
          {
            name: "Consulting",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Networking",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
          {
            name: "Innovation",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
        ],
      },
      {
        name: "Process Outsourcing ",
        description: "",
        dropdown: true,
        collapse: [
          {
            name: "Social Media Handling",
            route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "Digital Marketing",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          {
            name: "Recruitment",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
          {
            name: "Chat Support",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
          {
            name: "Digital Content Creation",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },

        ],
      },
      {
        name: "Application Development",
        description: "",
        dropdown: true,
        collapse: [
          {
            name: "Software",
            route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "Web & Mobile Application",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
          {
            name: "Artificial Intelligence",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
        ],
      },
      {
        name: "Categories of Business",
        description: "",
        dropdown: true,
        collapse: [
          {
            name: "Start up",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "SME",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "Corporate",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
      },
      
    ],
  },
  
  {
    name: "CLIENT REGISTRATION",
    icon: "",
    href: "#",
  },
  {
    name: "MORE",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Partner",
        route: "/sections/elements/avatars",
        component: <Avatars />,
      },
      {
        name: "Industries",
        route: "/sections/elements/badges",
        component: <Badges />,
      },
      {
        name: "Career",
        route: "/sections/elements/breadcrumbs",
        component: <BreadcrumbsEl />,
      },
      {
        name: "Contact Us",
        route: "/sections/elements/buttons",
        component: <Buttons />,
      },
      
    ],
},
];

export default routes;
