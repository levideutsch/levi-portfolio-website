import React, { useContext } from "react";
import { DataContext } from "./context/Data";
import { useParams } from "react-router-dom";
import { Card, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto-mono"; // Import the font
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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

function SingleProject() {
  const { projectId } = useParams(); // Retrieve the 'id' parameter from the URL
  const { projects } = useContext(DataContext);
  const navigate = useNavigate()

  const findProject = projects.find((p) => p?.id === parseInt(projectId));

  function displayProject(projectId) {
    // Assuming projectId is a number, return the corresponding project details
    if (projectId === 1) {
      return (
        <Card style={styles}>
            
            <Button style={{color: "white"}} onClick={() => navigate("/")}>
                <ArrowBackIosIcon />
            </Button>
          <Typography variant="h4">Smart Inventory</Typography>
      

          <Typography variant="h6" style={{marginTop: "20px"}}>Sescription</Typography>
          <Card style={{width: "85%", margin: "0 auto", height: "12vh", padding: "16px"}}>
            <Typography variant="body1" style={{ marginBottom: "8px" }}>
            Smart Inventory is a comprehensive inventory tracking system designed for a wholesale cleaning products company
           </Typography>

           <Typography variant="body1" style={{ marginBottom: "8px" }}>
           It enables the business owner to monitor warehouse stock levels, manage incoming purchase orders, and track sales invoices.

           </Typography>
          
           <Typography variant="body1" style={{ marginBottom: "8px" }}>
           Key features include PDF and photo uploads and email notifications to streamline inventory management and communication.

           </Typography>
           

       
       
         
          </Card>
        </Card>
      );
    } else if (projectId === 2) {
      return (
        <Card style={styles}>
            <Button style={{color: "white"}} onClick={() => navigate("/")}>
                <ArrowBackIosIcon />
            </Button>
          <Typography variant="h4">Yent Connect</Typography>
          Project {projectId}
        </Card>
      );
    } else if (projectId === 3) {
      return (
        <Card style={styles}>
            <Button style={{color: "white"}} onClick={() => navigate("/")}>
                <ArrowBackIosIcon />
            </Button>
          <Typography variant="h4">My Wishlist</Typography>
          Project {projectId}
        </Card>
      );
    } else if (projectId === 4){
        return (
            <Card style={styles}>
                <Button style={{color: "white"}} onClick={() => navigate("/")}>
                <ArrowBackIosIcon />
            </Button>
              <Typography variant="h4">Not Airbnb</Typography>
              Project {projectId}
            </Card>
          );
    } else {
        return (
            <Card style={styles}>
                <Button style={{color: "white"}} onClick={() => navigate("/")}>
                <ArrowBackIosIcon />
            </Button>
                <Typography variant="h4">Project Does Not Exist</Typography>
            </Card>
        )
    }
  }

  // Use displayProject function with projectId
  const projectDetails = displayProject(findProject?.id);

  return <ThemeProvider theme={theme}>{projectDetails}</ThemeProvider>;
}

export default SingleProject;
