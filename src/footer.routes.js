// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logoCT.jpg";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "HarInfo",
    desc:"We are HarInfo: a business and technology consulting firm. And more. You may be wondering “What more?”.",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  menus: [
    {
      name: "Useful Links",
      items: [
        { name: "Media", href: "#" },
        { name: "Our Partners", href: "#" },
        { name: "List of Other Businesses", href: "#" },
        { name: "Pay Online", href: "#" },
        { name: "Disclaimer", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Website Terms", href: "#" },
        { name: "Sitemap", href: "#" },
      ],
    },
    {
      name: "Get in Touch",
      items: [
        { name: "Corporate Office", href: "#" },
        { name: "General Helpline", href: "#" },
        { name: "affiliate program", href: "#" },
      ],
    },
    
    // {
    //   name: "legal",
    //   items: [
    //     { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
    //     { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
    //     { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
    //   ],
    // },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} {" "}
      <MKTypography
        component="a"
        href="https://www.harinfo.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        HarIfno
      </MKTypography>
      .
    </MKTypography>
  ),
};
