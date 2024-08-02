import React, { useContext, useState } from "react";
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
import { FaReact } from "react-icons/fa"; // Import icons
import { SiRubyonrails, SiPostgresql } from "react-icons/si";

// Photos
// import siAdjustCaseQuantity from './photos-for-portfolio/siAdjustCaseQuantity.jpeg';
import siHomePageWithSideBar from "./photos-for-portfolio/siHomePageWithSideBar.jpeg";
import siXlFormat from "./photos-for-portfolio/siXlFormat.jpeg";
import siSingleProductpage from "./photos-for-portfolio/siSingleProductpage.jpeg";
import siAdjustCaseQuantity from "./photos-for-portfolio/siAdjustCaseQuantity.jpeg";
import siViewLogs from "./photos-for-portfolio/siViewLogs.jpeg";
import siSingleProductExpandPurchaseOrders from "./photos-for-portfolio/siSingleProductExpandPurchaseOrders.jpeg";
import siPurchaseOrderHistory from "./photos-for-portfolio/siPurchaseOrderHistory.jpeg";
import siSinglePurchaseOrder from "./photos-for-portfolio/siSinglePurchaseOrder.jpeg";
import siCurrentInvoicesPage from "./photos-for-portfolio/siCurrentInvoicesPage.jpeg";
import siSingleInvoicePage from "./photos-for-portfolio/siSingleInvoicePage.jpeg";
import siAnalyticsPage from "./photos-for-portfolio/siAnalyticsPage.jpeg";
import siInventoryState from "./photos-for-portfolio/siInventoryState.jpeg";
import siProductSearch from "./photos-for-portfolio/siProductSearch.jpeg";

function SingleProject() {
  const [showDetailedOverview, setShowDetailedOverview] = useState(false);
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
            src={siHomePageWithSideBar}
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
            src={siXlFormat}
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
            src={siSingleProductpage}
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
            src={siAdjustCaseQuantity}
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
            src={siViewLogs}
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
            src={siSingleProductExpandPurchaseOrders}
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
            src={siPurchaseOrderHistory}
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
            src={siSinglePurchaseOrder}
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
            src={siCurrentInvoicesPage}
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
            src={siSingleInvoicePage}
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
            src={siAnalyticsPage}
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
            src={siInventoryState}
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
            src={siProductSearch}
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

export default SingleProject;
