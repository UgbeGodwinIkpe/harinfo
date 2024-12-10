/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BuiltByDevelopers() {
  const bgImage =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <div>
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={8} sx={{ ml: { xs: 0, lg: 8 } }}>
          <MKTypography variant="h1" color="white" fontWeight="bold">
            <u>Our Portfolio</u>
          </MKTypography>
          <MKTypography variant="h4" color="white" mb={1}>
            We deal with data, and we love numbers. So, we are more than excited to show you ours.
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            <ul>
              <li><b>A to Z –</b> Business Solutions Provided</li>
              <li><b>526% –</b> Average Increase In Clients Revenue</li>
              <li><b>87 –</b> AI Models Engineered</li>
              <li>498% – Average Increase In Clients Business Valuation</li>
              <li><b>150+ –</b> Number Of Countries We Operate In</li>
              <li><b>100+ –</b> Brand Product/Services Marketed</li>
              <li><b>92.89% –</b> Client Retention Rate</li> 
              <li><b>800% –</b> Average Increase In Clients Customers</li>
              <li><b>5 🌟</b> rating from 1000+ clients</li>
            </ul>
          </MKTypography>
          
          <MKTypography variant="h6" color="white" mb={1}>
            If you find our profile interesting, we are flattered, but then, we can help you make yours similar too. How about that?
            Get in touch with us:

          </MKTypography>
          <MKTypography
            component="a"
            href="mailto:sales@harinfo.com"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Contact Us <Icon sx={{ fontWeight: "bold" }}></Icon>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>

    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={11} sx={{ ml: { xs: 0, lg: 10 } }}>
          <MKTypography variant="h1" color="white" fontWeight="bold">
            <u>How We Do What We Do</u>
          </MKTypography>
          <MKTypography variant="h5" color="white" mb={1}>
            HarInfo was established with a vision to combine technology and innovation, providing advanced solutions and strategies that transform businesses. Although a young venture, we have made our mark globally, serving clients across numerous regions with the robust support of our dedicated staff and partners. Our passion lies at the intersection of technology and innovation that shatter the confines of traditional operational methods.
          </MKTypography>
          <MKTypography variant="h6" color="white" mb={1}>
            Our ways are unconventionally smart, and our methods work. Check through some of them:
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            <ul>
              <li>We serve as your strategic guide, defining and articulating your business goals for clear communication across all levels.</li>
              <li>We inspire your team, driving them to deliver on your objectives with zeal and efficacy.</li>
              <li>HarInfo leverages our acumen to identify key performance indicators, focusing on building upon existing successful strategies.</li>
              <li>We aid in distilling your business goals into clear, digestible targets that are easily comprehensible and actionable.</li>
              <li>We foster meaningful relationships within your organization, creating an environment where everyone is motivated to perform at their peak.</li>
              <li>We counsel senior leaders, providing fresh perspectives and strategic insights to resolve pressing business issues.</li>
              <li>Our global expertise extends to harmonizing diverse and dispersed teams, driving stellar results across cultures and countries.</li> 
              <li>HarInfo partners with you in developing practical evaluation metrics for our programmes, enabling a clear return on investment measurement and ongoing improvement.</li>
              <li>Our approach is unflinchingly affirmative. We constructively challenge the status quo to facilitate the best possible business outcomes.</li>
              <li>We align your organization's reality with its vision and values, ensuring that the experience of your employees genuinely resonates with your mission.</li>
            </ul>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
    </div>
  );
}

export default BuiltByDevelopers;
