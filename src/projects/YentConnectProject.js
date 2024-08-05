// REACT IMPORTS
import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// MUI IMPORTS
import { Card, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto-mono"; // Import the font
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaReact } from "react-icons/fa"; // Import icons
import { SiRubyonrails  } from "react-icons/si";
import { DiSqllite } from "react-icons/di";




function YentConnectProject() {
  const [showDetailedOverview, setShowDetailedOverview] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();


  const theme = createTheme({
    typography: {
      fontFamily: "Roboto Mono, monospace",
    },
  });

  const styles = {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    padding: "20px",
  };

  

  return (
    <ThemeProvider theme={theme}>
      <Box style={styles}>
        <Button style={{ color: "white" }} onClick={() => navigate("/")}>
          <ArrowBackIosIcon />
        </Button>

        <Typography variant="h4">Yent Connect</Typography>
        <hr style={{ width: "50%" }} />
        <Typography variant="body2" style={{ marginTop: "40px" }}>
          Description
        </Typography>

        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: "130%",
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
          <Typography variant="body1">
          I built a social media platform called "Yent-Connect" for fun. It includes features such as users, friends, posts, likes,
           unlikes, messages, a page with posts from people I follow, and a page with posts from all users on the application. 
           The platform was built using React, React Router, Ruby on Rails, and SQLite
          </Typography>
        </Card>
        {/* <hr style={{ width: "50%", marginTop: "40px" }} /> */}

        <Button
          style={{ marginTop: "40px", color: "white" }}
          onClick={() => setShowDetailedOverview(!showDetailedOverview)}
        >
          {showDetailedOverview
            ? "Hide Detailed Overview"
            : "Show Detailed Overview "}
        </Button>
        {showDetailedOverview && (
          <Card
            style={{
              width: isMobile ? "100%" : "45%",
              height: "130%",
              margin: "0 auto",
              marginTop: "20px",
            }}
          >
            <Typography variant="body1">

            </Typography>
          </Card>
        )}

        {/* <hr style={{ width: "50%", marginTop: "40px" }} /> */}

        <Typography variant="body2" style={{ marginTop: "40px" }}>
          Technologies Used
        </Typography>

        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: "130%",
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
          <FaReact size="40" style={{ margin: "0 10px" }} />
          <SiRubyonrails size="40" style={{ margin: "0 10px" }} />
          <DiSqllite size="40" style={{ margin: "0 10px" }} />
      

        </Card>
        {/* <hr style={{ width: "50%", marginTop: "40px" }} /> */}

        <Typography variant="body2" style={{ marginTop: "40px" }}>
          Links
        </Typography>
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: "130%",
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
            <a href="https://github.com/levideutsch/yent-connect" target="_blank" rel="noopener noreferrer">
                <FaGithub size="40" style={{ margin: "0 10px", color: "black" }} />
            </a>
            <FaYoutube size="40" style={{ margin: "0 10px", color: "black" }} />
    
        </Card>

        <hr style={{ width: "50%", marginTop: "40px" }} />

        <Typography variant="h5" style={{ marginTop: "40px" }}>
          Photos
        </Typography>

        {/* photos */}

        {/* Welcome Page */}
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: isMobile ? "auto" : "130%", // Auto height for mobile
            margin: "0 auto",
            marginTop: "20px",
            overflow: "hidden", // To hide any overflow
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://github.com/levideutsch/yent-connect/raw/main/readme_photos/welcome-page.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
            alt="Welcome Page"
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginBottom: "40px",
            }}
          >
            Welcome Page
          </Typography>
        </Card>

        {/* Login page */}
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: isMobile ? "auto" : "130%", // Auto height for mobile
            margin: "0 auto",
            marginTop: "20px",
            overflow: "hidden", // To hide any overflow
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://github.com/levideutsch/yent-connect/raw/main/readme_photos/login-page-2.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: !isMobile ? "-40px" : null,
              marginBottom: "40px",
            }}
          >
            Login Page
          </Typography>
        </Card>

        {/* Home page*/}
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: isMobile ? "auto" : "130%", // Auto height for mobile
            margin: "0 auto",
            marginTop: "20px",
            overflow: "hidden", // To hide any overflow
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://github.com/levideutsch/yent-connect/raw/main/readme_photos/home-page-1.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: !isMobile ? "-5px" : null,
              marginBottom: "40px",
            }}
          >
            Home Page
          </Typography>
        </Card>

        {/* Explore page */}
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: isMobile ? "auto" : "130%", // Auto height for mobile
            margin: "0 auto",
            marginTop: "20px",
            overflow: "hidden", // To hide any overflow
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://github.com/levideutsch/yent-connect/raw/main/readme_photos/explore-page.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: !isMobile ? "-5px" : null,
              marginBottom: "40px",
            }}
          >
            Explore Posts From Users You Do Not Follow
          </Typography>
        </Card>

        {/* Likes and comments */}
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: isMobile ? "auto" : "130%", // Auto height for mobile
            margin: "0 auto",
            marginTop: "20px",
            overflow: "hidden", // To hide any overflow
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://github.com/levideutsch/yent-connect/raw/main/readme_photos/liking-post.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: !isMobile ? "-5px" : null,
              marginBottom: "40px",
            }}
          >
            Likes And Comments
          </Typography>
        </Card>

        {/* Create posts*/}
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: isMobile ? "auto" : "130%", // Auto height for mobile
            margin: "0 auto",
            marginTop: "20px",
            overflow: "hidden", // To hide any overflow
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://github.com/levideutsch/yent-connect/raw/main/readme_photos/create-post-page.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: !isMobile ? "-5px" : null,
              marginBottom: "40px",
            }}
          >
            Create Posts
          </Typography>
        </Card>

        {/* View profiles */}
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: isMobile ? "auto" : "130%", // Auto height for mobile
            margin: "0 auto",
            marginTop: "20px",
            overflow: "hidden", // To hide any overflow
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://github.com/levideutsch/yent-connect/raw/main/readme_photos/my-profile-page.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: !isMobile ? "-5px" : null,
              marginBottom: "40px",
            }}
          >
            View Profiles
          </Typography>
        </Card>

        {/* Explore posts */}
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: isMobile ? "auto" : "130%", // Auto height for mobile
            margin: "0 auto",
            marginTop: "20px",
            overflow: "hidden", // To hide any overflow
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://github.com/levideutsch/yent-connect/raw/main/readme_photos/toggle-posts.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: !isMobile ? "-5px" : null,
              marginBottom: "40px",
            }}
          >
            Explore Users Posts
          </Typography>
        </Card>

        {/* Explore users connections */}
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: isMobile ? "auto" : "130%", // Auto height for mobile
            margin: "0 auto",
            marginTop: "20px",
            overflow: "hidden", // To hide any overflow
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://github.com/levideutsch/yent-connect/raw/main/readme_photos/toggle-followers.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: !isMobile ? "-5px" : null,
              marginBottom: "40px",
            }}
          >
            Explore Users Connections
          </Typography>
        </Card>

        {/* Settings page */}
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: isMobile ? "auto" : "130%", // Auto height for mobile
            margin: "0 auto",
            marginTop: "20px",
            overflow: "hidden", // To hide any overflow
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://github.com/levideutsch/yent-connect/raw/main/readme_photos/settings-page.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: !isMobile ? "-5px" : null,
              marginBottom: "40px",
            }}
          >
            Settings Page
          </Typography>
        </Card>

        {/* Click to begin conversation */}
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: isMobile ? "auto" : "130%", // Auto height for mobile
            margin: "0 auto",
            marginTop: "20px",
            overflow: "hidden", // To hide any overflow
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://github.com/levideutsch/yent-connect/raw/main/readme_photos/message-icon.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: !isMobile ? "-5px" : null,
              marginBottom: "40px",
            }}
          >
            Click To Begin Conversation
          </Typography>
        </Card>

        {/* Confirm conversation */}
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: isMobile ? "auto" : "130%", // Auto height for mobile
            margin: "0 auto",
            marginTop: "20px",
            overflow: "hidden", // To hide any overflow
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://github.com/levideutsch/yent-connect/raw/main/readme_photos/message-popup.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: !isMobile ? "-5px" : null,
              marginBottom: "40px",
            }}
          >
            Confirm Conversation
          </Typography>
        </Card>

        {/* Chat room */}
        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: isMobile ? "auto" : "130%", // Auto height for mobile
            margin: "0 auto",
            marginTop: "20px",
            overflow: "hidden", // To hide any overflow
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://github.com/levideutsch/yent-connect/raw/main/readme_photos/chat-page.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: !isMobile ? "-5px" : null,
              marginBottom: "40px",
            }}
          >
            Chat Room
          </Typography>
        </Card>
        
      </Box>
    </ThemeProvider>
  );
}

export default YentConnectProject
