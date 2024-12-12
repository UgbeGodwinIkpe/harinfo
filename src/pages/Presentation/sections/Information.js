
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

function Information() {
  return (
    <MKBox component="section" py={3} my={2}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                title={
                  <>
                    See Why We Are More
                    
                  </>
                }
                description="Over the years, we have evolved to becoming big solution providers to persons, groups, SMEs, startups, institutions, organizations, companies, corporations, franchises, and conglomerates in these areas:"
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="<>Big Data   <>Web3  <>Infrastructure   <>Machine Learning (ML)   <>Artificial Intelligence (AI)   <>Marketing   <>Business Services"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Learn More",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Mission"
                  description="Our mission is to empower businesses of all sizes with innovation, technology, and business strategies that would see them go from startups to large enterprises, and large enterprises to big corporations."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Prominence In The Tech Sector"
                  description="Our prominence in the tech sector is unrivaled — we have grown quickly over the years to become one of the industry’s frontrunners. But sadly, we have not achieved all of our goals yet, until we have helped you achieve yours."
                />
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
