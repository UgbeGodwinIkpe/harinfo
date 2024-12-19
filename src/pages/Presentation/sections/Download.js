
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 3 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto">
            <MKTypography variant="h3" color="white" textAlign="center">
              Our Leverage
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={4}>
              <ul>
                <li><b>Trusted Expertise:</b> Our team consists of industry leaders and experienced professionals who are committed to your success</li>
                <li><b>Innovative Solutions:</b> We stay ahead of the curve by constantly exploring new technologies and methodologies.</li>
                <li><b>Personalized Services:</b> We take the time to understand your unique challenges and tailor our solutions accordingly.</li>
                <li><b>Global Reach:</b> With operations worldwide, we are equipped to handle the diverse needs of businesses across various regions and industries.</li>
                
              </ul>
            </MKTypography>
            <MKTypography variant="body1" color="white" mb={6}>
              HarInfo is the star of the business and tech consulting industry, we are never tired of being admired. We are also the leader and benchmark, we will never be tired of being a worthy example and making paths for others.
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="#"
              sx={{ mb: 2 }}
            >
              Talk To Sales
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      
    </MKBox>
  );
}

export default Download;
