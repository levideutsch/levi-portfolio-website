// import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto-mono"; // Import the font
import profilePhoto from "./photos/profilePhoto.jpeg";

import Bio from "./Bio";
import Skills from "./Skills";
import Portfolio from "./Portfolio";

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
  return (
    <ThemeProvider theme={theme}>
      <Box style={styles}>
        <Typography variant="h4">Levi Deutsch</Typography>
        <img
          src={profilePhoto}
          alt="Levi Deutsch"
          style={{ width: "150px", marginTop: "20px" }}
        />

        <Typography
          variant="h5"
          style={{ marginBottom: "-10px", marginTop: "20px" }}
        >
          Bio
        </Typography>

        {/* Bio Component */}
        <Bio />

        <hr style={{ width: "45%", marginTop: "20px" }} />

        <Typography
          variant="h5"
          style={{ marginBottom: "-10px", marginTop: "20px" }}
        >
          Skills
        </Typography>

        {/* Skills Component */}
        <Skills />


        <hr style={{ width: "45%", marginTop: "20px" }} />

        <Typography
          variant="h5"
          style={{ marginBottom: "-10px", marginTop: "20px" }}
        >
          Portfolio
        </Typography>

        <Portfolio />
     
      </Box>
    </ThemeProvider>
  );
}

export default Home;





   {/* <Typography variant="body1">
          <Link to="/test-page" style={{ color: "white" }}>
            Go To Test
          </Link>
        </Typography>
        <Typography variant="body1">
          <Link to="/second-test-page" style={{ color: "white" }}>
            Go To Second Test
          </Link>
        </Typography>
        <Typography variant="body1">
          This is me adding new data to home page
        </Typography>
        <Typography variant="body1">
          Adding a new row for home page in new-design-for-home-page branch
        </Typography> */}