
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultTopbar from "examples/Topbars/DefaultTopbar";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import Mvv from "pages/Presentation/sections/Mvv";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";
import VideoSection from "pages/Presentation/sections/VideoSection";
import ClientsFeedbacks from "pages/Presentation/sections/ClientsFeedbacks";
import BlogPosts from "pages/Presentation/sections/BlogPosts";
import FAQs from "pages/Presentation/sections/FAQs";
import JoinUs from "pages/Presentation/sections/JoinUs";
import Careers from "pages/Presentation/sections/Careers";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
//fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faPinterest,
  faGithub, } from '@fortawesome/free-brands-svg-icons';
// Routes
import headerroutes from "header.routes";
import routes from "routes";
import footerRoutes from "footer.routes";
import styles from './styles.module.css';
// Images
import bgImage from "assets/images/bg-presentation.jpg";
import logoCT from "assets/images/logoCT.jpg";

function Presentation() {
  return (
    <>
    <div className={styles['top-bar']}>
      <div className={styles['logo-div']}><img src={logoCT} alt="HarInfo"/></div>
      <div className={styles['right-buttons']}>
      <button className={styles['download-button']}>Downloads</button>
        <button className={styles['login-button']}>Login</button>
        
        <div className={styles['social-media-links']}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
    
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "#",
          label: "LOGIN",
          color: "info",
        }}
        static
      />
      <MKBox
        minHeight="95vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" my="40px" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              HarInfo{" "}
            </MKTypography>
            <MKTypography
              variant="h3"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              The Fertile Soil For Your Business Growth.
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              We are HarInfo: a business and technology consulting firm. And more. You may be wondering “What more?”.
            </MKTypography>

          </Grid>
          
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 1,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <VideoSection />
        <Information />
        <Container sx={{ mt: 2 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
        <hr/>
        <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "center" } }}>
          <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Why Clients Love Us, And Why Prospects Choose Us
          </MKTypography>
        </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                // icon="flag"
                title="Expertise"
                description="Top clients choose us because we are the preferred choice for myriad enterprises seeking transformative solutions. Our expertise is trusted by industry leaders who have witnessed, firsthand, the remarkable impact of our services. At HarInfo, we don't just provide services; we create partnerships. We convert your ideas into successful business ventures, ensuring your triumph is our triumph."
                // action={{
                //   type: "external",
                //   route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                //   label: "Let's start",
                // }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                // icon="flag"
                title="Corporate Solutions"
                description="We help in the development of businesses, offering advanced corporate solutions. Our business support and full-stack teams are top professionals that understand what it means to grow a business exponentially. This is what we have been doing for many years on end."
                
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                // icon="flag"
                title="Customized Services"
                description="Our ability to serve clients across various segments is a testament to our versatility and commitment. We take immense pride in our customized services, setting us apart in this competitive world. We embrace your business vision, nurture it with our expertise, and elevate it to realize its grandest potential."
                
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                // icon="flag"
                title="Client's Satisfaction"
                description="YOUR DREAMS ARE OURS, YOUR BUSINESS GROWTH IS OUR PRIDE. Your dreams are ours, and we don't mind sleeping less for it. We want you to understand that helping you build your business builds our profile too. Who wouldn't want a win-win situation? You grow, we grow. Together."
                
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                // icon="flag"
                title="Continuous Support"
                description="ICT solution is an ongoing process, and we are committed to being with you every step of the way. Our continuous monitoring services and proactive support ensure that the ICT solutions we provide are always adapting to emerging threats. We provide real-time insights, regular updates, and 24/7 support to keep your organization at the top of the business world."
                
              />
            </Grid>
            <Grid item xs={12} lg={4} overflow="auto">
              <FilledInfoCard
                color="info"
                title="Talk To Sales"
                description="Climbing the success ladder doesn't have to be step by step. And because of you, HarInfo already scaled tough business growth phases so that you don't have to pass through them any more. We are already at the top, why not offer a partnership hand, so we can pull you up. We are not stopping anytime soon, but you can still catch up to us; so start growing with us now. Skip the lower levels of business growth, jumpstart your business by leveraging on our portfolio; experience a directly proportional growth with HarInfo today."
                action={{
                  type: "external",
                  route: "mailto:sales@harinfo.com",
                  label: "Send an email to sales@harinfo.com",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Download />
        <Mvv />
        <ClientsFeedbacks />
        <BlogPosts />
        <MKBox pt={5} pb={6}>
          <Container>
            <FAQs />
          </Container>
        </MKBox>
        <MKBox pt={5} pb={6}>
          <Container>
            <JoinUs />
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Careers />
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
