
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
import logoCT from "assets/images/logoCT.jpg";
import bgvideo from "assets/images/bgvideo.mp4";
function VideoSection() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={12}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
            <video src={bgvideo} 
                style={{ width: '100%', height: 'auto' }} 
                autoPlay 
                loop 
                muted
                playsInline
                type="video/mp4"
            >
            </video>
          
          
        </Grid>
        
        
      </Container>
    </MKBox>
  );
}

export default VideoSection;
