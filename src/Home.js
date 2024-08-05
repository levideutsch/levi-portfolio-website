// REACT IMPORTS
import React, { useRef } from 'react';


// COMPONENT IMPORTS
import Bio from "./Bio";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import ContactMe from './ContactMe';
import ProfilePhotoPopUp from './ProfilePhotoPopUp';

// MUI IMPORTS
import { Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto-mono"; // Import the font
import FloatingNav from "./FloatingNav";
import useScrollToTop from './UseScrollToTop';
import useMediaQuery from "@mui/material/useMediaQuery";
// import { ContactMail } from '@mui/icons-material';



const theme = createTheme({
  typography: {
    fontFamily: "Roboto Mono, monospace",
  },
});

const styles = {
  backgroundColor: "black",
  color: "white",
  minHeight: "100vh", // Ensure it covers the full height of the viewport
  padding: "20px",
};


 
function Home() {
    const isMobile = useMediaQuery("(max-width:600px)");
    const bioRef = useRef(null);
    const skillsRef = useRef(null);
    const portfolioRef = useRef(null);
    const resumeRef = useRef(null);
    const contactRef = useRef(null);
  

    const handleNavClick = (sectionRef) => {
        if (sectionRef.current) {  
          window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: 'smooth'
          });
        }
      };

      useScrollToTop();

  return (
    <ThemeProvider theme={theme}>
        <div ref={bioRef}></div>
    <FloatingNav
        onNavClick={handleNavClick}
        bioRef={bioRef}
        skillsRef={skillsRef}
        portfolioRef={portfolioRef}
        resumeRef={resumeRef}
        contactRef={contactRef}
      />
      <Box style={styles}>
      
        <Typography variant="h4">Levi Deutsch</Typography>
        <Typography variant='body2'>Full-Stack Developer</Typography>

  
        <ProfilePhotoPopUp />
        <div ref={skillsRef}></div>
        <Typography
          variant="h5"
          style={{ marginBottom: "-10px", marginTop: "20px" }}
        >
          About Me
        </Typography>

        {/* Bio Component */}
        <Bio isMobile={isMobile}/>
       
        <hr style={{ width: "45%", marginTop: "20px" }} />
        
        <Typography
          variant="h5"
          style={{ marginBottom: "-10px", marginTop: "70px" }}
        >
          Skills
        </Typography>

        {/* Skills Component */}
       
        <Skills isMobile={isMobile}/>
        
        <div ref={portfolioRef}></div>

        <hr style={{ width: "45%", marginTop: "20px" }} />

        <Typography
          variant="h5"
          style={{ marginBottom: "-10px", marginTop: "70px" }}
        >
          Portfolio
        </Typography>

        {/* Portfolio Component */}
        <Portfolio />
        
        <hr style={{ width: "45%", marginTop: "20px" }} />

        <Typography
          variant="h5"
          style={{ marginBottom: "-10px", marginTop: "70px" }}
        >
          Resume
        </Typography>

        {/* Resume Component */}
        <Resume ref={resumeRef}/>

        <div ref={resumeRef}>
          <Resume />
        </div>

        <hr style={{ width: "45%", marginTop: "20px" }} />

        <Typography
          variant="h5"
          style={{ marginBottom: "-10px", marginTop: "70px" }}
        >
          Connect With Me
        </Typography>

        {/* Contact Component */}
        <ContactMe isMobile={isMobile}/>
        <div ref={contactRef}></div>
       
      </Box>
    </ThemeProvider>
  );
}

export default Home;

