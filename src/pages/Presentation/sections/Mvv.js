
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Mvv() {
  return (
    <MKBox component="section" py={4} my={3}>
      <Container>
        <h1 style={{textAlign:"center"}}>What Drives Us</h1>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                title={
                  <>
                    OUR MISSION
                    
                  </>
                }
                description="Our mission is to be the catalyst for innovation, empowering individuals and businesses alike through cutting-edge technology products and solutions. We are dedicated to delivering these services at the most affordable rates, ensuring accessible and economically feasible benefits for all, free from financial strain."
              />
              <RotatingCardBack
                image={bgBack}
                title="Talk To Sales"
                description="Talk to sales let us go all long with you"
                action={{
                  type: "external",
                  route: "mailto:sales@harinfo.com",
                  label: "Mail Us",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                title={
                  <>
                    OUR VISION
                    
                  </>
                }
                description="Our vision is to adeptly navigate the unique challenges of every business, relentlessly exploring the frontiers of new technology within each industry. Our goal is to conceive innovative solutions that address these challenges, aspiring to be recognized as the world's most groundbreaking technology company."
              />
              <RotatingCardBack
                image={bgBack}
                title="Talk To Sales"
                description="Talk to sales let us go all long with you"
                action={{
                  type: "external",
                  route: "mailto:sales@harinfo.com",
                  label: "Mail Us",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                title={
                  <>
                    OUR VALUES
                    
                  </>
                }
                description="Our values are why we are valued. HarInfo foundation is built upon the cornerstones of Loyalty, Commitment, and Trust, with an unwavering aim to transform businesses into technology powerhouses. We believe in pushing the boundaries of the possible, venturing into the untamed frontier of potential that's teeming with opportunities for change and growth."
              />
              <RotatingCardBack
                image={bgBack}
                title="Talk To Sales"
                description="Talk to sales let us go all long with you"
                action={{
                  type: "external",
                  route: "mailto:sales@harinfo.com",
                  label: "Mail Us",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Mvv;
