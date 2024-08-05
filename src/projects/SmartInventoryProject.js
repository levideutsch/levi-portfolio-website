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
import { SiRubyonrails, SiPostgresql } from "react-icons/si";



function SmartInventoryProject() {
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

        <Typography variant="h4">Smart Inventory</Typography>
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
            Smart Inventory is a comprehensive inventory tracking system
            designed for a wholesale cleaning products company. It enables the
            business owner to monitor warehouse stock levels, manage incoming
            purchase orders, and track sales invoices. Key features include PDF
            and photo uploads and email notifications to streamline inventory
            management and communication.
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
              This sophisticated inventory management application, meticulously
              crafted from scratch, leverages a robust stack of technologies
              including React, React Router, Rails, and PostgreSQL, with email
              notifications facilitated by SendGrid and deployment on Heroku.
              Designed to address the critical issue of inventory visibility,
              the application empowers business owners to efficiently manage
              their inventory by generating and tracking purchase orders and
              invoices. It provides comprehensive analytics, including real-time
              updates on stock levels, financial metrics, and historical sales
              data, ensuring precise control over product quantities, financial
              performance, and profitability. Users can manually adjust product
              data, generate detailed PDFs, and access a messaging system for
              seamless communication regarding purchase orders and invoices.
              This all-in-one solution transforms inventory management into an
              intuitive and actionable process, tailored to meet the needs of
              modern businesses.
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
          <SiPostgresql size="40" style={{ margin: "0 10px" }} />
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
       
            <FaGithub size="40" style={{ margin: "0 10px", color: "black" }} />
        

        
            <FaYoutube size="40" style={{ margin: "0 10px", color: "black" }} />
    
        </Card>

        <hr style={{ width: "50%", marginTop: "40px" }} />

        <Typography variant="h5" style={{ marginTop: "40px" }}>
          Photos
        </Typography>

        {/* photos */}

        {/* Home page with side bar */}
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
            src="https://i.imgur.com/5br0o6N.png"
            style={{
              height: isMobile ? "auto" : "50vh", // Adjust height for mobile
              width: isMobile ? "100%" : "100%",
              objectFit: "contain", // Ensures the image fits within the container without stretching
              backgroundColor: "black",
            }}
            alt="Main Home Page With Side Navigation Bar"
          />
          <Typography
            style={{
              backgroundColor: "black",
              color: "white",
              marginBottom: "40px",
            }}
          >
            Main Home Page With Side Navigation Bar
          </Typography>
        </Card>

        {/* Home page XL format */}
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
            src="https://i.imgur.com/Iu1HTGC.png"
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
            Main Home Page Table View
          </Typography>
        </Card>

        {/* Single product page*/}
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
            src="https://i.imgur.com/Jlf8rlw.png"
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
            Single Product Page
          </Typography>
        </Card>

        {/* Case adjustment page*/}
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
            src="https://i.imgur.com/mVCIMYJ.png"
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
            Manually Adjust Products Inventory State
          </Typography>
        </Card>

        {/* Transaction history*/}
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
            src="https://i.imgur.com/MhraHDC.png"
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
            View Products Transaction History
          </Typography>
        </Card>

        {/* Individual product PO & invoices*/}
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
            src="https://i.imgur.com/uowMQuB.png"
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
            View Products Individual Purchase Orders And Invoices
          </Typography>
        </Card>

        {/* Purchase order history */}
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
            src="https://i.imgur.com/yXrJwQi.png"
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
            All Completed Purchase Orders
          </Typography>
        </Card>

        {/* Single purchase order */}
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
            src="https://i.imgur.com/cS5bIxX.png"
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
            Single Purchase Order
          </Typography>
        </Card>

        {/* Current invoices */}
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
            src="https://i.imgur.com/Gj2I82k.png"
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
            All Current Invoices
          </Typography>
        </Card>

        {/* Single invoice */}
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
            src="https://i.imgur.com/cjkLlkh.png"
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
            Single Invoice
          </Typography>
        </Card>

        {/* Analytics page */}
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
            src="https://i.imgur.com/50ufd26.png"
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
            Analytics To View All Data Related To All Products
          </Typography>
        </Card>

        {/* Inventory state */}
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
            src="https://i.imgur.com/C7GfLqS.png"
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
            View Inventory State
          </Typography>
        </Card>

        {/* Product search */}
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
            src="https://i.imgur.com/6lA2CHt.png"
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
            Find Product By Name
          </Typography>
        </Card>
        
      </Box>
    </ThemeProvider>
  );
}

export default SmartInventoryProject;
