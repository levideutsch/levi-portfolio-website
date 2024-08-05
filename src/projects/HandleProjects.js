// REACT IMPORTS
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/Data";

// COMPONENT IMPORTS
import BackToTop from "../BackToTop";

// MUI IMPORTS
import { Card, Typography, Box, Tooltip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto-mono"; // Import the font
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaGithub, FaYoutube } from "react-icons/fa";

function HandleProjects() {
  const [showDetailedOverview, setShowDetailedOverview] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const { id } = useParams();
  const { projects } = useContext(DataContext);

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

  const currentProject = projects?.find(
    (project) => project?.id === parseInt(id)
  );

  return (
    <ThemeProvider theme={theme}>
      <Box style={styles}>
        <Button style={{ color: "white" }} onClick={() => navigate("/")}>
          <ArrowBackIosIcon />
        </Button>

        <Typography variant="h4">{currentProject?.title}</Typography>
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
          <Typography variant="body1">{currentProject?.description}</Typography>
        </Card>
        {/* <hr style={{ width: "50%", marginTop: "40px" }} /> */}

        {currentProject?.detailedOverview !== null ? (
          <>
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
                  {currentProject?.detailedOverview}
                </Typography>
              </Card>
            )}
          </>
        ) : null}

        {/* <hr style={{ width: "50%", marginTop: "40px" }} /> */}

        <Typography variant="body2" style={{ marginTop: "40px" }}>
          Technologies Used
        </Typography>

        <Card
          style={{
            width: isMobile ? "100%" : "45%",
            height: "130%",
            margin: "0 auto",
            marginTop:
              currentProject?.title === "Yent-Connect" ? "60px" : "20px",
          }}
        >
          {currentProject?.languages?.map((language) => language)}
        </Card>

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
          {
          currentProject?.title === "Smart Inventory" ? (
            <Tooltip title="Repository Private. Will Show Upon Request" arrow>
              <span>
                <FaGithub
                  size="40"
                  style={{ margin: "0 10px", color: "black" }}
                />
              </span>
            </Tooltip>
          ) : (
            <a
              href={Object.values(currentProject?.links[0])}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size="40"
                style={{ margin: "0 10px", color: "black" }}
              />
            </a>
          )
          }

          {
            currentProject?.title !== "Not Airbnb" ? (
              <Tooltip title="Coming Soon" arrow>
              <span
              href={
                currentProject?.title !== "Not Airbnb"
                  ? null
                  : Object.values(currentProject?.links[1])
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size="40" style={{ margin: "0 10px", color: "black" }} />
            </span>
            </Tooltip>
            ) : (
              <a
              href={Object.values(currentProject?.links[1])}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size="40" style={{ margin: "0 10px", color: "black" }} />
            </a>
  
            )
          }
        </Card>

        <hr style={{ width: "50%", marginTop: "40px" }} />

        <Typography variant="h5" style={{ marginTop: "40px" }}>
          Photos
        </Typography>

        {currentProject?.images?.map((image) => (
          <Card
            key={image?.url}
            style={{
              width: isMobile ? "100%" : "45%",
              height: isMobile ? "auto" : "130%",
              margin: "0 auto",
              marginTop: "30px",
              overflow: "hidden",
              position: "relative",
              backgroundColor:
                currentProject?.title === "Not Airbnb" ||
                currentProject?.title === "Smart Inventory"
                  ? "white"
                  : "black",
              border: "3px solid white",
            }}
          >
            <img
              src={image?.url}
              style={{
                height: isMobile ? "auto" : "50vh",
                width: isMobile ? "100%" : "100%",
                objectFit: "contain",
                backgroundColor:
                  currentProject?.title === "Not Airbnb" ||
                  currentProject?.title === "Smart Inventory"
                    ? "white"
                    : "black",
              }}
              alt={image?.description}
            />
            <Typography
              style={{
                backgroundColor:
                  currentProject?.title === "Not Airbnb" ||
                  currentProject?.title === "Smart Inventory"
                    ? "white"
                    : "black",
                color:
                  currentProject?.title === "Not Airbnb" ||
                  currentProject?.title === "Smart Inventory"
                    ? "black"
                    : "white",
                position: "absolute",
                bottom: "2px",
                width: "100%",
                textAlign: "center",
              }}
            >
              {image?.description}
            </Typography>
          </Card>
        ))}

        <BackToTop />
      </Box>
    </ThemeProvider>
  );
}

export default HandleProjects;
