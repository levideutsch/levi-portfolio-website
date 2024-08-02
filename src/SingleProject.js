import React, { useContext } from "react";
import { DataContext } from "./context/Data";
import { useParams } from "react-router-dom";
import { Card, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto-mono"; // Import the font
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useMediaQuery from "@mui/material/useMediaQuery";

import { FaGithub, FaYoutube } from "react-icons/fa";

function SingleProject() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { projectId } = useParams(); // Retrieve the 'id' parameter from the URL
  const { projects } = useContext(DataContext);
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

  const findProject = projects.find((p) => p?.id === parseInt(projectId));
  const youTubeLink = findProject.links?.find((link) => link.youTube)?.youTube;
  const gitHubLink = findProject.links?.find((link) => link.gitHub)?.gitHub;

  

  return (
    <ThemeProvider theme={theme}>
      <Box style={styles}>
        <Button style={{ color: "white" }} onClick={() => navigate("/")}>
          <ArrowBackIosIcon />
        </Button>

        <Typography variant="h4">{findProject?.title}</Typography>
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
          <Typography variant="body1">{findProject?.description}</Typography>
        </Card>
        <hr style={{ width: "50%", marginTop: "40px" }} />

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
          {findProject.languages?.map((l) => l)}
        </Card>
        <hr style={{ width: "50%", marginTop: "40px" }} />

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
          {gitHubLink === "Private" ? (
            <FaGithub size="40" style={{ margin: "0 10px", color: "black" }} />
          ) : (
            <a
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <FaGithub
                size="40"
                style={{ margin: "0 10px", color: "black" }}
              />
            </a>
          )}

          {youTubeLink === "Not Yet Created" ? (
            <FaYoutube size="40" style={{ margin: "0 10px", color: "black" }} />
          ) : (
            <a
              href={youTubeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <FaYoutube
                size="40"
                style={{ margin: "0 10px", color: "black" }}
              />
            </a>
          )}
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default SingleProject;
