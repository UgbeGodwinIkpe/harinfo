
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2" color="info">Our Services</MKTypography>
          
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={3}>
            <DefaultReviewCard
              color="info"
              name="Corporate Solutions"
              item1="- Consulting"
              item2="- Networking"
              item3="- Innovation"
              action={{
                  type: "internal",
                  route: "/services",
                  label: "Read more",
                }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DefaultReviewCard
              color="info"
              name="Process Outsourcing"
              item1="- Social Media Handling"
              item2="- Digital Marketing"
              item3="- Recruitment"
              item4="- Chat Support"
              item5="- Digital Content Creation"
              action={{
                  type: "internal",
                  route: "#",
                  label: "Read more",
                }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DefaultReviewCard
              color="info"
              name="Application Development"
              item1="- Software"
              item2="- Web & Mobile Application"
              item3="- Recruitment"
              item4="- Artificial Intelligence"
              action={{
                  type: "internal",
                  route: "#",
                  label: "Read more",
                }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DefaultReviewCard
              color="info"
              name="Web3, Blockchain & AI Solutions"
              item1="- A-Z packages"
              item2="- Basic New Business Necessities"
              item3="- Marketing"
              item4="- Technology"
              item4="- Development"
              action={{
                  type: "internal",
                  route: "#",
                  label: "Read more",
                }}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 1 }} />
        
      </Container>
    </MKBox>
  );
}

export default Information;
